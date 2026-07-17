import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { getPageByPath, type EvidenceItem, type FaqItem, type PageSection } from '../content/site'

export function SectionBlock({ section, index }: { section: PageSection; index: number }) {
  return (
    <section className={index % 2 === 0 ? 'page-band' : 'page-band page-band-alt'}>
      <div className="site-shell section-grid glass-panel">
        <div className="section-heading">
          {section.eyebrow && <span className="eyebrow">{section.eyebrow}</span>}
          <h2>{section.title}</h2>
        </div>
        <div className="section-copy">
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && (
            <ul className="check-list">
              {section.bullets.map((item) => (
                <li key={item}><Check size={18} aria-hidden="true" /> <span>{item}</span></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export function FaqList({ faqs, title = '相关问题' }: { faqs: FaqItem[]; title?: string }) {
  return (
    <section className="page-band page-band-alt">
      <div className="site-shell faq-layout glass-panel">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>{title}</h2>
          <p>答案说明 PeterAI 的通用方法和边界，具体项目以双方确认的诊断与验收口径为准。</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="glass-panel-soft" key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EvidenceList({ evidence }: { evidence: EvidenceItem[] }) {
  return (
    <section className="page-band">
      <div className="site-shell">
        <div className="evidence-intro">
          <span className="eyebrow">脱敏项目样本</span>
          <h2>每个样本都回答四件事</h2>
          <p>原来卡在哪里，做了什么，留下什么资产，哪些地方仍由人负责。</p>
        </div>
        <div className="evidence-list glass-panel">
          {evidence.map((item, index) => (
            <article className="evidence-row glass-panel-soft" key={item.title}>
              <div className="evidence-title"><span>0{index + 1}</span><h3>{item.title}</h3></div>
              <dl>
                <div><dt>业务现场</dt><dd>{item.context}</dd></div>
                <div><dt>部署动作</dt><dd>{item.action}</dd></div>
                <div><dt>沉淀资产</dt><dd>{item.asset}</dd></div>
                <div className="boundary"><dt><ShieldCheck size={16} aria-hidden="true" />责任边界</dt><dd>{item.boundary}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedLinks({ paths }: { paths: string[] }) {
  return (
    <section className="related-band">
      <div className="site-shell related-inner glass-panel">
        <div>
          <span className="eyebrow">继续了解</span>
          <h2>把问题带到下一步</h2>
        </div>
        <div className="related-links">
          {paths.map((path) => {
            const page = getPageByPath(path)
            if (!page) return null
            return <a className="glass-panel-soft" href={path} key={path}><span>{page.title}</span><ArrowRight size={18} aria-hidden="true" /></a>
          })}
        </div>
      </div>
    </section>
  )
}
