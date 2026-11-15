---
title: Blocked IPs
outline: [2, 3]
---

# Blocked IPs

Block addresses that attack the panel (brute force).

<p class="api-count">4 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/blocked-ips` {#get-api-blocked-ips}

**Get Blocked**

List blocked addresses, the failed-login attempts of the last 24 hours grouped by IP, the auto-block switch, its threshold and your own IP.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/blocked-ips' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/blocked-ips` {#post-api-blocked-ips}

**Block**

Block an IP address or CIDR range (`ip`, optional `reason`). You cannot block your own address or loopback. Blocked addresses get HTTP 403 on login and password change.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `BlockIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ip` | `string` | yes |  |
| `reason` | `string` | no |  |

```json
{
  "ip": "string",
  "reason": ""
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/blocked-ips' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"ip": "string", "reason": ""}'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/blocked-ips` {#delete-api-blocked-ips}

**Unblock**

Unblock an address (`ip` query parameter).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `ip` | query | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X DELETE 'https://YOUR-PANEL/api/blocked-ips?ip=...' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/blocked-ips/auto` {#put-api-blocked-ips-auto}

**Auto**

Turn automatic blocking on or off. When on, an IP that reaches the per-IP failed-login limit is blocked automatically.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `AutoIn`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | yes |  |

```json
{
  "enabled": false
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/blocked-ips/auto' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": false}'
```

</section>
