# Muddasani Siri — Portfolio

A modern, responsive personal portfolio for an AI / Machine Learning developer, built with **React + Vite**. Single cohesive page with dark/light mode, smooth scroll-reveal animations, an animated network hero, and a recruiter-focused layout.

![Tech](https://img.shields.io/badge/React-18-61dafb) ![Build](https://img.shields.io/badge/Vite-5-646cff)

---

## ✨ Features

- Single-page, cohesive layout (hero, about, skills, experience, projects, education, certifications, contact, footer)
- **Dark & light mode** with system-preference detection and saved preference
- Fully responsive — desktop, tablet, and mobile (mobile-first)
- Smooth scrolling, loading animation, scroll-triggered reveals, hover micro-interactions
- Animated node-graph hero background (auto-disables for reduced-motion users)
- Component-based, reusable architecture
- **Centralized content** — edit one file to update everything
- SEO metadata, Open Graph tags, and an SVG favicon
- Accessible: keyboard focus styles, skip link, reduced-motion support, semantic HTML
- Résumé download built in

---

## 🚀 Getting Started

You need **Node.js 18+** installed. Check with `node -v`.

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally (development)

```bash
npm run dev
```

This starts the dev server and opens `http://localhost:5173` in your browser. Edits hot-reload instantly.

### 3. Build for production

```bash
npm run build
```

The optimized output is generated in the `dist/` folder.

### 4. Preview the production build

```bash
npm run preview
```

---

## 🖊️ How to update your content

**You almost never need to touch component code.** Nearly everything lives in one file:

```
src/data/portfolioData.js
```

Open it and edit the values. It's fully commented. Sections you can change:

| What you want to change      | Where in `portfolioData.js` |
| ---------------------------- | --------------------------- |
| Name, title, summary, stats  | `profile`                   |
| Email, phone, GitHub, LinkedIn, résumé path | `contact`    |
| Technical skills (grouped)   | `skills`                    |
| Internship / work experience | `experience`                |
| Projects (with GitHub links) | `projects`                  |
| Education timeline           | `education`                 |
| Certifications               | `certifications`            |
| Areas of interest            | `interests`                 |
| SEO text                     | `seo`                       |

> 🔎 **Tip:** search the file for `TODO` to find spots that need your input — like the real GitHub repo link for each project.

### Replace the résumé

Drop your new PDF into the `public/` folder and update the `resume` path in `contact` (default: `/Muddasani_Siri_Resume.pdf`).

### Update the page title / social preview

Edit the `<title>` and `<meta>` tags in `index.html`.

### Change colors

All colors are CSS variables in `src/styles/index.css` under `:root` (dark) and `[data-theme="light"]`. Change `--primary`, `--accent`, `--bg`, etc. in one place and the whole site updates.

---

## 📁 Project structure

```
portfolio/
├── index.html                 # HTML shell + SEO meta + fonts
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── Muddasani_Siri_Resume.pdf
└── src/
    ├── main.jsx               # App entry
    ├── App.jsx                # Assembles all sections
    ├── data/
    │   └── portfolioData.js   # ← EDIT THIS for all content
    ├── context/
    │   └── ThemeContext.jsx   # Dark / light mode
    ├── hooks/
    │   └── useScrollReveal.js # Scroll-triggered animation
    ├── styles/
    │   └── index.css          # Design tokens + global styles
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── NetworkBackground.jsx
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx
        ├── Projects.jsx / .css
        ├── Education.jsx / .css
        ├── Timeline.css       # Shared by experience + education
        ├── Contact.jsx / .css
        ├── Footer.jsx / .css
        ├── Loader.jsx / .css
        ├── SectionHeader.jsx  # Reusable section header
        ├── Reveal.jsx         # Reusable reveal wrapper
        └── Icons.jsx          # Inline SVG icons (no dependency)
```

---

## 🌐 Deploying (optional)

This is a static site — it works on any static host:

- **Vercel / Netlify:** import the repo, framework preset “Vite”, build command `npm run build`, output `dist`.
- **GitHub Pages:** run `npm run build` and publish the `dist/` folder.

After deploying, update `seo.url` in `portfolioData.js` and the meta tags in `index.html`.

---

## 🛠️ Tech stack

- React 18
- Vite 5
- Plain CSS with custom properties (no UI framework needed)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

---

Built with React & Vite. Feel free to make it your own.
