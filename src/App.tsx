import './i18n'
import { Navbar } from './components/Navbar'
import { SiteFooter } from './components/SiteFooter'
import { getPageByPath } from './content/site'
import { ContentPage } from './pages/ContentPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

type AppProps = {
  pathname?: string
}

function App({ pathname = '/' }: AppProps) {
  const page = getPageByPath(pathname)

  if (!page) {
    return (
      <div className="geo-site min-h-screen bg-background text-text">
        <Navbar pathname={pathname} />
        <NotFoundPage pathname={pathname} />
        <SiteFooter pathname={pathname} />
      </div>
    )
  }

  return (
    <div className="geo-site min-h-screen bg-background text-text">
      <Navbar pathname={page.path} />
      <main>
        {page.kind === 'home' ? <HomePage /> : <ContentPage page={page} />}
      </main>
      {page.kind !== 'home' && <SiteFooter pathname={page.path} />}
    </div>
  )
}

export default App
