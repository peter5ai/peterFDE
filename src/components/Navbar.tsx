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
    { name: t('nav.architecture'), href: '#architecture' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#hero" className="font-display font-bold text-xl tracking-wider text-text flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold inline-block" />
            PETER <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-muted hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-text-muted hover:text-gold transition-colors ml-4"
              title="Switch Language"
            >
              <Globe size={16} />
              <span className="uppercase">{i18n.language === 'zh' ? 'EN' : '中'}</span>
            </button>
            <a
              href="#cta"
              className="px-5 py-2.5 text-sm font-medium border border-gold text-gold hover:bg-gold hover:text-background transition-colors rounded-none ml-4"
            >
              {t('nav.getDiagnosis')}
            </a>
          </div>

          {/* Mobile Menu Toggle & Lang */}
          <div className="flex md:hidden items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-text-muted hover:text-gold transition-colors"
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
            className="fixed inset-0 z-40 bg-surface pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display text-text-muted hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 text-center font-medium border border-gold text-gold hover:bg-gold hover:text-background transition-colors"
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
