---
title: Activity log
outline: [2, 3]
---

# Activity log

Audit trail of panel actions.

<p class="api-count">1 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/activity` {#get-api-activity}

**Activity**

Audit log of actions done in the panel (who did what, from which IP). Filter by actor and action; page with `before`.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `kind` | query | `string` | no |  |
| `admin` | query | `string` | no |  |
| `q` | query | `string` | no |  |
| `before` | query | `integer` | no |  |
| `limit` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/activity' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
