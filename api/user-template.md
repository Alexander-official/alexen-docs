---
title: User templates
outline: [2, 3]
---

# User templates

Reusable presets for new users.

<p class="api-count">5 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user_template` {#get-api-user-template}

**Get User Templates**

Get a list of User Templates with optional pagination

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `offset` | query | `integer` | no |  |
| `limit` | query | `integer` | no |  |

**Response** `200` Successful Response · `UserTemplateResponse[]`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `data_limit` | `integer` | data_limit can be 0 or greater |
| `expire_duration` | `integer` | expire_duration can be 0 or greater in seconds |
| `username_prefix` | `string` |  |
| `username_suffix` | `string` |  |
| `inbounds` | `object` |  |
| `id` | `integer` |  |

</details>

```json
[
  {
    "name": "string",
    "data_limit": 0,
    "expire_duration": 0,
    "username_prefix": "string",
    "username_suffix": "string",
    "inbounds": {},
    "id": 0
  }
]
```

```bash
curl -X GET 'https://YOUR-PANEL/api/user_template' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/user_template` {#post-api-user-template}

**Add User Template**

Add a new user template
- **name** can be up to 64 characters
- **data_limit** must be in bytes and larger or equal to 0
- **expire_duration** must be in seconds and larger or equat to 0
- **inbounds** dictionary of protocol:inbound_tags, empty means all inbounds

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `UserTemplateCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `data_limit` | `integer` | no | data_limit can be 0 or greater |
| `expire_duration` | `integer` | no | expire_duration can be 0 or greater in seconds |
| `username_prefix` | `string` | no |  |
| `username_suffix` | `string` | no |  |
| `inbounds` | `object` | no | Default: `{}`. |

```json
{
  "data_limit": 0,
  "expire_duration": 0,
  "inbounds": {
    "vless": [
      "VLESS_INBOUND"
    ],
    "vmess": [
      "VMESS_INBOUND"
    ]
  },
  "name": "my template 1"
}
```

**Response** `200` Successful Response · `UserTemplateResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `data_limit` | `integer` | data_limit can be 0 or greater |
| `expire_duration` | `integer` | expire_duration can be 0 or greater in seconds |
| `username_prefix` | `string` |  |
| `username_suffix` | `string` |  |
| `inbounds` | `object` |  |
| `id` | `integer` |  |

</details>

```json
{
  "name": "string",
  "data_limit": 0,
  "expire_duration": 0,
  "username_prefix": "string",
  "username_suffix": "string",
  "inbounds": {},
  "id": 0
}
```

```bash
curl -X POST 'https://YOUR-PANEL/api/user_template' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"data_limit": 0, "expire_duration": 0, "inbounds": {"vless": ["VLESS_INBOUND"], "vmess": ["VMESS_INBOUND"]}, "name": "my template 1"}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user_template/{template_id}` {#get-api-user-template-template-id}

**Get User Template Endpoint**

Get User Template information with id

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `template_id` | path | `integer` | yes |  |

**Response** `200` Successful Response · `UserTemplateResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `data_limit` | `integer` | data_limit can be 0 or greater |
| `expire_duration` | `integer` | expire_duration can be 0 or greater in seconds |
| `username_prefix` | `string` |  |
| `username_suffix` | `string` |  |
| `inbounds` | `object` |  |
| `id` | `integer` |  |

</details>

```json
{
  "name": "string",
  "data_limit": 0,
  "expire_duration": 0,
  "username_prefix": "string",
  "username_suffix": "string",
  "inbounds": {},
  "id": 0
}
```

```bash
curl -X GET 'https://YOUR-PANEL/api/user_template/<template_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user_template/{template_id}` {#put-api-user-template-template-id}

**Modify User Template**

Modify User Template
- **name** can be up to 64 characters
- **data_limit** must be in bytes and larger or equal to 0
- **expire_duration** must be in seconds and larger or equat to 0
- **inbounds** dictionary of protocol:inbound_tags, empty means all inbounds

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `template_id` | path | `integer` | yes |  |

**Request body** `application/json` · `UserTemplateModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `data_limit` | `integer` | no | data_limit can be 0 or greater |
| `expire_duration` | `integer` | no | expire_duration can be 0 or greater in seconds |
| `username_prefix` | `string` | no |  |
| `username_suffix` | `string` | no |  |
| `inbounds` | `object` | no | Default: `{}`. |

```json
{
  "data_limit": 0,
  "expire_duration": 0,
  "inbounds": {
    "vless": [
      "VLESS_INBOUND"
    ],
    "vmess": [
      "VMESS_INBOUND"
    ]
  },
  "name": "my template 1"
}
```

**Response** `200` Successful Response · `UserTemplateResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `data_limit` | `integer` | data_limit can be 0 or greater |
| `expire_duration` | `integer` | expire_duration can be 0 or greater in seconds |
| `username_prefix` | `string` |  |
| `username_suffix` | `string` |  |
| `inbounds` | `object` |  |
| `id` | `integer` |  |

</details>

```json
{
  "name": "string",
  "data_limit": 0,
  "expire_duration": 0,
  "username_prefix": "string",
  "username_suffix": "string",
  "inbounds": {},
  "id": 0
}
```

```bash
curl -X PUT 'https://YOUR-PANEL/api/user_template/<template_id>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"data_limit": 0, "expire_duration": 0, "inbounds": {"vless": ["VLESS_INBOUND"], "vmess": ["VMESS_INBOUND"]}, "name": "my template 1"}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/user_template/{template_id}` {#delete-api-user-template-template-id}

**Remove User Template**

Remove a User Template by its ID

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `template_id` | path | `integer` | yes |  |

**Response** `200` Successful Response

```bash
curl -X DELETE 'https://YOUR-PANEL/api/user_template/<template_id>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
