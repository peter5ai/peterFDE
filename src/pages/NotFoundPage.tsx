import { getLocalizedPath, getRouteLanguage } from '../content/site'
import { getUiCopy } from '../content/ui'

export function NotFoundPage({ pathname = '/' }: { pathname?: string }) {
  const language = getRouteLanguage(pathname)
  const ui = getUiCopy(language)

  return (
    <main className="not-found">
      <span className="eyebrow">404</span>
      <h1>{ui.notFound.title}</h1>
      <p>{ui.notFound.description}</p>
      <a className="button button-primary" href={getLocalizedPath('/', language)}>{ui.notFound.action}</a>
    </main>
  )
}
