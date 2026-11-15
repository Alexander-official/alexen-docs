---
title: Chains
outline: [2, 3]
---

# Chains

Relay / exit chaining between servers.

<p class="api-count">5 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/chain` {#get-api-chain}

**Get Chain**

List relay/exit chains between servers and the state of each link.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/chain' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/chain/{key}/check` {#post-api-chain-key-check}

**Check Exit**

open a few sites from this server, the way its users' traffic leaves

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/chain/<key>/check' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/chain/{key}/exit` {#put-api-chain-key-exit}

**Put Exit**

leave this server through one of its core's outbounds / balancers

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |

**Request body** `application/json` · `ExitIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tag` | `string` | no |  |

```json
{
  "tag": ""
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/chain/<key>/exit' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"tag": ""}'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/chain/{key}/inbounds` {#put-api-chain-key-inbounds}

**Put Inbound Exits**

choose where the users of these inbounds leave (several inbounds may share one server)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |

**Request body** `application/json` · `InboundExitIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `string[]` | yes |  |
| `target` | `string` | no |  |

```json
{
  "tags": [
    "string"
  ],
  "target": ""
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/chain/<key>/inbounds' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"tags": ["string"], "target": ""}'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/chain/{relay}` {#put-api-chain-relay}

**Put Chain**

Set which exit server a relay node forwards to (per inbound).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `relay` | path | `string` | yes |  |

**Request body** `application/json` · `LinkIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `exit` | `string` | no |  |
| `port` | `integer` | no |  |
| `address` | `string` | no |  |
| `sni` | `string` | no | Default: `"www.microsoft.com"`. |

```json
{
  "exit": "string",
  "port": 0,
  "address": "",
  "sni": "www.microsoft.com"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/chain/<relay>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"exit": "string", "port": 0, "address": "", "sni": "www.microsoft.com"}'
```

</section>
