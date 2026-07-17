import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const projectRoot = path.resolve(import.meta.dirname, '..')
const distRoot = path.join(projectRoot, 'dist')
const origin = 'https://www.peterai.cloud'
const zhRoutes = [
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
const enRoutes = zhRoutes.map((route) => route === '/' ? '/en/' : `/en${route}`)
const routes = [...zhRoutes, ...enRoutes]

const englishMarkers = new Map([
  ['/en/', 'GEO Brand Building'],
  ['/en/ai-consulting/', 'When consulting diagnosis should come first'],
  ['/en/ai-agent-implementation/', 'What a working Agent includes'],
  ['/en/enterprise-knowledge-base/', 'A knowledge base is not a file repository'],
  ['/en/case-studies/', 'Every sample answers four questions'],
  ['/en/faq/', 'PeterAI Official Answers'],
  ['/en/about/', 'From business understanding to AI work systems'],
  ['/en/contact/', 'Bring four pieces of information'],
  ['/en/industries/zhongshan-lighting-export/', 'Start with the nodes where information repeats most'],
  ['/en/industries/industrial-services/', 'Prioritize information and decision support'],
])

const routeFile = (route) => route === '/'
  ? path.join(distRoot, 'index.html')
  : path.join(distRoot, route.slice(1), 'index.html')

const readRoute = (route) => readFile(routeFile(route), 'utf8')

test('build emits a static HTML file for every public route', async () => {
  for (const route of routes) {
    const html = await readRoute(route)
    assert.match(html, new RegExp(`<html lang="${route.startsWith('/en/') ? 'en' : 'zh-CN'}">`))
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

test('homepage presents the seven-stage capability chain in the intended order', async () => {
  const html = await readRoute('/')

  assert.match(
    html,
    /FDE 场景筛选[\s\S]*流程重构[\s\S]*企业级知识库[\s\S]*Agent 部署[\s\S]*GEO 品牌建设[\s\S]*风险控制[\s\S]*验收复盘/,
  )
  assert.equal(html.match(/holo-icon/g)?.length, 7)
})

test('English pages render complete route-specific English content', async () => {
  for (const [route, marker] of englishMarkers) {
    const html = await readRoute(route)
    assert.match(html, new RegExp(marker), `${route} is missing its English content marker`)
    assert.match(html, /data-language-switch="zh"/)
  }

  const homepage = await readRoute('/en/')
  assert.equal(homepage.match(/holo-icon/g)?.length, 7)
  assert.match(homepage, /Enterprise Knowledge Base[\s\S]*Agent Deployment[\s\S]*GEO Brand Building[\s\S]*Risk Control[\s\S]*Acceptance Review/)
})

test('every inner page uses the original glass visual system', async () => {
  for (const route of routes.filter((route) => route !== '/' && route !== '/en/')) {
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
    assert.match(html, new RegExp(`"inLanguage":"${route.startsWith('/en/') ? 'en' : 'zh-CN'}"`))

    titles.add(title)
    descriptions.add(description)
  }

  assert.equal(titles.size, routes.length)
  assert.equal(descriptions.size, routes.length)
})

test('every page exposes reciprocal language alternates and a same-page language switch', async () => {
  for (const route of zhRoutes) {
    const englishRoute = route === '/' ? '/en/' : `/en${route}`
    const zhHtml = await readRoute(route)
    const enHtml = await readRoute(englishRoute)

    for (const html of [zhHtml, enHtml]) {
      assert.match(html, new RegExp(`<link rel="alternate" hreflang="zh-CN" href="${origin.replaceAll('.', '\\.')}${route}"`))
      assert.match(html, new RegExp(`<link rel="alternate" hreflang="en" href="${origin.replaceAll('.', '\\.')}${englishRoute}"`))
      assert.match(html, new RegExp(`<link rel="alternate" hreflang="x-default" href="${origin.replaceAll('.', '\\.')}${route}"`))
    }

    assert.match(zhHtml, new RegExp(`data-language-switch="en"[^>]+href="${englishRoute}"`))
    assert.match(enHtml, new RegExp(`data-language-switch="zh"[^>]+href="${route}"`))
  }
})

test('Chinese homepage statically states the PeterAI brand entity and service boundary', async () => {
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
