# Command line (alexen)

The panel server has an `alexen` command. Run it as root. `alexen` alone opens a menu, `alexen help` lists everything.

```bash
alexen status          # version, address, certificate, users, last backup
alexen doctor          # check everything and say what is wrong
alexen logs [-n 200] [--no-follow]
alexen restart | up | down
alexen update          # the latest version (also in the panel: Settings > Update)
alexen backup [list]   # a backup now / the saved ones
alexen restore [FILE]  # put a backup back (the data now is saved first)
alexen env [list|get|set|unset]   # the panel's settings; alexen edit opens them in an editor
alexen core [list|latest|VERSION|reset]   # the Xray core version (back to the old one if it fails)
alexen cert [renew]    # the certificate
alexen passwd [NAME]   # a new password for an admin
alexen admins | admin [NAME] | cli ...
alexen completion      # tab completion
```

## Common settings

Change them with `alexen env set NAME VALUE`, then `alexen restart`.

| Name | Purpose |
| --- | --- |
| `UVICORN_PORT` | Port of the panel (default 8000). |
| `DOCS` | `True` turns on Swagger UI at `/docs`. |
| `TELEGRAM_API_TOKEN` | Bot token (can also be set in the panel). |
| `LOGIN_MAX_FAILS_PER_IP` | Failed logins per address before a 429 (default 20). |
| `LOGIN_MAX_FAILS_PER_USER` | Failed logins per address and username (default 5). |
| `LOGIN_FAIL_WINDOW` | The counting window in seconds (default 600). |

Hysteria2 inbounds need Xray **v26.3.27 or newer** on a node. Older nodes keep working but skip Hysteria2.
