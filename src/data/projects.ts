export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
  featured: boolean;
}
export const projects: Project[] = [
  {
    id: "ar-saude",
    title: "Ar-Saúde Coletor",
    description:
      "Microsserviço de monitoramento de qualidade do ar em São Luís/MA via Open-Meteo + InterSCity.",
    longDescription:
      "Microsserviço coletor para o sistema Ar-Saúde, responsável por coletar dados de qualidade do ar de 13 bairros de São Luís/MA utilizando a API Open-Meteo e persistir os dados na plataforma de cidades inteligentes InterSCity. Possui cron jobs configuráveis, arquitetura modular NestJS e suporte a Docker.",
    category: "IoT / Smart Cities",
    tags: ["NestJS", "TypeScript", "Docker", "Open-Meteo", "InterSCity"],
    github: "https://github.com/Andrevictor20/ar-saude-coletor",
    image: "/images/projects/ar-saude.webp",
    featured: true,
  },
  {
    id: "vollmed",
    title: "Vollmed Frontend",
    description:
      "Dashboard Next.js + Shadcn/UI para gestão de pacientes e médicos consumindo API Spring Boot.",
    longDescription:
      "Frontend moderno construído em Next.js App Router com Tailwind CSS e Shadcn/UI para o sistema Vollmed de gestão médica. Consome API REST Java Spring Boot, com suporte a Docker multi-stage e deploy via Firebase App Hosting.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Docker"],
    github: "https://github.com/Andrevictor20/Vollmed-frontend",
    image: "/images/projects/vollmed.webp",
    featured: true,
  },
  {
    id: "forumhub",
    title: "ForumHub",
    description:
      "Plataforma de fórum full-stack com API REST Spring Boot + JWT e frontend Next.js.",
    longDescription:
      "Plataforma completa de fórum com backend API REST em Java Spring Boot (autenticação JWT, CRUD completo, Spring Security) e frontend em Next.js com TypeScript e Tailwind CSS. Demonstra domínio de arquitetura full-stack moderna.",
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "JWT", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Andrevictor20/Challenge-ForumHub",
    image: "/images/projects/forumhub.webp",
    featured: true,
  },
  {
    id: "pdi-app",
    title: "PDI-App — Detecção de Poluição",
    description:
      "App para identificar e classificar itens de poluição marítima usando câmera do smartphone.",
    longDescription:
      "Aplicativo de processamento digital de imagens para detecção, classificação e contagem de itens relacionados à poluição marítima em tempo real, utilizando a câmera do smartphone. Projeto de pesquisa acadêmica na UFMA.",
    category: "AI / Mobile",
    tags: ["JavaScript", "React", "Computer Vision", "PWA"],
    github: "https://github.com/Andrevictor20/PDI-App",
    image: "/images/projects/pdi-app.webp",
    featured: true,
  },
  {
    id: "isla-acessivel",
    title: "ISLA Acessível",
    description:
      "Landing page de acessibilidade digital com deploy em produção na Vercel.",
    longDescription:
      "Landing page focada em acessibilidade e inclusão digital para o projeto ISLA. Construída com Vite e TanStack Router, com deploy em produção na Vercel. Demonstra cuidado com UX acessível e conformidade com padrões WCAG.",
    category: "Frontend",
    tags: ["TypeScript", "Vite", "TanStack Router", "Vercel"],
    github: "https://github.com/Andrevictor20/isla-acess-vel",
    image: "/images/projects/isla.webp",
    featured: true,
  },
  {
    id: "automacao-residencial",
    title: "Automação Residencial Inteligente",
    description:
      "Sistema IoT completo com Raspberry Pi, Home Assistant, Node-RED e Alexa.",
    longDescription:
      "Sistema completo de automação residencial inteligente utilizando Raspberry Pi como hub central, Home Assistant para gerenciamento, Node-RED para fluxos de automação visual e integração com Alexa para controle por voz. Inclui sensores de temperatura, iluminação inteligente e monitoramento remoto.",
    category: "IoT / Automação",
    tags: ["Raspberry Pi", "Home Assistant", "Node-RED", "Alexa", "MQTT"],
    image: "/images/projects/automacao.webp",
    featured: true,
  },
  {
    id: "interpretador-lox",
    title: "Interpretador Java Lox",
    description:
      "Interpretador completo da linguagem Lox implementado em Java (Crafting Interpreters).",
    longDescription:
      "Implementação completa de um interpretador para a linguagem Lox baseado no livro 'Crafting Interpreters' de Bob Nystrom. Inclui lexer, parser, AST, resolução de variáveis e interpretação. Demonstra conhecimento profundo de teoria de compiladores.",
    category: "Compiladores",
    tags: ["Java", "Compiladores", "Parsing", "AST", "Interpretador"],
    github: "https://github.com/Andrevictor20/InterpretadorJavaLox",
    image: "/images/projects/lox.webp",
    featured: false,
  },
  {
    id: "screenmatch",
    title: "ScreenMatch",
    description:
      "Gestão de séries via OMDB API com Spring Boot, JPA, PostgreSQL e Docker.",
    longDescription:
      "Aplicação Java com Spring Boot, JPA/Hibernate e PostgreSQL para consumir a API do OMDB, gerenciar informações de séries, listar as mais bem avaliadas e separar por categorias. Padrão MVC com Docker para banco de dados.",
    category: "Backend",
    tags: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Docker", "MVC"],
    github: "https://github.com/Andrevictor20/ScreenMatch-Alura-ONE",
    image: "/images/projects/screenmatch.webp",
    featured: false,
  },
];
export const categories = [
  "Todos",
  "Full Stack",
  "IoT / Smart Cities",
  "IoT / Automação",
  "Frontend",
  "Backend",
  "AI / Mobile",
  "Compiladores",
];
