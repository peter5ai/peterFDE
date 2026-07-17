import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = path.join(projectRoot, 'dist')
const serverEntry = pathToFileURL(path.join(projectRoot, 'dist-ssr', 'entry-server.js')).href
const { PUBLIC_ROUTES, render } = await import(serverEntry)
const template = await readFile(path.join(distRoot, 'index.html'), 'utf8')
const origin = 'https://www.peterai.cloud'

for (const route of PUBLIC_ROUTES) {
  const { html, head } = render(route)
  const output = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
  const directory = route === '/' ? distRoot : path.join(distRoot, route.slice(1))

  await mkdir(directory, { recursive: true })
  await writeFile(path.join(directory, 'index.html'), output, 'utf8')
}

const urls = PUBLIC_ROUTES
  .map((route) => `  <url><loc>${origin}${route}</loc></url>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
const robots = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`

await writeFile(path.join(distRoot, 'sitemap.xml'), sitemap, 'utf8')
await writeFile(path.join(distRoot, 'robots.txt'), robots, 'utf8')

console.log(`Prerendered ${PUBLIC_ROUTES.length} PeterAI pages.`)
