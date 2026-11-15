---
title: Settings
outline: [2, 3]
---

# Settings

Panel, subscription, host and miscellaneous settings.

<p class="api-count">32 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/admin/{name}/sub-profile` {#get-api-admin-name-sub-profile}

**Read Admin Sub Profile**

an admin's own subscription domain, texts and external configs

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | `string` | yes |  |

**Response** `200` Successful Response · `AdminSubProfile`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `url_prefix` | `string` |  |
| `suffix` | `string` |  |
| `sub_path` | `string` |  |
| `mode` | `string` |  |
| `templates` | `AdminSubTemplates` |  |
| `external_enabled` | `boolean` |  |
| `external_label` | `string` |  |
| `external_self_edit` | `boolean` |  |
| `external_include_general` | `boolean` |  |
| `external_count` | `integer` |  |
| `example` | `string` |  |

</details>

```json
{
  "url_prefix": "",
  "suffix": "string",
  "sub_path": "string",
  "mode": "string",
  "templates": {
    "default_template": "",
    "expired_template": "",
    "disabled_template": "",
    "limited_template": "",
    "near_expire_template": ""
  },
  "external_enabled": true,
  "external_label": "",
  "external_self_edit": false,
  "external_include_general": true,
  "external_count": 0,
  "example": ""
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/admin/<name>/sub-profile' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/admin/{name}/sub-profile` {#put-api-admin-name-sub-profile}

**Update Admin Sub Profile**

Set an admin's own subscription profile: domain, texts and external configs.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | `string` | yes |  |

**Request body** `application/json` · `AdminSubProfile`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url_prefix` | `string` | no |  |
| `suffix` | `string` | no |  |
| `sub_path` | `string` | no |  |
| `mode` | `string` | no |  |
| `templates` | `AdminSubTemplates` | no | Default: `{"default_template": "", "expired_template": "", "disabled_template": "", "limited_template": "", "near_expire_template": ""}`. |
| `external_enabled` | `boolean` | no | Default: `true`. |
| `external_label` | `string` | no |  |
| `external_self_edit` | `boolean` | no | Default: `false`. |
| `external_include_general` | `boolean` | no | Default: `true`. |
| `external_count` | `integer` | no | Default: `0`. |
| `example` | `string` | no |  |

```json
{
  "url_prefix": "",
  "suffix": "string",
  "sub_path": "string",
  "mode": "string",
  "templates": {
    "default_template": "",
    "expired_template": "",
    "disabled_template": "",
    "limited_template": "",
    "near_expire_template": ""
  },
  "external_enabled": true,
  "external_label": "",
  "external_self_edit": false,
  "external_include_general": true,
  "external_count": 0,
  "example": ""
}
```

**Response** `200` Successful Response · `AdminSubProfile`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `url_prefix` | `string` |  |
| `suffix` | `string` |  |
| `sub_path` | `string` |  |
| `mode` | `string` |  |
| `templates` | `AdminSubTemplates` |  |
| `external_enabled` | `boolean` |  |
| `external_label` | `string` |  |
| `external_self_edit` | `boolean` |  |
| `external_include_general` | `boolean` |  |
| `external_count` | `integer` |  |
| `example` | `string` |  |

</details>

```json
{
  "url_prefix": "",
  "suffix": "string",
  "sub_path": "string",
  "mode": "string",
  "templates": {
    "default_template": "",
    "expired_template": "",
    "disabled_template": "",
    "limited_template": "",
    "near_expire_template": ""
  },
  "external_enabled": true,
  "external_label": "",
  "external_self_edit": false,
  "external_include_general": true,
  "external_count": 0,
  "example": ""
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/admin/<name>/sub-profile' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"url_prefix": "", "suffix": "string", "sub_path": "string", "mode": "string", "templates": {"default_template": "", "expired_template": "", "disabled_template": "", "limited_template": "", "near_expire_template": ""}, "external_enabled": true, "external_label": "", "external_self_edit": false, "external_include_general": true, "external_count": 0, "example": ""}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/admins/sub-profiles` {#get-api-admins-sub-profiles}

**Admins Sub Profiles**

which admins have their own domain, texts or external configs (for the admins list)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/admins/sub-profiles' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/brand` {#get-api-brand}

**Read Brand**

the panel's brand (name, vendor, support). Public: the login page shows it before sign-in.

<p class="badges"><span class="b b-pub">Public</span></p>

**Response** `200` Successful Response · `BrandSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `vendor` | `string` |  |
| `support_telegram` | `string` |  |
| `support_url` | `string` |  |

</details>

```json
{
  "name": "",
  "vendor": "",
  "support_telegram": "",
  "support_url": ""
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/brand'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/brand` {#put-api-brand}

**Update Brand**

Change the panel's brand: the name shown in the sidebar, footer and subscription page, the company name and the support contact.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `BrandSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `vendor` | `string` | no |  |
| `support_telegram` | `string` | no |  |
| `support_url` | `string` | no |  |

```json
{
  "name": "",
  "vendor": "",
  "support_telegram": "",
  "support_url": ""
}
```

**Response** `200` Successful Response · `BrandSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `vendor` | `string` |  |
| `support_telegram` | `string` |  |
| `support_url` | `string` |  |

</details>

```json
{
  "name": "",
  "vendor": "",
  "support_telegram": "",
  "support_url": ""
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/brand' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "", "vendor": "", "support_telegram": "", "support_url": ""}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/decorations` {#get-api-decorations}

**Get Decorations**

seasonal decoration flags, readable by any admin so the UI can render them

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `Decorations`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `newyear` | `boolean` |  |

</details>

```json
{
  "newyear": false
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/decorations' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/decorations` {#put-api-decorations}

**Set Decorations**

Turn the festive decorations (for example the New Year theme) on or off for the panel and the subscription pages.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `Decorations`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newyear` | `boolean` | no | Default: `false`. |

```json
{
  "newyear": false
}
```

**Response** `200` Successful Response · `Decorations`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `newyear` | `boolean` |  |

</details>

```json
{
  "newyear": false
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/decorations' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"newyear": false}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/external-configs` {#get-api-external-configs}

**Read External Configs**

Extra config links added to every link-based subscription, and the order of links

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `ExternalSettings-Output`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `configs` | `ExternalConfig[]` |  |
| `admins` | `object` |  |
| `generated_sort` | `string` |  |
| `external_sort` | `string` |  |
| `protocol_order` | `string[]` |  |
| `test_url` | `string` |  |

</details>

```json
{
  "configs": [],
  "admins": {},
  "generated_sort": "default",
  "external_sort": "manual",
  "protocol_order": [
    "vless-reality",
    "vless-tcp",
    "vless-ws",
    "vless-grpc",
    "vless-xhttp",
    "vless-httpupgrade",
    "vmess",
    "trojan",
    "ss",
    "hysteria2",
    "tuic",
    "wireguard"
  ],
  "test_url": "https://www.gstatic.com/generate_204"
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/external-configs' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/external-configs` {#put-api-external-configs}

**Update External Configs**

Set extra config links appended to every link-based subscription, and the order of links.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `ExternalSettings-Input`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configs` | `ExternalConfig[]` | no | Default: `[]`. |
| `admins` | `object` | no | Default: `{}`. |
| `generated_sort` | `string` | no | Default: `"default"`. |
| `external_sort` | `string` | no | Default: `"manual"`. |
| `protocol_order` | `string[]` | no | Default: `["vless-reality", "vless-tcp", "vless-ws", "vless-grpc", "vless-xhttp", "vless-httpupgrade", "vmess", "trojan", "ss", "hysteria2", "tuic", "wireguard"]`. |
| `test_url` | `string` | no | Default: `"https://www.gstatic.com/generate_204"`. |

```json
{
  "configs": [],
  "admins": {},
  "generated_sort": "default",
  "external_sort": "manual",
  "protocol_order": [
    "vless-reality",
    "vless-tcp",
    "vless-ws",
    "vless-grpc",
    "vless-xhttp",
    "vless-httpupgrade",
    "vmess",
    "trojan",
    "ss",
    "hysteria2",
    "tuic",
    "wireguard"
  ],
  "test_url": "https://www.gstatic.com/generate_204"
}
```

**Response** `200` Successful Response · `ExternalSettings-Output`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `configs` | `ExternalConfig[]` |  |
| `admins` | `object` |  |
| `generated_sort` | `string` |  |
| `external_sort` | `string` |  |
| `protocol_order` | `string[]` |  |
| `test_url` | `string` |  |

</details>

```json
{
  "configs": [],
  "admins": {},
  "generated_sort": "default",
  "external_sort": "manual",
  "protocol_order": [
    "vless-reality",
    "vless-tcp",
    "vless-ws",
    "vless-grpc",
    "vless-xhttp",
    "vless-httpupgrade",
    "vmess",
    "trojan",
    "ss",
    "hysteria2",
    "tuic",
    "wireguard"
  ],
  "test_url": "https://www.gstatic.com/generate_204"
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/external-configs' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"configs": [], "admins": {}, "generated_sort": "default", "external_sort": "manual", "protocol_order": ["vless-reality", "vless-tcp", "vless-ws", "vless-grpc", "vless-xhttp", "vless-httpupgrade", "vmess", "trojan", "ss", "hysteria2", "tuic", "wireguard"], "test_url": "https://www.gstatic.com/generate_204"}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/external-configs/mine` {#get-api-external-configs-mine}

**Read Own External**

an admin's own external configs (when the sudo admin lets it edit them)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `OwnExternal`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `enabled` | `boolean` |  |
| `configs` | `ExternalConfig[]` |  |

</details>

```json
{
  "label": "",
  "enabled": true,
  "configs": []
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/external-configs/mine' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/external-configs/mine` {#put-api-external-configs-mine}

**Update Own External**

Set the signed-in admin's own external configs.

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Request body** `application/json` · `OwnExternal`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | no |  |
| `enabled` | `boolean` | no | Default: `true`. |
| `configs` | `ExternalConfig[]` | no | Default: `[]`. |

```json
{
  "label": "",
  "enabled": true,
  "configs": []
}
```

**Response** `200` Successful Response · `OwnExternal`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `enabled` | `boolean` |  |
| `configs` | `ExternalConfig[]` |  |

</details>

```json
{
  "label": "",
  "enabled": true,
  "configs": []
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/external-configs/mine' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"label": "", "enabled": true, "configs": []}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/external-configs/preview` {#post-api-external-configs-preview}

**Preview External Configs**

What a user's link subscription would look like with these (unsaved) settings

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | query | `string` | no |  |

**Request body** `application/json` · `ExternalSettings-Input`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `configs` | `ExternalConfig[]` | no | Default: `[]`. |
| `admins` | `object` | no | Default: `{}`. |
| `generated_sort` | `string` | no | Default: `"default"`. |
| `external_sort` | `string` | no | Default: `"manual"`. |
| `protocol_order` | `string[]` | no | Default: `["vless-reality", "vless-tcp", "vless-ws", "vless-grpc", "vless-xhttp", "vless-httpupgrade", "vmess", "trojan", "ss", "hysteria2", "tuic", "wireguard"]`. |
| `test_url` | `string` | no | Default: `"https://www.gstatic.com/generate_204"`. |

```json
{
  "configs": [],
  "admins": {},
  "generated_sort": "default",
  "external_sort": "manual",
  "protocol_order": [
    "vless-reality",
    "vless-tcp",
    "vless-ws",
    "vless-grpc",
    "vless-xhttp",
    "vless-httpupgrade",
    "vmess",
    "trojan",
    "ss",
    "hysteria2",
    "tuic",
    "wireguard"
  ],
  "test_url": "https://www.gstatic.com/generate_204"
}
```

**Response** `200` Successful Response · `ExternalPreview`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `items` | `ExternalPreviewItem[]` |  |

</details>

```json
{
  "username": "string",
  "items": [
    {
      "remark": "string",
      "link": "string",
      "source": "string"
    }
  ]
}
```

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/external-configs/preview' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"configs": [], "admins": {}, "generated_sort": "default", "external_sort": "manual", "protocol_order": ["vless-reality", "vless-tcp", "vless-ws", "vless-grpc", "vless-xhttp", "vless-httpupgrade", "vmess", "trojan", "ss", "hysteria2", "tuic", "wireguard"], "test_url": "https://www.gstatic.com/generate_204"}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/external-configs/sources` {#get-api-external-configs-sources}

**External Sources Status**

Last fetch/test result of every subscription source

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `SourceStatus[]`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `running` | `boolean` |  |
| `updated_at` | `integer` |  |
| `error` | `string` |  |
| `stats` | `object` |  |
| `items` | `object[]` |  |

</details>

```json
[
  {
    "id": "string",
    "running": false,
    "updated_at": 0,
    "error": "",
    "stats": {},
    "items": []
  }
]
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/external-configs/sources' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/external-configs/sources/{source_id}/refresh` {#post-api-external-configs-sources-source-id-refresh}

**Refresh External Source**

Fetch, test and rename one source now (runs in the background)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `source_id` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/external-configs/sources/<source_id>/refresh' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/ip-limit-settings` {#get-api-ip-limit-settings}

**Read Ip Limit Settings**

Global IP-limit switch. Off = observe only (show connected IPs, block nothing).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `IPLimitSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |

</details>

```json
{
  "enabled": true
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/ip-limit-settings' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/ip-limit-settings` {#put-api-ip-limit-settings}

**Update Ip Limit Settings**

Turn the global IP limit on or off. Off = observe only (connected IPs are shown, nothing is blocked).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `IPLimitSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | no | Default: `true`. |

```json
{
  "enabled": true
}
```

**Response** `200` Successful Response · `IPLimitSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |

</details>

```json
{
  "enabled": true
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/ip-limit-settings' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": true}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/json-sub-settings` {#get-api-json-sub-settings}

**Read Json Sub Settings**

JSON subscription: clients, direct sites, external configs, the auto (balancer) config

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `JsonSubSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `clients` | `string[]` |  |
| `direct_domains` | `string[]` |  |
| `direct_ips` | `string[]` |  |
| `block_ads` | `boolean` |  |
| `include_external` | `boolean` |  |
| `balancer` | `boolean` |  |
| `balancer_external` | `boolean` |  |
| `balancer_name` | `string` |  |
| `balancer_strategy` | `string` |  |
| `balancer_position` | `string` |  |
| `probe_url` | `string` |  |
| `probe_interval` | `string` |  |

</details>

```json
{
  "clients": [],
  "direct_domains": [],
  "direct_ips": [],
  "block_ads": false,
  "include_external": true,
  "balancer": false,
  "balancer_external": true,
  "balancer_name": "⚡ Auto (fastest)",
  "balancer_strategy": "leastPing",
  "balancer_position": "top",
  "probe_url": "https://www.gstatic.com/generate_204",
  "probe_interval": "1m"
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/json-sub-settings' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/json-sub-settings` {#put-api-json-sub-settings}

**Update Json Sub Settings**

Change JSON subscription settings: clients, direct sites, external configs and the auto (balancer) config.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `JsonSubSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clients` | `string[]` | no | Default: `[]`. |
| `direct_domains` | `string[]` | no | Default: `[]`. |
| `direct_ips` | `string[]` | no | Default: `[]`. |
| `block_ads` | `boolean` | no | Default: `false`. |
| `include_external` | `boolean` | no | Default: `true`. |
| `balancer` | `boolean` | no | Default: `false`. |
| `balancer_external` | `boolean` | no | Default: `true`. |
| `balancer_name` | `string` | no | Default: `"\u26a1 Auto (fastest)"`. |
| `balancer_strategy` | `string` | no | Default: `"leastPing"`. |
| `balancer_position` | `string` | no | Default: `"top"`. |
| `probe_url` | `string` | no | Default: `"https://www.gstatic.com/generate_204"`. |
| `probe_interval` | `string` | no | Default: `"1m"`. |

```json
{
  "clients": [],
  "direct_domains": [],
  "direct_ips": [],
  "block_ads": false,
  "include_external": true,
  "balancer": false,
  "balancer_external": true,
  "balancer_name": "⚡ Auto (fastest)",
  "balancer_strategy": "leastPing",
  "balancer_position": "top",
  "probe_url": "https://www.gstatic.com/generate_204",
  "probe_interval": "1m"
}
```

**Response** `200` Successful Response · `JsonSubSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `clients` | `string[]` |  |
| `direct_domains` | `string[]` |  |
| `direct_ips` | `string[]` |  |
| `block_ads` | `boolean` |  |
| `include_external` | `boolean` |  |
| `balancer` | `boolean` |  |
| `balancer_external` | `boolean` |  |
| `balancer_name` | `string` |  |
| `balancer_strategy` | `string` |  |
| `balancer_position` | `string` |  |
| `probe_url` | `string` |  |
| `probe_interval` | `string` |  |

</details>

```json
{
  "clients": [],
  "direct_domains": [],
  "direct_ips": [],
  "block_ads": false,
  "include_external": true,
  "balancer": false,
  "balancer_external": true,
  "balancer_name": "⚡ Auto (fastest)",
  "balancer_strategy": "leastPing",
  "balancer_position": "top",
  "probe_url": "https://www.gstatic.com/generate_204",
  "probe_interval": "1m"
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/json-sub-settings' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"clients": [], "direct_domains": [], "direct_ips": [], "block_ads": false, "include_external": true, "balancer": false, "balancer_external": true, "balancer_name": "⚡ Auto (fastest)", "balancer_strategy": "leastPing", "balancer_position": "top", "probe_url": "https://www.gstatic.com/generate_204", "probe_interval": "1m"}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-domain` {#get-api-sub-domain}

**Read Sub Domain**

Which address, path and last part the subscription links use

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `DomainState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `settings` | `DomainSettings` |  |
| `env_url_prefix` | `string` |  |
| `env_path` | `string` |  |
| `example` | `string` |  |

</details>

```json
{
  "settings": {
    "url_prefix": "",
    "path": "",
    "suffix": "",
    "mode": "normal",
    "admins": {}
  },
  "env_url_prefix": "string",
  "env_path": "string",
  "example": "string"
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-domain' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/sub-domain` {#put-api-sub-domain}

**Update Sub Domain**

Change the address, path and last part used in subscription links.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `DomainSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url_prefix` | `string` | no |  |
| `path` | `string` | no |  |
| `suffix` | `string` | no |  |
| `mode` | `string` | no | Default: `"normal"`. |
| `admins` | `object` | no | Default: `{}`. |

```json
{
  "url_prefix": "",
  "path": "",
  "suffix": "",
  "mode": "normal",
  "admins": {}
}
```

**Response** `200` Successful Response · `DomainState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `settings` | `DomainSettings` |  |
| `env_url_prefix` | `string` |  |
| `env_path` | `string` |  |
| `example` | `string` |  |

</details>

```json
{
  "settings": {
    "url_prefix": "",
    "path": "",
    "suffix": "",
    "mode": "normal",
    "admins": {}
  },
  "env_url_prefix": "string",
  "env_path": "string",
  "example": "string"
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/sub-domain' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"url_prefix": "", "path": "", "suffix": "", "mode": "normal", "admins": {}}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/sub-domain/example` {#post-api-sub-domain-example}

**Example Sub Domain**

the link a user would get with these (unsaved) settings

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `DomainSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url_prefix` | `string` | no |  |
| `path` | `string` | no |  |
| `suffix` | `string` | no |  |
| `mode` | `string` | no | Default: `"normal"`. |
| `admins` | `object` | no | Default: `{}`. |

```json
{
  "url_prefix": "",
  "path": "",
  "suffix": "",
  "mode": "normal",
  "admins": {}
}
```

**Response** `200` Successful Response · `DomainState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `settings` | `DomainSettings` |  |
| `env_url_prefix` | `string` |  |
| `env_path` | `string` |  |
| `example` | `string` |  |

</details>

```json
{
  "settings": {
    "url_prefix": "",
    "path": "",
    "suffix": "",
    "mode": "normal",
    "admins": {}
  },
  "env_url_prefix": "string",
  "env_path": "string",
  "example": "string"
}
```

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/sub-domain/example' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"url_prefix": "", "path": "", "suffix": "", "mode": "normal", "admins": {}}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-settings` {#get-api-sub-settings}

**Read Sub Settings**

Subscription page settings: announcement, profile title and per-state metadata

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `SubscriptionSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `default_template` | `string` |  |
| `expired_template` | `string` |  |
| `disabled_template` | `string` |  |
| `limited_template` | `string` |  |
| `near_expire_template` | `string` |  |
| `near_expire_days` | `integer` |  |
| `update_interval` | `integer` |  |
| `device_limit_message` | `string` |  |
| `sub_rate_limit` | `integer` |  |
| `fingerprint_devices` | `boolean` |  |
| `admins` | `object` |  |

</details>

```json
{
  "default_template": "",
  "expired_template": "",
  "disabled_template": "",
  "limited_template": "",
  "near_expire_template": "",
  "near_expire_days": 1,
  "update_interval": 0,
  "device_limit_message": "",
  "sub_rate_limit": 0,
  "fingerprint_devices": false,
  "admins": {}
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-settings' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/sub-settings` {#put-api-sub-settings}

**Update Sub Settings**

Change subscription settings (update interval, support/announce texts, rate limit and similar).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `SubscriptionSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_template` | `string` | no |  |
| `expired_template` | `string` | no |  |
| `disabled_template` | `string` | no |  |
| `limited_template` | `string` | no |  |
| `near_expire_template` | `string` | no |  |
| `near_expire_days` | `integer` | no | Default: `1`. |
| `update_interval` | `integer` | no |  |
| `device_limit_message` | `string` | no |  |
| `sub_rate_limit` | `integer` | no | Default: `0`. |
| `fingerprint_devices` | `boolean` | no | Default: `false`. |
| `admins` | `object` | no | Default: `{}`. |

```json
{
  "default_template": "",
  "expired_template": "",
  "disabled_template": "",
  "limited_template": "",
  "near_expire_template": "",
  "near_expire_days": 1,
  "update_interval": 0,
  "device_limit_message": "",
  "sub_rate_limit": 0,
  "fingerprint_devices": false,
  "admins": {}
}
```

**Response** `200` Successful Response · `SubscriptionSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `default_template` | `string` |  |
| `expired_template` | `string` |  |
| `disabled_template` | `string` |  |
| `limited_template` | `string` |  |
| `near_expire_template` | `string` |  |
| `near_expire_days` | `integer` |  |
| `update_interval` | `integer` |  |
| `device_limit_message` | `string` |  |
| `sub_rate_limit` | `integer` |  |
| `fingerprint_devices` | `boolean` |  |
| `admins` | `object` |  |

</details>

```json
{
  "default_template": "",
  "expired_template": "",
  "disabled_template": "",
  "limited_template": "",
  "near_expire_template": "",
  "near_expire_days": 1,
  "update_interval": 0,
  "device_limit_message": "",
  "sub_rate_limit": 0,
  "fingerprint_devices": false,
  "admins": {}
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/sub-settings' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"default_template": "", "expired_template": "", "disabled_template": "", "limited_template": "", "near_expire_template": "", "near_expire_days": 1, "update_interval": 0, "device_limit_message": "", "sub_rate_limit": 0, "fingerprint_devices": false, "admins": {}}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-webpage` {#get-api-sub-webpage}

**Read Sub Webpage**

What users see when they open their subscription link in a browser

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `WebPageSettings-Output`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `title` | `string` |  |
| `logo_url` | `string` |  |
| `support_url` | `string` |  |
| `accent` | `string` |  |
| `theme` | `string` |  |
| `style` | `string` |  |
| `default_lang` | `string` |  |
| `languages` | `string[]` |  |
| `happ_crypt` | `boolean` |  |
| `show_links` | `boolean` |  |
| `show_qr` | `boolean` |  |
| `sections` | `Section[]` |  |
| `intro` | `object` |  |
| `footer` | `object` |  |
| `texts` | `object` |  |
| `custom_css` | `string` |  |
| `link_domain` | `string` |  |
| `show_devices` | `boolean` |  |
| `lock_on_device_limit` | `boolean` |  |
| `apps` | `object` |  |

</details>

```json
{
  "enabled": true,
  "title": "",
  "logo_url": "",
  "support_url": "",
  "accent": "#5b7cfa",
  "theme": "auto",
  "style": "soft",
  "default_lang": "auto",
  "languages": [
    "en",
    "tr",
    "tk",
    "ru",
    "fa",
    "zh"
  ],
  "happ_crypt": true,
  "show_links": true,
  "show_qr": true,
  "sections": [
    {
      "id": "announce",
      "enabled": true
    },
    {
      "id": "intro",
      "enabled": true
    },
    {
      "id": "user",
      "enabled": true
    },
    {
      "id": "devices",
      "enabled": true
    },
    {
      "id": "install",
      "enabled": true
    },
    {
      "id": "vpn",
      "enabled": true
    },
    {
      "id": "link",
      "enabled": true
    },
    {
      "id": "configs",
      "enabled": true
    }
  ],
  "intro": {},
  "footer": {},
  "texts": {},
  "custom_css": "",
  "link_domain": "",
  "show_devices": true,
  "lock_on_device_limit": true,
  "apps": {
    "key": [
      {
        "id": null,
        "name": null,
        "featured": null,
        "deeplink": null,
        "crypt": null,
        "install": null,
        "note": null
      }
    ]
  }
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-webpage' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/sub-webpage` {#put-api-sub-webpage}

**Update Sub Webpage**

Change what users see when they open their subscription link in a browser.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `WebPageSettings-Input`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | no | Default: `true`. |
| `title` | `string` | no |  |
| `logo_url` | `string` | no |  |
| `support_url` | `string` | no |  |
| `accent` | `string` | no | Default: `"#5b7cfa"`. |
| `theme` | `string` | no | Default: `"auto"`. |
| `style` | `string` | no | Default: `"soft"`. |
| `default_lang` | `string` | no | Default: `"auto"`. |
| `languages` | `string[]` | no | Default: `["en", "tr", "tk", "ru", "fa", "zh"]`. |
| `happ_crypt` | `boolean` | no | Default: `true`. |
| `show_links` | `boolean` | no | Default: `true`. |
| `show_qr` | `boolean` | no | Default: `true`. |
| `sections` | `Section[]` | no | Default: `[{"id": "announce", "enabled": true}, {"id": "intro", "enabled": true}, {"id": "user", "enabled": true}, {"id": "devices", "enabled": true}, {"id": "install", "enabled": true}, {"id": "vpn", "enabled": true}, {"id": "link", "enabled": true}, {"id": "configs", "enabled": true}]`. |
| `intro` | `object` | no | Default: `{}`. |
| `footer` | `object` | no | Default: `{}`. |
| `texts` | `object` | no | Default: `{}`. |
| `custom_css` | `string` | no |  |
| `link_domain` | `string` | no |  |
| `show_devices` | `boolean` | no | Default: `true`. |
| `lock_on_device_limit` | `boolean` | no | Default: `true`. |
| `apps` | `object` | no |  |

```json
{
  "enabled": true,
  "title": "",
  "logo_url": "",
  "support_url": "",
  "accent": "#5b7cfa",
  "theme": "auto",
  "style": "soft",
  "default_lang": "auto",
  "languages": [
    "en",
    "tr",
    "tk",
    "ru",
    "fa",
    "zh"
  ],
  "happ_crypt": true,
  "show_links": true,
  "show_qr": true,
  "sections": [
    {
      "id": "announce",
      "enabled": true
    },
    {
      "id": "intro",
      "enabled": true
    },
    {
      "id": "user",
      "enabled": true
    },
    {
      "id": "devices",
      "enabled": true
    },
    {
      "id": "install",
      "enabled": true
    },
    {
      "id": "vpn",
      "enabled": true
    },
    {
      "id": "link",
      "enabled": true
    },
    {
      "id": "configs",
      "enabled": true
    }
  ],
  "intro": {},
  "footer": {},
  "texts": {},
  "custom_css": "",
  "link_domain": "",
  "show_devices": true,
  "lock_on_device_limit": true,
  "apps": {
    "key": [
      {
        "id": null,
        "name": null,
        "featured": null,
        "deeplink": null,
        "crypt": null,
        "install": null,
        "note": null
      }
    ]
  }
}
```

**Response** `200` Successful Response · `WebPageSettings-Output`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `title` | `string` |  |
| `logo_url` | `string` |  |
| `support_url` | `string` |  |
| `accent` | `string` |  |
| `theme` | `string` |  |
| `style` | `string` |  |
| `default_lang` | `string` |  |
| `languages` | `string[]` |  |
| `happ_crypt` | `boolean` |  |
| `show_links` | `boolean` |  |
| `show_qr` | `boolean` |  |
| `sections` | `Section[]` |  |
| `intro` | `object` |  |
| `footer` | `object` |  |
| `texts` | `object` |  |
| `custom_css` | `string` |  |
| `link_domain` | `string` |  |
| `show_devices` | `boolean` |  |
| `lock_on_device_limit` | `boolean` |  |
| `apps` | `object` |  |

</details>

```json
{
  "enabled": true,
  "title": "",
  "logo_url": "",
  "support_url": "",
  "accent": "#5b7cfa",
  "theme": "auto",
  "style": "soft",
  "default_lang": "auto",
  "languages": [
    "en",
    "tr",
    "tk",
    "ru",
    "fa",
    "zh"
  ],
  "happ_crypt": true,
  "show_links": true,
  "show_qr": true,
  "sections": [
    {
      "id": "announce",
      "enabled": true
    },
    {
      "id": "intro",
      "enabled": true
    },
    {
      "id": "user",
      "enabled": true
    },
    {
      "id": "devices",
      "enabled": true
    },
    {
      "id": "install",
      "enabled": true
    },
    {
      "id": "vpn",
      "enabled": true
    },
    {
      "id": "link",
      "enabled": true
    },
    {
      "id": "configs",
      "enabled": true
    }
  ],
  "intro": {},
  "footer": {},
  "texts": {},
  "custom_css": "",
  "link_domain": "",
  "show_devices": true,
  "lock_on_device_limit": true,
  "apps": {
    "key": [
      {
        "id": null,
        "name": null,
        "featured": null,
        "deeplink": null,
        "crypt": null,
        "install": null,
        "note": null
      }
    ]
  }
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/sub-webpage' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-webpage/default-apps` {#get-api-sub-webpage-default-apps}

**Read Sub Webpage Default Apps**

the built-in app catalog, per platform

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-webpage/default-apps' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/sub-webpage/defaults` {#get-api-sub-webpage-defaults}

**Read Sub Webpage Defaults**

the built-in app catalog and the page's own texts per language

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/sub-webpage/defaults' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/sub-webpage/preview` {#post-api-sub-webpage-preview}

**Preview Sub Webpage**

the page as a user would see it, with settings that aren't saved yet

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `WebPagePreview`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `settings` | `WebPageSettings-Input` | yes |  |
| `username` | `string` | no |  |

```json
{
  "settings": {
    "enabled": true,
    "title": "",
    "logo_url": "",
    "support_url": "",
    "accent": "#5b7cfa",
    "theme": "auto",
    "style": "soft",
    "default_lang": "auto",
    "languages": [
      "en",
      "tr",
      "tk",
      "ru",
      "fa",
      "zh"
    ],
    "happ_crypt": true,
    "show_links": true,
    "show_qr": true,
    "sections": [
      {
        "id": "announce",
        "enabled": true
      },
      {
        "id": "intro",
        "enabled": true
      },
      {
        "id": "user",
        "enabled": true
      },
      {
        "id": "devices",
        "enabled": true
      },
      {
        "id": "install",
        "enabled": true
      },
      {
        "id": "vpn",
        "enabled": true
      },
      {
        "id": "link",
        "enabled": true
      },
      {
        "id": "configs",
        "enabled": true
      }
    ],
    "intro": {},
    "footer": {},
    "texts": {},
    "custom_css": "",
    "link_domain": "",
    "show_devices": true,
    "lock_on_device_limit": true,
    "apps": {
      "key": []
    }
  },
  "username": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/sub-webpage/preview' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{ ... }'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/user-cleanup` {#get-api-user-cleanup}

**Read User Cleanup**

Auto-delete settings for expired users.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `UserCleanupSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `auto_delete_enabled` | `boolean` |  |
| `auto_delete_hours` | `integer` |  |
| `include_limited` | `boolean` |  |
| `include_disabled` | `boolean` |  |

</details>

```json
{
  "auto_delete_enabled": false,
  "auto_delete_hours": 24,
  "include_limited": false,
  "include_disabled": false
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/user-cleanup' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/user-cleanup` {#put-api-user-cleanup}

**Update User Cleanup**

Change the auto-delete rules for expired users.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `UserCleanupSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auto_delete_enabled` | `boolean` | no | Default: `false`. |
| `auto_delete_hours` | `integer` | no | Default: `24`. |
| `include_limited` | `boolean` | no | Default: `false`. |
| `include_disabled` | `boolean` | no | Default: `false`. |

```json
{
  "auto_delete_enabled": false,
  "auto_delete_hours": 24,
  "include_limited": false,
  "include_disabled": false
}
```

**Response** `200` Successful Response · `UserCleanupSettings`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `auto_delete_enabled` | `boolean` |  |
| `auto_delete_hours` | `integer` |  |
| `include_limited` | `boolean` |  |
| `include_disabled` | `boolean` |  |

</details>

```json
{
  "auto_delete_enabled": false,
  "auto_delete_hours": 24,
  "include_limited": false,
  "include_disabled": false
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/user-cleanup' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"auto_delete_enabled": false, "auto_delete_hours": 24, "include_limited": false, "include_disabled": false}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/weather-location` {#get-api-weather-location}

**Get Weather Location**

the current admin's own weather location (the widget calls Open-Meteo itself with these)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `WeatherLocation`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `lat` | `number` |  |
| `lon` | `number` |  |

</details>

```json
{
  "name": "",
  "lat": 0,
  "lon": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/weather-location' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/weather-location` {#put-api-weather-location}

**Set Weather Location**

set (or clear, by sending empty coordinates) the current admin's weather location

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Request body** `application/json` · `WeatherLocation`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `lat` | `number` | no |  |
| `lon` | `number` | no |  |

```json
{
  "name": "",
  "lat": 0,
  "lon": 0
}
```

**Response** `200` Successful Response · `WeatherLocation`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `lat` | `number` |  |
| `lon` | `number` |  |

</details>

```json
{
  "name": "",
  "lat": 0,
  "lon": 0
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/weather-location' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "", "lat": 0, "lon": 0}'
```

</section>
