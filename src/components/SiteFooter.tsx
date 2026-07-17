import { COMPANY_NAME } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid glass-panel">
        <div>
          <a className="footer-brand" href="/">PeterAI</a>
          <p>{COMPANY_NAME}</p>
          <p>广东中山 · 企业 AI 咨询与智能体落地</p>
        </div>
        <nav aria-label="页脚导航">
          <a href="/ai-consulting/">企业 AI 咨询</a>
          <a href="/ai-agent-implementation/">Agent 落地</a>
          <a href="/enterprise-knowledge-base/">企业知识库</a>
          <a href="/case-studies/">脱敏项目样本</a>
          <a href="/faq/">常见问题</a>
          <a href="/contact/">联系 PeterAI</a>
        </nav>
      </div>
      <div className="site-shell footer-legal">
        <span>© 2026 PeterAI</span>
        <span>AI 替代动作，不替代责任。</span>
      </div>
    </footer>
  )
}
