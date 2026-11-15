---
title: Outbounds
outline: [2, 3]
---

# Outbounds

Outbound tests and traffic counters.

<p class="api-count">3 endpoints</p>

<section class="ep">

## <span class="m m-post">POST</span> `/api/outbounds/test` {#post-api-outbounds-test}

**Test Outbounds**

Run a connectivity test for an outbound on the panel or on a node (over SSH) and return the result.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `TestIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `outbounds` | `object[]` | yes |  |
| `server` | `string` | no | Default: `"master"`. |
| `url` | `string` | no |  |
| `sites` | `boolean` | no | Default: `true`. |

```json
{
  "outbounds": [
    {}
  ],
  "server": "master",
  "url": "string",
  "sites": true
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/outbounds/test' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"outbounds": [{}], "server": "master", "url": "string", "sites": true}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/outbounds/traffic` {#get-api-outbounds-traffic}

**Get Traffic**

Traffic counters per outbound.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/outbounds/traffic' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/outbounds/traffic/reset` {#post-api-outbounds-traffic-reset}

**Reset Traffic**

Reset the outbound traffic counters.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `ResetIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tag` | `string` | no |  |

```json
{
  "tag": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/outbounds/traffic/reset' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"tag": "string"}'
```

</section>
