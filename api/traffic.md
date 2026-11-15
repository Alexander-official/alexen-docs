---
title: Traffic
outline: [2, 3]
---

# Traffic

Usage reports.

<p class="api-count">6 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/auto-change` {#get-api-auto-change}

**Get Auto Change**

Read the automatic-change rules (rotate a node's IP list when traffic or time conditions are met).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/auto-change' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/auto-change` {#put-api-auto-change}

**Put Auto Change**

Save the automatic-change rules.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `RulesPayload`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rules` | `Rule[]` | yes |  |

```json
{
  "rules": [
    {
      "id": "",
      "name": "",
      "enabled": true,
      "host_ids": [],
      "nodes": [],
      "require_online": false,
      "stages": [],
      "stage": 0,
      "armed_at": 0,
      "last_change": 0
    }
  ]
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/auto-change' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"rules": [{"id": "", "name": "", "enabled": true, "host_ids": [], "nodes": [], "require_online": false, "stages": [], "stage": 0, "armed_at": 0, "last_change": 0}]}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/auto-change/status` {#get-api-auto-change-status}

**Get Auto Change Status**

cheap to poll: only the live part, plus where each rule's IP list stands

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/auto-change/status' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/auto-change/{rule_id}/reset` {#post-api-auto-change-rule-id-reset}

**Reset Rule**

Back to stage 1, watching from now on; the hosts keep their address

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `rule_id` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/auto-change/<rule_id>/reset' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/auto-change/{rule_id}/switch` {#post-api-auto-change-rule-id-switch}

**Switch Now**

Fire the rule's current stage right away

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `rule_id` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/auto-change/<rule_id>/switch' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/traffic/live` {#get-api-traffic-live}

**Live Traffic**

Current speed (bytes/s) per user, per inbound and per node

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/traffic/live' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
