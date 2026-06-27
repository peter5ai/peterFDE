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
    { name: t('nav.painPoints'), href: '#pain-points' },
    { name: t('nav.fitCheck'), href: '#fit-check' },
    { name: t('nav.delivery'), href: '#delivery' },
    { name: t('nav.cases'), href: '#cases' },
    { name: t('nav.methodBase'), href: '#architecture' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/88 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#hero" className="font-display font-bold text-xl tracking-wider text-text flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-gold/35 bg-gold/10 text-sm text-gold">P</span>
            <span>PETER <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">AI</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-cyan transition-colors"
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
              className="px-5 py-2.5 text-sm font-bold bg-gold text-ink hover:bg-gold-light transition-colors ml-2"
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
