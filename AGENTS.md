# AGENTS.md

## Project Overview

Static HTML/JS order management system ("pedidos") in pt-BR. No build tools, no framework, no package.json, no tests.

## Architecture

- `pedidos.js` — single shared data file (JS array of order objects). Both HTML pages import it.
- `index.html` — customer-facing order lookup (search by 4-digit code).
- `admin/index.html` — admin panel with login, delivery/payment tables.

All logic is inline `<script>` in HTML files. No modules, no bundling.

## Adding/Editing Orders

Orders live in `pedidos.js` as objects with `code`, `nome`, `status`, `itens[]`, and `pagamentos[]` arrays. The customer lookup uses loose equality (`==`) on `code`, so codes can be numbers or strings.

## Gotchas

- Admin login is hardcoded client-side in `admin/index.html` (line 185). No real auth.
- No backend — data is static. Changes to `pedidos.js` require redeploy.
- CSS is inline in each HTML file (no shared stylesheet).
- Language throughout is Portuguese (pt-BR).
