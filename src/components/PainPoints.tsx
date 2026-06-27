import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const contrasts = [
  ['不卖 AI 工具清单', '找出最值得 AI 重做的业务流程'],
  ['不做一次性培训热闹', '让老板和员工会调度、会验收、会复盘'],
  ['不承诺一步全面 AI 化', '先跑高频、高痛、可衡量的小闭环'],
  ['不讲裁员故事', '把人从低价值动作转向判断、关系和异常处理'],
]

export const PainPoints = () => {
  return (
    <section id="pain-points" className="py-24 relative overflow-hidden bg-ink/35">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Positioning</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            PeterAI 不是卖工具，
            <span className="block text-gold">是帮企业重写工作方式</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-muted">
            企业 AI 改造的第一问题不是“用哪个模型”，而是“哪个流程值得被 AI 重做，谁负责验收，失败怎么接管，经验怎么沉淀”。
          </p>
        </motion.div>

        <div className="grid gap-4">
          {contrasts.map(([wrong, right], index) => (
            <motion.div
              key={wrong}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid gap-3 border border-white/10 bg-surface/70 p-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:p-5"
            >
              <div className="flex items-start gap-3 border border-red-400/15 bg-red-950/10 p-4">
                <XCircle className="mt-0.5 shrink-0 text-red-400" size={20} />
                <p className="font-semibold text-text-muted">{wrong}</p>
              </div>
              <div className="hidden h-px w-10 bg-white/20 md:block" />
              <div className="flex items-start gap-3 border border-green-400/15 bg-green-950/10 p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-green-400" size={20} />
                <p className="font-semibold text-text">{right}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
