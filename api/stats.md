---
title: Statistics
outline: [2, 3]
---

# Statistics

Server statistics.

<p class="api-count">1 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/stats/overview` {#get-api-stats-overview}

**Stats Overview**

System-wide statistics. Resellers see only their own users.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `StatsOverview`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `total_users` | `integer` |  |
| `active_users` | `integer` |  |
| `total_traffic` | `integer` |  |
| `inbounds` | `InboundTraffic[]` |  |
| `transports` | `TransportTraffic[]` |  |
| `top_users` | `TopUser[]` |  |

</details>

```json
{
  "total_users": 0,
  "active_users": 0,
  "total_traffic": 0,
  "inbounds": [
    {
      "inbound_tag": "string",
      "protocol": "string",
      "used_traffic": 0
    }
  ],
  "transports": [],
  "top_users": [
    {
      "username": "string",
      "admin": "string",
      "used_traffic": 0
    }
  ]
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/stats/overview' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
