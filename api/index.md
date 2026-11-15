---
title: API overview
---

# API overview

Everything the panel does is available over a REST API. The reference is **generated from the running panel** at every release, so each endpoint, field and permission matches the version you run.

<div class="cards">
<div class="card"><b>Base URL</b><span><code>https://YOUR-PANEL:PORT/api</code> (the same address as the dashboard)</span></div>
<div class="card"><b>Format</b><span>JSON in, JSON out. Login uses a form body.</span></div>
<div class="card"><b>Auth</b><span>Bearer token from <code>POST /api/admin/token</code></span></div>
<div class="card"><b>Spec</b><span><a href="/openapi.json">openapi.json</a> for Postman, Insomnia, Swagger or Redoc</span></div>
</div>

## Quick start

```bash
# 1. log in and keep the token
TOKEN=$(curl -s -X POST https://YOUR-PANEL/api/admin/token \
  -d 'username=ADMIN&password=PASSWORD' | python3 -c 'import sys,json;print(json.load(sys.stdin)["access_token"])')

# 2. call anything
curl -s https://YOUR-PANEL/api/system -H "Authorization: Bearer $TOKEN"

# 3. create a user
curl -s -X POST https://YOUR-PANEL/api/user \
  -H "Authorization: Bearer $TOKEN" -H 'Content-Type: application/json' \
  -d '{"username":"demo_user","proxies":{"vless":{}},"inbounds":{"vless":["VLESS TCP REALITY"]},"data_limit":53687091200,"expire":0}'
```

## Who can call what

Each endpoint page shows a badge:

| Badge | Meaning |
| --- | --- |
| <span class="b b-pub">Public</span> | No token needed (login, subscription links). |
| <span class="b b-auth">Any admin</span> | Any signed-in admin. Resellers only see and change their own users. |
| <span class="b b-sudo">Sudo admin only</span> | Panel-wide settings: nodes, cores, settings, backups, statistics. |

Read [Authentication & errors](/api/auth) next, then pick an area from the sidebar.
