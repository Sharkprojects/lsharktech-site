import type { Translation } from './types';

const en: Translation = {
  navbar: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    getInTouch: 'Get in touch',
  },
  hero: {
    title: 'Building Intelligent Software',
    subtitle:
      'High-performance software solutions for Trading, Artificial Intelligence and Data Engineering.',
    viewProjects: 'View Projects',
    contact: 'Get in touch',
  },
  services: {
    title: 'What We Build',
    items: [
      {
        title: 'Algorithmic Trading',
        description:
          'Trading systems designed for speed, reliability and automation.',
      },
      {
        title: 'Artificial Intelligence',
        description:
          'AI-powered applications and intelligent automation.',
      },
      {
        title: 'Data Engineering',
        description:
          'Scalable pipelines, analytics and business intelligence.',
      },
      {
        title: 'Automation',
        description:
          'Custom software to automate business processes.',
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    note: 'Some projects are proprietary and available only to clients. Demonstration access can be provided upon request.',
    items: [
      {
        title: 'AllCripto',
        description:
          'Automated cryptocurrency arbitrage platform.',
        features: [
          'Spot × Futures arbitrage',
          'Futures × Futures arbitrage',
          'API integration',
          'Real-time monitoring',
        ],
        badge: 'Private Demo',
        badgeType: 'private',
        slug: 'allcripto',
        links: [
          { label: 'Visit Website', url: 'https://allcripto.com' },
          { label: 'Watch Demo', url: 'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I' },
          { label: 'Case Study', url: '/projects/allcripto' },
        ],
      },
      {
        title: 'PolyBot Copy Trading',
        description:
          'AI-assisted copy trading platform for prediction markets, with analysis and execution management for 5-15Min BTC, ETH, SOL crypto markets, a temperature control engine for Climate markets based on official sources, and Surebet analysis across bookmakers and prediction markets.',
        features: [
          'Polymarket integration',
          'Portfolio management',
          'Real-time execution',
        ],
        badge: 'Private Demo',
        badgeType: 'private',
        slug: 'polybot',
        links: [
          { label: 'Open Platform', url: 'https://polybot-copytrading.vercel.app/login' },
          { label: 'Case Study', url: '/projects/polybot' },
        ],
      },
      {
        title: 'Trader Dashboard',
        description:
          'Professional sports trading dashboard with live insights across multiple markets and monitored events.',
        features: [
          'Portfolio analytics',
          'Risk management',
          'Performance metrics',
          'Trading dashboard',
        ],
        badge: 'Client Dashboard',
        badgeType: 'client',
        slug: 'trader-dashboard',
        links: [
          { label: 'Open Dashboard', url: 'https://trader.allcripto.com/dashboard' },
          { label: 'Case Study', url: '/projects/trader-dashboard' },
        ],
      },
    ],
  },
  technologies: {
    title: 'Technologies',
    categories: [
      {
        name: 'Languages',
        items: ['Python', 'Go', 'TypeScript', 'JavaScript', 'HTML5', 'CSS'],
      },
      {
        name: 'Frontend',
        items: ['React', 'Next.js', 'Fyne'],
      },
      {
        name: 'Backend',
        items: ['FastAPI', 'Microservices', 'Redis'],
      },
      {
        name: 'Databases',
        items: ['SQLite', 'MySQL', 'Oracle Cloud DB'],
      },
      {
        name: 'AI',
        items: ['LLM Integration', 'AI Agents', 'Artificial Intelligence'],
      },
      {
        name: 'Cloud & DevOps',
        items: ['Docker', 'AWS', 'Cloudflare', 'GitHub Actions'],
      },
      {
        name: 'Specialties',
        items: ['Task Scheduling', 'Real-Time Systems', 'Telegram, Discord & Slack Bot'],
      },
    ],
  },
  about: {
    title: 'Engineering software that scales.',
    text: 'Founded in 2023, L Shark Tech LTDA develops intelligent software focused on Artificial Intelligence, Algorithmic Trading, Automation and Data Engineering. We build scalable, reliable and high-performance solutions for businesses and financial markets.',
  },
  contact: {
    title: "Let's build something great together.",
    intro: "Whether you're looking for AI solutions, trading systems, automation, or data engineering, I'd be happy to discuss your project.",
    email: 'leandroshark.tech@gmail.com',
    emailLabel: 'Email',
    location: 'Brazil',
    availability: 'Remote • Available Worldwide',
    button: 'Contact Us',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    telegram: 'Telegram',
  },
  footer: {
    companyName: 'L Shark Tech LTDA',
    founded: 'Founded in 2023',
    tagline: 'Engineering Intelligent Systems',
    subtitle: 'AI • Trading • Automation • Data Engineering',
    rights: 'All rights reserved.',
  },
  allcripto: {
    title: 'AllCripto',
    description:
      'Automated cryptocurrency trading platform with arbitrage, exchange integration, real-time dashboards and risk management tools.',
    technologies: [
      'Go',
      'Fyne',
      'SQLite',
      'WebSockets',
      'API & DOM Bot',
      'Telegram Bot',
    ],
    links: [
      { label: 'Visit Website', url: 'https://allcripto.com' },
      { label: 'Watch Videos', url: 'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I' },
      { label: 'Telegram', url: 'https://t.me/allcripto_lshark_bot?start=SEM_REF' },
      { label: 'Instagram', url: 'https://instagram.com/allcripto.new' },
    ],
    featuresLabel: 'Features',
    technologiesLabel: 'Technologies',
    linksLabel: 'Links',
    galleryLabel: 'Screenshots',
    backToHome: '← Back to projects',
  },
  polybot: {
    title: 'PolyBot Copy Trading',
    description:
      'Copy trading system for Polymarket with position tracking, automatic execution, real-time monitoring, analysis and execution management for 5-15Min BTC, ETH, SOL crypto markets, a temperature control engine for Climate markets based on official sources, and Surebet analysis across bookmakers and prediction markets.',
    badge: 'Private Platform',
    technologies: [
      'Python',
      'Go',
      'React',
      'Fast',
      'Sqlite',
      'Docker',
      'Telegram Bot',
      'WebSocket',
      'REST API',
      'AI Models',
    ],
    links: [
      { label: 'Open Platform', url: 'https://polybot-copytrading.vercel.app/login' },
    ],
    featuresLabel: 'Features',
    technologiesLabel: 'Technologies',
    linksLabel: 'Links',
    galleryLabel: 'Screenshots',
    backToHome: '← Back to projects',
  },
  traderDashboard: {
    title: 'Trader Dashboard',
    description:
      'Sports trading dashboard with live insights across multiple markets and monitored events, featuring performance metrics, portfolio management and results analysis.',
    badge: 'Private Platform',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'FastAPI',
      'SQLite Cloud',
      'Telegram Bot',
      'Trading APIs',
    ],
    links: [
      { label: 'Open Dashboard', url: 'https://trader.allcripto.com/dashboard' },
    ],
    featuresLabel: 'Features',
    technologiesLabel: 'Technologies',
    linksLabel: 'Links',
    galleryLabel: 'Screenshots',
    backToHome: '← Back to projects',
  },
};

export default en;
