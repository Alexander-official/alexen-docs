---
title: Online users
outline: [2, 3]
---

# Online users

Live connections.

<p class="api-count">5 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/online` {#get-api-online}

**Get Online Summary**

Online users right now (main core, nodes and external panels).
sort: 'ip' (default), 'devices' or 'external'.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `limit` | query | `integer` | no |  |
| `sort` | query | `string` | no |  |

**Response** `200` Successful Response · `OnlineSummary`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `online_users` | `integer` |  |
| `online_ips` | `integer` |  |
| `external_online_users` | `integer` |  |
| `updated_at` | `string (date-time)` |  |
| `users` | `OnlineUser[]` |  |

</details>

```json
{
  "online_users": 0,
  "online_ips": 0,
  "external_online_users": 0,
  "updated_at": "2026-01-01T00:00:00Z",
  "users": [
    {
      "username": "string",
      "admin": "string",
      "ip_count": 0,
      "device_count": 0,
      "ip_limit": 0,
      "blocked_ips": 0,
      "external": 0,
      "external_panels": []
    }
  ]
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/online' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/online/providers` {#get-api-online-providers}

**Get Online Providers**

ISP/provider of each online user's IPs, plus a per-provider breakdown

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `OnlineProviders`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `users` | `object` |  |
| `providers` | `ProviderStat[]` |  |

</details>

```json
{
  "users": {
    "key": [
      "string"
    ]
  },
  "providers": [
    {
      "name": "string",
      "users": 0,
      "ips": 0
    }
  ]
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/online/providers' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user/{username}/online-ips` {#get-api-user-username-online-ips}

**Get User Online Ips**

IPs the user is connected from right now

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response · `UserOnlineIPs`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `ip_limit` | `integer` |  |
| `ips` | `OnlineIP[]` |  |

</details>

```json
{
  "username": "string",
  "ip_limit": 0,
  "ips": [
    {
      "ip": "string",
      "nodes": [
        "string"
      ],
      "inbounds": [
        "string"
      ],
      "last_seen": "2026-01-01T00:00:00Z",
      "connected_seconds": 0,
      "provider": "string",
      "blocked": false,
      "protocol": "string",
      "rate": 0
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X GET 'https://YOUR-PANEL/api/user/<username>/online-ips' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/user/{username}/online-ips/{ip}` {#delete-api-user-username-online-ips-ip}

**Disconnect User Ip**

Kick one online IP of the user: block it, then drop the user's live sessions so it really disconnects

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `ip` | path | `string` | yes |  |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X DELETE 'https://YOUR-PANEL/api/user/<username>/online-ips/<ip>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/user/{username}/online-ips/{ip}/unblock` {#post-api-user-username-online-ips-ip-unblock}

**Unblock User Ip**

Lift a manual block on an IP so it can connect again right away

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `ip` | path | `string` | yes |  |
| `username` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden, `404` Not found

```bash
curl -X POST 'https://YOUR-PANEL/api/user/<username>/online-ips/<ip>/unblock' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
