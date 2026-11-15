---
title: Groups
outline: [2, 3]
---

# Groups

Inbound groups.

<p class="api-count">4 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/groups` {#get-api-groups}

**List Groups**

All host groups with their hosts and the admins limited to them

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `GroupsResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `groups` | `Group[]` |  |
| `hosts` | `GroupHost[]` |  |
| `vpn` | `GroupVPN[]` |  |

</details>

```json
{
  "groups": [
    {
      "name": "string",
      "note": "",
      "hosts": [],
      "admins": [],
      "vpn": []
    }
  ],
  "hosts": [
    {
      "id": 0,
      "remark": "string",
      "address": "string",
      "inbound_tag": "string",
      "groups": [],
      "is_disabled": false
    }
  ],
  "vpn": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/groups' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/groups` {#post-api-groups}

**Create Group**

Create an inbound group.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `GroupCreate`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | yes |  |
| `note` | `string` | no |  |

```json
{
  "name": "string",
  "note": ""
}
```

**Response** `200` Successful Response · `GroupsResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `groups` | `Group[]` |  |
| `hosts` | `GroupHost[]` |  |
| `vpn` | `GroupVPN[]` |  |

</details>

```json
{
  "groups": [
    {
      "name": "string",
      "note": "",
      "hosts": [],
      "admins": [],
      "vpn": []
    }
  ],
  "hosts": [
    {
      "id": 0,
      "remark": "string",
      "address": "string",
      "inbound_tag": "string",
      "groups": [],
      "is_disabled": false
    }
  ],
  "vpn": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/groups' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string", "note": ""}'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/groups/{name}` {#put-api-groups-name}

**Modify Group**

Change a group's inbounds.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | `string` | yes |  |

**Request body** `application/json` · `GroupModify`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | no |  |
| `note` | `string` | no |  |
| `hosts` | `integer[]` | no |  |
| `vpn` | `string[]` | no |  |

```json
{
  "name": "string",
  "note": "string",
  "hosts": [
    0
  ],
  "vpn": [
    "string"
  ]
}
```

**Response** `200` Successful Response · `GroupsResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `groups` | `Group[]` |  |
| `hosts` | `GroupHost[]` |  |
| `vpn` | `GroupVPN[]` |  |

</details>

```json
{
  "groups": [
    {
      "name": "string",
      "note": "",
      "hosts": [],
      "admins": [],
      "vpn": []
    }
  ],
  "hosts": [
    {
      "id": 0,
      "remark": "string",
      "address": "string",
      "inbound_tag": "string",
      "groups": [],
      "is_disabled": false
    }
  ],
  "vpn": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X PUT 'https://YOUR-PANEL/api/groups/<name>' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"name": "string", "note": "string", "hosts": [0], "vpn": ["string"]}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/groups/{name}` {#delete-api-groups-name}

**Delete Group**

Delete a group. Its hosts become ungrouped and admins lose the group.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | `string` | yes |  |

**Response** `200` Successful Response · `GroupsResponse`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `groups` | `Group[]` |  |
| `hosts` | `GroupHost[]` |  |
| `vpn` | `GroupVPN[]` |  |

</details>

```json
{
  "groups": [
    {
      "name": "string",
      "note": "",
      "hosts": [],
      "admins": [],
      "vpn": []
    }
  ],
  "hosts": [
    {
      "id": 0,
      "remark": "string",
      "address": "string",
      "inbound_tag": "string",
      "groups": [],
      "is_disabled": false
    }
  ],
  "vpn": []
}
```

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/groups/<name>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
