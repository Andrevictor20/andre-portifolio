# 📋 project.md — Visão Geral do Projeto

> **Projeto:** André Victor — Portfólio Pessoal & Blog Técnico
> **Versão:** 1.0.0 | **Data:** 30/05/2026
> **Autor:** André Victor Macedo Pereira

---

## 1. Visão Geral

Landing Page de Portfólio Pessoal de alto nível + blog técnico, construída com **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion**. Cartão de visitas digital profissional para impressionar recrutadores, clientes e a comunidade dev.

### 1.1 Missão

> Construir uma presença digital premium que comunique competência técnica, versatilidade full-stack e paixão por tecnologia, através de design impactante, interações fluidas e conteúdo técnico de qualidade.

---

## 2. Escopo

### 2.1 In-Scope

| Área | Descrição |
|------|-----------|
| Frontend | SPA com Next.js App Router, SSG para blog, CSR para interações |
| Design System | Paleta de cores, tipografia, componentes reutilizáveis (Tailwind) |
| Animações | Micro-interações com Framer Motion |
| Blog Engine | MDX (Markdown + React Components) |
| Tema | Dark/Light Mode com persistência localStorage |
| SEO | Meta tags, OG, sitemap.xml, robots.txt, structured data |
| Deploy | Vercel + Dockerfile otimizado multi-stage |
| Responsividade | Mobile-first (640, 768, 1024, 1280px) |
| Performance | Lighthouse 90+ |
| Acessibilidade | WCAG 2.1 AA |

### 2.2 Out-of-Scope

- Backend com banco de dados, autenticação, CMS admin, e-commerce, i18n

---

## 3. Público-Alvo

| Persona | Objetivo |
|---------|----------|
| 🎯 Recrutador Tech | Avaliar competências, ver projetos, baixar CV |
| 👨‍💻 Dev Peer | Ler artigos técnicos, explorar projetos open-source |
| 🏢 Cliente/Empresa | Ver portfólio, entrar em contato para freelance |
| 🎓 Estudante | Inspiração e aprendizado com artigos |

---

## 4. User Stories

### Navegação
- **US-01**: Visitante vê hero section impactante e entende quem é André
- **US-02**: Navegação suave entre seções com scroll animations
- **US-03**: Toggle Dark/Light Mode com persistência
- **US-04**: Experiência mobile idêntica ao desktop

### Portfólio
- **US-05**: Recrutador vê projetos com tecnologias listadas
- **US-06**: Visitante clica em projeto e vê preview dinâmico (sem sair da página)
- **US-07**: Dev acessa link do repositório no GitHub
- **US-08**: Visitante filtra projetos por tech/categoria

### Blog
- **US-09**: Lista de artigos com título, resumo, data e tags
- **US-10**: Artigo com code blocks interativos e componentes MDX
- **US-11**: URL compartilhável por artigo
- **US-12**: Artigos relacionados ao final do post

### Contato
- **US-13**: Download do CV em PDF
- **US-14**: Formulário ou links diretos de contato
- **US-15**: Links GitHub, LinkedIn, Email visíveis

---

## 5. Features Detalhadas

### 5.1 🚀 Hero Section
- Headline animada (typewriter): "Full Stack Developer • Cloud Enthusiast • DevOps Explorer"
- Foto/Avatar com border glow animado
- Social links (GitHub, LinkedIn, Email) com hover animations
- CTA: "Download CV" (ripple + glow) + "Ver Projetos" (scroll suave)
- Background: gradient mesh animado ou particles sutis

### 5.2 👤 About Me
- Resumo: Estudante de Eng. Computação na UFMA, 24 anos
- Timeline interativa: marcos acadêmicos e profissionais
- Cards visuais: Full Stack, Cloud, DevOps, IoT/Automação, Linux
- Stats animados: 37 repositórios, 8+ linguagens

### 5.3 🛠️ Skills & Tools (baseado no GitHub @Andrevictor20)

**Linguagens:**
| Linguagem | Nível | Evidência GitHub |
|-----------|-------|-----------------|
| TypeScript | Avançado | ar-saude-coletor, Vollmed-frontend, forumhub-frontend, isla-acess-vel, Poll-App |
| Java | Avançado | Challenge-ForumHub, API-Java-SpringBoot, Challenge-LiterAlura, ScreenMatch, InterpretadorJavaLox, Compiladores |
| JavaScript | Avançado | PDI-App, knex, Projeto-DSW |
| Python | Intermediário | SC3K-Dataset-modificado |
| PHP | Intermediário | toshiro-shibakita |
| Shell/Bash | Intermediário | projeto-iac1, projeto-iac2 |

**Frameworks & Libs:**
- Next.js (App Router): Vollmed-frontend, forumhub-frontend
- React: PDI-App, appreact
- NestJS: ar-saude-coletor
- Spring Boot: ForumHub, API-Java-SpringBoot, LiterAlura, ScreenMatch
- Tailwind CSS / Shadcn/UI: Vollmed-frontend, forumhub-frontend
- Vite + TanStack Router: isla-acess-vel
- Knex.js / Express: to-do-list-express

**DevOps & Infra:**
- Docker/Docker Compose, Linux, Shell Scripting (IaC)
- Vercel, Firebase App Hosting, Git/GitHub (37 repos)

**IoT & Smart Cities:**
- Open-Meteo API, InterSCity Platform (ar-saude-coletor)
- Raspberry Pi, Home Assistant, Node-RED, Alexa Skills

### 5.4 🎨 Dynamic Project Showcase

**Projetos em Destaque:**

1. **Ar-Saúde Coletor** — Microsserviço de monitoramento de qualidade do ar (NestJS, TS, Docker, Open-Meteo, InterSCity)
2. **Vollmed Frontend** — Dashboard Next.js + Shadcn/UI para gestão médica
3. **ForumHub** — Plataforma full-stack: API Spring Boot + JWT + Frontend Next.js
4. **PDI-App** — Detecção de poluição marítima via câmera (React, CV)
5. **ISLA Acessível** — Landing page de acessibilidade (Vite, TanStack, Vercel)
6. **Automação Residencial** — Raspberry Pi + Home Assistant + Node-RED + Alexa
7. **Interpretador Lox** — Interpretador de linguagem em Java (Compiladores)
8. **ScreenMatch** — Gestão de séries via OMDB API (Spring Boot, JPA, PostgreSQL, Docker)

**Funcionalidades:** Cards interativos com parallax, modal de preview, filtros por categoria/tech, tech badges, links GitHub + live demo

### 5.5 📝 Technical Blog (MDX)
- Cards: título, resumo, data, tags, tempo de leitura
- Artigo: syntax highlighting (Shiki), TOC auto-gerado, code copy, callout boxes
- Categorias: DevOps, IoT, Full Stack, Java, TypeScript, Linux, Cloud
- Reading progress bar, artigos relacionados, compartilhamento social

### 5.6 📬 Contact
- Formulário (Nome, Email, Mensagem) via Formspree
- Links: GitHub, LinkedIn, Email
- Localização: São Luís, MA

### 5.7 🌓 Dark/Light Mode
- Toggle animado, localStorage, `prefers-color-scheme`, transição 300ms

---

## 6. Stack do Projeto

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 14+ (App Router) |
| Linguagem | TypeScript 5.x |
| Estilização | Tailwind CSS 3.x |
| Animações | Framer Motion 11.x |
| Blog | MDX + next-mdx-remote + Shiki |
| Icons | Lucide React |
| Fonts | Inter + JetBrains Mono |
| Linting | ESLint + Prettier |
| Deploy | Vercel + Docker |

---

## 7. Milestones

| Fase | Descrição | Estimativa |
|------|-----------|------------|
| M1 | Setup, design system, componentes base | 2 dias |
| M2 | Hero, About, Skills | 2 dias |
| M3 | Dynamic Project Showcase | 3 dias |
| M4 | Blog Engine MDX + artigo exemplo | 3 dias |
| M5 | Contact, Dark Mode, responsividade | 1 dia |
| M6 | SEO, performance, acessibilidade | 1 dia |
| M7 | Deploy Vercel + Docker + docs | 1 dia |

**Total: ~13 dias**
