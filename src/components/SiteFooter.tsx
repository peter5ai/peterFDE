import { getLocalizedPath, getRouteLanguage } from '../content/site'
import { getUiCopy } from '../content/ui'

export function SiteFooter({ pathname = '/' }: { pathname?: string }) {
  const language = getRouteLanguage(pathname)
  const ui = getUiCopy(language)

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid glass-panel">
        <div>
          <a className="footer-brand" href={getLocalizedPath('/', language)}>PeterAI</a>
          <p>{ui.footer.company}</p>
          <p>{ui.footer.descriptor}</p>
        </div>
        <nav aria-label={ui.footer.navLabel}>
          {ui.footer.links.map(([label, path]) => (
            <a href={getLocalizedPath(path, language)} key={path}>{label}</a>
          ))}
        </nav>
      </div>
      <div className="site-shell footer-legal">
        <span>© 2026 PeterAI</span>
        <span>{ui.footer.principle}</span>
      </div>
    </footer>
  )
}
