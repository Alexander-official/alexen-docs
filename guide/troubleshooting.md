# Troubleshooting

Start with `alexen doctor`. It checks the container, certificate, database, nodes and license, and says what is wrong.

| Problem | What to check |
| --- | --- |
| Cannot open the dashboard | `alexen status`; the address and port (`https://domain:8000/dashboard/`); the firewall. |
| Browser warns about the certificate | The panel uses a self-signed certificate (it was set up without a domain). Use a domain with a real certificate, or add the browser exception. |
| A node shows "Failed to connect" | The node server is off, the firewall blocks the node port, or the node's certificate is wrong. Re-run the SSH install from the node's row. |
| Users connect but nothing loads | Check the host's address, port and SNI against the inbound; check that the node's Xray is running. |
| An app says "device limit" | The user reached the device (HWID) limit. Remove a device from the user's edit dialog or raise the limit. |
| Users get 429 on their subscription | A rate limit in **Subscription statistics → Limits** or the Subscription settings was reached. Raise it or set it to 0. |
| You cannot log in after many tries | Your address was rate-limited or blocked. Wait 10 minutes, or unblock it from another admin's session (**Blocked IPs**). |
| The license shows "in use on another server" | Reinstalled or moved the panel. Ask the seller to move the license. |
| An update failed | The old version is put back automatically. Run `alexen logs` and send the last lines to support. |
| After restoring a backup something is missing | The backup is older than the missing data. Backups only hold what existed when they were made. |

## Get help

Telegram: [@alexvpns](https://t.me/alexvpns). Send the output of `alexen doctor` and the last lines of `alexen logs`.
