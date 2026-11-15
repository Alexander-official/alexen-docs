# Google links

Open **Settings → Google links**. This gives a user the link saved in their **Note** as their subscription link, instead of the panel's own link. It is made for links that live outside the panel, for example a Google Drive file that is reachable where your own domain is blocked.

![Google links](/img/google-links.webp)

## How it works

1. Something outside the panel makes the file (a Google Drive file, for instance) and writes its link into the user's **Note**. This is usually a webhook: the panel tells your service when a user is created or changed, and the service writes the link back through the API.
2. With **Use the link in the note** on, a user whose note starts with one of the **Link starts** gets that link as their subscription link: in the panel, in the Telegram bot and in the QR code.
3. Users whose note has no such link keep the panel's own link.

Only the first word of the note counts, and it has to start with one of the listed link starts (each must begin with `https://`). The default is `https://www.googleapis.com/`.

## Settings

| Setting | Meaning |
| --- | --- |
| Use the link in the note | Off by default. Turn it on to start using note links. |
| Link starts | Which links count. Add your own, for example another storage address. |
| Users with such a note | How many users would get a note link right now. |
| Try a note | Paste a note to see whether its link would be used. |

## Webhook

Below the settings, the **Webhook** card holds everything the server's `.env` used to hold. You manage it here; no server access or restart is needed.

![Webhook settings](/img/google-links.webp)

| Setting | Meaning |
| --- | --- |
| Addresses | One web address per line. Every event is posted to all of them. |
| Secret | Sent in the `x-webhook-secret` header, so your service can check a request is from this panel. Shown in full (only sudo admins see this page), with show, copy and generate buttons. |
| Events sent | User created, updated, deleted; status changed; usage reset; subscription link renewed; usage threshold reached; days-left threshold reached; admin sign-in; hosts, groups, external configs or cores changed. |
| Send every user again | Off by default. When hosts, groups, external configs or cores change, every user is sent as updated about 15 seconds after the last change (several edits in a row send once). Use it when your service builds a file per user (for example a Google Drive file), so the files are rebuilt after a host change. **Send all users now** does it on demand. |
| Usage thresholds | Send an event when a user has used this many percent, for example `80, 90`. |
| Days-left thresholds | Send an event when this many days are left, for example `3, 7`. |
| Retry after / Retries | How long to wait and how many times to try again when your service did not answer OK. |

Host changes also send a `hosts_changed` event, for example `[{ "action": "hosts_changed", "what": "hosts", "by": "admin" }]`.

**Send a test event** posts a test (`action: "test"`) to the addresses in the form and shows what each one answered: HTTP status and time, or the error. The card also shows the latest attempt and how many events are waiting.

Until you save here, the `.env` values (`WEBHOOK_ADDRESS`, `WEBHOOK_SECRET`, `NOTIFY_*`) apply, and the card says **From .env**. Once saved, the panel's settings win (**Set in the panel**). **Use the .env values** goes back.

Your service receives a JSON list of events, for example:

```json
[{ "action": "user_created", "username": "demo_user", "by": { "username": "admin" }, "user": { "...": "..." } }]
```

::: tip Keep the link working
The link in the note is used exactly as written. If the file behind it is deleted or its key is revoked, the user's app stops updating, so keep the file and the key alive.
:::

Related API: [Note links](/api/note-links), [Webhook](/api/webhook).
