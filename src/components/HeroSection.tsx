import { motion } from 'framer-motion'
import { ArrowDown, BrainCircuit, CheckCircle2, Route, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import profileImg from '/profile.png'

export const HeroSection = () => {
  const { t } = useTranslation()
  const metrics = ['流程诊断', 'Agent 部署', 'SOP 沉淀']

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-hero-glow pt-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center gap-2 border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
              <BrainCircuit size={16} />
              {t('hero.subtitle')}
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-[1.08] md:text-6xl lg:text-7xl">
              {t('hero.titlePart1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-text-muted md:text-xl">
              {t('hero.descriptionLine1')}
              <br className="hidden md:block" />
              {t('hero.descriptionLine2')}
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
                查看部署案例
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/10">
              {metrics.map((item) => (
                <div key={item} className="py-5 pr-4">
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
            <div className="absolute -inset-4 border border-white/5 bg-white/[0.02]" />
            <div className="relative border border-white/10 bg-surface/80 p-5 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-gold">{t('hero.nameTitle')}</p>
                  <p className="mt-1 text-xs text-text-muted">{t('hero.jobTitle')}</p>
                </div>
                <ShieldCheck className="text-cyan" size={28} />
              </div>

              <div className="grid gap-5 pt-5 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-b from-white/10 to-white/[0.02]">
                  <img
                    src={profileImg}
                    alt="温泳扬 (Peter)"
                    className="absolute bottom-0 left-1/2 h-[92%] max-w-none -translate-x-1/2 object-contain"
                  />
                </div>

                <div className="space-y-4">
                  {[
                    ['01', '找出最值得 AI 重做的流程'],
                    ['02', '重构输入、动作、标准和责任'],
                    ['03', '部署智能体并沉淀企业工作法'],
                  ].map(([step, label]) => (
                    <div key={step} className="border border-white/10 bg-background/70 p-4">
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
