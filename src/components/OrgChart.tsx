import { motion } from 'framer-motion'
import { Brain, Briefcase, FileSpreadsheet, GraduationCap, Megaphone, Scale, Target } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const OrgChart = () => {
  const { t } = useTranslation()
  const sectors = [
    {
      title: t('orgChart.learning.title'),
      brain: t('orgChart.learning.brain'),
      brainDesc: t('orgChart.learning.brainDesc'),
      agents: [
        [GraduationCap, t('orgChart.learning.agent1'), t('orgChart.learning.agent1Desc')],
        [Target, t('orgChart.learning.agent2'), t('orgChart.learning.agent2Desc')],
        [Megaphone, t('orgChart.learning.agent3'), t('orgChart.learning.agent3Desc')],
      ],
    },
    {
      title: t('orgChart.b2b.title'),
      brain: t('orgChart.b2b.brain'),
      brainDesc: t('orgChart.b2b.brainDesc'),
      agents: [
        [Briefcase, t('orgChart.b2b.agent1'), t('orgChart.b2b.agent1Desc')],
        [FileSpreadsheet, t('orgChart.b2b.agent2'), t('orgChart.b2b.agent2Desc')],
        [Scale, t('orgChart.b2b.agent3'), t('orgChart.b2b.agent3Desc')],
      ],
    },
  ]

  return (
    <section id="architecture" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 max-w-4xl"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Method Base</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight">
            {t('methodBase.titlePart1')}
            <span className="block text-gold">{t('methodBase.titleHighlight')}</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted leading-8">
            {t('methodBase.description')}
          </p>
        </motion.div>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          {sectors.map((sector, sectorIndex) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectorIndex * 0.1 }}
              className="border border-white/10 bg-surface/65 p-4 md:p-8"
            >
              <div className="mb-5 md:mb-8 flex items-start justify-between gap-4 border-b border-white/10 pb-4 md:pb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold">{sector.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">Knowledge Base + Agent Team</p>
                </div>
                <Brain className="shrink-0 text-gold" size={32} />
              </div>

              <div className="mb-4 md:mb-6 border border-gold/25 bg-gold/5 p-4 md:p-5">
                <div className="mb-2 text-sm font-bold uppercase tracking-widest text-gold">{sector.brain}</div>
                <p className="text-sm leading-6 text-text-muted">{sector.brainDesc}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {sector.agents.map(([Icon, title, desc]) => (
                  <div key={title as string} className="min-h-[128px] md:min-h-[150px] border border-white/10 bg-background/70 p-3 md:p-4">
                    <Icon className="mb-3 md:mb-4 text-cyan" size={24} />
                    <h4 className="mb-2 text-sm font-bold leading-snug">{title as string}</h4>
                    <p className="text-xs leading-5 text-text-muted">{desc as string}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
