# Dashboard & users

The home page lists every user with status, devices, connected IPs and data usage. The cards on top show active users, total data usage, who is online now and who expires soon.

![Users list](/img/dashboard.webp)

## Create and edit a user

Press **Create User**. Press a user's name to edit.

![Edit user](/img/user-edit.webp)

| Field | What it does |
| --- | --- |
| **Username** | 3 to 32 letters, digits or `_`. Can be renamed later without losing usage. |
| **Owner admin** | Which admin the user belongs to (sudo only). |
| **Data limit** | Total traffic. Empty or 0 is unlimited. |
| **Periodic usage reset** | Reset the used traffic every day, week, month or year. |
| **Expiry date** | When the account stops. Quick buttons add 1, 3, 7 or 30 days. |
| **On hold** | The timer starts at the first connection, not now. |
| **IP limit** | How many IPs may be connected at once. Extra IPs are blocked until one disconnects. |
| **Device limit (HWID)** | How many devices may fetch the subscription. |
| **Protocols / inbounds** | Which protocols and inbounds the user gets. |
| **Note** and **personal message** | A private note for admins, and a text shown inside the user's app. |
| **Custom subscription link** | A readable link like `/sub/my-name`. While set, only it works. |

## Statuses

| Status | Meaning |
| --- | --- |
| Active | Works. |
| On hold | Waiting for the first connection to start the timer. |
| Limited | The data limit is used up. |
| Expired | The expiry date has passed. |
| Disabled | Switched off by an admin. |

## Quick actions

- **Link icon**: copy the subscription link. **QR icon**: show the QR code.
- **Quick templates** in the create dialog fill a preset (for example 1 month, 50 GB).
- Use the toolbar to filter by status or admin, sort, and run bulk actions such as deleting all expired users or moving users to another owner.
- **Terminate session**: in the online view, kick a single IP with one click.

## Link and QR code

The link icon copies the user's subscription link, the middle icon copies their configs, and the QR icon shows a QR code the customer can scan.

![QR code of the subscription link](/img/user-links.webp)

::: warning Renaming
After renaming a user the old default subscription link stops working, because it contains the name. Send the new link, or give the user a custom link that survives renames.
:::

Related API: [Users](/api/user), [User templates](/api/user-template), [Online users](/api/online).
