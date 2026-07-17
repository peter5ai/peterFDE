import { ArrowUpRight, Menu } from 'lucide-react'
import { normalizePath } from '../content/site'

const navigation = [
  { label: '服务', href: '/ai-consulting/' },
  { label: 'Agent 落地', href: '/ai-agent-implementation/' },
  { label: '案例', href: '/case-studies/' },
  { label: '问答', href: '/faq/' },
  { label: '关于', href: '/about/' },
]

type SiteHeaderProps = {
  pathname: string
}

export function SiteHeader({ pathname }: SiteHeaderProps) {
  const current = normalizePath(pathname)

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand" href="/" aria-label="PeterAI 首页">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>
            <strong>PeterAI</strong>
            <small>企业 AI 落地</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => (
            <a className={current === item.href ? 'is-active' : ''} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/contact/">
          联系 Peter
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <details className="mobile-nav">
          <summary aria-label="打开导航"><Menu size={22} aria-hidden="true" /></summary>
          <nav aria-label="手机导航">
            {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
            <a href="/contact/">联系 Peter</a>
          </nav>
        </details>
      </div>
    </header>
  )
}
