# Haider Ali — Portfolio

Full-stack software engineer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

🌐 **Live**: [https://haider-bitcoding.github.io/haider-portfolio/](https://haider-bitcoding.github.io/haider-portfolio/)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🛠 Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server
- **Tailwind CSS 4** — Utility-first styling
- **Lucide React** — Icon library

---

## ✨ Features

### 🎨 Design & UX

- **Dark/Light Theme Toggle** — Persisted to localStorage, respects system preference
- **Animated Gradient Background** — Interactive parallax effect following mouse movement
- **Scroll Progress Indicator** — Visual feedback showing page scroll position
- **Animated Skill Progress Bars** — Skills animate in when scrolled into view
- **Animated Stats Counters** — Numbers count up with easing when visible
- **Profile Image with Fallback** — Shows initials if image fails to load
- **Smooth Micro-interactions** — Hover effects, scale transforms, and transitions
- **Terminal Animation** — Typing effect in hero section

### 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Mobile navigation with hamburger menu
- Touch-friendly interactions

### ♿ Accessibility (WCAG 2.1 AA)

- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`)
- Skip-to-content link for keyboard users
- ARIA labels and roles throughout
- Focus-visible indicators
- Reduced motion support (`prefers-reduced-motion`)
- Keyboard navigation (Escape closes mobile menu)
- Screen reader friendly (proper heading hierarchy, `aria-current`, `aria-hidden`)
- Scroll progress bar with ARIA attributes

### 🔍 SEO

- Meta tags (title, description, canonical)
- Open Graph (Facebook, LinkedIn)
- Twitter Card
- JSON-LD structured data (Person schema)
- `robots.txt` and `sitemap.xml`
- Proper heading hierarchy (h1 → h2 → h3)

### ⚡ Performance

- ~57KB JavaScript (gzipped)
- Inline critical CSS (no FOUC)
- SVG favicon (zero network requests)
- Preconnected fonts
- Lazy-loaded animations with Intersection Observer
- Passive scroll listeners
- RequestAnimationFrame for smooth counters

### 🛡 Production Hardening

- Error boundary with graceful fallback
- 404 page for GitHub Pages
- Print stylesheet
- Custom scrollbar styling
- Selection color theming
- Theme persistence in localStorage
- System preference detection

---

## 📦 Deployment

### GitHub Pages (Automated)

This portfolio is configured for automatic deployment to GitHub Pages via GitHub Actions.

**Setup steps:**

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the workflow deploys automatically

The workflow:

- Builds the project with Vite
- Uploads the `dist/` folder as a Pages artifact
- Deploys to `https://<username>.github.io/<repo>/`

**Custom domain?** Add a `CNAME` file in `public/` with your domain.

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── 404.html                # Custom 404 for GitHub Pages
│   ├── robots.txt              # SEO crawler directives
│   └── sitemap.xml             # Sitemap for search engines
├── src/
│   ├── components/
│   │   ├── About.tsx           # Profile tiles
│   │   ├── Contact.tsx         # Contact info & social links
│   │   ├── Currently.tsx       # Current focus & availability
│   │   ├── Education.tsx       # Timeline of education
│   │   ├── ErrorBoundary.tsx   # Production error handling
│   │   ├── Hero.tsx            # Hero with terminal animation
│   │   ├── Navbar.tsx          # Sticky nav with theme toggle
│   │   ├── ScrollProgress.tsx  # Scroll progress indicator
│   │   ├── Skills.tsx          # Animated skill progress bars
│   │   ├── Stats.tsx           # Animated counters
│   │   └── Work.tsx            # Project showcase
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/light theme management
│   ├── hooks/
│   │   └── useCounter.ts     # Animated counter hook
│   ├── App.tsx                 # Root component
│   ├── index.css               # Global styles & Tailwind
│   └── main.tsx                # Entry point
├── index.html                  # HTML shell with SEO meta
├── GITHUB_PAGES.md             # Next.js migration guide
└── README.md                   # This file
```

---

## 🎨 Customization

### Update personal info

Edit the data directly in each component file:

- **Hero**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Projects**: `src/components/Work.tsx`
- **Education**: `src/components/Education.tsx`
- **Contact**: `src/components/Contact.tsx`

### Change colors

Edit `src/index.css` → `@theme` block:

```css
@theme {
  --color-primary: #6366f1; /* Indigo */
  --color-primary-light: #818cf8;
  --color-accent: #22d3ee; /* Cyan */
}
```

### Change fonts

Edit `index.html` Google Fonts link and `src/index.css` `font-family`.

### Update profile image

Replace `/public/images/pp.jpg` with your own photo. The component has a fallback that shows initials if the image fails to load.

---

## 🔄 Next.js Migration

Want to convert this to Next.js for static export? See [`GITHUB_PAGES.md`](./GITHUB_PAGES.md) for a complete step-by-step runbook.

---

## 📄 License

MIT — use freely for your own portfolio.

---

## 📧 Contact

**Haider Ali**  
📧 haiderali.dev.se@gmail.com  
📱 +92-304-4122641  
🔗 [LinkedIn](https://www.linkedin.com/in/ihaiderr)  
📷 [Instagram](https://www.instagram.com/ihaiderr)
