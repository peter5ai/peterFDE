import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import qrCodeImg from '/qr-code.png'

export const CTA = () => {
  const { t } = useTranslation()
  return (
    <section id="cta" className="py-32 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-hero-glow opacity-30" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            {t('cta.titlePart1')}<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
              {t('cta.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gold/80 italic font-medium max-w-3xl mx-auto">
            {t('cta.quote')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto"
        >
          {/* QR Code Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-dark opacity-50 blur rounded-2xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative w-56 h-56 bg-white rounded-2xl p-2 flex items-center justify-center overflow-hidden">
               <img src={qrCodeImg} alt={t('cta.qrAlt')} className="w-full h-full object-cover scale-[1.4]" />
            </div>
            <p className="mt-4 text-gold font-bold tracking-widest text-sm">{t('cta.scanText')}</p>
          </div>

          {/* Info Section */}
          <div className="text-center md:text-left flex-1 border border-gold/20 bg-background/50 p-8 rounded-2xl backdrop-blur-sm">
            <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-4">{t('cta.tag')}</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('cta.boxTitle')}
            </h3>
            <div className="text-gold text-xl font-display font-bold mb-4">{t('cta.boxPrice')}</div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {t('cta.boxDesc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
