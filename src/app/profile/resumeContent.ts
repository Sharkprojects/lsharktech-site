export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
}

export interface ResumeEducation {
  institution: string;
  course: string;
  period: string;
  field?: string;
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  credentialId?: string;
  description?: string;
}

export interface ResumeSkillGroup {
  title: string;
  skills: string[];
}

export interface ResumeContent {
  id: string;
  lang: string;
  label: string;
  fullName: string;
  headline: string;
  location: string;
  profileTitle: string;
  profile: string;
  experienceTitle: string;
  experience: ResumeExperience[];
  educationTitle: string;
  education: ResumeEducation[];
  certificationsTitle: string;
  certifications: ResumeCertification[];
  skillsTitle: string;
  skillGroups: ResumeSkillGroup[];
  contacts: {
    linkedin: string;
    website: string;
    phone: string;
    phoneDisplay: string;
    email: string;
  };
  credentialLabel: string;
  downloadLabel: string;
  photoAlt: string;
}

export const resumeContent: Record<string, ResumeContent> = {
  pt: {
    id: 'curriculo-pt',
    lang: 'pt',
    label: 'PT',
    fullName: 'Leandro Souza Gomes',
    headline:
      'Data Analyst | Python Developer | AI & Automation | iGaming & Sportsbook | Power BI | SQL',
    location: 'Santa Rita, Paraíba, Brasil',
    profileTitle: 'Perfil',
    profile:
      'Analista de dados e desenvolvedor com mais de 4 anos em operações de Sportsbook e iGaming, monitorando indicadores, fluxos e incidentes para garantir estabilidade e performance. Combino análise de dados com automação em Python e Go, Power BI e SQL para transformar métricas em decisões. Certificado em Google Analytics, Web Analytics e GA4, com trilha sólida em front-end, back-end e infraestrutura AWS.',
    experienceTitle: 'Experiência',
    experience: [
      {
        role: 'Analista de Suporte | Sportsbook & iGaming Operations',
        company: 'B2B TECH',
        period: 'mai 2022 – o momento · 4 anos 3 meses',
        location: 'Recife · Remoto',
        description:
          'Responsável pelo acompanhamento operacional e analítico do Sportsbook em plataforma iGaming, monitorando desempenho, fluxos, indicadores, incidentes e suporte às operações para garantir estabilidade, performance e melhor experiência do usuário.',
        skills: [
          'Suporte técnico',
          'Análise de dados',
          'Monitoração de sistemas',
          'Gestão de incidentes',
          'Sportsbook Operations',
          'iGaming',
          'Atendimento ao cliente',
          'SQL',
          'Gestão de tráfego',
        ],
      },
      {
        role: 'Gerente de vendas',
        company: 'Comercial de Alimentos Hora H LTDA',
        period: 'mar 2009 – mai 2022 · 13 anos 3 meses',
        description:
          'Gestão de equipes comerciais, planejamento de vendas, acompanhamento de metas, expansão da carteira de clientes e otimização de operações comerciais no setor de alimentos.',
        skills: [
          'Vendas',
          'Estratégia de marketing',
          'Promoção de vendas',
          'Segurança alimentar',
          'Estatísticas sobre clientes',
          'Operações comerciais',
        ],
      },
      {
        role: 'Assistente de escritório',
        company: 'Auto Posto Intermares',
        period: 'mai 2002 – fev 2009 · 6 anos 10 meses',
        location: 'Cabedelo, Paraíba, Brasil',
        description:
          'Rotinas administrativas, organização de documentos, atendimento ao público e apoio operacional ao posto de combustíveis.',
        skills: [],
      },
    ],
    educationTitle: 'Formação Acadêmica',
    education: [
      {
        institution: 'UNOPAR – Universidade Norte do Paraná',
        course: 'Desenvolvimento Avançado em Java',
        period: 'mar 2014 – dez 2014',
        field: 'Information Technology',
      },
      {
        institution: 'FATEC PB',
        course: 'Tecnologia em Sistemas para Internet',
        period: '2010 – 2013',
      },
    ],
    certificationsTitle: 'Certificações & Cursos',
    certifications: [
      {
        name: 'Web Analytics (COMPLETO) – Muito além do Google Analytics',
        issuer: 'Udemy Brasil',
        date: 'abr 2026',
        credentialId: 'UC-c3d4cf20-dcff-41f8-987c-0cd090e9910d',
        description:
          'Mensuração de resultados, interpretação de KPIs, comportamento do usuário, funil de conversão, otimização de campanhas e relatórios estratégicos.',
      },
      {
        name: 'Curso de Google Analytics 4 – do básico ao avançado',
        issuer: 'Udemy Brasil',
        date: 'abr 2026',
        credentialId: 'UC-bf03c772-d0c9-4974-a4df-f22885923f35',
        description:
          'Configuração do GA4, eventos e conversões, relatórios, métricas e KPIs, integração com Google Ads e Tag Manager e insights para crescimento.',
      },
      {
        name: 'Google Analytics Certification',
        issuer: 'Google',
        date: 'abr 2026',
        expiry: 'abr 2027',
        credentialId: '1799030805',
      },
      {
        name: 'Trackeando conversões com pixel do Facebook e Google Ads',
        issuer: 'Udemy Brasil',
        date: 'abr 2026',
        credentialId: 'UC-f4cf8128-b037-47fd-9b78-b761c99b195e',
      },
      {
        name: 'Building GUI Applications with Fyne and Go (Golang)',
        issuer: 'Udemy Brasil',
        date: 'dez 2024',
        credentialId: 'UC-1c6fef35-b74b-424d-9240-c59d30e63f88',
        description:
          'Curso em GoLang com Fyne para criação de aplicações Desktop.',
      },
      {
        name: 'Como Criar Robôs no Telegram com Python',
        issuer: 'Udemy Brasil',
        date: 'jul 2024',
        credentialId: 'UC-b31ee9bd-403e-4f80-a43a-34d8e2914dbe',
      },
      {
        name: 'Aprenda Golang do Zero! Desenvolva uma aplicação completa',
        issuer: 'Udemy Brasil',
        date: 'jul 2024',
        credentialId: 'UC-90854b2e-e656-49cd-815a-a25e23a9e808',
        description:
          'Rede social similar ao Facebook em Go, com HTML5, CSS, Javascript e MySQL.',
      },
      {
        name: 'Conhecendo sobre infraestrutura AWS',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '6d6a41e6-f726-8868-5722-3bb10c11aa3b',
      },
      {
        name: 'Back-end em Node.js',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '72163f90-85bf-84e7-28c6-f34d5cefcf08',
      },
      {
        name: 'API Rest',
        issuer: 'Ada',
        date: 'mai 2024',
        credentialId: '40f0d8b6-0756-8692-4dc8-6f377108e030',
      },
      {
        name: 'Figma para Devs',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '12983dc0-d02b-aad1-bbeb-41b2d6dc6e72',
      },
      {
        name: 'Trilha digital | Coders 24 | Front End',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '12ac5f71-eaa0-a2b1-7d69-54e1dd88df22',
      },
      {
        name: 'Data Dive',
        issuer: 'FIAP',
        date: 'abr 2024',
        credentialId: '1F9A3318-641E-444A-8DBB-D52F4840EF29',
      },
    ],
    skillsTitle: 'Competências',
    skillGroups: [
      {
        title: 'Conhecimento do setor',
        skills: [
          'Análise de dados',
          'Apostas esportivas',
          'Cassino',
          'Jogos de cassino',
          'Crypto',
          'Criptomoeda',
          'Gestão de riscos',
          'Análise de risco',
          'Análises de mercado',
          'Operações comerciais',
        ],
      },
      {
        title: 'Ferramentas e tecnologias',
        skills: [
          'Python',
          'Go',
          'Node.js',
          'TypeScript',
          'JavaScript',
          'HTML5',
          'CSS',
          'SQL',
          'MySQL',
          'Amazon Web Services',
          'Microsoft Power BI',
          'Microsoft Excel',
          'API REST',
          'Figma',
          'Telegram',
          'Bancos de dados relacionais',
          'Bibliotecas JavaScript',
        ],
      },
      {
        title: 'Desenvolvimento & Operações',
        skills: [
          'Programação orientada a objetos (POO)',
          'Linguagens orientadas a objetos',
          'Linguagens de programação',
          'Desenvolvimento de software',
          'Desenvolvimento web',
          'Desenvolvimento de front-end',
          'Codificação de front-end',
          'Design de front-end',
          'Desenvolvimento de back-end',
          'Desenvolvimento de aplicativos para desktop',
          'Monitoração de sistemas',
          'Suporte técnico',
          'Gestão de incidentes',
          'Sportsbook Operations',
          'iGaming',
          'Atendimento ao cliente',
          'Gestão de tráfego',
          'Estratégia de marketing',
          'Vendas',
          'Promoção de vendas',
          'Segurança alimentar',
          'Estatísticas sobre clientes',
          'Front',
        ],
      },
    ],
    contacts: {
      linkedin: 'linkedin.com/in/lsharktech',
      website: 'lsharktech.pages.dev',
      phone: '83981265024',
      phoneDisplay: '+55 83 98126-5024',
      email: 'leandroshark.tech@gmail.com',
    },
    credentialLabel: 'Credencial',
    downloadLabel: 'Baixar currículo em PDF',
    photoAlt: 'Foto 3x4 de Leandro Souza Gomes',
  },
  en: {
    id: 'resume-en',
    lang: 'en',
    label: 'EN',
    fullName: 'Leandro Souza Gomes',
    headline:
      'Data Analyst | Python Developer | AI & Automation | iGaming & Sportsbook | Power BI | SQL',
    location: 'Santa Rita, Paraíba, Brazil',
    profileTitle: 'Profile',
    profile:
      'Data analyst and developer with 4+ years in Sportsbook and iGaming operations, monitoring indicators, workflows and incidents to ensure stability and performance. I combine data analysis with Python and Go automation, Power BI and SQL to turn metrics into decisions. Certified in Google Analytics, Web Analytics and GA4, with a solid track in front-end, back-end and AWS infrastructure.',
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Support Analyst | Sportsbook & iGaming Operations',
        company: 'B2B TECH',
        period: 'May 2022 – Present · 4 yrs 3 mos',
        location: 'Recife · Remote',
        description:
          'Responsible for the operational and analytical monitoring of the Sportsbook on an iGaming platform, tracking performance, workflows, indicators, incidents and operations support to ensure stability, performance and the best user experience.',
        skills: [
          'Technical Support',
          'Data Analysis',
          'System Monitoring',
          'Incident Management',
          'Sportsbook Operations',
          'iGaming',
          'Customer Service',
          'SQL',
          'Traffic Management',
        ],
      },
      {
        role: 'Sales Manager',
        company: 'Comercial de Alimentos Hora H LTDA',
        period: 'Mar 2009 – May 2022 · 13 yrs 3 mos',
        description:
          'Management of sales teams, sales planning, target tracking, client portfolio expansion and optimization of commercial operations in the food sector.',
        skills: [
          'Sales',
          'Marketing Strategy',
          'Sales Promotion',
          'Food Safety',
          'Customer Statistics',
          'Commercial Operations',
        ],
      },
      {
        role: 'Office Assistant',
        company: 'Auto Posto Intermares',
        period: 'May 2002 – Feb 2009 · 6 yrs 10 mos',
        location: 'Cabedelo, Paraíba, Brazil',
        description:
          'Administrative routines, document organization, customer service and operational support to the fuel station.',
        skills: [],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        institution: 'UNOPAR – Universidade Norte do Paraná',
        course: 'Advanced Development in Java',
        period: 'Mar 2014 – Dec 2014',
        field: 'Information Technology',
      },
      {
        institution: 'FATEC PB',
        course: 'Internet Systems Technology',
        period: '2010 – 2013',
      },
    ],
    certificationsTitle: 'Certifications & Courses',
    certifications: [
      {
        name: 'Web Analytics (COMPLETE) – Far Beyond Google Analytics',
        issuer: 'Udemy Brasil',
        date: 'Apr 2026',
        credentialId: 'UC-c3d4cf20-dcff-41f8-987c-0cd090e9910d',
        description:
          'Result measurement, KPI interpretation, user behavior, conversion funnel, campaign optimization and strategic reporting.',
      },
      {
        name: 'Google Analytics 4 Course – From Basics to Advanced',
        issuer: 'Udemy Brasil',
        date: 'Apr 2026',
        credentialId: 'UC-bf03c772-d0c9-4974-a4df-f22885923f35',
        description:
          'GA4 setup, events and conversions, reports, metrics and KPIs, Google Ads and Tag Manager integration and growth insights.',
      },
      {
        name: 'Google Analytics Certification',
        issuer: 'Google',
        date: 'Apr 2026',
        expiry: 'Apr 2027',
        credentialId: '1799030805',
      },
      {
        name: 'Tracking Conversions with Facebook and Google Ads Pixels',
        issuer: 'Udemy Brasil',
        date: 'Apr 2026',
        credentialId: 'UC-f4cf8128-b037-47fd-9b78-b761c99b195e',
      },
      {
        name: 'Building GUI Applications with Fyne and Go (Golang)',
        issuer: 'Udemy Brasil',
        date: 'Dec 2024',
        credentialId: 'UC-1c6fef35-b74b-424d-9240-c59d30e63f88',
        description: 'Golang course with Fyne for building desktop applications.',
      },
      {
        name: 'How to Create Telegram Bots with Python',
        issuer: 'Udemy Brasil',
        date: 'Jul 2024',
        credentialId: 'UC-b31ee9bd-403e-4f80-a43a-34d8e2914dbe',
      },
      {
        name: 'Learn Golang from Scratch! Build a Complete Application',
        issuer: 'Udemy Brasil',
        date: 'Jul 2024',
        credentialId: 'UC-90854b2e-e656-49cd-815a-a25e23a9e808',
        description:
          'Facebook-like social network built in Go with HTML5, CSS, JavaScript and MySQL.',
      },
      {
        name: 'Getting to Know AWS Infrastructure',
        issuer: 'Ada',
        date: 'Jun 2024',
        credentialId: '6d6a41e6-f726-8868-5722-3bb10c11aa3b',
      },
      {
        name: 'Back-end in Node.js',
        issuer: 'Ada',
        date: 'Jun 2024',
        credentialId: '72163f90-85bf-84e7-28c6-f34d5cefcf08',
      },
      {
        name: 'REST API',
        issuer: 'Ada',
        date: 'May 2024',
        credentialId: '40f0d8b6-0756-8692-4dc8-6f377108e030',
      },
      {
        name: 'Figma for Devs',
        issuer: 'Ada',
        date: 'Jun 2024',
        credentialId: '12983dc0-d02b-aad1-bbeb-41b2d6dc6e72',
      },
      {
        name: 'Digital Track | Coders 24 | Front End',
        issuer: 'Ada',
        date: 'Jun 2024',
        credentialId: '12ac5f71-eaa0-a2b1-7d69-54e1dd88df22',
      },
      {
        name: 'Data Dive',
        issuer: 'FIAP',
        date: 'Apr 2024',
        credentialId: '1F9A3318-641E-444A-8DBB-D52F4840EF29',
      },
    ],
    skillsTitle: 'Skills',
    skillGroups: [
      {
        title: 'Industry knowledge',
        skills: [
          'Data Analysis',
          'Sports Betting',
          'Casino',
          'Casino Games',
          'Crypto',
          'Cryptocurrency',
          'Risk Management',
          'Risk Analysis',
          'Market Analysis',
          'Commercial Operations',
        ],
      },
      {
        title: 'Tools & technologies',
        skills: [
          'Python',
          'Go',
          'Node.js',
          'TypeScript',
          'JavaScript',
          'HTML5',
          'CSS',
          'SQL',
          'MySQL',
          'Amazon Web Services',
          'Microsoft Power BI',
          'Microsoft Excel',
          'REST API',
          'Figma',
          'Telegram',
          'Relational Databases',
          'JavaScript Libraries',
        ],
      },
      {
        title: 'Development & Operations',
        skills: [
          'Object-Oriented Programming (OOP)',
          'Object-Oriented Languages',
          'Programming Languages',
          'Software Development',
          'Web Development',
          'Front-end Development',
          'Front-end Coding',
          'Front-end Design',
          'Back-end Development',
          'Desktop Application Development',
          'System Monitoring',
          'Technical Support',
          'Incident Management',
          'Sportsbook Operations',
          'iGaming',
          'Customer Service',
          'Traffic Management',
          'Marketing Strategy',
          'Sales',
          'Sales Promotion',
          'Food Safety',
          'Customer Statistics',
          'Front',
        ],
      },
    ],
    contacts: {
      linkedin: 'linkedin.com/in/lsharktech',
      website: 'lsharktech.pages.dev',
      phone: '83981265024',
      phoneDisplay: '+55 83 98126-5024',
      email: 'leandroshark.tech@gmail.com',
    },
    credentialLabel: 'Credential',
    downloadLabel: 'Download resume as PDF',
    photoAlt: '3x4 photo of Leandro Souza Gomes',
  },
  es: {
    id: 'curriculo-es',
    lang: 'es',
    label: 'ES',
    fullName: 'Leandro Souza Gomes',
    headline:
      'Data Analyst | Python Developer | AI & Automation | iGaming & Sportsbook | Power BI | SQL',
    location: 'Santa Rita, Paraíba, Brasil',
    profileTitle: 'Perfil',
    profile:
      'Analista de datos y desarrollador con más de 4 años en operaciones de Sportsbook e iGaming, monitoreando indicadores, flujos e incidentes para garantizar estabilidad y rendimiento. Combino análisis de datos con automatización en Python y Go, Power BI y SQL para convertir métricas en decisiones. Certificado en Google Analytics, Web Analytics y GA4, con una sólida trayectoria en front-end, back-end e infraestructura AWS.',
    experienceTitle: 'Experiencia',
    experience: [
      {
        role: 'Analista de Soporte | Sportsbook & iGaming Operations',
        company: 'B2B TECH',
        period: 'may 2022 – actualidad · 4 años 3 meses',
        location: 'Recife · Remoto',
        description:
          'Responsable del monitoreo operativo y analítico del Sportsbook en plataforma iGaming, dando seguimiento a desempeño, flujos, indicadores, incidentes y soporte a las operaciones para garantizar estabilidad, rendimiento y la mejor experiencia de usuario.',
        skills: [
          'Soporte técnico',
          'Análisis de datos',
          'Monitoreo de sistemas',
          'Gestión de incidentes',
          'Sportsbook Operations',
          'iGaming',
          'Atención al cliente',
          'SQL',
          'Gestión de tráfico',
        ],
      },
      {
        role: 'Gerente de ventas',
        company: 'Comercial de Alimentos Hora H LTDA',
        period: 'mar 2009 – may 2022 · 13 años 3 meses',
        description:
          'Gestión de equipos comerciales, planificación de ventas, seguimiento de metas, expansión de la cartera de clientes y optimización de operaciones comerciales en el sector alimentario.',
        skills: [
          'Ventas',
          'Estrategia de marketing',
          'Promoción de ventas',
          'Seguridad alimentaria',
          'Estadísticas de clientes',
          'Operaciones comerciales',
        ],
      },
      {
        role: 'Asistente de oficina',
        company: 'Auto Posto Intermares',
        period: 'may 2002 – feb 2009 · 6 años 10 meses',
        location: 'Cabedelo, Paraíba, Brasil',
        description:
          'Rutinas administrativas, organización de documentos, atención al público y apoyo operativo a la estación de servicio.',
        skills: [],
      },
    ],
    educationTitle: 'Formación Académica',
    education: [
      {
        institution: 'UNOPAR – Universidade Norte do Paraná',
        course: 'Desarrollo Avanzado en Java',
        period: 'mar 2014 – dic 2014',
        field: 'Information Technology',
      },
      {
        institution: 'FATEC PB',
        course: 'Tecnología en Sistemas para Internet',
        period: '2010 – 2013',
      },
    ],
    certificationsTitle: 'Certificaciones y Cursos',
    certifications: [
      {
        name: 'Web Analytics (COMPLETO) – Mucho más allá de Google Analytics',
        issuer: 'Udemy Brasil',
        date: 'abr 2026',
        credentialId: 'UC-c3d4cf20-dcff-41f8-987c-0cd090e9910d',
        description:
          'Medición de resultados, interpretación de KPIs, comportamiento del usuario, embudo de conversión, optimización de campañas e informes estratégicos.',
      },
      {
        name: 'Curso de Google Analytics 4 – de básico a avanzado',
        issuer: 'Udemy Brasil',
        date: 'abr 2026',
        credentialId: 'UC-bf03c772-d0c9-4974-a4df-f22885923f35',
        description:
          'Configuración de GA4, eventos y conversiones, informes, métricas y KPIs, integración con Google Ads y Tag Manager e insights para el crecimiento.',
      },
      {
        name: 'Google Analytics Certification',
        issuer: 'Google',
        date: 'abr 2026',
        expiry: 'abr 2027',
        credentialId: '1799030805',
      },
      {
        name: 'Rastreando conversiones con píxel de Facebook y Google Ads',
        issuer: 'Udemy Brasil',
        date: 'abr 2026',
        credentialId: 'UC-f4cf8128-b037-47fd-9b78-b761c99b195e',
      },
      {
        name: 'Building GUI Applications with Fyne and Go (Golang)',
        issuer: 'Udemy Brasil',
        date: 'dic 2024',
        credentialId: 'UC-1c6fef35-b74b-424d-9240-c59d30e63f88',
        description:
          'Curso en GoLang con Fyne para crear aplicaciones de escritorio.',
      },
      {
        name: 'Cómo Crear Robots de Telegram con Python',
        issuer: 'Udemy Brasil',
        date: 'jul 2024',
        credentialId: 'UC-b31ee9bd-403e-4f80-a43a-34d8e2914dbe',
      },
      {
        name: 'Aprende Golang desde Cero! Desarrolla una aplicación completa',
        issuer: 'Udemy Brasil',
        date: 'jul 2024',
        credentialId: 'UC-90854b2e-e656-49cd-815a-a25e23a9e808',
        description:
          'Red social similar a Facebook en Go, con HTML5, CSS, JavaScript y MySQL.',
      },
      {
        name: 'Conociendo la infraestructura de AWS',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '6d6a41e6-f726-8868-5722-3bb10c11aa3b',
      },
      {
        name: 'Back-end en Node.js',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '72163f90-85bf-84e7-28c6-f34d5cefcf08',
      },
      {
        name: 'API Rest',
        issuer: 'Ada',
        date: 'may 2024',
        credentialId: '40f0d8b6-0756-8692-4dc8-6f377108e030',
      },
      {
        name: 'Figma para Devs',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '12983dc0-d02b-aad1-bbeb-41b2d6dc6e72',
      },
      {
        name: 'Trilha digital | Coders 24 | Front End',
        issuer: 'Ada',
        date: 'jun 2024',
        credentialId: '12ac5f71-eaa0-a2b1-7d69-54e1dd88df22',
      },
      {
        name: 'Data Dive',
        issuer: 'FIAP',
        date: 'abr 2024',
        credentialId: '1F9A3318-641E-444A-8DBB-D52F4840EF29',
      },
    ],
    skillsTitle: 'Competencias',
    skillGroups: [
      {
        title: 'Conocimiento del sector',
        skills: [
          'Análisis de datos',
          'Apuestas deportivas',
          'Casino',
          'Juegos de casino',
          'Crypto',
          'Criptomoneda',
          'Gestión de riesgos',
          'Análisis de riesgo',
          'Análisis de mercado',
          'Operaciones comerciales',
        ],
      },
      {
        title: 'Herramientas y tecnologías',
        skills: [
          'Python',
          'Go',
          'Node.js',
          'TypeScript',
          'JavaScript',
          'HTML5',
          'CSS',
          'SQL',
          'MySQL',
          'Amazon Web Services',
          'Microsoft Power BI',
          'Microsoft Excel',
          'API REST',
          'Figma',
          'Telegram',
          'Bases de datos relacionales',
          'Bibliotecas JavaScript',
        ],
      },
      {
        title: 'Desarrollo y Operaciones',
        skills: [
          'Programación orientada a objetos (POO)',
          'Lenguajes orientados a objetos',
          'Lenguajes de programación',
          'Desarrollo de software',
          'Desarrollo web',
          'Desarrollo de front-end',
          'Codificación de front-end',
          'Diseño de front-end',
          'Desarrollo de back-end',
          'Desarrollo de aplicaciones de escritorio',
          'Monitoreo de sistemas',
          'Soporte técnico',
          'Gestión de incidentes',
          'Sportsbook Operations',
          'iGaming',
          'Atención al cliente',
          'Gestión de tráfico',
          'Estrategia de marketing',
          'Ventas',
          'Promoción de ventas',
          'Seguridad alimentaria',
          'Estadísticas de clientes',
          'Front',
        ],
      },
    ],
    contacts: {
      linkedin: 'linkedin.com/in/lsharktech',
      website: 'lsharktech.pages.dev',
      phone: '83981265024',
      phoneDisplay: '+55 83 98126-5024',
      email: 'leandroshark.tech@gmail.com',
    },
    credentialLabel: 'Credencial',
    downloadLabel: 'Descargar currículum en PDF',
    photoAlt: 'Foto 3x4 de Leandro Souza Gomes',
  },
};
