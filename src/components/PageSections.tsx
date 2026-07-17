import { ArrowRight, Check, ShieldCheck } from 'lucide-react'
import { getPageByPath, type EvidenceItem, type FaqItem, type PageSection, type SiteLanguage } from '../content/site'
import { getUiCopy } from '../content/ui'

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

export function FaqList({ faqs, language, title }: { faqs: FaqItem[]; language: SiteLanguage; title?: string }) {
  const ui = getUiCopy(language)

  return (
    <section className="page-band page-band-alt">
      <div className="site-shell faq-layout glass-panel">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>{title ?? ui.page.faqTitle}</h2>
          <p>{ui.page.faqDescription}</p>
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

export function EvidenceList({ evidence, language }: { evidence: EvidenceItem[]; language: SiteLanguage }) {
  const ui = getUiCopy(language)
  const [contextLabel, actionLabel, assetLabel, boundaryLabel] = ui.page.evidenceLabels

  return (
    <section className="page-band">
      <div className="site-shell">
        <div className="evidence-intro">
          <span className="eyebrow">{ui.page.evidenceEyebrow}</span>
          <h2>{ui.page.evidenceTitle}</h2>
          <p>{ui.page.evidenceDescription}</p>
        </div>
        <div className="evidence-list glass-panel">
          {evidence.map((item, index) => (
            <article className="evidence-row glass-panel-soft" key={item.title}>
              <div className="evidence-title"><span>0{index + 1}</span><h3>{item.title}</h3></div>
              <dl>
                <div><dt>{contextLabel}</dt><dd>{item.context}</dd></div>
                <div><dt>{actionLabel}</dt><dd>{item.action}</dd></div>
                <div><dt>{assetLabel}</dt><dd>{item.asset}</dd></div>
                <div className="boundary"><dt><ShieldCheck size={16} aria-hidden="true" />{boundaryLabel}</dt><dd>{item.boundary}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RelatedLinks({ paths, language }: { paths: string[]; language: SiteLanguage }) {
  const ui = getUiCopy(language)

  return (
    <section className="related-band">
      <div className="site-shell related-inner glass-panel">
        <div>
          <span className="eyebrow">{ui.page.relatedEyebrow}</span>
          <h2>{ui.page.relatedTitle}</h2>
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
