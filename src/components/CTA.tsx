import { motion } from 'framer-motion'
import { MessageCircle, ScanLine } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import qrCodeImg from '/qr-code.png'

export const CTA = () => {
  const { t } = useTranslation()
  const checks = ['流程是否高频重复', '评价标准是否明确', '错误成本是否可控', '能否沉淀 SOP']

  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-hero-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-surface/75 p-8 md:p-12"
          >
            <span className="mb-5 inline-flex items-center gap-2 border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan">
              <MessageCircle size={14} />
              {t('cta.tag')}
            </span>
            <h2 className="mb-6 text-4xl md:text-6xl font-display font-bold leading-tight">
              {t('cta.titlePart1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">
                {t('cta.titleHighlight')}
              </span>
            </h2>
            <p className="mb-8 max-w-3xl text-xl text-text-muted leading-8">{t('cta.quote')}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {checks.map((item) => (
                <div key={item} className="border border-white/10 bg-background/60 px-4 py-3 text-sm text-text-muted">
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
            className="border border-gold/25 bg-gold/5 p-6 md:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{t('cta.boxTitle')}</h3>
                <div className="mt-2 text-xl font-display font-bold text-gold">{t('cta.boxPrice')}</div>
              </div>
              <ScanLine className="shrink-0 text-cyan" size={34} />
            </div>

            <p className="mb-6 text-sm leading-7 text-text-muted">{t('cta.boxDesc')}</p>

            <div className="mx-auto max-w-[260px] bg-white p-3">
              <img src={qrCodeImg} alt={t('cta.qrAlt')} className="aspect-square w-full object-cover scale-[1.35]" />
            </div>
            <p className="mt-5 text-center text-sm font-bold tracking-[0.22em] text-gold">{t('cta.scanText')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
