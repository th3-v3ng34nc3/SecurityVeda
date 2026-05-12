# Security Veda

Security Veda is a lightweight web‑application that provides a curated collection of security‑related knowledge, best‑practice checklists, and compliance references.  The project is organized around **Vedas**—thematic groups of security concepts (e.g., *Authentication*, *Network*, *Data Protection*).  Each Veda contains a set of articles, code snippets, and compliance content that can be browsed locally or hosted as a static site.

## Features
- **Structured knowledge base** – Content lives in `src/data` as plain JavaScript objects that are easy to extend.
- **Search & filter** – Users can quickly find relevant sections via the built‑in search component.
- **Responsive UI** – Built with React and Tailwind CSS for a clean, mobile‑friendly experience.
- **Open source** – Licensed under MIT, ready to fork and customize.

## Getting Started
```bash
# Clone the repository (once it is on GitHub)
git clone https://github.com/<your‑username>/security-veda.git
cd security-veda

# Install dependencies
npm install

# Run the development server
npm run dev
```
The app will be available at `http://localhost:3000`.

## Deploying to GitHub Pages
1. Build the static site:
   ```bash
   npm run build
   ```
2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
   The `deploy` script (defined in `package.json`) uses `gh-pages` to publish the built site.
3. On GitHub, go to **Settings → Pages**, select the `gh-pages` branch as the source, and save. Your site will be live at `https://<your‑username>.github.io/security-veda/`.

## Repository Structure
```
src/
  ├─ components/        # React UI components
  ├─ data/               # Knowledge content (Vedas, compliance data)
  ├─ pages/              # Next.js page files
  └─ utils/              # Helper functions
public/                  # Static assets (icons, images)
README.md                # This file
.gitignore               # Git ignore rules
```

## Contributing
Contributions are welcome! Please fork the repo, create a feature branch, and open a pull request. Follow the existing code style and run tests with `npm test` before submitting.

## License
MIT © 2026 Security Veda contributors
