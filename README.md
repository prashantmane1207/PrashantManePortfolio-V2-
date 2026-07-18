# Prashant Mane — Portfolio

A premium, production-ready personal portfolio built with React, Vite and Tailwind CSS — content is pulled directly from Prashant Mane's resume and GitHub profile ([@prashantmane1207](https://github.com/prashantmane1207)).

## Tech Stack

- React.js 18 (Vite)
- Tailwind CSS
- React Router DOM
- Framer Motion (animations)
- React Icons
- React Type Animation
- React Scroll
- React Toastify
- EmailJS (`@emailjs/browser`)
- Swiper (available for future use, e.g. testimonial/screenshot carousels)

## Folder Structure

```
src/
  components/   Navbar, Footer, Button, SectionHeading, Loader, ScrollProgressBar, CursorGlow, BackToTop
  sections/     Hero, About, Skills, Experience, Projects, Certifications, GithubStats, Services, Contact
  pages/        Home, ProjectDetailAITrip, ProjectDetailEMS, NotFound
  data/         profile.js, skills.js, experience.js, projects.js, social.js — all editable content lives here
  hooks/        useActiveSection, useScrollProgress
  App.jsx, main.jsx, index.css
public/
  favicon.svg, robots.txt, Prashant_Mane_Resume.pdf
```

All content — name, summary, skills, experience, education, certifications, projects — lives in `src/data/*.js`. Edit those files to update the site; no need to touch components.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to `dist/`.

## EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) so it works without a backend.

1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) — note the **Service ID**.
3. Create an Email Template with variables: `from_name`, `from_email`, `subject`, `message` — note the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Restart `npm run dev` after adding the `.env` file. Without these keys, the form shows a friendly error toast instead of failing silently.

## Adding Project Screenshots

Drop images into `public/projects/<project-slug>/` and reference them from `src/pages/ProjectDetailAITrip.jsx` / `ProjectDetailEMS.jsx`, or add an `image` field to entries in `src/data/projects.js` and render it in `Projects.jsx`.

## Updating Resume

Replace `public/Prashant_Mane_Resume.pdf` with an updated file of the same name, or update `resumeUrl` in `src/data/profile.js`.

## Deployment

See `DEPLOYMENT.md` for Vercel, Netlify and GitHub Pages instructions.

## Notes on Content Accuracy

- The **Employee Management System** project is documented from the resume; no public GitHub link was found for it at build time. Add the repo URL in `src/data/projects.js` (`github` field) once it's published.
- GitHub stats on the page are fetched **live** from the public GitHub REST API (`api.github.com`) at runtime — no hardcoded numbers, no API key required, but subject to GitHub's public rate limits (60 requests/hour per IP for unauthenticated calls).
