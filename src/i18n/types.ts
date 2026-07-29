export interface ProjectLink {
  label: string;
  url: string;
}

export interface Translation {
  navbar: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewProjects: string;
    contact: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    note: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
      badge: string;
      badgeType: 'public' | 'private' | 'client';
      links: ProjectLink[];
    }>;
  };
  technologies: {
    title: string;
    items: string[];
  };
  about: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    emailLabel: string;
    location: string;
    availability: string;
    button: string;
    github: string;
    linkedin: string;
  };
  footer: {
    companyName: string;
    founded: string;
    tagline: string;
    subtitle: string;
    rights: string;
  };
  allcripto: {
    title: string;
    overview: string;
    features: string[];
    technologies: string[];
    links: {
      website: string;
      videos: string;
    };
    backToHome: string;
  };
}
