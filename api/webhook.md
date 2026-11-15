---
title: Webhook
outline: [2, 3]
---

# Webhook

Where the panel tells another service about users, with the secret, events and thresholds.

<p class="api-count">5 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/webhook` {#get-api-webhook}

**Read Webhook**

The webhook settings in effect: addresses, the secret (shown in full: this is sudo only), which events
are sent, the usage and days-left thresholds, the retry settings, whether they come from the panel or
from .env, the latest attempt and how many notifications are waiting.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `WebhookState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `settings` | `WebhookSettings` |  |
| `source` | `string` |  |
| `env` | `WebhookSettings` |  |
| `last` | `object` |  |
| `queued` | `integer` |  |

</details>

```json
{
  "settings": {
    "addresses": [],
    "secret": "",
    "events": {},
    "usage_percent": [
      80
    ],
    "days_left": [
      3
    ],
    "retry_seconds": 180,
    "retries": 3
  },
  "source": "string",
  "env": {
    "addresses": [],
    "secret": "",
    "events": {},
    "usage_percent": [
      80
    ],
    "days_left": [
      3
    ],
    "retry_seconds": 180,
    "retries": 3
  },
  "last": {},
  "queued": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/webhook' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/webhook` {#put-api-webhook}

**Update Webhook**

Save the webhook settings in the panel. From now on they win over the .env values.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `WebhookSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `string[]` | no | Default: `[]`. |
| `secret` | `string` | no |  |
| `events` | `object` | no | Default: `{}`. |
| `usage_percent` | `integer[]` | no | Default: `[80]`. |
| `days_left` | `integer[]` | no | Default: `[3]`. |
| `retry_seconds` | `integer` | no | Default: `180`. |
| `retries` | `integer` | no | Default: `3`. |

```json
{
  "addresses": [],
  "secret": "",
  "events": {},
  "usage_percent": [
    80
  ],
  "days_left": [
    3
  ],
  "retry_seconds": 180,
  "retries": 3
}
```

**Response** `200` Successful Response · `WebhookState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `settings` | `WebhookSettings` |  |
| `source` | `string` |  |
| `env` | `WebhookSettings` |  |
| `last` | `object` |  |
| `queued` | `integer` |  |

</details>

```json
{
  "settings": {
    "addresses": [],
    "secret": "",
    "events": {},
    "usage_percent": [
      80
    ],
    "days_left": [
      3
    ],
    "retry_seconds": 180,
    "retries": 3
  },
  "source": "string",
  "env": {
    "addresses": [],
    "secret": "",
    "events": {},
    "usage_percent": [
      80
    ],
    "days_left": [
      3
    ],
    "retry_seconds": 180,
    "retries": 3
  },
  "last": {},
  "queued": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/webhook' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"addresses": [], "secret": "", "events": {}, "usage_percent": [80], "days_left": [3], "retry_seconds": 180, "retries": 3}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/webhook` {#delete-api-webhook}

**Reset Webhook**

Forget the settings saved in the panel and use the .env values again.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `WebhookState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `settings` | `WebhookSettings` |  |
| `source` | `string` |  |
| `env` | `WebhookSettings` |  |
| `last` | `object` |  |
| `queued` | `integer` |  |

</details>

```json
{
  "settings": {
    "addresses": [],
    "secret": "",
    "events": {},
    "usage_percent": [
      80
    ],
    "days_left": [
      3
    ],
    "retry_seconds": 180,
    "retries": 3
  },
  "source": "string",
  "env": {
    "addresses": [],
    "secret": "",
    "events": {},
    "usage_percent": [
      80
    ],
    "days_left": [
      3
    ],
    "retry_seconds": 180,
    "retries": 3
  },
  "last": {},
  "queued": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X DELETE 'https://YOUR-PANEL/api/webhook' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/webhook/resync` {#post-api-webhook-resync}

**Resync Webhook**

Send every user to the webhook now, as updated (what "send every user again" does after a host change).
The events are queued and go out in slices of 50 requests' worth in the next minute.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/webhook/resync' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/webhook/test` {#post-api-webhook-test}

**Test Webhook**

Send a test event (`action: "test"`) to every address, or to the `addresses` you pass, and return what
each one answered: HTTP status, time in ms, or the error.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `WebhookTestIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `addresses` | `string[]` | no |  |
| `secret` | `string` | no |  |

```json
{
  "addresses": [
    "string"
  ],
  "secret": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/webhook/test' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"addresses": ["string"], "secret": "string"}'
```

</section>
