---
title: Authentication & errors
---

# Authentication & errors

## Get a token

```bash
curl -X POST https://YOUR-PANEL/api/admin/token \
  -d 'username=ADMIN&password=PASSWORD'
```

```json
{ "access_token": "eyJhbGciOi...", "token_type": "bearer" }
```

Send it on every other call:

```
Authorization: Bearer <access_token>
```

Tokens expire. When a call returns `401`, log in again. Do not log in on every request: a wrong password is counted by the brute-force guard.

## Login protection

- 5 failed logins for the same address and username, or 20 failed logins from one address, within 10 minutes return **429** with a `Retry-After` header.
- A blocked address (see **Blocked IPs** in the panel and [Blocked IPs API](/api/blocked-ips)) gets **403**.

## Status codes

| Code | Meaning |
| --- | --- |
| `200` | Success. |
| `400` | The request is not valid (the `detail` field says why). |
| `401` | Missing or expired token. |
| `403` | Your role may not do this (for example a reseller calling a sudo endpoint). |
| `404` | Not found. |
| `409` | Conflict, for example a name that already exists. |
| `422` | The body or parameters failed validation. `detail` lists each field. |
| `429` | Too many requests. Wait `Retry-After` seconds. |

Errors are JSON: `{ "detail": "..." }`.

## Subscription links

`/sub/<token>` and its variants are public and use the token in the URL. They return the configuration for the client app, not JSON. Fetches can be counted and rate-limited per IP and per user, see [Subscription statistics](/guide/sub-stats).

## Machine-readable spec

Download [openapi.json](/openapi.json). On the server you can also enable interactive Swagger UI by starting the panel with `DOCS=True`, then open `/docs`.
