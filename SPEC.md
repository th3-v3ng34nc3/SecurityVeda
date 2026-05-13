# The Security Vedas — Product Requirements

## 1. Overview

**Project Name:** The Security Vedas
**Type:** Single-page web application (SPA) — static, deployed to GitHub Pages
**Author:** Aditya ([@th3-v3ng34nc3](https://github.com/th3-v3ng34nc3))
**Stack:** React 18 + Vite, plain CSS (glass-morphism), no backend
**Audience:** Security engineers, cloud architects, compliance officers, pen testers, DevSecOps practitioners, and students

A Sanskrit-themed cybersecurity knowledge base organized into six "Vedas" (knowledge domains). Each Veda contains sections, each section contains chapters, each chapter renders prose content. Readers can track completion, earn per-Veda and Grand Master certificates with a unique UUID, and optionally register their certification in a public Formspree-backed registry.

---

## 2. Content Domains

| # | Veda | Sanskrit | Focus |
|---|---|---|---|
| 1 | Cloud Security | Ākāśa Rakṣā | Cloud fundamentals + AWS, Azure, GCP service-by-service security |
| 2 | Compliance | Dharma Niyama | CIS, ISO 27001, SOC 2, GDPR, CCPA, HITRUST, CMMC, PCI DSS, HIPAA, NIST |
| 3 | AppSec | Āyudha Rakṣā | Secure SDLC, OWASP Top 10, additional vulnerabilities, testing tools |
| 4 | DevSecOps | Yantra Surakṣā | Pipeline security, tooling (SAST/DAST/SCA/IaC), implementation patterns |
| 5 | Kubernetes & Containers | Ghaṭa Rakṣā | Containers, K8s architecture, K8s security controls, K8s operations |
| 6 | Network Security | Jala Suraksha | Network fundamentals, perimeter, monitoring, advanced topics |

Content lives in `src/data/*.js` as plain JavaScript objects. Adding a chapter is a literal object-literal edit — no build step changes.

---

## 3. Architecture

```
src/
├─ App.jsx              # Single-file React app: routing, modals, state
├─ main.jsx             # ReactDOM bootstrap
├─ index.css            # All styling (light + dark, glass morphism, animations)
└─ data/
   ├─ vedasData.js              # Veda → Section → Chapter tree + getAllChapters()
   ├─ cloudSecurityContent.js   # HTML strings keyed by chapter id
   ├─ azureContent.js
   ├─ gcpContent.js
   ├─ complianceContent.js
   ├─ appSecContent.js
   ├─ devSecOpsContent.js
   ├─ kubernetesContent.js
   └─ networkSecurityContent.js
```

- All chapter bodies are HTML strings, merged into a single `allContent` map in `App.jsx` and rendered with `dangerouslySetInnerHTML`. Content authors write plain HTML.
- No router library — state-driven page selection (`home` / `vedaId` / `selectedChapter`).
- No backend. All persistence is `localStorage`.

---

## 4. Persisted State (localStorage keys)

| Key | Shape | Purpose |
|---|---|---|
| `theme` | `'dark' \| 'light'` | UI mode |
| `completedChapters` | `string[]` (chapter IDs) | Progress tracking |
| `userName` | `string` | Recipient name on certificates |
| `githubId` | `string` | Optional, printed on cert + sent to registry |
| `linkedinId` | `string` | Optional, printed on cert + sent to registry |
| `registryEmail` | `string` | Optional, sent to registry (not printed) |
| `certificateIds` | `{ "name\|award": uuid }` | Stable UUID per cert issuance |

---

## 5. Functional Requirements

### 5.1 Navigation
- Six Veda cards on the home page → click → Veda detail page with expandable sections
- Expandable section list → click chapter → chapter detail page
- Back buttons + sidebar nav return to any level
- Search modal (Ctrl/Cmd+K) — fuzzy match against chapter title + description

### 5.2 Progress
- "Mark as Complete" pill on each chapter page
- Inline ✓ toggle in the section list (empty circle → emerald check)
- Header progress ring shows global completion % and is clickable to open the certification panel
- Reset Progress button in the certification panel — clears `completedChapters` and `certificateIds`, retains identity fields

### 5.3 Certificates
- Per-Veda certificate unlocks when all chapters in that Veda are complete
- Grand Master certificate unlocks when all six Vedas are complete
- Clicking Download opens a print-ready certificate in a new tab and auto-triggers the browser print dialog (Save as PDF works)
- Certificate prints: recipient name, GitHub handle, LinkedIn handle, the Veda title (or "Grand Master of Security Vedas"), completion date, a stable UUID
- UUIDs are minted with `crypto.randomUUID()` (RFC 4122 v4 fallback) and stored locally so re-downloading the same cert gives the same ID

### 5.4 Public Registry
- Optional. Activated by setting `REGISTRY_ENDPOINT` in `App.jsx` to a Formspree (or compatible) URL
- POST payload: `{ name, email, github, linkedin, submittedAt, isGrandMaster, certificates: [{ veda, certificateId }] }`
- UI: name + GitHub + LinkedIn inputs are always shown; email + "Register on Public Registry" button only appear when `REGISTRY_ENDPOINT` is configured
- Submission state: idle → submitting → success / error

### 5.5 Theming
- Light and dark mode, persisted to `localStorage`
- Glass-morphism cards: `backdrop-filter: blur(16px)` + translucent surfaces
- Sanskrit accents (gold/saffron palette), Playfair Display serif headings

---

## 6. Visual Design

### Color tokens (CSS variables in `:root` / `[data-theme="light"]`)
- **Accents:** gold `#FFD700`, saffron `#FF6B35`, emerald `#10B981`, rose `#EF4444`
- **Glass surfaces:** dark `rgba(30, 41, 59, 0.6)` / light `rgba(255, 255, 255, 0.7)`
- **Backgrounds:** dark `#0F172A` deep navy / light `#F5F7FA` soft ivory

### Typography
- Headings: Playfair Display (serif)
- Body: Source Sans 3 (sans-serif)
- Code: Fira Code (monospace)

### Iconography
- Veda-level icons: thematic emojis (☁️ ⚖️ 🛡️ ♾️ ☸️ 🌐)
- Section-level brand logos: full-color SVGs from **Devicon** CDN (`cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/...`) for AWS, Azure, GCP, Docker, Kubernetes — bare logo, no wrapper background
- Other section icons: themed emojis

---

## 7. Deployment

- Static build (`vite build`) produces `dist/`
- GitHub Actions workflow [`.github/workflows/main.yml`](.github/workflows/main.yml): on push to `main` → `npm ci` → `npm run build` → upload + deploy via `actions/deploy-pages@v4`
- `vite.config.js` sets `base: '/SecurityVeda/'` to match the GitHub Pages sub-path

---

## 8. Acceptance Criteria

### Visual
- [x] Glass morphism on all cards, sidebar, and modals
- [x] Theme toggle switches light/dark with persistence
- [x] Sanskrit text renders correctly (browser-native Devanagari)
- [x] Responsive (mobile / tablet / desktop)
- [x] Brand logos render at full color, no wrapper background

### Functional
- [x] All six Vedas navigable from home + sidebar
- [x] Chapter pages render HTML content with prev/next nav
- [x] Search (Ctrl/Cmd+K) returns title + description matches
- [x] Theme persists across sessions
- [x] Chapter completion persists across sessions
- [x] Progress ring updates in real time
- [x] Reset Progress button clears completion + cert IDs (keeps identity)

### Certificates
- [x] Per-Veda cert unlocks at 100% Veda completion
- [x] Grand Master cert unlocks at 100% global completion
- [x] Cert PDF prints recipient name, GitHub, LinkedIn, date, UUID
- [x] UUIDs are stable per (recipient + award) pair
- [x] Registry submission optional and gated on configured endpoint

---

## 9. Out of Scope

- Backend / database (the app is intentionally serverless and free to host)
- Authentication / user accounts (identity is self-declared)
- Cryptographic certificate verification (Formspree's free tier is write-only; verification would require Apps Script or a server function — explicitly deferred)
- Live content authoring UI (content lives in source files)
- Multilingual support beyond the Sanskrit accents
