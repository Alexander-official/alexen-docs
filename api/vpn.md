---
title: VPN
outline: [2, 3]
---

# VPN

Built-in VPN (WireGuard/AmneziaWG) management.

<p class="api-count">6 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/vpn` {#get-api-vpn}

**Get Vpn**

List the built-in VPN servers and their state.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/vpn' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/vpn/devices` {#put-api-vpn-devices}

**Put Devices**

AmneziaWG files per user (one per device)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `DevicesIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awg_devices` | `integer` | yes |  |

```json
{
  "awg_devices": 0
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/vpn/devices' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"awg_devices": 0}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/vpn/install` {#get-api-vpn-install}

**Install Command**

the command that installs the agent on a server

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/vpn/install' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/vpn/servers/{key}` {#put-api-vpn-servers-key}

**Put Server**

Change one built-in VPN server's settings.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |

**Request body** `application/json` · `ServerIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agent_port` | `integer` | no | Default: `62060`. |
| `agent_address` | `string` | no |  |
| `public_address` | `string` | no |  |
| `awg` | `AWGIn` | no | Default: `{"enabled": false, "address": "", "port": 51820, "subnet": "10.66.0.0/16", "mtu": 1420, "dns": ["1.1.1.1", "8.8.8.8"], "keepalive": 25, "params": {}}`. |
| `ovpn` | `OVPNIn` | no | Default: `{"enabled": false, "address": "", "port": 1194, "proto": "udp", "subnet": "10.67.0.0/16", "dns": ["1.1.1.1", "8.8.8.8"]}`. |

```json
{
  "agent_port": 62060,
  "agent_address": "",
  "public_address": "",
  "awg": {
    "enabled": false,
    "address": "",
    "port": 51820,
    "subnet": "10.66.0.0/16",
    "mtu": 1420,
    "dns": [
      "1.1.1.1",
      "8.8.8.8"
    ],
    "keepalive": 25,
    "params": {}
  },
  "ovpn": {
    "enabled": false,
    "address": "",
    "port": 1194,
    "proto": "udp",
    "subnet": "10.67.0.0/16",
    "dns": [
      "1.1.1.1",
      "8.8.8.8"
    ]
  }
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/vpn/servers/<key>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"agent_port": 62060, "agent_address": "", "public_address": "", "awg": {"enabled": false, "address": "", "port": 51820, "subnet": "10.66.0.0/16", "mtu": 1420, "dns": ["1.1.1.1", "8.8.8.8"], "keepalive": 25, "params": {}}, "ovpn": {"enabled": false, "address": "", "port": 1194, "proto": "udp", "subnet": "10.67.0.0/16", "dns": ["1.1.1.1", "8.8.8.8"]}}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/vpn/servers/{key}/new-awg-params` {#post-api-vpn-servers-key-new-awg-params}

**New Awg Params**

fresh random obfuscation values (users then need the new config)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/vpn/servers/<key>/new-awg-params' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/vpn/servers/{key}/reset-pin` {#post-api-vpn-servers-key-reset-pin}

**Reset Pin**

trust the agent's certificate again (after reinstalling the agent)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/vpn/servers/<key>/reset-pin' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
