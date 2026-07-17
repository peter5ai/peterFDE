import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { getLocalizedPath, getRouteLanguage } from '../content/site'
import { getUiCopy } from '../content/ui'

export const Navbar = ({ pathname = '/' }: { pathname?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const language = getRouteLanguage(pathname)
  const nextLanguage = language === 'zh' ? 'en' : 'zh'
  const ui = getUiCopy(language)
  const navLinks = ui.nav.links.map(([name, path]) => ({ name, href: getLocalizedPath(path, language) }))
  const languageHref = getLocalizedPath(pathname, nextLanguage)
  const homeHref = getLocalizedPath('/', language)
  const contactHref = getLocalizedPath('/contact/', language)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-2 z-50 px-3 transition-all duration-300 md:px-5"
      >
        <div className={`mx-auto flex h-20 max-w-[1510px] items-center justify-between rounded-t-2xl border border-white/10 px-6 md:px-8 lg:px-10 ${
          isScrolled ? 'bg-background/88 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-[#06101f]/35 backdrop-blur-sm'
        }`}>
          <a href={homeHref} className="flex items-center gap-3 font-display text-xl font-bold tracking-wider text-text">
            <span className="grid h-9 w-9 place-items-center rounded border border-gold/35 bg-gold/10 text-sm text-gold shadow-inner shadow-gold/10">P</span>
            <span className="text-2xl">PETER <span className="bg-gradient-to-r from-gold-light via-gold to-cyan bg-clip-text text-transparent">AI</span></span>
          </a>

          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors hover:text-cyan ${
                    active ? 'text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold' : 'text-text-muted'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
            <a
              data-language-switch={nextLanguage}
              href={languageHref}
              className="ml-1 flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-cyan"
              title={ui.nav.switchTitle}
            >
              <Globe size={16} />
              <span className="uppercase">{ui.nav.switchLabel}</span>
            </a>
            <a href={contactHref} className="ml-1 rounded-md bg-gold px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-gold/15 transition-colors hover:bg-gold-light">
              {ui.nav.diagnosis}
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <a
              data-language-switch={nextLanguage}
              href={languageHref}
              className="text-sm font-bold uppercase text-text-muted transition-colors hover:text-cyan"
            >
              {ui.nav.switchLabel}
            </a>
            <button className="p-2 text-text" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={ui.nav.openMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background px-6 pt-28"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-display text-xl text-text-muted transition-colors hover:text-cyan">
                  {link.name}
                </a>
              ))}
              <a href={contactHref} onClick={() => setMobileMenuOpen(false)} className="mt-3 bg-gold px-6 py-4 text-center font-bold text-ink transition-colors hover:bg-gold-light">
                {ui.nav.diagnosis}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
