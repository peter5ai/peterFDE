import { motion } from 'framer-motion'
import { Scale, Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const LogicMoat = () => {
  const { t } = useTranslation()
  return (
    <section id="logic" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 relative z-10">
          {/* Logic Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Principle</span>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-8 h-8 text-cyan" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t('logicMoat.logicTitle')}</h2>
            </div>
            <p className="text-xl text-text-muted mb-10">
              {t('logicMoat.logicSubtitle1')}<br />
              <span className="text-white">{t('logicMoat.logicSubtitle2')}</span>
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-cyan/30 bg-surface/35 py-1 pl-6">
                <h3 className="text-lg font-bold mb-2 text-white/90">{t('logicMoat.logicItems.item1.title')}</h3>
                <p className="text-text-muted">{t('logicMoat.logicItems.item1.desc')}</p>
              </div>
              <div className="border-l-2 border-gold/50 bg-surface/35 py-1 pl-6">
                <h3 className="text-lg font-bold mb-2 text-white/90">{t('logicMoat.logicItems.item2.title')}</h3>
                <p className="text-text-muted">
                  {t('logicMoat.logicItems.item2.descPrefix')} <span className="text-gold font-medium">{t('logicMoat.logicItems.item2.descHighlight')}</span>{t('logicMoat.logicItems.item2.descSuffix')}
                </p>
              </div>
              <div className="border-l-2 border-gold bg-surface/35 py-1 pl-6">
                <h3 className="text-lg font-bold mb-2 text-white/90">{t('logicMoat.logicItems.item3.title')}</h3>
                <p className="text-text-muted">{t('logicMoat.logicItems.item3.desc')}</p>
              </div>
            </div>
          </motion.div>

          {/* Moat Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border border-gold/20 bg-surface/80 backdrop-blur-md relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-8 h-8 text-gold" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">{t('logicMoat.moatTitle')}</h2>
            </div>
            <p className="text-xl text-gold mb-10">
              {t('logicMoat.moatSubtitle')}
            </p>

            <div className="space-y-6">
              <div className="p-4 bg-background/70 border border-white/10">
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">{t('logicMoat.moatItems.item1.title')}</h3>
                <p className="text-text-muted text-sm line-through decoration-white/20">{t('logicMoat.moatItems.item1.desc')}</p>
              </div>
              <div className="p-6 bg-gold/10 border border-gold/30">
                <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-2">{t('logicMoat.moatItems.item2.title')}</h3>
                <p className="text-text leading-relaxed">
                  {t('logicMoat.moatItems.item2.descPrefix')}<span className="text-gold font-bold mx-1">{t('logicMoat.moatItems.item2.descHighlight1')}</span>{t('logicMoat.moatItems.item2.descMiddle')}<span className="text-gold font-bold mx-1">{t('logicMoat.moatItems.item2.descHighlight2')}</span>{t('logicMoat.moatItems.item2.descSuffix')}
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-text-muted italic">
                  <strong className="text-white/80 not-italic">{t('logicMoat.moatItems.item3.title')}：</strong> {t('logicMoat.moatItems.item3.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
