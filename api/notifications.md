---
title: Notifications
outline: [2, 3]
---

# Notifications

Alerts, webhooks and message templates.

<p class="api-count">13 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/alerts` {#get-api-alerts}

**List Alerts**

List the signed-in admin's alerts (new users, expiring users, node problems and similar).

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `unread` | query | `boolean` | no |  |
| `before` | query | `integer` | no |  |
| `limit` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/alerts' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/alerts/read` {#post-api-alerts-read}

**Read Alerts**

Mark alerts as read.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Request body** `application/json` · `ReadBody`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ids` | `integer[]` | no | Default: `[]`. |
| `all` | `boolean` | no | Default: `false`. |

```json
{
  "ids": [],
  "all": false
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/alerts/read' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"ids": [], "all": false}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/anti-theft` {#get-api-anti-theft}

**Read Anti Theft**

Read the anti-theft (subscription sharing) detector settings.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `TheftSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `rules` | `TheftRule[]` |  |
| `ignore` | `string[]` |  |

</details>

```json
{
  "enabled": false,
  "rules": [],
  "ignore": []
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/anti-theft' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/anti-theft` {#put-api-anti-theft}

**Update Anti Theft**

Change the anti-theft detector settings.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `TheftSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | no | Default: `false`. |
| `rules` | `TheftRule[]` | no | Default: `[]`. |
| `ignore` | `string[]` | no | Default: `[]`. |

```json
{
  "enabled": false,
  "rules": [],
  "ignore": []
}
```

**Response** `200` Successful Response · `TheftSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `rules` | `TheftRule[]` |  |
| `ignore` | `string[]` |  |

</details>

```json
{
  "enabled": false,
  "rules": [],
  "ignore": []
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/anti-theft' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": false, "rules": [], "ignore": []}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/messages/media/{msg_id}` {#get-api-messages-media-msg-id}

**Get Media**

stream a message attachment (access checked against the message's thread)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `msg_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/messages/media/<msg_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/messages/threads` {#get-api-messages-threads}

**Message Threads**

sudo: one thread per admin; an admin: its own thread with the sudo admins

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/messages/threads' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/messages/{thread}` {#get-api-messages-thread}

**Read Messages**

Read the messages of a thread between an admin and the sudo admins. `after` returns only newer messages.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `thread` | path | `string` | yes |  |
| `after` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/messages/<thread>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/messages/{thread}` {#post-api-messages-thread}

**Send Message**

Send a message in a thread.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `thread` | path | `string` | yes |  |

**Request body** `application/json` · `MessageIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | yes |  |

```json
{
  "text": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/messages/<thread>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"text": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/messages/{thread}/media` {#post-api-messages-thread-media}

**Send Media**

attach an image/audio/video (optionally with a caption)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `thread` | path | `string` | yes |  |

**Request body** `multipart/form-data` · `Body_send_media_api_messages__thread__media_post`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | yes |  |
| `text` | `string` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/messages/<thread>/media' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/messages/{thread}/{msg_id}` {#put-api-messages-thread-msg-id}

**Edit Message**

edit the text of your own message

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `thread` | path | `string` | yes |  |
| `msg_id` | path | `integer` | yes |  |

**Request body** `application/json` · `MessageEdit`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | yes |  |

```json
{
  "text": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/messages/<thread>/<msg_id>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"text": "string"}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/messages/{thread}/{msg_id}` {#delete-api-messages-thread-msg-id}

**Delete Message**

delete your own message (and its attachment, if any)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `thread` | path | `string` | yes |  |
| `msg_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X DELETE 'https://YOUR-PANEL/api/messages/<thread>/<msg_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/notify/counts` {#get-api-notify-counts}

**Notify Counts**

Unread alert and message counters for the menu badges.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/notify/counts' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user/{username}/warning` {#put-api-user-username-warning}

**Set User Warning**

Set or clear a warning text shown to a user in their subscription page.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Request body** `application/json` · `WarningIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | no |  |

```json
{
  "text": ""
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/user/<username>/warning' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"text": ""}'
```

</section>
