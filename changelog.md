---
title: Changelog
outline: false
---

# Changelog

## v2.3.18 <span class="date">2026-11-15</span>

- The webhook now fires on host changes too. Adding/editing/moving hosts, and changes to groups, external configs and cores (and adding a node) send a "hosts_changed" event. There is also a new switch: "Send every user again when they change" — about 15 seconds after the last change every user is sent as "user_updated" (several edits in a row send once), so a service that builds a Google Drive file per user can rebuild the files. The page has a "Send all users now" button too. Events go out in slices of 50.
- Note: the resend works once "Send every user again when they change" is switched on in the Webhook card; it is off by default.

## v2.3.16 <span class="date">2026-11-15</span>

- External configs now send a device id when they pull a subscription, like Happ: x-hwid together with the x-device-os, x-ver-os and x-device-model headers. Each source has its own HWID (if left empty one is made when you save and never changes); you can paste one or generate a new one. The device OS, version and model are set too. There are ready User-Agent choices (Happ, v2rayNG, Hiddify, Streisand) and a curl preview that shows exactly how the panel pulls the source. Existing sources pull with a fixed HWID automatically; switch off 'Send a device id (HWID) like Happ' to go back.

## v2.3.15 <span class="date">2026-11-15</span>

- The webhook is now managed from the panel (below Settings → Google links). Everything the .env had is here: addresses, the secret (shown in full, with show/copy/generate), which events are sent (user created/updated/deleted, status change, usage reset, subscription renewed, usage and days-left thresholds, sign-in), the threshold values, and the retry time and count. You can send a test event and see the latest attempt and how many are waiting. Settings saved in the panel win over .env; "Use the .env values" undoes it. No server restart needed.

## v2.3.14 <span class="date">2026-11-15</span>

- New section: Google links (Settings). A user whose Note starts with a listed link (by default https://www.googleapis.com/ — for example a Google Drive file a webhook writes into the note) is given that link as their subscription link, in the panel, the bot and the QR code. Off by default. You set the link starts, see how many users have such a note, try a note, and see the state of the webhook (WEBHOOK_ADDRESS / WEBHOOK_SECRET).
- Blocked IPs, Subscription statistics and the Core, Inbound and JSON subscription pages are now translated into Persian, Turkmen and Chinese (and Russian where missing).
- The documentation site is live: docs.alexateam.ru (guide + complete API reference).

## v2.3.13 <span class="date">2026-11-12</span>

- New section: Subscription statistics. Every subscription fetch is logged: who (user, IP), which app and version, which format, how many KB were sent and how long it took. Overview (totals, chart over time, by app / format, the users and IPs fetching most), a filterable log, and a Limits tab: most fetches per minute per IP, per hour per user, least wait between fetches (over it gets 429), and how long to keep records. Admins only see their own users. An IP that fetches too often can be blocked in one click.

## v2.3.12 <span class="date">2026-11-12</span>

- Telegram bot: a failed-login alert now includes the password that was tried; the user-edit alert says what changed (quota, expiry, status, IP/device limit, note, protocols: old → new); the new-user alert shows quota/expiry/protocols.
- New: Settings → Blocked IPs. Block an address (or a network like 1.2.3.0/24) by hand, block from the last 24 hours of failed logins in one click, or let the panel block one that keeps failing. A blocked address can't sign in; subscription links are unaffected. You can't block your own address.
- Hosts: all open/close/slide animations are gone, everything is instant.

## v2.3.11 <span class="date">2026-11-11</span>

- Hosts: host cards are fully open again like before (the summary row is gone). Inbounds open and close instantly with no animation; the arrow spin and transitions are off too. Tooltips are lighter.

## v2.3.10 <span class="date">2026-11-11</span>

- Hosts: inbounds with many hosts no longer lag. Host cards now open as a one-line summary (name + address); click the row or Edit to change one. Opening is ~5x faster and deleting a host ~2x faster. New/duplicated hosts open automatically, as do hosts with errors.

## v2.3.9 <span class="date">2026-11-11</span>

- Hosts: drag and drop inbounds (and the hosts in them) to reorder; a new core's hosts are no longer stuck at the bottom, the order applies to subscriptions too. Each host got a drag handle, the arrows stay.
- When typing a host name, type ':denmark' or ':dk' to get country suggestions; picking one inserts the flag emoji (':denmark:' converts automatically too).
- Speed: the Hosts and Core settings dialogs no longer lag: closed inbound/host fields aren't mounted anymore and the core log stream no longer re-renders the editors.

## v2.3.8 <span class="date">2026-11-10</span>

- Fix: the JSON subscription no longer emits 'allowInsecure'. Xray 26 rejects it when true (error 'The feature allowInsecure has been removed', the whole config failed to load). For servers set to allow insecure, the server certificate's sha256 fingerprint (pinnedPeerCertSha256) is now read and written instead; pcs/vcn parameters are supported too.
- External configs: new 'From JSON' kind. Paste a JSON subscription's content by hand (a list of full Xray configs, or one); naming, auto-naming, position and groups work like for the other kinds.

## v2.3.7 <span class="date">2026-11-08</span>

- Device tracking (fingerprint): WhatsApp/Telegram link previews, Dalvik/okhttp and browser requests no longer count as devices. Apps that send no HWID (Hiddify) are identified by app+version instead of IP, so a network change or sub refresh no longer registers a new phone.

## v2.3.6 <span class="date">2026-11-05</span>

- Language option for the 'Naming' modes too (random country / custom template with &#123;COUNTRY&#125; &#123;CAPITAL&#125; &#123;GEO&#125;): English, Turkish, Russian, Turkmen. 'Server name language' in the external config window.

## v2.3.5 <span class="date">2026-11-05</span>

- Automatic naming for hand-pasted (manual link) external configs too: with 'Name servers automatically' on, each link's real exit country/city is looked up and used as its name in the chosen language (EN/TR/RU/TK); no link is ever dropped. Saving the settings now renames subscription sources and auto-named links right away (a language change no longer waits for the interval).

## v2.3.4 <span class="date">2026-11-05</span>

- Automatic server naming for external subscription sources can now be in Turkish, Russian, Turkmen (or English): 'Server name language' in the source settings. Country names are fully translated; for cities the ~85 best-known are translated and the rest stay in English. Names refresh when you save.

## v2.3.3 <span class="date">2026-11-05</span>

- Hiddify and Karing now get the link-format subscription: external configs and info lines show up in these apps too (before, only the panel's own configs came through).

## v2.3.2 <span class="date">2026-11-04</span>

- xHTTP 'extra' removed: the 'xHTTP extra' field in the Hosts window is gone; subscription links and links converted from JSON subscriptions no longer carry an extra parameter (extra values saved earlier on hosts are ignored).

## v2.3.1 <span class="date">2026-11-04</span>

- Phone performance: phones in 'desktop site' mode are now treated as touch devices; the blur behind dialogs/menus and the drifting background glow are off there. The New Year decoration switches to a light mode on phones (less snow, still lights/scene, no sleigh); filter effects were removed from its animations.

## v2.3.0 <span class="date">2026-11-04</span>

- Fix: the ready-made template buttons (Trial / 1 month / …) and the +1/+3/+7/+30 day buttons wrote the expiry with milliseconds, which the server rejected, so users couldn't be created.
- The Telegram bot now sends notifications on its own: user created/deleted/edited, limit and expiry reached, usage and days-left warnings, failed/successful logins, server down/up, suspicious traffic, backup failures. Each event is switched on or off in Settings → Telegram; silent delivery and quiet hours are available.
- Backup bot: when the backup is too big (over 50 MB) it no longer repeats the warning every 10 minutes; a backup failure is reported once.
- New Year theme: three layers of snow, blinking string lights, glass fir trees, reindeer and Santa's sleigh crossing the sky (System → New Year decorations). Appearance gets 'New Year night' and 'New Year frost' presets.

## v2.2.1 <span class="date">2026-11-03</span>

- Fix: opening the user edit window crashed the page with 'useFormControlStyles returned is undefined' (caused by the 'Name & link' section added in v2.1).

## v2.2.0 <span class="date">2026-11-03</span>

- JSON subscriptions in External Configs: when a URL returns a JSON list of full Xray client configs (e.g. http://…/general2.txt) it is detected automatically and turned into share links (VLESS/VMess/Trojan/Shadowsocks/Hysteria2; xHTTP settings, Reality, TLS, ws, grpc included). Range, testing and renaming work on them too. An 'auto-select' config with several outbounds is skipped so servers aren't listed twice.

## v2.1.0 <span class="date">2026-11-03</span>

- Per-inbound exit: the users of each inbound can leave through another server of the panel (VPS) or one of this server's own outbounds. One server can serve many inbounds. Pick it per server on the Exits page, or on the inbound's row in the core editor; an inbound with no choice follows the server's own way out.
- Change the owner (admin) of many users at once: pick from a searchable list, or take all users of an admin (an automatic backup is made first).
- Rename a user (sudo and the user's own admin). Usage, limits and devices stay; the Xray clients are re-keyed.
- Custom subscription link (e.g. /sub/alex2323): while set, only it works and the default link is switched off. It survives renames and is dropped when the subscription is revoked.
- Weather: local time, day/night icons, hourly (24 h) and 7-day forecast, on the panel and on the customer's subscription page, in the place's own time zone.
- On phones (especially in 'desktop site' mode), tapping the name field while creating a user no longer zooms the page in and locks it.
- Preroute (tunnels) removed.

## v2.0.0 <span class="date">2026-11-03</span>

- Xray version picker: install any XTLS version for the panel's own core (searchable list). Safe: a backup is taken first, the new binary is tested against the live config, and it rolls back automatically if it doesn't start. Each node can also get a chosen version (over SSH, rollback-safe).
- Turn a node's agent on/off per node and install agentless; every node installs under a unique name.
- Stop IP-limit enforcement entirely: a global switch plus a per-node switch. When off, connected IPs are only shown, never blocked.
- Deleting an admin now deletes all of its users too (cannot be undone, auto-backup first). Transfer users between admins in bulk. Sudo can create a user under a chosen admin.
- Per-user personal message (announce): shown on the customer's subscription page/app as the profile title / announcement.
- Weather: each admin sets their own location; shown on the overview and on customers' subscription pages (Open-Meteo).
- Ready-made templates and quick-duration buttons (+1/+3/+7/+30 days) when creating a user; an automatic DB backup before every risky operation.

## v1.39.3 <span class="date">2026-10-30</span>

- The IP limit no longer counts or blocks Google (Cloud Run) / CDN egress IPs — fixes fronted VLESS/VMESS WS being falsely blocked and cutting in and out; the IP limit still works for real/direct IPs. Extra ranges via IP_LIMIT_EXEMPT_CIDRS.

## v1.39.2 <span class="date">2026-10-30</span>

- Fixed Outline and other client formats over sub-gateway links: the ssconf / app link (e.g. /outline) now returns the right config

## v1.39.1 <span class="date">2026-10-29</span>

- The app label in the online/user row now shows real client apps only; generic HTTP/browser user-agents such as Dalvik, WhatsApp and Mozilla are no longer shown as an app (label and icon hidden).

## v1.39.0 <span class="date">2026-10-29</span>

- Set from the new 'Brand' section in the sidebar; the subscription page was already brandable via its profile-title / support-url settings.
- App icons are a bit larger (easier to read) and refreshed with higher-resolution official icons.
- The RAM (memory) card was removed from the Users tab; it stays on the Overview only.

## v1.38.0 <span class="date">2026-10-28</span>

- Chat attachments: send photos, audio and video (the paper-clip button). Files are stored safely on the panel (next to the database, max 25 MB) and only the admin and the sudo admin can see them; they are included in backups too.
- Edit and delete messages: from the ⋮ menu on your own message you can edit or delete it; an edited message shows an 'edited' label.
- The online view now includes external-panel connections: users added from an external panel appear in the online list, with an 'External' column, a 'By external' sort, and a count of how many users are online through an external panel in the header.
- App icons now ship with the panel: official icons for Hiddify, V2Box, Streisand, Happ, Clash Meta, Clash/Stash, sing-box, Shadowrocket, v2rayNG, NekoBox, Loon, Quantumult X and Surge show under the dot in the user row (a letter chip for anything unrecognised).

## v1.37.0 <span class="date">2026-10-28</span>

- The user row now shows an app badge under the dot: the official logo if a file was added (drop a PNG into /statics/app-icons/ on the panel), otherwise an original coloured chip with the app's initial — never blank, never an emoji.
- Search now matches UUID/subId: paste a client's UUID (or subId) into the search box to find which user it belongs to (in addition to username and note).
- The overview gained an 'Expiring soon' card (active users whose subscription ends within the next 3 days); clicking it filters the user list to exactly those users, sorted by remaining time. The same filter is available in the status menu as 'Expiring soon'.
- The updater now works on installs with a non-standard data path too: the pre-update backup and the integrity check read the database path from the panel's own setting instead of assuming a fixed path.

## v1.36.0 <span class="date">2026-10-28</span>

- Installs now work cleanly when the server already runs nginx (or any front proxy holding port 80): the Let's Encrypt step frees port 80 for the moment and restores it afterwards, and reuses an existing certificate when there is one. Renewal also only touches port 80 when a renewal is actually due.
- The online list now fills in on standard Xray cores that don't support GetUsersStats: when the core returns nothing, online users are derived from recent per-node usage + online_at (covers panels like finland too).
- Xray start/crash reasons are now written to the logs (stderr capture), making diagnosis easier.
- Advanced: an optional subscription gateway — legacy/external links shaped /path?url=.../sub/&lt;token> can be served by the panel directly (enabled via SUB_GATEWAY_PATHS; off by default). Option to move an Xray inbound off a port a front proxy already holds to another local port (off by default).

## v1.35.0 <span class="date">2026-10-23</span>

- The user row now shows, under the name, the app the subscription was imported into (Hiddify, v2box, v2rayNG, Streisand, Clash, sing-box, Shadowrocket... — from the last User-Agent).
- Device (HWID) limit breach attempts are now written to the activity log in detail (user, blocked device, IP, app). Note: to count apps that send no hardware id (Hiddify/v2box), enable 'Fingerprint devices' in Settings › Subscription (counts by app+IP).

## v1.34.0 <span class="date">2026-10-23</span>

- Saved SSH key library: save/generate a key once and pick it from a list when installing nodes — no more pasting each time. The SSH (key) form gets a 'Saved key' picker + 'Generate new' (makes an Ed25519 key in the panel and shows the public key to add to the VPS authorized_keys) + 'Save to library' for a pasted key. Keys are stored encrypted; the private key is never returned.

## v1.33.1 <span class="date">2026-10-23</span>

- Fix: an emoji (non-ASCII) in a sub message's #Profile-title / #announce / #support-url caused a 500 — it's now auto-base64'd and works.
- On/off switch for the host xHTTP extra field: off clears/hides it, on seeds a starter template.

## v1.33.0 <span class="date">2026-10-23</span>

- Per-host xHTTP 'extra': for xHTTP inbounds each host can carry an optional JSON 'extra' object (scMaxEachPostBytes, scMaxConcurrentPosts, scMinPostsIntervalMs, xPaddingBytes, noGRPCHeader, xmux...). Empty = inbound defaults; set = merged into the subscription link's xhttp settings. New field in Host Settings (validated as JSON).

## v1.32.0 <span class="date">2026-10-23</span>

- Multi-node: one VPS can now be a node for several Alexen panels. Each node installs as its own instance named after the node (separate container/dir/ports) — a second panel no longer breaks the first. NOTE: for a second node on the same VPS, pick different SERVICE/API ports and different xray inbound ports.
- Control a node from the VPS terminal: the install drops a command named after the node (e.g. 'usa status', 'usa logs', 'usa restart', 'usa update').
- Cleanup can also include disabled users (both auto-delete and the one-shot 'delete all').
- User expiry can be set in days/hours/minutes at creation (unit selector for the on-hold duration; hour:minute picker for the absolute expiry date).

## v1.31.0 <span class="date">2026-10-23</span>

- Expired-user cleanup (trash icon on the users page, sudo): (1) Auto-delete — users are removed a configurable time after they expire (e.g. 24 hours), with an option to include data-limited users. (2) Manual — a 'Delete all expired' button removes every currently expired user at once (with confirmation). The cleanup job now runs every 15 minutes.

## v1.30.0 <span class="date">2026-10-22</span>

- A user connected through an external panel now shows in the online-IPs / connections view as ' &lt;panel>' (server IP + protocols, e.g. 'hysteria / vless · external') by last-seen — so 'online but which one' is answered.
- Fixed double-counting: 3x-ui reports a client's traffic as the same aggregate on every inbound, so usage is now counted ONCE per user (the max), under a single ' &lt;panel>' tag, and quota is correct.

## v1.29.0 <span class="date">2026-10-22</span>

- External-panel usage is now recorded into STATISTICS: on each sync, every user's traffic on the external panel is written under a ' &lt;panel> · &lt;protocol>' tag into the user's usage breakdown, the overview and the hourly charts — so you can see which server/protocol they used and how much. These records STAY IN STATISTICS even if you delete the panel (keyed to the tag, not the panel). A user is marked online when connected via the external panel. (Adding to quota still follows the 'Count traffic into Alexen quota' switch; stats are always kept. Sync must be on/live.)

## v1.28.0 <span class="date">2026-10-22</span>

- External-panel push: ALL admins are now selectable (including sudo/your own account like alex77) — so you can scope to your own users too.
- Added port/host override: in provision, 'Port remap' (e.g. 39319:443, 22983:443) and 'Host override' (clean IP/CDN) hand out a different port/host in the user's sub — the panel is untouched, uuid/params are kept, and when the host changes the old one is kept as sni so the cert still matches.

## v1.27.0 <span class="date">2026-10-22</span>

- External-panel push rewritten to the method that actually works: we no longer force the user's UUID — the panel assigns its own, we give each user a stable subId, and the configs are pulled LIVE from the panel's OWN subscription output (subLinks). Links are therefore byte-identical to the panel's (hysteria2 security=tls, vless encryption=none, etc.) and always valid — no reconstruction bugs. Name mode (original/custom/random country) and scope apply to the live links; a slow/unreachable panel never holds up a subscription (30s cache).

## v1.26.3 <span class="date">2026-10-22</span>

- Fix: VLESS configs from an external panel now include the mandatory 'encryption=none' parameter — without it clients like v2rayNG/Hiddify rejected the vless config (wouldn't connect). Hysteria2 was already correct. Re-run provision once so the stored configs pick up the fix.

## v1.26.2 <span class="date">2026-10-22</span>

- After push, the external panel's Xray is reloaded automatically — newly-added clients go live immediately (previously clients were added but wouldn't connect until Xray was restarted by hand). Auto mode also reloads when it adds new users.

## v1.26.1 <span class="date">2026-10-22</span>

- Fix: 'Create users on panel' (with Everyone selected) returned a 500 — fixed. Stale push configs left in other scopes are now cleared and added once (no duplicate config in subs), and on 'already exists/duplicate' the user is removed and re-added across all inbounds. Tested end-to-end on the live panel (both inbounds populated, UUIDs match).

## v1.26.0 <span class="date">2026-10-22</span>

- Auto push: an 'Auto' switch in 'Create users on panel' — set the panel and pick inbounds once, and newly-added (scoped) users are created on those inbounds automatically in the background. No need to re-run each time; stays until you change the selection. Your choice (inbounds/scope/name) is remembered and restored when you reopen the dialog.
- External panel section is now fully translated into Turkmen/Russian/Persian/Chinese too (it was left in English in those languages).

## v1.25.0 <span class="date">2026-10-22</span>

- Push fix: 'Create users on panel' now adds the user to ALL selected inbounds (it used to add only the first/hysteria — 3x-ui rejects the same email on a second inbound). One call to all inbounds with the same UUID; if already present it's removed first and re-added across all inbounds (idempotent).
- External panel: live VPS status — the Traffic view shows Xray state+version, CPU, RAM, disk, load, network rate, uptime, public IP and panel version (refreshes at the panel's sync rate).

## v1.24.0 <span class="date">2026-10-22</span>

- External panel: sync setting added — per panel choose Off / Every N seconds / Live; it pulls traffic+online in the background (even with the Traffic view closed) and marks users online. Optional 'Count traffic into Alexen quota' toggle adds the external usage to each matched user's and reseller's quota (off by default, only positive deltas).
- External panel 'Import' (pull) REMOVED: it dumped every client's config into one shared config that landed in every user's subscription. Integration is now PUSH only ('Create users on panel').

## v1.23.0 <span class="date">2026-10-22</span>

- Config naming: for external-panel (push/import) and External configs you can set how each config is named in the user’s app — Original, Custom (template: &#123;USERNAME&#125; &#123;RANDOM&#125; &#123;FLAG&#125; &#123;COUNTRY&#125; &#123;CAPITAL&#125; &#123;GEO&#125;), or Random country (each user gets a random “ Germany - Berlin”, stable per user). Hides the real server and looks unique per user.

## v1.22.0 <span class="date">2026-10-22</span>

- External panel “Create users on panel” now also adds the config to users’ SUBS: for each chosen inbound, that server’s config lands in every user’s subscription filled with their own UUID (vless/hysteria2/trojan), matching the client created on the panel.

## v1.21.0 <span class="date">2026-10-22</span>

- External panel “Create users on panel” (push): creates the selected Alexen users as clients on the chosen 3x-ui inbound(s) — UUIDs match Alexen’s. You pick the inbound(s) and scope (everyone/resellers). Traffic/online show in the Traffic tab. (Uses the v3.x clients API.)

## v1.20.5 <span class="date">2026-10-22</span>

- Clearer external-panel import error: a 3x-ui panel with no users now shows the right message (it wrongly said s-ui before)

## v1.20.4 <span class="date">2026-10-22</span>

- External panel import now also generates hysteria2 links (3x-ui hysteria v2) with sni/alpn/insecure/salamander obfs. Note: an inbound with no clients has nothing to import — add users in the panel first

## v1.20.3 <span class="date">2026-10-22</span>

- External panel import now creates one External-config entry per inbound (manage each one’s order/position/on-off on the External configs page) + a top/bottom position choice at import

## v1.20.2 <span class="date">2026-10-21</span>

- Fix: the “count Hiddify-style apps” toggle and the device-message/rate-limit fields now render correctly in the UI (the dashboard failed to build in 1.20.1)

## v1.20.1 <span class="date">2026-10-21</span>

- Device limit for apps that send no hardware id (e.g. Hiddify): enable it in Subscription settings and those apps are counted toward the device limit by an app+IP fingerprint

## v1.20.0 <span class="date">2026-10-21</span>

- Subscription domain “Mode”: in “Web page only” mode the raw sub is not handed to VPN apps (every request gets the web page; users import from it) — general and per-reseller
- A reseller’s sub profile can set its own path and mode
- Subscription fetch rate limit (minimum seconds between a user’s two fetches)
- Custom message shown when the device (HWID) limit is exceeded

## v1.19.0 <span class="date">2026-10-21</span>

- External panel import: add a 3x-ui/s-ui panel’s configs into users’ subscriptions for chosen resellers or everyone, with port remap (e.g. 8443→443) and fake-location copies (a different address/port). Preview first, then Import.

## v1.18.0 <span class="date">2026-10-21</span>

- External panel: live traffic/online view — External panel > Traffic shows the connected 3x-ui/s-ui panel's total up/down, online count and per-client traffic, refreshed every few seconds

## v1.17.1 <span class="date">2026-10-21</span>

- The admins list now shows each admin's current user count (e.g. 42 / 100)

## v1.17.0 <span class="date">2026-10-21</span>

- External panel (3x-ui / s-ui) integration — first stage: add a 3x-ui or s-ui panel under Settings > External panel, test the connection and view its inbounds (password stored encrypted). Config import, live traffic and fake-location copies come in the next stages.

## v1.16.2 <span class="date">2026-10-21</span>

- Reworked Documentation into an eye-catching, role-aware (reseller/sudo) user guide — quick-start steps, what you can do, subscription/&#123;token&#125; and API
- The 'updated' note on the Update page can now be dismissed (it already auto-clears after an hour)

## v1.16.1 <span class="date">2026-10-21</span>

- Fix: the Documentation page's table-of-contents links no longer error; they smooth-scroll to the section

## v1.16.0 <span class="date">2026-10-21</span>

- New Documentation section in the sidebar: roles/permissions, users, subscriptions and &#123;token&#125;, nodes/hosts, external configs and REST API usage — TR/EN

## v1.15.2 <span class="date">2026-10-21</span>

- &#123;token&#125; placeholder in subscription messages: inserts the user's own subscription token (e.g. in your own support link https://site/help?t=&#123;token&#125;)

## v1.15.1 <span class="date">2026-10-21</span>

- A reseller without copy permission now has only the raw configs hidden; the subscription (sub) link stays copyable
- A reseller without the edit-limits permission can no longer delete or unblock a user's devices or IPs (on top of the read-only IP/device limits)

## v1.15.0 <span class="date">2026-10-21</span>

- Search the activity log by event type: you can now type e.g. 'failed login', not just a user/IP
- Fix: a reseller without copy permission can no longer copy a config after creating/editing a user (it was still possible in that case)
- Fix: the occasional 'database is busy' error when saving settings (e.g. a reseller's subscription message) on busy panels is gone

## v1.14.0 <span class="date">2026-10-21</span>

- Per-admin counters: how many users they created / deleted (on the Admins list)
- Per-user: how many new IPs were blocked and new devices rejected (in the user dialog)

## v1.13.1 <span class="date">2026-10-18</span>

- Deleting an admin now asks for confirmation (prevents accidental deletes) and warns when the admin still has users

## v1.13.0 <span class="date">2026-10-18</span>

- Fallback URLs for external subscription sources: if the main URL fails, the next is tried; add as many as you like
- A 'random URL' option for external sources: a random URL from the pool is used on each refresh
- A protocol filter for external sources: keep only the protocols you pick (vless, vmess, trojan, shadowsocks, hysteria2)
- Transfer users: move all of an admin's users to another admin (on the Admins page)

## v1.12.0 <span class="date">2026-10-17</span>

- The license panel shows each panel's node list, admin list and total traffic
- Send a message from the license panel to a panel; it shows to all its admins on the next check-in

## v1.11.0 <span class="date">2026-10-17</span>

- User stats: the user dialog shows when the user was created, when they last updated their subscription and how many times
- A 'Subs updated' tile on the overview: how many users refreshed their subscription in the selected period

## v1.10.0 <span class="date">2026-10-17</span>

- Bulk protocol: turn a protocol (e.g. Hysteria) on or off for all users, or one admin's, in one action. New button on the users filter bar (sudo).
- Note: a protocol only reaches a subscription if it's on the user's account; adding a host and inbound isn't enough — this button does it in bulk.

## v1.9.0 <span class="date">2026-10-16</span>

- Profile page: a picture, display name, bio, contact and your own password; pictures show in the admins list and the sidebar
- A status and an admin filter on the users list, working on the phone too (pick an admin to see only their users)
- Reworked install: skip the domain, a failed certificate no longer aborts (starts on the IP, then 'alexen cert domain' for a real one), bring your own .env (ALEXEN_ENV_FILE)
- The alexen command line was redesigned (menu, help, status screens)

## v1.8.0 <span class="date">2026-10-15</span>

- License: the panel is activated with a license key; Settings > License and the overview show the days left, since when it's active and the user / admin / node limits
- License limits: users, admins and nodes at once; when full, no new ones
- When the license server can't be reached the panel keeps working on its saved license; 7 grace days after the end date
- Without a valid license only the management is locked: the VPN users, nodes and subscription links keep working
- Installs and updates now come from the license server (signed and checked); the alexen license command

## v1.7.0 <span class="date">2026-10-15</span>

- Host groups: "All hosts" picks or drops every host in one click
- A "select all" for each profile (inbound): all its hosts in one click; a partly chosen profile shows a half mark and how many are chosen

## v1.6.1 <span class="date">2026-10-15</span>

- The IP limit works with Xray 26.3.27 and older too: the block rule is sent the way those versions read it (before it never matched)
- A blocked IP stays blocked for 90 seconds: before it went on and off every few seconds; it is let in at once when a place frees up
- When a user can't be created the reason shows (account expired, user limit, traffic quota, no connection): before nothing happened
- A reseller's end date lasts until the end of that day; expired resellers are marked in the list

## v1.6.0 <span class="date">2026-10-15</span>

- The Telegram bot is set up from the panel (Settings → Telegram): token, admin IDs, language, proxy
- The bot: status, online users, user lookup, a backup on request; backups sent automatically at the chosen interval
- A richer alexen command: a menu, status, doctor (health check), env/edit (settings), backup/restore, core (the Xray version, back if it fails), passwd, cert, tab completion
- Installer: a short password or no terminal no longer repeats the question forever

## v1.5.1 <span class="date">2026-10-15</span>

- Online IPs show with every Xray version: Xray 26.3.27 didn't give users' IPs the old way, the list stayed empty
- That also kept the IP limit from working for users on the main server; it works now

## v1.5.0 <span class="date">2026-10-15</span>

- The panel updates itself from the panel: check for a new version, see what changed, update with one click (a backup first, back to the old version if something goes wrong)
- Alexen version numbers and the Telegram support link (@alexvpns)

## v1.4.0 <span class="date">2026-10-14</span>

- Working installer (Let's Encrypt or self-signed certificate)
- Phone and tablet layout fixes

## v1.3.0 <span class="date">2026-10-14</span>

- Real IP behind a CDN
- Steadier Hysteria
- Clean removal from a server
- Faster loading

## v1.2.0 <span class="date">2026-10-14</span>

- Outbounds: unused badge, route inbounds to an outbound, a warning when an exit can't be reached
- Faster pages

## v1.1.0 <span class="date">2026-10-09</span>

- Security and data-integrity fixes
- Backup / restore
- Faster user lists
- Dark login page

## v1.0.0 <span class="date">2026-10-08</span>

- The first Alexen release
