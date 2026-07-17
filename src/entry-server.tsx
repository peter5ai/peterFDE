/* eslint-disable react-refresh/only-export-components -- build-only SSR entry */
import { renderToString } from 'react-dom/server'
import App from './App'
import { PUBLIC_ROUTES } from './content/site'
import { buildHead } from './lib/seo'

export { PUBLIC_ROUTES }

export function render(pathname: string) {
  return {
    html: renderToString(<App pathname={pathname} />),
    head: buildHead(pathname),
  }
}
