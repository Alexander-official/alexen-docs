---
title: Backups
outline: [2, 3]
---

# Backups

Create, download and restore backups.

<p class="api-count">7 endpoints</p>

<section class="ep">

## <span class="m m-get">GET</span> `/api/backup` {#get-api-backup}

**Download Backup**

a backup of the panel as it is now (zip)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/backup' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/backup/check` {#post-api-backup-check}

**Check Backup**

what a backup file contains (nothing is changed)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `multipart/form-data` · `Body_check_backup_api_backup_check_post`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/backup/check' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/backup/file/{name}` {#get-api-backup-file-name}

**Download Saved**

Download a saved backup file.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/backup/file/<name>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-delete">DELETE</span> `/api/backup/file/{name}` {#delete-api-backup-file-name}

**Delete Saved**

Delete a saved backup file.

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X DELETE 'https://YOUR-PANEL/api/backup/file/<name>' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-get">GET</span> `/api/backup/list` {#get-api-backup-list}

**List Backups**

List backups saved on the server (name, size, time).

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X GET 'https://YOUR-PANEL/api/backup/list' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/backup/now` {#post-api-backup-now}

**Backup Now**

write a backup to the server's backups folder

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/backup/now' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>

<section class="ep">

## <span class="m m-post">POST</span> `/api/backup/restore` {#post-api-backup-restore}

**Restore Backup**

replace the panel's data with a backup, then restart (the current state is saved first)

<p class="badges"><span class="b b-sudo">Sudo admin only</span></p>

**Request body** `multipart/form-data` · `Body_restore_backup_api_backup_restore_post`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `file` | `string` | yes |  |

**Response** `200` Successful Response

Errors: `401` Unauthorized, `403` Forbidden

```bash
curl -X POST 'https://YOUR-PANEL/api/backup/restore' \
  -H 'Authorization: Bearer $TOKEN'
```

</section>
