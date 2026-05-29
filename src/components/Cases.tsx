import { motion } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
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
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t('cases.titlePart1')}<br />
            {t('cases.titlePart2')}<span className="text-gold">{t('cases.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 border transition-all duration-300 group hover:-translate-y-2 ${
                item.featured 
                  ? 'lg:col-span-3 border-gold/30 bg-gold/5 hover:border-gold/60' 
                  : 'border-white/5 bg-surface hover:border-white/20'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  {item.featured && (
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold tracking-widest uppercase mb-4 border border-gold/20">
                      {t('cases.featuredTag')}
                    </span>
                  )}
                  <h3 className="text-2xl font-display font-bold mb-2 text-white/90">{item.title}</h3>
                  <p className="text-gold text-sm font-semibold tracking-wider uppercase">{item.subtitle}</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider mb-2 block">{t('cases.labels.pain')}</span>
                    <p className="text-red-400/80 leading-relaxed">{item.pain}</p>
                  </div>
                  
                  <div className="flex items-center justify-center py-2">
                    <ArrowRight className="text-white/20 group-hover:text-gold transition-colors" />
                  </div>

                  <div>
                    <span className="text-xs text-text-muted uppercase tracking-wider mb-2 block">{t('cases.labels.action')}</span>
                    <p className="text-white/70 leading-relaxed">{item.action}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5">
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
