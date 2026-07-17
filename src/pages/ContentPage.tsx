import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react'
import { EvidenceList, FaqList, RelatedLinks, SectionBlock } from '../components/PageSections'
import { getLocalizedPath, getRouteLanguage, type PageData, type SiteLanguage } from '../content/site'
import { getUiCopy } from '../content/ui'

function PageHero({ page }: { page: PageData }) {
  const language = getRouteLanguage(page.path)
  const ui = getUiCopy(language)

  return (
    <section className="inner-hero">
      <div className="site-shell inner-hero-grid hero-dashboard glass-panel">
        <div>
          <nav className="breadcrumbs" aria-label={ui.page.breadcrumb}><a href={getLocalizedPath('/', language)}>PeterAI</a><span>/</span><span>{page.eyebrow}</span></nav>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          {page.kind !== 'contact' && <a className="text-link" href={getLocalizedPath('/contact/', language)}>{ui.page.heroCta} <ArrowRight size={17} aria-hidden="true" /></a>}
        </div>
        {page.keyFacts && (
          <aside className="key-facts glass-panel-soft" aria-label={ui.page.keyFacts}>
            {page.keyFacts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
          </aside>
        )}
      </div>
    </section>
  )
}

function ContactPanel({ language }: { language: SiteLanguage }) {
  const ui = getUiCopy(language)

  return (
    <section className="contact-panel">
      <div className="site-shell contact-grid glass-panel">
        <div className="contact-copy">
          <span className="eyebrow">{ui.page.contactEyebrow}</span>
          <h2>{ui.page.contactTitle}</h2>
          <p>{ui.page.contactDescription}</p>
          <div className="location"><MapPin size={18} aria-hidden="true" />{ui.page.location}</div>
          <div className="privacy-note"><ShieldCheck size={20} aria-hidden="true" /><span>{ui.page.privacy}</span></div>
        </div>
        <div className="qr-frame glass-panel-soft"><img src="/qr-code.png" alt={ui.page.qrAlt} /><span>{ui.page.qrLabel}</span></div>
      </div>
    </section>
  )
}

function AboutProfile({ language }: { language: SiteLanguage }) {
  const ui = getUiCopy(language)

  return (
    <section className="profile-band">
      <div className="site-shell profile-grid glass-panel">
        <div className="profile-image glass-panel-soft"><img src="/profile.png" alt={ui.page.profileAlt} /></div>
        <div>
          <span className="eyebrow">Founder</span>
          <h2>{ui.page.profileName}</h2>
          <p className="profile-role">{ui.page.profileRole}</p>
          <p>{ui.page.profileDescription}</p>
        </div>
      </div>
    </section>
  )
}

export function ContentPage({ page }: { page: PageData }) {
  const language = getRouteLanguage(page.path)
  const ui = getUiCopy(language)

  return (
    <div className="geo-page">
      <PageHero page={page} />
      {page.kind === 'about' && <AboutProfile language={language} />}
      {page.sections?.map((section, index) => <SectionBlock section={section} index={index} key={section.title} />)}
      {page.evidence && <EvidenceList evidence={page.evidence} language={language} />}
      {page.faqs && <FaqList faqs={page.faqs} language={language} title={page.kind === 'faq' ? ui.page.officialAnswers : ui.page.faqTitle} />}
      {page.kind === 'contact' && <ContactPanel language={language} />}
      {page.related && <RelatedLinks paths={page.related} language={language} />}
    </div>
  )
}
