import { motion } from 'framer-motion'
import { MessageCircle, ScanLine } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import qrCodeImg from '/qr-code.png'

export const CTA = () => {
  const { t } = useTranslation()
  const checks = [
    t('missionCta.checks.0'),
    t('missionCta.checks.1'),
    t('missionCta.checks.2'),
    t('missionCta.checks.3'),
  ]

  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden bg-hero-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid items-stretch gap-4 md:gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[1.75rem] p-6 md:p-12"
          >
            <span className="glass-chip mb-4 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan md:mb-5">
              <span className="glass-icon glass-icon-cyan h-8 w-8 rounded-xl">
                <MessageCircle size={15} />
              </span>
              {t('cta.tag')}
            </span>
            <h2 className="mb-4 md:mb-6 text-4xl md:text-6xl font-display font-bold leading-tight">
              {t('missionCta.titlePart1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">
                {t('missionCta.titleHighlight')}
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-3xl text-lg md:text-xl text-text-muted leading-8">
              {t('missionCta.description')}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {checks.map((item) => (
                <div key={item} className="glass-panel-soft rounded-2xl px-4 py-3 text-sm text-text-muted">
                  <span className="mr-2 text-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="glass-panel rounded-[1.75rem] border-gold/25 p-5 md:p-8"
          >
            <div className="mb-5 md:mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{t('cta.boxTitle')}</h3>
                <div className="mt-2 text-xl font-display font-bold text-gold">{t('cta.boxPrice')}</div>
              </div>
              <span className="glass-icon glass-icon-cyan glass-icon-lg">
                <ScanLine size={30} />
              </span>
            </div>

            <p className="mb-5 md:mb-6 text-sm leading-7 text-text-muted">
              {t('missionCta.boxDesc')}
            </p>

            <div className="mx-auto aspect-square w-full max-w-[230px] overflow-hidden rounded-[1.35rem] bg-white shadow-2xl shadow-cyan/10 md:max-w-[252px]">
              <img src={qrCodeImg} alt={t('cta.qrAlt')} className="h-full w-full scale-[1.45] object-cover object-[50%_58%]" />
            </div>
            <p className="mt-4 md:mt-5 text-center text-sm font-bold tracking-[0.22em] text-gold">{t('cta.scanText')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
