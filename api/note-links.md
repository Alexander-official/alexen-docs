---
title: Note links
outline: [2, 3]
---

# Note links

Use the link kept in a user's note (for example a Google Drive file) as their subscription link.

<p class="api-count">2 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/note-link` {#get-api-note-link}

**Read Note Link**

Whether the link in a user's note is used as their subscription link, which link starts count,
how many users have such a note, and the state of the webhook that usually writes it.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response · `NoteLinkState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `prefixes` | `string[]` |  |
| `matching_users` | `integer` |  |
| `total_users` | `integer` |  |
| `webhook` | `object` |  |

</details>

```json
{
  "enabled": false,
  "prefixes": [
    "string"
  ],
  "matching_users": 0,
  "total_users": 0,
  "webhook": {}
}
```

Errors: `401` Unauthorized

```bash
curl -X GET 'https://YOUR-PANEL/api/note-link' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-put">PUT</span> `/api/note-link` {#put-api-note-link}

**Update Note Link**

Turn the note link on or off and set the link starts (`prefixes`, each starting with https://).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `application/json` · `NoteLinkSettings`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | no | Default: `false`. |
| `prefixes` | `string[]` | no | Default: `["https://www.googleapis.com/"]`. |

```json
{
  "enabled": false,
  "prefixes": [
    "https://www.googleapis.com/"
  ]
}
```

**Response** `200` Successful Response · `NoteLinkState`

<details><summary>Response fields</summary>

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `prefixes` | `string[]` |  |
| `matching_users` | `integer` |  |
| `total_users` | `integer` |  |
| `webhook` | `object` |  |

</details>

```json
{
  "enabled": false,
  "prefixes": [
    "string"
  ],
  "matching_users": 0,
  "total_users": 0,
  "webhook": {}
}
```

Errors: `401` Unauthorized

```bash
curl -X PUT 'https://YOUR-PANEL/api/note-link' \
  -H 'Authorization: Bearer $TOKEN' \
  -H 'Content-Type: application/json' \
  -d '{"enabled": false, "prefixes": ["https://www.googleapis.com/"]}'
```

</section>
