---
title: Overview
outline: [2, 3]
---

# Overview

Dashboard overview numbers.

<p class="api-count">1 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/overview` {#get-api-overview}

**Overview**

Numbers for the dashboard overview page: users, traffic, nodes and admins.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `period` | query | `string` | no |  |
| `tz` | query | `integer` | no |  |
| `start` | query | `integer` | no |  |
| `end` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/overview' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
