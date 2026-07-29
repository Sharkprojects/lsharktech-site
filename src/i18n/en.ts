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
    contact: 'Contact',
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
    items: [
      {
        title: 'Crypto Arbitrage Engine',
        description:
          'Real-time arbitrage detection across multiple cryptocurrency exchanges with automated execution.',
        badge: 'Private Project',
        learnMore: 'Learn More',
      },
      {
        title: 'Sports Trading Platform',
        description:
          'High-frequency trading platform for sports betting markets with advanced risk management.',
        badge: 'Private Project',
        learnMore: 'Learn More',
      },
      {
        title: 'Polymarket Automation',
        description:
          'Automated prediction market strategies with real-time data analysis and execution.',
        badge: 'Private Project',
        learnMore: 'Learn More',
      },
      {
        title: 'Business Intelligence Platform',
        description:
          'Custom analytics dashboard with real-time data processing and interactive visualizations.',
        badge: 'Private Project',
        learnMore: 'Learn More',
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
    text: 'At L Shark Tech, we build robust software focused on performance, scalability and maintainability. Our mission is to transform complex business problems into elegant technological solutions.',
  },
  contact: {
    title: "Let's build something together.",
    button: 'Contact Us',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  footer: {
    tagline: 'Building Intelligent Software.',
    copyright: '© 2026 L Shark Tech.',
  },
};

export default en;
