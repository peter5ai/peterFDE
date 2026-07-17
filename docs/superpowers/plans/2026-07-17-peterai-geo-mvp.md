# PeterAI GEO MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build ten statically rendered, independently indexable PeterAI pages with verifiable brand content and complete GEO metadata.

**Architecture:** Keep the Vite React application, centralize route content in TypeScript, and render the same page tree in the browser and at build time. A Node prerender step consumes the Vite SSR bundle to produce route HTML plus robots and sitemap files.

**Tech Stack:** React 18, TypeScript 5.8, Vite 6, Tailwind CSS 3, React DOM server, Node test runner.

## Global Constraints

- Canonical origin is exactly `https://www.peterai.cloud`.
- Public routes use trailing slashes.
- Chinese is the canonical MVP language and every HTML page uses `lang="zh-CN"`.
- Do not publish invented metrics, customer endorsements, scarcity, prices, or outcome promises.
- Do not commit, push, deploy, or publish without user confirmation.

---

### Task 1: Static-output acceptance tests

**Files:**
- Create: `tests/geo-output.test.mjs`

**Interfaces:**
- Consumes: files under `dist/` after `npm run build`
- Produces: executable acceptance checks for route, metadata, structured data and content boundaries

- [ ] Write tests asserting all ten route HTML files, unique metadata, static company content, JSON-LD, sitemap, robots and banned-copy absence.
- [ ] Run `npm run build` and `node --test tests/geo-output.test.mjs`.
- [ ] Confirm the current single-page build fails because nested route files and GEO files are missing.

### Task 2: Shared content and route model

**Files:**
- Create: `src/content/site.ts`
- Create: `src/lib/routes.ts`

**Interfaces:**
- Produces: `SITE_ORIGIN`, `PUBLIC_ROUTES`, `getPageByPath(pathname)`, route metadata, sections, FAQs and structured-data inputs

- [ ] Define the ten canonical routes and normalize trailing slashes.
- [ ] Encode the approved brand definition, services, industry pages, FAQs and evidence boundaries as typed content.
- [ ] Keep all public claims inside the source-backed boundaries defined in the design.

### Task 3: Page system and semantic UI

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`
- Modify: `src/index.css`
- Create: `src/components/SiteHeader.tsx`
- Create: `src/components/SiteFooter.tsx`
- Create: `src/components/SeoHead.tsx`
- Create: `src/components/PageSections.tsx`
- Create: `src/pages/HomePage.tsx`
- Create: `src/pages/ContentPage.tsx`
- Create: `src/pages/NotFoundPage.tsx`

**Interfaces:**
- Consumes: `getPageByPath(pathname)` and typed site content
- Produces: `App({ pathname })` that renders complete semantic page content on server and client

- [ ] Build a shared header/footer with desktop and mobile navigation.
- [ ] Build the homepage around brand definition, service entry points, method, evidence and contact CTA.
- [ ] Build reusable content-page sections for services, industries, cases, FAQ, about and contact.
- [ ] Render metadata and JSON-LD in the browser for client navigation consistency.
- [ ] Replace browser-only root rendering with hydration when prerendered markup exists.

### Task 4: Build-time prerendering

**Files:**
- Create: `src/entry-server.tsx`
- Create: `scripts/prerender.mjs`
- Modify: `package.json`
- Modify: `vite.config.ts`
- Modify: `index.html`

**Interfaces:**
- `render(pathname): { html: string, head: string }`
- `PUBLIC_ROUTES: readonly string[]`
- Produces: route `index.html` files, `dist/sitemap.xml`, and `dist/robots.txt`

- [ ] Add SSR entry rendering the same `App` tree and serialized metadata.
- [ ] Add a prerender script that injects server markup and head tags into the client template for every route.
- [ ] Generate sitemap and robots from `PUBLIC_ROUTES` so route declarations have one source of truth.
- [ ] Make `npm run build` execute client build, SSR build and prerender in sequence.

### Task 5: Automated and visual verification

**Files:**
- Modify only files implicated by verification failures.

**Interfaces:**
- Consumes: final source and `dist/`
- Produces: clean build, lint and acceptance-test evidence plus desktop/mobile screenshots

- [ ] Run `npm run build` and confirm both Vite builds and prerender complete.
- [ ] Run `node --test tests/geo-output.test.mjs` and confirm all GEO assertions pass.
- [ ] Run `npm run lint` and resolve in-scope errors.
- [ ] Start `npm run preview -- --host 127.0.0.1` on an available port.
- [ ] Inspect `/`, `/ai-consulting/`, `/case-studies/`, `/faq/` and `/contact/` at 1440x900 and 390x844.
- [ ] Confirm no console errors, missing assets, navigation failures, horizontal overflow, overlapping text or blank prerendered content.
