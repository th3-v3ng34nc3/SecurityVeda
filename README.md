# The Security Vedas

A Sanskrit-themed cybersecurity knowledge base organized into six "Vedas" — Cloud Security, Compliance, AppSec, DevSecOps, Kubernetes & Containers, and Network Security. Each Veda contains sections and chapters covering practical security topics, from AWS IAM to OWASP Top 10 to Kubernetes pod security.

Live at: [https://th3-v3ng34nc3.github.io/SecurityVeda/](https://th3-v3ng34nc3.github.io/SecurityVeda/)

## Features

- 6 domains, dozens of sections, hundreds of chapters
- Local progress tracking — mark chapters as you read; progress survives reloads
- Per-Veda and Grand Master certificates with a unique UUID, your name, and GitHub / LinkedIn handles printed on the cert
- Optional public registry (Formspree-backed) for anyone who wants to share their completion
- Light / dark mode with a glass-morphism look
- Global search (Ctrl/Cmd+K)
- No backend — everything runs in the browser, persistence via `localStorage`

## Tech Stack

- React 18 + Vite
- Plain CSS (no framework)
- Deployed as a static site to GitHub Pages via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # serve the production build locally
```

## Project Layout

```
src/
├─ App.jsx                       # All UI: routing, modals, certificate generation, state
├─ main.jsx                      # React entry point
├─ index.css                     # Theme tokens, glass morphism, all styles
└─ data/
   ├─ vedasData.js               # Veda → Section → Chapter tree
   ├─ cloudSecurityContent.js    # HTML content keyed by chapter ID
   ├─ azureContent.js
   ├─ gcpContent.js
   ├─ complianceContent.js
   ├─ appSecContent.js
   ├─ devSecOpsContent.js
   ├─ kubernetesContent.js
   └─ networkSecurityContent.js
```

Adding a chapter: add an entry under the relevant section in `vedasData.js`, then add a matching `chapter.id → HTML string` entry in the corresponding content file.

## Deployment

Pushed to `main` → [`.github/workflows/main.yml`](.github/workflows/main.yml) runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. No manual deploy step.

## Configuration

- **Public registry**: paste your Formspree (or compatible JSON-accepting) endpoint into `REGISTRY_ENDPOINT` near the top of [`src/App.jsx`](src/App.jsx). Leave empty to hide the registry UI.

## License

MIT © Aditya ([@th3-v3ng34nc3](https://github.com/th3-v3ng34nc3))
