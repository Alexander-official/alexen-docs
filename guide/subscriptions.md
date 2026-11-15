# Subscriptions

Users get one link, `https://your-domain/sub/<token>`. Their app downloads the host list from it. The same link also serves other formats (Clash, sing-box, JSON) depending on the client.

![Subscription settings](/img/sub-settings.webp)

## Subscription page

When a user opens the link in a browser they see a branded page with their account, app setup per platform (iOS, Android, Windows, macOS, Linux), the link, a QR code and, if enabled, their devices.

In **Settings → Sub → Web page** you can change the title, logo, support link, accent colour and theme, the languages offered (English, Türkçe, Türkmençe, Русский, فارسی, 中文), which sections appear, the texts per language, the app list and custom CSS. **Preview** shows the result as a real user.

### Look, apps and JSON

![Look](/img/sub-look.webp)

**Look** picks the card style (Soft, Liquid glass, Clay), the theme and the accent colour of the page. **Apps** is the list of client apps per platform with their import links: reorder, edit and add apps.

![Apps](/img/sub-apps.webp)

The **JSON** tab controls the JSON subscription: which clients get it, sites that go direct (not through the VPN), ad blocking, and the automatic (balancer) config.

![JSON subscription](/img/sub-json.webp)

## Link and domain

**Domain settings** sets the address, path and last part of every subscription link (for example `https://sub.example.com/sub/<token>`). Links already handed out keep working. Resellers can have their own domain.

![Domain settings](/img/domain.webp)

## Texts shown in apps

The **Sub page** tab holds the title and announcement apps show. Per state you can set different texts: expired, disabled, limited and near expiry. Placeholders: `{username}`, `{used}`, `{limit}`, `{remaining}`, `{expiretime}`, `{days}`, `{token}`.

## Extra configs

**External Configs** adds extra links to every link-based subscription and sets the order of links and protocols.

![External configs](/img/external-configs.webp)

## Limits

- **Update interval:** how often apps are told to refresh, in hours.
- **Rate limit:** the shortest time between two fetches of one user. More rules per IP and per user are in [Subscription statistics](/guide/sub-stats).
- **Device (HWID) limit:** a user can fetch the subscription from only a set number of devices. Over the limit, the app gets an empty list and a message.

Related API: [Subscription](/api/subscription), [Settings](/api/settings).
