export type Lang = 'pt' | 'en'

type Texts = {
  navbar: {
    role: string
    name: string
    items: {
      services: string
      projects: string
      about: string
      contact: string
    }
    cta: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    stackLabel: string
    stackItems: string
    expLabel: string
    expValue: string
    projLabel: string
    projValue: string
    helpLabel: string
    helpValue: string
    bottomNote: string
  }
  services: {
    title: string
    subtitle: string
    items: {
      webSites: { title: string; desc: string }
      customSystems: { title: string; desc: string }
      integrations: { title: string; desc: string }
      consulting: { title: string; desc: string }
    }
  }
  projects: {
    title: string
    subtitle: string
    items: {
        sisger: { sector?: string; desc: string }
        autorize: { sector?: string; desc: string}
        consultorio: { sector?: string; desc: string}
        moodle: { sector?: string; desc: string }
        portfolio: { sector?: string; desc: string }
        landing: { sector?: string; desc: string }
    }
  }
  about: {
    title: string
    badgeLine: string
    p1: string
    p2: string
    p3: string
    workTitle: string
    workIntro: string
    expLabel: string
    expValue: string
    scopeLabel: string
    scopeValue: string
    steps: string[]
  }
  contact: {
    title: string
    subtitle1: string
    subtitle2: string
    whatsappCta: string
    cardTitle: string
    whatsappLabel: string
    emailLabel: string
    cardNote: string
  }
  footer: {
    roleLine: string
    linkedin: string
    github: string
  }
}

export const TEXTS: Record<Lang, Texts> = {
  pt: {
    navbar: {
      role: 'Engenheiro de Software',
      name: 'Emerson Xavier',
      items: {
        services: 'Serviços',
        projects: 'Projetos',
        about: 'Sobre',
        contact: 'Contato',
      },
      cta: 'Vamos conversar',
    },
    hero: {
      badge: 'Sites e sistemas sob medida para o seu negócio',
      title:
        'Eu ajudo empresas e profissionais a terem uma presença digital forte e eficiente.',
      subtitle:
        'Desenvolvimento de sites profissionais, sistemas web e aplicações sob medida, com foco em performance, experiência do usuário e resultados para o seu negócio.',
      ctaPrimary: 'Quero um site para minha empresa',
      ctaSecondary: 'Ver projetos realizados →',
      stackLabel: "Stack principal",
      stackItems: "Laravel · React · Next.js · Node.js · MySQL",
      expLabel: "Experiência",
      expValue: "+4 anos em produção",
      projLabel: "Projetos",
      projValue: "Saúde, educação, setor público",
      helpLabel: "Como posso ajudar",
      helpValue:
        "Sites institucionais, portais, sistemas internos e integrações sob medida para o seu contexto.",
      bottomNote:
        "Vamos conversar sobre o que você precisa e encontrar a solução certa para o seu projeto.",
    },
    services: {
      title: 'Como posso ajudar o seu projeto',
      subtitle:
        'Do site institucional ao sistema interno, eu atuo em todas as etapas: planejamento, desenvolvimento, integração e evolução contínua.',
      items: {
        webSites: {
          title: 'Sites institucionais e portfólios',
          desc: 'Criação de sites profissionais para empresas, profissionais liberais e projetos pessoais, com foco em performance, SEO e experiência do usuário.',
        },
        customSystems: {
          title: 'Sistemas web sob medida',
          desc: 'Desenvolvimento de aplicações completas (frontend + backend) para resolver necessidades específicas do seu negócio.',
        },
        integrations: {
          title: 'Integrações e manutenção',
          desc: 'Integração com APIs, sistemas legados, ajustes e melhorias em aplicações existentes em produção.',
        },
        consulting: {
          title: 'Consultoria técnica',
          desc: 'Apoio na definição de stack, arquitetura, melhorias em sistemas atuais e planejamento de novos projetos.',
        },
      },
    },
   projects: {
    title: 'Projetos em que atuei',
    subtitle:
        'Alguns exemplos de projetos reais em que trabalhei, atuando no desenvolvimento de sites, sistemas e soluções sob medida para diferentes contextos.',
    items: {
        sisger: {
        sector: 'Setor público · Saúde',
        desc: 'Sistema de agendamento desenvolvido para a Diretoria Geral de Telessaúde da Secretaria Estadual de Saúde de Pernambuco, focado em organizar reuniões e melhorar a experiência dos usuários no serviço de telegestão.',
        },
        autorize: {
          sector: 'Saúde · Sistema de Atendimento',
          desc: 'Sistema de gestão completo para clínicas e serviços de saúde, incluindo módulos de pacientes, solicitações, autorizações, convênios, protocolos, relatórios e muito mais.',
        },
        consultorio: {
          sector: 'Saúde · Sistema médico',
          desc: 'Sistema voltado para consultórios médicos, permitindo gerenciar atendimentos, pacientes, prescrições, anotações e organização geral do fluxo clínico.',
        },
        moodle: {
        sector: 'Educação · Saúde',
        desc: 'Estruturação e implementação de um Ambiente Virtual de Aprendizagem para capacitação de profissionais de saúde, incluindo configuração, personalização de temas e suporte contínuo.',
        },
        portfolio: {
        sector: 'Projeto pessoal',
        desc: 'Portfólio profissional desenvolvido com foco em desempenho, responsividade e clareza na apresentação de experiências, tecnologias e projetos.',
        },
        landing: {
          sector: 'Tecnologia · Presença digital',
          desc: 'Desenvolvimento de landing pages e páginas de captura otimizadas para conversão, com foco em destacar serviços, produtos e propostas de valor de forma clara e objetiva.',
        },
    },
    },
    about: {
      title: 'Sobre mim',
      badgeLine: 'Como eu costumo trabalhar',
      p1: 'Sou desenvolvedor Full Stack graduado em Ciência da Computação, com mais de 4 anos de experiência construindo sistemas e sites que realmente vão para produção.',
      p2: 'Ao longo da minha trajetória atuei principalmente com PHP (Laravel, CodeIgniter), JavaScript (React, Next.js, Node.js), Java (Spring Boot), bancos de dados relacionais como MySQL e SQL Server, e não relacionais como MongoDB, sempre focado em entregar soluções estáveis, seguras e fáceis de manter.',
      p3: 'Já trabalhei em projetos para áreas como saúde, educação e setor público, participando desde o levantamento de requisitos e modelagem de dados até o desenvolvimento e a implantação em produção.',
      workTitle: 'Como eu costumo trabalhar',
      workIntro:
        'Meu foco é entender bem o contexto do projeto antes de escrever linha de código. A partir disso, proponho uma solução alinhada com a realidade do negócio e com o que faz sentido tecnicamente.',
      expLabel: 'Experiência',
      expValue: '+4 anos em produção',
      scopeLabel: 'Atuação',
      scopeValue: 'Sites, sistemas web e integrações',
      steps: [
        'Conversa inicial para entender sua necessidade e objetivos.',
        'Definição do escopo, funcionalidades principais e prazos.',
        'Desenvolvimento iterativo, com entregas visíveis e feedback frequente.',
        'Suporte pós-entrega para ajustes, melhorias e novas ideias.',
    ],
    },
    contact: {
      title: 'Vamos conversar sobre o seu projeto',
      subtitle1:
        'Se você precisa de um site profissional, um sistema web sob medida ou quer tirar uma ideia do papel, me envie uma mensagem e podemos discutir a melhor forma de te ajudar.',
      subtitle2:
        'Me conta um pouco sobre o que você tem em mente (tipo de projeto, prazo desejado, se já existe algo em produção, etc.) e eu retorno com sugestões e próximos passos.',
      whatsappCta: 'Falar comigo no WhatsApp',
      cardTitle: 'Formas de contato',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'E-mail',
      cardNote:
        'Costumo responder em poucas horas em dias úteis. Caso prefira, você também pode enviar uma mensagem mais detalhada por e-mail com as informações do projeto.',
    },
    footer: {
      roleLine: 'Engenheiro de Software',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },

  en: {
    navbar: {
      role: 'Software Engineer',
      name: 'Emerson Xavier',
      items: {
        services: 'Services',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact',
      },
      cta: "Let's talk",
    },
    hero: {
      badge: 'Custom websites and systems for your business',
      title:
        'I help companies and professionals build a strong and effective digital presence.',
      subtitle:
        'Development of professional websites, web systems and custom applications, focusing on performance, user experience and business results.',
      ctaPrimary: 'I want a website for my business',
      ctaSecondary: 'View completed projects →',
      stackLabel: "Main stack",
      stackItems: "Laravel · React · Next.js · Node.js · MySQL",
      expLabel: "Experience",
      expValue: "4+ years in production",
      projLabel: "Projects",
      projValue: "Healthcare, education, public sector",
      helpLabel: "How I can help",
      helpValue:
        "Institutional websites, portals, internal systems and custom integrations for your context.",
      bottomNote:
        "Let’s talk about your needs and find the right solution for your project.",
    },
    services: {
      title: 'How I can help your project',
      subtitle:
        'From institutional websites to internal systems, I work on all stages: planning, development, integration and continuous improvement.',
      items: {
        webSites: {
          title: 'Institutional websites and portfolios',
          desc: 'Creation of professional websites for companies, independent professionals and personal projects, focusing on performance, SEO and user experience.',
        },
        customSystems: {
          title: 'Custom web systems',
          desc: 'Development of complete applications (frontend + backend) to solve specific needs of your business.',
        },
        integrations: {
          title: 'Integrations and maintenance',
          desc: 'Integration with APIs, legacy systems, adjustments and improvements in existing applications in production.',
        },
        consulting: {
          title: 'Technical consulting',
          desc: 'Support in defining stack, architecture, improvements to current systems and planning new projects.',
        },
      },
    },
    projects: {
        title: 'Projects I worked on',
        subtitle:
            'Some real projects I contributed to, developing websites, systems and custom solutions for different contexts.',
        items: {
            sisger: {
            sector: 'Public sector · Healthcare',
            desc: 'Scheduling system developed for the Telehealth General Directorate of the Pernambuco State Health Secretariat, focused on organizing meetings and improving the user experience in telemanagement services.',
            },
            autorize: {
              sector: 'Healthcare · Service Management System',
              desc: 'Complete management platform for healthcare services, including patient modules, requests, authorizations, insurance, protocols, and detailed reports.',
            },
            consultorio: {
              sector: 'Healthcare · Medical office system',
              desc: 'System for medical practices, enabling management of appointments, patients, prescriptions, notes and workflow organization.',
            },
            moodle: {
            sector: 'Education · Healthcare',
            desc: 'Implementation and customization of a Virtual Learning Environment for training healthcare professionals, including configuration, theme customization and ongoing support.',
            },
            portfolio: {
            sector: 'Personal project',
            desc: 'Professional portfolio built with focus on performance, responsiveness and clarity when presenting experience, technologies and projects.',
            },
            landing: {
              sector: 'Technology · Digital presence',
              desc: 'Development of high-conversion landing pages and lead capture pages, focused on clearly presenting services, products and value propositions.',
            },
        },
    },
    about: {
      title: 'About me',
      badgeLine: 'How I usually work',
      p1: 'I am a Full Stack developer with a degree in Computer Science and over 4 years of experience building systems and websites that actually go to production.',
      p2: 'I have worked mainly with PHP (Laravel, CodeIgniter), JavaScript (React, Next.js, Node.js), Java (Spring Boot), relational databases such as MySQL and SQL Server, and non-relational databases such as MongoDB, always focusing on delivering stable, secure and maintainable solutions.',
      p3: 'I have been involved in projects in healthcare, education and the public sector, from requirements gathering and data modeling to development and deployment.',
      workTitle: 'How I usually work',
      workIntro:
        'I focus on understanding the project context before writing any code. From there, I propose a solution aligned with the business reality and technical feasibility.',
      expLabel: 'Experience',
      expValue: '4+ years in production',
      scopeLabel: 'Scope',
      scopeValue: 'Websites, web systems and integrations',
      steps: [
        'Initial conversation to understand your needs and goals.',
        'Definition of scope, main features and timelines.',
        'Iterative development with visible deliverables and frequent feedback.',
        'Post-delivery support for adjustments, improvements and new ideas.',
    ],
    },
    contact: {
      title: "Let's talk about your project",
      subtitle1:
        'If you need a professional website, a custom web system or want to bring an idea to life, send me a message and we can discuss how I can help.',
      subtitle2:
        'Tell me a bit about what you have in mind (type of project, desired timeline, if there is something already running, etc.) and I will come back with suggestions and next steps.',
      whatsappCta: 'Talk to me on WhatsApp',
      cardTitle: 'Contact details',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      cardNote:
        'I usually reply within a few hours on business days. If you prefer, you can also send a more detailed email with the project information.',
    },
    footer: {
      roleLine: 'Software Engineer',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
} as const

export type Locale = keyof typeof TEXTS
export type I18nTexts = (typeof TEXTS)[Locale]
