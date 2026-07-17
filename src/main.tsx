import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/noto-sans-sc/400.css'
import '@fontsource/noto-sans-sc/600.css'
import '@fontsource/noto-sans-sc/700.css'
import '@fontsource/noto-sans-sc/900.css'
import App from './App'
import { getRouteLanguage } from './content/site'
import i18n from './i18n'
import './index.css'

const root = document.getElementById('root')!
const pathname = window.location.pathname
const routeLanguage = getRouteLanguage(pathname)
document.documentElement.lang = routeLanguage === 'en' ? 'en' : 'zh-CN'

const mount = () => {
  const app = (
    <StrictMode>
      <App pathname={pathname} />
    </StrictMode>
  )

  if (root.hasChildNodes()) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}

void i18n.changeLanguage(routeLanguage).then(mount)
