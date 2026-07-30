export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  link: string;
}

export interface LanguageContent {
  id: string;
  lang: string;
  label: string;
  companyName: string;
  title: string;
  subtitle: string;
  about: string;
  servicesTitle: string;
  services: ServiceItem[];
  projectsTitle: string;
  projects: ProjectItem[];
  technologiesTitle: string;
  technologies: string[];
  advantagesTitle: string;
  advantages: string[];
  ctaText: string;
  ctaDescription: string;
  ctaButton: string;
  ctaMailto: string;
  email: string;
  footer: {
    companyName: string;
    founded: string;
    tagline: string;
  };
  downloadButton: string;
}

export const companyProfileContent: Record<string, LanguageContent> = {
  pt: {
    id: 'portugues',
    lang: 'pt',
    label: 'PT',
    companyName: 'L Shark Tech LTDA',
    title: 'Engenharia de Sistemas Inteligentes',
    subtitle:
      'Transformamos processos manuais e desafios técnicos em soluções inteligentes, automatizadas e preparadas para produção.',
    about:
      'A L Shark Tech desenvolve softwares inteligentes para Inteligência Artificial, automação, engenharia de dados, sistemas de trading, APIs e aplicações web de alta performance.\n\nAjudamos empresas a reduzir tarefas repetitivas, integrar sistemas, organizar dados e implementar soluções tecnológicas sob medida.',
    servicesTitle: 'O que podemos fazer pela sua empresa',
    services: [
      {
        title: 'Automação de Processos',
        description:
          'Automação de tarefas manuais, planilhas, relatórios, processamento de dados, geração de documentos e rotinas operacionais.',
      },
      {
        title: 'Inteligência Artificial',
        description:
          'Assistentes de IA, integração com modelos de linguagem, agentes inteligentes, análise de documentos e automação com IA.',
      },
      {
        title: 'APIs e Integrações',
        description:
          'Desenvolvimento de APIs com Python e FastAPI, integrações entre sistemas, webhooks, autenticação e processamento em tempo real.',
      },
      {
        title: 'Engenharia de Dados e Dashboards',
        description:
          'Coleta, transformação e organização de dados, dashboards, indicadores, relatórios automatizados e visualizações de negócio.',
      },
    ],
    projectsTitle: 'Projetos selecionados',
    projects: [
      {
        title: 'AllCripto',
        description:
          'Plataforma de análise e arbitragem de criptomoedas, com integração a múltiplas exchanges, monitoramento de mercado e identificação de oportunidades.',
        link: 'https://allcripto.com',
      },
      {
        title: 'PolyBot',
        description:
          'Sistema baseado em Inteligência Artificial para análise e automação de operações em mercados de previsão.',
        link: 'https://lsharktech.pages.dev/projects/polybot',
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard para monitoramento de trading, métricas, posições, resultados e dados de mercado em tempo real.',
        link: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      },
    ],
    technologiesTitle: 'Tecnologias',
    technologies: [
      'Python',
      'Go',
      'TypeScript',
      'FastAPI',
      'Next.js',
      'React',
      'Docker',
      'Redis',
      'MySQL',
      'REST APIs',
      'WebSockets',
      'Cloudflare',
      'AWS',
      'Inteligência Artificial',
      'LLMs',
      'Automação',
      'Engenharia de Dados',
    ],
    advantagesTitle: 'Por que trabalhar com a L Shark Tech?',
    advantages: [
      'Experiência em projetos reais e sistemas complexos.',
      'Comunicação direta com o desenvolvedor responsável.',
      'Soluções personalizadas de acordo com o problema da empresa.',
      'Desenvolvimento de sistemas preparados para produção.',
      'CNPJ ativo.',
      'Possibilidade de emissão de nota fiscal.',
      'Atendimento remoto para empresas brasileiras e internacionais.',
    ],
    ctaText:
      'Sua empresa possui algum processo manual, integração pendente ou necessidade de automação?',
    ctaDescription: 'Vamos conversar sobre uma solução prática.',
    ctaButton: 'Solicitar uma conversa',
    ctaMailto:
      'mailto:leandroshark.tech@gmail.com?subject=Solicitação%20de%20projeto%20-%20L%20Shark%20Tech',
    email: 'leandroshark.tech@gmail.com',
    footer: {
      companyName: 'L Shark Tech LTDA',
      founded: 'Fundada em julho de 2023',
      tagline: 'Engenharia de Sistemas Inteligentes',
    },
    downloadButton: 'Baixar apresentação em PDF',
  },
  en: {
    id: 'english',
    lang: 'en',
    label: 'EN',
    companyName: 'L Shark Tech LTDA',
    title: 'Engineering Intelligent Systems',
    subtitle:
      'We transform manual processes and technical challenges into intelligent, automated and production-ready solutions.',
    about:
      'L Shark Tech develops intelligent software for Artificial Intelligence, automation, data engineering, trading systems, APIs and high-performance web applications.\n\nWe help companies reduce repetitive work, integrate systems, organize data and implement custom technology solutions.',
    servicesTitle: 'What We Can Build for Your Business',
    services: [
      {
        title: 'Process Automation',
        description:
          'Automation of manual tasks, spreadsheets, reports, data processing, document generation and operational workflows.',
      },
      {
        title: 'Artificial Intelligence',
        description:
          'AI assistants, language model integrations, intelligent agents, document analysis and AI-powered automation.',
      },
      {
        title: 'APIs and Integrations',
        description:
          'Development of Python and FastAPI APIs, system integrations, webhooks, authentication and real-time processing.',
      },
      {
        title: 'Data Engineering and Dashboards',
        description:
          'Data collection, transformation and organization, dashboards, business indicators, automated reports and data visualization.',
      },
    ],
    projectsTitle: 'Selected Projects',
    projects: [
      {
        title: 'AllCripto',
        description:
          'Cryptocurrency analysis and arbitrage platform with multiple exchange integrations, market monitoring and opportunity detection.',
        link: 'https://allcripto.com',
      },
      {
        title: 'PolyBot',
        description:
          'Artificial Intelligence system for analysis and automated operations in prediction markets.',
        link: 'https://lsharktech.pages.dev/projects/polybot',
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard for monitoring trading activity, metrics, positions, performance and real-time market data.',
        link: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      },
    ],
    technologiesTitle: 'Technology Stack',
    technologies: [
      'Python',
      'Go',
      'TypeScript',
      'FastAPI',
      'Next.js',
      'React',
      'Docker',
      'Redis',
      'MySQL',
      'REST APIs',
      'WebSockets',
      'Cloudflare',
      'AWS',
      'Artificial Intelligence',
      'LLMs',
      'Automation',
      'Data Engineering',
    ],
    advantagesTitle: 'Why Work With L Shark Tech?',
    advantages: [
      'Experience with real-world projects and complex systems.',
      'Direct communication with the responsible developer.',
      'Custom solutions based on each company\'s problem.',
      'Production-ready software development.',
      'Active Brazilian company registration.',
      'Invoice issuance available.',
      'Remote service for Brazilian and international companies.',
    ],
    ctaText:
      'Does your company have a manual process, missing integration or automation challenge?',
    ctaDescription: "Let's discuss a practical solution.",
    ctaButton: 'Start a Conversation',
    ctaMailto:
      'mailto:leandroshark.tech@gmail.com?subject=Project%20Request%20-%20L%20Shark%20Tech',
    email: 'leandroshark.tech@gmail.com',
    footer: {
      companyName: 'L Shark Tech LTDA',
      founded: 'Founded in July 2023',
      tagline: 'Engineering Intelligent Systems',
    },
    downloadButton: 'Download PDF Presentation',
  },
  es: {
    id: 'espanol',
    lang: 'es',
    label: 'ES',
    companyName: 'L Shark Tech LTDA',
    title: 'Ingeniería de Sistemas Inteligentes',
    subtitle:
      'Transformamos procesos manuales y desafíos técnicos en soluciones inteligentes, automatizadas y preparadas para producción.',
    about:
      'L Shark Tech desarrolla software inteligente para Inteligencia Artificial, automatización, ingeniería de datos, sistemas de trading, APIs y aplicaciones web de alto rendimiento.\n\nAyudamos a las empresas a reducir tareas repetitivas, integrar sistemas, organizar datos e implementar soluciones tecnológicas personalizadas.',
    servicesTitle: 'Lo que Podemos Desarrollar para su Empresa',
    services: [
      {
        title: 'Automatización de Procesos',
        description:
          'Automatización de tareas manuales, hojas de cálculo, informes, procesamiento de datos, generación de documentos y rutinas operativas.',
      },
      {
        title: 'Inteligencia Artificial',
        description:
          'Asistentes de IA, integración con modelos de lenguaje, agentes inteligentes, análisis de documentos y automatización con IA.',
      },
      {
        title: 'APIs e Integraciones',
        description:
          'Desarrollo de APIs con Python y FastAPI, integraciones entre sistemas, webhooks, autenticación y procesamiento en tiempo real.',
      },
      {
        title: 'Ingeniería de Datos y Dashboards',
        description:
          'Recopilación, transformación y organización de datos, dashboards, indicadores, informes automatizados y visualización de información empresarial.',
      },
    ],
    projectsTitle: 'Proyectos Seleccionados',
    projects: [
      {
        title: 'AllCripto',
        description:
          'Plataforma de análisis y arbitraje de criptomonedas con integración a múltiples exchanges, monitoreo del mercado y detección de oportunidades.',
        link: 'https://allcripto.com',
      },
      {
        title: 'PolyBot',
        description:
          'Sistema basado en Inteligencia Artificial para análisis y automatización de operaciones en mercados de predicción.',
        link: 'https://lsharktech.pages.dev/projects/polybot',
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard para monitoreo de trading, métricas, posiciones, resultados y datos de mercado en tiempo real.',
        link: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      },
    ],
    technologiesTitle: 'Tecnologías',
    technologies: [
      'Python',
      'Go',
      'TypeScript',
      'FastAPI',
      'Next.js',
      'React',
      'Docker',
      'Redis',
      'MySQL',
      'REST APIs',
      'WebSockets',
      'Cloudflare',
      'AWS',
      'Inteligencia Artificial',
      'LLMs',
      'Automatización',
      'Ingeniería de Datos',
    ],
    advantagesTitle: '¿Por Qué Trabajar con L Shark Tech?',
    advantages: [
      'Experiencia en proyectos reales y sistemas complejos.',
      'Comunicación directa con el desarrollador responsable.',
      'Soluciones personalizadas de acuerdo con el problema de cada empresa.',
      'Desarrollo de sistemas preparados para producción.',
      'Empresa brasileña activa.',
      'Emisión de factura disponible.',
      'Atención remota para empresas brasileñas e internacionales.',
    ],
    ctaText:
      '¿Su empresa tiene algún proceso manual, integración pendiente o necesidad de automatización?',
    ctaDescription: 'Hablemos sobre una solución práctica.',
    ctaButton: 'Solicitar una Conversación',
    ctaMailto:
      'mailto:leandroshark.tech@gmail.com?subject=Solicitud%20de%20proyecto%20-%20L%20Shark%20Tech',
    email: 'leandroshark.tech@gmail.com',
    footer: {
      companyName: 'L Shark Tech LTDA',
      founded: 'Fundada en julio de 2023',
      tagline: 'Ingeniería de Sistemas Inteligentes',
    },
    downloadButton: 'Descargar Presentación en PDF',
  },
};
