# Portfolio Website — Technical Design

#[[file:requirements.md]]

---

## 1. Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18 | Component-based, large ecosystem, fast rendering with concurrent features |
| Build Tool | Vite 5 | Near-instant HMR, optimized production builds, zero-config React support |
| Styling | Tailwind CSS 3 | Utility-first, built-in dark mode, responsive utilities, tree-shaken output |
| Icons | React Icons (react-icons) | Single package for multiple icon sets (Font Awesome, Simple Icons, Heroicons) |
| Font | Inter (Google Fonts) | Clean, modern, excellent readability, variable font for performance |
| Animations | CSS + Intersection Observer | No extra bundle cost, native performance, respects reduced-motion |
| Deployment | Static build (dist/) | Deployable to any static host (Vercel, Netlify, GitHub Pages, S3) |

---

## 2. Architecture Decisions

### AD-1: Single-Page Application (SPA) with Anchor Navigation

**Decision:** Build as a single-page app with smooth-scroll anchor links, not a multi-page router app.

**Rationale:**
- Portfolio is content-light (8 sections on one page) — no need for route-based code splitting
- Smooth scrolling between sections feels more polished
- Simpler deployment (single `index.html`)
- Better perceived performance — no route transitions

**Trade-off:** SEO is slightly less granular (one URL), but acceptable for a personal portfolio.

---

### AD-2: Data-Driven Architecture via JSON Config

**Decision:** All personal content lives in `src/data/portfolio.json`. Components import this file and render from it.

**Rationale:**
- Single source of truth for content updates
- Non-technical users can update JSON without touching React components
- Enables future migration to CMS or API without component changes
- Keeps components purely presentational

**Implementation:**
```jsx
// Components import data directly
import data from '../data/portfolio.json';

// Or via a context provider for deeply nested access
<PortfolioContext.Provider value={data}>
```

**Decision:** Use direct imports (no context) since the component tree is shallow and each section only needs its own slice of data.

---

### AD-3: Tailwind Dark Mode via Class Strategy

**Decision:** Use Tailwind's `darkMode: 'class'` strategy with a custom `useTheme` hook.

**Rationale:**
- Class strategy gives full programmatic control over theme
- Can respect `prefers-color-scheme` on first visit AND allow manual override
- localStorage persistence is straightforward
- Smooth transition via CSS `transition` on background/color properties

**Implementation Flow:**
1. On mount: check localStorage → fallback to `prefers-color-scheme` → default to light
2. Apply/remove `dark` class on `<html>` element
3. On toggle: update localStorage + class
4. Tailwind utilities like `dark:bg-slate-900` handle styling automatically

---

### AD-4: Scroll Animations via Intersection Observer

**Decision:** Use a custom `useInView` hook wrapping `IntersectionObserver` for scroll-triggered animations.

**Rationale:**
- Zero bundle cost (native browser API)
- Better performance than scroll event listeners
- Simple to implement with a reusable wrapper component
- Easily disabled when `prefers-reduced-motion: reduce` is active

**Implementation:**
```jsx
// AnimatedSection component
function AnimatedSection({ children, className }) {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}
```

---

### AD-5: Mobile Navigation — Slide-in Drawer

**Decision:** Hamburger icon on mobile that reveals a full-height slide-in drawer from the right.

**Rationale:**
- Standard mobile pattern, users know the interaction
- Covers full viewport height for easy touch targets
- Body scroll locked when open (prevents scroll-behind)
- Closes on link click or outside tap

---

### AD-6: No External Animation Library

**Decision:** CSS transitions + `IntersectionObserver` only. No Framer Motion, AOS, or GSAP.

**Rationale:**
- Keeps bundle small (NFR-5: < 200KB gzipped)
- Animations are subtle (fade + translate) — CSS handles this easily
- Fewer dependencies = less maintenance
- Performance is better with CSS-driven animations (compositor thread)

---

## 3. Component Architecture

```
App.jsx
├── Navbar (fixed, contains ThemeToggle + nav links + mobile menu)
├── main
│   ├── Hero
│   ├── About
│   ├── Skills
│   │   └── SkillCard (×N)
│   ├── Projects
│   │   └── ProjectCard (×N)
│   ├── Experience
│   │   └── ExperienceCard (×N)
│   ├── Education
│   │   └── EducationCard (×N)  [reuses ExperienceCard layout]
│   ├── Certifications
│   │   └── CertificationCard (×N)
│   └── Contact
│       └── SocialLink (×N)
└── Footer
```

### Component Responsibilities

| Component | Role |
|-----------|------|
| `Section` | Reusable wrapper: consistent padding, max-width, title, alternating backgrounds |
| `AnimatedSection` | Wraps content with fade-in animation on scroll |
| `Navbar` | Fixed nav, scroll-spy active state, theme toggle, mobile drawer |
| `ThemeToggle` | Sun/moon icon button, toggles dark class |
| `Button` | Reusable CTA button with variants (primary, secondary, outline) |
| `ProjectCard` | Card with image, tech tags, links, features list |
| `SkillCard` | Category heading + skill items grid |
| `ExperienceCard` | Timeline-style card with role, company, duration, achievements |
| `CertificationCard` | Compact card with name, issuer, date, credential link |
| `SocialLink` | Icon + link for social platforms |

---

## 4. Styling Architecture

### Tailwind Configuration

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
```

### CSS Layer Strategy

```css
/* src/styles/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Smooth scrolling, font smoothing, transition for theme changes */
  html { scroll-behavior: smooth; }
  body { @apply transition-colors duration-200; }
}

@layer components {
  /* Reusable component classes if needed */
}
```

---

## 5. State Management

Minimal state — no global store needed.

| State | Location | Persistence |
|-------|----------|-------------|
| Theme (dark/light) | `useTheme` hook | localStorage |
| Mobile menu open | Navbar local state | None |
| Active nav section | `useScrollSpy` hook | None |
| Animation triggered | `useInView` hook (per section) | None |

---

## 6. Custom Hooks

### `useTheme()`
```
Returns: { theme, toggleTheme, isDark }
- Initializes from localStorage → prefers-color-scheme → 'light'
- Adds/removes 'dark' class on document.documentElement
- Persists to localStorage on change
```

### `useScrollSpy(sectionIds)`
```
Returns: activeSection (string)
- Observes all section elements
- Returns the ID of the section currently most visible in viewport
- Used by Navbar to highlight active link
```

### `useInView(options)`
```
Returns: [ref, isInView]
- Wraps IntersectionObserver
- options: { threshold, triggerOnce }
- Returns true once element enters viewport
```

---

## 7. File Structure (Final)

```
Build portfolio website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── index.css
│   ├── data/
│   │   └── portfolio.json
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollSpy.js
│   │   └── useInView.js
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Section.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── AnimatedSection.jsx
│   │       ├── Button.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── SkillCard.jsx
│   │       ├── ExperienceCard.jsx
│   │       ├── CertificationCard.jsx
│   │       ├── SocialLink.jsx
│   │       └── ThemeToggle.jsx
│   └── assets/
│       └── placeholder-project.svg
└── .gitignore
```

---

## 8. Performance Strategy

| Technique | Implementation |
|-----------|---------------|
| Tree-shaking | Vite + Tailwind purge unused CSS |
| Font loading | `font-display: swap` via Google Fonts link |
| Image optimization | SVG placeholders, lazy loading for project images |
| Code splitting | Not needed (single page, small bundle) |
| CSS animations | Hardware-accelerated (transform, opacity only) |
| Minimal dependencies | React + ReactDOM + react-icons only |

---

## 9. Accessibility Implementation

| Requirement | Implementation |
|-------------|---------------|
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| Skip link | Hidden link at top: "Skip to main content" |
| ARIA labels | On theme toggle, mobile menu button, social links |
| Focus management | Visible focus rings (Tailwind `focus-visible:ring-2`) |
| Keyboard nav | Tab order follows visual order, Enter/Space activates buttons |
| Reduced motion | `motion-safe:` Tailwind variant for animations |
| Color contrast | All text meets 4.5:1 ratio (verified with Tailwind defaults) |
| Alt text | All `<img>` have descriptive alt text from data |

---

## 10. Build & Development

```bash
# Development
npm run dev        → Vite dev server (localhost:5173)

# Production build
npm run build      → Outputs to dist/

# Preview production build
npm run preview    → Serves dist/ locally
```

No environment variables needed. No backend. Pure static output.
