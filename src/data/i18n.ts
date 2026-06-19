export type Lang = 'en' | 'zh';

export const fallbackLang: Lang = 'en';

export const messages: Record<Lang, Record<string, string>> = {
  en: {
    'meta.title': 'Origin Technology — Open. Innovation. Powerful.',
    'meta.description':
      'Origin Technology: authentication, application protection, and performance services. Open. Innovation. Powerful.',

    'banner.announcement':
      'Origin is actively maintaining most services recently, which may cause temporary instability. Thanks for your understanding.',
    'banner.dismiss': 'Dismiss',

    'nav.aria.main': 'Main Navigation',
    'nav.login': 'Login',
    'nav.contact': 'Contact us',
    'nav.getStarted': 'Get started',
    'nav.menu': 'Menu',

    'hero.title.line1': 'Everything we learned protecting',
    'hero.title.line2': 'apps — yours by default',
    'hero.subtitle.line1': 'One platform for authentication, protection, and performance.',
    'hero.subtitle.line2':
      'Build, secure, and accelerate without managing infrastructure.',
    'hero.cta.start': 'Start building for free',
    'hero.cta.talk': 'Talk to us',

    'globe.title': 'Region: Earth',
    'globe.lead':
      'One smart network for protection + performance — close to users, close to data.',
    'globe.availability': 'Origin Cloud availability.',
    'globe.features.everywhere.title': 'Run everywhere',
    'globe.features.everywhere.body':
      'Authentication, protection, and acceleration run across our global edge — close to your users, close to your data.',
    'globe.features.anywhere.title': 'Run anywhere',
    'globe.features.anywhere.body':
      'Origin Network™ optimizes traffic from source to destination, so every request takes the fastest safe path.',
    'globe.features.scale.title': 'Run at massive scale',
    'globe.features.scale.body':
      'Built on Origin Cloud. No capacity planning — services scale with your traffic, not your ops team.',

    'bento.title': 'Why choose Origin',
    'bento.lead': 'Everything needed to build secure, performant applications.',
    'bento.secure.title': 'Secure by default',
    'bento.secure.body':
      'Shield™ layered checks, Solide™ obfuscation, and integrity monitoring run on every build from day one — no extra wiring required.',
    'bento.fast.title': 'Fast path to authentication',
    'bento.fast.body':
      'Drop in XenonAuth™ OAuth and Origin Pass. Identity-aware access and token management make production sign-in a one-step deploy.',
    'bento.fast.console.ready': '3 services initialised',
    'bento.fast.console.oauth': 'oauth ready',
    'bento.fast.console.shield': 'checks passed',
    'bento.fast.console.resync': 'latency -38%',
    'bento.workflow.title': 'Fits into your existing workflows',
    'bento.workflow.body':
      'OpenGL, Vulkan, DirectX, and any JVM toolchain. No proprietary tools or vendor lock-in.',
    'bento.workflow.updated': 'Updated',
    'bento.workflow.status.queued': 'Queued',
    'bento.workflow.status.deployed': 'Deployed',
    'bento.workflow.tooling': 'Git · CI · any framework',
    'bento.network.title': 'One network for users, apps, and data',
    'bento.network.body':
      "Whether you're shipping code, securing sign-in, or accelerating frames, it all runs on Origin Network™ — managed from one place.",

    'social.title.line1': 'Six services.',
    'social.title.line2': 'One Origin platform.',
    'social.lead':
      'Built to interoperate with the standards and runtimes you already ship on.',

    'products.eyebrow': 'Products',
    'products.title': 'Our products',
    'products.lead':
      'Six production-grade services, each solving one job well — and built to compose into the rest of the Origin stack.',
    'products.learnMore': 'Learn more',
    'products.category.authenticate': 'Authenticate',
    'products.category.protect': 'Protect',
    'products.category.accelerate': 'Accelerate',
    'products.category.network': 'Network',
    'products.items.xenon-auth.name': 'Origin XenonAuth™',
    'products.items.xenon-auth.tagline': 'OAuth, done right',
    'products.items.xenon-auth.description':
      'Provide authentication for your application through our OAuth service. Drop-in sign-in, token management, and identity for any platform.',
    'products.items.shield.name': 'Origin Shield™',
    'products.items.shield.tagline': 'Defense in depth',
    'products.items.shield.description':
      'Protect your applications with Origin Solide™ technology through multiple layered security checks, from integrity to runtime tampering.',
    'products.items.re-sync.name': 'Origin Re-Sync™',
    'products.items.re-sync.tagline': 'Lower latency, higher FPS',
    'products.items.re-sync.description':
      'Enhance your game performance and reduce screen input latency. Supports OpenGL, Vulkan and DirectX out of the box.',
    'products.items.solide.name': 'Origin Solide™',
    'products.items.solide.tagline': 'JVM obfuscation',
    'products.items.solide.description':
      'Protect your JVM application with lightweight or heavy-duty obfuscation features. Ship bytecode that resists reverse engineering.',
    'products.items.beacon.name': 'Origin Beacon™',
    'products.items.beacon.tagline': 'Telemetry at scale',
    'products.items.beacon.description':
      'Powerful, secure and stable multi-dimensional user data collection services. Understand your users without compromising trust.',
    'products.items.network.name': 'Origin Network™',
    'products.items.network.tagline': 'Powered by Origin Cloud',
    'products.items.network.description':
      'All of our cloud services are powered by Origin Cloud and its powerful network service partners for global, reliable delivery.',

    'pillars.eyebrow': 'One platform, three jobs',
    'pillars.title': 'Everything your application needs to run',
    'pillars.lead':
      'Origin pulls authentication, protection, and acceleration into a single stack — so the pieces work together instead of fighting each other.',
    'pillars.items.authenticate.title': 'Authenticate',
    'pillars.items.authenticate.blurb':
      'Give every application a secure front door with managed OAuth and identity.',
    'pillars.items.authenticate.points.0': 'XenonAuth™ OAuth service',
    'pillars.items.authenticate.points.1': 'Token & session management',
    'pillars.items.authenticate.points.2': 'Origin Pass identity',
    'pillars.items.protect.title': 'Protect',
    'pillars.items.protect.blurb':
      'Harden apps end to end — from JVM bytecode to runtime integrity checks.',
    'pillars.items.protect.points.0': 'Shield™ layered checks',
    'pillars.items.protect.points.1': 'Solide™ obfuscation',
    'pillars.items.protect.points.2': 'Tamper & integrity monitoring',
    'pillars.items.accelerate.title': 'Accelerate',
    'pillars.items.accelerate.blurb':
      'Cut latency and lift performance across graphics APIs and the network edge.',
    'pillars.items.accelerate.points.0': 'Re-Sync™ input latency',
    'pillars.items.accelerate.points.1': 'OpenGL · Vulkan · DirectX',
    'pillars.items.accelerate.points.2': 'Origin Network™ edge',

    'team.eyebrow': 'About',
    'team.title': 'Our team',
    'team.lead': 'Say hello to our awesome team.',
    'team.roles.leader': 'Leader',
    'team.roles.member': 'Member',

    'build.title': 'Build without boundaries',
    'build.lead':
      'Join developers who ship faster on Origin — authenticate, protect, and accelerate from one platform.',
    'build.cta.start': 'Start building for free',
    'build.cta.contact': 'Contact us',
    'build.strip.0': 'Authentication that drops into any app',
    'build.strip.1': 'Layered protection from bytecode to runtime',
    'build.strip.2': 'Lower input latency on OpenGL · Vulkan · DirectX',
    'build.strip.3': 'Built on Origin Cloud',

    'footer.slogan': 'Open. Innovation. Powerful.',
    'footer.supportPrefix': 'For support, contact',
    'footer.columns.0.title': 'Getting started',
    'footer.columns.0.links.0': 'Start building',
    'footer.columns.0.links.1': 'Contact us',
    'footer.columns.0.links.2': 'Developer Status',
    'footer.columns.1.title': 'Products',
    'footer.columns.1.links.0': 'Origin XenonAuth™',
    'footer.columns.1.links.1': 'Origin Shield™',
    'footer.columns.1.links.2': 'Origin Re-Sync™',
    'footer.columns.1.links.3': 'Origin Solide™',
    'footer.columns.1.links.4': 'Origin Beacon™',
    'footer.columns.1.links.5': 'Origin Network™',
    'footer.columns.2.title': 'Solutions',
    'footer.columns.2.links.0': 'Authenticate',
    'footer.columns.2.links.1': 'Protect',
    'footer.columns.2.links.2': 'Accelerate',
    'footer.columns.2.links.3': 'Origin Pass',
    'footer.columns.3.title': 'Company',
    'footer.columns.3.links.0': 'About the team',
    'footer.columns.3.links.1': 'Origin Cloud',
    'footer.columns.3.links.2': 'QQ Group Chat',
    'footer.columns.3.links.3': 'Email',
    'footer.copyright': 'Copyright © 2022-{{year}} Origin Technology',
    'footer.legal.privacy': 'Privacy',
    'footer.legal.terms': 'Terms',
    'footer.legal.status': 'Status',
  },

  zh: {
    'meta.title': 'Origin Technology — 开放、创新、强大',
    'meta.description':
      'Origin Technology：认证、应用保护与性能服务。开放、创新、强大。',

    'banner.announcement':
      'Origin 近期正在积极维护大多数业务，可能导致服务暂时不稳定，敬请谅解。',
    'banner.dismiss': '关闭',

    'nav.aria.main': '主导航',
    'nav.login': '登录',
    'nav.contact': '联系我们',
    'nav.getStarted': '立即开始',
    'nav.menu': '菜单',

    'hero.title.line1': '我们在安全防护中的经验',
    'hero.title.line2': '默认就属于你',
    'hero.subtitle.line1': '一个平台，覆盖认证、防护与性能。',
    'hero.subtitle.line2': '构建、加固、提速，不再自己管理基础设施。',
    'hero.cta.start': '免费开始构建',
    'hero.cta.talk': '联系团队',

    'globe.title': '全球区域服务',
    'globe.lead': '一个智能网络同时提供防护与性能，贴近用户，也贴近数据。',
    'globe.availability': 'Origin Cloud 可用性。',
    'globe.features.everywhere.title': '全球运行',
    'globe.features.everywhere.body':
      '认证、防护和加速运行在我们的全球边缘网络，靠近你的用户，也靠近你的数据。',
    'globe.features.anywhere.title': '随处可用',
    'globe.features.anywhere.body':
      'Origin Network™ 会从源到目的地优化流量，让每次请求都走在最快且安全的路径上。',
    'globe.features.scale.title': '大规模承载',
    'globe.features.scale.body':
      '基于 Origin Cloud 构建。无需容量规划，服务会随流量自动扩展。',

    'bento.title': '为什么选择 Origin',
    'bento.lead': '构建安全高性能应用所需的一切能力。',
    'bento.secure.title': '默认安全',
    'bento.secure.body':
      'Shield™ 分层校验、Solide™ 混淆与完整性监控从第一天就能运行，无需额外接线。',
    'bento.fast.title': '认证快速落地',
    'bento.fast.body':
      '接入 XenonAuth™ OAuth 与 Origin Pass，基于身份的访问控制与令牌管理让生产登录一步上线。',
    'bento.fast.console.ready': '3 个服务已初始化',
    'bento.fast.console.oauth': 'oauth 已就绪',
    'bento.fast.console.shield': '校验通过',
    'bento.fast.console.resync': '延迟 -38%',
    'bento.workflow.title': '无缝融入现有工作流',
    'bento.workflow.body':
      '支持 OpenGL、Vulkan、DirectX 与各类 JVM 工具链，无专有工具、无厂商锁定。',
    'bento.workflow.updated': '更新于',
    'bento.workflow.status.queued': '排队中',
    'bento.workflow.status.deployed': '已部署',
    'bento.workflow.tooling': 'Git · CI · 任意框架',
    'bento.network.title': '一个网络连接用户、应用与数据',
    'bento.network.body':
      '无论你在发布代码、保护登录还是加速渲染，都运行在 Origin Network™ 上，并统一管理。',

    'social.title.line1': '六大服务。',
    'social.title.line2': '一个 Origin 平台。',
    'social.lead': '可与你已上线的标准与运行时直接互操作。',

    'products.eyebrow': '产品',
    'products.title': '我们的产品',
    'products.lead': '6 个生产级服务，各自解决关键问题，也能组成完整的 Origin 技术栈。',
    'products.learnMore': '了解更多',
    'products.category.authenticate': '认证',
    'products.category.protect': '防护',
    'products.category.accelerate': '加速',
    'products.category.network': '网络',
    'products.items.xenon-auth.name': 'Origin XenonAuth™',
    'products.items.xenon-auth.tagline': '把 OAuth 做对',
    'products.items.xenon-auth.description':
      '通过我们的 OAuth 服务为应用提供认证能力，支持快速接入登录、令牌管理与跨平台身份体系。',
    'products.items.shield.name': 'Origin Shield™',
    'products.items.shield.tagline': '纵深防御',
    'products.items.shield.description':
      '基于 Origin Solide™ 技术的多层安全检查，从完整性到运行时篡改防护，全面保护你的应用。',
    'products.items.re-sync.name': 'Origin Re-Sync™',
    'products.items.re-sync.tagline': '更低延迟，更高帧率',
    'products.items.re-sync.description':
      '提升游戏性能并降低输入延迟，开箱支持 OpenGL、Vulkan 与 DirectX。',
    'products.items.solide.name': 'Origin Solide™',
    'products.items.solide.tagline': 'JVM 混淆',
    'products.items.solide.description':
      '提供轻量到重度的 JVM 混淆能力，帮助你发布更难被逆向分析的字节码。',
    'products.items.beacon.name': 'Origin Beacon™',
    'products.items.beacon.tagline': '规模化遥测',
    'products.items.beacon.description':
      '强大、安全、稳定的多维用户数据采集服务，在不牺牲信任的前提下洞察用户行为。',
    'products.items.network.name': 'Origin Network™',
    'products.items.network.tagline': '由 Origin Cloud 驱动',
    'products.items.network.description':
      '所有云服务都由 Origin Cloud 及其强大的网络合作伙伴提供支持，实现全球可靠交付。',

    'pillars.eyebrow': '一个平台，三大能力',
    'pillars.title': '应用运行所需的一切',
    'pillars.lead': 'Origin 将认证、防护与加速整合到一个栈里，让各模块协同工作。',
    'pillars.items.authenticate.title': '认证',
    'pillars.items.authenticate.blurb': '用托管 OAuth 与身份体系，为每个应用建立安全入口。',
    'pillars.items.authenticate.points.0': 'XenonAuth™ OAuth 服务',
    'pillars.items.authenticate.points.1': '令牌与会话管理',
    'pillars.items.authenticate.points.2': 'Origin Pass 身份',
    'pillars.items.protect.title': '防护',
    'pillars.items.protect.blurb': '从 JVM 字节码到运行时完整性，端到端加固应用。',
    'pillars.items.protect.points.0': 'Shield™ 分层校验',
    'pillars.items.protect.points.1': 'Solide™ 混淆',
    'pillars.items.protect.points.2': '篡改与完整性监控',
    'pillars.items.accelerate.title': '加速',
    'pillars.items.accelerate.blurb': '跨图形 API 与网络边缘，降低延迟并提升性能。',
    'pillars.items.accelerate.points.0': 'Re-Sync™ 输入延迟优化',
    'pillars.items.accelerate.points.1': 'OpenGL · Vulkan · DirectX',
    'pillars.items.accelerate.points.2': 'Origin Network™ 边缘能力',

    'team.eyebrow': '关于我们',
    'team.title': '我们的团队',
    'team.lead': '认识一下这支很棒的团队。',
    'team.roles.leader': '负责人',
    'team.roles.member': '成员',

    'build.title': '打破边界，自由构建',
    'build.lead': '加入更快交付的开发者行列，在一个平台上完成认证、防护与加速。',
    'build.cta.start': '免费开始构建',
    'build.cta.contact': '联系我们',
    'build.strip.0': '认证能力可直接接入任意应用',
    'build.strip.1': '从字节码到运行时的分层防护',
    'build.strip.2': '在 OpenGL · Vulkan · DirectX 上降低输入延迟',
    'build.strip.3': '基于 Origin Cloud 构建',

    'footer.slogan': '开放、创新、强大。',
    'footer.supportPrefix': '如需支持，请联系',
    'footer.columns.0.title': '快速开始',
    'footer.columns.0.links.0': '开始构建',
    'footer.columns.0.links.1': '联系我们',
    'footer.columns.0.links.2': '开发者状态',
    'footer.columns.1.title': '产品',
    'footer.columns.1.links.0': 'Origin XenonAuth™',
    'footer.columns.1.links.1': 'Origin Shield™',
    'footer.columns.1.links.2': 'Origin Re-Sync™',
    'footer.columns.1.links.3': 'Origin Solide™',
    'footer.columns.1.links.4': 'Origin Beacon™',
    'footer.columns.1.links.5': 'Origin Network™',
    'footer.columns.2.title': '方案',
    'footer.columns.2.links.0': '认证',
    'footer.columns.2.links.1': '防护',
    'footer.columns.2.links.2': '加速',
    'footer.columns.2.links.3': 'Origin Pass',
    'footer.columns.3.title': '公司',
    'footer.columns.3.links.0': '团队介绍',
    'footer.columns.3.links.1': 'Origin Cloud',
    'footer.columns.3.links.2': 'QQ群聊',
    'footer.columns.3.links.3': '邮箱',
    'footer.copyright': '版权所有 © 2022 - {{year}} Origin Technology',
    'footer.legal.privacy': '隐私',
    'footer.legal.terms': '条款',
    'footer.legal.status': '状态',
  },
};
