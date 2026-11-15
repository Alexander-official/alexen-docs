# Subscription statistics

Open **Subscription statistics** in the menu. Every time an app fetches a subscription, the panel records who asked, with which app, which format and how many bytes it sent.

![Subscription statistics](/img/sub-stats.webp)

## What is recorded

| Field | Example |
| --- | --- |
| User | `ali_pro` and the admin who owns them |
| IP address | `198.51.100.20` |
| App and version | Hiddify 2.0.5, v2rayNG 1.9.7, Happ, Streisand, Clash Meta, sing-box... read from the User-Agent |
| Format | links, clash, json, page |
| Size | Bytes sent for that fetch |
| Duration | Milliseconds |
| Result | 200, `429` (limited), empty answer because of the device limit, error |

Only fetches with a valid token are recorded. Requests with a made-up token (scanners) are not.

## Overview tab

- Totals: fetches, users, IPs, traffic, average and largest size, average time, limited and blocked counts.
- A chart over time (hourly up to 72 hours, otherwise daily).
- Breakdown by app and by format.
- Top users and top IPs. Click a row to open its records. Next to an IP there is a **Block** button.

## Log tab

Every single fetch, newest first. Filter by user, IP, app, format and status.

## Limits tab (sudo)

| Setting | Effect |
| --- | --- |
| Most fetches per minute from one IP | Over the limit gets HTTP 429 with `Retry-After`. `0` = no limit. |
| Most fetches per hour for one user | Same, per user. |
| Shortest time between two fetches | Same as the rate limit in Subscription settings. |
| Keep records for (days) | Older records are deleted every day. Default 30. |
| Record fetches | Switch recording off. |
| Delete all records | Clears the log. |

Admins see only the fetches of their own users.

Related API: [Subscription statistics](/api/subscription-statistics).
