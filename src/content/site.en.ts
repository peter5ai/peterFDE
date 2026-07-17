import type { EvidenceItem, FaqItem, PageData } from './site'

export const EN_COMPANY_NAME = 'Zhongshan Peter Artificial Intelligence Technology Co., Ltd.'

export const englishServices = [
  {
    path: '/en/ai-consulting/',
    title: 'Enterprise AI Consulting',
    description: 'Start with operating goals and real workflows to identify the first small loop worth rebuilding with AI.',
  },
  {
    path: '/en/ai-agent-implementation/',
    title: 'AI Agent and Workflow Implementation',
    description: 'Turn inputs, actions, standards, permissions, human takeover, and acceptance into a working system.',
  },
  {
    path: '/en/enterprise-knowledge-base/',
    title: 'Enterprise Knowledge Base',
    description: 'Turn experience scattered across people, documents, and projects into traceable and maintainable assets.',
  },
] as const

export const englishEvidenceItems: EvidenceItem[] = [
  {
    title: 'Lighting Hardware Manufacturer',
    context: 'Quoting, supply-chain alignment, and order follow-up relied on manual spreadsheets, trapping the owner and second-in-command in repeated confirmations.',
    action: 'Mapped quote inputs, supply-chain actions, owners, and review standards, then planned decision-support and trade-coordination agents.',
    asset: 'Quote SOPs, supply-chain coordination rules, and review fields for key-account development and competitor analysis.',
    boundary: 'Key prices and major-account strategy remain under human review. Client identities and unsupported operating results are not disclosed.',
  },
  {
    title: 'Traditional Tax and Finance Services',
    context: 'The owner repeatedly answered policy, compliance, and credit-repair questions while service experience remained concentrated in individuals.',
    action: 'Structured common questions, document checklists, risk prompts, and human escalation conditions into a vertical knowledge and Q&A workflow.',
    asset: 'A policy explanation library, client-question taxonomy, human escalation rules, and documented service boundaries.',
    boundary: 'Tax judgments and high-risk compliance conclusions must be reviewed by qualified professionals. AI does not assume professional responsibility.',
  },
  {
    title: 'Video and IP Content Team',
    context: 'Shooting and delivery depended on individual experience, making topic selection, brand judgment, and review difficult to replicate.',
    action: 'Structured shooting SOPs, brand-planning logic, and content judgment standards into knowledge the team could call consistently.',
    asset: 'Shooting templates, brand-positioning cards, topic-evaluation rules, and review samples.',
    boundary: 'Creative judgment, client relationships, and final taste remain human responsibilities. AI assists generation, retrieval, and checking.',
  },
]

const englishServiceFaqs: FaqItem[] = [
  {
    question: 'Will PeterAI directly recommend a particular AI tool?',
    answer: 'A tool list is not a diagnosis. We first confirm the business goal, process baseline, evaluation standard, and accountable owner, then choose models, knowledge systems, or workflow tools that fit those constraints.',
  },
  {
    question: 'How soon can we see the first usable result?',
    answer: 'It depends on process clarity, data availability, and who owns acceptance. PeterAI starts with a small, frequent workflow whose error cost can be controlled, runs it with real work, and only then decides whether to expand.',
  },
  {
    question: 'Who owns the assets after the project?',
    answer: 'Client data, knowledge bases, SOPs, acceptance criteria, and workflow configurations created by the project should remain under the client\'s control. Account ownership, permissions, and handover scope are agreed at kickoff.',
  },
]

export const englishPages: PageData[] = [
  {
    path: '/en/',
    kind: 'home',
    title: 'PeterAI Enterprise AI Consulting and Agent Implementation',
    metaTitle: 'PeterAI | Enterprise AI Consulting, Agents, and Knowledge Systems',
    description: 'PeterAI helps SME owners diagnose high-value workflows, implement AI agents, build enterprise knowledge bases, and create operating systems their teams can own.',
    eyebrow: EN_COMPANY_NAME,
    summary: 'We help SME owners find the workflow blocking growth, profit, or delivery quality, then rebuild it into an executable, measurable, and reusable work system.',
    keyFacts: [
      { label: 'For', value: 'SME owners and management teams' },
      { label: 'Based in', value: 'Zhongshan, Guangdong; remote projects by agreement' },
      { label: 'First step', value: 'Start with one real workflow diagnosis' },
      { label: 'Boundary', value: 'AI replaces actions, not accountability' },
    ],
    related: englishServices.map((item) => item.path),
  },
  {
    path: '/en/ai-consulting/',
    kind: 'service',
    title: 'Enterprise AI Consulting: Choose the Workflow Before the Tool',
    metaTitle: 'Enterprise AI Consulting | PeterAI',
    description: 'PeterAI evaluates operating goals, process baselines, ownership, and acceptance standards to select measurable and controllable AI pilots.',
    eyebrow: 'Enterprise AI Consulting',
    summary: 'For owners and management teams who know AI matters but have not yet defined where the company should begin.',
    keyFacts: [
      { label: 'Inputs', value: 'Owner goals, employee pain points, current workflows, and minimum evidence' },
      { label: 'Outputs', value: 'Issue tree, pilot priority, and a human-AI responsibility sketch' },
      { label: 'Owner', value: 'The chief executive or an explicitly authorized business owner' },
    ],
    sections: [
      {
        eyebrow: 'Fit',
        title: 'When consulting diagnosis should come first',
        paragraphs: ['The company has bought tools or delivered training without changing real workflows; departments want AI but share no priority; or the owner sees many problems but cannot identify the first scenario worth testing.'],
        bullets: ['The workflow happens frequently and contains substantial repetitive work', 'Quality can be explained well enough to establish a human baseline', 'The cost of error is controllable and human takeover is possible', 'A business owner will provide evidence, judgment, and acceptance'],
      },
      {
        eyebrow: 'Method',
        title: 'Diagnosis is not an AI lecture',
        paragraphs: ['PeterAI interviews owners and frontline staff, reads only the minimum evidence required, and maps goals, inputs, actions, standards, responsibility, exceptions, and outputs in one workflow.', 'The conclusion separates scenarios ready for a pilot, workflows that need clarification first, and ideas that should not start yet.'],
      },
      {
        eyebrow: 'Acceptance',
        title: 'What the consulting phase should leave behind',
        paragraphs: ['The minimum delivery is not a trend presentation. It is a set of working assets that can move into a pilot.'],
        bullets: ['Business issue tree and current baseline', 'Scenario priority and an explicit do-not-do list', 'Human-AI responsibility and permission sketch', 'Acceptance metrics, exception handling, and review cadence'],
      },
    ],
    faqs: englishServiceFaqs,
    related: ['/en/ai-agent-implementation/', '/en/enterprise-knowledge-base/', '/en/faq/'],
  },
  {
    path: '/en/ai-agent-implementation/',
    kind: 'service',
    title: 'AI Agent Implementation: Put Agents Into Real Workflows',
    metaTitle: 'AI Agent and Workflow Implementation | PeterAI',
    description: 'PeterAI combines business inputs, actions, knowledge, tools, permissions, human review, and takeover into working and measurable AI Agent workflows.',
    eyebrow: 'Agent Implementation',
    summary: 'The goal is not a chat demo. It is an agent that handles real tasks within explicit permissions and leaves traceable results.',
    keyFacts: [
      { label: 'Prerequisite', value: 'The process, inputs, and evaluation standard are reasonably clear' },
      { label: 'Deliverable', value: 'One working small loop' },
      { label: 'Required controls', value: 'Permissions, review, takeover, logs, and iteration' },
    ],
    sections: [
      {
        eyebrow: 'Architecture',
        title: 'What a working Agent includes',
        paragraphs: ['The model is only one component. A deployable agent also needs stable inputs, callable knowledge, tool interfaces, action rules, output formats, and clear human accountability.'],
        bullets: ['Input forms or business-system triggers', 'Knowledge sources with traceable citations', 'Tool calls with minimum permissions', 'Output standards, review nodes, and failure fallback'],
      },
      {
        eyebrow: 'Implementation',
        title: 'From samples to real operation',
        paragraphs: ['Historical samples establish a baseline and test set before the minimum workflow is configured. The pilot records correct results, errors, overreach, rework, and human takeover. Scope expands only after agreed acceptance criteria are met.'],
      },
      {
        eyebrow: 'Handover',
        title: 'The client must genuinely control the system',
        paragraphs: ['PeterAI assigns dispatch, review, takeover, and iteration to named people and hands over the necessary configuration notes, SOPs, and exception cases. The goal is not long-term dependence on external labor.'],
      },
    ],
    faqs: englishServiceFaqs,
    related: ['/en/ai-consulting/', '/en/enterprise-knowledge-base/', '/en/case-studies/'],
  },
  {
    path: '/en/enterprise-knowledge-base/',
    kind: 'service',
    title: 'Enterprise Knowledge Base: Traceable, Callable, and Maintainable',
    metaTitle: 'Enterprise Knowledge Base Services | PeterAI',
    description: 'PeterAI structures documents, workflows, cases, evaluation standards, and exception experience into enterprise knowledge with sources, permissions, and maintenance.',
    eyebrow: 'Enterprise Knowledge Base',
    summary: 'Turn experience scattered across owners, key employees, chat histories, and documents into assets that both teams and AI can call reliably.',
    keyFacts: [
      { label: 'Not', value: 'Uploading every file to a model at once' },
      { label: 'Core', value: 'Sources, structure, permissions, updates, and retrieval quality' },
      { label: 'Acceptance', value: 'Real questions receive correct and traceable answers' },
    ],
    sections: [
      {
        eyebrow: 'Scope',
        title: 'A knowledge base is not a file repository',
        paragraphs: ['An enterprise must distinguish stable facts, process rules, judgment methods, project samples, and exception cases. Each category needs its own source level, update owner, and access permission. Vector search alone cannot solve that governance problem.'],
      },
      {
        eyebrow: 'Workflow',
        title: 'From inventory to reliable use',
        paragraphs: ['Start with high-frequency questions, then inventory the minimum necessary materials and define classification, source, version, and permission rules. Test retrieval and answers with real questions; failures enter a revision queue.'],
        bullets: ['Knowledge map and high-frequency question list', 'Source level, review date, and accountable owner', 'Structured pages, SOPs, and case templates', 'Retrieval test set, failure samples, and maintenance cadence'],
      },
      {
        eyebrow: 'Boundary',
        title: 'What should not enter the knowledge base by default',
        paragraphs: ['Secrets, cookies, unauthorized client material, unnecessary personal information, and high-risk sensitive data should not enter a general knowledge base. Access must follow minimum business need.'],
      },
    ],
    faqs: englishServiceFaqs,
    related: ['/en/ai-consulting/', '/en/ai-agent-implementation/', '/en/faq/'],
  },
  {
    path: '/en/case-studies/',
    kind: 'cases',
    title: 'Anonymized Project Samples: Workflows, Actions, Assets, and Boundaries',
    metaTitle: 'Anonymized Enterprise AI Project Samples | PeterAI',
    description: 'PeterAI presents anonymized samples by business context, implementation action, retained asset, and human responsibility without invented endorsements or unsupported results.',
    eyebrow: 'Evidence Library',
    summary: 'A useful case is not a success myth. It shows what PeterAI examined, what changed, what assets remained, and which responsibilities still belonged to people.',
    keyFacts: [
      { label: 'Source', value: 'Anonymized samples organized from existing project records' },
      { label: 'Not', value: 'Public client endorsements or universal performance claims' },
      { label: 'Read for', value: 'Context, action, asset, and responsibility boundary' },
    ],
    evidence: englishEvidenceItems,
    related: ['/en/ai-consulting/', '/en/ai-agent-implementation/', '/en/contact/'],
  },
  {
    path: '/en/faq/',
    kind: 'faq',
    title: 'What Owners Ask Before Starting Enterprise AI',
    metaTitle: 'Enterprise AI Consulting FAQ | PeterAI',
    description: 'PeterAI answers common questions about AI consulting, Agent implementation, knowledge bases, permissions, acceptance, accountability, and engagement.',
    eyebrow: 'Official Answers',
    summary: 'These answers define PeterAI\'s stable service method and boundaries. Each project still requires diagnosis against its own workflow, data, and risk.',
    faqs: [
      ...englishServiceFaqs,
      { question: 'What kind of company is ready for an AI pilot?', answer: 'It needs at least one frequent and repetitive workflow with reasonably clear standards, controllable error costs, and a business owner willing to provide samples, make judgments, and accept results.' },
      { question: 'Does PeterAI promise cost reduction, revenue growth, or layoffs?', answer: 'No operating result is guaranteed, and layoffs are not the default goal. Projects define observable process metrics, while the client remains responsible for data, decisions, execution, and business outcomes.' },
      { question: 'Can we start without clean data?', answer: 'Diagnosis can start, but deployment depends on whether minimum evidence is available. Disorganized materials may mean the first step is process and knowledge organization, not an Agent.' },
      { question: 'How are AI errors handled?', answer: 'High-risk actions, review points, fallback, and takeover owners are defined before launch. Misjudgments, overreach, and rework are logged and used to revise rules, SOPs, and test sets.' },
      { question: 'Can we purchase training only?', answer: 'Training tied to a specific role and workflow can be discussed, but a generic tool class is not enterprise AI transformation. Training must return to real tasks, evaluation standards, and continued use.' },
      { question: 'How should we prepare for the first conversation?', answer: 'Bring one workflow that consumes the most labor, repeats most often, makes the most errors, or affects orders. Explain who owns it, which materials it uses, what good looks like, and which actions require human review.' },
    ],
    related: ['/en/ai-consulting/', '/en/contact/', '/en/case-studies/'],
  },
  {
    path: '/en/about/',
    kind: 'about',
    title: 'About PeterAI: Enterprise AI Grounded in Real Operations',
    metaTitle: 'About PeterAI and Founder Peter | Enterprise AI in Zhongshan',
    description: 'Learn about PeterAI, founder Peter, the experience behind its enterprise AI implementation method, and the responsibilities required from both sides.',
    eyebrow: 'About PeterAI',
    summary: 'Based in Zhongshan, Guangdong, PeterAI delivers AI consulting, Agent implementation, and knowledge systems around real enterprise workflows.',
    keyFacts: [
      { label: 'Company', value: EN_COMPANY_NAME },
      { label: 'Founder', value: 'Peter Wen' },
      { label: 'Location', value: 'Zhongshan, Guangdong, China' },
    ],
    sections: [
      {
        eyebrow: 'Method Origins',
        title: 'From business understanding to AI work systems',
        paragraphs: ['Peter\'s public background spans factories and enterprise clients, finance and industry research, education-service productization, and current enterprise AI practice. PeterAI uses that experience to understand business problems, decompose evaluation standards, and design deliverable workflows.', 'A background only explains a way of seeing problems. It never replaces real client data, joint decisions, or actual acceptance.'],
      },
      {
        eyebrow: 'Mission',
        title: 'Help enterprises own their way of working with AI',
        paragraphs: ['PeterAI focuses on workflows that block growth, profit, or delivery quality, then turns diagnosis, pilot operation, acceptance, and review into SOPs, knowledge, and workflows the client can control.'],
      },
      {
        eyebrow: 'Engagement Boundary',
        title: 'Responsibilities the client must share',
        paragraphs: ['PeterAI does not promise operating results on the client\'s behalf. The client provides the data and business judgment required, names an owner for acceptance, and remains responsible for high-risk decisions, external commitments, and final execution.'],
      },
    ],
    related: ['/en/ai-consulting/', '/en/case-studies/', '/en/contact/'],
  },
  {
    path: '/en/contact/',
    kind: 'contact',
    title: 'Contact PeterAI: Start With One Workflow Worth Rebuilding',
    metaTitle: 'Contact PeterAI | Request an Enterprise AI Workflow Diagnosis',
    description: 'Before contacting PeterAI, prepare one frequent, repetitive, error-prone, or order-critical workflow, along with its owner, evidence, desired metric, and human review boundary.',
    eyebrow: 'Contact',
    summary: 'You do not need to understand models before the first conversation. Bring one real workflow and we will first decide whether to start, where to enter, and how to accept results.',
    keyFacts: [
      { label: 'Contact', value: 'Scan the WeChat QR code on this page to reach Peter' },
      { label: 'Location', value: 'Zhongshan, Guangdong; remote projects by agreement' },
      { label: 'Privacy', value: 'Share only the minimum information needed for initial diagnosis' },
    ],
    sections: [
      {
        eyebrow: 'Preparation',
        title: 'Bring four pieces of information',
        paragraphs: ['Do not send secrets, complete client lists, or unauthorized sensitive material in the first conversation. Describe the business problem and use anonymized samples first.'],
        bullets: ['Which workflow consumes the most labor, repeats most often, makes the most errors, or affects orders', 'Who owns it now, which steps it follows, and which materials it uses', 'Which process metric should improve and how the current baseline is recorded', 'Which judgments, commitments, and outputs require human review'],
      },
      {
        eyebrow: 'Next Step',
        title: 'Decide whether the work is worthwhile before discussing a solution',
        paragraphs: ['The first conversation confirms goals, scenario, evidence, ownership, risk, and expected acceptance. If the workflow is unclear, clarify it first. If error costs are uncontrolled or no owner exists, PeterAI will recommend postponing deployment.'],
      },
    ],
    related: ['/en/ai-consulting/', '/en/faq/', '/en/case-studies/'],
  },
  {
    path: '/en/industries/zhongshan-lighting-export/',
    kind: 'industry',
    title: 'AI for Zhongshan Lighting Export: Rebuild Quoting, Product Data, and Order Coordination',
    metaTitle: 'AI Implementation for Zhongshan Lighting Export | PeterAI',
    description: 'PeterAI helps Zhongshan lighting exporters identify measurable AI scenarios across product data, inquiries, quoting, supply-chain coordination, and order follow-up.',
    eyebrow: 'Zhongshan Lighting Export',
    summary: 'The main problem is rarely a missing copywriting tool. It is the unstable alignment of SKU data, non-standard quotes, supply-chain information, and client follow-up.',
    keyFacts: [
      { label: 'Typical inputs', value: 'SKU parameters, client inquiries, pricing rules, and supplier data' },
      { label: 'Priority scenarios', value: 'Data organization, inquiry preparation, quote assistance, and follow-up reminders' },
      { label: 'Boundary', value: 'Pricing strategy and client commitments remain under human review' },
    ],
    sections: [
      {
        eyebrow: 'Scenario Map',
        title: 'Start with the nodes where information repeats most',
        paragraphs: ['Record the information repeatedly confirmed among sales, merchandising, purchasing, and the owner, then identify actions with stable inputs, clear standards, and controllable risk.'],
        bullets: ['Normalize product parameters and multilingual materials', 'Classify inquiries, check missing information, and draft replies', 'Prepare quote data and retrieve historical rules', 'Track order nodes, supply-chain exceptions, and client follow-up'],
      },
      {
        eyebrow: 'Pilot',
        title: 'Quote assistance is a better starting point than fully automated pricing',
        paragraphs: ['The system can organize parameters, retrieve historical rules, flag missing information, and draft a quote. Final prices, payment terms, delivery commitments, and major-account strategy remain with authorized people.'],
      },
      {
        eyebrow: 'Acceptance',
        title: 'Test with real order samples',
        paragraphs: ['Compare preparation time, missing fields, rework, human takeover, and error types. Do not judge the pilot only by whether one demo looks smooth.'],
      },
    ],
    faqs: englishServiceFaqs,
    related: ['/en/ai-consulting/', '/en/ai-agent-implementation/', '/en/case-studies/'],
  },
  {
    path: '/en/industries/industrial-services/',
    kind: 'industry',
    title: 'AI for Industrial Services and Manufacturing: Put Field Experience Into the Workflow',
    metaTitle: 'AI Implementation for Industrial Services and Manufacturing | PeterAI',
    description: 'PeterAI designs AI pilots for industrial service and manufacturing workflows including quoting, technical data, quality records, equipment service, order coordination, and knowledge transfer.',
    eyebrow: 'Industrial Services',
    summary: 'The goal is not to generate more text. It is to make distributed technical experience, quality standards, and exception handling reliably callable under the right permissions.',
    keyFacts: [
      { label: 'Common problem', value: 'Experience depends on individuals, evidence is scattered, and exceptions repeat' },
      { label: 'Pilot rule', value: 'Frequent, clear standards, controllable risk, and human takeover' },
      { label: 'High-risk boundary', value: 'Safety, quality release, and critical processes remain human responsibilities' },
    ],
    sections: [
      {
        eyebrow: 'Opportunity',
        title: 'Prioritize information and decision support',
        paragraphs: ['Technical-document retrieval, service-ticket classification, quote preparation, quality-exception analysis support, and maintenance knowledge are practical entry points for establishing an observable baseline.'],
      },
      {
        eyebrow: 'Knowledge Capture',
        title: 'Write exceptions and takeover into the system',
        paragraphs: ['Value compounds when misjudgments, rework, overreach, and human handling become exception cases that continually revise knowledge, rules, and test sets.'],
        bullets: ['Source and version of equipment and process documentation', 'Quality standards, inspection items, and release authority', 'Common exceptions, handling actions, and escalation conditions', 'Service records, review samples, and accountable owners'],
      },
      {
        eyebrow: 'Safety Boundary',
        title: 'AI does not replace safety and quality accountability',
        paragraphs: ['Actions involving personal safety, equipment control, quality release, contractual commitments, or critical process parameters require explicit authorization, human review, and traceable logs.'],
      },
    ],
    faqs: englishServiceFaqs,
    related: ['/en/ai-consulting/', '/en/enterprise-knowledge-base/', '/en/contact/'],
  },
]
