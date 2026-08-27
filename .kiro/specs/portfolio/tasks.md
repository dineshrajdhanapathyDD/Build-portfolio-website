# Portfolio Website — Implementation Tasks

#[[file:requirements.md]]
#[[file:design.md]]

---

## Task Breakdown

Tasks are ordered by dependency. Each task is independently verifiable.

---

### Task 1: Project Scaffolding & Configuration

**Description:** Initialize the Vite + React project, install dependencies, and configure Tailwind CSS.

**Steps:**
1. Initialize Vite project with React template
2. Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `react-icons`
3. Create `tailwind.config.js` with custom theme (colors, fonts, animations, dark mode)
4. Create `postcss.config.js`
5. Set up `src/styles/index.css` with Tailwind directives and base styles
6. Add Inter font via Google Fonts link in `index.html`
7. Create `.gitignore`
8. Verify: `npm run dev` starts without errors

**Files created/modified:**
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `index.html`
- `src/main.jsx`
- `src/styles/index.css`
- `.gitignore`

**Acceptance:** Dev server runs, Tailwind classes are applied, page renders.

---

### Task 2: Portfolio Data File

**Description:** Create the JSON data file with placeholder content for all sections.

**Steps:**
1. Create `src/data/portfolio.json` with complete placeholder data
2. Include: personal info, skills (4 categories), projects (4 items), experience (2 items), education (2 items), certifications (3 items), achievements (2 items), social links (4 items)
3. Use realistic placeholder text (not lorem ipsum) that demonstrates the data structure

**Files created:**
- `src/data/portfolio.json`

**Acceptance:** JSON is valid, all fields from the data structure spec are present.

---

### Task 3: Custom Hooks

**Description:** Implement the three custom hooks: `useTheme`, `useScrollSpy`, `useInView`.

**Steps:**
1. Create `src/hooks/useTheme.js` — manages dark/light mode with localStorage persistence and system preference detection
2. Create `src/hooks/useScrollSpy.js` — tracks which section is currently in viewport
3. Create `src/hooks/useInView.js` — IntersectionObserver wrapper for scroll animations

**Files created:**
- `src/hooks/useTheme.js`
- `src/hooks/useScrollSpy.js`
- `src/hooks/useInView.js`

**Acceptance:** Hooks export correct interfaces; no runtime errors when imported.

---

### Task 4: Layout Components (Navbar, Footer, Section)

**Description:** Build the structural layout components.

**Steps:**
1. Create `src/components/layout/Section.jsx` — reusable section wrapper with consistent padding, max-width, title, and alternating backgrounds
2. Create `src/components/layout/Navbar.jsx` — fixed nav with links, scroll-spy active state, theme toggle, mobile hamburger drawer
3. Create `src/components/layout/Footer.jsx` — simple footer with copyright and social links
4. Implement skip-to-content link in Navbar
5. Implement mobile menu with body scroll lock

**Files created:**
- `src/components/layout/Section.jsx`
- `src/components/layout/Navbar.jsx`
- `src/components/layout/Footer.jsx`

**Acceptance:** Navbar is fixed, responsive, highlights active section. Mobile menu opens/closes. Footer renders.

---

### Task 5: UI Components (Button, ThemeToggle, AnimatedSection, SocialLink)

**Description:** Build the shared UI primitives.

**Steps:**
1. Create `src/components/ui/Button.jsx` — variants: primary, secondary, outline; sizes: sm, md, lg
2. Create `src/components/ui/ThemeToggle.jsx` — sun/moon icon toggle with ARIA label
3. Create `src/components/ui/AnimatedSection.jsx` — fade-in + slide-up wrapper using `useInView`; respects reduced motion
4. Create `src/components/ui/SocialLink.jsx` — icon + external link with hover effect

**Files created:**
- `src/components/ui/Button.jsx`
- `src/components/ui/ThemeToggle.jsx`
- `src/components/ui/AnimatedSection.jsx`
- `src/components/ui/SocialLink.jsx`

**Acceptance:** Components render with correct variants; theme toggle switches mode; animations trigger on scroll.

---

### Task 6: Hero Section

**Description:** Implement the hero section with name, title, intro, and CTA buttons.

**Steps:**
1. Create `src/components/sections/Hero.jsx`
2. Display name, professional title, introduction from data
3. Add "View Projects" (scrolls to projects) and "Contact Me" (scrolls to contact) buttons
4. Add entrance animation (fade-in on load)
5. Responsive: stack elements vertically on mobile

**Files created:**
- `src/components/sections/Hero.jsx`

**Acceptance:** Hero displays all data fields, buttons scroll to correct sections, responsive layout works.

---

### Task 7: About Section

**Description:** Implement the About Me section with description and stats.

**Steps:**
1. Create `src/components/sections/About.jsx`
2. Display about text and optional profile image placeholder
3. Display stats in a responsive grid (e.g., years of experience, projects completed)
4. Wrap in AnimatedSection

**Files created:**
- `src/components/sections/About.jsx`

**Acceptance:** About section renders description and stats; animates on scroll.

---

### Task 8: Skills Section

**Description:** Implement the skills section with categorized skill cards.

**Steps:**
1. Create `src/components/ui/SkillCard.jsx` — displays a category with its skill items
2. Create `src/components/sections/Skills.jsx` — renders skill cards in a responsive grid
3. Each skill item shows name and optional icon
4. Wrap in AnimatedSection

**Files created:**
- `src/components/ui/SkillCard.jsx`
- `src/components/sections/Skills.jsx`

**Acceptance:** Skills render grouped by category in a responsive grid; animations work.

---

### Task 9: Projects Section

**Description:** Implement the projects section with detailed project cards.

**Steps:**
1. Create `src/components/ui/ProjectCard.jsx` — image, name, description, tech tags, features list, GitHub + live demo links
2. Create `src/components/sections/Projects.jsx` — renders project cards in a responsive grid
3. Tech tags as styled pills
4. External links open in new tab with `rel="noopener noreferrer"`
5. Hover effects on cards
6. Create `src/assets/placeholder-project.svg` for project images

**Files created:**
- `src/components/ui/ProjectCard.jsx`
- `src/components/sections/Projects.jsx`
- `src/assets/placeholder-project.svg`

**Acceptance:** All 4 project cards render with complete info; links work; hover effects visible; responsive grid.

---

### Task 10: Experience Section

**Description:** Implement the experience section with timeline-style cards.

**Steps:**
1. Create `src/components/ui/ExperienceCard.jsx` — company, role, duration, description, achievements list
2. Create `src/components/sections/Experience.jsx` — renders experience cards in timeline layout
3. Visual timeline connector (vertical line with dots)
4. Wrap in AnimatedSection

**Files created:**
- `src/components/ui/ExperienceCard.jsx`
- `src/components/sections/Experience.jsx`

**Acceptance:** Experience entries render with all fields; timeline visual is present; responsive.

---

### Task 11: Education Section

**Description:** Implement the education section.

**Steps:**
1. Create `src/components/sections/Education.jsx` — renders education entries
2. Reuse timeline layout pattern from Experience
3. Display institution, degree, duration, description
4. Wrap in AnimatedSection

**Files created:**
- `src/components/sections/Education.jsx`

**Acceptance:** Education entries render with all fields; consistent styling with experience section.

---

### Task 12: Certifications & Achievements Section

**Description:** Implement the certifications and achievements section.

**Steps:**
1. Create `src/components/ui/CertificationCard.jsx` — name, issuer, date, credential link
2. Create `src/components/sections/Certifications.jsx` — renders certifications grid + achievements list
3. Credential links open in new tab
4. Wrap in AnimatedSection

**Files created:**
- `src/components/ui/CertificationCard.jsx`
- `src/components/sections/Certifications.jsx`

**Acceptance:** Certifications and achievements render completely; credential links work.

---

### Task 13: Contact Section

**Description:** Implement the contact section with info and social links.

**Steps:**
1. Create `src/components/sections/Contact.jsx`
2. Display email, location, availability status
3. Render social links using SocialLink component
4. Wrap in AnimatedSection

**Files created:**
- `src/components/sections/Contact.jsx`

**Acceptance:** Contact info displays; social links render with correct icons and URLs.

---

### Task 14: App Assembly & Integration

**Description:** Wire all components together in App.jsx.

**Steps:**
1. Create `src/App.jsx` — imports and renders Navbar, all sections, Footer in correct order
2. Add `id` attributes to each section for anchor navigation
3. Verify smooth scrolling works end-to-end
4. Verify scroll-spy highlights correct nav item
5. Add `<main>` wrapper with proper semantic structure
6. Create `public/favicon.svg`

**Files created/modified:**
- `src/App.jsx`
- `public/favicon.svg`

**Acceptance:** Full page renders with all sections; navigation works; theme toggle works; animations fire; mobile responsive.

---

### Task 15: Final Polish & Build Verification

**Description:** Final adjustments, accessibility audit, and production build test.

**Steps:**
1. Verify all 14 acceptance criteria from requirements spec
2. Check semantic HTML structure (header, nav, main, section, footer)
3. Verify ARIA labels on interactive elements
4. Test keyboard navigation (tab order)
5. Run `npm run build` — confirm no errors or warnings
6. Check for horizontal scroll at all breakpoints
7. Verify `prefers-reduced-motion` disables animations
8. Verify system dark mode preference is respected on first load

**Acceptance:** Production build succeeds; all acceptance criteria pass.

---

## Dependency Graph

```
Task 1 (Scaffolding)
  └── Task 2 (Data)
  └── Task 3 (Hooks)
        └── Task 4 (Layout) ──┐
        └── Task 5 (UI)  ─────┤
              ├── Task 6 (Hero)
              ├── Task 7 (About)
              ├── Task 8 (Skills)
              ├── Task 9 (Projects)
              ├── Task 10 (Experience)
              ├── Task 11 (Education)
              ├── Task 12 (Certifications)
              └── Task 13 (Contact)
                    └── Task 14 (Assembly)
                          └── Task 15 (Polish)
```

---

## Estimated Effort

| Task | Complexity | Files |
|------|-----------|-------|
| 1. Scaffolding | Low | 8 |
| 2. Data | Low | 1 |
| 3. Hooks | Medium | 3 |
| 4. Layout | Medium | 3 |
| 5. UI Components | Medium | 4 |
| 6–13. Sections | Low each | 1–2 each |
| 14. Assembly | Low | 2 |
| 15. Polish | Medium | 0 (fixes only) |
