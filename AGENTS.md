# OpenQuota Agent Guidelines

## 1. Tauri Windows Builds & Asset Embedding

### Problem: "申し訳ございません。このページに到達できません" (Can't reach this page)

When building the Windows binary via `cargo` or `cargo-xwin` directly (outside of `tauri build`), Tauri's `custom-protocol` feature is not enabled by default.
Without `custom-protocol`, Tauri treats the compilation as a development build (`is_dev() == true`), causing the app to attempt loading `devUrl` (`http://127.0.0.1:1420`) rather than embedding the production web assets from `dist/`. When the user runs `openquota.exe`, Windows WebView2 fails to connect to port 1420 and displays:
`申し訳ございません。このページに到達できません`

### Mandatory Build Procedure

1. Always build frontend assets before compiling the Rust binary:
   ```sh
   corepack pnpm build
   ```
2. When invoking `cargo` or `cargo-xwin` directly for a production Windows executable, **always pass `--features tauri/custom-protocol`**:
   ```sh
   cargo xwin build --manifest-path src-tauri/Cargo.toml --target x86_64-pc-windows-msvc --release --features tauri/custom-protocol
   ```
   Or use the npm script:
   ```sh
   corepack pnpm build:windows-exe
   ```

---

## 2. Antigravity Provider: Local Probing vs `agy` CLI

### Problem: TLS Handshake & `wsarecv` Errors on `agy` Console

`agy` (Antigravity CLI) runs an internal HTTPS service without exposing its CSRF token (`--csrf_token`).

- Probing `agy`'s ports from OpenQuota via TCP/HTTP/HTTPS causes Go's `net/http` TLS server to log errors directly into the user's terminal:
  - `http: TLS handshake error ... client sent an HTTP request to an HTTPS server`
  - `http: TLS handshake error ... wsarecv: An existing connection was forcibly closed by the remote host.`
- Even if a TLS connection succeeds, `agy` returns `401 Unauthorized: missing CSRF token`.

### Architectural Rule

- OpenQuota retrieves `agy` quotas remotely through Google Cloud Code API using stored OAuth tokens (`auth::load_token()`).
- In `src-tauri/src/providers/antigravity/client.rs`:
  ```rust
  if server.is_agy || server.csrf.is_empty() {
      return None;
  }
  ```
  **Never remove or bypass this check.** OpenQuota must never open local sockets to `agy`'s ports.
- Local Language Server communication is reserved exclusively for Antigravity IDE (VS Code extension / IDE) where a valid `--csrf_token` is present (`server.is_agy == false && !server.csrf.is_empty()`).
