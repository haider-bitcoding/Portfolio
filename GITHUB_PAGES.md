# GitHub Pages Deployment

This repository is a Vite + React portfolio. It deploys through
`.github/workflows/deploy.yml` and publishes the Vite `dist/` directory.

## First-time setup

1. Push the repository to GitHub.
2. In **Settings -> Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` or `master`, or run **Deploy to GitHub Pages** from the
   repository's **Actions** tab.

The workflow installs dependencies with `npm ci`, runs `npm run build`, and
uploads `dist/` with the official Pages actions.

## Site URL

This is a project site, so the deployed URL is:

`https://haider-bitcoding.github.io/haider-portfolio/`

The Vite `base` setting, SEO metadata, sitemap, robots file, fallback page,
and profile image paths are configured for this prefix.

## Local checks

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

The development server uses `http://localhost:3000/`. A successful local build
does not enable GitHub Pages; the repository Pages source must still be set to
**GitHub Actions**.

## Troubleshooting a 404

- Confirm Pages **Source** is **GitHub Actions**, not a branch folder.
- Check the latest workflow run for a failed install, build, or deploy step.
- Confirm the push was made to `main` or `master`.
- Open the project URL with `/haider-portfolio/`; the account root URL is not
  this repository's Pages URL.
- Wait briefly after a successful deployment and retry without a cached page.

`public/404.html` provides the fallback page for URLs that GitHub Pages cannot
resolve.
