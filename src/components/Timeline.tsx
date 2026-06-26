import { motion } from 'framer-motion'
import { Brain, Building2, Cpu, LineChart, Network } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const icons = [Brain, Building2, LineChart, Network, Cpu]

export const Timeline = () => {
  const { t } = useTranslation()

  const timelineEvents = [
    {
      period: t('about.timeline.event1.period'),
      title: t('about.timeline.event1.title'),
      description: t('about.timeline.event1.desc')
    },
    {
      period: t('about.timeline.event2.period'),
      title: t('about.timeline.event2.title'),
      description: t('about.timeline.event2.desc')
    },
    {
      period: t('about.timeline.event3.period'),
      title: t('about.timeline.event3.title'),
      description: t('about.timeline.event3.desc')
    },
    {
      period: t('about.timeline.event4.period'),
      title: t('about.timeline.event4.title'),
      description: t('about.timeline.event4.desc')
    },
    {
      period: t('about.timeline.event5.period'),
      title: t('about.timeline.event5.title'),
      description: t('about.timeline.event5.desc')
    }
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Why Peter</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              {t('about.titlePart1')}
              <br />
              <span className="text-gold">{t('about.titleHighlight')}</span>
            </h2>
          </div>
          <p className="self-end text-lg leading-8 text-text-muted">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-5">
          {timelineEvents.map((event, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                className="group min-h-[280px] border border-white/10 bg-surface/65 p-5 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-surfaceLight/80"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gold">{event.period}</span>
                  <Icon className="text-cyan/70 group-hover:text-cyan" size={22} />
                </div>
                <h3 className="mb-4 text-xl font-display font-bold leading-snug">{event.title}</h3>
                <p className="text-sm leading-7 text-text-muted">{event.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4 border border-gold/20 bg-gold/5 p-6 md:grid-cols-4"
        >
          {[t('about.venn.circle1'), t('about.venn.circle2'), t('about.venn.circle3'), t('about.venn.center').replace('<br/>', ' ')].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold/30 text-xs font-bold text-gold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-sm font-semibold text-text">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
