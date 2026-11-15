# Introduction

**Alexen** is a multi-protocol proxy management panel by Alexander LLC, built on the Xray core. It lets you sell and run VPN access: create users, give them limits, spread them across servers (nodes), and hand them one subscription link that works in every popular client app.

![Alexen dashboard](/img/dashboard.webp)

## What you get

<div class="cards">
<div class="card"><b>Protocols</b><span>VLESS, VMess, Trojan, Shadowsocks and Hysteria2, with Reality, TLS, xHTTP, WebSocket and more.</span></div>
<div class="card"><b>Users</b><span>Data and time limits, periodic reset, IP limit, device (HWID) limit, notes, personal messages.</span></div>
<div class="card"><b>Resellers</b><span>Sub-admins with user and traffic quotas, expiry and their own host groups.</span></div>
<div class="card"><b>Nodes</b><span>Many servers under one panel, installed over SSH from the dashboard.</span></div>
<div class="card"><b>Subscriptions</b><span>Branded web page, app setup per platform, QR codes, JSON and Clash formats.</span></div>
<div class="card"><b>Operations</b><span>Backups, one-click updates with rollback, Telegram bot, activity log, license.</span></div>
</div>

## Roles

| Role | Can do |
| --- | --- |
| **Sudo admin** | Full access: users, nodes, hosts, settings, backups, updates, license and other admins. |
| **Reseller (admin)** | Manages only its own users, inside the quotas you set. |

## How the pieces fit

1. **Inbounds** are Xray listeners (port, protocol, security) defined in the core config.
2. **Hosts** are the addresses users connect to, attached to an inbound. One inbound can have many hosts.
3. **Nodes** are extra servers running Xray, controlled by the panel.
4. **Users** get a subscription link. Their app downloads the list of hosts from it.

Next: [First steps](/guide/first-steps).
