import { motion } from 'framer-motion'
import { CheckCircle2, CircleDashed, XCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const FitCheck = () => {
  const { t } = useTranslation()
  const questions = [
    t('fitCheck.questions.0'),
    t('fitCheck.questions.1'),
    t('fitCheck.questions.2'),
    t('fitCheck.questions.3'),
    t('fitCheck.questions.4'),
  ]
  const outcomes = [
    {
      icon: CheckCircle2,
      title: t('fitCheck.outcomes.0.title'),
      desc: t('fitCheck.outcomes.0.desc'),
      tone: 'glass-icon-cyan',
    },
    {
      icon: CircleDashed,
      title: t('fitCheck.outcomes.1.title'),
      desc: t('fitCheck.outcomes.1.desc'),
      tone: 'glass-icon-gold',
    },
    {
      icon: XCircle,
      title: t('fitCheck.outcomes.2.title'),
      desc: t('fitCheck.outcomes.2.desc'),
      tone: 'glass-icon-danger',
    },
  ]

  return (
    <section id="fit-check" className="relative overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Fit Check</span>
            <h2 className="mb-4 md:mb-6 text-3xl font-bold leading-tight md:text-5xl">
              {t('fitCheck.titlePart1')}
              <span className="block text-gold">{t('fitCheck.titleHighlight')}</span>
            </h2>
            <p className="text-lg leading-8 text-text-muted">
              {t('fitCheck.description')}
            </p>
          </motion.div>

          <div className="grid gap-4 md:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-[1.5rem] p-4 md:p-6"
            >
              <div className="mb-4 md:mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold">{t('fitCheck.questionTitle')}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Before AI</span>
              </div>
              <div className="grid gap-2 md:gap-3 md:grid-cols-5">
                {questions.map((question, index) => (
                  <div key={question} className="glass-panel-soft min-h-[112px] rounded-3xl p-3 md:min-h-[132px] md:p-4">
                    <div className="glass-icon glass-icon-gold mb-3 h-11 w-11 rounded-2xl font-display text-base font-bold md:mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-sm leading-6 text-text-muted">{question}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-3 md:gap-4 md:grid-cols-3">
              {outcomes.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="glass-panel rounded-[1.5rem] p-4 md:p-5"
                  >
                    <span className={`glass-icon ${item.tone} glass-icon-md mb-3 md:mb-4`}>
                      <Icon size={24} />
                    </span>
                    <h4 className="mb-2 font-bold text-text">{item.title}</h4>
                    <p className="text-sm leading-6 text-text-muted">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
