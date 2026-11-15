---
title: Users
outline: [2, 3]
---

# Users

Create, read, update and delete VPN users, their usage and subscription state.

<p class="api-count">23 endpoints</p>

<section class="ep">

## <span class="m m-post">POST</span> `/api/user` {#post-api-user}

**Add User**

Add a new user
- **username**: 3 to 32 characters, can include a-z, 0-9, and underscores.
- **status**: User's status, defaults to `active`. Special rules if `on_hold`.
- **expire**: UTC timestamp for account expiration. Use `0` for unlimited.
- **data_limit**: Max data usage in bytes (e.g., `1073741824` for 1GB). `0` means unlimited.
- **data_limit_reset_strategy**: Defines how/if data limit resets. `no_reset` means it never resets.
- **proxies**: Dictionary of protocol settings (e.g., `vmess`, `vless`).
- **inbounds**: Dictionary of protocol tags to specify inbound connections.
- **note**: Optional text field for additional user information or notes.
- **on_hold_timeout**: UTC timestamp when `on_hold` status should start or end.
- **on_hold_expire_duration**: Duration (in seconds) for how long the user should stay in `on_hold` status.
- **next_plan**: Next user plan (resets after use).

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Request body** `application/json` · `UserCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `proxies` | `object` | no | Default: `{}`. |
| `expire` | `integer` | no |  |
| `data_limit` | `integer` | no | data_limit can be 0 or greater |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` | no | Default: `"no_reset"`. |
| `inbounds` | `object` | no | Default: `{}`. |
| `ip_limit` | `integer` | no | max simultaneous IPs, 0 or null means unlimited |
| `hwid_limit` | `integer` | no | max devices (HWID) that can fetch the subscription, 0 or null means unlimited |
| `note` | `string` | no |  |
| `announce` | `string` | no |  |
| `sub_updated_at` | `string (date-time)` | no |  |
| `sub_last_user_agent` | `string` | no |  |
| `sub_request_count` | `integer` | no | Default: `0`. |
| `online_ip_count` | `integer` | no | Default: `0`. |
| `hwid_count` | `integer` | no | Default: `0`. |
| `online_at` | `string (date-time)` | no |  |
| `on_hold_expire_duration` | `integer` | no |  |
| `on_hold_timeout` | `string (date-time)` | no |  |
| `auto_delete_in_days` | `integer` | no |  |
| `next_plan` | `NextPlanModel` | no |  |
| `username` | `string` | yes |  |
| `status` | `active` / `on_hold` | no |  |
| `owner_username` | `string` | no |  |

```json
{
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "expire": 0,
  "inbounds": {
    "vless": [
      "VLESS TCP REALITY",
      "VLESS GRPC REALITY"
    ],
    "vmess": [
      "VMess TCP",
      "VMess Websocket"
    ]
  },
  "next_plan": {
    "add_remaining_traffic": false,
    "data_limit": 0,
    "expire": 0,
    "fire_on_either": true
  },
  "note": "",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2023-11-03T20:30:00",
  "proxies": {
    "vless": {},
    "vmess": {
      "id": "35e4e39c-7d5c-4f4b-8b71-558e4f37ff53"
    }
  },
  "status": "active",
  "username": "user1234"
}
```

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `400` Bad request, `401` Unauthorized, `409` Conflict

```bash
curl -X POST 'https://YOUR-PANEL/api/user' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user/{username}` {#get-api-user-username}

**Get User**

Get user information

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X GET 'https://YOUR-PANEL/api/user/<username>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user/{username}` {#put-api-user-username}

**Modify User**

Modify an existing user
- **username**: Cannot be changed. Used to identify the user.
- **status**: User's new status. Can be 'active', 'disabled', 'on_hold', 'limited', or 'expired'.
- **expire**: UTC timestamp for new account expiration. Set to `0` for unlimited, `null` for no change.
- **data_limit**: New max data usage in bytes (e.g., `1073741824` for 1GB). Set to `0` for unlimited, `null` for no change.
- **data_limit_reset_strategy**: New strategy for data limit reset. Options include 'daily', 'weekly', 'monthly', or 'no_reset'.
- **proxies**: Dictionary of new protocol settings (e.g., `vmess`, `vless`). Empty dictionary means no change.
- **inbounds**: Dictionary of new protocol tags to specify inbound connections. Empty dictionary means no change.
- **note**: New optional text for additional user information or notes. `null` means no change.
- **on_hold_timeout**: New UTC timestamp for when `on_hold` status should start or end. Only applicable if status is changed to 'on_hold'.
- **on_hold_expire_duration**: New duration (in seconds) for how long the user should stay in `on_hold` status. Only applicable if status is changed to 'on_hold'.
- **next_plan**: Next user plan (resets after use).

Note: Fields set to `null` or omitted will not be modified.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Request body** `application/json` · `UserModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `proxies` | `object` | no | Default: `{}`. |
| `expire` | `integer` | no |  |
| `data_limit` | `integer` | no | data_limit can be 0 or greater |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` | no |  |
| `inbounds` | `object` | no | Default: `{}`. |
| `ip_limit` | `integer` | no | max simultaneous IPs, 0 or null means unlimited |
| `hwid_limit` | `integer` | no | max devices (HWID) that can fetch the subscription, 0 or null means unlimited |
| `note` | `string` | no |  |
| `announce` | `string` | no |  |
| `sub_updated_at` | `string (date-time)` | no |  |
| `sub_last_user_agent` | `string` | no |  |
| `sub_request_count` | `integer` | no | Default: `0`. |
| `online_ip_count` | `integer` | no | Default: `0`. |
| `hwid_count` | `integer` | no | Default: `0`. |
| `online_at` | `string (date-time)` | no |  |
| `on_hold_expire_duration` | `integer` | no |  |
| `on_hold_timeout` | `string (date-time)` | no |  |
| `auto_delete_in_days` | `integer` | no |  |
| `next_plan` | `NextPlanModel` | no |  |
| `status` | `active` / `disabled` / `on_hold` | no |  |

```json
{
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "expire": 0,
  "inbounds": {
    "vless": [
      "VLESS TCP REALITY",
      "VLESS GRPC REALITY"
    ],
    "vmess": [
      "VMess TCP",
      "VMess Websocket"
    ]
  },
  "next_plan": {
    "add_remaining_traffic": false,
    "data_limit": 0,
    "expire": 0,
    "fire_on_either": true
  },
  "note": "",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2023-11-03T20:30:00",
  "proxies": {
    "vless": {},
    "vmess": {
      "id": "35e4e39c-7d5c-4f4b-8b71-558e4f37ff53"
    }
  },
  "status": "active"
}
```

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `400` Bad request, `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X PUT 'https://YOUR-PANEL/api/user/<username>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/user/{username}` {#delete-api-user-username}

**Remove User**

Remove a user

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X DELETE 'https://YOUR-PANEL/api/user/<username>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/user/{username}/active-next` {#post-api-user-username-active-next}

**Active Next Plan**

Reset user by next plan

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/user/<username>/active-next' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user/{username}/devices` {#get-api-user-username-devices}

**Get User Devices**

Devices (HWID) the user fetched the subscription from

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserHWIDDevicesResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `hwid_limit` | `integer` |  |
| `devices` | `UserHWIDDeviceResponse[]` |  |

</details>

```json
{
  "username": "string",
  "hwid_limit": 0,
  "devices": [
    {
      "id": 0,
      "hwid": "string",
      "platform": "string",
      "os_version": "string",
      "device_model": "string",
      "user_agent": "string",
      "created_at": "2026-01-01T00:00:00Z",
      "updated_at": "2026-01-01T00:00:00Z"
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X GET 'https://YOUR-PANEL/api/user/<username>/devices' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/user/{username}/devices` {#delete-api-user-username-devices}

**Remove User Devices**

Forget all devices of the user

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X DELETE 'https://YOUR-PANEL/api/user/<username>/devices' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/user/{username}/devices/{device_id}` {#delete-api-user-username-devices-device-id}

**Remove User Device**

Forget one device of the user, so another one can take its place

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `device_id` | path | `integer` | yes |  |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X DELETE 'https://YOUR-PANEL/api/user/<username>/devices/<device_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user/{username}/inbound-usage` {#get-api-user-username-inbound-usage}

**Get User Inbound Usage**

Get users usage per inbound (since the last usage reset)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserInboundUsagesResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `usages` | `UserInboundUsageResponse[]` |  |

</details>

```json
{
  "username": "string",
  "usages": [
    {
      "inbound_tag": "string",
      "protocol": "string",
      "network": "string",
      "used_traffic": 0
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X GET 'https://YOUR-PANEL/api/user/<username>/inbound-usage' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user/{username}/rename` {#put-api-user-username-rename}

**Rename User**

Change a user's username (sudo admins and the user's own admin). Usage, limits and
devices stay with the user; the Xray clients are re-keyed. The default subscription link
carries the name, so it stops working: the new link (or a custom token, which is kept)
must be given to the customer.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Request body** `application/json` · `RenameIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `new_username` | `string` | yes |  |

```json
{
  "new_username": "string"
}
```

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `400` Bad request, `401` Unauthorized, `403` Forbidden, `404` Not found, `409` Conflict

```bash
curl -X PUT 'https://YOUR-PANEL/api/user/<username>/rename' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"new_username": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/user/{username}/reset` {#post-api-user-username-reset}

**Reset User Data Usage**

Reset user data usage

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/user/<username>/reset' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/user/{username}/revoke_sub` {#post-api-user-username-revoke-sub}

**Revoke User Subscription**

Revoke users subscription (Subscription link and proxies)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/user/<username>/revoke_sub' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user/{username}/set-owner` {#put-api-user-username-set-owner}

**Set Owner**

Set a new owner (admin) for a user.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |
| `admin_username` | query | `string` | yes |  |

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/user/<username>/set-owner?admin_username=...' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user/{username}/sub-token` {#put-api-user-username-sub-token}

**Set User Sub Token**

Give a user a fixed, readable subscription token (/sub/&lt;token>), or take it away.
While it is set only it opens the subscription: the default signed link stops working.
Sudo admins and the user's own admin.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Request body** `application/json` · `SubTokenIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `string` | no |  |

```json
{
  "token": "string"
}
```

**Response** `200` Successful Response · `UserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `inbounds` | `object` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `note` | `string` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
| `auto_delete_in_days` | `integer` |  |
| `next_plan` | `NextPlanModel` |  |
| `username` | `string` |  |
| `status` | `active` / `disabled` / `limited` / `expired` / `on_hold` |  |
| `used_traffic` | `integer` |  |
| `lifetime_used_traffic` | `integer` |  |
| `created_at` | `string (date-time)` |  |
| `ip_block_count` | `integer` |  |
| `hwid_reject_count` | `integer` |  |
| `links` | `string[]` |  |
| `subscription_url` | `string` |  |
| `sub_token` | `string` |  |
| `excluded_inbounds` | `object` |  |
| `admin` | `Admin` |  |
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "inbounds": {},
  "ip_limit": 0,
  "hwid_limit": 0,
  "note": "string",
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
  "auto_delete_in_days": 0,
  "next_plan": {
    "data_limit": 0,
    "expire": 0,
    "add_remaining_traffic": false,
    "fire_on_either": true
  },
  "username": "string",
  "status": "active",
  "used_traffic": 0,
  "lifetime_used_traffic": 0,
  "created_at": "2026-01-01T00:00:00Z",
  "ip_block_count": 0,
  "hwid_reject_count": 0,
  "links": [],
  "subscription_url": "",
  "sub_token": "string",
  "excluded_inbounds": {},
  "admin": {
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
  },
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

Errors: `400` Bad request, `401` Unauthorized, `403` Forbidden, `404` Not found, `409` Conflict

```bash
curl -X PUT 'https://YOUR-PANEL/api/user/<username>/sub-token' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"token": "string"}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user/{username}/usage` {#get-api-user-username-usage}

**Get User Usage**

Get users usage

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |
| `start` | query | `string` | no |  |
| `end` | query | `string` | no |  |

**Response** `200` Successful Response · `UserUsagesResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `usages` | `UserUsageResponse[]` |  |

</details>

```json
{
  "username": "string",
  "usages": [
    {
      "node_id": 0,
      "node_name": "string",
      "used_traffic": 0
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X GET 'https://YOUR-PANEL/api/user/<username>/usage' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/users` {#get-api-users}

**Get Users**

Get all users

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `offset` | query | `integer` | no |  |
| `limit` | query | `integer` | no |  |
| `username` | query | `string[]` | no |  |
| `search` | query | `string` | no |  |
| `admin` | query | `string[]` | no |  |
| `status` | query | `UserStatus` | no |  |
| `sort` | query | `string` | no |  |
| `expiring_within` | query | `integer` | no | only users whose expiry is within this many seconds from now |

**Response** `200` Successful Response · `UsersResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `users` | `UserResponse[]` |  |
| `total` | `integer` |  |

</details>

```json
{
  "users": [
    {
      "proxies": {},
      "expire": 0,
      "data_limit": 0,
      "data_limit_reset_strategy": "no_reset",
      "inbounds": {},
      "ip_limit": 0,
      "hwid_limit": 0,
      "note": "string",
      "announce": "string",
      "sub_updated_at": "2026-01-01T00:00:00Z",
      "sub_last_user_agent": "string",
      "sub_request_count": 0,
      "online_ip_count": 0,
      "hwid_count": 0,
      "online_at": "2026-01-01T00:00:00Z",
      "on_hold_expire_duration": 0,
      "on_hold_timeout": "2026-01-01T00:00:00Z",
      "auto_delete_in_days": 0,
      "next_plan": {
        "data_limit": null,
        "expire": null,
        "add_remaining_traffic": null,
        "fire_on_either": null
      },
      "username": "string",
      "status": "active",
      "used_traffic": 0,
      "lifetime_used_traffic": 0,
      "created_at": "2026-01-01T00:00:00Z",
      "ip_block_count": 0,
      "hwid_reject_count": 0,
      "links": [],
      "subscription_url": "",
      "sub_token": "string",
      "excluded_inbounds": {},
      "admin": {
        "username": null,
        "is_sudo": null,
        "telegram_id": null,
        "discord_webhook": null,
        "users_usage": null,
        "users_limit": null,
        "traffic_limit": null,
        "expire_date": null,
        "max_user_ip_limit": null,
        "max_user_hwid_limit": null,
        "host_groups": null,
        "can_copy_configs": null,
        "can_edit_limits": null,
        "users_created": null,
        "users_deleted": null,
        "total_users": null
      },
      "warning": "string",
      "warning_at": "2026-01-01T00:00:00Z"
    }
  ],
  "total": 0
}
```

Errors: `400` Bad request, `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X GET 'https://YOUR-PANEL/api/users' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/users/bulk/protocol` {#post-api-users-bulk-protocol}

**Bulk Protocol**

Turn a protocol on or off for many users at once (e.g. give every user Hysteria).

A sudo admin may target every user, or one owner's with `admin`, or a list with
`usernames`. A newly enabled protocol gives the user every inbound of that type.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `BulkProtocol`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `protocol` | `string` | yes |  |
| `enable` | `boolean` | no | Default: `true`. |
| `admin` | `string` | no |  |
| `usernames` | `string[]` | no |  |

```json
{
  "protocol": "string",
  "enable": true,
  "admin": "string",
  "usernames": [
    "string"
  ]
}
```

**Response** `200` Successful Response

Errors: `400` Bad request, `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/users/bulk/protocol' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"protocol": "string", "enable": true, "admin": "string", "usernames": ["string"]}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/users/delete-expired` {#post-api-users-delete-expired}

**Delete All Expired Users**

Delete ALL currently expired users in one go (no date range, no grace period).
With include_limited/include_disabled, those users are removed too. Scoped to the admin's
own users unless the admin is sudo.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `include_limited` | query | `boolean` | no | also delete data-limited users |
| `include_disabled` | query | `boolean` | no | also delete disabled users |

**Response** `200` Successful Response · `string[]`

```json
[
  "string"
]
```

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/users/delete-expired' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/users/expired` {#get-api-users-expired}

**Get Expired Users**

Get users who have expired within the specified date range.
- **expired_after** UTC datetime (optional)
- **expired_before** UTC datetime (optional)
- At least one of expired_after or expired_before must be provided for filtering
- If both are omitted, returns all expired users

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `expired_after` | query | `string (date-time)` | no |  |
| `expired_before` | query | `string (date-time)` | no |  |

**Response** `200` Successful Response · `string[]`

```json
[
  "string"
]
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/users/expired' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/users/expired` {#delete-api-users-expired}

**Delete Expired Users**

Delete users who have expired within the specified date range.
- **expired_after** UTC datetime (optional)
- **expired_before** UTC datetime (optional)
- At least one of expired_after or expired_before must be provided

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `expired_after` | query | `string (date-time)` | no |  |
| `expired_before` | query | `string (date-time)` | no |  |

**Response** `200` Successful Response · `string[]`

```json
[
  "string"
]
```

Errors: `401` Unauthorized

```bash
curl -X DELETE 'https://YOUR-PANEL/api/users/expired' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/users/reset` {#post-api-users-reset}

**Reset Users Data Usage**

Reset all users data usage

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/users/reset' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/users/transfer` {#post-api-users-transfer}

**Transfer Users**

Move users from one admin to another, one by one (usernames) or all of an admin's

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `TransferUsers`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `to_admin` | `string` | yes |  |
| `from_admin` | `string` | no |  |
| `usernames` | `string[]` | no |  |

```json
{
  "to_admin": "string",
  "from_admin": "string",
  "usernames": [
    "string"
  ]
}
```

**Response** `200` Successful Response

Errors: `400` Bad request, `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/users/transfer' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"to_admin": "string", "from_admin": "string", "usernames": ["string"]}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/users/usage` {#get-api-users-usage}

**Get Users Usage**

Get all users usage

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `start` | query | `string` | no |  |
| `end` | query | `string` | no |  |
| `admin` | query | `string[]` | no |  |

**Response** `200` Successful Response · `UsersUsagesResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `usages` | `UserUsageResponse[]` |  |

</details>

```json
{
  "usages": [
    {
      "node_id": 0,
      "node_name": "string",
      "used_traffic": 0
    }
  ]
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/users/usage' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
