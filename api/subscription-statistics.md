---
title: Subscription statistics
outline: [2, 3]
---

# Subscription statistics

Who fetched which subscription, with which app, how many bytes.

<p class="api-count">5 endpoints</p>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/sub-stats` {#delete-api-sub-stats}

**Clear**

Delete every subscription-fetch record (the statistics log). Settings are kept.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X DELETE 'https://YOUR-PANEL/api/sub-stats' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-stats/log` {#get-api-sub-stats-log}

**Log**

List individual subscription fetches, newest first. Filter by `user`, `ip`, `app`, `fmt` (format) and `status`; page with `before` (the id of the last row you got) and `limit`. Non-sudo admins only see fetches of their own users.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `user` | query | `string` | no |  |
| `ip` | query | `string` | no |  |
| `app` | query | `string` | no |  |
| `fmt` | query | `string` | no |  |
| `status` | query | `integer` | no |  |
| `hours` | query | `integer` | no |  |
| `before` | query | `integer` | no |  |
| `limit` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-stats/log' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-stats/settings` {#get-api-sub-stats-settings}

**Get Stats Settings**

Read subscription-statistics settings: `enabled`, `retention_days`, `ip_per_min`, `user_per_hour` and `sub_rate_limit` (minimum seconds between two fetches of the same user). `0` means no limit.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `StatsSettingsOut`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `retention_days` | `integer` |  |
| `ip_per_min` | `integer` |  |
| `user_per_hour` | `integer` |  |
| `sub_rate_limit` | `integer` |  |

</details>

```json
{
  "enabled": true,
  "retention_days": 30,
  "ip_per_min": 0,
  "user_per_hour": 0,
  "sub_rate_limit": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-stats/settings' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/sub-stats/settings` {#put-api-sub-stats-settings}

**Put Stats Settings**

Change subscription-statistics settings and limits. Fetches over a limit get HTTP 429 with a `Retry-After` header.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `StatsSettingsIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | no | Default: `true`. |
| `retention_days` | `integer` | no | Default: `30`. |
| `ip_per_min` | `integer` | no | Default: `0`. |
| `user_per_hour` | `integer` | no | Default: `0`. |
| `sub_rate_limit` | `integer` | no | Default: `0`. |

```json
{
  "enabled": true,
  "retention_days": 30,
  "ip_per_min": 0,
  "user_per_hour": 0,
  "sub_rate_limit": 0
}
```

**Response** `200` Successful Response · `StatsSettingsOut`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `retention_days` | `integer` |  |
| `ip_per_min` | `integer` |  |
| `user_per_hour` | `integer` |  |
| `sub_rate_limit` | `integer` |  |

</details>

```json
{
  "enabled": true,
  "retention_days": 30,
  "ip_per_min": 0,
  "user_per_hour": 0,
  "sub_rate_limit": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/sub-stats/settings' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": true, "retention_days": 30, "ip_per_min": 0, "user_per_hour": 0, "sub_rate_limit": 0}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-stats/summary` {#get-api-sub-stats-summary}

**Summary**

Totals for the last `hours` hours: fetch count, unique users and IPs, bytes sent, average/max size, average duration, limited/blocked/error counts; plus breakdowns by app and format, top users, top IPs and a time series (hourly when `hours` is 72 or less, otherwise daily).

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `hours` | query | `integer` | no |  |
| `top` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-stats/summary' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
