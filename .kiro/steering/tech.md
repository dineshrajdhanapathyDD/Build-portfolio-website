# Tech Stack

## Core
- **Framework:** React 18 (JSX, functional components, hooks)
- **Build tool:** Vite 5
- **Styling:** Tailwind CSS 3 with PostCSS and Autoprefixer
- **Icons:** react-icons (Hi and Fa icon sets)
- **Language:** JavaScript (ES modules, no TypeScript)

## Configuration Files
| File | Purpose |
|------|---------|
| `vite.config.js` | Vite config with `@vitejs/plugin-react` |
| `tailwind.config.js` | Custom theme (colors, fonts, animations), dark mode via `class` strategy |
| `postcss.config.js` | PostCSS plugins (tailwindcss, autoprefixer) |

## Common Commands
```bash
npm run dev      # Start Vite dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Key Conventions
- ES module syntax (`export default`, named exports)
- No test framework configured
- No linter/formatter configuration present
- Dark mode uses Tailwind `class` strategy — toggled by adding/removing `dark` class on `<html>`
- Custom color palette uses `primary-*` (indigo-based) defined in tailwind.config.js
- Font: Inter (via `fontFamily.sans` override)
