---
inclusion: always
---

# Product Overview

Single-page personal developer portfolio website. Showcases skills, projects, experience, education, certifications, and contact info for potential employers or clients.

## Section Order

Home (Hero) → About → Skills → Projects → Experience → Education → Certifications → Contact

Each section uses an anchor `id` matching its name in lowercase (e.g., `id="projects"`). Navigation is smooth-scroll via anchor links — no client-side router.

## Content Model

All portfolio text, lists, and metadata live in `src/data/portfolio.json`. Components import this file and render from it directly. Never hardcode user-facing content strings in JSX.

The JSON schema has these top-level keys: `personal`, `skills`, `projects`, `experience`, `education`, `certifications`, `achievements`, `social`.

## Theme System

- Dark/light toggle using Tailwind `class` strategy (add/remove `dark` on `<html>`).
- Persisted in `localStorage` under key `"theme"`.
- Falls back to `prefers-color-scheme` on first visit.
- Every visible element must provide both light and dark variants (e.g., `text-slate-900 dark:text-white`).

## Layout Conventions

- Max content width: `max-w-6xl` with horizontal padding `px-4 sm:px-6 lg:px-8`.
- Sections alternate background using `alternate` prop on the `Section` wrapper (`bg-slate-50 dark:bg-slate-800/50`).
- Fixed navbar with backdrop blur on scroll. Navbar height: `h-16` (64px); hero has `pt-16` to compensate.
- Mobile breakpoint at `md:` (768px). Hamburger menu below this.

## Animation Rules

- Scroll-triggered entrance animations via `AnimatedSection` wrapper (opacity + translateY).
- CSS keyframe animations (`animate-fade-in`, `animate-slide-up`) defined in `tailwind.config.js`.
- All animations respect `prefers-reduced-motion: reduce` — durations collapse to near-zero via base CSS layer.
- Default transition duration: 700ms ease-out with optional staggered `delay` prop.

## Accessibility Requirements

- Skip-to-content link (`#main-content`) as the first focusable element.
- Semantic landmarks: `<header>`, `<main id="main-content">`, `<section>`, `<footer>`.
- `aria-label` on `<nav>`, `aria-expanded` on mobile menu toggle.
- Color contrast must meet WCAG AA. Use the `primary-*` / `slate-*` palette pairings already established.
- Interactive elements must have visible focus rings (Tailwind `focus:` utilities).

## Color Palette

Custom `primary` scale (indigo-based) defined in `tailwind.config.js` — use `primary-400` through `primary-700` for accents. Neutral backgrounds and text use `slate-*`.

## Responsive Behavior

- Typography scales up via `sm:`, `md:`, `lg:` prefixes (e.g., hero heading goes from `text-4xl` up to `lg:text-7xl`).
- Grid layouts collapse from multi-column to single-column below `md:`.
- Mobile menu drawer locks body scroll (`overflow: hidden`) when open.

## Icons

Use `react-icons` package — specifically `Hi` (Heroicons) set for UI chrome and `Fa` (Font Awesome) set for social/brand icons. Icon names are referenced in `portfolio.json` `social[].icon` field and resolved dynamically.
