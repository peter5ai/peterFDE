import { motion } from 'framer-motion'
import { ClipboardCheck, GitBranch, GraduationCap, Repeat2, Settings2, Wrench } from 'lucide-react'

const steps = [
  {
    icon: ClipboardCheck,
    title: '诊断',
    input: '老板目标、员工痛点、现有表格和流程',
    output: '流程问题树 + 试点优先级',
  },
  {
    icon: GitBranch,
    title: '重构',
    input: '输入、动作、标准、责任和输出',
    output: '人机分工图 + 验收口径',
  },
  {
    icon: Wrench,
    title: '部署',
    input: '知识库、工具、表单、工作流和权限',
    output: '可运行的 Agent / Workflow',
  },
  {
    icon: GraduationCap,
    title: '培训',
    input: '老板、中层、一线的真实使用场景',
    output: '调度者、审核者和接管机制',
  },
  {
    icon: Settings2,
    title: '运维',
    input: '错误、人工接管、客户反馈和成本',
    output: '异常案例库 + SOP 修订',
  },
  {
    icon: Repeat2,
    title: '复制',
    input: '已验证的小闭环和复盘样本',
    output: '企业自己的 AI 工作系统',
  },
]

export const DeliveryLoop = () => {
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
            交付不是演示 Demo，
            <span className="block text-gold">而是把流程跑成系统</span>
          </h2>
          <p className="text-lg leading-8 text-text-muted">
            PeterAI 的 To B 交付围绕“诊断、重构、部署、培训、运维、复制”展开。每一步都要留下可复用资产，而不是只留下一个工具账号。
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
                className="min-h-[210px] md:min-h-[250px] border border-white/10 bg-surface/70 p-4 md:p-6 transition hover:border-cyan/35 hover:bg-surfaceLight/70"
              >
                <div className="mb-5 md:mb-8 flex items-center justify-between">
                  <Icon className="text-cyan" size={28} />
                  <span className="font-display text-3xl font-bold text-gold/80">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mb-4 md:mb-5 text-2xl font-bold">{step.title}</h3>
                <div className="space-y-3 md:space-y-4 text-sm leading-6">
                  <p className="text-text-muted">
                    <span className="mr-2 text-gold">输入</span>
                    {step.input}
                  </p>
                  <p className="text-text-muted">
                    <span className="mr-2 text-cyan">输出</span>
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
