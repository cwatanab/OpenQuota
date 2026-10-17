# Antigravity

OpenQuota tracks the shared Gemini and Claude quota pools reported by Antigravity.

## What it tracks

| Metric        | Meaning                                             |
| ------------- | --------------------------------------------------- |
| Session       | Shared Gemini pool in the rolling 5-hour window     |
| Weekly        | Shared Gemini pool in the weekly window             |
| Gemini 4 Argon| Dedicated Argon pool in the weekly window           |
| Claude        | Shared non-Gemini pool in the rolling 5-hour window |
| Claude Weekly | Shared non-Gemini pool in the weekly window         |

Only the pools available to the signed-in account are shown.

## Sign-in and local data

Sign in through Antigravity or run `agy`. OpenQuota reuses Antigravity's locally stored credentials
and can also discover a compatible running Antigravity language server. No API key needs to be added
to OpenQuota.

## Architecture: Local Discovery vs `agy` CLI

OpenQuota handles Antigravity IDE and `agy` (Antigravity CLI) differently:

- **Antigravity IDE**: Runs a local language server that exposes an explicit `--csrf_token` argument. OpenQuota discovers this process and connects to its HTTPS endpoint locally for real-time status.
- **Antigravity CLI (`agy`)**: `agy` runs an internal service without publishing a CSRF token. OpenQuota intentionally skips probing `agy`'s local ports to prevent Go `net/http` TLS handshake and `wsarecv` connection errors in the terminal console. Quotas for `agy` are fetched remotely from Google Cloud Code API via stored OAuth tokens.

## Troubleshooting

- **Not signed in** — open Antigravity or run `agy`, complete sign-in, then refresh OpenQuota.
- **Sign-in expired** — authenticate again in Antigravity or with `agy`.
- **Credentials could not be read** — reopen Antigravity so its local sign-in state can be restored.
- **Usage temporarily unavailable** — wait briefly and refresh again.
