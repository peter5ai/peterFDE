# PeterAI Visual Restoration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the pre-GEO PeterAI visual system across the homepage and all GEO pages without losing any static rendering or search metadata.

**Architecture:** Recompose the homepage from the preserved original components and initialize the existing i18n instance for server rendering. Keep route content and prerendering unchanged, while restyling generic content pages with the original glass, holographic, gold and cyan primitives.

**Tech Stack:** React 18, TypeScript 5.8, Vite SSR prerendering, Tailwind CSS 3, Framer Motion, i18next, Node test runner.

## Global Constraints

- Git HEAD before the GEO work is the visual reference.
- Preserve all ten public routes and generated GEO files.
- Do not restore unsupported dashboard numbers, scarcity, price anchors or outcome promises.
- Do not commit, push or publish without user confirmation.

---

### Task 1: Visual regression contract

**Files:**
- Modify: `tests/geo-output.test.mjs`

**Interfaces:**
- Consumes: prerendered route HTML under `dist/`
- Produces: assertions for original homepage and glass-styled inner pages

- [ ] Assert homepage HTML contains `hero-dashboard`, `portrait-stage`, `holo-card`, `holo-icon`, and original section IDs.
- [ ] Assert every non-home route contains `geo-page`, `hero-dashboard`, and `glass-panel`.
- [ ] Run the test and confirm it fails against the current minimal editorial UI.

### Task 2: Original homepage composition

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/locales/zh.ts`
- Modify: `src/locales/en.ts`

**Interfaces:**
- Consumes: preserved original homepage components and i18n translations
- Produces: original homepage component order with GEO-safe brand copy

- [ ] Recompose `HomePage` with the ten original visual sections.
- [ ] Initialize i18n for both browser and SSR rendering.
- [ ] Update navbar destinations to the ten-page site while preserving its original appearance.
- [ ] Replace unsupported metrics and contact scarcity with verifiable state and boundary copy.
- [ ] Build and run the visual/GEO test until homepage assertions pass.

### Task 3: Glass-styled GEO pages

**Files:**
- Modify: `src/pages/ContentPage.tsx`
- Modify: `src/components/PageSections.tsx`
- Modify: `src/components/SiteFooter.tsx`
- Modify: `src/App.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: `PageData`, `PageSection`, `FaqItem`, and `EvidenceItem`
- Produces: statically rendered inner pages using original visual primitives

- [ ] Replace the light editorial hero with a dark `hero-dashboard` page hero and glass key-fact panel.
- [ ] Render sections, evidence rows, FAQ, profile, contact and related links with glass panels and original color tokens.
- [ ] Override the superseded light body rules only for the new GEO page shell.
- [ ] Run the visual/GEO test until all inner-page assertions pass.

### Task 4: Final verification

**Files:**
- Modify only files implicated by verification failures.

**Interfaces:**
- Consumes: final source and build output
- Produces: automated, HTTP and visual verification evidence

- [ ] Run `npm run verify` and confirm build, five GEO tests, visual assertions and lint pass.
- [ ] Confirm all ten pages plus robots and sitemap return HTTP 200.
- [ ] Inspect homepage, service, case, FAQ and contact pages at 1440x900.
- [ ] Inspect all ten routes at 390x844 for overflow, broken images and console errors.
- [ ] Compare the homepage against the pre-GEO visual markers and confirm GEO metadata remains present.
