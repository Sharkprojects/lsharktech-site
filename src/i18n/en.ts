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
};

export default en;
