import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const projectRoot = path.resolve(import.meta.dirname, '..')
const distRoot = path.join(projectRoot, 'dist')
const origin = 'https://www.peterai.cloud'
const routes = [
  '/',
  '/ai-consulting/',
  '/ai-agent-implementation/',
  '/enterprise-knowledge-base/',
  '/case-studies/',
  '/faq/',
  '/about/',
  '/contact/',
  '/industries/zhongshan-lighting-export/',
  '/industries/industrial-services/',
]

const routeFile = (route) => route === '/'
  ? path.join(distRoot, 'index.html')
  : path.join(distRoot, route.slice(1), 'index.html')

const readRoute = (route) => readFile(routeFile(route), 'utf8')

test('build emits a static HTML file for every public route', async () => {
  for (const route of routes) {
    const html = await readRoute(route)
    assert.match(html, /<html lang="zh-CN">/)
    assert.match(html, /<main[\s>]/)
    assert.match(html, /<h1[\s>]/)
  }
})

test('homepage preserves the pre-GEO dashboard visual structure', async () => {
  const html = await readRoute('/')

  for (const visualMarker of ['hero-dashboard', 'portrait-stage', 'holo-card', 'holo-icon']) {
    assert.match(html, new RegExp(visualMarker), `homepage is missing ${visualMarker}`)
  }

  for (const sectionId of ['hero', 'about', 'fit-check', 'delivery', 'cases', 'logic', 'cta']) {
    assert.match(html, new RegExp(`id="${sectionId}"`), `homepage is missing #${sectionId}`)
  }
})

test('every inner page uses the original glass visual system', async () => {
  for (const route of routes.slice(1)) {
    const html = await readRoute(route)
    assert.match(html, /geo-page/, `${route} is missing the GEO page shell`)
    assert.match(html, /hero-dashboard/, `${route} is missing the dashboard hero`)
    assert.match(html, /glass-panel/, `${route} is missing glass panels`)
  }
})

test('every page has unique complete metadata and structured data', async () => {
  const titles = new Set()
  const descriptions = new Set()

  for (const route of routes) {
    const html = await readRoute(route)
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1]

    assert.ok(title, `${route} is missing a title`)
    assert.ok(description, `${route} is missing a description`)
    assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1], `${origin}${route}`)
    assert.match(html, /<meta property="og:title" content="[^"]+"/i)
    assert.match(html, /<meta property="og:description" content="[^"]+"/i)
    assert.match(html, /<meta property="og:url" content="[^"]+"/i)
    assert.match(html, /<script type="application\/ld\+json">[\s\S]+?<\/script>/i)

    titles.add(title)
    descriptions.add(description)
  }

  assert.equal(titles.size, routes.length)
  assert.equal(descriptions.size, routes.length)
})

test('homepage statically states the PeterAI brand entity and service boundary', async () => {
  const html = await readRoute('/')
  assert.match(html, /中山市彼得人工智能科技有限公司/)
  assert.match(html, /中小企业/)
  assert.match(html, /企业 AI 咨询/)
  assert.match(html, /AI Agent/)
  assert.match(html, /企业知识库/)
  assert.match(html, /不替客户承诺经营结果/)
})

test('robots and sitemap expose all canonical routes', async () => {
  const robots = await readFile(path.join(distRoot, 'robots.txt'), 'utf8')
  const sitemap = await readFile(path.join(distRoot, 'sitemap.xml'), 'utf8')

  assert.match(robots, /User-agent: \*/)
  assert.match(robots, /Allow: \//)
  assert.match(robots, new RegExp(`Sitemap: ${origin.replaceAll('.', '\\.')}/sitemap\\.xml`))

  for (const route of routes) {
    assert.match(sitemap, new RegExp(`<loc>${origin.replaceAll('.', '\\.')}${route}</loc>`))
  }
})

test('public output avoids unsupported scarcity, price and dashboard metrics', async () => {
  const banned = ['今天前 3 位', '免费驻场诊断名额', '价值 ¥5,000', '流程健康度', '异常识别']

  for (const route of routes) {
    const html = await readRoute(route)
    for (const phrase of banned) {
      assert.doesNotMatch(html, new RegExp(phrase), `${route} contains banned copy: ${phrase}`)
    }
  }
})
