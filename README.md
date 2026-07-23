# Dashfy Demo

The official live demo for [Dashfy](https://github.com/dashfy/dashfy), available at [demo.dashfy.dev](https://demo.dashfy.dev).

Built with [Vite](https://vite.dev) + React, [`@getdashfy/ui`](https://npmjs.com/package/@getdashfy/ui) for the dashboard UI, and [`@getdashfy/server`](https://npmjs.com/package/@getdashfy/server) for the real-time backend.

## How it works

Dashfy runs as two parts:

- A **client** (Vite + React) that renders the dashboard UI.
- A **server** (`dashfy.server.ts`) that streams data over Socket.IO and loads `dashfy.config.yml`.

In development they run as two processes. In production, the server serves the built client and handles the WebSocket connection on a single port.

## Local development

Install dependencies:

```bash
pnpm install
```

Run the client and server together:

```bash
pnpm dev:all
```

- Client (the dashboard UI): http://localhost:5173
- Server (API + WebSocket backend): http://localhost:5001

You can also run them separately with `pnpm dev` (client) and `pnpm dev:server` (server).

## Production build

Build the client and start the server (which serves the build and the WebSocket on the same port):

```bash
pnpm build
pnpm start
```

- `pnpm build` outputs the client to `build/`, which the server serves as static files.
- In production the UI connects to the same origin for WebSocket (see [`src/App.tsx`](./src/App.tsx)), so no extra configuration is needed.
- The server honors `PORT` (default `5001`) and binds `0.0.0.0`.

## Deploy to Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/dashfy?referralCode=INMsTa&utm_medium=integration&utm_source=template&utm_campaign=generic)

This project is configured for [Railway](https://railway.app) via [`railway.toml`](./railway.toml):

```toml
[build]
buildCommand = "pnpm install && pnpm build"

[deploy]
startCommand = "pnpm start"
healthcheckPath = "/health"
```

### Deploy from the repo

1. Push this repository to GitHub.
2. In Railway, create a project from the repo. It picks up `railway.toml` automatically.
3. Under Networking, generate a domain and verify the app plus `/health` and `/config`.

## Scripts

| Script       | Description                                       |
| ------------ | ------------------------------------------------- |
| `dev`        | Start the Vite client                             |
| `dev:server` | Start the Dashfy server (watch mode)              |
| `dev:all`    | Start client and server together                  |
| `build`      | Type-check and build the client into `build/`     |
| `start`      | Run the Dashfy server (serves `build/` + sockets) |
| `lint`       | Run ESLint                                        |
| `preview`    | Preview the Vite build locally                    |

## Configuration

Edit [`dashfy.config.yml`](./dashfy.config.yml) to add, remove, and arrange dashboards and widgets.

## Adding extensions

Use the Dashfy CLI to add extensions (widgets + data sources):

```bash
npx dashfy@latest add github
npx dashfy@latest add system
```

This installs the extension's npm package and wires it into `src/App.tsx`, `dashfy.server.ts`, `dashfy.config.yml`, and `.env`.

## Learn more

- [Dashfy documentation](https://dashfy.dev/docs)
- [Dashfy monorepo](https://github.com/dashfy/dashfy)
