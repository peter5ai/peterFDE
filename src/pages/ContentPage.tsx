import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react'
import { EvidenceList, FaqList, RelatedLinks, SectionBlock } from '../components/PageSections'
import type { PageData } from '../content/site'

function PageHero({ page }: { page: PageData }) {
  return (
    <section className="inner-hero">
      <div className="site-shell inner-hero-grid hero-dashboard glass-panel">
        <div>
          <nav className="breadcrumbs" aria-label="面包屑"><a href="/">PeterAI</a><span>/</span><span>{page.eyebrow}</span></nav>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          {page.kind !== 'contact' && <a className="text-link" href="/contact/">带一个真实流程来沟通 <ArrowRight size={17} aria-hidden="true" /></a>}
        </div>
        {page.keyFacts && (
          <aside className="key-facts glass-panel-soft" aria-label="页面要点">
            {page.keyFacts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
          </aside>
        )}
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <section className="contact-panel">
      <div className="site-shell contact-grid glass-panel">
        <div className="contact-copy">
          <span className="eyebrow">微信联系</span>
          <h2>扫描二维码，联系 Peter</h2>
          <p>请先发送一句话说明你的行业，以及最想改善的一个流程。首次沟通只需提供完成判断所必需的信息。</p>
          <div className="location"><MapPin size={18} aria-hidden="true" />广东省中山市</div>
          <div className="privacy-note"><ShieldCheck size={20} aria-hidden="true" /><span>不要发送密钥、Cookie、完整客户名单或未经授权的敏感资料。</span></div>
        </div>
        <div className="qr-frame glass-panel-soft"><img src="/qr-code.png" alt="Peter 个人微信二维码" /><span>微信扫码联系</span></div>
      </div>
    </section>
  )
}

function AboutProfile() {
  return (
    <section className="profile-band">
      <div className="site-shell profile-grid glass-panel">
        <div className="profile-image glass-panel-soft"><img src="/profile.png" alt="PeterAI 创始人温泳扬（Peter）" /></div>
        <div>
          <span className="eyebrow">Founder</span>
          <h2>温泳扬（Peter）</h2>
          <p className="profile-role">PeterAI 创始人 · 企业 AI 咨询与智能体落地顾问</p>
          <p>PeterAI 的工作不是替企业购买更多工具，而是与老板和一线人员一起，把业务判断、流程标准与责任边界写进可运行、可验收的工作系统。</p>
        </div>
      </div>
    </section>
  )
}

export function ContentPage({ page }: { page: PageData }) {
  return (
    <div className="geo-page">
      <PageHero page={page} />
      {page.kind === 'about' && <AboutProfile />}
      {page.sections?.map((section, index) => <SectionBlock section={section} index={index} key={section.title} />)}
      {page.evidence && <EvidenceList evidence={page.evidence} />}
      {page.faqs && <FaqList faqs={page.faqs} title={page.kind === 'faq' ? 'PeterAI 官方回答' : '服务常见问题'} />}
      {page.kind === 'contact' && <ContactPanel />}
      {page.related && <RelatedLinks paths={page.related} />}
    </div>
  )
}
