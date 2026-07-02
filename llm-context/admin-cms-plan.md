# Admin CMS Implementation Plan

**Project:** PURPL-Purdue.github.io  
**Feature:** Browser-based admin interface for editing site content  
**Target audience:** LLM implementing this feature  
**Last updated:** April 2026

---

## Goal

Allow club admins (non-developers) to log in with a username/password, edit `src/json/*.js` files and upload images to `public/images/`, and submit changes as a GitHub PR into `master` for webmaster review.

---

## Architecture

Two components: a React admin UI (lives in this repo, served by GitHub Pages) and a Cloudflare Worker proxy (separate deployment, pure API). Admins never interact with GitHub directly — the proxy holds the GitHub PAT and makes all API calls.

```
┌─────────────────────────────────────────┐
│         GitHub Pages (static)           │
│   React SPA                             │
│   ├── /#/admin          (login)         │
│   └── /#/admin/dashboard                │
│       ├── Monaco JS file editors        │
│       ├── Image uploader                │
│       └── Submit PR button             │
└───────────────┬─────────────────────────┘
                │ HTTPS + JWT
                ▼
┌─────────────────────────────────────────┐
│      Auth Proxy (Cloudflare Worker)     │
│  POST /login   GET /files/:path         │
│  POST /pr      POST /images             │
└───────────────┬─────────────────────────┘
                │ GitHub REST API (PAT)
                ▼
      PURPL-Purdue/PURPL-Purdue.github.io
```

### Request Flow
```
Admin navigates to https://purpl-purdue.github.io/#/admin
         │
         ▼
GitHub Pages serves index.html; React renders AdminLogin.js
         │  Admin submits username + password
         │  fetch(".workers.dev/login", { body: creds })
         ▼
Cloudflare Worker validates credentials, returns JWT
         │
         ▼
React stores JWT in localStorage, navigates to /#/admin/dashboard
         │  Admin edits a file
         │  fetch(".workers.dev/files/src%2Fjson%2Fpress.js")
         ▼
Cloudflare Worker calls GitHub API, returns file content
         │
         ▼
Admin edits in Monaco editor (changes staged locally in React state)
         │  Admin clicks "Submit as Pull Request"
         │  fetch(".workers.dev/pr", { body: stagedChanges })
         ▼
Worker: creates branch → commits files → opens PR on GitHub
         │
         ▼
React shows PR link. Webmaster reviews and merges on GitHub.
```

---

## Component 1: Auth Proxy (Cloudflare Worker)

**Stack:** Cloudflare Workers + Hono framework + bcryptjs + hono/jwt

**Secrets (set via `wrangler secret put`):**
```
GITHUB_PAT         — fine-grained PAT (contents + PRs, this repo only)
GITHUB_OWNER       = PURPL-Purdue
GITHUB_REPO        = PURPL-Purdue.github.io
GITHUB_BASE_BRANCH = master
JWT_SECRET         — random 32+ byte string
ALLOWED_ORIGIN     = https://purpl-purdue.github.io
```

**Admin credentials:** Stored in Cloudflare KV namespace `ADMIN_USERS` as `username → { passwordHash }`. Webmaster manages via Cloudflare dashboard or `wrangler kv` CLI.

**Endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| POST | `/login` | Validate bcrypt credentials, return signed JWT (24h) |
| GET | `/files/:encodedPath` | Read file from repo; returns `{ content, sha }` |
| POST | `/pr` | Create branch, commit all staged changes, open PR |
| POST | `/images` | Accept `{ filename, folder, contentBase64 }`, staged until PR |
| GET | `/pr` | List open PRs with `head.ref` starting with `admin/` |

**`POST /pr` flow:**
1. `GET /repos/{owner}/{repo}/git/ref/heads/master` → get HEAD SHA
2. `POST /repos/{owner}/{repo}/git/refs` → create branch `admin/update-{timestamp}`
3. For each changed file: `PUT /repos/{owner}/{repo}/contents/{path}` with branch, content (base64), and existing file SHA
4. `POST /repos/{owner}/{repo}/pulls` → open PR targeting `master`

**CORS:** Restrict to `ALLOWED_ORIGIN` only. Handle OPTIONS preflight.

---

## Component 2: Admin Frontend (React)

**New files:**
```
src/pages/admin/
├── AdminLogin.js       # username/password form → POST /login → store JWT
├── AdminDashboard.js   # auth guard, tab layout: Files | Images | PRs
├── FileEditor.js       # Monaco editor (language: javascript), stage changes locally
└── ImageUploader.js    # drag-and-drop, base64 via FileReader, stage locally
```

**Route registration** in `src/components/navbar/Router.js` (do NOT add to `src/json/routing.js` — keep out of public nav):
```jsx
{ path: "admin", element: <AdminLogin /> },
{ path: "admin/dashboard", element: <AdminDashboard /> },
```

**Auth:** JWT stored in `localStorage` key `purpl_admin_token`. Dashboard checks expiry on mount; redirects to `/admin` if missing or expired.

**Proxy URL:** Set in `.env` as `REACT_APP_ADMIN_PROXY_URL`. Safe to include in build — not a secret.

**Submit PR flow:** All file edits and image uploads are staged in React state. "Submit PR" opens a modal for title/description, then sends everything to `POST /pr` in one request.

---

## Editable Files

| File | Typical edits |
|------|--------------|
| `src/json/press.js` | Add/remove press articles and publications |
| `src/json/sponsors.js` | Add/remove sponsors, update links/logos |
| `src/json/landing.js` | Update quick stats (member count, etc.) |
| `src/json/team.js` | Add/remove members, update titles |
| `src/json/projects.js` | Update project descriptions and specs |
| `src/json/facilities.js` | Update facility specs |
| `src/json/contact.js` | Update contact info |
| `src/json/donate.js` | Update donation info |

**Do not expose:** `routing.js` (breaks nav), `gallery.js` (tightly coupled to other files).

---

## Key Caveats

- **JS modules, not JSON.** All `src/json/` files use ES module syntax and some use helper functions (e.g., `member()` in `team.js`). Use Monaco as a raw JS editor — do not attempt JSON parsing.
- **gallery.js imports.** `landing.js` and `projects.js` import named exports from `gallery.js` by key. Incorrect edits to either can break these references silently.
- **Image + reference are two steps.** Upload image first, note the path, then edit the JS file to reference it.
- **Cloudflare free tier:** 100k requests/day, 10ms CPU/request. GitHub API calls may occasionally hit the CPU limit — upgrade to Workers Paid ($5/mo) if needed.
- **PAT expiry.** The fine-grained PAT must be renewed periodically (max 1 year). Note the expiry date.
