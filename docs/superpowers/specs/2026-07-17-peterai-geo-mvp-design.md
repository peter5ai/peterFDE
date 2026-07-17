# PeterAI 官网 GEO MVP 设计

## 目标

把 `www.peterai.cloud` 从依赖浏览器执行 JavaScript 才能读到内容的单页展示站，改造成客户、搜索引擎和 AI 搜索都能直接读取、理解、引用和核验的 PeterAI 官方信息源。

## 成功标准

- 构建产物包含 10 个可直接访问的静态 HTML 页面，关闭 JavaScript 仍有完整主标题和正文。
- 每页有独立的 `title`、`description`、canonical、Open Graph、`lang="zh-CN"` 和 JSON-LD。
- 首页第一屏明确公司全称、服务对象、服务内容、所在城市与服务边界。
- `robots.txt` 和 `sitemap.xml` 是真实文件，覆盖所有公开页面。
- 案例只使用现有项目记录，统一标为脱敏项目样本，不写客户背书、量化效果或无法核验的结果。
- 联系页使用现有微信二维码，不制造限额、倒计时、免费名额或虚假价格锚点。
- 桌面端和手机端无横向溢出、文字遮挡、空白主画面或不可用导航。

## 页面地图

| 路径 | 页面职责 | 主要结构化数据 |
|---|---|---|
| `/` | 品牌定义、服务入口、方法、证据与转化 | Organization, WebSite |
| `/ai-consulting/` | 企业 AI 咨询服务 | Service, FAQPage |
| `/ai-agent-implementation/` | AI Agent 与工作流落地 | Service, FAQPage |
| `/enterprise-knowledge-base/` | 企业知识库建设 | Service, FAQPage |
| `/case-studies/` | 脱敏项目样本与证据边界 | CollectionPage |
| `/faq/` | 客户真实问题的官方回答 | FAQPage |
| `/about/` | 公司、Peter 与方法边界 | AboutPage, Person |
| `/contact/` | 诊断前准备与微信联系 | ContactPage |
| `/industries/zhongshan-lighting-export/` | 中山灯饰外贸场景 | Service, FAQPage |
| `/industries/industrial-services/` | 工业服务与制造场景 | Service, FAQPage |

## 架构

继续使用 React、TypeScript、Vite 和 Tailwind。新增集中式站点内容模型和页面组件；浏览器端根据当前路径水合对应页面。构建时额外生成 SSR bundle，由预渲染脚本把同一套 React 页面写入每个路由的 `index.html`，同时生成 sitemap 和 robots，避免维护两份正文。

所有 canonical 与 sitemap URL 使用 `https://www.peterai.cloud`。静态资源使用根路径，适配当前自定义域名部署。未知路由显示明确的 404 页面；站内链接统一使用带尾斜杠的绝对路径。

## 内容与事实边界

稳定品牌实体定义为：中山市彼得人工智能科技有限公司（PeterAI），面向中小企业 CEO 与管理团队，提供企业 AI 咨询、AI Agent 与工作流落地、企业知识库建设和业务流程智能化服务。

首页不再使用“流程健康度 92 分”“异常识别 32 条”“今天前 3 位免费”“价值 5000 元”等缺乏当前可核验证据的表达。现有三类项目材料保留为脱敏样本，只描述已记录的场景、动作、拟沉淀或已沉淀的资产及人工责任边界，不把它们写成公开客户证言。

## 视觉方向

定位为安静、可信、工作导向的咨询官网。保留深色底、金色强调和 Peter 个人照片，但减少玻璃卡片嵌套、发光仪表盘和装饰性数据。首页第一屏直接呈现品牌与服务；页面使用紧凑导航、清晰分区、证据条和可扫描问答，卡片圆角不超过 8px。

## 验收

自动验收检查路由文件、静态正文、元数据、JSON-LD、sitemap、robots 与禁用文案。工程验收运行 TypeScript 构建、ESLint 和 Node 测试。视觉验收在本地预览服务上检查 1440x900 与 390x844 两个视口，并检查浏览器控制台与页面横向溢出。
