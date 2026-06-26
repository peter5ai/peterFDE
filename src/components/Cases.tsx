import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Cases = () => {
  const { t } = useTranslation()
  const cases = [
    {
      title: t('cases.items.0.title'),
      subtitle: t('cases.items.0.subtitle'),
      pain: t('cases.items.0.pain'),
      action: t('cases.items.0.action'),
      result: t('cases.items.0.result'),
      featured: true
    },
    {
      title: t('cases.items.1.title'),
      subtitle: t('cases.items.1.subtitle'),
      pain: t('cases.items.1.pain'),
      action: t('cases.items.1.action'),
      result: t('cases.items.1.result'),
      featured: false
    },
    {
      title: t('cases.items.2.title'),
      subtitle: t('cases.items.2.subtitle'),
      pain: t('cases.items.2.pain'),
      action: t('cases.items.2.action'),
      result: t('cases.items.2.result'),
      featured: false
    }
  ]

  return (
    <section id="cases" className="py-24 relative bg-ink/35">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 max-w-4xl"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Field Cases</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            {t('cases.titlePart1')}<br />
            {t('cases.titlePart2')}<span className="text-gold">{t('cases.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-6 md:p-8 border transition-all duration-300 group hover:-translate-y-1 ${
                item.featured 
                  ? 'lg:col-span-3 border-gold/30 bg-gold/5 hover:border-gold/60' 
                  : 'border-white/10 bg-surface/80 hover:border-cyan/35'
              }`}
            >
              <div className={`grid h-full gap-8 ${item.featured ? 'lg:grid-cols-[0.8fr_1.2fr]' : ''}`}>
                <div>
                  {item.featured && (
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4 border border-gold/20">
                      {t('cases.featuredTag')}
                    </span>
                  )}
                  <h3 className="text-2xl font-display font-bold mb-2 text-white/90">{item.title}</h3>
                  <p className="text-cyan text-sm font-semibold tracking-wider uppercase">{item.subtitle}</p>
                </div>

                <div className={`grid gap-4 ${item.featured ? 'md:grid-cols-3' : ''}`}>
                  <div className="border border-red-400/15 bg-red-950/10 p-4">
                    <span className="text-xs text-text-muted uppercase tracking-wider mb-2 block">{t('cases.labels.pain')}</span>
                    <p className="text-red-400/80 leading-relaxed">{item.pain}</p>
                  </div>
                  
                  <div className="hidden items-center justify-center py-2 lg:flex">
                    <ArrowRight className="text-white/20 group-hover:text-gold transition-colors" />
                  </div>

                  <div className="border border-white/10 bg-background/55 p-4">
                    <span className="text-xs text-text-muted uppercase tracking-wider mb-2 block">{t('cases.labels.action')}</span>
                    <p className="text-white/70 leading-relaxed">{item.action}</p>
                  </div>

                  <div className="border border-green-400/15 bg-green-950/10 p-4">
                    <span className="text-xs text-gold uppercase tracking-wider mb-2 block">{t('cases.labels.result')}</span>
                    <p className="text-green-400/90 font-medium leading-relaxed">{item.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
