import { motion } from 'framer-motion'
import { ArrowRight, Database, FileCheck2, Workflow } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const labels = [
  ['before', Workflow],
  ['action', ArrowRight],
  ['asset', Database],
  ['boundary', FileCheck2],
] as const

export const Cases = () => {
  const { t } = useTranslation()
  const cases = [0, 1, 2].map((index) => ({
    title: t(`proofCases.items.${index}.title`),
    subtitle: t(`proofCases.items.${index}.subtitle`),
    before: t(`proofCases.items.${index}.before`),
    action: t(`proofCases.items.${index}.action`),
    asset: t(`proofCases.items.${index}.asset`),
    boundary: t(`proofCases.items.${index}.boundary`),
    featured: index === 0,
  }))

  return (
    <section id="cases" className="py-16 md:py-24 relative bg-ink/35">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 max-w-4xl"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Proof Chain</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
            {t('proofCases.titlePart1')}
            <span className="block text-gold">{t('proofCases.titleHighlight')}</span>
          </h2>
          <p className="text-lg leading-8 text-text-muted">
            {t('proofCases.description')}
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-5">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`border p-4 md:p-8 transition hover:-translate-y-1 ${
                item.featured ? 'border-gold/30 bg-gold/5 hover:border-gold/60' : 'border-white/10 bg-surface/80 hover:border-cyan/35'
              }`}
            >
              <div className="grid gap-4 md:gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  {item.featured && (
                    <span className="mb-3 md:mb-4 inline-block border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                      {t('proofCases.featuredTag')}
                    </span>
                  )}
                  <h3 className="mb-2 text-2xl font-display font-bold text-white/90">{item.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan">{item.subtitle}</p>
                </div>
                <div className="grid gap-3 md:gap-4 md:grid-cols-4">
                  {labels.map(([key, Icon]) => (
                    <div key={key} className="border border-white/10 bg-background/60 p-3 md:p-4">
                      <div className="mb-3 md:mb-4 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{t(`proofCases.labels.${key}`)}</span>
                        <Icon size={18} className={key === 'boundary' ? 'text-gold' : 'text-cyan'} />
                      </div>
                      <p className="text-sm leading-6 text-text-muted">{item[key]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
