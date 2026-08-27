# Portfolio Website

A single-page personal developer portfolio built with React and Tailwind CSS. Showcases skills, projects, experience, education, certifications, and contact information.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 with PostCSS and Autoprefixer
- **Icons:** react-icons (Heroicons + Font Awesome)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output goes to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.jsx                  # App entry point
├── App.jsx                   # Top-level layout
├── styles/
│   └── index.css             # Tailwind directives and base overrides
├── data/
│   └── portfolio.json        # All portfolio content (edit this to customize)
├── components/
│   ├── layout/               # Navbar, Footer, Section wrapper
│   ├── sections/             # Hero, About, Skills, Projects, Experience, Education, Certifications, Contact
│   └── ui/                   # Reusable components (Button, cards, ThemeToggle, etc.)
├── hooks/                    # Custom hooks (useTheme, useInView, useScrollSpy)
└── assets/                   # Static assets
```

## Customization

All portfolio content is driven by `src/data/portfolio.json`. Edit that file to update:

- Personal info and bio
- Skills by category
- Projects with descriptions, tech stack, and links
- Work experience
- Education
- Certifications
- Social links

## Features

- Dark/light theme toggle (persisted in localStorage)
- Responsive design with mobile hamburger menu
- Scroll-triggered entrance animations
- Smooth anchor-based navigation
- Accessible (semantic HTML, ARIA attributes, skip-to-content link)
- Respects `prefers-reduced-motion`

## License

Private project.
