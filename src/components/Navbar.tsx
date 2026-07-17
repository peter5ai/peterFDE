import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const navLinks = [
  { name: '首页', href: '/' },
  { name: 'AI 咨询', href: '/ai-consulting/' },
  { name: 'Agent 落地', href: '/ai-agent-implementation/' },
  { name: '企业知识库', href: '/enterprise-knowledge-base/' },
  { name: '案例', href: '/case-studies/' },
  { name: '问答', href: '/faq/' },
  { name: '关于', href: '/about/' },
]

export const Navbar = ({ pathname = '/' }: { pathname?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { i18n } = useTranslation()
  const showLanguage = pathname === '/'

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(nextLang)
  }

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
          <a href="/" className="flex items-center gap-3 font-display text-xl font-bold tracking-wider text-text">
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
            {showLanguage && (
              <button
                onClick={toggleLanguage}
                className="ml-1 flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-cyan"
                title="切换语言"
              >
                <Globe size={16} />
                <span className="uppercase">{i18n.language === 'zh' ? 'EN' : '中'}</span>
              </button>
            )}
            <a href="/contact/" className="ml-1 rounded-md bg-gold px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-gold/15 transition-colors hover:bg-gold-light">
              流程初诊
            </a>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {showLanguage && (
              <button onClick={toggleLanguage} className="text-sm font-bold uppercase text-text-muted transition-colors hover:text-cyan">
                {i18n.language === 'zh' ? 'EN' : '中'}
              </button>
            )}
            <button className="p-2 text-text" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="打开导航菜单">
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
              <a href="/contact/" onClick={() => setMobileMenuOpen(false)} className="mt-3 bg-gold px-6 py-4 text-center font-bold text-ink transition-colors hover:bg-gold-light">
                流程初诊
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
