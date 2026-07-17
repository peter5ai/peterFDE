import {
  BRAND_NAME,
  COMPANY_NAME,
  SITE_ORIGIN,
  getPageByPath,
  type FaqItem,
  type PageData,
} from '../content/site'

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

const faqSchema = (faqs: FaqItem[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
})

const pageType = (page: PageData) => {
  if (page.kind === 'about') return 'AboutPage'
  if (page.kind === 'contact') return 'ContactPage'
  if (page.kind === 'cases') return 'CollectionPage'
  return 'WebPage'
}

export const getStructuredData = (page: PageData) => {
  const canonical = `${SITE_ORIGIN}${page.path}`
  const organization = {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_ORIGIN}/#organization`,
    name: COMPANY_NAME,
    alternateName: BRAND_NAME,
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/favicon.svg`,
    image: `${SITE_ORIGIN}/profile.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '中山市',
      addressRegion: '广东省',
      addressCountry: 'CN',
    },
    areaServed: '中国',
    description: '面向中小企业 CEO 的企业 AI 咨询、AI Agent 与工作流落地、企业知识库建设服务商。',
  }

  const graph: Record<string, unknown>[] = [organization]

  if (page.kind === 'home') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: BRAND_NAME,
      inLanguage: 'zh-CN',
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
    })
  } else {
    graph.push({
      '@type': pageType(page),
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'zh-CN',
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      about: { '@id': `${SITE_ORIGIN}/#organization` },
    })
  }

  if (page.kind === 'service' || page.kind === 'industry') {
    graph.push({
      '@type': 'Service',
      name: page.title,
      description: page.description,
      url: canonical,
      provider: { '@id': `${SITE_ORIGIN}/#organization` },
      areaServed: page.kind === 'industry' ? '广东省中山市' : '中国',
      audience: { '@type': 'BusinessAudience', audienceType: '中小企业 CEO 与管理团队' },
    })
  }

  if (page.kind === 'about') {
    graph.push({
      '@type': 'Person',
      name: '温泳扬',
      alternateName: 'Peter',
      image: `${SITE_ORIGIN}/profile.png`,
      jobTitle: '企业 AI 咨询与智能体落地顾问',
      worksFor: { '@id': `${SITE_ORIGIN}/#organization` },
    })
  }

  if (page.faqs?.length) graph.push(faqSchema(page.faqs))

  return { '@context': 'https://schema.org', '@graph': graph }
}

export const buildHead = (pathname: string) => {
  const page = getPageByPath(pathname) ?? getPageByPath('/')!
  const canonical = `${SITE_ORIGIN}${page.path}`
  const title = escapeHtml(page.metaTitle)
  const description = escapeHtml(page.description)
  const structuredData = JSON.stringify(getStructuredData(page)).replace(/</g, '\\u003c')

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="PeterAI" />',
    '<meta property="og:locale" content="zh_CN" />',
    `<meta property="og:image" content="${SITE_ORIGIN}/profile.png" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<script type="application/ld+json">${structuredData}</script>`,
  ].join('\n    ')
}
