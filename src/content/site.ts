import { englishPages } from './site.en'

export const SITE_ORIGIN = 'https://www.peterai.cloud'
export const COMPANY_NAME = '中山市彼得人工智能科技有限公司'
export const BRAND_NAME = 'PeterAI'

export type FaqItem = {
  question: string
  answer: string
}

export type PageSection = {
  eyebrow?: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type EvidenceItem = {
  title: string
  context: string
  action: string
  asset: string
  boundary: string
}

export type PageKind = 'home' | 'service' | 'industry' | 'cases' | 'faq' | 'about' | 'contact'

export type PageData = {
  path: string
  kind: PageKind
  title: string
  metaTitle: string
  description: string
  eyebrow: string
  summary: string
  keyFacts?: Array<{ label: string; value: string }>
  sections?: PageSection[]
  faqs?: FaqItem[]
  evidence?: EvidenceItem[]
  related?: string[]
}

export const services = [
  {
    path: '/ai-consulting/',
    title: '企业 AI 咨询',
    description: '从经营目标和真实流程出发，找出最值得 AI 重做的第一个小闭环。',
  },
  {
    path: '/ai-agent-implementation/',
    title: 'AI Agent 与工作流落地',
    description: '把输入、动作、标准、权限、人工接管和验收写进可运行的工作流。',
  },
  {
    path: '/enterprise-knowledge-base/',
    title: '企业知识库建设',
    description: '把散落在人员、文档和项目里的经验，整理成可追溯、可调用、可修订的企业资产。',
  },
] as const

export const evidenceItems: EvidenceItem[] = [
  {
    title: '灯具五金加工企业',
    context: '报价、供应链对齐和订单跟进依赖人工表格，老板与二把手被重复确认拖住。',
    action: '围绕报价输入、供应链动作、责任人和审核标准拆解流程，并规划决策辅助与贸易协同智能体。',
    asset: '报价 SOP、供应链协同规则、客户开发与竞品分析的复盘字段。',
    boundary: '关键价格与大客户策略保留人工审核；本页不披露客户身份，也不宣称量化经营结果。',
  },
  {
    title: '传统财税服务场景',
    context: '老板持续回答重复的政策、合规和信用修复问题，服务经验分散在个人手里。',
    action: '整理常见咨询、材料清单、风险提示和人工升级条件，形成垂直知识库与问答流程。',
    asset: '政策解释库、客户问题分类、人工升级规则和服务边界说明。',
    boundary: '涉税判断和高风险合规结论必须由专业人员复核，AI 不承担专业责任。',
  },
  {
    title: '拍摄与 IP 内容团队',
    context: '拍摄和交付依赖个人经验，选题、品牌判断与复盘难以稳定复制。',
    action: '梳理拍摄 SOP、品牌策划逻辑与内容判断标准，转成团队可调用的知识结构。',
    asset: '拍摄流程模板、品牌定位卡、选题评估规则和复盘样本。',
    boundary: '创意判断、客户关系与最终审美仍由人负责，AI 只辅助生成、检索和校对。',
  },
]

const commonServiceFaqs: FaqItem[] = [
  {
    question: 'PeterAI 会直接推荐某个 AI 工具吗？',
    answer: '不会把工具清单当作诊断结果。先确认业务目标、流程基线、评价标准与责任人，再选择满足约束的模型、知识库或工作流工具。',
  },
  {
    question: '多久能看到第一个可用结果？',
    answer: '取决于流程是否清楚、数据是否可用以及谁负责验收。PeterAI 会先选择范围小、频率高、错误成本可控的场景，先跑真实工作流，再决定是否扩大。',
  },
  {
    question: '项目结束后资产归谁？',
    answer: '项目形成的客户数据、知识库、SOP、验收口径和工作流配置应由客户掌握。具体权限、工具账号和交接范围在项目启动时确认。',
  },
]

export const pages: PageData[] = [
  {
    path: '/',
    kind: 'home',
    title: 'PeterAI 企业 AI 咨询与智能体落地',
    metaTitle: 'PeterAI｜企业 AI 咨询、Agent 落地与知识库建设',
    description: 'PeterAI 面向中小企业 CEO，提供企业 AI 咨询、AI Agent 与工作流落地、企业知识库建设和业务流程智能化服务。',
    eyebrow: COMPANY_NAME,
    summary: '帮助中小企业 CEO 找到阻碍增长、利润或交付质量的具体流程，把它改造成可执行、可验收、可复制的工作系统。',
    keyFacts: [
      { label: '服务对象', value: '中小企业 CEO 与管理团队' },
      { label: '服务地点', value: '广东中山，可协商异地项目' },
      { label: '第一步', value: '从一个真实流程诊断开始' },
      { label: '责任边界', value: 'AI 替代动作，不替代责任' },
    ],
    related: services.map((item) => item.path),
  },
  {
    path: '/ai-consulting/',
    kind: 'service',
    title: '企业 AI 咨询：先选对流程，再决定用什么 AI',
    metaTitle: '企业 AI 咨询服务｜PeterAI',
    description: 'PeterAI 企业 AI 咨询从经营目标、流程基线、责任人和验收标准出发，筛选可衡量、风险可控的 AI 试点。',
    eyebrow: 'Enterprise AI Consulting',
    summary: '适合知道 AI 重要，却还没有把“公司该从哪里开始”说清楚的老板和管理团队。',
    keyFacts: [
      { label: '输入', value: '老板目标、员工痛点、现有流程与资料' },
      { label: '输出', value: '问题树、试点优先级、人机分工草图' },
      { label: '负责人', value: '企业一把手或明确授权的业务负责人' },
    ],
    sections: [
      {
        eyebrow: '适用场景',
        title: '什么时候应该先做咨询诊断',
        paragraphs: ['公司已经买过工具或做过培训，但真实流程没有改变；不同部门都想做 AI，却没有统一优先级；老板知道问题很多，但无法判断哪个场景最值得先试。'],
        bullets: ['流程高频发生，且重复动作占比明显', '好坏有可说明的标准，能建立人工基线', '错误成本可控，并能设置人工接管', '业务负责人愿意共同提供数据、判断和验收'],
      },
      {
        eyebrow: '工作方式',
        title: '诊断不是开一场 AI 课',
        paragraphs: ['PeterAI 访谈老板和一线人员，读取完成诊断所需的最小资料，把目标、输入、动作、标准、责任、异常和输出画成同一张流程图。', '诊断结论会区分“适合马上试点”“需要先梳理流程”和“暂不建议启动”，避免为了使用 AI 而制造项目。'],
      },
      {
        eyebrow: '验收',
        title: '咨询阶段要留下什么',
        paragraphs: ['最小交付不是一份宏观趋势 PPT，而是一组可以继续进入试点的工作资产。'],
        bullets: ['业务问题树与现状基线', '场景优先级及不做清单', '人机分工与权限草图', '验收指标、异常处理和复盘节奏'],
      },
    ],
    faqs: commonServiceFaqs,
    related: ['/ai-agent-implementation/', '/enterprise-knowledge-base/', '/faq/'],
  },
  {
    path: '/ai-agent-implementation/',
    kind: 'service',
    title: 'AI Agent 落地：让智能体进入真实工作流',
    metaTitle: 'AI Agent 与工作流落地服务｜PeterAI',
    description: 'PeterAI 将业务输入、动作、知识、工具、权限、人工审核与异常接管组合成可运行、可验收的 AI Agent 工作流。',
    eyebrow: 'Agent Implementation',
    summary: '不是做一个聊天演示，而是让智能体在明确权限内处理真实任务，并留下可追踪的结果。',
    keyFacts: [
      { label: '前置条件', value: '流程、输入与评价标准已基本明确' },
      { label: '交付对象', value: '一个可运行的小闭环' },
      { label: '必要机制', value: '权限、审核、接管、日志与复盘' },
    ],
    sections: [
      {
        eyebrow: '架构',
        title: '一个能工作的 Agent 包含什么',
        paragraphs: ['模型只是其中一部分。可交付的智能体还需要稳定输入、可调用知识、工具接口、动作规则、输出格式和明确的人工责任。'],
        bullets: ['输入表单或业务系统触发条件', '知识库与可引用来源', '工具调用与最小权限', '输出标准、审核节点和失败回退'],
      },
      {
        eyebrow: '实施流程',
        title: '从样本到真实运行',
        paragraphs: ['先用历史样本建立基线和测试集，再配置最小工作流。试点阶段记录正确结果、误判、越权、返工和人工接管，只有达到约定验收口径后才扩大范围。'],
      },
      {
        eyebrow: '交接',
        title: '客户需要真正掌握系统',
        paragraphs: ['PeterAI 会把调度、审核、接管和复盘职责交给明确人员，并交付必要的配置说明、SOP 与异常案例。目标不是让客户长期依赖外部人力。'],
      },
    ],
    faqs: commonServiceFaqs,
    related: ['/ai-consulting/', '/enterprise-knowledge-base/', '/case-studies/'],
  },
  {
    path: '/enterprise-knowledge-base/',
    kind: 'service',
    title: '企业知识库建设：让经验可追溯、可调用、可修订',
    metaTitle: '企业知识库建设服务｜PeterAI',
    description: 'PeterAI 帮助企业整理文档、流程、案例、评价标准与异常经验，建设带来源、权限和维护机制的企业知识库。',
    eyebrow: 'Enterprise Knowledge Base',
    summary: '把散落在老板、骨干、聊天记录和文档里的经验，变成团队与 AI 都能稳定调用的企业资产。',
    keyFacts: [
      { label: '不是', value: '把所有文件一次性丢给模型' },
      { label: '核心', value: '来源、结构、权限、更新与调用效果' },
      { label: '验收', value: '真实问题能找到可追溯的正确答案' },
    ],
    sections: [
      {
        eyebrow: '建设对象',
        title: '知识库不等于文件仓库',
        paragraphs: ['企业需要区分稳定事实、流程规则、方法判断、项目样本和异常案例。每类知识的来源等级、更新责任和可见权限不同，不能只靠向量检索解决。'],
      },
      {
        eyebrow: '流程',
        title: '从盘点到可用',
        paragraphs: ['先确定高频调用问题，再盘点最小必要资料，建立分类、来源、版本和权限规则。随后用真实问答测试检索与回答，错误进入修订队列。'],
        bullets: ['知识地图与高频问题清单', '来源等级、更新时间与责任人', '结构化页面、SOP 与案例模板', '检索测试集、失败样本与维护节奏'],
      },
      {
        eyebrow: '边界',
        title: '哪些资料不应该默认进入知识库',
        paragraphs: ['密钥、Cookie、未获授权的客户材料、非必要个人信息和高风险敏感数据不应进入通用知识库。访问权限应按实际工作需要最小化。'],
      },
    ],
    faqs: commonServiceFaqs,
    related: ['/ai-consulting/', '/ai-agent-implementation/', '/faq/'],
  },
  {
    path: '/case-studies/',
    kind: 'cases',
    title: '脱敏项目样本：看流程、动作、资产与责任边界',
    metaTitle: '企业 AI 脱敏项目样本｜PeterAI',
    description: 'PeterAI 脱敏项目样本按业务场景、部署动作、沉淀资产与人工责任边界呈现，不使用虚构客户背书和效果数据。',
    eyebrow: 'Evidence Library',
    summary: '案例的价值不是讲一个成功神话，而是帮助你判断：PeterAI 在现场具体看什么、做什么、留下什么，哪些责任仍由人承担。',
    keyFacts: [
      { label: '资料性质', value: '依据现有项目记录整理的脱敏样本' },
      { label: '不代表', value: '公开客户背书或普遍效果承诺' },
      { label: '阅读重点', value: '场景、动作、资产、边界' },
    ],
    evidence: evidenceItems,
    related: ['/ai-consulting/', '/ai-agent-implementation/', '/contact/'],
  },
  {
    path: '/faq/',
    kind: 'faq',
    title: '企业做 AI 前，老板最常问的问题',
    metaTitle: '企业 AI 咨询常见问题｜PeterAI',
    description: 'PeterAI 回答企业 AI 咨询、Agent 落地、知识库、数据权限、验收、责任边界与合作方式等常见问题。',
    eyebrow: 'Official Answers',
    summary: '这些回答用于说明 PeterAI 的稳定服务定义与边界。具体项目仍需结合企业流程、数据和风险单独诊断。',
    faqs: [
      ...commonServiceFaqs,
      { question: '什么样的企业适合先做 AI 试点？', answer: '至少有一个高频、重复、标准相对清楚、错误成本可控的流程，并且有业务负责人愿意提供样本、参与判断和验收。' },
      { question: 'PeterAI 是否承诺降本、增收或裁员结果？', answer: '不承诺经营结果，也不以裁员作为默认目标。项目会约定可观测的流程指标，但客户仍需承担数据、决策、执行与业务结果责任。' },
      { question: '没有整理好的数据还能开始吗？', answer: '可以先做诊断，但是否进入部署取决于最小数据是否可获得。资料混乱本身可能说明第一步应是流程和知识整理，而不是直接搭智能体。' },
      { question: '如何处理 AI 出错？', answer: '在上线前定义高风险动作、人工审核点、失败回退和接管人员。运行中的误判、越权和返工必须记录，并进入规则、SOP 和测试集修订。' },
      { question: '可以只做培训吗？', answer: '可以讨论面向具体岗位和流程的训练，但 PeterAI 不把一次通用工具课当作企业 AI 改造完成。培训需要回到真实任务、评价标准和后续使用。' },
      { question: '如何开始第一次沟通？', answer: '准备一个最耗人、最重复、最容易出错或最影响订单的流程，说明现在谁在做、使用什么资料、什么结果算好，以及哪些动作必须人工审核。' },
    ],
    related: ['/ai-consulting/', '/contact/', '/case-studies/'],
  },
  {
    path: '/about/',
    kind: 'about',
    title: '关于 PeterAI：懂业务现场的企业 AI 落地伙伴',
    metaTitle: '关于 PeterAI 与创始人 Peter｜中山企业 AI 咨询',
    description: '了解中山市彼得人工智能科技有限公司、创始人 Peter 的跨领域经历、企业 AI 落地方法与合作责任边界。',
    eyebrow: 'About PeterAI',
    summary: `${COMPANY_NAME}立足广东中山，围绕企业真实流程提供 AI 咨询、智能体落地与知识库建设服务。`,
    keyFacts: [
      { label: '公司', value: COMPANY_NAME },
      { label: '创始人', value: '温泳扬（Peter）' },
      { label: '所在地', value: '广东省中山市' },
    ],
    sections: [
      {
        eyebrow: '方法来源',
        title: '从业务理解走向 AI 工作系统',
        paragraphs: ['Peter 的公开履历材料覆盖工厂与企业客户、金融与行业研究、教育咨询产品化，以及当前的企业 AI 实践。PeterAI 将这些经历用于理解业务问题、拆解评价标准和设计可交付流程。', '履历只能说明观察问题的视角，不能替代每个客户项目中的真实数据、共同决策与实际验收。'],
      },
      {
        eyebrow: '使命',
        title: '帮助企业拥有自己的 AI 工作法',
        paragraphs: ['PeterAI 关注阻碍增长、利润或交付质量的具体流程，并把诊断、试点、验收和复盘沉淀为客户可掌握的 SOP、知识库与工作流。'],
      },
      {
        eyebrow: '合作边界',
        title: '客户必须共同承担的责任',
        paragraphs: ['PeterAI 不替客户承诺经营结果。客户需要提供完成项目所需的数据与业务判断，指定负责人参与验收，并对高风险决策、对外承诺和最终执行负责。'],
      },
    ],
    related: ['/ai-consulting/', '/case-studies/', '/contact/'],
  },
  {
    path: '/contact/',
    kind: 'contact',
    title: '联系 PeterAI：从一个最值得重做的流程开始',
    metaTitle: '联系 PeterAI｜预约企业 AI 流程诊断',
    description: '联系 PeterAI 前，准备一个高频、重复、易错或影响订单的企业流程，以及负责人、现有资料、期望指标和人工审核边界。',
    eyebrow: 'Contact',
    summary: '第一次沟通不需要先懂模型。带着一个真实流程来，我们先判断它是否值得启动、从哪里切入、如何验收。',
    keyFacts: [
      { label: '沟通方式', value: '扫描页面微信二维码联系 Peter' },
      { label: '服务地点', value: '广东中山，可协商异地项目' },
      { label: '隐私', value: '首次沟通只提供诊断所需的最小信息' },
    ],
    sections: [
      {
        eyebrow: '沟通准备',
        title: '带上四项信息，诊断会更具体',
        paragraphs: ['请避免在首次沟通中直接发送密钥、完整客户名单或未经授权的敏感资料。先用业务描述和脱敏样本说明问题。'],
        bullets: ['哪个流程最耗人、最重复、最容易出错或最影响订单', '现在由谁负责，经过哪些步骤，使用哪些资料', '希望改善什么流程指标，当前基线如何记录', '哪些判断、承诺和结果必须由人审核'],
      },
      {
        eyebrow: '下一步',
        title: '先判断是否值得做，再讨论方案',
        paragraphs: ['首次沟通会确认目标、场景、数据、负责人、风险和预期验收。若流程尚不清楚，建议先梳理；若错误成本不可控或缺少责任人，PeterAI 会建议暂缓部署。'],
      },
    ],
    related: ['/ai-consulting/', '/faq/', '/case-studies/'],
  },
  {
    path: '/industries/zhongshan-lighting-export/',
    kind: 'industry',
    title: '中山灯饰外贸 AI 落地：先重做报价、资料与订单协同',
    metaTitle: '中山灯饰外贸 AI 落地方案｜PeterAI',
    description: '面向中山灯饰与照明外贸企业，PeterAI 从产品资料、询盘、报价、供应链协同和订单跟进中筛选可验收的 AI 场景。',
    eyebrow: 'Zhongshan Lighting Export',
    summary: '灯饰外贸的难点通常不在缺一个写文案工具，而在 SKU 资料、非标报价、供应链信息和客户跟进无法稳定对齐。',
    keyFacts: [
      { label: '典型输入', value: 'SKU 参数、客户询盘、报价规则、供应商信息' },
      { label: '优先场景', value: '资料整理、询盘预处理、报价辅助、跟进提醒' },
      { label: '关键边界', value: '价格策略与客户承诺保留人工审核' },
    ],
    sections: [
      {
        eyebrow: '场景地图',
        title: '从信息重复最多的节点开始',
        paragraphs: ['先记录销售、跟单、采购和老板之间反复确认的信息，再判断哪些动作有稳定输入、明确标准和可控风险。'],
        bullets: ['产品参数与多语言资料归一', '询盘分类、缺失信息检查与回复草稿', '报价资料准备与历史规则检索', '订单节点、供应链异常与客户跟进提醒'],
      },
      {
        eyebrow: '试点',
        title: '报价辅助比全自动报价更适合作为起点',
        paragraphs: ['系统可以整理参数、匹配历史规则、提示缺失信息并生成报价草稿；最终价格、账期、交期和大客户策略仍由授权人员确认。'],
      },
      {
        eyebrow: '验收',
        title: '用真实订单样本检验',
        paragraphs: ['验收应比较资料准备时间、缺失字段、返工次数、人工接管和错误类型，而不是只看一次演示是否顺畅。'],
      },
    ],
    faqs: commonServiceFaqs,
    related: ['/ai-consulting/', '/ai-agent-implementation/', '/case-studies/'],
  },
  {
    path: '/industries/industrial-services/',
    kind: 'industry',
    title: '工业服务与制造企业 AI 落地：让现场经验进入流程',
    metaTitle: '工业服务与制造企业 AI 落地｜PeterAI',
    description: 'PeterAI 面向工业服务与制造企业，围绕报价、工艺资料、质量记录、设备服务、订单协同和知识传承设计 AI 试点。',
    eyebrow: 'Industrial Services',
    summary: '工业场景的核心不是生成更多文字，而是让分散的技术经验、质量标准和异常处理在正确权限下被稳定调用。',
    keyFacts: [
      { label: '常见问题', value: '经验依赖个人、资料分散、异常重复发生' },
      { label: '试点原则', value: '高频、标准清楚、风险可控、可接管' },
      { label: '高风险边界', value: '安全、质量放行与关键工艺必须由人负责' },
    ],
    sections: [
      {
        eyebrow: '机会',
        title: '优先处理信息与判断辅助',
        paragraphs: ['从技术资料检索、服务工单分类、报价信息准备、质量异常归因辅助和设备维护知识调用等场景切入，更容易建立可观测的基线。'],
      },
      {
        eyebrow: '知识沉淀',
        title: '把异常和接管写进系统',
        paragraphs: ['真实价值来自把误判、返工、越权和人工处理过程沉淀为异常案例，持续修订知识、规则和测试集。'],
        bullets: ['设备与工艺资料的来源和版本', '质量标准、检查项与放行权限', '常见异常、处理动作和升级条件', '服务记录、复盘样本与责任人'],
      },
      {
        eyebrow: '安全边界',
        title: 'AI 不替代安全与质量责任',
        paragraphs: ['涉及人身安全、设备控制、质量放行、合同承诺和关键工艺参数的动作，需要明确授权、人工审核和日志追踪。'],
      },
    ],
    faqs: commonServiceFaqs,
    related: ['/ai-consulting/', '/enterprise-knowledge-base/', '/contact/'],
  },
]

export type SiteLanguage = 'zh' | 'en'

export const allPages = [...pages, ...englishPages]

export const PUBLIC_ROUTES = allPages.map((page) => page.path)

export const normalizePath = (pathname: string) => {
  const clean = pathname.split('?')[0].split('#')[0]
  if (!clean || clean === '/') return '/'
  return clean.endsWith('/') ? clean : `${clean}/`
}

export const getRouteLanguage = (pathname: string): SiteLanguage =>
  normalizePath(pathname).startsWith('/en/') ? 'en' : 'zh'

export const getLocalizedPath = (pathname: string, language: SiteLanguage) => {
  const normalized = normalizePath(pathname)

  if (language === 'en') {
    if (normalized.startsWith('/en/')) return normalized
    return normalized === '/' ? '/en/' : `/en${normalized}`
  }

  if (normalized === '/en/') return '/'
  return normalized.startsWith('/en/') ? normalized.slice(3) : normalized
}

export const getPageByPath = (pathname: string) => {
  const normalized = normalizePath(pathname)
  return allPages.find((page) => page.path === normalized)
}

export const getPageTitle = (path: string) => getPageByPath(path)?.title ?? BRAND_NAME
