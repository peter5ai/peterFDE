import { motion } from 'framer-motion'
import { Lock, Scale } from 'lucide-react'

const principles = [
  {
    title: 'AI 替代动作，不替代责任',
    desc: '目标、审核、纠错、追责和高风险判断必须有人负责，不能把责任甩给模型。',
  },
  {
    title: '先定义验收，再配置工具',
    desc: '没有人工基线、质量标准、错误率、接管机制和成本口径，Demo 再顺也不算交付。',
  },
  {
    title: '失败必须进入知识复利',
    desc: '每次误判、越权、返工和客户反馈，都要沉淀为异常案例、规则修订和下一轮测试样本。',
  },
]

const moat = [
  '流程诊断表',
  '场景筛选五问',
  '交付验收清单',
  '异常案例库',
  '企业知识库',
  '可复用 Skill / SOP',
]

export const LogicMoat = () => {
  return (
    <section id="logic" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border border-white/10 bg-surface/55 p-8 md:p-10"
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Operating Principles</span>
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-8 h-8 text-cyan" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">PeterAI 的交付原则</h2>
            </div>
            <p className="text-lg text-text-muted mb-10 leading-8">
              企业 AI 改造不是把工具塞进组织，而是重新设计人机分工、责任边界和复盘机制。
            </p>

            <div className="space-y-5">
              {principles.map((item, index) => (
                <div key={item.title} className="border-l-2 border-gold/50 bg-background/50 py-2 pl-5">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gold">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{item.title}</h3>
                  <p className="text-sm leading-6 text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border border-gold/20 bg-surface/80 backdrop-blur-md relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock className="w-8 h-8 text-gold" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">真正的护城河</h2>
            </div>
            <p className="text-lg text-text-muted mb-8 leading-8">
              模型会变，工具会降价。PeterAI 要沉淀的是企业现场 Know-How：能被复用、验证和持续修订的工作系统。
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {moat.map((item) => (
                <div key={item} className="border border-white/10 bg-background/70 px-4 py-4 text-sm font-semibold text-text">
                  <span className="mr-2 text-gold">▸</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 border border-cyan/20 bg-cyan/10 p-5">
              <p className="text-sm leading-7 text-text-muted">
                目标不是让客户依赖 PeterAI 的人力，而是让客户拥有自己的 AI 工作法；PeterAI 则把每次交付升级为下一次交付的底座。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
