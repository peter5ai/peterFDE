import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import profileImg from '/profile.png'

export const HeroSection = () => {
  const { t } = useTranslation()
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 bg-[url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract%20dark%20luxury%20geometric%20shapes%20subtle%20gold%20accent%20minimalist&image_size=landscape_16_9')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-br from-gold-light via-gold to-gold-dark overflow-hidden shadow-2xl shadow-gold/10">
            <img 
              src={profileImg} 
              alt="温泳扬 (Peter)" 
              className="w-full h-full object-cover rounded-full bg-surface"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold mb-6 block">
            {t('hero.subtitle')}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
        >
          {t('hero.titlePart1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
            {t('hero.titleHighlight')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('hero.descriptionLine1')}<br className="hidden md:block" />
          {t('hero.descriptionLine2')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <div className="text-left border-l-2 border-gold/30 pl-4">
            <p className="font-display font-semibold text-lg text-text">{t('hero.nameTitle')}</p>
            <p className="text-sm text-text-muted">{t('hero.jobTitle')}</p>
          </div>
          <a
            href="#about"
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-gold hover:text-gold transition-colors ml-4"
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
