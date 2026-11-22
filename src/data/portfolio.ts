export interface Project {
  name: string;
  url: string;
  description: string;
  details: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    title: string;
    location: string;
    headline: string;
    email: string;
    linkedin: string;
    github: string;
  };
  about: {
    education: string;
    completion: string;
    objective: string;
    bio: string;
  };
  skills: {
    primary: string[];
    backend: string[];
    frontend: string[];
    engineering: string[];
  };
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Matheus Costa de Jesus",
    title: "Backend & Full-Stack Engineer",
    location: "Lauro de Freitas, Bahia, Brasil",
    headline: "Desenvolvedor backend e full-stack com foco em Python, Java e SQL. Construo APIs, dashboards de dados públicos e ferramentas de infraestrutura, trazendo uma visão prática de observabilidade e confiabilidade após cerca de 9 anos em operações industriais críticas.",
    email: "matheuscojesus@gmail.com",
    linkedin: "https://linkedin.com/in/matheus-costa-de-jesus",
    github: "https://github.com/mathofjesus",
  },
  about: {
    education: "Estudante do 6º semestre de Ciência da Computação na Descomplica",
    completion: "Dezembro de 2027",
    objective: "Atuar em instituições financeiras e empresas de produto, desenvolvendo soluções backend robustas, seguras e observáveis.",
    bio: "Após 9 anos atuando com automação e monitoramento de sistemas em operações industriais críticas, direcionei minha carreira para a Engenharia de Software. Essa bagagem me deu uma mentalidade focada em SRE, observabilidade, troubleshooting sob pressão e otimização contínua de processos. Hoje aplico esses conceitos em plataformas de dados públicos com FastAPI e Angular, serviços web em Flask e PostgreSQL, e ambientes Docker descartáveis para testes reproduzíveis."
  },
  skills: {
    primary: ["Java 21", "Python", "SQL"],
    backend: [
      "FastAPI",
      "Flask",
      "Spring Boot 3",
      "Spring Security",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Docker & Nginx",
      "CI/CD (GitHub Actions)"
    ],
    frontend: [
      "TypeScript",
      "Angular 22",
      "React",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "React Native + Expo"
    ],
    engineering: [
      "pytest",
      "Vitest / Jest",
      "JUnit 5",
      "Playwright",
      "Git",
      "Observabilidade & SRE"
    ]
  },
  projects: [
    {
      name: "Dashboard de Dados Públicos",
      url: "https://github.com/mathofjesus/Dashboard",
      description: "Dashboard offline-first de população, saúde e malhas por município brasileiro.",
      details: "Backend FastAPI com ingestão de dados do IBGE e do CNES e front Angular 22 servido como artefato estático. Preserva o contrato original de CLI, API JSON e arquivos processados da implementação em C, com a paridade validada por testes pytest e Vitest e deploy em Docker + Nginx.",
      tags: ["Python", "FastAPI", "Angular 22", "IBGE/CNES", "pytest", "Docker", "Nginx"]
    },
    {
      name: "Encurtador de Links",
      url: "https://github.com/mathofjesus/Encurtador",
      description: "Encurtador de URLs com códigos não sequenciais e expiração automática.",
      details: "Flask + PostgreSQL (Supabase) atrás de Nginx. Gera códigos de 7 caracteres por permutação de Feistel com HMAC-SHA256 e Base62, resolve em O(1) pela chave primária e expurga links expirados via pg_cron ou GitHub Actions. CI com ruff e pytest.",
      tags: ["Python", "Flask", "PostgreSQL", "Supabase", "Docker", "Nginx", "GitHub Actions"]
    },
    {
      name: "Comparador de Investimentos",
      url: "https://github.com/mathofjesus/ComparadorDeInvestimentosRendaFixa",
      description: "CLI em Java que compara CDB, LCI/LCA e Tesouro Selic.",
      details: "Projeto de arquivo único, sem build tool: projeta o montante líquido a partir de valor, prazo e percentual do CDI, aplica a tabela regressiva de IR e aponta a melhor alternativa. É uma ferramenta pessoal de apoio à decisão, não uma recomendação de investimento.",
      tags: ["Java", "CLI", "Renda Fixa", "CDI/Selic", "IR regressivo"]
    },
    {
      name: "docker-sandbox",
      url: "https://github.com/mathofjesus/docker-sandbox",
      description: "Agent skill para rodar testes e protótipos em contêineres Alpine descartáveis.",
      details: "Executa suítes TypeScript e backends Java/Spring em contêineres efêmeros com cap-drop, no-new-privileges, rootfs somente leitura e usuário não-root. O instalador detecta o harness do agente (Claude Code, Cursor, Codex, Hermes) e a validação cobre Vitest/Jest, Playwright, Spring Boot e PostgreSQL.",
      tags: ["Docker", "Alpine", "Agent Skills", "Vitest/Jest", "Playwright", "Spring Boot", "Bash"]
    }
  ],
  experience: [
    {
      company: "M. Dias Branco",
      role: "Operador de Máquinas de Fabricação (Foco em Observabilidade & SRE Industrial)",
      period: "Maio 2018 – Presente",
      description: "Aplicação prática de conceitos de telemetria, observabilidade e confiabilidade de sistemas em larga escala no setor industrial.",
      points: [
        "Monitoramento contínuo de sistemas complexos de automação industrial através de painéis integrados de controle (IHM/SCADA), analisando métricas de vazão, temperatura e pressão em tempo real.",
        "Análise preditiva de dados de desempenho industrial e indicadores-chave de performance (KPIs) para prevenção de gargalos e downtime de máquinas de alto custo.",
        "Atuação direta em processos de troubleshooting de incidentes críticos, identificando anomalias na lógica do sistema físico e restabelecendo operações industriais sob pressão.",
        "Elaboração de documentação técnica detalhada, guias de resolução de problemas rápidos e playbooks de SRE operacional para padronização de respostas a falhas."
      ]
    }
  ]
};
