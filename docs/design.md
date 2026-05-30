# 🎨 design.md — Guia de Design & Estilo

> **Projeto:** André Victor — Portfólio & Blog Técnico
> **Versão:** 1.0.0 | **Data:** 30/05/2026

---

## 1. Filosofia de Design

Design **"Neo-Brutalism meets Glassmorphism"**: interfaces limpas com profundidade visual, micro-animações suaves e tipografia bold. O site deve transmitir **modernidade**, **competência técnica** e **sofisticação** sem ser visualmente poluído.

**Princípios:**
- Clean com personalidade
- Contraste estratégico para hierarquia visual
- Animações que guiam, não distraem
- Espaço negativo generoso (breathing room)

---

## 2. Paleta de Cores

### 2.1 Dark Mode (Padrão)

```
--bg-primary:      #0A0A0F     (Quase preto azulado — fundo principal)
--bg-secondary:    #12121A     (Fundo de cards e seções alternadas)
--bg-tertiary:     #1A1A2E     (Hover states e elementos elevados)
--bg-glass:        rgba(26, 26, 46, 0.7)  (Glassmorphism com backdrop-blur)

--text-primary:    #F0F0F5     (Texto principal — quase branco)
--text-secondary:  #8B8BA3     (Texto secundário — cinza lavanda)
--text-muted:      #5C5C73     (Labels e metadados)

--accent-primary:  #6C63FF     (Roxo vibrante — CTAs e links)
--accent-hover:    #7B73FF     (Hover do accent)
--accent-glow:     rgba(108, 99, 255, 0.3)  (Glow effect)

--accent-secondary: #00D4AA    (Verde-água — badges de sucesso e destaques)
--accent-tertiary:  #FF6B6B    (Coral — alertas e ícones de destaque)

--gradient-hero:   linear-gradient(135deg, #6C63FF 0%, #00D4AA 50%, #FF6B6B 100%)
--gradient-card:   linear-gradient(145deg, rgba(108,99,255,0.1) 0%, rgba(0,212,170,0.05) 100%)

--border-subtle:   rgba(255, 255, 255, 0.06)
--border-accent:   rgba(108, 99, 255, 0.3)
```

### 2.2 Light Mode

```
--bg-primary:      #FAFBFE     (Branco azulado suave)
--bg-secondary:    #F0F2F8     (Fundo de cards)
--bg-tertiary:     #E8EAF0     (Hover)
--bg-glass:        rgba(255, 255, 255, 0.7)

--text-primary:    #1A1A2E     (Texto principal — quase preto)
--text-secondary:  #5C5C73     (Texto secundário)
--text-muted:      #8B8BA3     (Labels)

--accent-primary:  #5A52E0     (Roxo ajustado para contraste em fundo claro)
--accent-hover:    #4A42D0
--accent-glow:     rgba(90, 82, 224, 0.15)

--accent-secondary: #00B894    (Verde ajustado)
--accent-tertiary:  #E55A5A    (Coral ajustado)

--gradient-hero:   linear-gradient(135deg, #5A52E0 0%, #00B894 50%, #E55A5A 100%)
--border-subtle:   rgba(0, 0, 0, 0.06)
--border-accent:   rgba(90, 82, 224, 0.2)
```

---

## 3. Tipografia

### 3.1 Fontes

| Uso | Fonte | Weight | Fallback |
|-----|-------|--------|----------|
| Headings | **Inter** | 700, 800, 900 | system-ui, sans-serif |
| Body | **Inter** | 400, 500, 600 | system-ui, sans-serif |
| Code | **JetBrains Mono** | 400, 500 | monospace |

### 3.2 Escala Tipográfica

```
--text-xs:    0.75rem  (12px)  — badges, labels
--text-sm:    0.875rem (14px)  — captions, metadata
--text-base:  1rem     (16px)  — body text
--text-lg:    1.125rem (18px)  — lead paragraphs
--text-xl:    1.25rem  (20px)  — card titles
--text-2xl:   1.5rem   (24px)  — section subtitles
--text-3xl:   1.875rem (30px)  — section titles
--text-4xl:   2.25rem  (36px)  — page titles
--text-5xl:   3rem     (48px)  — hero subtitle
--text-6xl:   3.75rem  (60px)  — hero title (desktop)
--text-7xl:   4.5rem   (72px)  — hero title impacto
```

### 3.3 Line Heights & Spacing

```
--leading-tight:   1.1   (headings)
--leading-snug:    1.3   (subheadings)
--leading-normal:  1.6   (body)
--leading-relaxed: 1.8   (blog articles)
--letter-tight:   -0.02em (headings grandes)
--letter-normal:   0      (body)
--letter-wide:     0.05em (labels uppercase)
```

---

## 4. Sistema de Espaçamento

Baseado em múltiplos de 4px (Tailwind default):

```
--space-1:   4px    (0.25rem)
--space-2:   8px    (0.5rem)
--space-3:   12px   (0.75rem)
--space-4:   16px   (1rem)
--space-6:   24px   (1.5rem)
--space-8:   32px   (2rem)
--space-12:  48px   (3rem)
--space-16:  64px   (4rem)
--space-20:  80px   (5rem)
--space-24:  96px   (6rem)
--space-32:  128px  (8rem)
```

**Seção spacing:** `py-24` (96px) em desktop, `py-16` (64px) em mobile

---

## 5. Componentes do Design System

### 5.1 Botões

```
[Primary Button]
- bg: accent-primary, text: white
- padding: 12px 28px, border-radius: 12px
- hover: scale(1.02), shadow-lg com accent-glow
- active: scale(0.98)
- transition: all 200ms ease

[Secondary Button]
- bg: transparent, border: 1px accent-primary
- text: accent-primary
- hover: bg accent-primary/10

[Ghost Button]
- bg: transparent, text: text-secondary
- hover: text-primary, bg-tertiary
```

### 5.2 Cards

```
[Project Card]
- bg: bg-secondary com gradient-card
- border: 1px border-subtle
- border-radius: 16px
- padding: 24px
- hover: translateY(-4px), border-accent, shadow com accent-glow
- transition: transform 300ms ease, border 200ms ease

[Blog Card]
- Similar ao Project Card
- Imagem de capa no topo (aspect-ratio: 16/9)
- Tags como badges inline
- Data em text-muted

[Skill Card]
- bg: bg-tertiary
- border-radius: 12px
- padding: 16px
- Ícone da tecnologia + nome + barra de nível
- hover: scale(1.05), glow sutil
```

### 5.3 Badges/Tags

```
- bg: accent-primary/15 (transparente)
- text: accent-primary
- padding: 4px 12px
- border-radius: 999px (pill)
- font-size: text-xs, font-weight: 500
- Variantes: primary (roxo), success (verde), danger (coral)
```

### 5.4 Navbar

```
- position: fixed top, z-50
- bg: bg-glass com backdrop-blur(16px)
- border-bottom: 1px border-subtle
- height: 72px
- Logo à esquerda, links ao centro, theme toggle à direita
- Mobile: hamburger → drawer animado
- Scroll: navbar compacta (height: 60px) com shadow sutil
```

---

## 6. Especificações de Animações (Framer Motion)

### 6.1 Entrada de Seções (Scroll Reveal)

```tsx
// Fade up com stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
```

### 6.2 Hero Animations

```tsx
// Typewriter para headline
// Sequência: nome → subtítulo → CTAs → social links
// Cada elemento com delay incremental de 200ms
// Background particles: motion suave com parallax no mouse move

// Avatar entrance
{ scale: [0.8, 1.05, 1], opacity: [0, 1], transition: { duration: 0.8 } }

// CTA buttons
{ opacity: [0, 1], x: [-20, 0], transition: { delay: 1.2, duration: 0.5 } }
```

### 6.3 Cards Hover

```tsx
// Project cards
whileHover={{
  y: -8,
  transition: { type: "spring", stiffness: 300, damping: 20 }
}}

// Glow effect via CSS box-shadow animado
```

### 6.4 Page Transitions

```tsx
// Layout transition entre páginas de blog
const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
};
```

### 6.5 Navbar Scroll

```tsx
// Navbar shrink on scroll (> 100px)
// Smooth height transition: 72px → 60px
// Background opacity: 0 → 1 com backdrop-blur
```

### 6.6 Theme Toggle

```tsx
// Sun/Moon ícone com rotate + scale
{ rotate: isDark ? 0 : 180, scale: [0.8, 1.1, 1] }
```

### 6.7 Skill Bars

```tsx
// Progress bars animados no viewport
{ width: ["0%", `${skillLevel}%`], transition: { duration: 1.5, ease: "easeOut" } }
```

### 6.8 Counter Animation

```tsx
// Contadores numéricos (repos, linguagens)
// useMotionValue + useTransform para interpolar 0 → target
// Duration: 2s com easeOut
```

---

## 7. Wireframe Textual

### 7.1 Layout Geral

```
┌─────────────────────────────────────────────────────┐
│ [NAVBAR - fixed top, glassmorphism]                 │
│  Logo/Name    Nav Links      Theme Toggle           │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [HERO SECTION - fullscreen viewport]                │
│  ┌──────────────────────────────────────┐           │
│  │  "André Victor Macedo Pereira"       │           │
│  │  Typewriter: Full Stack • Cloud •    │  [Avatar] │
│  │  DevOps Explorer                     │  com glow │
│  │                                      │           │
│  │  [Download CV]  [Ver Projetos]       │           │
│  │                                      │           │
│  │  🔗 GitHub  🔗 LinkedIn  📧 Email   │           │
│  └──────────────────────────────────────┘           │
│  ▼ scroll indicator animado                         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [ABOUT ME]                                          │
│  Seção dividida:                                    │
│  LEFT: Texto bio + interesses em cards              │
│  RIGHT: Timeline visual interativa                  │
│                                                     │
│  [Stats Row] 37 Repos | 8+ Linguagens | 6 Projetos │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [SKILLS & TOOLS]                                    │
│  Tabs: Languages | Frameworks | DevOps | IoT        │
│                                                     │
│  Grid de cards (3-4 colunas desktop):               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │ 🔷 TS  │ │ ☕ Java│ │ 🟨 JS │ │ 🐍 Py  │       │
│  │ ████▓░ │ │ ████▓░ │ │ ███▓░░ │ │ ██▓░░░ │       │
│  └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [PROJECTS SHOWCASE]                                 │
│  Filtros: [All] [Full Stack] [Backend] [IoT] [CS]   │
│                                                     │
│  Grid (2 cols desktop, 1 col mobile):               │
│  ┌─────────────────┐ ┌─────────────────┐            │
│  │ Preview Image   │ │ Preview Image   │            │
│  │ Ar-Saúde        │ │ Vollmed         │            │
│  │ NestJS • Docker │ │ Next.js • TS    │            │
│  │ [GitHub] [Demo] │ │ [GitHub] [Demo] │            │
│  └─────────────────┘ └─────────────────┘            │
│                                                     │
│  → Click abre MODAL com preview dinâmico            │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [BLOG / ARTIGOS]                                    │
│  "Últimos Artigos"                                  │
│                                                     │
│  ┌──────────────────────────────────────────┐       │
│  │ [Imagem]  Título do Artigo               │       │
│  │           Resumo breve do conteúdo...    │       │
│  │           📅 30 Mai 2026  ⏱ 8 min       │       │
│  │           🏷 [DevOps] [Docker] [Linux]   │       │
│  └──────────────────────────────────────────┘       │
│                                                     │
│  [Ver todos os artigos →]                           │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [CONTACT]                                           │
│  LEFT: Headline + copy + links diretos              │
│  RIGHT: Formulário (Nome, Email, Mensagem)          │
│                                                     │
│  "Vamos construir algo incrível juntos?"            │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
│  Logo  |  Nav Links  |  Social Links  |  © 2026     │
└─────────────────────────────────────────────────────┘
```

### 7.2 Blog Post Page

```
┌─────────────────────────────────────────────────────┐
│ [NAVBAR]                                            │
├─────────────────────────────────────────────────────┤
│ [Reading Progress Bar — top of page, accent color]  │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [ARTICLE HEADER]                                    │
│  ← Voltar para Blog                                │
│  # Título do Artigo                                 │
│  📅 30 Mai 2026  ⏱ 8 min  👤 André Victor          │
│  🏷 [DevOps] [Docker] [Linux]                      │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SIDEBAR (sticky)    │   CONTEÚDO MDX               │
│  ┌──────────────┐    │   Parágrafos, code blocks,   │
│  │ Table of     │    │   imagens, componentes React  │
│  │ Contents     │    │   callouts, etc.              │
│  │ - Intro      │    │                               │
│  │ - Setup      │    │                               │
│  │ - Deploy     │    │                               │
│  │ - Conclusão  │    │                               │
│  └──────────────┘    │                               │
│                                                     │
├─────────────────────────────────────────────────────┤
│ [SHARE] 🔗 Copiar Link  🐦 Twitter  💼 LinkedIn    │
├─────────────────────────────────────────────────────┤
│ [ARTIGOS RELACIONADOS — 3 cards]                    │
├─────────────────────────────────────────────────────┤
│ [FOOTER]                                            │
└─────────────────────────────────────────────────────┘
```

---

## 8. Efeitos Especiais

### 8.1 Glassmorphism
- `backdrop-filter: blur(16px)`, bg com alpha 0.7
- Border sutil `rgba(255,255,255,0.06)`
- Usado em: Navbar, modais, cards elevados

### 8.2 Gradient Glow
- Box-shadow com cores do accent em hover
- `0 0 30px rgba(108, 99, 255, 0.3)`
- Animado com transition 300ms

### 8.3 Cursor Trail / Mouse Parallax
- Background elements do hero respondem ao mouse position
- Efeito sutil com useMotionValue + useTransform

### 8.4 Scroll Progress
- Barra no topo da página (blog posts)
- Cor accent-primary, height: 3px
- Controlada por scroll position / useScroll()

### 8.5 Stagger Grid
- Cards de projetos e skills entram com stagger
- Delay de 50-100ms entre cada item
- Combinado com intersection observer (whileInView)

---

## 9. Responsividade

| Breakpoint | Colunas Grid | Hero Size | Nav |
|------------|-------------|-----------|-----|
| `< 640px` | 1 col | text-4xl | Hamburger drawer |
| `640-768px` | 2 cols | text-5xl | Hamburger drawer |
| `768-1024px` | 2-3 cols | text-5xl | Links visíveis |
| `1024-1280px` | 3-4 cols | text-6xl | Links completos |
| `> 1280px` | 4 cols | text-7xl | Links completos |

**Container max-width:** 1280px com padding horizontal 16-24px
