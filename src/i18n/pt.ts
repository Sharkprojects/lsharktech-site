import type { Translation } from './types';

const pt: Translation = {
  navbar: {
    home: 'Início',
    services: 'Serviços',
    projects: 'Projetos',
    about: 'Sobre',
    contact: 'Contato',
    getInTouch: 'Entre em contato',
  },
  hero: {
    title: 'Construindo Software Inteligente',
    subtitle:
      'Soluções de software de alto desempenho para Trading, Inteligência Artificial e Engenharia de Dados.',
    viewProjects: 'Ver Projetos',
    contact: 'Entre em contato',
  },
  services: {
    title: 'O Que Construímos',
    items: [
      {
        title: 'Trading Algorítmico',
        description:
          'Sistemas de trading projetados para velocidade, confiabilidade e automação.',
      },
      {
        title: 'Inteligência Artificial',
        description:
          'Aplicações baseadas em IA e automação inteligente.',
      },
      {
        title: 'Engenharia de Dados',
        description:
          'Pipelines escaláveis, análises e inteligência de negócios.',
      },
      {
        title: 'Automação',
        description:
          'Software personalizado para automatizar processos empresariais.',
      },
    ],
  },
  projects: {
    title: 'Projetos em Destaque',
    note: 'Alguns projetos são proprietários e estão disponíveis apenas para clientes. Acesso de demonstração pode ser fornecido mediante solicitação.',
    items: [
      {
        title: 'AllCripto',
        description:
          'Plataforma automatizada de arbitragem de criptomoedas.',
        features: [
          'Arbitragem Spot × Futuros',
          'Arbitragem Futuros × Futuros',
          'Integração de API',
          'Monitoramento em tempo real',
        ],
        badge: 'Público',
        badgeType: 'public',
        links: [
          { label: 'Visitar Site', url: 'https://allcripto.com' },
          { label: 'Ver Demonstração', url: 'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I' },
          { label: 'Estudo de Caso', url: '/projects/allcripto' },
        ],
      },
      {
        title: 'PolyBot Copy Trading',
        description:
          'Plataforma de copy trading assistida por IA para mercados de previsão.',
        features: [
          'Integração Polymarket',
          'Gerenciamento de portfólio',
          'Execução em tempo real',
        ],
        badge: 'Demonstração Privada',
        badgeType: 'private',
        links: [
          { label: 'Plataforma Privada', url: 'https://polybot-copytrading.vercel.app/login' },
        ],
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard profissional de trading para análises de portfólio e gestão de risco.',
        features: [
          'Análises de portfólio',
          'Gerenciamento de risco',
          'Métricas de performance',
          'Painel de trading',
        ],
        badge: 'Dashboard de Cliente',
        badgeType: 'client',
        links: [
          { label: 'Dashboard de Cliente', url: 'https://trader.allcripto.com/dashboard' },
        ],
      },
    ],
  },
  technologies: {
    title: 'Tecnologias',
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
    title: 'Engenharia de software que escala.',
    text: 'Fundada em 2023, a L Shark Tech LTDA desenvolve software inteligente focado em Inteligência Artificial, Trading Algorítmico, Automação e Engenharia de Dados. Construímos soluções escaláveis, confiáveis e de alto desempenho para empresas e mercados financeiros.',
  },
  contact: {
    title: 'Vamos construir algo grande juntos.',
    intro: 'Se você está procurando soluções de IA, sistemas de trading, automação ou engenharia de dados, ficarei feliz em discutir seu projeto.',
    email: 'leandroshark.tech@gmail.com',
    emailLabel: 'E-mail',
    location: 'Brasil',
    availability: 'Remoto • Disponível Mundialmente',
    button: 'Fale Conosco',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    companyName: 'L Shark Tech LTDA',
    founded: 'Fundada em 2023',
    tagline: 'Construindo Software Inteligente',
    subtitle: 'IA • Trading • Automação • Engenharia de Dados',
    rights: 'Todos os direitos reservados.',
  },
  allcripto: {
    title: 'AllCripto',
    overview:
      'Uma plataforma para negociação automatizada de criptomoedas, desenvolvida para executar estratégias de arbitragem e fornecer ferramentas de monitorização e gestão de operações.',
    features: [
      'Arbitragem Spot × Futuros',
      'Arbitragem Futuros × Futuros',
      'Integração com APIs de exchanges',
      'Dashboard em tempo real',
      'Gestão de risco',
      'Automação de estratégias',
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
    backToHome: '← Voltar ao Início',
  },
};

export default pt;
