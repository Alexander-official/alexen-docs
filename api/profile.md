---
title: Profile
outline: [2, 3]
---

# Profile

The signed-in admin's own profile.

<p class="api-count">4 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/profile` {#get-api-profile}

**Get Profile**

my profile

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Response** `200` Successful Response · `Profile`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `role` | `string` |  |
| `display_name` | `string` |  |
| `bio` | `string` |  |
| `contact` | `string` |  |
| `avatar` | `string` |  |
| `created_at` | `string (date-time)` |  |
| `updated_at` | `string (date-time)` |  |
| `users` | `integer` |  |
| `users_limit` | `integer` |  |
| `traffic_limit` | `integer` |  |
| `traffic_used` | `integer` |  |
| `expire_date` | `string (date-time)` |  |

</details>

```json
{
  "username": "string",
  "role": "string",
  "display_name": "",
  "bio": "",
  "contact": "",
  "avatar": "string",
  "created_at": "2026-01-01T00:00:00Z",
  "updated_at": "2026-01-01T00:00:00Z",
  "users": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "traffic_used": 0,
  "expire_date": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/profile' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/profile` {#put-api-profile}

**Edit Profile**

change my picture, name, bio or contact (a field left out stays as it is)

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Request body** `application/json` · `ProfileEdit`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `display_name` | `string` | no |  |
| `bio` | `string` | no |  |
| `contact` | `string` | no |  |
| `avatar` | `string` | no |  |

```json
{
  "display_name": "string",
  "bio": "string",
  "contact": "string",
  "avatar": "string"
}
```

**Response** `200` Successful Response · `Profile`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `username` | `string` |  |
| `role` | `string` |  |
| `display_name` | `string` |  |
| `bio` | `string` |  |
| `contact` | `string` |  |
| `avatar` | `string` |  |
| `created_at` | `string (date-time)` |  |
| `updated_at` | `string (date-time)` |  |
| `users` | `integer` |  |
| `users_limit` | `integer` |  |
| `traffic_limit` | `integer` |  |
| `traffic_used` | `integer` |  |
| `expire_date` | `string (date-time)` |  |

</details>

```json
{
  "username": "string",
  "role": "string",
  "display_name": "",
  "bio": "",
  "contact": "",
  "avatar": "string",
  "created_at": "2026-01-01T00:00:00Z",
  "updated_at": "2026-01-01T00:00:00Z",
  "users": 0,
  "users_limit": 0,
  "traffic_limit": 0,
  "traffic_used": 0,
  "expire_date": "2026-01-01T00:00:00Z"
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/profile' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"display_name": "string", "bio": "string", "contact": "string", "avatar": "string"}'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/profile/password` {#post-api-profile-password}

**Change Password**

my own password: the current one first; my other sessions end, this one goes on

<p class="badges"><span class="b b-auth">Any admin</span></p>

**Request body** `application/json` · `PasswordChange`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current` | `string` | yes |  |
| `new` | `string` | yes |  |

```json
{
  "current": "string",
  "new": "string"
}
```

**Response** `200` Successful Response

Errors: `401` Unauthorized

```bash
curl -X POST 'https://YOUR-PANEL/api/profile/password' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"current": "string", "new": "string"}'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/profiles` {#get-api-profiles}

**List Profiles**

the admins' names and pictures, for the admins list (the ones this admin may see)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `object`

```json
{
  "key": {
    "display_name": "",
    "avatar": "string"
  }
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/profiles' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
