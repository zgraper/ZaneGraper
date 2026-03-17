# ZaneGraper Portfolio (React + Vite)

This project is configured to deploy to **GitHub Pages** as a project site:

- Site URL: `https://zgraper.github.io/ZaneGraper/`
- Vite base path: `/ZaneGraper/` (`vite.config.js`)
- SPA routing: `HashRouter` (works on GitHub Pages without server rewrites)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This repository includes an Actions workflow at `.github/workflows/deploy.yml` that builds and deploys `dist/`.

### Required GitHub setting

In your repository:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

If Pages is set to **Deploy from a branch** (for example `main`), GitHub will serve the raw `index.html` source file (which points to `/src/main.jsx`) and you will get a blank white page.

## Troubleshooting white screen / MIME errors

If DevTools shows errors like:

- `Loading module ... /src/main.jsx ... disallowed MIME type (“text/html”)`
- `GET ... /favicon.svg 404`

then GitHub Pages is serving source files instead of the Vite build output.

### Fix

- Switch Pages source to **GitHub Actions**
- Push to `main` to trigger deployment
- Confirm the deployed HTML references `/ZaneGraper/assets/...` (not `/src/main.jsx`)
