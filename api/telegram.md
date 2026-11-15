---
title: Telegram
outline: [2, 3]
---

# Telegram

Telegram bot configuration.

<p class="api-count">4 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/telegram` {#get-api-telegram}

**Read Bot**

Read the Telegram bot configuration and its connection state.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `BotView`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `has_token` | `boolean` |  |
| `token_masked` | `string` |  |
| `admin_ids` | `integer[]` |  |
| `language` | `string` |  |
| `proxy` | `string` |  |
| `backup` | `BackupSchedule` |  |
| `notify` | `NotifySettings` |  |
| `intervals` | `integer[]` |  |
| `last_backup_at` | `number` |  |
| `last_backup_error` | `string` |  |
| `next_backup_at` | `number` |  |
| `running` | `boolean` |  |
| `username` | `string` |  |
| `error` | `string` |  |

</details>

```json
{
  "enabled": false,
  "has_token": false,
  "token_masked": "string",
  "admin_ids": [
    0
  ],
  "language": "string",
  "proxy": "string",
  "backup": {
    "enabled": false,
    "every_hours": 24
  },
  "notify": {
    "events": {
      "key": false
    },
    "silent": false,
    "quiet": false,
    "quiet_from": 23,
    "quiet_to": 8,
    "utc_offset": 3
  },
  "intervals": [
    0
  ],
  "last_backup_at": 0,
  "last_backup_error": "string",
  "next_backup_at": 0,
  "running": false,
  "username": "string",
  "error": "string"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/telegram' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/telegram` {#put-api-telegram}

**Update Bot**

save and (re)start the bot; a new token is checked with Telegram first

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `BotUpdate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | no | Default: `false`. |
| `token` | `string` | no |  |
| `clear_token` | `boolean` | no | Default: `false`. |
| `admin_ids` | `integer[]` | no |  |
| `language` | `string` | no | Default: `"tr"`. |
| `proxy` | `string` | no |  |
| `backup` | `BackupSchedule` | no |  |
| `notify` | `NotifySettings` | no |  |

```json
{
  "enabled": false,
  "token": "string",
  "clear_token": false,
  "admin_ids": [
    0
  ],
  "language": "tr",
  "proxy": "",
  "backup": {
    "enabled": false,
    "every_hours": 24
  },
  "notify": {
    "events": {
      "key": false
    },
    "silent": false,
    "quiet": false,
    "quiet_from": 23,
    "quiet_to": 8,
    "utc_offset": 3
  }
}
```

**Response** `200` Successful Response · `BotView`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `has_token` | `boolean` |  |
| `token_masked` | `string` |  |
| `admin_ids` | `integer[]` |  |
| `language` | `string` |  |
| `proxy` | `string` |  |
| `backup` | `BackupSchedule` |  |
| `notify` | `NotifySettings` |  |
| `intervals` | `integer[]` |  |
| `last_backup_at` | `number` |  |
| `last_backup_error` | `string` |  |
| `next_backup_at` | `number` |  |
| `running` | `boolean` |  |
| `username` | `string` |  |
| `error` | `string` |  |

</details>

```json
{
  "enabled": false,
  "has_token": false,
  "token_masked": "string",
  "admin_ids": [
    0
  ],
  "language": "string",
  "proxy": "string",
  "backup": {
    "enabled": false,
    "every_hours": 24
  },
  "notify": {
    "events": {
      "key": false
    },
    "silent": false,
    "quiet": false,
    "quiet_from": 23,
    "quiet_to": 8,
    "utc_offset": 3
  },
  "intervals": [
    0
  ],
  "last_backup_at": 0,
  "last_backup_error": "string",
  "next_backup_at": 0,
  "running": false,
  "username": "string",
  "error": "string"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/telegram' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": false, "token": "string", "clear_token": false, "admin_ids": [0], "language": "tr", "proxy": "", "backup": {"enabled": false, "every_hours": 24}, "notify": {"events": {"key": false}, "silent": false, "quiet": false, "quiet_from": 23, "quiet_to": 8, "utc_offset": 3}}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/telegram/backup` {#post-api-telegram-backup}

**Send Backup Now**

a backup to every admin now

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `object`

```json
{
  "key": "string"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/telegram/backup' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/telegram/test` {#post-api-telegram-test}

**Test Bot**

a message to every admin id: id -> "" when it went, else why not

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `object`

```json
{
  "key": "string"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/telegram/test' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
