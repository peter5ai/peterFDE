import { motion } from 'framer-motion'
import { MessageCircle, ScanLine } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import qrCodeImg from '/qr-code.png'

export const CTA = () => {
  const { t } = useTranslation()
  const checks = ['最耗人的一个流程', '现在谁在做、怎么做', '希望改善的业务指标', '哪些结果必须人工审核']

  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden bg-hero-glow">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid items-stretch gap-4 md:gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-surface/75 p-6 md:p-12"
          >
            <span className="mb-4 md:mb-5 inline-flex items-center gap-2 border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan">
              <MessageCircle size={14} />
              {t('cta.tag')}
            </span>
            <h2 className="mb-4 md:mb-6 text-4xl md:text-6xl font-display font-bold leading-tight">
              扫码前，
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">
                先想清楚一个流程
              </span>
            </h2>
            <p className="mb-6 md:mb-8 max-w-3xl text-lg md:text-xl text-text-muted leading-8">
              不需要先懂 AI。你只要告诉我，公司里哪个流程最耗人、最重复、最容易出错、最影响订单。我负责帮你拆流程、配智能体、跑试点、看数据。
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {checks.map((item) => (
                <div key={item} className="border border-white/10 bg-background/60 px-4 py-3 text-sm text-text-muted">
                  <span className="mr-2 text-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="border border-gold/25 bg-gold/5 p-5 md:p-8"
          >
            <div className="mb-5 md:mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{t('cta.boxTitle')}</h3>
                <div className="mt-2 text-xl font-display font-bold text-gold">{t('cta.boxPrice')}</div>
              </div>
              <ScanLine className="shrink-0 text-cyan" size={34} />
            </div>

            <p className="mb-5 md:mb-6 text-sm leading-7 text-text-muted">
              这不是工具推荐会，而是一次流程诊断：判断是否值得启动、先做哪个小闭环、怎么验收、失败后如何人工接管和沉淀异常案例。
            </p>

            <div className="mx-auto aspect-square w-full max-w-[230px] overflow-hidden bg-white md:max-w-[252px]">
              <img src={qrCodeImg} alt={t('cta.qrAlt')} className="h-full w-full scale-[1.45] object-cover object-[50%_58%]" />
            </div>
            <p className="mt-4 md:mt-5 text-center text-sm font-bold tracking-[0.22em] text-gold">{t('cta.scanText')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
