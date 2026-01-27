# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Development server at localhost:3000
npm run build      # Production build to /build
npm run deploy     # Build and deploy to GitHub Pages
npm run lint       # ESLint with auto-fix
npm test           # Run tests (Jest)
```

## Architecture

React 18 SPA hosted on GitHub Pages using hash-based routing (`createHashRouter`) for static hosting compatibility.

### Data Flow
- **Static content** lives in `src/json/` files (projects.js, shared.js, routing.js, etc.)
- Pages import data from JSON files and render it
- No global state management; simple prop drilling

### Key Files
- `src/components/navbar/Router.js` - All route definitions
- `src/json/routing.js` - Navigation menu structure (navLinks array)
- `src/json/shared.js` - Contact info and sponsor data
- `src/json/projects.js` - Project page content

### Page Structure Pattern
All pages follow this structure:
```jsx
<PageWrapper>
  <Banner>...</Banner>
  <ContentWrapper>...</ContentWrapper>
</PageWrapper>
```

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/components/navbar/Router.js`
3. Add nav link in `src/json/routing.js`

### Adding Sponsors
1. Add entry to `sponsors` object in `src/json/shared.js`
2. Add `<a><img></a>` element in `src/pages/Sponsors.js` under appropriate tier
3. Logo files go in `public/images/sponsors/`

## Styling

- **Tailwind CSS** with custom theme in `tailwind.config.js`
- **Bootstrap** used only for carousels (react-bootstrap)
- Custom colors: `dusk` (dark bg), `moon` (purple), `stardust` (accent), `old-gold`/`boilermaker-gold` (Purdue brand)
- Fonts: `font-display` (Chakra Petch), `font-display2` (Roboto Mono)
- Responsive: mobile-first with `md:` (768px) and `lg:` (1024px) breakpoints

## Context Documentation

Detailed codebase documentation is available in `llm-context/codebase-overview.md` for comprehensive reference on page inventory, component catalog, and data structures.
