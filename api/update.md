---
title: Updates
outline: [2, 3]
---

# Updates

Check and apply panel updates.

<p class="api-count">3 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/update` {#get-api-update}

**Update State**

the panel version, the latest one, and how an update goes

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `UpdateState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `current` | `string` |  |
| `installed` | `boolean` |  |
| `state` | `string` |  |
| `step` | `string` |  |
| `latest` | `string` |  |
| `available` | `boolean` |  |
| `checked_at` | `integer` |  |
| `started_at` | `integer` |  |
| `finished_at` | `integer` |  |
| `error` | `string` |  |
| `pending` | `string` |  |
| `log` | `string[]` |  |
| `news` | `Release[]` |  |
| `history` | `Release[]` |  |

</details>

```json
{
  "current": "string",
  "installed": false,
  "state": "idle",
  "step": "",
  "latest": "string",
  "available": false,
  "checked_at": 0,
  "started_at": 0,
  "finished_at": 0,
  "error": "",
  "pending": "string",
  "log": [],
  "news": [],
  "history": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/update' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/update` {#post-api-update}

**Start Update**

update the panel to the latest version (backup first, the old version back if it fails)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `UpdateState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `current` | `string` |  |
| `installed` | `boolean` |  |
| `state` | `string` |  |
| `step` | `string` |  |
| `latest` | `string` |  |
| `available` | `boolean` |  |
| `checked_at` | `integer` |  |
| `started_at` | `integer` |  |
| `finished_at` | `integer` |  |
| `error` | `string` |  |
| `pending` | `string` |  |
| `log` | `string[]` |  |
| `news` | `Release[]` |  |
| `history` | `Release[]` |  |

</details>

```json
{
  "current": "string",
  "installed": false,
  "state": "idle",
  "step": "",
  "latest": "string",
  "available": false,
  "checked_at": 0,
  "started_at": 0,
  "finished_at": 0,
  "error": "",
  "pending": "string",
  "log": [],
  "news": [],
  "history": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/update' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/update/check` {#post-api-update-check}

**Check For Update**

ask the updater to look for a new version

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `UpdateState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `current` | `string` |  |
| `installed` | `boolean` |  |
| `state` | `string` |  |
| `step` | `string` |  |
| `latest` | `string` |  |
| `available` | `boolean` |  |
| `checked_at` | `integer` |  |
| `started_at` | `integer` |  |
| `finished_at` | `integer` |  |
| `error` | `string` |  |
| `pending` | `string` |  |
| `log` | `string[]` |  |
| `news` | `Release[]` |  |
| `history` | `Release[]` |  |

</details>

```json
{
  "current": "string",
  "installed": false,
  "state": "idle",
  "step": "",
  "latest": "string",
  "available": false,
  "checked_at": 0,
  "started_at": 0,
  "finished_at": 0,
  "error": "",
  "pending": "string",
  "log": [],
  "news": [],
  "history": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/update/check' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
