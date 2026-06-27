import { motion } from 'framer-motion'
import { CheckCircle2, CircleDashed, XCircle } from 'lucide-react'

const questions = [
  '这个流程是否高频发生？',
  '动作是否重复，能拆成明确步骤？',
  '好坏是否有清楚评价标准？',
  '错误成本是否可控、可人工接管？',
  '运行后能否沉淀数据、规则、SOP 或异常案例？',
]

const outcomes = [
  {
    icon: CheckCircle2,
    title: '适合先做试点',
    desc: '进入正式诊断，选一个小闭环跑出业务基线、AI 方案和验收标准。',
    tone: 'text-green-400 border-green-400/20 bg-green-950/10',
  },
  {
    icon: CircleDashed,
    title: '先梳理流程',
    desc: '流程还没有被说清楚，先做访谈、问题树和人机分工草图。',
    tone: 'text-gold border-gold/25 bg-gold/5',
  },
  {
    icon: XCircle,
    title: '暂不建议启动',
    desc: '如果标准不清、风险不可控或组织没有共识，先别买工具。',
    tone: 'text-red-400 border-red-400/20 bg-red-950/10',
  },
]

export const FitCheck = () => {
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
              不是所有流程，
              <span className="block text-gold">都值得马上 AI 化</span>
            </h2>
            <p className="text-lg leading-8 text-text-muted">
              PeterAI 先判断“业务值得、组织接得住、风险可控”，再决定是否部署智能体。第一步不是选模型，而是选对第一个可验收的小闭环。
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
                <h3 className="text-xl font-bold">场景筛选五问</h3>
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
