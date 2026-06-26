import { motion } from 'framer-motion'
import { XCircle, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const PainPoints = () => {
  const { t } = useTranslation()
  return (
    <section id="pain-points" className="py-24 relative overflow-hidden bg-ink/35">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Problem Framing</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            {t('painPoints.titlePart1')}<br />
            {t('painPoints.titlePart2')}<span className="text-red-500/90">{t('painPoints.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Illusion Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border border-red-400/15 bg-red-950/10 backdrop-blur-sm group hover:border-red-400/35 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-500/10 flex items-center justify-center text-red-400">
                <XCircle size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white/80">{t('painPoints.illusion.title')}</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-red-400/70 mt-1 font-bold">01</span>
                <p className="text-text-muted leading-relaxed">{t('painPoints.illusion.item1')}</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400/70 mt-1 font-bold">02</span>
                <p className="text-text-muted leading-relaxed">{t('painPoints.illusion.item2')}</p>
              </li>
            </ul>
          </motion.div>

          {/* Real Pain Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border border-gold/25 bg-gold/5 backdrop-blur-sm group hover:border-gold/50 transition-colors relative"
          >
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 bg-gold/15 flex items-center justify-center text-gold">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-gold">{t('painPoints.real.title')}</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-gold/70 mt-1 font-bold">01</span>
                <p className="text-text leading-relaxed">{t('painPoints.real.item1')}</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold/70 mt-1 font-bold">02</span>
                <p className="text-text leading-relaxed">{t('painPoints.real.item2')}</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
