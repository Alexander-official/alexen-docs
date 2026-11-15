---
title: Subscription
outline: [2, 3]
---

# Subscription

Public subscription endpoints that clients fetch.

<p class="api-count">6 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/sub/{token}/` {#get-sub-token}

**User Subscription**

Provides a subscription link based on the user agent (Clash, V2Ray, etc.).

<p class="badges"><span class="b b-pub">Public</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `token` | path | `string` | yes |  |
| `user-agent` | header | `string` | no |  |

**Response** `200` Successful Response

```bash
curl -X GET 'https://YOUR-PANEL/sub/<token>/'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/sub/{token}/info` {#get-sub-token-info}

**User Subscription Info**

Retrieves detailed information about the user's subscription.

<p class="badges"><span class="b b-pub">Public</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `token` | path | `string` | yes |  |

**Response** `200` Successful Response · `SubscriptionUserResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `proxies` | `object` |  |
| `expire` | `integer` |  |
| `data_limit` | `integer` |  |
| `data_limit_reset_strategy` | `no_reset` / `day` / `week` / `month` / `year` |  |
| `ip_limit` | `integer` |  |
| `hwid_limit` | `integer` |  |
| `announce` | `string` |  |
| `sub_updated_at` | `string (date-time)` |  |
| `sub_last_user_agent` | `string` |  |
| `sub_request_count` | `integer` |  |
| `online_ip_count` | `integer` |  |
| `hwid_count` | `integer` |  |
| `online_at` | `string (date-time)` |  |
| `on_hold_expire_duration` | `integer` |  |
| `on_hold_timeout` | `string (date-time)` |  |
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
| `warning` | `string` |  |
| `warning_at` | `string (date-time)` |  |

</details>

```json
{
  "proxies": {},
  "expire": 0,
  "data_limit": 0,
  "data_limit_reset_strategy": "no_reset",
  "ip_limit": 0,
  "hwid_limit": 0,
  "announce": "string",
  "sub_updated_at": "2026-01-01T00:00:00Z",
  "sub_last_user_agent": "string",
  "sub_request_count": 0,
  "online_ip_count": 0,
  "hwid_count": 0,
  "online_at": "2026-01-01T00:00:00Z",
  "on_hold_expire_duration": 0,
  "on_hold_timeout": "2026-01-01T00:00:00Z",
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
  "warning": "string",
  "warning_at": "2026-01-01T00:00:00Z"
}
```

```bash
curl -X GET 'https://YOUR-PANEL/sub/<token>/info'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/sub/{token}/usage` {#get-sub-token-usage}

**User Get Usage**

Fetches the usage statistics for the user within a specified date range.

<p class="badges"><span class="b b-pub">Public</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `token` | path | `string` | yes |  |
| `start` | query | `string` | no |  |
| `end` | query | `string` | no |  |

**Response** `200` Successful Response

```bash
curl -X GET 'https://YOUR-PANEL/sub/<token>/usage'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/sub/{token}/vpn/{key}/{filename}` {#get-sub-token-vpn-key-filename}

**User Vpn Config**

the user's AmneziaWG (.conf) or OpenVPN (.ovpn) file for one server (app/vpn)

<p class="badges"><span class="b b-pub">Public</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |
| `filename` | path | `string` | yes |  |
| `token` | path | `string` | yes |  |

**Response** `200` Successful Response

```bash
curl -X GET 'https://YOUR-PANEL/sub/<token>/vpn/<key>/<filename>'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/sub/{token}/{extra}` {#get-sub-token-extra}

**User Subscription Extra**

/&lt;token>/&lt;client type> picks the format; anything else after the token (a
username or any text, see Domain settings) is the normal subscription

<p class="badges"><span class="b b-pub">Public</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `extra` | path | `string` | yes |  |
| `token` | path | `string` | yes |  |
| `user-agent` | header | `string` | no |  |

**Response** `200` Successful Response

```bash
curl -X GET 'https://YOUR-PANEL/sub/<token>/<extra>'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/sub/{token}/{extra}/{client_type}` {#get-sub-token-extra-client-type}

**User Subscription Extra Client Type**

a link with a last part, plus a client type (e.g. Outline's /&lt;token>/&lt;name>/outline)

<p class="badges"><span class="b b-pub">Public</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `extra` | path | `string` | yes |  |
| `client_type` | path | `string` | yes |  |
| `token` | path | `string` | yes |  |
| `user-agent` | header | `string` | no |  |

**Response** `200` Successful Response

```bash
curl -X GET 'https://YOUR-PANEL/sub/<token>/<extra>/<client_type>'
```

</section>
