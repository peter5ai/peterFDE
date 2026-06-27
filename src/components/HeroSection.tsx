import { motion } from 'framer-motion'
import { ArrowDown, BrainCircuit, CheckCircle2, Route, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import profileImg from '/profile.png'

export const HeroSection = () => {
  const { t } = useTranslation()
  const metrics = [
    t('missionHero.metrics.0'),
    t('missionHero.metrics.1'),
    t('missionHero.metrics.2'),
    t('missionHero.metrics.3'),
  ]

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-hero-glow pt-24 md:pt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-20">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-8 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-6 md:mb-8 inline-flex items-center gap-2 border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
              <BrainCircuit size={16} />
              {t('missionHero.badge')}
            </div>

            <h1 className="mb-6 md:mb-8 text-4xl font-bold leading-[1.12] md:text-6xl lg:text-7xl">
              {t('missionHero.titlePart1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">
                {t('missionHero.titleHighlight')}
              </span>
            </h1>

            <p className="mb-8 md:mb-10 max-w-2xl text-lg leading-8 text-text-muted md:text-xl">
              {t('missionHero.descriptionLine1')}
              <br className="hidden md:block" />
              {t('missionHero.descriptionLine2')}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex h-12 items-center justify-center bg-gold px-6 text-sm font-bold text-ink transition hover:bg-gold-light"
              >
                {t('nav.getDiagnosis')}
              </a>
              <a
                href="#cases"
                className="inline-flex h-12 items-center justify-center border border-white/15 px-6 text-sm font-semibold text-text transition hover:border-cyan/60 hover:text-cyan"
              >
                {t('missionHero.secondaryCta')}
              </a>
            </div>

            <div className="mt-10 md:mt-12 grid max-w-2xl grid-cols-2 border-y border-white/10 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item} className="py-4 md:py-5 pr-4">
                  <div className="mb-2 flex items-center gap-2 text-gold">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">FDE</span>
                  </div>
                  <p className="text-sm text-text-muted">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 md:-inset-4 border border-white/5 bg-white/[0.02]" />
            <div className="relative border border-white/10 bg-surface/80 p-4 md:p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-gold">{t('hero.nameTitle')}</p>
                  <p className="mt-1 text-xs text-text-muted">{t('hero.jobTitle')}</p>
                </div>
                <ShieldCheck className="text-cyan" size={28} />
              </div>

              <div className="grid gap-4 md:gap-5 pt-4 md:pt-5 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[320px] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgba(93,211,214,0.16),transparent_30%),linear-gradient(160deg,rgba(15,26,43,0.92),rgba(7,16,28,0.98))] md:min-h-[400px]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
                  <div className="absolute inset-x-8 bottom-0 h-28 bg-cyan/10 blur-2xl" />
                  <img
                    src={profileImg}
                    alt={t('missionHero.profileAlt')}
                    className="absolute bottom-[-18px] left-1/2 h-[112%] max-w-none -translate-x-1/2 object-contain md:bottom-[-26px] md:h-[118%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                <div className="space-y-3 md:space-y-4">
                  {[
                    ['01', t('missionHero.steps.0')],
                    ['02', t('missionHero.steps.1')],
                    ['03', t('missionHero.steps.2')],
                    ['04', t('missionHero.steps.3')],
                  ].map(([step, label]) => (
                    <div key={step} className="border border-white/10 bg-background/70 p-3 md:p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-display text-2xl font-bold text-gold">{step}</span>
                        <Route size={18} className="text-cyan" />
                      </div>
                      <p className="text-sm leading-6 text-text-muted">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted transition hover:text-gold md:flex"
      >
        Scroll
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
