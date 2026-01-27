# PURPL-Purdue.github.io Codebase Overview

**Project:** Purdue Undergraduate Rocket Propulsion Lab (PURPL) Official Website
**Repository:** PURPL-Purdue.github.io
**Type:** Single-Page Application (SPA)
**Hosting:** GitHub Pages
**Generated:** January 2026

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Technology Stack](#technology-stack)
3. [Architecture Overview](#architecture-overview)
4. [Directory Structure](#directory-structure)
5. [Page Inventory](#page-inventory)
6. [Component Catalog](#component-catalog)
7. [Data Management](#data-management)
8. [User Interface Patterns](#user-interface-patterns)
9. [Navigation System](#navigation-system)
10. [Content Types](#content-types)
11. [Styling Approach](#styling-approach)
12. [Build and Deployment](#build-and-deployment)

---

## Executive Summary

The PURPL-Purdue.github.io website serves as the digital presence for the Purdue Undergraduate Rocket Propulsion Lab, a student-run aerospace engineering organization. The website showcases 8+ rocket propulsion projects, team member profiles, testing facilities, and sponsor information.

**Primary Purpose:**
- Portfolio and showcase for rocket propulsion projects
- Recruitment and information hub for prospective members
- Documentation of technical achievements and team history
- Sponsor recognition and partnership opportunities

**Target Audience:**
- Prospective team members (undergraduate students)
- Faculty advisors and academic partners
- Potential sponsors and industry partners
- General public interested in aerospace engineering

---

## Technology Stack

### Core Framework
- **React 18.2.0** - Component-based UI library
- **React Router DOM 6.23.1** - Client-side routing with hash-based routing for GitHub Pages compatibility

### Styling Libraries
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Bootstrap 5.3.6** - Component library (primarily for carousels)
- **React-Bootstrap 2.10.10** - React wrapper for Bootstrap components

### UI Components
- **React Icons 5.2.1** - Icon library for social media and UI elements

### Build Tools
- **React Scripts 5.0.1** - Create React App build tooling
- **ESLint** - Code quality and linting
- **gh-pages** - Automated GitHub Pages deployment

### Third-Party Integrations
- **Google Calendar API** - Event calendar embedding (API key stored in .env)
- **YouTube Embeds** - Video content integration

### Custom Assets
- **Fonts:** Chakra Petch (display/headings), Roboto Mono (body/monospace)
- **Color Palette:** Custom Purdue-themed colors (moon purple, stardust, old-gold, boilermaker-gold)

---

## Architecture Overview

### Application Type
Single-Page Application (SPA) with client-side routing using React Router. The application uses hash-based routing (`useHashRouter`) to ensure compatibility with GitHub Pages static hosting.

### Design Patterns
- **Component-based architecture** - Modular, reusable UI components
- **Data-driven rendering** - Content sourced from centralized JSON files
- **Responsive design** - Mobile-first approach with breakpoints (md: 768px, lg: 1024px)
- **Layout composition** - Wrapper components provide consistent page structure

### State Management
- **React component state** - Local state management using React hooks
- **No global state library** - Simple prop drilling for data flow
- **Static data** - Most content is pre-defined in JSON files

---

## Directory Structure

```
PURPL-Purdue.github.io/
│
├── public/                          # Static assets (served directly)
│   ├── images/                      # Project photos, team images, logos
│   │   ├── projects/               # Project-specific images
│   │   │   ├── rde/               # RDE project photos
│   │   │   ├── eprop/             # Electric Propulsion photos
│   │   │   ├── turbopump/         # Turbopump photos
│   │   │   ├── turbojet/          # Turbojet photos
│   │   │   ├── testbed/           # Testbed photos
│   │   │   ├── pulsejet/          # Pulsejet photos
│   │   │   └── wireframes/        # Technical drawings
│   │   ├── team/                  # Team member photos
│   │   ├── sponsors/              # Sponsor logos
│   │   └── landing/               # Homepage images
│   ├── fonts/                      # Custom font files
│   ├── favicon/                    # Favicon assets
│   ├── index.html                  # HTML entry point
│   ├── manifest.json               # PWA manifest
│   └── CNAME                       # Custom domain configuration
│
├── src/                            # React source code
│   ├── components/                 # Reusable UI components (51 files)
│   │   ├── banner/                # Banner components
│   │   ├── button/                # Button components
│   │   ├── navbar/                # Navigation components
│   │   ├── layout/                # Layout wrappers
│   │   ├── landing/               # Landing page components
│   │   ├── projects/              # Project-specific components
│   │   ├── team/                  # Team profile components
│   │   ├── sponsors/              # Sponsor display components
│   │   └── ContactForm.js         # Contact form
│   │
│   ├── pages/                     # Page-level route components
│   │   ├── Landing.js             # Homepage
│   │   ├── Team.js                # Team members page
│   │   ├── Contact.js             # Contact form page
│   │   ├── Sponsors.js            # Sponsors page
│   │   ├── Press.js               # Press/news articles page
│   │   ├── ErrorPage.js           # 404 error page
│   │   ├── projects/              # Project detail pages (8 files)
│   │   │   ├── RDE.js
│   │   │   ├── ElectricPropulsion.js
│   │   │   ├── Turbopump.js
│   │   │   ├── TestBed.js
│   │   │   ├── Turbojet.js
│   │   │   ├── Pulsejet.js
│   │   │   ├── TTP.js
│   │   │   └── AirBreathing.js
│   │   └── facilities/            # Facility pages
│   │       ├── Tachyon.js
│   │       └── BiggieK.js
│   │
│   ├── json/                      # Static data files
│   │   ├── routing.js             # Navigation structure
│   │   ├── projects.js            # Project data
│   │   ├── landing.js             # Homepage data
│   │   ├── gallery.js             # Photo references
│   │   ├── facilities.js          # Facility information
│   │   └── shared.js              # Shared constants
│   │
│   ├── App.js                     # Main app component
│   ├── index.js                   # React entry point
│   ├── App.css                    # App-level styles
│   └── index.css                  # Global styles
│
├── llm-context/                   # LLM context documentation
│   ├── codebase-overview.md      # General codebase information
│   └── accessibility-analysis.md  # Accessibility audit and recommendations
│
├── build/                         # Production build (generated)
├── node_modules/                  # Dependencies (generated)
├── package.json                   # NPM configuration
├── package-lock.json              # Dependency lock
├── tailwind.config.js             # Tailwind configuration
├── eslint.config.mjs              # ESLint configuration
└── .env                           # Environment variables
```

---

## Page Inventory

### Primary Pages

#### 1. Landing Page (`/`)
- **File:** `src/pages/Landing.js`
- **Purpose:** Homepage with organization overview
- **Content:**
  - Featured video (YouTube embed)
  - Quick statistics (members, projects, awards)
  - Event calendar (Google Calendar integration)
  - Featured message/announcement
  - Display grid of featured projects
- **Key Components:** FeaturedMessage, DisplayGrid, Calendar integration

#### 2. Team Page (`/team`)
- **File:** `src/pages/Team.js`
- **Purpose:** Team member profiles and photos
- **Content:**
  - Team member headshots
  - Photo galleries by project team
  - Team structure/organization
- **Key Components:** Team profile cards, photo carousels

#### 3. Contact Page (`/contact`)
- **File:** `src/pages/Contact.js`
- **Purpose:** Contact form for inquiries
- **Content:**
  - Contact form (name, email, message)
  - Contact information
  - Social media links
- **Key Components:** ContactForm

#### 4. Sponsors Page (`/sponsors`)
- **File:** `src/pages/Sponsors.js`
- **Purpose:** Recognition of sponsors and partners
- **Content:**
  - Sponsor logos organized by tier (Platinum, Gold, Silver)
  - Partnership opportunities
- **Key Components:** Sponsor display grid
- **Current Sponsors:**
  - Platinum: Protolabs, Marotta, National Instruments
  - Gold: Honeywell, PEPC
  - Silver: Polymaker, Ansys, PESC, BIDC, CFturbo, 3D Connexion, Purdue ME, Snyder & Lehnen, AEA, Proportion Air, SECO Seals, MSM, Notion, Interstate Advanced Materials

#### 5. Press Page (`/press`)
- **File:** `src/pages/Press.js`
- **Purpose:** News articles and media coverage about PURPL
- **Content:**
  - Page banner with title
  - Introductory text
  - List of news article links with title, source, and date
- **Key Components:** Article link cards with hover effects
- **Data:** Articles defined in `pressArticles` array within the component

### Project Pages (8 projects)

#### 1. RDE - Rotating Detonation Engine (`/projects/rde`)
- **File:** `src/pages/projects/RDE.js`
- **Content:**
  - Project overview and description
  - Technical specifications table
  - Project timeline (7 milestones from Jan 2025 - Aug 2026)
  - Team photos
  - CAD model carousel (3 images)
  - Current status highlights
- **Unique Components:** RDETimeline (horizontal scrolling timeline)

#### 2. Electric Propulsion (`/projects/electric-propulsion`)
- **File:** `src/pages/projects/ElectricPropulsion.js`
- **Content:**
  - Hall Effect Thruster overview
  - Team achievements (3rd place at IMECE 2025)
  - Testing photos from May 2025 hotfire (8 images)
  - Team photos
  - Featured hardware photo
- **Notable:** First undergraduate Hall Effect Thruster at Purdue

#### 3. Turbopump (`/projects/turbopump`)
- **File:** `src/pages/projects/Turbopump.js`
- **Content:**
  - 5,000 lbf turbopump-fed engine
  - Technical specifications (LOX-Kerosene, 50,000 RPM)
  - Design explanations (pump impeller, shaft assembly)
  - CAD model images (4 images)
  - Team photos
- **Notable:** First undergraduate turbopump-fed engine worldwide

#### 4. Testbed (`/projects/testbed`)
- **File:** `src/pages/projects/TestBed.js`
- **Content:**
  - Maelstrom 500 lbf test engine
  - Swirl injector technology explanation
  - Augmented spark igniter details
  - June 2025 testing campaign (25+ hot fires)
  - Photo gallery (13 images)
- **Purpose:** Platform for testing new subsystems

#### 5. Turbojet (`/projects/turbojet`)
- **File:** `src/pages/projects/Turbojet.js`
- **Content:**
  - 50 lbf turbojet design
  - Air breathing propulsion
  - Sustainable aviation fuels research
  - CAD models (4 images)
- **Notable:** Only undergraduate air breathing propulsion at Purdue

#### 6. TTP - Torch Training Program (`/projects/ttp`)
- **File:** `src/pages/projects/TTP.js`
- **Content:**
  - Year-long orientation program
  - Program structure (teams of 3-4, peer mentoring)
  - Learning objectives (CAD, Python, CEA, fluid mechanics)
  - Competition format
- **Purpose:** Onboarding and training new members

#### 7. Pulsejet (`/projects/pulsejet`)
- **File:** `src/pages/projects/Pulsejet.js`
- **Content:**
  - Rapid design/build/test approach
  - Valved and valveless engine variants
  - Collaboration with Purdue NDS (RC plane)
  - Wireframe image
- **Notable:** First external club collaboration

#### 8. Air Breathing Stand (`/projects/air-breathing`)
- **File:** `src/pages/projects/AirBreathing.js`
- **Content:**
  - 150 lbf rated test stand
  - Modular, portable design
  - Combined trust structure and fluid panel
- **Purpose:** Testing platform for air breathing engines

### Facility Pages (2 facilities)

#### 1. Tachyon (`/facilities/tachyon`)
- **File:** `src/pages/facilities/Tachyon.js`
- **Content:** Test facility information

#### 2. Biggie-K (`/facilities/biggie-k`)
- **File:** `src/pages/facilities/BiggieK.js`
- **Content:**
  - 100 lbf thrust rating test stand
  - GOX and hydrocarbon propellants
  - Torch ignition system
  - Dimensions and specifications
  - Technical wireframe

### Error Page
- **File:** `src/pages/ErrorPage.js`
- **Purpose:** 404 error handling

---

## Component Catalog

### Navigation Components (`src/components/navbar/`)

#### Header
- **Purpose:** Main navigation bar
- **Features:**
  - Logo/branding
  - Desktop menu with dropdowns
  - Mobile hamburger menu
  - Responsive breakpoints

#### Footer
- **Purpose:** Site footer
- **Features:**
  - Social media links (React Icons)
  - Contact information
  - Copyright notice

#### Router
- **Purpose:** Route configuration
- **Implementation:** React Router DOM with hash routing

#### Dropdown
- **Purpose:** Nested navigation menus
- **Used for:** Projects and Facilities submenus

### Layout Components (`src/components/layout/`)

#### PageWrapper
- **Purpose:** Consistent page structure
- **Provides:** Page-level styling and container

#### ContentWrapper
- **Purpose:** Content area container
- **Provides:** Max-width constraints, padding, responsive spacing

#### Divider
- **Purpose:** Section separation
- **Style:** Visual divider lines between content sections

### Banner Components (`src/components/banner/`)

#### GradientBanner
- **Purpose:** Header with gradient overlay
- **Usage:** Page headers with background gradients

#### ImageBanner (Banner)
- **Purpose:** Header with background image
- **Usage:** Project pages, landing page hero sections
- **Features:** Gradient overlays, text positioning

### Button Components (`src/components/button/`)

#### Button
- **Purpose:** Primary call-to-action buttons
- **Features:** Hover effects, stardust color theme

#### SmallButton
- **Purpose:** Secondary/compact buttons
- **Features:** Reduced size, consistent styling

### Landing Page Components (`src/components/landing/`)

#### DisplayGrid
- **Purpose:** Featured projects grid on homepage
- **Layout:** Responsive grid of project cards

#### FeaturedMessage
- **Purpose:** Announcements/important messages on homepage
- **Style:** Highlighted message box

### Project Components (`src/components/projects/`)

#### RDETimeline
- **Purpose:** Horizontal scrolling timeline for RDE project
- **Features:**
  - 7 timeline milestones
  - Horizontal scroll on mobile
  - Connected dots and line
  - Responsive text sizing
- **Known Issue:** Parent div height too short to contain all items (absolute positioning prevents proper height calculation)

#### SpecsTable
- **Purpose:** Display technical specifications
- **Usage:** Engine stats, facility specs
- **Format:** Key-value pairs in table format

### Team Components (`src/components/team/`)
- Profile cards
- Photo display components
- Team member information layouts

### Sponsor Components (`src/components/sponsors/`)
- Sponsor logo grids
- Tier-based displays

### Form Components

#### ContactForm (`src/components/ContactForm.js`)
- **Fields:** Name, Email, Message
- **Validation:** Client-side form validation
- **Submission:** Form handling logic

---

## Data Management

### Centralized Data Files (`src/json/`)

All static content is managed through JSON/JS files to prevent duplication and enable easy updates.

#### routing.js
```javascript
// Navigation menu structure (actual structure uses name/link/children)
export const navLinks = [
  { name: "home", link: "", children: [] },
  { name: "projects", link: "#", children: [...] },
  { name: "facilities", link: "#", children: [...] },
  { name: "sponsors", link: "sponsors", children: [] },
  { name: "team", link: "team", children: [] },
  { name: "contact", link: "contact", children: [] },
  { name: "press", link: "press", children: [] }
]
```

#### projects.js
**Exports:**
- `rdeData` - RDE project information
  - Featured photos (3 images)
  - Project description/blurb
  - Specifications table
  - Timeline data (7 milestones)
  - Team photos
  - Gallery images
  - Current highlight/status
- `epropData` - Electric Propulsion data
- `turbopumpData` - Turbopump data
- `testbedData` - Testbed data
- `turbojetData` - Turbojet data
- `ttpData` - Torch Training Program data
- `pulsejetData` - Pulsejet data
- `airbreathingData` - Air Breathing Stand data
- `biggiekData` - Biggie-K facility data

**Data Structure:**
```javascript
{
  title: "Project Name",
  subtitle: "Brief description",
  featured: { photos: [...], blurb: "..." },
  specs_table: { key: "value", ... },
  timeline: { title: "Timeline", data: [...] },
  photo_reel: { title: "...", photos: [...] },
  desc_1: "Description text",
  image_1: "/path/to/image",
  // ... additional fields
}
```

#### landing.js
- Quick statistics (member count, project count, awards)
- Featured message content
- Calendar configuration

#### gallery.js
```javascript
export const teamPhotos = {
  rde: {
    smiling_photo: "/images/team/rde/...",
    fun_photo: "/images/team/rde/...",
    serious_photo: "/images/team/rde/..."
  },
  eprop: { ... },
  turbopump: { ... }
  // ... other teams
}
```

#### facilities.js
- Facility information
- Specifications
- Images and descriptions

#### shared.js
- Contact information (email: purpl24@purdue.edu)
- Sponsor data objects with structure: `{ image, img_alt, link }` or `{ name, link }` for text-only sponsors
- All sponsor logos stored in `/public/images/sponsors/`
- **Adding new sponsors:** Add entry to `sponsors` object in shared.js, then add display element in Sponsors.js under appropriate tier

---

## User Interface Patterns

### Common Patterns

#### 1. Photo Carousels (Bootstrap Carousel)
**Usage:** Project galleries, team photos, CAD models
**Features:**
- Auto-rotation (2-second intervals)
- Touch/swipe support
- Indicators (dots)
- Previous/Next controls
- Light theme (`data-bs-theme="light"`)

**Example locations:**
- RDE page: 3-image featured carousel
- Electric Propulsion: Team photos, testing photos
- Turbopump: CAD model carousel

#### 2. Specifications Tables
**Usage:** Technical specs for engines and facilities
**Format:** Two-column table (label | value)
**Styling:** Tailwind CSS classes

**Example data:**
```javascript
specs_table: {
  "thrust": "5,000-lbf",
  "propellants": "kerosene and liquid oxygen",
  "cycle": "gas generator, open cycle",
  "shaft speed": "50,000 RPM",
  "cooling": "regenerative"
}
```

#### 3. Overlaid Text Boxes
**Usage:** Image captions, featured descriptions
**Pattern:** Absolute positioned boxes with semi-transparent backgrounds
**Example:** RDE page line 50 (moon/80 opacity background)

#### 4. Responsive Grid Layouts
**Pattern:** `grid grid-cols-1 md:grid-cols-2`
**Usage:** Two-column layouts on desktop, single column on mobile
**Common spacing:** `gap-4 lg:gap-8`

#### 5. Timeline Components
**Pattern:** Horizontal scrolling timeline with connected events
**Implementation:** RDETimeline component
**Features:**
- Overflow-x-scroll for mobile
- Connected dots and line
- Date + description format

---

## Navigation System

### Route Structure

```
/ (Landing)
├── /projects
│   ├── /rde
│   ├── /electric-propulsion
│   ├── /turbopump
│   ├── /testbed
│   ├── /turbojet
│   ├── /ttp
│   ├── /pulsejet
│   └── /air-breathing
├── /facilities
│   ├── /tachyon
│   └── /biggie-k
├── /team
├── /sponsors
├── /contact
└── /press
```

### Navigation Menu Structure

**Desktop:**
- Horizontal navigation bar
- Dropdown menus for Projects and Facilities
- Direct links for Sponsors, Team, Contact, Press

**Mobile:**
- Hamburger menu icon
- Collapsible menu drawer
- Vertical stacked links

### Routing Implementation
- **Library:** React Router DOM v6
- **Type:** Hash-based routing (`useHashRouter`)
- **Reason:** GitHub Pages compatibility (no server-side routing)

---

## Content Types

### 1. Text Content
- **Headers:** `font-display-bold` (Chakra Petch)
- **Body:** `font-display2` (Roboto Mono)
- **Sizes:** Responsive (sm, md, lg, xl, 3xl, 5xl, 7xl)
- **Colors:** White text on dark backgrounds (dusk, moon)

### 2. Images
**Categories:**
- CAD models and wireframes (PNG with transparency)
- Team photos (JPG)
- Hardware photos (JPG)
- Technical drawings (PNG)

**Formats:**
- Project photos: Various sizes, carousel-optimized
- Team photos: Standardized aspect ratios
- Logos: SVG or PNG with transparency

**Storage:** `/public/images/` directory

### 3. Videos
- **Platform:** YouTube embeds
- **Usage:** Featured video on landing page
- **Implementation:** iframe embed

### 4. Icons
- **Library:** React Icons 5.2.1
- **Usage:** Social media (footer), UI elements
- **Style:** Consistent sizing, color theming

### 5. Tables
- **Type:** Specifications tables
- **Rendering:** Custom SpecsTable component
- **Data:** Key-value pairs from JSON

### 6. Timelines
- **Type:** Horizontal scrolling timeline
- **Implementation:** RDETimeline component
- **Data:** Array of {title, description} objects

---

## Styling Approach

### Tailwind CSS Configuration

**Custom Theme Extensions:**

#### Colors (Purdue-themed palette)
```javascript
colors: {
  'dusk': '#1A1423',           // Deep purple background
  'moon': '#2D1B3D',           // Medium purple
  'stardust': '#9B72AA',       // Light purple/mauve
  'old-gold': '#CFB991',       // Purdue gold
  'boilermaker-gold': '#CEB888',
  'jet-grey': '#333333'
}
```

#### Fonts
```javascript
fontFamily: {
  'display-bold': ['Chakra Petch Bold'],
  'display-semibold': ['Chakra Petch SemiBold'],
  'display': ['Chakra Petch Medium'],
  'display2': ['Roboto Mono'],
  'display2-bold': ['Roboto Mono Bold']
}
```

#### Background Images
```javascript
backgroundImage: {
  'gradient-background': "url('/images/backgrounds/gradient.png')",
  'projects-background': "url('/images/backgrounds/projects.png')",
  // ... other backgrounds
}
```

#### Custom Utilities
- **Box shadows:** `'top'` - shadow directed upward
- **Responsive breakpoints:** `md` (768px), `lg` (1024px)

### Responsive Design Strategy

**Mobile-first approach:**
- Base styles apply to mobile
- `md:` prefix for tablet (≥768px)
- `lg:` prefix for desktop (≥1024px)

**Common Patterns:**
```javascript
className="text-sm md:text-lg lg:text-xl"  // Text sizing
className="w-full md:w-1/2 lg:w-1/3"      // Width
className="grid-cols-1 md:grid-cols-2"    // Grid columns
className="space-y-4 md:space-y-8"        // Vertical spacing
```

### Color Usage Patterns

**Backgrounds:**
- Primary: `bg-dusk` (dark purple)
- Secondary: `bg-moon` (medium purple)
- Accents: `bg-stardust` (light purple)
- Gradients: `bg-gradient-to-br from-old-gold to-stardust`

**Text:**
- Primary: `text-white`
- Accents: `text-stardust`, `text-old-gold`

**Transparency:**
- Overlays: `bg-moon/80` (80% opacity)
- Gradients: `bg-gradient-to-t from-dusk`

---

## Build and Deployment

### NPM Scripts

```json
{
  "start": "react-scripts start",        // Development server
  "build": "react-scripts build",        // Production build
  "test": "react-scripts test",          // Run tests
  "deploy": "gh-pages -d build",         // Deploy to GitHub Pages
  "lint": "eslint ."                     // Code linting
}
```

### Deployment Process

1. **Build:** `npm run build`
   - Creates optimized production bundle in `/build` directory
   - Minifies JS/CSS
   - Optimizes images
   - Generates source maps

2. **Deploy:** `npm run deploy`
   - Uses `gh-pages` package
   - Pushes `/build` directory to `gh-pages` branch
   - GitHub Pages serves from this branch

3. **Hosting:** GitHub Pages
   - URL: `https://purpl-purdue.github.io`
   - Custom domain support via CNAME file
   - HTTPS enabled

### Environment Variables

**File:** `.env`
```
REACT_APP_GOOGLE_API_KEY=<key>
```

**Usage:** Google Calendar API integration for event calendar

---

## Appendix A: File Counts

- **Total source files:** 51 components + 8 project pages + 2 facility pages + 6 primary pages + 6 data files = 73 files
- **Component files:** 51
- **Page files:** 16 (Landing, Team, Contact, Sponsors, Press, ErrorPage + 8 projects + 2 facilities)
- **Data files:** 6
- **Images:** 100+ images across all directories

---

## Appendix B: Dependencies

**Production Dependencies:**
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.23.1",
  "react-bootstrap": "^2.10.10",
  "bootstrap": "^5.3.6",
  "react-icons": "^5.2.1"
}
```

**Development Dependencies:**
```json
{
  "react-scripts": "5.0.1",
  "tailwindcss": "^3.4.3",
  "gh-pages": "^6.1.1",
  "eslint": "^8.x"
}
```

---

## Appendix C: Color Palette Reference

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| dusk | #1A1423 | Primary background |
| moon | #2D1B3D | Secondary background |
| stardust | #9B72AA | Accents, highlights |
| old-gold | #CFB991 | Purdue branding |
| boilermaker-gold | #CEB888 | Purdue branding |
| jet-grey | #333333 | Text, borders |

---

## Appendix D: Responsive Breakpoints

| Breakpoint | Min Width | Tailwind Prefix | Usage |
|------------|-----------|-----------------|-------|
| Mobile | 0px | (default) | Base styles |
| Tablet | 768px | `md:` | Medium screens |
| Desktop | 1024px | `lg:` | Large screens |

---

## Document Metadata

**Generated:** January 2026
**Version:** 1.0
**Purpose:** General codebase documentation
**Companion Document:** accessibility-analysis.md
