# CMS Worker API Reference

**Base URL:** configurable — set to the deployed Cloudflare Worker URL in the client.

**CORS:** the worker allows requests from the origin configured in `ALLOWED_ORIGIN`. All routes are under `/api/*`.

---

## Authentication

All endpoints except `POST /api/login` require a JWT in the `Authorization` header:

```
Authorization: Bearer <token>
```

Tokens are HS256-signed, expire after 24 hours, and are returned by the login endpoint. Store in `localStorage` under the key `purpl_admin_token`.

Responses for missing or invalid tokens: `401 { "error": "..." }`.

---

## Path encoding

Route parameters that contain slashes must use `%2F` in place of `/` — Hono's `:param` segment stops at a literal slash.

```
src/json/press.json  →  src%2Fjson%2Fpress.json
src/json             →  src%2Fjson
```

---

## Endpoints

### POST /api/login

Authenticate with admin credentials. No JWT required.

**Request body**
```ts
{
  username: string;
  password: string;
}
```

**200 response**
```ts
{
  token: string;     // JWT — store this and send as Bearer token on all other requests
  expiresIn: 86400;  // seconds (24 h)
}
```

**Error responses**
| Status | Meaning |
|--------|---------|
| 400 | Malformed request body |
| 401 | Wrong username or password |

---

### GET /api/directory/:dir

Walk to a directory in the repo and return its full contents as a nested tree. Uses the target branch configured in the worker.

**URL parameter**
- `dir` — directory path relative to repo root, slashes encoded as `%2F` (e.g., `src%2Fjson`)

**200 response**
```ts
{
  tree: Record<string, TreeNode>;
  truncated: boolean;  // true if GitHub capped the response at 100 000 entries
}
```

`TreeNode` is one of:
```ts
// File
{ type: "blob"; sha: string; size: number }

// Subdirectory
{ type: "tree"; children: Record<string, TreeNode> }
```

Example for `src%2Fjson`:
```json
{
  "tree": {
    "press.json":  { "type": "blob", "sha": "abc123", "size": 412 },
    "events.json": { "type": "blob", "sha": "def456", "size": 890 },
    "archive": {
      "type": "tree",
      "children": {
        "2023.json": { "type": "blob", "sha": "ghi789", "size": 204 }
      }
    }
  },
  "truncated": false
}
```

**Error responses**
| Status | Meaning |
|--------|---------|
| 401 | Missing or invalid JWT |
| 404 | A path segment was not found in the repo |
| 500 | GitHub API error |

---

### GET /api/files/:filePath

Fetch the raw content of a single file.

**URL parameter**
- `filePath` — file path relative to repo root, slashes encoded as `%2F` (e.g., `src%2Fjson%2Fpress.json`)

**200 response**
```ts
{
  content: string;  // base64-encoded file content (as returned by GitHub Contents API)
  sha: string;      // current file SHA — must be passed back unchanged when submitting a PR
}
```

Decode content before displaying to the user:
```js
const text = atob(content.replace(/\n/g, ""));
```

Re-encode before sending to `POST /api/pr`:
```js
const encoded = btoa(editedText);
```

**Error responses**
| Status | Meaning |
|--------|---------|
| 401 | Missing or invalid JWT |
| 404 | File not found in repo |
| 500 | GitHub API error |

---

### POST /api/pr

Commit one or more edited files atomically and open a draft pull request targeting the configured base branch.

The worker re-fetches each file's current SHA at submit time. If any file was modified on the repo after the client loaded it, the whole request is rejected with 409 — no partial commit is made.

**Request body**
```ts
{
  title: string;         // PR title (also used as the commit message)
  description?: string;  // optional PR body text
  files: Array<{
    path: string;    // file path relative to repo root — plain slashes, NOT encoded
    content: string; // full file content, base64-encoded
    sha: string;     // the sha returned by GET /api/files when the file was loaded
  }>;
}
```

Note: `files` must contain at least one entry.

**200 response**
```ts
{
  prUrl: string;   // URL of the opened GitHub pull request
  branch: string;  // branch created, e.g. "admin/update-1714000000000"
}
```

**Error responses**
| Status | Meaning |
|--------|---------|
| 400 | Malformed request body or missing required fields |
| 401 | Missing or invalid JWT |
| 409 | One or more files were modified on the repo since they were loaded — reload and re-edit |
| 500 | GitHub API error |

---

## Planned endpoints (not yet implemented)

### GET /api/pr *(coming)*

List open pull requests whose branch starts with `admin/`. Intended for a dashboard view that links to in-flight submissions.

Expected response shape:
```ts
{
  prs: Array<{
    title: string;
    prUrl: string;
    branch: string;
    createdAt: string; // ISO 8601
  }>;
}
```

### POST /api/images *(coming)*

Upload an image into the repo as part of the same Git Data API flow used by `POST /api/pr`. Exact request shape TBD — likely:
```ts
{
  filename: string;
  folder: string;       // destination directory in the repo
  contentBase64: string;
}
```
