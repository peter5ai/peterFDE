import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const PainPoints = () => {
  const { t } = useTranslation()
  const contrasts = [
    [t('positioning.contrasts.0.wrong'), t('positioning.contrasts.0.right')],
    [t('positioning.contrasts.1.wrong'), t('positioning.contrasts.1.right')],
    [t('positioning.contrasts.2.wrong'), t('positioning.contrasts.2.right')],
    [t('positioning.contrasts.3.wrong'), t('positioning.contrasts.3.right')],
  ]

  return (
    <section id="pain-points" className="py-16 md:py-24 relative overflow-hidden bg-ink/35">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-10 md:mb-16 max-w-4xl text-center"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Positioning</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            {t('positioning.titlePart1')}
            <span className="block text-gold">{t('positioning.titleHighlight')}</span>
          </h2>
          <p className="mt-4 md:mt-6 text-lg leading-8 text-text-muted">
            {t('positioning.description')}
          </p>
        </motion.div>

        <div className="grid gap-3 md:gap-4">
          {contrasts.map(([wrong, right], index) => (
            <motion.div
              key={wrong}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid gap-2 md:gap-3 border border-white/10 bg-surface/70 p-3 md:grid-cols-[1fr_auto_1fr] md:items-center md:p-5"
            >
              <div className="flex items-start gap-3 border border-red-400/15 bg-red-950/10 p-3 md:p-4">
                <XCircle className="mt-0.5 shrink-0 text-red-400" size={20} />
                <p className="font-semibold text-text-muted">{wrong}</p>
              </div>
              <div className="hidden h-px w-10 bg-white/20 md:block" />
              <div className="flex items-start gap-3 border border-green-400/15 bg-green-950/10 p-3 md:p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-400" size={20} />
                <p className="font-semibold text-text">{right}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
