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
    <section id="about" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-14 grid gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Why Peter</span>
            <h2 className="font-display text-3xl font-bold leading-[1.12] md:text-[2.85rem] lg:text-[3.1rem] xl:text-[3.35rem]">
              {t('about.titlePart1')}
              <br />
              <span className="whitespace-nowrap bg-gradient-to-r from-gold-light via-gold to-cyan bg-clip-text text-transparent">
                {t('about.titleHighlight')}
              </span>
            </h2>
          </div>
          <p className="self-end text-lg leading-8 text-text-muted">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid gap-3 md:gap-4 md:grid-cols-5">
          {timelineEvents.map((event, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08 }}
                className="glass-panel group min-h-[220px] rounded-[1.5rem] p-4 transition hover:-translate-y-1 hover:border-cyan/40 md:min-h-[280px] md:p-5"
              >
                <div className="mb-5 md:mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gold">{event.period}</span>
                  <span className="glass-icon glass-icon-cyan h-11 w-11 rounded-2xl">
                    <Icon size={21} />
                  </span>
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
          className="glass-panel mt-5 grid gap-3 rounded-[1.5rem] p-4 md:mt-8 md:grid-cols-4 md:gap-4 md:p-6"
        >
          {[t('about.venn.circle1'), t('about.venn.circle2'), t('about.venn.circle3'), t('about.venn.center').replace('<br/>', ' ')].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="glass-icon glass-icon-gold flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-xs font-bold">
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
