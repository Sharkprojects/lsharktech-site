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
        badge: 'Public',
        badgeType: 'public',
        links: [
          { label: 'Visit Website', url: 'https://allcripto.com' },
          { label: 'Watch Demo', url: 'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I' },
          { label: 'Case Study', url: '/projects/allcripto' },
        ],
      },
      {
        title: 'PolyBot Copy Trading',
        description:
          'AI-assisted copy trading platform for prediction markets.',
        features: [
          'Polymarket integration',
          'Portfolio management',
          'Real-time execution',
        ],
        badge: 'Private Demo',
        badgeType: 'private',
        links: [
          { label: 'Private Platform', url: 'https://polybot-copytrading.vercel.app/login' },
        ],
      },
      {
        title: 'Trader Dashboard',
        description:
          'Professional trading dashboard for portfolio analytics and risk management.',
        features: [
          'Portfolio analytics',
          'Risk management',
          'Performance metrics',
          'Trading dashboard',
        ],
        badge: 'Client Dashboard',
        badgeType: 'client',
        links: [
          { label: 'Client Dashboard', url: 'https://trader.allcripto.com/dashboard' },
        ],
      },
    ],
  },
  technologies: {
    title: 'Technologies',
    items: [
      'Python',
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Cloudflare',
      'GitHub Actions',
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
    overview:
      'A platform for automated cryptocurrency trading, developed to execute arbitrage strategies and provide monitoring and operations management tools.',
    features: [
      'Spot × Futures arbitrage',
      'Futures × Futures arbitrage',
      'Exchange API integration',
      'Real-time dashboard',
      'Risk management',
      'Strategy automation',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Redis',
      'Docker',
      'WebSockets',
    ],
    links: {
      website: 'https://allcripto.com',
      videos:
        'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I',
    },
    backToHome: '← Back to Home',
  },
};

export default en;
