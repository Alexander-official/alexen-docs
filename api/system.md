---
title: System
outline: [2, 3]
---

# System

Server resources and system information.

<p class="api-count">10 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/hosts` {#get-api-hosts}

**Get Hosts**

Get a list of proxy hosts grouped by inbound tag.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `object`

```json
{
  "key": [
    {
      "remark": "string",
      "address": "string",
      "group_name": "string",
      "port": 0,
      "sni": "string",
      "host": "string",
      "path": "string",
      "security": "inbound_default",
      "alpn": "",
      "fingerprint": "",
      "allowinsecure": false,
      "is_disabled": false,
      "mux_enable": false,
      "fragment_setting": "string",
      "noise_setting": "string",
      "random_user_agent": false,
      "use_sni_as_host": false,
      "xhttp_extra": "string"
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/hosts' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/hosts` {#put-api-hosts}

**Modify Hosts**

Modify proxy hosts and update the configuration.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `object`

```json
{
  "key": [
    {
      "remark": "string",
      "address": "string",
      "group_name": "string",
      "port": 0,
      "sni": "string",
      "host": "string",
      "path": "string",
      "security": "inbound_default",
      "alpn": "",
      "fingerprint": "",
      "allowinsecure": false,
      "is_disabled": false,
      "mux_enable": false,
      "fragment_setting": "string",
      "noise_setting": "string",
      "random_user_agent": false,
      "use_sni_as_host": false,
      "xhttp_extra": "string"
    }
  ]
}
```

**Response** `200` Successful Response · `object`

```json
{
  "key": [
    {
      "remark": "string",
      "address": "string",
      "group_name": "string",
      "port": 0,
      "sni": "string",
      "host": "string",
      "path": "string",
      "security": "inbound_default",
      "alpn": "",
      "fingerprint": "",
      "allowinsecure": false,
      "is_disabled": false,
      "mux_enable": false,
      "fragment_setting": "string",
      "noise_setting": "string",
      "random_user_agent": false,
      "use_sni_as_host": false,
      "xhttp_extra": "string"
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/hosts' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/hosts/order` {#get-api-hosts-order}

**Get Hosts Order**

The inbound tags in the order they take in subscriptions (a list, so the order survives
JSON parsing: browsers move number-like object keys such as "444" to the front).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `string[]`

```json
[
  "string"
]
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/hosts/order' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/hosts/order` {#put-api-hosts-order}

**Set Hosts Order**

Set the order inbounds (with their hosts) take in subscriptions.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `HostOrder`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `order` | `string[]` | yes |  |

```json
{
  "order": [
    "string"
  ]
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/hosts/order' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"order": ["string"]}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/inbounds` {#get-api-inbounds}

**Get Inbounds**

Retrieve inbound configurations grouped by protocol.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `object`

```json
{
  "key": [
    {
      "tag": "string",
      "protocol": "vmess",
      "network": "string",
      "tls": "string",
      "port": 0
    }
  ]
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/inbounds' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/system` {#get-api-system}

**Get System Stats**

Fetch system stats including memory, CPU, and user metrics.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `SystemStats`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `version` | `string` |  |
| `mem_total` | `integer` |  |
| `mem_used` | `integer` |  |
| `cpu_cores` | `integer` |  |
| `cpu_usage` | `number` |  |
| `total_user` | `integer` |  |
| `online_users` | `integer` |  |
| `users_active` | `integer` |  |
| `users_on_hold` | `integer` |  |
| `users_disabled` | `integer` |  |
| `users_expired` | `integer` |  |
| `users_limited` | `integer` |  |
| `users_expiring_soon` | `integer` |  |
| `incoming_bandwidth` | `integer` |  |
| `outgoing_bandwidth` | `integer` |  |
| `incoming_bandwidth_speed` | `integer` |  |
| `outgoing_bandwidth_speed` | `integer` |  |
| `traffic_limit` | `integer` |  |

</details>

```json
{
  "version": "string",
  "mem_total": 0,
  "mem_used": 0,
  "cpu_cores": 0,
  "cpu_usage": 0,
  "total_user": 0,
  "online_users": 0,
  "users_active": 0,
  "users_on_hold": 0,
  "users_disabled": 0,
  "users_expired": 0,
  "users_limited": 0,
  "users_expiring_soon": 0,
  "incoming_bandwidth": 0,
  "outgoing_bandwidth": 0,
  "incoming_bandwidth_speed": 0,
  "outgoing_bandwidth_speed": 0,
  "traffic_limit": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/system' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/system/restart` {#post-api-system-restart}

**Restart Panel**

Restart the panel. The process exits and the container (restart: always) brings it
back up within a few seconds; subscriptions and nodes are unaffected by the brief blip.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/system/restart' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/xray/install` {#post-api-xray-install}

**Install Xray Version**

Install a chosen Xray-core version for the panel's own core. Guarded: a safety
backup is taken, the new binary must pass the live config, and the panel rolls back

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `XrayVersionIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `string` | yes |  |

```json
{
  "version": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/xray/install' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"version": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/xray/reset` {#post-api-xray-reset}

**Reset Xray Version**

Go back to the Xray core version that ships with the panel.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/xray/reset' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/xray/versions` {#get-api-xray-versions}

**Get Xray Versions**

Installable Xray-core versions (XTLS releases), newest first, for the version picker.
The panel's current core version and each node's are reported separately (/system, /nodes).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `limit` | query | `integer` | no |  |
| `refresh` | query | `boolean` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/xray/versions' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
