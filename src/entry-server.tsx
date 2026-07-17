/* eslint-disable react-refresh/only-export-components -- build-only SSR entry */
import { renderToString } from 'react-dom/server'
import App from './App'
import { getRouteLanguage, PUBLIC_ROUTES } from './content/site'
import i18n from './i18n'
import { buildHead } from './lib/seo'

export { PUBLIC_ROUTES }

export async function render(pathname: string) {
  await i18n.changeLanguage(getRouteLanguage(pathname))

  return {
    html: renderToString(<App pathname={pathname} />),
    head: buildHead(pathname),
  }
}
