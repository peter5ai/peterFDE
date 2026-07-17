# PeterAI Favicon Design

## Scope

Replace the current green terminal-style favicon with the user's PeterAI brand mark. Do not change the navigation logo, page layout, or content. DNS changes for the apex domain remain out of scope.

## Source And Treatment

- Source: `C:\Users\Administrator\Desktop\透明logo.png`
- Use only the left PeterAI symbol (the P-shaped mark with the upward arrow and node motif).
- Remove the wordmark from the favicon crop.
- Preserve transparency and the original cyan-to-blue visual treatment.
- Center the symbol on a square canvas with a small safe margin so it remains legible at 16x16 pixels.

## Outputs

- `public/favicon.png`: square PNG used by browser tabs and structured data.
- `public/apple-touch-icon.png`: 180x180 PNG for Apple touch surfaces.
- Update `index.html` to reference the PNG favicon and Apple touch icon.
- Update the Organization schema logo URL in `src/lib/seo.ts` to the PNG favicon.
- Remove the old `public/favicon.svg` after all references are replaced.

## Verification

- Confirm both generated PNGs have transparent corners and square dimensions.
- Build and prerender all 10 pages.
- Confirm every output page references `/favicon.png` and no output references `/favicon.svg`.
- Run GEO tests and ESLint.
- Inspect the favicon at small size before deployment.

## Deployment

Deployment is a separate external action. Build verification does not publish the favicon. Publishing to Alibaba Cloud requires explicit confirmation after the local result is reviewed.
