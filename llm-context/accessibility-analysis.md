# PURPL-Purdue.github.io Accessibility Analysis

**Project:** Purdue Undergraduate Rocket Propulsion Lab (PURPL) Official Website
**Repository:** PURPL-Purdue.github.io
**Purpose:** Accessibility audit and improvement recommendations
**Generated:** January 2026

---

## Table of Contents

1. [Overview](#overview)
2. [Current Accessibility Features](#current-accessibility-features)
3. [Accessibility Gaps and Issues](#accessibility-gaps-and-issues)
4. [Component-Specific Accessibility Concerns](#component-specific-accessibility-concerns)
5. [WCAG Compliance Assessment](#wcag-compliance-assessment)
6. [Technical Debt Related to Accessibility](#technical-debt-related-to-accessibility)
7. [Recommended Next Steps](#recommended-next-steps)

---

## Overview

This document provides a comprehensive accessibility analysis of the PURPL-Purdue.github.io website. The analysis identifies current accessibility features, gaps, and provides recommendations for improving accessibility to meet WCAG 2.1 AA standards.

**Target Compliance Level:** WCAG 2.1 Level AA

**Scope of Analysis:**
- All 15+ pages (landing, projects, facilities, team, sponsors, contact)
- 51 reusable components
- Navigation system (desktop and mobile)
- Interactive elements (forms, carousels, buttons, dropdowns)
- Media content (images, videos, embedded calendars)
- Visual design (color contrast, typography, spacing)

---

## Current Accessibility Features

### 1. Image Alt Text ✓

**Implementation Status:** Good
**Coverage:**
- Project photos: Alt text provided in JSON data files
- Team photos: Alt text defined in gallery.js
- Technical wireframes: Descriptive alt text (e.g., "Turbopump technical drawing")
- Featured images: Alt text present in data structures

**Example from projects.js:**
```javascript
photos: [
  {
    src: "/images/projects/rde/rde featured.png",
    alt: "Isometric view of the combustor"
  },
  {
    src: teamPhotos.eprop.smiling_photo,
    alt: "Electric propulsion team members smiling"
  }
]
```

**Quality Assessment:**
- Descriptive alt text present for most images
- Follows convention of describing image content
- Team photos use context-appropriate descriptions

### 2. Semantic HTML Structure

**Implementation Status:** Partial
**Current Usage:**
- React component structure maintains basic HTML semantics
- Proper use of heading elements (`h1`, `h2`, `h3`) in many components
- Footer contains contact and social information

**Concerns:**
- Landmark regions (nav, main, aside, footer) not consistently used
- Some components use div-heavy structures without semantic meaning
- Article and section elements underutilized

### 3. Responsive Design ✓

**Implementation Status:** Good
**Features:**
- Mobile-first approach ensures usability across devices
- Touch-friendly carousels with swipe support
- Readable font sizes with responsive scaling
- Breakpoints at 768px (md) and 1024px (lg)

**Example responsive patterns:**
```javascript
className="text-sm md:text-lg lg:text-xl"
className="grid-cols-1 md:grid-cols-2"
className="w-full md:w-1/2 lg:w-1/3"
```

### 4. Color and Visual Design

**Current Palette:**
- White text (#FFFFFF) on dark purple backgrounds (#1A1423, #2D1B3D)
- Light purple accents (#9B72AA)
- Gold accents (#CFB991, #CEB888)

**Assessment:**
- High contrast between text and backgrounds
- Color contrast ratios should be verified against WCAG AA standards (4.5:1 for normal text, 3:1 for large text)

---

## Accessibility Gaps and Issues

### 1. Keyboard Navigation ⚠️ CRITICAL

**Current Status:** Unknown/Untested
**Priority:** High

**Concerns:**

#### a) Dropdown Menus
- **Location:** Header navigation (Projects, Facilities dropdowns)
- **Issue:** Hover-based dropdowns may not be keyboard accessible
- **Required:** Enter/Space to open, Arrow keys to navigate, Escape to close
- **Impact:** Users who cannot use a mouse cannot access project/facility pages

#### b) Carousel Controls
- **Location:** All project pages, team page
- **Component:** React-Bootstrap Carousel
- **Issue:** Keyboard navigation support unclear
- **Required:** Tab to controls, Enter/Space to activate, Arrow keys optional
- **Impact:** Users cannot browse image galleries without a mouse

#### c) Focus Indicators
- **Issue:** Custom Tailwind styling may override default focus indicators
- **Required:** Visible focus outline on all interactive elements
- **Impact:** Keyboard users cannot see where focus is located
- **Recommendation:** Add explicit focus styles with `:focus-visible`

#### d) Tab Order
- **Issue:** Tab order through interactive elements not explicitly managed
- **Concern:** Absolute positioning (overlaid text boxes, timeline) may disrupt logical tab order
- **Required:** Logical, predictable tab order that follows visual layout

#### e) Skip Navigation Link
- **Status:** Not present
- **Required:** "Skip to main content" link as first focusable element
- **Impact:** Keyboard users must tab through entire navigation on every page

**Recommendation:**
```jsx
// Add to Header component
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Add to PageWrapper
<main id="main-content">
  {children}
</main>
```

### 2. Screen Reader Support ⚠️ CRITICAL

**Current Status:** Limited
**Priority:** High

**Concerns:**

#### a) ARIA Labels and Roles
- **Status:** Not extensively used
- **Issue:** Custom components lack ARIA attributes
- **Examples:**
  - Dropdown menus: Need `aria-expanded`, `aria-haspopup`
  - Carousel: Need `aria-live`, `aria-label` for controls
  - Buttons: Need descriptive `aria-label` for icon-only buttons
  - Timeline: Need `role="list"` and `role="listitem"`

#### b) Timeline Component Structure
- **File:** `src/components/projects/RDETimeline.js`
- **Issue:** Complex structure with absolute positioning
- **Concern:** Screen readers may not understand timeline relationship
- **Recommendation:**
```jsx
<ol role="list" aria-label="RDE Project Timeline">
  {timelineData.map((item, idx) => (
    <li role="listitem" key={idx}>
      <time datetime={item.date}>{item.title}</time>
      <p>{item.description}</p>
    </li>
  ))}
</ol>
```

#### c) Carousel Announcements
- **Issue:** Image changes may not be announced to screen readers
- **Required:** `aria-live="polite"` region to announce slide changes
- **Required:** Current slide indicator (e.g., "Slide 2 of 5")

#### d) Dynamic Content Updates
- **Issue:** No ARIA live regions for content updates
- **Required:** Announce important changes (form errors, loading states)

#### e) Icon-Only Buttons
- **Location:** Social media links in footer, carousel controls
- **Issue:** Icon buttons without text labels
- **Example Problem:**
```jsx
// Current (inaccessible)
<button><FaArrowRight /></button>

// Fixed (accessible)
<button aria-label="Next slide">
  <FaArrowRight aria-hidden="true" />
</button>
```

### 3. Focus Management ⚠️ HIGH

**Current Status:** Not implemented
**Priority:** High

**Concerns:**

#### a) Focus Indicators Not Visible
- **Issue:** Custom styling may remove default browser focus outlines
- **Required:** Clearly visible focus indicator (2px minimum, 3:1 contrast ratio)
- **Recommendation:**
```css
*:focus-visible {
  outline: 2px solid #9B72AA; /* stardust color */
  outline-offset: 2px;
}
```

#### b) Focus Trap in Mobile Menu
- **Issue:** When mobile menu opens, focus may not be trapped inside
- **Required:** Focus should cycle within menu until closed
- **Required:** Focus should return to menu button when closed

#### c) Focus Restoration After Modals/Dropdowns
- **Issue:** When dropdown closes, focus may be lost
- **Required:** Focus returns to triggering element

#### d) Page Navigation Focus
- **Issue:** When navigating to new page, focus placement unclear
- **Recommendation:** Move focus to h1 or skip link on page load

### 4. Form Accessibility ⚠️ HIGH

**Component:** `src/components/ContactForm.js`
**Current Status:** Needs review
**Priority:** High

**Required Improvements:**

#### a) Label Associations
```jsx
// Required structure
<label htmlFor="name">Name *</label>
<input id="name" name="name" required aria-required="true" />
```

#### b) Required Field Indicators
- Visual indicators (asterisk) must be in label text, not just visual
- `aria-required="true"` on required inputs
- Legend explaining required field convention

#### c) Error Messages
- **Required:** Descriptive, actionable error messages
- **Required:** `aria-invalid="true"` on inputs with errors
- **Required:** `aria-describedby` linking input to error message
- **Required:** Error summary at top of form with focus management

**Example:**
```jsx
<div className="form-field">
  <label htmlFor="email">Email Address *</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
  {hasError && (
    <span id="email-error" role="alert">
      Please enter a valid email address
    </span>
  )}
</div>
```

#### d) Validation Feedback
- Client-side validation must be accessible to screen readers
- Use `role="alert"` for error announcements
- Submit button should not be disabled (provide validation feedback instead)

### 5. Interactive Elements ⚠️ MEDIUM

**Current Status:** Incomplete
**Priority:** Medium

**Concerns:**

#### a) Button Labels
- **Issue:** Button labels may not be sufficiently descriptive
- **Example Problem:** "Learn More" (learn more about what?)
- **Better:** "Learn more about the RDE project"

#### b) Icon-Only Buttons
- **Location:** Social media links, navigation icons, carousel controls
- **Issue:** Icons without text or aria-label
- **Required:** Every interactive icon needs accessible name

#### c) Hover-Only Interactions
- **Location:** Dropdown menus in navigation
- **Issue:** Hover-only reveals inaccessible to touch/keyboard users
- **Required:** Click/tap to open, not just hover

#### d) Touch Target Sizes
- **Issue:** Some buttons/links may be too small for touch
- **WCAG Requirement:** Minimum 44x44 pixels for touch targets
- **Check:** Mobile menu items, carousel controls, social icons

### 6. Content Structure ⚠️ MEDIUM

**Current Status:** Needs improvement
**Priority:** Medium

**Concerns:**

#### a) Heading Hierarchy
- **Issue:** Heading levels (h1, h2, h3) may skip levels
- **Required:** Logical heading hierarchy (no skipped levels)
- **Example Problem:** h1 → h3 (skipping h2)
- **Impact:** Screen reader users navigate by headings

**Audit Required:**
- Each page should have exactly one h1
- Headings should nest logically (h1 → h2 → h3)
- Visual styling should not determine heading level

#### b) Landmark Regions
- **Issue:** Landmark regions not consistently used
- **Required Landmarks:**
  - `<nav>` for navigation (header, footer nav)
  - `<main>` for primary content (one per page)
  - `<aside>` for complementary content
  - `<footer>` for footer content
  - `<header>` for page/section headers

**Example:**
```jsx
<PageWrapper>
  <header>
    <nav aria-label="Main navigation">...</nav>
  </header>
  <main id="main-content">
    <h1>Page Title</h1>
    {children}
  </main>
  <footer>
    <nav aria-label="Social media links">...</nav>
  </footer>
</PageWrapper>
```

#### c) Skip Navigation Link
- **Status:** Not present
- **Required:** First interactive element on page
- **Purpose:** Allow keyboard users to skip repetitive navigation

#### d) Page Titles
- **Issue:** Page titles for routing not specified
- **Required:** Unique, descriptive title for each page
- **Format:** "Page Name - PURPL Purdue"
- **Implementation:** React Helmet or document.title

### 7. Media Accessibility ⚠️ MEDIUM

**Current Status:** Incomplete
**Priority:** Medium

**Concerns:**

#### a) Video Accessibility
- **Location:** Landing page (YouTube embed)
- **Required:** Captions/subtitles for all video content
- **Required:** Transcript available
- **Note:** YouTube provides caption capability - must verify enabled
- **Required:** Descriptive title for iframe embed
- **Required:** `title` attribute on iframe

**Example:**
```jsx
<iframe
  title="PURPL Introduction Video"
  src="..."
  aria-label="Introduction to PURPL lab and projects"
/>
```

#### b) Complex Images (CAD Models, Wireframes)
- **Issue:** Alt text may not fully convey technical complexity
- **Recommendation:** Provide extended descriptions for complex diagrams
- **Methods:**
  - `aria-describedby` linking to detailed description
  - Longdesc alternative
  - Adjacent text description

**Example:**
```jsx
<img
  src="/images/projects/turbopump/wireframe.png"
  alt="Turbopump technical drawing"
  aria-describedby="turbopump-description"
/>
<div id="turbopump-description">
  Detailed technical drawing showing the turbopump assembly
  with labeled components including pump impeller, shaft,
  turbine section, and housing...
</div>
```

#### c) Decorative vs. Informative Images
- **Issue:** Not clearly distinguished
- **Required:** Decorative images should have empty alt (`alt=""`)
- **Required:** Informative images need descriptive alt text

#### d) Image Carousels
- **Issue:** Carousel structure may not be accessible
- **Required:** Keyboard navigation for controls
- **Required:** Screen reader announcements of slide changes
- **Required:** Pause button for auto-rotation

### 8. Motion and Animation ⚠️ MEDIUM

**Current Status:** Not implemented
**Priority:** Medium

**Concerns:**

#### a) Carousel Auto-Rotation
- **Location:** All project pages (2-second intervals)
- **Issue:** Auto-advancing content causes problems for users who need more time
- **WCAG Violation:** Moving, blinking, or scrolling content that lasts >5 seconds
- **Required:** Pause/play button for auto-rotation
- **Required:** Pause on hover/focus

#### b) prefers-reduced-motion Support
- **Status:** Not implemented
- **Required:** Respect user's motion preferences
- **Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**React Implementation:**
```jsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<Carousel interval={prefersReducedMotion ? null : 2000} />
```

#### c) Gradient Animations
- **Issue:** Background gradients and transitions may be animated
- **Required:** Disable for users with motion sensitivity

#### d) Transition Effects
- **Issue:** Page transitions and hover effects
- **Required:** Reduce or remove for users who prefer reduced motion

### 9. Color Dependency ⚠️ LOW

**Current Status:** Generally good
**Priority:** Low

**Concerns:**

#### a) Information Conveyed by Color Alone
- **Issue:** Timeline dots and connections rely on color to show progression
- **Required:** Use additional visual cues (icons, text, patterns)
- **Example:** Add checkmark icon to completed timeline items

#### b) Status Indicators
- **Issue:** If status is shown by color only (green=good, red=error)
- **Required:** Add text labels or icons in addition to color

#### c) Link Identification
- **Issue:** Links may only be distinguished by color
- **Required:** Underline links or use additional visual indicator

**Recommendation:**
```css
a {
  text-decoration: underline;
}
a:hover {
  text-decoration: none;
}
```

### 10. Text Accessibility ⚠️ MEDIUM

**Current Status:** Issues identified
**Priority:** Medium

**Concerns:**

#### a) Very Small Max-Widths on Timeline
- **Location:** `src/components/projects/RDETimeline.js:23`
- **Issue:** `max-w-[75px] md:max-w-[110px] lg:max-w-[120px]`
- **Problem:** Extremely narrow text causes excessive wrapping
- **Impact:** Difficult to read, may be cut off
- **Recommendation:** Increase to minimum 150-200px

#### b) Fixed Heights May Cut Off Text
- **Location:** RDETimeline line 23: `md:h-[68px] lg:h-[92px]`
- **Issue:** Fixed heights can truncate text when user zooms or increases font size
- **Required:** Use min-height instead, or remove height constraints
- **WCAG Requirement:** Text must be resizable up to 200% without loss of content

#### c) Text Resizing Support
- **Issue:** Fixed pixel sizes may not resize properly
- **Test Required:** Zoom to 200% and verify readability
- **Required:** No loss of content or functionality at 200% zoom

#### d) Line Height and Letter Spacing
- **Status:** Should be verified
- **WCAG Requirement:**
  - Line height at least 1.5x font size
  - Paragraph spacing at least 2x font size
  - Letter spacing at least 0.12x font size
  - Word spacing at least 0.16x font size

---

## Component-Specific Accessibility Concerns

### Header / Navigation

**File:** `src/components/navbar/Header.js`

**Issues:**
1. Dropdown menus likely not keyboard accessible
2. Missing ARIA attributes (`aria-expanded`, `aria-haspopup`)
3. Mobile menu may not trap focus properly
4. No skip navigation link

**Required Improvements:**
```jsx
<nav aria-label="Main navigation">
  <button
    aria-expanded={isOpen}
    aria-haspopup="true"
    aria-controls="projects-menu"
  >
    Projects
  </button>
  <ul id="projects-menu" role="menu">
    <li role="menuitem">...</li>
  </ul>
</nav>
```

### RDETimeline Component

**File:** `src/components/projects/RDETimeline.js`

**Issues:**
1. Height containment problem (parent div too short)
2. Absolute positioning disrupts screen reader flow
3. No semantic list structure
4. Text too narrow (75-120px max-width)
5. Fixed heights cut off text

**Required Improvements:**
```jsx
<div className="timeline" role="region" aria-label="RDE Project Timeline">
  <ol className="timeline-list">
    {timelineData.map((item, idx) => (
      <li key={idx} className="timeline-item">
        <time datetime={item.date}>{item.title}</time>
        <p>{item.description}</p>
      </li>
    ))}
  </ol>
</div>
```

### Carousel Components

**Used In:** All project pages, team page

**Issues:**
1. Auto-rotation without pause control (2-second intervals)
2. Keyboard navigation unclear
3. Screen reader announcements missing
4. No indication of current slide number

**Required Improvements:**
```jsx
<Carousel
  interval={prefersReducedMotion ? null : 5000} // Increased from 2s
  pause="hover"
  keyboard={true}
  aria-label="Project gallery"
  aria-live="polite"
>
  <Carousel.Item aria-label={`Slide ${index + 1} of ${total}`}>
    <img src={...} alt={...} />
  </Carousel.Item>
</Carousel>
```

### ContactForm Component

**File:** `src/components/ContactForm.js`

**Issues:**
1. Label associations unclear
2. Error message accessibility not implemented
3. Required field indicators may not be accessible
4. Validation feedback not announced to screen readers

**Required Improvements:**
- Explicit label-input associations
- `aria-required`, `aria-invalid`, `aria-describedby`
- Error summary with focus management
- `role="alert"` for validation messages

### Button Components

**Files:** `src/components/button/Button.js`, `SmallButton.js`

**Issues:**
1. Icon-only buttons may lack labels
2. Focus indicators may not be visible
3. Button purpose may not be clear from label

**Required Improvements:**
```jsx
<Button aria-label="Learn more about RDE project">
  Learn More
</Button>

<IconButton aria-label="Close menu">
  <FaTimes aria-hidden="true" />
</IconButton>
```

---

## WCAG Compliance Assessment

### WCAG 2.1 Level A (Minimum)

| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.1.1 Non-text Content | ⚠️ Partial | Alt text present but needs audit |
| 1.3.1 Info and Relationships | ❌ Fail | Missing ARIA, semantic structure issues |
| 1.3.2 Meaningful Sequence | ⚠️ Unknown | Tab order needs testing |
| 1.3.3 Sensory Characteristics | ✅ Pass | Instructions don't rely solely on sensory characteristics |
| 2.1.1 Keyboard | ❌ Fail | Dropdown menus, carousels likely not keyboard accessible |
| 2.1.2 No Keyboard Trap | ⚠️ Unknown | Mobile menu needs testing |
| 2.2.1 Timing Adjustable | ❌ Fail | Carousel auto-rotation without pause |
| 2.2.2 Pause, Stop, Hide | ❌ Fail | No pause control for auto-rotating carousels |
| 2.4.1 Bypass Blocks | ❌ Fail | No skip navigation link |
| 2.4.2 Page Titled | ⚠️ Unknown | Need to verify page titles |
| 2.4.3 Focus Order | ⚠️ Unknown | Needs testing |
| 2.4.4 Link Purpose | ⚠️ Partial | Some links may not be clear in context |
| 3.2.1 On Focus | ✅ Pass | No unexpected context changes on focus |
| 3.2.2 On Input | ✅ Pass | No unexpected context changes on input |
| 3.3.1 Error Identification | ⚠️ Unknown | Form needs review |
| 3.3.2 Labels or Instructions | ⚠️ Unknown | Form needs review |
| 4.1.1 Parsing | ✅ Pass | React generates valid HTML |
| 4.1.2 Name, Role, Value | ❌ Fail | Missing ARIA attributes on custom components |

### WCAG 2.1 Level AA (Target)

| Criterion | Status | Notes |
|-----------|--------|-------|
| 1.4.3 Contrast (Minimum) | ⚠️ Unknown | Needs verification with contrast checker |
| 1.4.5 Images of Text | ✅ Pass | Text is actual text, not images |
| 2.4.5 Multiple Ways | ⚠️ Partial | Navigation menu but no search/sitemap |
| 2.4.6 Headings and Labels | ⚠️ Unknown | Heading hierarchy needs audit |
| 2.4.7 Focus Visible | ❌ Fail | Focus indicators not clearly visible |
| 3.1.2 Language of Parts | ✅ Pass | No language changes |
| 3.2.3 Consistent Navigation | ✅ Pass | Navigation consistent across pages |
| 3.2.4 Consistent Identification | ✅ Pass | Components used consistently |
| 3.3.3 Error Suggestion | ⚠️ Unknown | Form needs review |
| 3.3.4 Error Prevention | ⚠️ Unknown | Form needs review |

### Summary
- **Level A Compliance:** ❌ Currently failing multiple Level A criteria
- **Level AA Compliance:** ❌ Cannot meet AA without meeting A
- **Estimated Work:** Significant improvements needed for AA compliance

---

## Technical Debt Related to Accessibility

### 1. RDETimeline Height Issue

**File:** `src/components/projects/RDETimeline.js`
**Priority:** High (affects accessibility and usability)

**Problem:**
- Parent div too short to contain all timeline items
- Absolute positioning prevents proper height calculation
- Very narrow max-widths (75px-120px) cause excessive text wrapping
- Fixed heights may cut off content when text zooms

**Impact on Accessibility:**
- Text may be cut off when zoomed to 200%
- Screen readers may miss content
- Keyboard navigation disrupted by absolute positioning

**Recommended Fix:**
1. Remove fixed heights, use min-height or auto
2. Increase max-widths to 150-200px minimum
3. Add explicit padding-bottom to account for absolute positioning
4. Restructure with semantic HTML (ol/li for timeline)

### 2. Bootstrap Carousel Accessibility

**Location:** Multiple pages (all projects, team page)
**Priority:** High

**Problem:**
- 2-second auto-rotation is too fast (WCAG requires pause for >5 seconds)
- No pause control
- Keyboard navigation unclear
- Screen reader support unclear

**Impact on Accessibility:**
- Users who read slowly cannot finish reading before slide changes
- Keyboard users cannot control carousel
- Screen reader users don't know when slides change

**Recommended Fix:**
1. Increase interval to 5000ms or remove auto-rotation
2. Add visible pause/play button
3. Implement `pause="hover"` and `keyboard={true}`
4. Add aria-live announcements
5. Respect `prefers-reduced-motion`

### 3. Dropdown Menu Hover-Only Interaction

**Location:** Header navigation
**Priority:** High

**Problem:**
- Dropdowns open on hover, not click
- Not keyboard accessible
- Not touch-friendly

**Impact on Accessibility:**
- Keyboard users cannot access dropdown items
- Touch device users have difficulty
- Screen reader users miss content

**Recommended Fix:**
1. Change to click/tap to open
2. Implement keyboard navigation (Enter/Space, Arrow keys, Escape)
3. Add ARIA attributes
4. Trap focus within open dropdown

### 4. Missing Form Accessibility

**Location:** ContactForm component
**Priority:** High

**Problem:**
- Label associations unclear
- No error handling for screen readers
- Required fields not properly indicated
- Validation not announced

**Impact on Accessibility:**
- Screen reader users don't understand form structure
- Errors not communicated accessibly
- Required fields unclear

**Recommended Fix:**
- Explicit htmlFor/id associations
- Add aria-required, aria-invalid, aria-describedby
- Implement error summary with focus management
- Add role="alert" for live error announcements

---

## Recommended Next Steps

### Phase 1: Critical Issues (Immediate)

**Priority: Must Fix for Basic Accessibility**

1. **Add Skip Navigation Link**
   - First focusable element on every page
   - Links to main content area

2. **Fix Keyboard Navigation**
   - Make dropdown menus keyboard accessible
   - Ensure carousel controls work with keyboard
   - Test and fix tab order throughout site

3. **Add Focus Indicators**
   - Visible focus outline on all interactive elements
   - 2px minimum, 3:1 contrast ratio
   - Use :focus-visible to avoid mouse focus rings

4. **Fix Carousel Auto-Rotation**
   - Add pause/play button
   - Increase interval to 5+ seconds or disable
   - Implement pause on hover/focus

5. **Add ARIA to Interactive Components**
   - Dropdown menus: aria-expanded, aria-haspopup
   - Buttons: aria-label for icon-only buttons
   - Carousels: aria-live, slide announcements
   - Forms: aria-required, aria-invalid, aria-describedby

6. **Fix ContactForm Accessibility**
   - Explicit label associations
   - Accessible error messages
   - Required field indicators

### Phase 2: Important Improvements (Short-term)

**Priority: Needed for AA Compliance**

7. **Audit and Fix Heading Hierarchy**
   - One h1 per page
   - No skipped levels
   - Logical nesting

8. **Add Landmark Regions**
   - nav, main, aside, footer
   - aria-label for multiple landmarks of same type

9. **Fix RDETimeline Component**
   - Increase text max-widths
   - Remove fixed heights
   - Add semantic list structure
   - Improve screen reader support

10. **Add Page Titles**
    - Unique title for each route
    - Format: "Page Name - PURPL Purdue"

11. **Verify Color Contrast**
    - Test all text/background combinations
    - Ensure 4.5:1 for normal text, 3:1 for large text
    - Fix any failing combinations

12. **Implement prefers-reduced-motion**
    - Detect user preference
    - Disable animations for users who prefer reduced motion
    - Apply to carousels, transitions, animations

### Phase 3: Enhanced Accessibility (Medium-term)

**Priority: Best Practices and Polish**

13. **Improve Image Accessibility**
    - Audit all alt text for quality
    - Add extended descriptions for complex images
    - Mark decorative images with empty alt

14. **Add Video Accessibility**
    - Verify captions enabled on YouTube embeds
    - Consider providing transcripts
    - Add descriptive title to iframe

15. **Improve Link Descriptiveness**
    - Audit "Learn More" links
    - Make link purpose clear from text
    - Consider aria-label for context

16. **Add Touch Target Sizing**
    - Ensure all interactive elements 44x44px minimum
    - Increase spacing on mobile menu items

17. **Implement Focus Trapping**
    - Mobile menu traps focus when open
    - Dropdowns manage focus properly
    - Focus returns to trigger on close

### Phase 4: Testing and Validation (Ongoing)

**Priority: Verification and Maintenance**

18. **Automated Testing**
    - Integrate axe-core or similar tool
    - Run Lighthouse accessibility audits
    - Set up CI/CD accessibility checks

19. **Manual Keyboard Testing**
    - Navigate entire site with keyboard only
    - Verify all interactive elements accessible
    - Check tab order is logical

20. **Screen Reader Testing**
    - Test with NVDA (Windows, free)
    - Test with JAWS (Windows)
    - Test with VoiceOver (macOS, iOS)
    - Test with TalkBack (Android)

21. **User Testing**
    - Recruit users with disabilities
    - Conduct usability testing sessions
    - Gather feedback and iterate

### Testing Tools and Resources

**Automated Testing:**
- axe DevTools (browser extension)
- Lighthouse (Chrome DevTools)
- WAVE (WebAIM)
- Pa11y (command-line tool)

**Manual Testing:**
- Keyboard navigation (no mouse)
- Screen readers (NVDA, JAWS, VoiceOver)
- Color contrast analyzers
- Browser zoom (test at 200%)

**Resources:**
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM resources: https://webaim.org/
- A11y Project checklist: https://www.a11yproject.com/checklist/

---

## Document Metadata

**Generated:** January 2026
**Version:** 1.0
**Purpose:** Accessibility audit for WCAG 2.1 AA compliance
**Companion Document:** codebase-overview.md
**Next Action:** Feed into LLM with WCAG guidelines to develop implementation plan
