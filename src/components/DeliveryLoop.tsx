import { motion } from 'framer-motion'
import { ClipboardCheck, GitBranch, GraduationCap, Repeat2, Settings2, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const DeliveryLoop = () => {
  const { t } = useTranslation()
  const icons = [ClipboardCheck, GitBranch, Wrench, GraduationCap, Settings2, Repeat2]
  const steps = icons.map((icon, index) => ({
    icon,
    title: t(`delivery.steps.${index}.title`),
    input: t(`delivery.steps.${index}.input`),
    output: t(`delivery.steps.${index}.output`),
  }))

  return (
    <section id="delivery" className="relative overflow-hidden bg-ink/35 py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 max-w-4xl"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Delivery Loop</span>
          <h2 className="mb-4 md:mb-6 text-3xl font-bold leading-tight md:text-5xl">
            {t('delivery.titlePart1')}
            <span className="block text-gold">{t('delivery.titleHighlight')}</span>
          </h2>
          <p className="text-lg leading-8 text-text-muted">
            {t('delivery.description')}
          </p>
        </motion.div>

        <div className="grid gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-panel min-h-[210px] rounded-[1.5rem] p-4 transition hover:-translate-y-1 hover:border-cyan/35 md:min-h-[250px] md:p-6"
              >
                <div className="mb-5 md:mb-8 flex items-center justify-between">
                  <span className="glass-icon glass-icon-cyan glass-icon-lg">
                    <Icon size={28} />
                  </span>
                  <span className="font-display text-3xl font-bold text-gold/80">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-4 md:mb-5 text-2xl font-bold">{step.title}</h3>
                <div className="space-y-3 md:space-y-4 text-sm leading-6">
                  <p className="text-text-muted">
                    <span className="mr-2 text-gold">{t('delivery.inputLabel')}</span>
                    {step.input}
                  </p>
                  <p className="text-text-muted">
                    <span className="mr-2 text-cyan">{t('delivery.outputLabel')}</span>
                    {step.output}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
