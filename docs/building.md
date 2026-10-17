# Building OpenQuota

This guide describes how to build OpenQuota for development and production across supported platforms.

## Prerequisites

- **Node.js**: 22 or later
- **pnpm**: 11.11.0 (`corepack enable`)
- **Rust**: Stable toolchain
- **Platform prerequisites**: See [Tauri 2 Prerequisites](https://v2.tauri.app/start/prerequisites/)

---

## Development

Run the frontend dev server and desktop window in development mode:

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm tauri dev
```

---

## Production Builds

### Official Release Bundles

The official CI pipeline builds installers using Tauri CLI:

- **Windows NSIS Installer**: `corepack pnpm build:installer`
- **Linux Deb / AppImage**: `corepack pnpm build:linux`

---

## Windows Cross-Compilation with `cargo-xwin`

When cross-compiling the Windows executable (`openquota.exe`) from Linux or DevContainer environments using `cargo-xwin`, follow these critical rules.

### Important: Asset Embedding & `custom-protocol`

> [!WARNING]
> Building with `cargo xwin build --release` without `--features tauri/custom-protocol` will produce a binary that defaults to **development mode** (`devUrl: http://127.0.0.1:1420`).
>
> When run on Windows, WebView2 will fail to reach `http://127.0.0.1:1420` and display:
> **「申し訳ございません。このページに到達できません」** (Can't reach this page).

To properly embed frontend assets into the standalone Windows `.exe`:

1. **Build frontend assets first**:
   ```sh
   corepack pnpm build
   ```
   This compiles Svelte/TypeScript code into `dist/`.

2. **Compile with `tauri/custom-protocol`**:
   ```sh
   cargo xwin build --manifest-path src-tauri/Cargo.toml --target x86_64-pc-windows-msvc --release --features tauri/custom-protocol
   ```

3. **Shortcut npm command**:
   ```sh
   corepack pnpm build:windows-exe
   ```

The resulting standalone executable is located at:
`src-tauri/target/x86_64-pc-windows-msvc/release/openquota.exe`

---

## Provider Architecture Notes

### Antigravity (`agy` CLI vs Antigravity IDE)

- **Antigravity CLI (`agy`)**: OpenQuota does **not** probe local listening ports of `agy`. `agy` does not publish its CSRF token, and attempting TCP/TLS/HTTP connections causes Go `net/http` to output TLS handshake errors (`wsarecv` / connection reset) in the user's CLI console. Quotas for `agy` are retrieved remotely via Google Cloud Code API OAuth tokens.
- **Antigravity IDE**: OpenQuota discovers running IDE language server processes that expose `--csrf_token` and queries them locally over HTTPS.
