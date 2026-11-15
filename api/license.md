---
title: License
outline: [2, 3]
---

# License

Panel license status.

<p class="api-count">4 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/license` {#get-api-license}

**Get License**

Read the panel's license state: status, days left, limits and usage.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `LicenseState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` |  |
| `locked` | `boolean` |  |
| `customer` | `string` |  |
| `expires` | `integer` |  |
| `activated` | `integer` |  |
| `days_left` | `integer` |  |
| `grace_until` | `integer` |  |
| `limits` | `object` |  |
| `usage` | `object` |  |
| `message` | `string` |  |
| `message_at` | `integer` |  |
| `key` | `string` |  |
| `install_id` | `string` |  |
| `last_check` | `integer` |  |
| `last_attempt` | `integer` |  |
| `last_error` | `string` |  |
| `has_key` | `boolean` |  |

</details>

```json
{
  "status": "string",
  "locked": false,
  "customer": "",
  "expires": 0,
  "activated": 0,
  "days_left": 0,
  "grace_until": 0,
  "limits": {},
  "usage": {},
  "message": "",
  "message_at": 0,
  "key": "string",
  "install_id": "string",
  "last_check": 0,
  "last_attempt": 0,
  "last_error": "string",
  "has_key": false
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/license' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/license/activate` {#post-api-license-activate}

**Activate**

bind a license key to this server (an empty key: the one saved here again)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `ActivateBody`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | no |  |

```json
{
  "key": ""
}
```

**Response** `200` Successful Response · `LicenseState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` |  |
| `locked` | `boolean` |  |
| `customer` | `string` |  |
| `expires` | `integer` |  |
| `activated` | `integer` |  |
| `days_left` | `integer` |  |
| `grace_until` | `integer` |  |
| `limits` | `object` |  |
| `usage` | `object` |  |
| `message` | `string` |  |
| `message_at` | `integer` |  |
| `key` | `string` |  |
| `install_id` | `string` |  |
| `last_check` | `integer` |  |
| `last_attempt` | `integer` |  |
| `last_error` | `string` |  |
| `has_key` | `boolean` |  |

</details>

```json
{
  "status": "string",
  "locked": false,
  "customer": "",
  "expires": 0,
  "activated": 0,
  "days_left": 0,
  "grace_until": 0,
  "limits": {},
  "usage": {},
  "message": "",
  "message_at": 0,
  "key": "string",
  "install_id": "string",
  "last_check": 0,
  "last_attempt": 0,
  "last_error": "string",
  "has_key": false
}
```

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/license/activate' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"key": ""}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/license/check` {#post-api-license-check}

**Check Now**

ask the license server now (after a renewal, a change of limits)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `LicenseState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `status` | `string` |  |
| `locked` | `boolean` |  |
| `customer` | `string` |  |
| `expires` | `integer` |  |
| `activated` | `integer` |  |
| `days_left` | `integer` |  |
| `grace_until` | `integer` |  |
| `limits` | `object` |  |
| `usage` | `object` |  |
| `message` | `string` |  |
| `message_at` | `integer` |  |
| `key` | `string` |  |
| `install_id` | `string` |  |
| `last_check` | `integer` |  |
| `last_attempt` | `integer` |  |
| `last_error` | `string` |  |
| `has_key` | `boolean` |  |

</details>

```json
{
  "status": "string",
  "locked": false,
  "customer": "",
  "expires": 0,
  "activated": 0,
  "days_left": 0,
  "grace_until": 0,
  "limits": {},
  "usage": {},
  "message": "",
  "message_at": 0,
  "key": "string",
  "install_id": "string",
  "last_check": 0,
  "last_attempt": 0,
  "last_error": "string",
  "has_key": false
}
```

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/license/check' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/license/dismiss-message` {#post-api-license-dismiss-message}

**Dismiss Message**

any admin can dismiss the seller's message once they've read it

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/license/dismiss-message' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
