import { motion } from 'framer-motion'
import { Lock, Scale } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const LogicMoat = () => {
  const { t } = useTranslation()
  const principles = [0, 1, 2].map((index) => ({
    title: t(`operatingPrinciples.items.${index}.title`),
    desc: t(`operatingPrinciples.items.${index}.desc`),
  }))
  const moat = [
    t('operatingPrinciples.moatItems.0'),
    t('operatingPrinciples.moatItems.1'),
    t('operatingPrinciples.moatItems.2'),
    t('operatingPrinciples.moatItems.3'),
    t('operatingPrinciples.moatItems.4'),
    t('operatingPrinciples.moatItems.5'),
  ]

  return (
    <section id="logic" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border border-white/10 bg-surface/55 p-5 md:p-10"
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Operating Principles</span>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <Scale className="w-8 h-8 text-cyan" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t('operatingPrinciples.title')}</h2>
            </div>
            <p className="text-lg text-text-muted mb-6 md:mb-10 leading-8">
              {t('operatingPrinciples.description')}
            </p>

            <div className="space-y-3 md:space-y-5">
              {principles.map((item, index) => (
                <div key={item.title} className="border-l-2 border-gold/50 bg-background/50 py-2 pl-4 md:pl-5">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gold">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{item.title}</h3>
                  <p className="text-sm leading-6 text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-5 md:p-10 border border-gold/20 bg-surface/80 backdrop-blur-md relative"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <Lock className="w-8 h-8 text-gold" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t('operatingPrinciples.moatTitle')}</h2>
            </div>
            <p className="text-lg text-text-muted mb-6 md:mb-8 leading-8">
              {t('operatingPrinciples.moatDescription')}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {moat.map((item) => (
                <div key={item} className="border border-white/10 bg-background/70 px-3 py-3 md:px-4 md:py-4 text-sm font-semibold text-text">
                  <span className="mr-2 text-gold">▸</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 md:mt-8 border border-cyan/20 bg-cyan/10 p-4 md:p-5">
              <p className="text-sm leading-7 text-text-muted">
                {t('operatingPrinciples.footer')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
