# PeterAI Favicon Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current terminal-style favicon with a transparent, small-size PeterAI symbol derived from the user-provided logo.

**Architecture:** Use the supplied transparent wordmark as the visual reference, extract only the left PeterAI symbol into a square transparent master, then produce browser and Apple PNG assets. Keep favicon references in the HTML shell and the Organization schema aligned so prerendered pages expose one canonical brand image.

**Tech Stack:** PNG assets, Vite prerendering, TypeScript, Node test runner, ESLint.

## Global Constraints

- Use only the left P-shaped symbol with the upward arrow and node motif.
- Preserve transparency and the original cyan-to-blue treatment.
- Do not change the navigation logo, page layout, content, or DNS.
- Remove all references to `/favicon.svg` before deleting the old asset.
- Deployment remains a separate action requiring explicit confirmation.

---

### Task 1: Add failing brand-asset coverage

**Files:**
- Modify: `tests/geo-output.test.mjs`

**Interfaces:**
- Consumes: prerendered files under `dist/`.
- Produces: a regression test requiring `/favicon.png`, `/apple-touch-icon.png`, and no `/favicon.svg` reference.

- [ ] **Step 1: Add the failing test**

Append this test to `tests/geo-output.test.mjs`:

```js
test('prerendered pages expose the PeterAI PNG favicon assets', async () => {
  const favicon = await readFile(path.join(distRoot, 'favicon.png'))
  const appleTouchIcon = await readFile(path.join(distRoot, 'apple-touch-icon.png'))

  assert.ok(favicon.length > 1_000)
  assert.ok(appleTouchIcon.length > 1_000)

  for (const route of routes) {
    const html = await readRoute(route)
    assert.match(html, /<link rel="icon" type="image\/png" href="\/favicon\.png" \/>/)
    assert.match(html, /<link rel="apple-touch-icon" href="\/apple-touch-icon\.png" \/>/)
    assert.doesNotMatch(html, /favicon\.svg/)
  }
})
```

- [ ] **Step 2: Run the build and test to prove the old favicon fails**

Run:

```powershell
npm run build
npm run test:geo
```

Expected: build succeeds, then the new test fails because `dist/favicon.png` does not exist.

### Task 2: Generate and wire the PeterAI favicon

**Files:**
- Source: `C:\Users\Administrator\Desktop\透明logo.png`
- Create: `public/favicon.png`
- Create: `public/apple-touch-icon.png`
- Modify: `index.html`
- Modify: `src/lib/seo.ts`
- Delete: `public/favicon.svg`

**Interfaces:**
- Consumes: the user-provided transparent PeterAI wordmark.
- Produces: a square transparent favicon and Organization schema logo at `https://www.peterai.cloud/favicon.png`.

- [ ] **Step 1: Generate the square transparent master**

Use the image editing tool with the source image and this exact instruction:

```text
Extract only the left PeterAI symbol: the P-shaped cyan-to-blue mark with the upward arrow and the three-node motif. Remove the peterAI wordmark completely. Preserve the original colors, highlights, and shape. Center the symbol on a transparent square canvas with approximately 8 percent clear padding on every side. Do not add text, a background, border, shadow outside the existing mark, or new details. Optimize the silhouette for recognition at 16x16 pixels.
```

Save the approved square result as `public/favicon.png`. Produce `public/apple-touch-icon.png` from the same master at 180x180 pixels without changing composition.

- [ ] **Step 2: Update the HTML favicon links**

Replace the current favicon line in `index.html` with:

```html
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

- [ ] **Step 3: Update the Organization schema logo**

Change the `logo` value in `src/lib/seo.ts` to:

```ts
    logo: `${SITE_ORIGIN}/favicon.png`,
```

- [ ] **Step 4: Remove the superseded SVG asset**

Delete `public/favicon.svg` only after `rg -n "favicon\.svg" index.html src tests public` returns no references outside the file being removed.

- [ ] **Step 5: Build and run the focused test**

Run:

```powershell
npm run build
npm run test:geo
```

Expected: 8 tests pass, including the new favicon regression test.

### Task 3: Verify the complete local release

**Files:**
- Verify: `dist/favicon.png`
- Verify: `dist/apple-touch-icon.png`
- Verify: all prerendered HTML under `dist/`

**Interfaces:**
- Consumes: Task 2 outputs.
- Produces: a release that is ready for a separate deployment confirmation.

- [ ] **Step 1: Verify dimensions, transparency, and small-size appearance**

Inspect both output files and confirm:

```text
favicon.png: square PNG, transparent corners, centered symbol, readable at 32x32
apple-touch-icon.png: 180x180 PNG, transparent corners, same composition
```

- [ ] **Step 2: Run the complete verification command**

Run:

```powershell
npm run verify
```

Expected: build/prerender succeeds, 8 GEO tests pass, and ESLint exits with code 0.

- [ ] **Step 3: Review the exact Git diff**

Run:

```powershell
git status --short
git diff -- index.html src/lib/seo.ts tests/geo-output.test.mjs public/favicon.svg
```

Expected: only the favicon assets, favicon references, schema logo, regression test, and this plan are related to the change; the existing deployment ZIP remains untracked and is not staged.

- [ ] **Step 4: Commit only after the user authorizes the implementation commit**

```powershell
git add -- index.html src/lib/seo.ts tests/geo-output.test.mjs public/favicon.png public/apple-touch-icon.png public/favicon.svg docs/superpowers/plans/2026-07-17-peterai-favicon.md
git commit -m "Replace favicon with PeterAI logo"
```

- [ ] **Step 5: Request deployment confirmation**

Report the local preview and verification result. Do not upload or replace Alibaba Cloud files until the user explicitly confirms this deployment.
