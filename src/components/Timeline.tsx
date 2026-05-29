import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

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
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t('about.titlePart1')}<br className="hidden md:block"/>
            <span className="text-gold">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative border-l border-white/10 ml-4 md:ml-0">
            {timelineEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="mb-12 pl-8 relative group"
              >
                <span className="absolute w-3 h-3 bg-surface border border-gold rounded-full -left-[6.5px] top-2 group-hover:bg-gold transition-colors" />
                <span className="text-gold text-sm font-semibold tracking-wider uppercase block mb-2">{event.period}</span>
                <h3 className="text-xl font-display font-bold mb-2">{event.title}</h3>
                <p className="text-text-muted leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Venn Diagram Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-hero-glow opacity-50" />
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Circle 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border border-gold/40 bg-gold/5 backdrop-blur-sm flex items-start justify-center pt-8 mix-blend-screen transition-transform hover:scale-105 cursor-default">
                <span className="text-sm font-semibold text-gold-light">{t('about.venn.circle1')}</span>
              </div>
              {/* Circle 2 */}
              <div className="absolute bottom-10 left-4 w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-end justify-start pb-12 pl-6 mix-blend-screen transition-transform hover:scale-105 cursor-default">
                <span className="text-sm font-semibold text-text-muted">{t('about.venn.circle2')}</span>
              </div>
              {/* Circle 3 */}
              <div className="absolute bottom-10 right-4 w-48 h-48 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-end justify-end pb-12 pr-6 mix-blend-screen transition-transform hover:scale-105 cursor-default">
                <span className="text-sm font-semibold text-text-muted">{t('about.venn.circle3')}</span>
              </div>
              
              {/* Intersection */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="bg-gold text-background font-bold text-sm px-4 py-2 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: t('about.venn.center') }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
