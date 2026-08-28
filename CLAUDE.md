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

## Tech Stack

- **React 18** SPA, **React Router DOM 6** with hash-based routing (`createHashRouter`) for GitHub Pages compatibility
- **Tailwind CSS** for styling; **Bootstrap / react-bootstrap** used only for carousels
- **React Icons** for social/UI icons
- No global state management; static data + simple prop drilling
- Deployed via `gh-pages` to GitHub Pages (custom domain via `public/CNAME`)

## Architecture

### Data Flow
- **Static content** lives in `src/json/` files (`projects.js`, `routing.js`, `gallery.js`, `sponsors.js`, `contact.js`, `team.js`, `press.js`, `landing.js`, `donate.js`)
- Pages import data from JSON files and render it
- No global state management; simple prop drilling

### Directory Structure
```
public/images/          Static images (projects/, team/, sponsors/, other-media/, landing/, backgrounds/)
src/
  components/            Reusable UI, grouped by domain (banner/, button/, navbar/, layout/, landing/, projects/, team/, sponsors/, carousel/)
  pages/                 Route-level components (projects/, facilities/, admin/)
  json/                  Static data files described above
  App.js, index.js       Entry points
llm-context/             Supplementary docs (e.g. accessibility-analysis.md)
```

### Key Files
- `src/components/navbar/Router.js` - All route definitions
- `src/json/routing.js` - Navigation menu structure (navLinks array)
- `src/json/contact.js` - Contact info (email)
- `src/json/sponsors.js` - Sponsor data, keyed object with a `tier` field per sponsor
- `src/json/projects.js` - Project page content
- `src/json/gallery.js` - Image/photo references, grouped by team or event (see Images section below)

### Page Structure Pattern
All pages follow this structure:
```jsx
<PageWrapper>
  <Banner>...</Banner>
  <ContentWrapper>...</ContentWrapper>
</PageWrapper>
```

### Adding New Pages
1. Create page component in `src/pages/` (or `src/pages/projects/` / `src/pages/facilities/` as appropriate)
2. Add route in `src/components/navbar/Router.js`
3. Add nav link in `src/json/routing.js`

### Adding Sponsors
1. Add entry to `sponsors` object in `src/json/sponsors.js`, including its `tier` (`platinum` | `gold` | `silver`), `image`, `img_alt`, `link`, and `display_height`
2. `src/pages/Sponsors.js` renders tiers automatically by filtering on the `tier` field — no per-sponsor JSX needed
3. Logo files go in `public/images/sponsors/`

## Components

- Reusable UI pieces belong in `src/components/`, grouped into a domain subfolder (`banner/`, `button/`, `navbar/`, `layout/`, `landing/`, `projects/`, `team/`, `sponsors/`, `carousel/`, etc.) — create a new subfolder if a new domain doesn't fit an existing one
- **Whenever appropriate, extract new components into `src/components/`** rather than growing a single page file — keep `src/pages/*` files thin (data wiring + composition) instead of letting them become monolithic. Prefer several small, purpose-named components over one large page-specific block of JSX
- Page-specific components that are unlikely to be reused (e.g. `RDETimeline`) still belong under `src/components/<domain>/`, not inline in the page file

## Images

- **Add every image reference to `src/json/gallery.js` first**, not inline in a page/component. Group entries by team, project, or event (e.g. `teamPhotos`, `testbed_202508_selectedMedia`, `rde_2026_aiaa`) as an array of `{ src, alt }` (or `{ src, alt, caption }`) objects, or a keyed object of such entries
- Then **import the relevant export from `gallery.js`** into the page/component that needs it, rather than hardcoding image paths
- Actual image files go under `public/images/`, mirroring the grouping used in `gallery.js` (e.g. `public/images/projects/<project>/<event>/`, `public/images/team/group_photos/<term>/`, `public/images/other-media/<event>/`)
- `src` paths in `gallery.js` are root-relative (e.g. `/images/projects/rde/...`), matching files under `public/`

## Styling

- **Tailwind CSS** with custom theme in `tailwind.config.js`
- **Bootstrap** used only for carousels (react-bootstrap)
- Custom colors: `dusk` (#1A1423, dark bg), `moon` (#2D1B3D, purple), `stardust` (#9B72AA, accent), `old-gold` (#CFB991, Purdue brand), `boilermaker-gold` (#CEB888, Purdue brand), `jet-grey` (#333333)
- Fonts: `font-display`/`font-display-bold`/`font-display-semibold` (Chakra Petch), `font-display2`/`font-display2-bold` (Roboto Mono)
- Responsive: mobile-first with `md:` (768px) and `lg:` (1024px) breakpoints, e.g. `text-sm md:text-lg lg:text-xl`, `grid-cols-1 md:grid-cols-2`
- Common UI patterns: Bootstrap carousels for photo galleries/CAD models, two-column specs tables (`SpecsTable` component) for technical specs, semi-transparent overlay boxes (`bg-moon/80`) for captions on images

## Context Documentation

Additional supplementary documentation is available in `llm-context/accessibility-analysis.md` for accessibility audit findings and recommendations.
