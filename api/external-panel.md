---
title: External panels
outline: [2, 3]
---

# External panels

Connect other panels (3x-ui, s-ui...).

<p class="api-count">9 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/external-panels` {#get-api-external-panels}

**List Panels**

List connected external panels (3x-ui, s-ui and similar). Passwords are never returned.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `ExternalPanelResponse[]`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `integer` |  |
| `name` | `string` |  |
| `kind` | `string` |  |
| `address` | `string` |  |
| `panel_path` | `string` |  |
| `scope` | `ExternalPanelScope` |  |
| `enabled` | `boolean` |  |
| `username` | `string` |  |
| `has_password` | `boolean` |  |
| `has_token` | `boolean` |  |
| `sync_interval` | `integer` |  |
| `live` | `boolean` |  |
| `count_traffic` | `boolean` |  |
| `auto_provision` | `boolean` |  |
| `prov_config` | `object` |  |
| `last_sync` | `string (date-time)` |  |
| `last_error` | `string` |  |
| `created_at` | `string (date-time)` |  |

</details>

```json
[
  {
    "id": 0,
    "name": "string",
    "kind": "string",
    "address": "string",
    "panel_path": "string",
    "scope": {
      "admins": [],
      "groups": []
    },
    "enabled": false,
    "username": "",
    "has_password": false,
    "has_token": false,
    "sync_interval": 0,
    "live": false,
    "count_traffic": false,
    "auto_provision": false,
    "prov_config": {},
    "last_sync": "2026-01-01T00:00:00Z",
    "last_error": "string",
    "created_at": "2026-01-01T00:00:00Z"
  }
]
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/external-panels' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/external-panels` {#post-api-external-panels}

**Create Panel**

Connect an external panel. Its login is stored encrypted.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `ExternalPanelCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | yes |  |
| `kind` | `string` | yes |  |
| `address` | `string` | yes |  |
| `panel_path` | `string` | no | Default: `"/"`. |
| `scope` | `ExternalPanelScope` | no | Default: `{"admins": [], "groups": []}`. |
| `enabled` | `boolean` | no | Default: `true`. |
| `sync_interval` | `integer` | no | Default: `0`. |
| `live` | `boolean` | no | Default: `false`. |
| `count_traffic` | `boolean` | no | Default: `false`. |
| `username` | `string` | no |  |
| `password` | `string` | no |  |
| `token` | `string` | no |  |

```json
{
  "name": "string",
  "kind": "string",
  "address": "string",
  "panel_path": "/",
  "scope": {
    "admins": [],
    "groups": []
  },
  "enabled": true,
  "sync_interval": 0,
  "live": false,
  "count_traffic": false,
  "username": "",
  "password": "",
  "token": "string"
}
```

**Response** `200` Successful Response · `ExternalPanelResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `integer` |  |
| `name` | `string` |  |
| `kind` | `string` |  |
| `address` | `string` |  |
| `panel_path` | `string` |  |
| `scope` | `ExternalPanelScope` |  |
| `enabled` | `boolean` |  |
| `username` | `string` |  |
| `has_password` | `boolean` |  |
| `has_token` | `boolean` |  |
| `sync_interval` | `integer` |  |
| `live` | `boolean` |  |
| `count_traffic` | `boolean` |  |
| `auto_provision` | `boolean` |  |
| `prov_config` | `object` |  |
| `last_sync` | `string (date-time)` |  |
| `last_error` | `string` |  |
| `created_at` | `string (date-time)` |  |

</details>

```json
{
  "id": 0,
  "name": "string",
  "kind": "string",
  "address": "string",
  "panel_path": "string",
  "scope": {
    "admins": [],
    "groups": []
  },
  "enabled": false,
  "username": "",
  "has_password": false,
  "has_token": false,
  "sync_interval": 0,
  "live": false,
  "count_traffic": false,
  "auto_provision": false,
  "prov_config": {},
  "last_sync": "2026-01-01T00:00:00Z",
  "last_error": "string",
  "created_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized, `403` Forbidden, `409` Conflict

```bash
curl -X POST 'https://YOUR-PANEL/api/external-panels' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string", "kind": "string", "address": "string", "panel_path": "/", "scope": {"admins": [], "groups": []}, "enabled": true, "sync_interval": 0, "live": false, "count_traffic": false, "username": "", "password": "", "token": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/external-panels/test` {#post-api-external-panels-test}

**Test Unsaved**

Try to log in with the given (unsaved) settings and count inbounds.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `ExternalPanelCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | yes |  |
| `kind` | `string` | yes |  |
| `address` | `string` | yes |  |
| `panel_path` | `string` | no | Default: `"/"`. |
| `scope` | `ExternalPanelScope` | no | Default: `{"admins": [], "groups": []}`. |
| `enabled` | `boolean` | no | Default: `true`. |
| `sync_interval` | `integer` | no | Default: `0`. |
| `live` | `boolean` | no | Default: `false`. |
| `count_traffic` | `boolean` | no | Default: `false`. |
| `username` | `string` | no |  |
| `password` | `string` | no |  |
| `token` | `string` | no |  |

```json
{
  "name": "string",
  "kind": "string",
  "address": "string",
  "panel_path": "/",
  "scope": {
    "admins": [],
    "groups": []
  },
  "enabled": true,
  "sync_interval": 0,
  "live": false,
  "count_traffic": false,
  "username": "",
  "password": "",
  "token": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/external-panels/test' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string", "kind": "string", "address": "string", "panel_path": "/", "scope": {"admins": [], "groups": []}, "enabled": true, "sync_interval": 0, "live": false, "count_traffic": false, "username": "", "password": "", "token": "string"}'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/external-panels/{panel_id}` {#put-api-external-panels-panel-id}

**Modify Panel**

Change an external panel's connection details.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `panel_id` | path | `integer` | yes |  |

**Request body** `application/json` · `ExternalPanelModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `kind` | `string` | no |  |
| `address` | `string` | no |  |
| `panel_path` | `string` | no |  |
| `scope` | `ExternalPanelScope` | no |  |
| `enabled` | `boolean` | no |  |
| `username` | `string` | no |  |
| `password` | `string` | no |  |
| `token` | `string` | no |  |
| `sync_interval` | `integer` | no |  |
| `live` | `boolean` | no |  |
| `count_traffic` | `boolean` | no |  |

```json
{
  "name": "string",
  "kind": "string",
  "address": "string",
  "panel_path": "string",
  "scope": {
    "admins": [],
    "groups": []
  },
  "enabled": false,
  "username": "string",
  "password": "string",
  "token": "string",
  "sync_interval": 0,
  "live": false,
  "count_traffic": false
}
```

**Response** `200` Successful Response · `ExternalPanelResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `integer` |  |
| `name` | `string` |  |
| `kind` | `string` |  |
| `address` | `string` |  |
| `panel_path` | `string` |  |
| `scope` | `ExternalPanelScope` |  |
| `enabled` | `boolean` |  |
| `username` | `string` |  |
| `has_password` | `boolean` |  |
| `has_token` | `boolean` |  |
| `sync_interval` | `integer` |  |
| `live` | `boolean` |  |
| `count_traffic` | `boolean` |  |
| `auto_provision` | `boolean` |  |
| `prov_config` | `object` |  |
| `last_sync` | `string (date-time)` |  |
| `last_error` | `string` |  |
| `created_at` | `string (date-time)` |  |

</details>

```json
{
  "id": 0,
  "name": "string",
  "kind": "string",
  "address": "string",
  "panel_path": "string",
  "scope": {
    "admins": [],
    "groups": []
  },
  "enabled": false,
  "username": "",
  "has_password": false,
  "has_token": false,
  "sync_interval": 0,
  "live": false,
  "count_traffic": false,
  "auto_provision": false,
  "prov_config": {},
  "last_sync": "2026-01-01T00:00:00Z",
  "last_error": "string",
  "created_at": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/external-panels/<panel_id>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string", "kind": "string", "address": "string", "panel_path": "string", "scope": {"admins": [], "groups": []}, "enabled": false, "username": "string", "password": "string", "token": "string", "sync_interval": 0, "live": false, "count_traffic": false}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/external-panels/{panel_id}` {#delete-api-external-panels-panel-id}

**Delete Panel**

Remove an external panel connection.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `panel_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/external-panels/<panel_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/external-panels/{panel_id}/inbounds` {#get-api-external-panels-panel-id-inbounds}

**Panel Inbounds**

List the inbounds of an external panel.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `panel_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/external-panels/<panel_id>/inbounds' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/external-panels/{panel_id}/provision` {#post-api-external-panels-panel-id-provision}

**Provision Users**

Create the scoped Alexen users AS CLIENTS on the external panel's chosen inbound(s).
We let the panel assign the uuids and give each client a deterministic subId; the user's
subscription then pulls the panel's OWN share links for that subId (always valid).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `panel_id` | path | `integer` | yes |  |

**Request body** `application/json` · `ProvisionOptions`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `inbound_ids` | `object[]` | no | Default: `[]`. |
| `scope_all` | `boolean` | no | Default: `false`. |
| `scope_admins` | `object[]` | no | Default: `[]`. |
| `name_mode` | `string` | no | Default: `"original"`. |
| `name_template` | `string` | no |  |
| `auto` | `boolean` | no | Default: `false`. |
| `port_map` | `object` | no | Default: `{}`. |
| `host_over` | `string` | no |  |

```json
{
  "inbound_ids": [],
  "scope_all": false,
  "scope_admins": [],
  "name_mode": "original",
  "name_template": "",
  "auto": false,
  "port_map": {},
  "host_over": ""
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/external-panels/<panel_id>/provision' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"inbound_ids": [], "scope_all": false, "scope_admins": [], "name_mode": "original", "name_template": "", "auto": false, "port_map": {}, "host_over": ""}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/external-panels/{panel_id}/stats` {#get-api-external-panels-panel-id-stats}

**Panel Stats**

Live traffic / online for the panel (poll this for near-real-time display).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `panel_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/external-panels/<panel_id>/stats' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/external-panels/{panel_id}/test` {#post-api-external-panels-panel-id-test}

**Test Panel**

Test the connection to an external panel.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `panel_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/external-panels/<panel_id>/test' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
