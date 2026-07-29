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
        slug: 'allcripto',
        links: [
          { label: 'Visitar Site', url: 'https://allcripto.com' },
          { label: 'Ver Demonstração', url: 'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I' },
          { label: 'Estudo de Caso', url: '/projects/allcripto' },
        ],
      },
      {
        title: 'PolyBot Copy Trading',
        description:
          'Plataforma de copy trading assistida por IA para mercados de previsão, com gestão com análise e execuções para os mercados de 5-15Min BTC, ETH, SOL em criptomoedas e motor de controle de temperaturas máximas para o mercado de Clima baseado em fontes oficiais, e análise de Surebets em casas de apostas e de mercados preditivos.',
        features: [
          'Integração Polymarket',
          'Gerenciamento de portfólio',
          'Execução em tempo real',
        ],
        badge: 'Demonstração Privada',
        badgeType: 'private',
        slug: 'polybot',
        links: [
          { label: 'Abrir Plataforma', url: 'https://polybot-copytrading.vercel.app/login' },
          { label: 'Estudo de Caso', url: '/projects/polybot' },
        ],
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard profissional de trading esportivo com insights ao vivo sobre os mais variados mercados e eventos monitorados.',
        features: [
          'Análises de portfólio',
          'Gerenciamento de risco',
          'Métricas de performance',
          'Painel de trading',
        ],
        badge: 'Dashboard de Cliente',
        badgeType: 'client',
        slug: 'trader-dashboard',
        links: [
          { label: 'Abrir Dashboard', url: 'https://trader.allcripto.com/dashboard' },
          { label: 'Estudo de Caso', url: '/projects/trader-dashboard' },
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
    description:
      'Plataforma de negociação automatizada de criptomoedas com arbitragem, integração com exchanges, dashboards em tempo real e ferramentas de gestão de risco.',
    technologies: [
      'Go',
      'Fyne',
      'SQLite',
      'WebSockets',
      'API & DOM Bot',
      'Telegram Bot',
    ],
    links: [
      { label: 'Visitar Site', url: 'https://allcripto.com' },
      { label: 'Ver Vídeos', url: 'https://www.youtube.com/playlist?list=PLsFo-9CVHpWKFgC2yFER-n0MD_-bLtU0I' },
    ],
    featuresLabel: 'Funcionalidades',
    technologiesLabel: 'Tecnologias',
    linksLabel: 'Links',
    galleryLabel: 'Capturas de Tela',
    backToHome: '← Voltar aos projetos',
  },
  polybot: {
    title: 'PolyBot Copy Trading',
    description:
      'Sistema de copy trading para Polymarket com acompanhamento de posições, execução automática e avaliação de confiança por modelos de IA, monitorização em tempo real, gestão com análise e execuções para os mercados de 5-15Min BTC, ETH, SOL em criptomoedas e motor de controle de temperaturas máximas para o mercado de Clima baseado em fontes oficiais, e análise de Surebets em casas de apostas e de mercados preditivos.',
    badge: 'Plataforma Privada',
    technologies: [
      'Python',
      'Go',
      'React',
      'Fast',
      'Sqlite',
      'Docker',
      'Telegram Bot',
      'WebSocket',
      'API Rest',
      'Modelos de IA',
    ],
    links: [
      { label: 'Abrir Plataforma', url: 'https://polybot-copytrading.vercel.app/login' },
    ],
    featuresLabel: 'Funcionalidades',
    technologiesLabel: 'Tecnologias',
    linksLabel: 'Links',
    galleryLabel: 'Capturas de Tela',
    backToHome: '← Voltar aos projetos',
  },
  traderDashboard: {
    title: 'Trader Dashboard',
    description:
      'Dashboard para monitorização de operações de trading esportivo com insights ao vivo sobre os mais variados mercados e eventos monitorados, incluindo métricas de performance, gestão de portfólio e análise de resultados.',
    badge: 'Plataforma Privada',
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
      { label: 'Abrir Dashboard', url: 'https://trader.allcripto.com/dashboard' },
    ],
    featuresLabel: 'Funcionalidades',
    technologiesLabel: 'Tecnologias',
    linksLabel: 'Links',
    galleryLabel: 'Capturas de Tela',
    backToHome: '← Voltar aos projetos',
  },
};

export default pt;
