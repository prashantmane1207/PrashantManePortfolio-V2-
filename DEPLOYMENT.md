# Deployment Guide

This is a static Vite build (`dist/`), so it can be hosted anywhere that serves static files. Three common options below.

Before deploying anywhere, make sure you've set your EmailJS environment variables (see README.md) as **build-time** env vars on the host — Vite bakes `VITE_*` variables into the build at build time, not runtime.

---

## 1. Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

**Option B — Git integration**
1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite (auto-detected).
4. Add environment variables under Project Settings → Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy. Every push to `main` redeploys automatically.

Add a custom domain under Project Settings → Domains once deployed.

---

## 2. Netlify

**Option A — Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```
Build command: `npm run build`. Publish directory: `dist`.

**Option B — Git integration**
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to app.netlify.com → Add new site → Import an existing project.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Add environment variables under Site configuration → Environment variables (same three `VITE_*` keys as above).
5. Deploy.

Add this `_redirects` file (already handled by Netlify's SPA defaults, but add if you see 404s on refresh) to `public/_redirects`:
```
/*  /index.html  200
```

---

## 3. GitHub Pages

GitHub Pages serves from a subpath by default (`username.github.io/repo-name`), so set `base` in `vite.config.js` before building:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...rest of config
})
```

Then:
```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Add to `package.json` scripts for convenience:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Enable Pages in the repo under Settings → Pages → Source: `gh-pages` branch.

**Note:** GitHub Pages has no server-side environment variables — `VITE_*` values must be set at build time on your machine or via GitHub Actions secrets before running `npm run build`.

### Optional: GitHub Actions auto-deploy to Pages

`.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
        env:
          VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
          VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
          VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## General Environment Variables Checklist

| Variable | Where to get it | Required for |
|---|---|---|
| `VITE_EMAILJS_SERVICE_ID` | emailjs.com → Email Services | Contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | emailjs.com → Email Templates | Contact form |
| `VITE_EMAILJS_PUBLIC_KEY` | emailjs.com → Account → API Keys | Contact form |

Without these, the site still builds and runs fine — the contact form will show an error toast on submit instead of sending, since it fails safely rather than throwing.
