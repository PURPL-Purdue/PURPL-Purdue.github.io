# Admin CMS Worker — Progress & Next Steps

**Last updated:** May 2026

---

## What's been built

### Endpoints

| Method | Route | Status |
|--------|-------|--------|
| POST | `/api/login` | Done |
| GET | `/api/files/:filePath` | Done |
| GET | `/api/directory/:dir` | Done |
| GET | `/api/directory-list/:sha` | Done |
| POST | `/api/pr` | Done |
| POST | `/api/images` | Not started |
| GET | `/api/pr` | Not started |

### Auth (`POST /api/login`)
Validates username/password against bcrypt-hashed credentials stored in Cloudflare KV (`ADMIN_USERNAME`, `ADMIN_PASSWORD`). Returns a signed HS256 JWT (24h expiry). All subsequent endpoints validate this JWT from the `Authorization: Bearer` header.

### File read (`GET /api/files/:filePath`)
Fetches a file from the repo via the GitHub Contents API. Returns `{ content, sha }` where `content` is base64-encoded (as returned by GitHub). The file SHA is needed later when committing edits.

Paths use `%2F` encoding (e.g., `src%2Fjson%2Fpress.json`) since Hono's `:param` stops at a real `/`.

### Directory resolution (`GET /api/directory/:dir`)
Given a path like `src%2Fjson`, resolves it against `GITHUB_TARGET_BRANCH` using the Git Trees API:
1. `GET /git/refs/heads/{branch}` → commit SHA
2. `GET /git/commits/{sha}` → root tree SHA
3. Walk one tree per path segment until the target is reached

Returns `{ sha }` — the git tree SHA of the target directory.

### Directory listing (`GET /api/directory-list/:sha`)
Given a tree SHA (e.g., from `DirectoryFetch`), fetches that tree and returns the filenames of all blob entries: `{ filePaths: string[] }`.

The two directory endpoints are intentionally split so the SHA can be cached or reused without re-walking the path.

### PR submission (`POST /api/pr`)
Uses the Git Data API for atomic commits:
1. Re-fetches each file's current SHA via `GET /contents/{path}` (stale-file detection)
2. `GET /git/refs/heads/master` → HEAD commit SHA
3. `GET /git/commits/{sha}` → root tree SHA
4. `POST /git/blobs` for each changed file (base64 content)
5. `POST /git/trees` with `base_tree` + new blobs
6. `POST /git/commits` with new tree + parent commit
7. `POST /git/refs` → creates branch `admin/update-{timestamp}`
8. `POST /pulls` → opens PR targeting master

Returns `{ prUrl }`.

### Frontend (`src/pages/admin/`)
- `AdminLogin.js` — credentials form, stores JWT in `localStorage`
- `AdminDashboard.js` — auth guard, file sidebar, Monaco editor area, Submit PR button + modal
- `FileEditor.js` — Monaco editor, fetches file on first open, propagates edits to parent

Submit PR modal: collects title + description, base64-encodes staged edits, calls `POST /api/pr`, shows the returned PR URL on success. Clears dirty state after a successful submission.

Routes registered in `src/components/navbar/Router.js` as top-level (outside `App`) so they render without the site navbar.

### Tests (`src/index.test.ts`)
Vitest unit tests using `app.fetch()` directly with a mocked env (no HTTP server or Workers runtime needed). GitHub API calls are stubbed via `vi.stubGlobal("fetch", ...)`.

Covers:
- Incorrect credentials (wrong password, wrong username) → 401
- Full happy path: login → directory SHA → directory list → file fetch

---

## Deviations from the original plan

- Routes are prefixed `/api/` (e.g., `/api/login` not `/login`) — consistent with chanfana/OpenAPI setup.
- Directory lookup is split into two routes rather than one, allowing SHA reuse.
- `GITHUB_TARGET_BRANCH` is used as the env var name (matches `wrangler.jsonc`); the plan referred to `GITHUB_BASE_BRANCH`.

---

## Next steps

### 1. `GET /api/pr` — List open admin PRs

List open PRs whose `head.ref` starts with `admin/`. Lets the frontend show in-flight submissions and link to them on GitHub. Wire up the currently-disabled "prs" tab in `AdminDashboard`.

### 2. `POST /api/images` — Image upload

Accept `{ filename, folder, contentBase64 }`, write the file to the repo by including it as an additional blob in the Git Data API tree (reuse the PR flow). Also build `ImageUploader.js` (`src/pages/admin/`) — drag-and-drop, base64 via `FileReader`, staged locally until PR submission.

### 3. CORS

`ALLOWED_ORIGIN` is in `wrangler.jsonc` vars and `Bindings` type but not yet enforced. Add a Hono middleware that:
- Checks `Origin` header against `c.env.ALLOWED_ORIGIN`
- Handles `OPTIONS` preflight with correct `Access-Control-Allow-*` headers

---

## Open questions

- **Draft PRs?** The evaluation recommends `"draft": true` on `POST /pulls`. Confirm with the webmaster whether draft PRs fit their review workflow.
- **Stale file detection:** The PR flow re-fetches SHAs at submit time. Should the frontend also warn the admin before they start editing if the file was recently touched by someone else?
- **KV credential management:** Currently the webmaster must set `ADMIN_USERNAME` and `ADMIN_PASSWORD` via `wrangler kv` CLI or the Cloudflare dashboard. A small admin-bootstrap script would reduce friction.
