import { motion } from 'framer-motion'
import { ArrowRight, Database, FileCheck2, Workflow } from 'lucide-react'

const cases = [
  {
    title: '灯具五金加工企业',
    subtitle: '从 Excel 牢笼到老板决策系统',
    before: '报价、供应链对齐和订单跟进高度依赖人工表格，老板和二把手被重复确认拖住。',
    action: '拆解报价输入、供应链动作、责任人和审核标准，搭建 CEO 战略决策分身与贸易平台 Agent 部门。',
    asset: '报价 SOP、供应链协同规则、客户开发和竞品分析的复盘字段。',
    boundary: '第一阶段不追求全自动报价，保留关键价格和大客户策略的人工审核。',
    featured: true,
  },
  {
    title: '传统财税公司',
    subtitle: '把老板从高级客服里解放出来',
    before: '老板持续回答重复政策、合规和信用修复问题，客户服务经验没有沉淀。',
    action: '搭建垂直知识库和问答助手，把常见咨询、材料清单和风险提示结构化。',
    asset: '政策解释库、客户问题分类、人工升级规则和服务边界说明。',
    boundary: '涉税判断和高风险合规结论必须由专业人员复核，不让 AI 替代责任。',
    featured: false,
  },
  {
    title: '拍摄 IP 自媒体',
    subtitle: '从体力型团队到一人公司系统',
    before: '拍摄和交付靠人肉经验，利润薄，难以复制高质量选题和传播判断。',
    action: '梳理拍摄 SOP、品牌策划逻辑和内容传播判断，转成可调用知识库。',
    asset: '拍摄流程模板、品牌定位卡、选题评估规则和复盘样本。',
    boundary: '创意判断、客户关系和最终审美仍由人负责，AI 负责辅助生成和校对。',
    featured: false,
  },
]

const labels = [
  ['改造前', 'before', Workflow],
  ['部署动作', 'action', ArrowRight],
  ['留下资产', 'asset', Database],
  ['责任边界', 'boundary', FileCheck2],
] as const

export const Cases = () => {
  return (
    <section id="cases" className="py-24 relative bg-ink/35">
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 max-w-4xl"
        >
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-cyan">Proof Chain</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            案例不讲神话，
            <span className="block text-gold">只讲流程、资产和边界</span>
          </h2>
          <p className="text-lg leading-8 text-text-muted">
            高客单价客户怕的不是听不懂 AI，而是怕买错。每个案例都必须回答：原来卡在哪里，PeterAI 做了什么，留下了什么资产，哪些地方仍由人负责。
          </p>
        </motion.div>

        <div className="grid gap-5">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`border p-6 md:p-8 transition hover:-translate-y-1 ${
                item.featured ? 'border-gold/30 bg-gold/5 hover:border-gold/60' : 'border-white/10 bg-surface/80 hover:border-cyan/35'
              }`}
            >
              <div className="mb-8 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  {item.featured && (
                    <span className="mb-4 inline-block border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold">
                      核心案例
                    </span>
                  )}
                  <h3 className="mb-2 text-2xl font-display font-bold text-white/90">{item.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan">{item.subtitle}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  {labels.map(([label, key, Icon]) => (
                    <div key={key} className="border border-white/10 bg-background/60 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{label}</span>
                        <Icon size={18} className={key === 'boundary' ? 'text-gold' : 'text-cyan'} />
                      </div>
                      <p className="text-sm leading-6 text-text-muted">{item[key]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
