# Project Structure

```
src/
├── main.jsx                  # App entry point (React root render)
├── App.jsx                   # Top-level layout: Navbar → sections → Footer
├── styles/
│   └── index.css             # Tailwind directives and base layer overrides
├── data/
│   └── portfolio.json        # All portfolio content (personal info, skills, projects, etc.)
├── components/
│   ├── layout/               # Structural components (Navbar, Footer, Section wrapper)
│   ├── sections/             # Full-page sections (Hero, About, Skills, Projects, etc.)
│   └── ui/                   # Reusable presentational components (Button, cards, ThemeToggle)
├── hooks/                    # Custom React hooks (useTheme, useInView, useScrollSpy)
└── assets/                   # Static assets (SVGs, images)
public/
└── favicon.svg               # Site favicon
```

## Architecture Rules
- **Data-driven content:** All portfolio text, lists, and metadata live in `src/data/portfolio.json`. Components import and render from this file — do not hardcode content strings in JSX.
- **Component organization:** Components are split into `layout/` (app shell), `sections/` (page sections), and `ui/` (reusable primitives).
- **One component per file.** Each file exports a single default component.
- **Hooks in `src/hooks/`.** Custom hooks are plain `.js` files with named exports.
- **No routing.** This is a single-page app using anchor-based smooth scrolling, not a router.
- **Styling is Tailwind-only.** Use utility classes directly in JSX. No CSS modules or styled-components.
