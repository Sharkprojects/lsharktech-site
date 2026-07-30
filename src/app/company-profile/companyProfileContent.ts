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
  website: string;
  linkedin: string;
  footer: {
    companyName: string;
    founded: string;
  };
  downloadButton: string;
  projectLinkLabel: string;
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
      'A L Shark Tech desenvolve softwares inteligentes para Inteligência Artificial, automação, engenharia de dados, sistemas de trading, APIs e aplicações web de alta performance. Ajudamos empresas a reduzir tarefas repetitivas, integrar sistemas, organizar dados e implementar soluções tecnológicas sob medida.',
    servicesTitle: 'O que podemos fazer pela sua empresa',
    services: [
      {
        title: 'Automação de Processos',
        description:
          'Automação de tarefas manuais, planilhas, relatórios, processamento de dados e rotinas operacionais.',
      },
      {
        title: 'Inteligência Artificial',
        description:
          'Assistentes de IA, integração com modelos de linguagem, agentes inteligentes e análise de documentos.',
      },
      {
        title: 'APIs, Dados e Integrações',
        description:
          'APIs, integrações entre sistemas, engenharia de dados, dashboards e automação em tempo real.',
      },
    ],
    projectsTitle: 'Projetos selecionados',
    projects: [
      {
        title: 'AllCripto',
        description:
          'Plataforma de análise e arbitragem de criptomoedas com integração a múltiplas exchanges.',
        link: 'https://allcripto.com',
      },
      {
        title: 'PolyBot',
        description:
          'Sistema baseado em IA para análise e automação de operações em mercados de previsão.',
        link: 'https://lsharktech.pages.dev/projects/polybot',
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard para monitoramento de trading, métricas e dados de mercado em tempo real.',
        link: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      },
    ],
    technologiesTitle: 'Tecnologias',
    technologies: [
      'Python',
      'FastAPI',
      'Go',
      'TypeScript',
      'Next.js',
      'Docker',
      'Redis',
      'MySQL',
      'Cloudflare',
      'IA / LLMs',
    ],
    advantagesTitle: 'Por que trabalhar com a L Shark Tech?',
    advantages: [
      'Experiência em sistemas reais.',
      'Soluções personalizadas.',
      'Comunicação direta.',
      'CNPJ ativo e emissão de nota fiscal.',
    ],
    ctaText:
      'Tem um processo manual, integração pendente ou necessidade de automação?',
    ctaDescription: 'Solicite uma análise inicial.',
    ctaButton: 'Solicitar análise',
    ctaMailto:
      'mailto:leandroshark.tech@gmail.com?subject=Análise%20de%20projeto%20-%20L%20Shark%20Tech',
    email: 'leandroshark.tech@gmail.com',
    website: 'lsharktech.pages.dev',
    linkedin: 'linkedin.com/in/lsharktech',
    footer: {
      companyName: 'L Shark Tech LTDA',
      founded: 'Fundada em julho de 2023',
    },
    downloadButton: 'Baixar apresentação em PDF',
    projectLinkLabel: 'Ver projeto',
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
      'L Shark Tech develops intelligent software for Artificial Intelligence, automation, data engineering, trading systems, APIs and high-performance web applications. We help companies reduce repetitive work, integrate systems, organize data and implement custom technology solutions.',
    servicesTitle: 'What We Can Build for Your Business',
    services: [
      {
        title: 'Process Automation',
        description:
          'Automation of manual tasks, spreadsheets, reports, data processing and operational workflows.',
      },
      {
        title: 'Artificial Intelligence',
        description:
          'AI assistants, language model integrations, intelligent agents and document analysis.',
      },
      {
        title: 'APIs, Data & Integrations',
        description:
          'APIs, system integrations, data engineering, dashboards and real-time automation.',
      },
    ],
    projectsTitle: 'Selected Projects',
    projects: [
      {
        title: 'AllCripto',
        description:
          'Cryptocurrency analysis and arbitrage platform with multiple exchange integrations.',
        link: 'https://allcripto.com',
      },
      {
        title: 'PolyBot',
        description:
          'AI system for analysis and automated operations in prediction markets.',
        link: 'https://lsharktech.pages.dev/projects/polybot',
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard for monitoring trading activity, metrics and real-time market data.',
        link: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      },
    ],
    technologiesTitle: 'Technology Stack',
    technologies: [
      'Python',
      'FastAPI',
      'Go',
      'TypeScript',
      'Next.js',
      'Docker',
      'Redis',
      'MySQL',
      'Cloudflare',
      'AI / LLMs',
    ],
    advantagesTitle: 'Why Work With L Shark Tech?',
    advantages: [
      'Experience with real systems.',
      'Custom solutions.',
      'Direct communication.',
      'Active CNPJ and invoice issuance.',
    ],
    ctaText:
      'Do you have a manual process, missing integration or automation challenge?',
    ctaDescription: 'Request an initial assessment.',
    ctaButton: 'Request assessment',
    ctaMailto:
      'mailto:leandroshark.tech@gmail.com?subject=Project%20Assessment%20-%20L%20Shark%20Tech',
    email: 'leandroshark.tech@gmail.com',
    website: 'lsharktech.pages.dev',
    linkedin: 'linkedin.com/in/lsharktech',
    footer: {
      companyName: 'L Shark Tech LTDA',
      founded: 'Founded in July 2023',
    },
    downloadButton: 'Download PDF Presentation',
    projectLinkLabel: 'View project',
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
      'L Shark Tech desarrolla software inteligente para Inteligencia Artificial, automatización, ingeniería de datos, sistemas de trading, APIs y aplicaciones web de alto rendimiento. Ayudamos a las empresas a reducir tareas repetitivas, integrar sistemas, organizar datos e implementar soluciones tecnológicas personalizadas.',
    servicesTitle: 'Lo que Podemos Desarrollar para su Empresa',
    services: [
      {
        title: 'Automatización de Procesos',
        description:
          'Automatización de tareas manuales, hojas de cálculo, informes, procesamiento de datos y rutinas operativas.',
      },
      {
        title: 'Inteligencia Artificial',
        description:
          'Asistentes de IA, integración con modelos de lenguaje, agentes inteligentes y análisis de documentos.',
      },
      {
        title: 'APIs, Datos e Integraciones',
        description:
          'APIs, integraciones entre sistemas, ingeniería de datos, dashboards y automatización en tiempo real.',
      },
    ],
    projectsTitle: 'Proyectos Seleccionados',
    projects: [
      {
        title: 'AllCripto',
        description:
          'Plataforma de análisis y arbitraje de criptomonedas con integración a múltiples exchanges.',
        link: 'https://allcripto.com',
      },
      {
        title: 'PolyBot',
        description:
          'Sistema basado en IA para análisis y automatización de operaciones en mercados de predicción.',
        link: 'https://lsharktech.pages.dev/projects/polybot',
      },
      {
        title: 'Trader Dashboard',
        description:
          'Dashboard para monitoreo de trading, métricas y datos de mercado en tiempo real.',
        link: 'https://lsharktech.pages.dev/projects/trader-dashboard',
      },
    ],
    technologiesTitle: 'Tecnologías',
    technologies: [
      'Python',
      'FastAPI',
      'Go',
      'TypeScript',
      'Next.js',
      'Docker',
      'Redis',
      'MySQL',
      'Cloudflare',
      'IA / LLMs',
    ],
    advantagesTitle: '¿Por Qué Trabajar con L Shark Tech?',
    advantages: [
      'Experiencia en sistemas reales.',
      'Soluciones personalizadas.',
      'Comunicación directa.',
      'CNPJ activo y emisión de factura.',
    ],
    ctaText:
      '¿Tiene un proceso manual, una integración pendiente o una necesidad de automatización?',
    ctaDescription: 'Solicite una evaluación inicial.',
    ctaButton: 'Solicitar evaluación',
    ctaMailto:
      'mailto:leandroshark.tech@gmail.com?subject=Evaluación%20de%20proyecto%20-%20L%20Shark%20Tech',
    email: 'leandroshark.tech@gmail.com',
    website: 'lsharktech.pages.dev',
    linkedin: 'linkedin.com/in/lsharktech',
    footer: {
      companyName: 'L Shark Tech LTDA',
      founded: 'Fundada en julio de 2023',
    },
    downloadButton: 'Descargar Presentación en PDF',
    projectLinkLabel: 'Ver proyecto',
  },
};
