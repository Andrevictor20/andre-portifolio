# 🏗️ architecture.md — Arquitetura do Projeto

> **Projeto:** André Victor — Portfólio & Blog Técnico
> **Versão:** 1.0.0 | **Data:** 30/05/2026

---

## 1. Visão Geral da Arquitetura

Aplicação **Next.js 14+ com App Router**, renderização híbrida (SSG para blog + CSR para interações dinâmicas), motor de blog via **MDX** e deploy dual (Vercel + Docker).

```
┌──────────────────────────────────────────────────┐
│                    BROWSER                        │
│  ┌────────────────────────────────────────────┐  │
│  │          Next.js App (App Router)          │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐   │  │
│  │  │  Pages   │ │ Layouts  │ │Components│   │  │
│  │  │  (SSG)   │ │ (Shared) │ │ (Client) │   │  │
│  │  └────┬─────┘ └────┬─────┘ └────┬─────┘   │  │
│  │       │             │            │         │  │
│  │  ┌────▼─────────────▼────────────▼─────┐   │  │
│  │  │         Data Layer                  │   │  │
│  │  │  MDX Files │ JSON Data │ Assets     │   │  │
│  │  └────────────────────────────────────┘   │  │
│  └────────────────────────────────────────────┘  │
│                                                   │
│  ┌─────────────┐  ┌──────────────────────────┐   │
│  │   Vercel    │  │   Docker (self-hosted)    │   │
│  │   Deploy    │  │   Multi-stage build       │   │
│  └─────────────┘  └──────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

---

## 2. Estrutura de Pastas

```
andre-portifolio/
├── .github/
│   └── workflows/
│       └── ci.yml                  # GitHub Actions (lint, build, test)
│
├── public/
│   ├── fonts/                      # Fontes locais (Inter, JetBrains Mono)
│   ├── images/
│   │   ├── projects/               # Screenshots dos projetos
│   │   ├── blog/                   # Imagens dos artigos
│   │   └── avatar.webp             # Foto de perfil
│   ├── resume/
│   │   └── andre-victor-cv.pdf     # Currículo para download
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml                 # Gerado via next-sitemap
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (fonts, theme, metadata)
│   │   ├── page.tsx                # Home / Landing Page principal
│   │   ├── globals.css             # Estilos globais + variáveis CSS
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx            # Lista de artigos (/blog)
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Artigo individual (/blog/[slug])
│   │   │
│   │   └── not-found.tsx           # Página 404 personalizada
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navegação fixa com glassmorphism
│   │   │   ├── Footer.tsx          # Rodapé com links e copyright
│   │   │   ├── ThemeToggle.tsx     # Switch Dark/Light animado
│   │   │   └── MobileMenu.tsx      # Menu hamburger drawer
│   │   │
│   │   ├── sections/               # Seções da landing page
│   │   │   ├── Hero.tsx            # Hero section com typewriter
│   │   │   ├── About.tsx           # About me com timeline
│   │   │   ├── Skills.tsx          # Skills grid com tabs
│   │   │   ├── Projects.tsx        # Project showcase com filtros
│   │   │   ├── BlogPreview.tsx     # Preview dos últimos artigos
│   │   │   └── Contact.tsx         # Formulário e links
│   │   │
│   │   ├── ui/                     # Componentes reutilizáveis
│   │   │   ├── Button.tsx          # Botões (Primary, Secondary, Ghost)
│   │   │   ├── Card.tsx            # Card base com hover effects
│   │   │   ├── Badge.tsx           # Tech badges (pill)
│   │   │   ├── SectionTitle.tsx    # Título de seção padronizado
│   │   │   ├── AnimatedCounter.tsx # Contador numérico animado
│   │   │   ├── SkillBar.tsx        # Barra de progresso animada
│   │   │   ├── ProjectModal.tsx    # Modal de preview do projeto
│   │   │   ├── ProjectCard.tsx     # Card individual de projeto
│   │   │   ├── BlogCard.tsx        # Card de artigo na listagem
│   │   │   └── ScrollIndicator.tsx # Indicador de scroll no hero
│   │   │
│   │   ├── blog/                   # Componentes específicos do blog
│   │   │   ├── MDXComponents.tsx   # Mapeamento de componentes MDX
│   │   │   ├── TableOfContents.tsx # Sumário lateral sticky
│   │   │   ├── ReadingProgress.tsx # Barra de progresso de leitura
│   │   │   ├── CodeBlock.tsx       # Code block com copy + syntax
│   │   │   ├── Callout.tsx         # Callout boxes (info, warn, tip)
│   │   │   ├── ShareButtons.tsx    # Botões de compartilhamento
│   │   │   └── RelatedPosts.tsx    # Artigos relacionados
│   │   │
│   │   └── animations/            # Wrappers de animação
│   │       ├── FadeIn.tsx          # Fade in com scroll trigger
│   │       ├── StaggerContainer.tsx # Container com stagger children
│   │       ├── TypewriterText.tsx  # Efeito typewriter
│   │       └── ParallaxWrapper.tsx # Parallax no mouse move
│   │
│   ├── content/
│   │   └── blog/                   # Artigos MDX
│   │       ├── primeiro-artigo.mdx # Artigo de exemplo
│   │       └── ...
│   │
│   ├── data/                       # Dados estáticos em JSON/TS
│   │   ├── projects.ts             # Lista de projetos com metadados
│   │   ├── skills.ts               # Skills organizadas por categoria
│   │   ├── timeline.ts             # Marcos para timeline
│   │   └── social.ts               # Links sociais
│   │
│   ├── lib/                        # Utilitários e helpers
│   │   ├── mdx.ts                  # Funções de parse/renderização MDX
│   │   ├── utils.ts                # Funções auxiliares genéricas
│   │   └── fonts.ts                # Configuração de fontes (next/font)
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useTheme.ts             # Hook de tema dark/light
│   │   ├── useScrollProgress.ts    # Hook de progresso de scroll
│   │   ├── useIntersection.ts      # Hook de intersection observer
│   │   └── useMediaQuery.ts        # Hook de breakpoints
│   │
│   └── types/                      # TypeScript types
│       ├── project.ts              # Tipos de projeto
│       ├── blog.ts                 # Tipos de artigo/blog
│       └── index.ts                # Re-exports
│
├── .dockerignore
├── Dockerfile                      # Multi-stage Docker build
├── docker-compose.yml              # Compose para dev local
├── next.config.mjs                 # Config Next.js (MDX, images, etc.)
├── tailwind.config.ts              # Config Tailwind com design tokens
├── tsconfig.json
├── postcss.config.mjs
├── package.json
├── .eslintrc.json
├── .prettierrc
└── README.md
```

---

## 3. Fluxo de Dados

### 3.1 Landing Page (Home)

```
page.tsx (Server Component — SSG)
  │
  ├── Importa dados estáticos de src/data/*.ts
  │   ├── projects.ts → lista de projetos
  │   ├── skills.ts → categorias de skills
  │   └── timeline.ts → marcos do timeline
  │
  ├── Renderiza seções como Server Components
  │   ├── <Hero /> — layout estático, animações client-side
  │   ├── <About /> — texto + timeline
  │   ├── <Skills /> — tabs interativos (Client Component)
  │   ├── <Projects /> — filtros + modais (Client Component)
  │   ├── <BlogPreview /> — fetch dos 3 últimos posts MDX
  │   └── <Contact /> — formulário (Client Component)
  │
  └── Output: HTML estático pré-renderizado + JS hydration
```

### 3.2 Blog

```
blog/page.tsx (Server Component — SSG)
  │
  ├── lib/mdx.ts → getAllPosts()
  │   ├── Lê todos os .mdx de src/content/blog/
  │   ├── Extrai frontmatter (título, data, tags, resumo)
  │   ├── Ordena por data descrescente
  │   └── Retorna array de PostMeta[]
  │
  └── Renderiza <BlogCard /> para cada post

blog/[slug]/page.tsx (Server Component — SSG com generateStaticParams)
  │
  ├── lib/mdx.ts → getPostBySlug(slug)
  │   ├── Lê o arquivo .mdx correspondente
  │   ├── Extrai frontmatter
  │   ├── Compila MDX → React components (next-mdx-remote/rsc)
  │   └── Gera Table of Contents a partir dos headings
  │
  ├── Renderiza artigo com <MDXComponents />
  │   ├── Syntax highlighting via Shiki
  │   ├── Custom components (Callout, CodeBlock)
  │   └── next/image para imagens otimizadas
  │
  ├── <TableOfContents /> — sidebar sticky (Client Component)
  ├── <ReadingProgress /> — barra de progresso (Client Component)
  └── <RelatedPosts /> — posts com tags similares
```

### 3.3 Fluxo de Tema

```
ThemeProvider (Context API)
  │
  ├── Estado: theme = 'dark' | 'light'
  ├── Init: localStorage → prefers-color-scheme → 'dark' (fallback)
  ├── Toggle: atualiza state + localStorage + document.documentElement.classList
  │
  └── Tailwind class strategy: dark:* classes
      ├── <html class="dark"> → dark mode ativo
      └── <html class=""> → light mode
```

---

## 4. Padronização de Componentes

### 4.1 Convenções

```typescript
// Naming: PascalCase para componentes, camelCase para hooks
// Um componente por arquivo
// Props interface exportada com nome descritivo

// Exemplo:
interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  className?: string;
}

export function ProjectCard({ project, onSelect, className }: ProjectCardProps) {
  // ...
}
```

### 4.2 Server vs Client Components

| Tipo | Diretiva | Uso |
|------|----------|-----|
| **Server** | (default) | Seções estáticas, data fetching, layout |
| **Client** | `"use client"` | Interações (filtros, modais, toggles, animações Framer Motion) |

**Regra:** Manter o máximo possível como Server Components. Usar `"use client"` apenas nos leaf components que precisam de interatividade.

### 4.3 Padrão de Animação

```typescript
// Todos os componentes animados usam wrapper:
// FadeIn — para elementos individuais
// StaggerContainer — para listas/grids

// Exemplo de uso:
<StaggerContainer>
  {projects.map(p => (
    <FadeIn key={p.id}>
      <ProjectCard project={p} />
    </FadeIn>
  ))}
</StaggerContainer>
```

---

## 5. Arquitetura do Motor de Blog (MDX)

### 5.1 Estrutura de um Artigo

```
src/content/blog/configurando-docker-nextjs.mdx
```

```mdx
---
title: "Configurando Docker para Next.js em Produção"
date: "2026-05-30"
summary: "Guia completo para criar Dockerfiles otimizados multi-stage para apps Next.js."
tags: ["Docker", "Next.js", "DevOps"]
author: "André Victor"
coverImage: "/images/blog/docker-nextjs-cover.webp"
published: true
---

# Introdução

Conteúdo do artigo aqui...

<Callout type="info">
  Dica importante sobre configuração!
</Callout>

```typescript
// Code block com syntax highlighting automático
const config = { output: 'standalone' };
```

<Callout type="warning">
  Cuidado com essa configuração em produção.
</Callout>
```

### 5.2 Pipeline de Processamento MDX

```
1. [Build Time] getAllPosts()
   │
   ├── fs.readdir('src/content/blog/') → lista de .mdx
   ├── Para cada arquivo:
   │   ├── fs.readFile() → raw content
   │   ├── gray-matter → { data: frontmatter, content: mdxBody }
   │   └── Retorna PostMeta { slug, title, date, tags, summary }
   │
   └── Ordena por data DESC → PostMeta[]

2. [Build Time] getPostBySlug(slug)
   │
   ├── fs.readFile(`src/content/blog/${slug}.mdx`)
   ├── gray-matter → frontmatter + content
   ├── compileMDX() via next-mdx-remote/rsc
   │   ├── Plugins rehype: rehype-shiki (syntax), rehype-slug
   │   ├── Plugins remark: remark-gfm
   │   ├── Components map: { Callout, CodeBlock, img: Image }
   │   └── Output: React.ReactNode (MDXContent)
   │
   └── Retorna { frontmatter, content: MDXContent, headings }

3. [Build Time] generateStaticParams()
   │
   ├── getAllPosts() → slugs[]
   └── Retorna [{ slug: 'artigo-1' }, { slug: 'artigo-2' }]
       → Next.js gera páginas estáticas para cada slug
```

### 5.3 Componentes MDX Customizados

```typescript
// src/components/blog/MDXComponents.tsx

export const mdxComponents = {
  // Override de elementos HTML padrão
  h1: (props) => <h1 className="text-4xl font-bold mt-12 mb-4" {...props} />,
  h2: (props) => <h2 className="text-3xl font-bold mt-10 mb-3" {...props} />,
  h3: (props) => <h3 className="text-2xl font-semibold mt-8 mb-2" {...props} />,
  p:  (props) => <p className="text-lg leading-relaxed mb-4" {...props} />,
  a:  (props) => <a className="text-accent hover:underline" {...props} />,
  img: (props) => <Image className="rounded-xl" {...props} />,
  pre: (props) => <CodeBlock {...props} />,

  // Componentes customizados
  Callout,      // <Callout type="info|warning|tip">
  CodeBlock,    // Code com copy e syntax highlight
};
```

### 5.4 Dependências do Blog Engine

```json
{
  "next-mdx-remote": "^5.0.0",  // RSC support para MDX
  "gray-matter": "^4.0.3",       // Parse de frontmatter YAML
  "shiki": "^1.0.0",             // Syntax highlighting
  "remark-gfm": "^4.0.0",        // GitHub Flavored Markdown
  "rehype-slug": "^6.0.0",       // IDs nos headings para TOC
  "rehype-autolink-headings": "^7.0.0"  // Links nos headings
}
```

---

## 6. Configurações Chave

### 6.1 next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Para Docker
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
```

### 6.2 tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
```

---

## 7. Performance & Otimizações

| Técnica | Implementação |
|---------|---------------|
| **Static Generation** | Blog pages via generateStaticParams() |
| **Image Optimization** | next/image com WebP/AVIF, lazy loading |
| **Code Splitting** | Dynamic imports para modais e componentes pesados |
| **Font Optimization** | next/font/google com display: swap |
| **Bundle Analysis** | @next/bundle-analyzer |
| **Tree Shaking** | Imports nomeados de lucide-react e framer-motion |
| **Preconnect** | Fontes Google, GitHub assets |
