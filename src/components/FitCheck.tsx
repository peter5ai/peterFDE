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
      tone: 'text-green-400 border-green-400/20 bg-green-950/10',
    },
    {
      icon: CircleDashed,
      title: t('fitCheck.outcomes.1.title'),
      desc: t('fitCheck.outcomes.1.desc'),
      tone: 'text-gold border-gold/25 bg-gold/5',
    },
    {
      icon: XCircle,
      title: t('fitCheck.outcomes.2.title'),
      desc: t('fitCheck.outcomes.2.desc'),
      tone: 'text-red-400 border-red-400/20 bg-red-950/10',
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
              className="border border-white/10 bg-surface/70 p-4 md:p-6"
            >
              <div className="mb-4 md:mb-5 flex items-center justify-between">
                <h3 className="text-xl font-bold">{t('fitCheck.questionTitle')}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-gold">Before AI</span>
              </div>
              <div className="grid gap-2 md:gap-3 md:grid-cols-5">
                {questions.map((question, index) => (
                  <div key={question} className="min-h-[112px] md:min-h-[132px] border border-white/10 bg-background/65 p-3 md:p-4">
                    <div className="mb-3 md:mb-4 font-display text-2xl font-bold text-gold">{String(index + 1).padStart(2, '0')}</div>
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
                    className={`border p-4 md:p-5 ${item.tone}`}
                  >
                    <Icon className="mb-3 md:mb-4" size={24} />
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
