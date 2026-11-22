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
    certifications: string[];
    languages: string;
  };
  skills: {
    primary: string[];
    data: string[];
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
    title: "Dados | Backend | Python | SQL",
    location: "Lauro de Freitas, Bahia, Brasil",
    headline: "Estudante do 6º semestre de Ciência da Computação, com mais de 8 anos de experiência em ambientes industriais monitorando KPIs em tempo real e investigando anomalias de processo. Construo soluções de dados e backend com Python, SQL e PostgreSQL — ingestão de dados públicos, dashboards e serviços web com testes automatizados e Docker.",
    email: "matheuscojesus@gmail.com",
    linkedin: "https://www.linkedin.com/in/matheus-costa-de-jesus-/",
    github: "https://github.com/mathofjesus",
  },
  about: {
    education: "Estudante do 6º semestre de Ciência da Computação na Descomplica",
    completion: "Dezembro de 2027",
    objective: "Busco oportunidades em ciência de dados, plataformas de dados e análise aplicada em bancos, fintechs e empresas de produto.",
    bio: "Há mais de 8 anos atuo em operações industriais críticas, monitorando sistemas de automação e KPIs de uptime e produtividade em ambiente Linux. Analiso dados de desempenho, investigo anomalias até a causa e documento procedimentos. Hoje aplico essa base em engenharia de dados e backend: ingestão e tratamento de dados públicos, dashboards offline-first e APIs testadas, com foco em confiabilidade e clareza operacional.",
    certifications: [
      "Object-Oriented Developer",
      "DB Developer",
      "Programming Basics",
      "Arquitetura e Organização de Computadores"
    ],
    languages: "Português nativo · Inglês intermediário (B1)"
  },
  skills: {
    primary: ["Python", "SQL", "Java"],
    data: [
      "PostgreSQL",
      "Supabase",
      "Ingestão IBGE/CNES",
      "Análise de KPIs",
      "Detecção de anomalias",
      "Dashboards",
      "pg_cron"
    ],
    backend: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "OpenAPI/Swagger",
      "Spring Boot",
      "JWT"
    ],
    frontend: [
      "Angular",
      "React",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Angular Material"
    ],
    engineering: [
      "pytest",
      "Vitest",
      "Jest",
      "JUnit 5",
      "Playwright",
      "Maven / Gradle",
      "Docker & Nginx",
      "GitHub Actions",
      "Linux"
    ]
  },
  projects: [
    {
      name: "Dashboard de Dados Públicos",
      url: "https://github.com/mathofjesus/Dashboard",
      description: "Dashboard offline-first de população, saúde e malhas por município brasileiro.",
      details: "Backend FastAPI com ingestão de dados públicos do IBGE e do CNES e front Angular servido como artefato estático. Preserva o contrato original de CLI, API JSON e arquivos processados da implementação em C, com testes automatizados pytest e Vitest e deploy em Docker + Nginx.",
      tags: ["Python", "FastAPI", "Angular", "IBGE/CNES", "pytest", "Docker", "Nginx"]
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
      details: "Executa suítes TypeScript e backends Java/Spring em contêineres efêmeros com cap-drop, rootfs somente leitura e usuário não-root. O instalador detecta o harness do agente (Claude Code, Cursor, Codex, Hermes) e a validação cobre Vitest/Jest, Playwright, Spring Boot e PostgreSQL.",
      tags: ["Docker", "Alpine", "Agent Skills", "Vitest/Jest", "Playwright", "Spring Boot", "Bash"]
    }
  ],
  experience: [
    {
      company: "M. Dias Branco",
      role: "Operador de Máquinas de Fabricação",
      period: "Maio 2018 – Atual",
      description: "Mais de 8 anos de experiência industrial em monitoramento de KPIs, análise de anomalias e melhoria contínua.",
      points: [
        "Monitorei em tempo real sistemas de automação industrial e KPIs de uptime e produtividade em ambiente Linux.",
        "Analisei dados de desempenho para melhoria contínua e identifiquei anomalias de processo, investigando e resolvendo a causa.",
        "Documentei procedimentos técnicos e configurações e treinei operadores.",
        "Fui responsável pela conformidade de segurança e coordenei com times multidisciplinares."
      ]
    }
  ]
};
