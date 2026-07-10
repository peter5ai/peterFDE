import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.painPoints'), href: '#pain-points' },
    { name: t('nav.fitCheck'), href: '#fit-check' },
    { name: t('nav.delivery'), href: '#delivery' },
    { name: t('nav.cases'), href: '#cases' },
    { name: t('nav.logic'), href: '#logic' },
  ]

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(nextLang)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-2 left-0 right-0 z-50 px-3 transition-all duration-300 md:px-5 ${
          isScrolled ? 'translate-y-0' : 'translate-y-0'
        }`}
      >
        <div className={`mx-auto flex h-20 max-w-[1510px] items-center justify-between rounded-t-2xl border border-white/10 px-6 md:px-8 lg:px-10 ${
          isScrolled ? 'bg-background/88 shadow-lg shadow-black/20 backdrop-blur-xl' : 'bg-[#06101f]/35 backdrop-blur-sm'
        }`}>
          <a href="#hero" className="font-display font-bold text-xl tracking-wider text-text flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded border border-gold/35 bg-gold/10 text-sm text-gold shadow-inner shadow-gold/10">P</span>
            <span className="text-2xl">PETER <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">AI</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-cyan ${
                  link.href === '#hero' ? 'text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold' : 'text-text-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-text-muted hover:text-cyan transition-colors ml-2"
              title="Switch Language"
            >
              <Globe size={16} />
              <span className="uppercase">{i18n.language === 'zh' ? 'EN' : '中'}</span>
            </button>
            <a
              href="#cta"
              className="ml-2 rounded-md bg-gold px-7 py-3 text-sm font-bold text-ink shadow-lg shadow-gold/15 transition-colors hover:bg-gold-light"
            >
              {t('nav.getDiagnosis')}
            </a>
          </div>

          {/* Mobile Menu Toggle & Lang */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-text-muted hover:text-cyan transition-colors"
            >
              <span className="uppercase text-sm font-bold">{i18n.language === 'zh' ? 'EN' : '中'}</span>
            </button>
            <button
              className="text-text p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display text-text-muted hover:text-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 text-center font-bold bg-gold text-ink hover:bg-gold-light transition-colors"
              >
                {t('nav.getDiagnosisMobile')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
