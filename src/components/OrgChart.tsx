import { motion } from 'framer-motion'
import { Brain, GraduationCap, Target, Megaphone, Briefcase, FileSpreadsheet, Scale } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const OrgChart = () => {
  const { t } = useTranslation()
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t('orgChart.titlePart1')}<span className="text-gold">{t('orgChart.titleHighlight')}</span>{t('orgChart.titlePart2')}
          </h2>
          <p className="text-xl text-text-muted italic max-w-3xl mx-auto">
            {t('orgChart.quote')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Learning Sector */}
          <div className="relative p-8 border border-white/5 rounded-2xl bg-background/50">
            <h3 className="text-2xl font-display font-bold text-center mb-12 text-white/80">{t('orgChart.learning.title')}</h3>
            
            <div className="flex flex-col items-center">
              {/* Central Brain */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-48 p-4 border border-gold/30 bg-gold/5 rounded-xl text-center relative z-10"
              >
                <Brain className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-bold text-gold mb-1">{t('orgChart.learning.brain')}</h4>
                <p className="text-xs text-text-muted">{t('orgChart.learning.brainDesc')}</p>
              </motion.div>

              {/* Connecting Lines */}
              <div className="w-px h-12 bg-gradient-to-b from-gold/30 to-white/10 relative">
                <div className="absolute top-0 left-0 w-full h-full animate-[pulse_2s_ease-in-out_Infinity] bg-gold/50 blur-[2px]" />
              </div>
              <div className="w-[80%] h-px bg-white/10" />

              {/* Agents */}
              <div className="flex justify-between w-full mt-8 gap-4">
                <motion.div whileHover={{ y: -5 }} className="flex-1 p-4 border border-white/10 bg-surface rounded-xl text-center">
                  <GraduationCap className="w-6 h-6 text-white/60 mx-auto mb-2" />
                  <h5 className="text-sm font-bold mb-1">{t('orgChart.learning.agent1')}</h5>
                  <p className="text-[10px] text-text-muted">{t('orgChart.learning.agent1Desc')}</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="flex-1 p-4 border border-white/10 bg-surface rounded-xl text-center relative">
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-px h-8 bg-white/10" />
                  <Target className="w-6 h-6 text-white/60 mx-auto mb-2" />
                  <h5 className="text-sm font-bold mb-1">{t('orgChart.learning.agent2')}</h5>
                  <p className="text-[10px] text-text-muted">{t('orgChart.learning.agent2Desc')}</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="flex-1 p-4 border border-white/10 bg-surface rounded-xl text-center">
                  <Megaphone className="w-6 h-6 text-white/60 mx-auto mb-2" />
                  <h5 className="text-sm font-bold mb-1">{t('orgChart.learning.agent3')}</h5>
                  <p className="text-[10px] text-text-muted">{t('orgChart.learning.agent3Desc')}</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* B2B Sector */}
          <div className="relative p-8 border border-white/5 rounded-2xl bg-background/50">
            <h3 className="text-2xl font-display font-bold text-center mb-12 text-white/80">{t('orgChart.b2b.title')}</h3>
            
            <div className="flex flex-col items-center">
              {/* Central Brain */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-48 p-4 border border-gold/30 bg-gold/5 rounded-xl text-center relative z-10"
              >
                <Brain className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-bold text-gold mb-1">{t('orgChart.b2b.brain')}</h4>
                <p className="text-xs text-text-muted">{t('orgChart.b2b.brainDesc')}</p>
              </motion.div>

              {/* Connecting Lines */}
              <div className="w-px h-12 bg-gradient-to-b from-gold/30 to-white/10 relative">
                <div className="absolute top-0 left-0 w-full h-full animate-[pulse_2s_ease-in-out_Infinity] bg-gold/50 blur-[2px]" delay-100 />
              </div>
              <div className="w-[80%] h-px bg-white/10" />

              {/* Agents */}
              <div className="flex justify-between w-full mt-8 gap-4">
                <motion.div whileHover={{ y: -5 }} className="flex-1 p-4 border border-white/10 bg-surface rounded-xl text-center">
                  <Briefcase className="w-6 h-6 text-white/60 mx-auto mb-2" />
                  <h5 className="text-sm font-bold mb-1">{t('orgChart.b2b.agent1')}</h5>
                  <p className="text-[10px] text-text-muted">{t('orgChart.b2b.agent1Desc')}</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="flex-1 p-4 border border-white/10 bg-surface rounded-xl text-center relative">
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-px h-8 bg-white/10" />
                  <FileSpreadsheet className="w-6 h-6 text-white/60 mx-auto mb-2" />
                  <h5 className="text-sm font-bold mb-1">{t('orgChart.b2b.agent2')}</h5>
                  <p className="text-[10px] text-text-muted">{t('orgChart.b2b.agent2Desc')}</p>
                </motion.div>
                <motion.div whileHover={{ y: -5 }} className="flex-1 p-4 border border-white/10 bg-surface rounded-xl text-center">
                  <Scale className="w-6 h-6 text-white/60 mx-auto mb-2" />
                  <h5 className="text-sm font-bold mb-1">{t('orgChart.b2b.agent3')}</h5>
                  <p className="text-[10px] text-text-muted">{t('orgChart.b2b.agent3Desc')}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
