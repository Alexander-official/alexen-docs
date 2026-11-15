---
title: Nodes
outline: [2, 3]
---

# Nodes

Add, monitor and manage Xray nodes.

<p class="api-count">20 endpoints</p>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node` {#post-api-node}

**Add Node**

Add a new node to the database and optionally add it as a host.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `NodeCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | yes |  |
| `address` | `string` | yes |  |
| `port` | `integer` | no | Default: `62050`. |
| `api_port` | `integer` | no | Default: `62051`. |
| `usage_coefficient` | `number` | no | Default: `1.0`. |
| `agent_enabled` | `boolean` | no | Default: `true`. |
| `ip_limit_enabled` | `boolean` | no | Default: `true`. |
| `add_as_new_host` | `boolean` | no | Default: `true`. |
| `core_id` | `string` | no | Default: `"main"`. |

```json
{
  "add_as_new_host": true,
  "address": "192.168.1.1",
  "api_port": 62051,
  "name": "DE node",
  "port": 62050,
  "usage_coefficient": 1
}
```

**Response** `200` Successful Response · `NodeResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `address` | `string` |  |
| `port` | `integer` |  |
| `api_port` | `integer` |  |
| `usage_coefficient` | `number` |  |
| `agent_enabled` | `boolean` |  |
| `ip_limit_enabled` | `boolean` |  |
| `id` | `integer` |  |
| `xray_version` | `string` |  |
| `status` | `connected` / `connecting` / `error` / `disabled` |  |
| `message` | `string` |  |
| `core_id` | `string` |  |

</details>

```json
{
  "name": "string",
  "address": "string",
  "port": 62050,
  "api_port": 62051,
  "usage_coefficient": 1.0,
  "agent_enabled": true,
  "ip_limit_enabled": true,
  "id": 0,
  "xray_version": "string",
  "status": "connected",
  "message": "string",
  "core_id": "main"
}
```

Errors: `401` Unauthorized, `403` Forbidden, `409` Conflict

```bash
curl -X POST 'https://YOUR-PANEL/api/node' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"add_as_new_host": true, "address": "192.168.1.1", "api_port": 62051, "name": "DE node", "port": 62050, "usage_coefficient": 1}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/node-install/{job_id}` {#get-api-node-install-job-id}

**Install Status**

Progress and log of a node installation started over SSH. Pass `offset` to get only the new log lines.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `job_id` | path | `string` | yes |  |
| `offset` | query | `integer` | no |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/node-install/<job_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/node/settings` {#get-api-node-settings}

**Get Node Settings**

Retrieve the current node settings, including TLS certificate.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `NodeSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `min_node_version` | `string` |  |
| `certificate` | `string` |  |

</details>

```json
{
  "min_node_version": "v0.2.0",
  "certificate": "string"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/node/settings' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/node/{node_id}` {#get-api-node-node-id}

**Get Node**

Retrieve details of a specific node by its ID.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Response** `200` Successful Response · `NodeResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `address` | `string` |  |
| `port` | `integer` |  |
| `api_port` | `integer` |  |
| `usage_coefficient` | `number` |  |
| `agent_enabled` | `boolean` |  |
| `ip_limit_enabled` | `boolean` |  |
| `id` | `integer` |  |
| `xray_version` | `string` |  |
| `status` | `connected` / `connecting` / `error` / `disabled` |  |
| `message` | `string` |  |
| `core_id` | `string` |  |

</details>

```json
{
  "name": "string",
  "address": "string",
  "port": 62050,
  "api_port": 62051,
  "usage_coefficient": 1.0,
  "agent_enabled": true,
  "ip_limit_enabled": true,
  "id": 0,
  "xray_version": "string",
  "status": "connected",
  "message": "string",
  "core_id": "main"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/node/<node_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/node/{node_id}` {#put-api-node-node-id}

**Modify Node**

Update a node's details. Only accessible to sudo admins.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Request body** `application/json` · `NodeModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `address` | `string` | no |  |
| `port` | `integer` | no |  |
| `api_port` | `integer` | no |  |
| `usage_coefficient` | `number` | no |  |
| `agent_enabled` | `boolean` | no |  |
| `ip_limit_enabled` | `boolean` | no |  |
| `status` | `NodeStatus` | no |  |
| `core_id` | `string` | no |  |

```json
{
  "address": "192.168.1.1",
  "api_port": 62051,
  "name": "DE node",
  "port": 62050,
  "status": "disabled",
  "usage_coefficient": 1.0
}
```

**Response** `200` Successful Response · `NodeResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `address` | `string` |  |
| `port` | `integer` |  |
| `api_port` | `integer` |  |
| `usage_coefficient` | `number` |  |
| `agent_enabled` | `boolean` |  |
| `ip_limit_enabled` | `boolean` |  |
| `id` | `integer` |  |
| `xray_version` | `string` |  |
| `status` | `connected` / `connecting` / `error` / `disabled` |  |
| `message` | `string` |  |
| `core_id` | `string` |  |

</details>

```json
{
  "name": "string",
  "address": "string",
  "port": 62050,
  "api_port": 62051,
  "usage_coefficient": 1.0,
  "agent_enabled": true,
  "ip_limit_enabled": true,
  "id": 0,
  "xray_version": "string",
  "status": "connected",
  "message": "string",
  "core_id": "main"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/node/<node_id>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"address": "192.168.1.1", "api_port": 62051, "name": "DE node", "port": 62050, "status": "disabled", "usage_coefficient": 1.0}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/node/{node_id}` {#delete-api-node-node-id}

**Remove Node**

Delete a node and remove it from xray in the background.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/node/<node_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/node/{node_id}/extra` {#put-api-node-node-id-extra}

**Put Node Extra**

Save the node's extra settings (SSH access, VPS details, flags). Secrets are stored encrypted and are never returned.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Request body** `application/json` · `NodeExtraIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flag` | `string` | no |  |
| `transport` | `string` | no |  |
| `ssh` | `SSHIn` | no |  |
| `forget_ssh` | `boolean` | no | Default: `false`. |

```json
{
  "flag": "",
  "transport": "string",
  "ssh": {
    "host": "",
    "port": 22,
    "username": "root",
    "auth": "password",
    "password": "",
    "private_key": "",
    "passphrase": "",
    "key_id": ""
  },
  "forget_ssh": false
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/node/<node_id>/extra' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"flag": "", "transport": "string", "ssh": {"host": "", "port": 22, "username": "root", "auth": "password", "password": "", "private_key": "", "passphrase": "", "key_id": ""}, "forget_ssh": false}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node/{node_id}/install` {#post-api-node-node-id-install}

**Install Node**

install Marzban-node and/or the agent on the VPS over SSH (runs in the background)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Request body** `application/json` · `InstallIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ssh` | `SSHIn` | no |  |
| `save` | `boolean` | no | Default: `false`. |
| `node` | `boolean` | no | Default: `true`. |
| `agent` | `boolean` | no | Default: `true`. |

```json
{
  "ssh": {
    "host": "",
    "port": 22,
    "username": "root",
    "auth": "password",
    "password": "",
    "private_key": "",
    "passphrase": "",
    "key_id": ""
  },
  "save": false,
  "node": true,
  "agent": true
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/node/<node_id>/install' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"ssh": {"host": "", "port": 22, "username": "root", "auth": "password", "password": "", "private_key": "", "passphrase": "", "key_id": ""}, "save": false, "node": true, "agent": true}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node/{node_id}/install-xray` {#post-api-node-node-id-install-xray}

**Install Node Xray Version**

Install a chosen Xray-core version on the node over SSH (the node downloads the XTLS
release itself). The current binary is kept as xray.old and put back if the new one
doesn't run, so a node is never left without a working core.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Request body** `application/json` · `NodeXrayVersionIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `version` | `string` | yes |  |

```json
{
  "version": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/node/<node_id>/install-xray' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"version": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node/{node_id}/reconnect` {#post-api-node-node-id-reconnect}

**Reconnect Node**

Connect again now: a hanging attempt is dropped, not waited for

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/node/<node_id>/reconnect' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node/{node_id}/restart` {#post-api-node-node-id-restart}

**Restart Node Core**

restart the node's Xray (connects first if it isn't connected)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/node/<node_id>/restart' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node/{node_id}/uninstall` {#post-api-node-node-id-uninstall}

**Uninstall Node**

remove everything Alexen put on the node's server (containers, firewall rules, tunnels, files)
over SSH; other panels on it stay untouched

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/node/<node_id>/uninstall' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/node/{node_id}/update-xray` {#post-api-node-node-id-update-xray}

**Update Node Xray**

give the node the panel's Xray (same version) over SSH and restart it

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `node_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/node/<node_id>/update-xray' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/nodes` {#get-api-nodes}

**Get Nodes**

Retrieve a list of all nodes. Accessible only to sudo admins.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `NodeResponse[]`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `address` | `string` |  |
| `port` | `integer` |  |
| `api_port` | `integer` |  |
| `usage_coefficient` | `number` |  |
| `agent_enabled` | `boolean` |  |
| `ip_limit_enabled` | `boolean` |  |
| `id` | `integer` |  |
| `xray_version` | `string` |  |
| `status` | `connected` / `connecting` / `error` / `disabled` |  |
| `message` | `string` |  |
| `core_id` | `string` |  |

</details>

```json
[
  {
    "name": "string",
    "address": "string",
    "port": 62050,
    "api_port": 62051,
    "usage_coefficient": 1.0,
    "agent_enabled": true,
    "ip_limit_enabled": true,
    "id": 0,
    "xray_version": "string",
    "status": "connected",
    "message": "string",
    "core_id": "main"
  }
]
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/nodes' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/nodes/extras` {#get-api-nodes-extras}

**Nodes Extras**

Extra settings of all nodes (secrets are masked).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/nodes/extras' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/nodes/system` {#get-api-nodes-system}

**Nodes System**

CPU, memory, disk, uptime and network speed of the master and every node

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/nodes/system' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/nodes/usage` {#get-api-nodes-usage}

**Get Usage**

Retrieve usage statistics for nodes within a specified date range.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `start` | query | `string` | no |  |
| `end` | query | `string` | no |  |

**Response** `200` Successful Response · `NodesUsageResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `usages` | `NodeUsageResponse[]` |  |

</details>

```json
{
  "usages": [
    {
      "node_id": 0,
      "node_name": "string",
      "uplink": 0,
      "downlink": 0
    }
  ]
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/nodes/usage' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/ssh-keys` {#get-api-ssh-keys}

**List Ssh Keys**

saved SSH keys (names + public keys only; private keys are never returned)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/ssh-keys' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/ssh-keys` {#post-api-ssh-keys}

**Add Ssh Key**

Save an SSH key in the key library (name, private key, optional passphrase). The private key is stored encrypted and never returned.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `SSHKeyIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `private_key` | `string` | no |  |
| `passphrase` | `string` | no |  |
| `generate` | `boolean` | no | Default: `false`. |

```json
{
  "name": "",
  "private_key": "",
  "passphrase": "",
  "generate": false
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/ssh-keys' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "", "private_key": "", "passphrase": "", "generate": false}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/ssh-keys/{key_id}` {#delete-api-ssh-keys-key-id}

**Delete Ssh Key**

Delete a saved SSH key.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `key_id` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/ssh-keys/<key_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
