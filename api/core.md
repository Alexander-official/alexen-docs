---
title: Cores
outline: [2, 3]
---

# Cores

Xray core configuration and control.

<p class="api-count">12 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/core` {#get-api-core}

**Get Core Stats**

Retrieve core statistics such as version and uptime.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `CoreStats`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `version` | `string` |  |
| `started` | `boolean` |  |
| `logs_websocket` | `string` |  |

</details>

```json
{
  "version": "string",
  "started": false,
  "logs_websocket": "string"
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/core' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/core/config` {#get-api-core-config}

**Get Core Config**

Get the current core configuration.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `object`

```json
{}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/core/config' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/core/config` {#put-api-core-config}

**Modify Core Config**

Modify the core configuration and restart the core.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `object`

```json
{}
```

**Response** `200` Successful Response · `object`

```json
{}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/core/config' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/core/outbound-from-link` {#post-api-core-outbound-from-link}

**Outbound From Link**

Turn a vless/vmess/trojan/ss/hysteria2 share link into an Xray outbound.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `OutboundLink`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link` | `string` | yes |  |
| `tag` | `string` | no |  |

```json
{
  "link": "string",
  "tag": "string"
}
```

**Response** `200` Successful Response · `object`

```json
{}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/core/outbound-from-link' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"link": "string", "tag": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/core/restart` {#post-api-core-restart}

**Restart Core**

Restart the core and all connected nodes.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/core/restart' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/core/x25519` {#get-api-core-x25519}

**Generate X25519**

A fresh x25519 key pair for a REALITY inbound.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `object`

```json
{}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/core/x25519' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/cores` {#get-api-cores}

**List Cores**

List the main core and the extra cores nodes can run.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `CoreInfo[]`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `inbounds` | `string[]` |  |

</details>

```json
[
  {
    "id": "string",
    "name": "string",
    "inbounds": [
      "string"
    ]
  }
]
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/cores' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/cores` {#post-api-cores}

**Create Core**

Add an extra core, from a given config or a copy of another core.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `CoreCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | yes |  |
| `config` | `object` | no |  |
| `copy_from` | `string` | no | Default: `"main"`. |

```json
{
  "name": "string",
  "config": {},
  "copy_from": "main"
}
```

**Response** `200` Successful Response · `CoreInfo`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `inbounds` | `string[]` |  |

</details>

```json
{
  "id": "string",
  "name": "string",
  "inbounds": [
    "string"
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/cores' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string", "config": {}, "copy_from": "main"}'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/cores/{core_id}` {#put-api-cores-core-id}

**Rename Core**

Rename an extra Xray core.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `core_id` | path | `string` | yes |  |

**Request body** `application/json` · `CoreModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |

```json
{
  "name": "string"
}
```

**Response** `200` Successful Response · `CoreInfo`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `inbounds` | `string[]` |  |

</details>

```json
{
  "id": "string",
  "name": "string",
  "inbounds": [
    "string"
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/cores/<core_id>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string"}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/cores/{core_id}` {#delete-api-cores-core-id}

**Delete Core**

Delete an extra core; its nodes go back to the main core.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `core_id` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/cores/<core_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/cores/{core_id}/config` {#get-api-cores-core-id-config}

**Get Extra Core Config**

Get the Xray configuration of an extra core.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `core_id` | path | `string` | yes |  |

**Response** `200` Successful Response · `object`

```json
{}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/cores/<core_id>/config' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/cores/{core_id}/config` {#put-api-cores-core-id-config}

**Modify Extra Core Config**

Save a core's config and restart the nodes running it.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `core_id` | path | `string` | yes |  |

**Request body** `application/json` · `object`

```json
{}
```

**Response** `200` Successful Response · `object`

```json
{}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/cores/<core_id>/config' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

</section>
