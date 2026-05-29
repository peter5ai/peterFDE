import { motion } from 'framer-motion'
import { XCircle, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const PainPoints = () => {
  const { t } = useTranslation()
  return (
    <section id="pain-points" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t('painPoints.titlePart1')}<br />
            {t('painPoints.titlePart2')}<span className="text-red-500/90">{t('painPoints.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Illusion Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-white/5 bg-surfaceLight/50 backdrop-blur-sm group hover:border-white/10 transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500/80">
                <XCircle size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white/80">{t('painPoints.illusion.title')}</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-red-500/50 mt-1">01</span>
                <p className="text-text-muted leading-relaxed">{t('painPoints.illusion.item1')}</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-500/50 mt-1">02</span>
                <p className="text-text-muted leading-relaxed">{t('painPoints.illusion.item2')}</p>
              </li>
            </ul>
          </motion.div>

          {/* Real Pain Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-gold/20 bg-gold/5 backdrop-blur-sm group hover:border-gold/40 transition-colors relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-gold">{t('painPoints.real.title')}</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-gold/50 mt-1">01</span>
                <p className="text-text leading-relaxed">{t('painPoints.real.item1')}</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold/50 mt-1">02</span>
                <p className="text-text leading-relaxed">{t('painPoints.real.item2')}</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
