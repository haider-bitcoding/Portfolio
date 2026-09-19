# GitHub Pages Deployment Guide — Next.js Migration

This portfolio is currently built with Vite + React. Below is the runbook for
converting it to a Next.js 14+ static export for GitHub Pages.

---

## 1. Create a new Next.js project

```bash
npx create-next-app@latest haider-portfolio --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd haider-portfolio
```

## 2. Configure static export for GitHub Pages

Edit `next.config.ts`:

```ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "ihaiderr.github.io"; // or your repo name

const nextConfig: NextConfig = {
  output: "export",               // ← static export
  basePath: isProd ? "" : "",     // set to "/repo-name" if using a project page
  images: {
    unoptimized: true,            // required for static export
  },
  trailingSlash: true,            // GitHub Pages needs trailing slashes
};

export default nextConfig;
```

## 3. Move components

Copy the `src/components/` directory into `app/components/` (or keep in `src/components/`).

Update imports to use `@/components/...`.

## 4. Create the App Router page

`app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haider Ali — Full-Stack Software Engineer",
  description: "Full-stack engineer building production backend systems with Java & Spring Boot, then shipping the frontend on top.",
  metadataBase: new URL("https://ihaiderr.github.io"),
  openGraph: {
    title: "Haider Ali — Full-Stack Software Engineer",
    description: "Full-stack engineer building production backend systems.",
    url: "https://ihaiderr.github.io",
    siteName: "Haider Ali",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haider Ali — Full-Stack Software Engineer",
    description: "Full-stack engineer building production backend systems.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

`app/page.tsx`:
```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Currently from "@/components/Currently";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Currently />
      <Education />
      <Contact />
    </main>
  );
}
```

## 5. Add `"use client"` directives

Every component that uses `useState`, `useEffect`, or `useRef` needs:
```tsx
"use client";
```
at the top. That's: Navbar, Hero, About, Skills, Work, Currently, Education, Contact.

## 6. Copy public assets

Copy `public/404.html`, `public/robots.txt`, `public/sitemap.xml` into the Next.js `public/` folder.

## 7. GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## 8. Enable GitHub Pages

1. Go to repo Settings → Pages
2. Source: **GitHub Actions**
3. Push to `main` — the workflow deploys automatically

## 9. Custom domain (optional)

If using a custom domain, add a `public/CNAME` file with your domain,
and update `metadataBase` and canonical URLs accordingly.

---

## Key differences from Vite version

| Concern | Vite (current) | Next.js |
|---------|---------------|---------|
| Build output | `dist/` | `out/` |
| Routing | Hash anchors | Same (single page) |
| Image optimization | Manual | `next/image` (unoptimized in export) |
| SEO meta | `index.html` head | `app/layout.tsx` metadata |
| Fonts | Google Fonts link | `next/font/google` (zero-layout-shift) |
| Analytics | Add manually | `@vercel/analytics` or manual |

## Performance wins with Next.js

- **`next/font`**: Self-hosts Google Fonts → zero CLS, no external request
- **Automatic code splitting**: Each component only loads when needed
- **Built-in image optimization**: Even in static export, better than raw `<img>`
- **Prefetching**: Links are prefetched on hover for instant navigation

---

## Current Vite production features (already applied)

✅ Full SEO meta tags (OG, Twitter, JSON-LD)
✅ Accessible semantic HTML
✅ Reduced-motion support
✅ Keyboard navigation
✅ Print styles
✅ Error boundary
✅ 404 page for GitHub Pages
✅ robots.txt + sitemap.xml
✅ Inline critical CSS (no FOUC)
✅ Dark theme by default
✅ SVG favicon (no network request)
✅ Responsive design (mobile → 4K)
✅ Performance: ~55KB JS gzipped
