---
title: Admins
outline: [2, 3]
---

# Admins

Admin accounts, login and tokens.

<p class="api-count">10 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/admin` {#get-api-admin}

**Get Current Admin**

Retrieve the current authenticated admin.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `Admin`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `is_sudo` | `boolean` |  |
| `telegram_id` | `integer` |  |
| `discord_webhook` | `string` |  |
| `users_usage` | `integer` |  |
| `users_limit` | `integer` | max users, null/0 means unlimited |
| `traffic_limit` | `integer` | max data limit (bytes) the admin can hand out in total, null/0 means unlimited |
| `expire_date` | `string (date-time)` |  |
| `max_user_ip_limit` | `integer` | cap for each user's ip_limit |
| `max_user_hwid_limit` | `integer` | cap for each user's hwid_limit |
| `host_groups` | `string[]` | host groups of the admin's users, empty means all |
| `can_copy_configs` | `boolean` |  |
| `can_edit_limits` | `boolean` |  |
| `users_created` | `integer` |  |
| `users_deleted` | `integer` |  |
| `total_users` | `integer` |  |

</details>

```json
{
  "username": "string",
  "is_sudo": false,
  "telegram_id": 0,
  "discord_webhook": "string",
  "users_usage": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "expire_date": "2026-01-01T00:00:00Z",
  "max_user_ip_limit": 0,
  "max_user_hwid_limit": 0,
  "host_groups": [
    "string"
  ],
  "can_copy_configs": true,
  "can_edit_limits": true,
  "users_created": 0,
  "users_deleted": 0,
  "total_users": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/admin' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/admin` {#post-api-admin}

**Create Admin**

Create a new admin (sudo or reseller). Set `username`, `password` and the limits: `users_limit`, `traffic_limit`, `expire_date`, `max_user_ip_limit`, `max_user_hwid_limit`, `host_groups`, `can_copy_configs` and `can_edit_limits`.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `AdminCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | yes |  |
| `is_sudo` | `boolean` | yes |  |
| `telegram_id` | `integer` | no |  |
| `discord_webhook` | `string` | no |  |
| `users_usage` | `integer` | no |  |
| `users_limit` | `integer` | no | max users, null/0 means unlimited |
| `traffic_limit` | `integer` | no | max data limit (bytes) the admin can hand out in total, null/0 means unlimited |
| `expire_date` | `string (date-time)` | no |  |
| `max_user_ip_limit` | `integer` | no | cap for each user's ip_limit |
| `max_user_hwid_limit` | `integer` | no | cap for each user's hwid_limit |
| `host_groups` | `string[]` | no | host groups of the admin's users, empty means all |
| `can_copy_configs` | `boolean` | no | Default: `true`. |
| `can_edit_limits` | `boolean` | no | Default: `true`. |
| `users_created` | `integer` | no | Default: `0`. |
| `users_deleted` | `integer` | no | Default: `0`. |
| `total_users` | `integer` | no | Default: `0`. |
| `password` | `string` | yes |  |

```json
{
  "username": "string",
  "is_sudo": false,
  "telegram_id": 0,
  "discord_webhook": "string",
  "users_usage": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "expire_date": "2026-01-01T00:00:00Z",
  "max_user_ip_limit": 0,
  "max_user_hwid_limit": 0,
  "host_groups": [
    "string"
  ],
  "can_copy_configs": true,
  "can_edit_limits": true,
  "users_created": 0,
  "users_deleted": 0,
  "total_users": 0,
  "password": "string"
}
```

**Response** `200` Successful Response · `Admin`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `is_sudo` | `boolean` |  |
| `telegram_id` | `integer` |  |
| `discord_webhook` | `string` |  |
| `users_usage` | `integer` |  |
| `users_limit` | `integer` | max users, null/0 means unlimited |
| `traffic_limit` | `integer` | max data limit (bytes) the admin can hand out in total, null/0 means unlimited |
| `expire_date` | `string (date-time)` |  |
| `max_user_ip_limit` | `integer` | cap for each user's ip_limit |
| `max_user_hwid_limit` | `integer` | cap for each user's hwid_limit |
| `host_groups` | `string[]` | host groups of the admin's users, empty means all |
| `can_copy_configs` | `boolean` |  |
| `can_edit_limits` | `boolean` |  |
| `users_created` | `integer` |  |
| `users_deleted` | `integer` |  |
| `total_users` | `integer` |  |

</details>

```json
{
  "username": "string",
  "is_sudo": false,
  "telegram_id": 0,
  "discord_webhook": "string",
  "users_usage": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "expire_date": "2026-01-01T00:00:00Z",
  "max_user_ip_limit": 0,
  "max_user_hwid_limit": 0,
  "host_groups": [
    "string"
  ],
  "can_copy_configs": true,
  "can_edit_limits": true,
  "users_created": 0,
  "users_deleted": 0,
  "total_users": 0
}
```

Errors: `401` Unauthorized, `403` Forbidden, `409` Conflict

```bash
curl -X POST 'https://YOUR-PANEL/api/admin' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"username": "string", "is_sudo": false, "telegram_id": 0, "discord_webhook": "string", "users_usage": 0, "users_limit": 0, "traffic_limit": 0, "expire_date": "2026-01-01T00:00:00Z", "max_user_ip_limit": 0, "max_user_hwid_limit": 0, "host_groups": ["string"], "can_copy_configs": true, "can_edit_limits": true, "users_created": 0, "users_deleted": 0, "total_users": 0, "password": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/admin/token` {#post-api-admin-token}

**Admin Token**

Authenticate an admin and issue a token.

<p class="badges"><span class="b b-pub">Public</span></p>

**Request body** `application/x-www-form-urlencoded` · `Body_admin_token_api_admin_token_post`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `grant_type` | `string` | no |  |
| `username` | `string` | yes |  |
| `password` | `string (password)` | yes |  |
| `scope` | `string` | no |  |
| `client_id` | `string` | no |  |
| `client_secret` | `string` | no |  |

**Response** `200` Successful Response · `Token`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` |  |
| `token_type` | `string` |  |

</details>

```json
{
  "access_token": "string",
  "token_type": "bearer"
}
```

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/admin/token' \
  -d 'username=ADMIN&password=PASSWORD'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/admin/usage/reset/{username}` {#post-api-admin-usage-reset-username}

**Reset Admin Usage**

Resets usage of admin.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `Admin`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `is_sudo` | `boolean` |  |
| `telegram_id` | `integer` |  |
| `discord_webhook` | `string` |  |
| `users_usage` | `integer` |  |
| `users_limit` | `integer` | max users, null/0 means unlimited |
| `traffic_limit` | `integer` | max data limit (bytes) the admin can hand out in total, null/0 means unlimited |
| `expire_date` | `string (date-time)` |  |
| `max_user_ip_limit` | `integer` | cap for each user's ip_limit |
| `max_user_hwid_limit` | `integer` | cap for each user's hwid_limit |
| `host_groups` | `string[]` | host groups of the admin's users, empty means all |
| `can_copy_configs` | `boolean` |  |
| `can_edit_limits` | `boolean` |  |
| `users_created` | `integer` |  |
| `users_deleted` | `integer` |  |
| `total_users` | `integer` |  |

</details>

```json
{
  "username": "string",
  "is_sudo": false,
  "telegram_id": 0,
  "discord_webhook": "string",
  "users_usage": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "expire_date": "2026-01-01T00:00:00Z",
  "max_user_ip_limit": 0,
  "max_user_hwid_limit": 0,
  "host_groups": [
    "string"
  ],
  "can_copy_configs": true,
  "can_edit_limits": true,
  "users_created": 0,
  "users_deleted": 0,
  "total_users": 0
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/admin/usage/reset/<username>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/admin/usage/{username}` {#get-api-admin-usage-username}

**Get Admin Usage**

Retrieve the usage of given admin.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `integer`

```json
0
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/admin/usage/<username>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/admin/{username}` {#put-api-admin-username}

**Modify Admin**

Modify an existing admin's details. Sudo admins change every admin they can see (regular

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Request body** `application/json` · `AdminModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `string` | no |  |
| `is_sudo` | `boolean` | yes |  |
| `telegram_id` | `integer` | no |  |
| `discord_webhook` | `string` | no |  |
| `users_limit` | `integer` | no |  |
| `traffic_limit` | `integer` | no |  |
| `expire_date` | `string (date-time)` | no |  |
| `max_user_ip_limit` | `integer` | no |  |
| `max_user_hwid_limit` | `integer` | no |  |
| `host_groups` | `string[]` | no |  |
| `can_copy_configs` | `boolean` | no |  |
| `can_edit_limits` | `boolean` | no |  |

```json
{
  "password": "string",
  "is_sudo": false,
  "telegram_id": 0,
  "discord_webhook": "string",
  "users_limit": 0,
  "traffic_limit": 0,
  "expire_date": "2026-01-01T00:00:00Z",
  "max_user_ip_limit": 0,
  "max_user_hwid_limit": 0,
  "host_groups": [
    "string"
  ],
  "can_copy_configs": false,
  "can_edit_limits": false
}
```

**Response** `200` Successful Response · `Admin`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `is_sudo` | `boolean` |  |
| `telegram_id` | `integer` |  |
| `discord_webhook` | `string` |  |
| `users_usage` | `integer` |  |
| `users_limit` | `integer` | max users, null/0 means unlimited |
| `traffic_limit` | `integer` | max data limit (bytes) the admin can hand out in total, null/0 means unlimited |
| `expire_date` | `string (date-time)` |  |
| `max_user_ip_limit` | `integer` | cap for each user's ip_limit |
| `max_user_hwid_limit` | `integer` | cap for each user's hwid_limit |
| `host_groups` | `string[]` | host groups of the admin's users, empty means all |
| `can_copy_configs` | `boolean` |  |
| `can_edit_limits` | `boolean` |  |
| `users_created` | `integer` |  |
| `users_deleted` | `integer` |  |
| `total_users` | `integer` |  |

</details>

```json
{
  "username": "string",
  "is_sudo": false,
  "telegram_id": 0,
  "discord_webhook": "string",
  "users_usage": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "expire_date": "2026-01-01T00:00:00Z",
  "max_user_ip_limit": 0,
  "max_user_hwid_limit": 0,
  "host_groups": [
    "string"
  ],
  "can_copy_configs": true,
  "can_edit_limits": true,
  "users_created": 0,
  "users_deleted": 0,
  "total_users": 0
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/admin/<username>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"password": "string", "is_sudo": false, "telegram_id": 0, "discord_webhook": "string", "users_limit": 0, "traffic_limit": 0, "expire_date": "2026-01-01T00:00:00Z", "max_user_ip_limit": 0, "max_user_hwid_limit": 0, "host_groups": ["string"], "can_copy_configs": false, "can_edit_limits": false}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/admin/{username}` {#delete-api-admin-username}

**Remove Admin**

Deleting an admin deletes every user it owned; a safety backup is taken first so the
whole thing can be undone with `alexen restore`.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/admin/<username>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/admin/{username}/users/activate` {#post-api-admin-username-users-activate}

**Activate All Disabled Users**

Activate all disabled users under a specific admin

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/admin/<username>/users/activate' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/admin/{username}/users/disable` {#post-api-admin-username-users-disable}

**Disable All Active Users**

Disable all active users under a specific admin

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/admin/<username>/users/disable' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/admins` {#get-api-admins}

**Get Admins**

Fetch a list of admins with optional filters for pagination and username

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `offset` | query | `integer` | no |  |
| `limit` | query | `integer` | no |  |
| `username` | query | `string` | no |  |

**Response** `200` Successful Response · `Admin[]`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `is_sudo` | `boolean` |  |
| `telegram_id` | `integer` |  |
| `discord_webhook` | `string` |  |
| `users_usage` | `integer` |  |
| `users_limit` | `integer` | max users, null/0 means unlimited |
| `traffic_limit` | `integer` | max data limit (bytes) the admin can hand out in total, null/0 means unlimited |
| `expire_date` | `string (date-time)` |  |
| `max_user_ip_limit` | `integer` | cap for each user's ip_limit |
| `max_user_hwid_limit` | `integer` | cap for each user's hwid_limit |
| `host_groups` | `string[]` | host groups of the admin's users, empty means all |
| `can_copy_configs` | `boolean` |  |
| `can_edit_limits` | `boolean` |  |
| `users_created` | `integer` |  |
| `users_deleted` | `integer` |  |
| `total_users` | `integer` |  |

</details>

```json
[
  {
    "username": "string",
    "is_sudo": false,
    "telegram_id": 0,
    "discord_webhook": "string",
    "users_usage": 0,
    "users_limit": 0,
    "traffic_limit": 0,
    "expire_date": "2026-01-01T00:00:00Z",
    "max_user_ip_limit": 0,
    "max_user_hwid_limit": 0,
    "host_groups": [
      "string"
    ],
    "can_copy_configs": true,
    "can_edit_limits": true,
    "users_created": 0,
    "users_deleted": 0,
    "total_users": 0
  }
]
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/admins' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
