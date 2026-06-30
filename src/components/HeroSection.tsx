import { motion } from 'framer-motion'
import {
  ArrowDown,
  Bot,
  BrainCircuit,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  ClipboardCheck,
  Filter,
  GitFork,
  Quote,
  ShieldCheck,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import profileImg from '/profile.png'

export const HeroSection = () => {
  const { t, i18n } = useTranslation()
  const isEnglish = i18n.language?.startsWith('en')

  const featureItems = isEnglish
    ? [
        { icon: Filter, title: `FDE ${t('missionHero.metrics.0')}`, desc: 'Prioritize frequent, painful workflows and verify ROI fast' },
        { icon: GitFork, title: t('missionHero.metrics.1'), desc: 'Standardize key nodes and build executable SOPs' },
        { icon: Bot, title: 'Agent Deployment', desc: 'Launch pilots quickly and let people work with agents' },
        { icon: ClipboardCheck, title: t('missionHero.metrics.3'), desc: 'Quantify outcomes and keep improving' },
        { icon: ShieldCheck, title: 'Risk Control', desc: 'Keep permissions, review, and compliance under control' },
        { icon: BookOpen, title: 'Knowledge Base', desc: 'Capture experience assets and build company memory' },
      ]
    : [
        { icon: Filter, title: `FDE ${t('missionHero.metrics.0')}`, desc: '高频高痛优先，ROI 快速验证' },
        { icon: GitFork, title: t('missionHero.metrics.1'), desc: '标准化节点，建立可执行 SOP' },
        { icon: Bot, title: 'Agent 部署', desc: '快速试点上线，人机协同执行' },
        { icon: ClipboardCheck, title: t('missionHero.metrics.3'), desc: '效果量化评估，持续迭代优化' },
        { icon: ShieldCheck, title: '风险控制', desc: '权限隔离可控，安全合规运行' },
        { icon: BookOpen, title: '知识库', desc: '沉淀经验资产，构建企业记忆' },
      ]

  const proofMetrics = isEnglish
    ? [
        ['10+', 'Industries covered'],
        ['200+', 'Workflow diagnoses'],
        ['95%+', 'Delivery satisfaction'],
        ['3 weeks', 'Average value proof cycle'],
      ]
    : [
        ['10+', '行业深度覆盖'],
        ['200+', '建立流程诊断'],
        ['95%+', '项目交付满意度'],
        ['3周', '平均价值验证周期'],
      ]

  const statCards = isEnglish
    ? {
        health: 'Workflow health',
        point: 'pts',
        agent: 'AI agent',
        running: 'Running',
        exception: 'Exception detection',
        pending: 'pending',
      }
    : {
        health: '流程健康度',
        point: '分',
        agent: 'AI 智能体',
        running: '运行中',
        exception: '异常识别',
        pending: '条待处理',
      }

  const quote = isEnglish
    ? ['We do not deliver PPT plans.', 'We make AI run inside workflows,', 'and let the results speak.']
    : ['我们不做 PPT 方案，', '我们让 AI 在流程里跑起来，', '让结果自己说话。']

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#06101f] px-3 pb-5 pt-24 md:px-5 md:pb-6 md:pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(224,177,91,0.12),transparent_24%),radial-gradient(circle_at_76%_8%,rgba(93,211,214,0.16),transparent_26%)]" />
      <div className="hero-dashboard mx-auto max-w-[1510px] px-5 pb-5 pt-6 md:px-8 md:pb-8 lg:px-10">
        <div className="relative z-10 grid items-center gap-8 pt-3 lg:min-h-[500px] lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="glass-chip mb-5 inline-flex items-center gap-3 rounded-md px-3 py-2 pr-4 text-sm font-semibold text-cyan md:mb-6 md:text-base">
              <span className="grid h-8 w-8 place-items-center rounded-md border border-cyan/35 bg-cyan/10">
                <BrainCircuit size={17} />
              </span>
              {t('missionHero.badge')}
            </div>

            <h1 className="mb-5 max-w-5xl text-[2.55rem] font-black leading-[1.03] text-white md:text-[3.95rem] lg:text-[4.05rem]">
              {t('missionHero.titlePart1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-cyan">
                {t('missionHero.titleHighlight')}
              </span>
            </h1>

            <p className="mb-7 max-w-4xl text-base leading-8 text-text-muted md:mb-8 md:text-xl">
              {t('missionHero.descriptionLine1')}
              <br className="hidden md:block" />
              {t('missionHero.descriptionLine2')}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-8 text-sm font-bold text-ink shadow-lg shadow-gold/15 transition hover:-translate-y-0.5 hover:bg-gold-light md:h-14 md:min-w-[130px]"
              >
                {t('nav.getDiagnosis')}
              </a>
              <a
                href="#cases"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 px-8 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-cyan/45 hover:text-cyan md:h-14 md:min-w-[165px]"
              >
                {t('missionHero.secondaryCta')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="portrait-stage hidden lg:block"
          >
            <div className="portrait-orbit" />
            <div className="absolute bottom-10 left-[43%] h-[430px] w-[360px] -translate-x-1/2 overflow-hidden">
              <img
                src={profileImg}
                alt={t('missionHero.profileAlt')}
                className="absolute bottom-[-10px] left-1/2 h-[108%] max-w-none -translate-x-1/2 object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06101f] to-transparent" />
            </div>

            <div className="absolute right-6 top-8 flex w-[172px] flex-col gap-7">
              <div className="stat-float p-4">
                <div className="text-xs font-semibold text-text">{statCards.health}</div>
                <div className="mt-1 flex items-end gap-1 text-cyan">
                  <span className="text-3xl font-bold text-text-muted">92</span>
                  <span className="mb-1 text-sm">{statCards.point}</span>
                </div>
                <ChartNoAxesColumnIncreasing className="ml-auto mt-1 text-cyan" size={50} />
              </div>

              <div className="stat-float flex items-center justify-between gap-2 p-4">
                <div>
                  <div className="text-xs font-semibold text-text">{statCards.agent}</div>
                  <div className="mt-1 text-sm text-text-muted">{statCards.running}</div>
                </div>
                <Bot className="shrink-0 text-cyan" size={34} />
              </div>

              <div className="stat-float p-4">
                <div className="text-xs font-semibold text-text">{statCards.exception}</div>
                <div className="mt-1 text-3xl font-bold text-text-muted">32</div>
                <div className="text-xs text-text-muted">{statCards.pending}</div>
                <ChartNoAxesColumnIncreasing className="ml-auto -mt-4 text-cyan" size={50} />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative z-10 mt-7 grid grid-cols-2 gap-4 rounded-xl border border-white/8 bg-[#08172d]/72 p-4 md:grid-cols-3 lg:grid-cols-6 lg:p-7"
        >
          {featureItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="holo-icon mx-auto mb-3 h-20 w-20 md:mb-4 md:h-24 md:w-24">
                <Icon className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-bold text-white md:text-lg">{title}</h3>
              <p className="mx-auto mt-2 max-w-[130px] text-xs leading-5 text-text-muted md:text-sm md:leading-6">{desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="holo-card relative z-10 mt-4 grid gap-5 rounded-xl p-4 md:grid-cols-[180px_1.2fr_0.95fr] md:p-5 lg:grid-cols-[190px_1.25fr_0.75fr]"
        >
          <div className="relative h-[190px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(rgba(93,211,214,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(93,211,214,0.05)_1px,transparent_1px)] bg-[size:24px_24px]">
            <img src={profileImg} alt={t('missionHero.profileAlt')} className="absolute bottom-[-12px] left-1/2 h-[118%] max-w-none -translate-x-1/2 object-contain" />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gold">{t('hero.nameTitle')}</h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">{t('hero.jobTitle')}</p>
            <div className="metric-rule my-5 h-px" />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {proofMetrics.map(([value, label]) => (
                <div key={label}>
                  <div className="flex items-center gap-2 text-gold">
                    <CheckCircle2 size={16} />
                    <span className="text-xl font-bold">{value}</span>
                  </div>
                  <div className="mt-1 text-xs text-text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-7 md:pt-0">
            <Quote className="shrink-0 text-text-muted" size={34} />
            <p className="text-base leading-8 text-text-muted">
              {quote[0]}
              <br />
              {quote[1]}
              <br />
              {quote[2]}
            </p>
            <ShieldCheck className="ml-auto hidden shrink-0 text-cyan md:block" size={34} />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-muted transition hover:text-gold md:flex"
      >
        Scroll
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
