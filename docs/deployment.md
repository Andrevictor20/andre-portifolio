# 🚀 deployment.md — Guia de Deploy

> **Projeto:** André Victor — Portfólio & Blog Técnico
> **Versão:** 1.0.0 | **Data:** 30/05/2026

---

## 1. Visão Geral de Deploy

O projeto suporta **duas estratégias de deploy**:

| Estratégia | Ambiente | Vantagens |
|------------|----------|-----------|
| **Vercel** | Serverless (PaaS) | Zero config, CDN global, previews automáticos |
| **Docker** | Self-hosted / VPS | Controle total, portabilidade, multi-cloud |

---

## 2. Deploy na Vercel

### 2.1 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Repositório no GitHub/GitLab/Bitbucket
- Node.js 18+ instalado localmente (para testes)

### 2.2 Passo a Passo

#### 1. Preparar o Repositório

```bash
# Garantir que o build funciona localmente
npm run build

# Verificar que não há erros de tipo
npx tsc --noEmit

# Commit de todos os arquivos
git add .
git commit -m "chore: prepare for Vercel deployment"
git push origin main
```

#### 2. Conectar à Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Git Repository"**
3. Selecione o repositório `andre-portifolio`
4. Configure:
   - **Framework Preset:** Next.js (auto-detectado)
   - **Root Directory:** `./` (padrão)
   - **Build Command:** `npm run build` (padrão)
   - **Output Directory:** `.next` (padrão)
   - **Install Command:** `npm ci` (padrão)

#### 3. Variáveis de Ambiente (se necessário)

```
# Na dashboard da Vercel → Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://andrevictor.dev
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics (opcional)
FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx  # Formulário de contato
```

#### 4. Deploy Automático

- **Cada push para `main`** → deploy de produção automático
- **Cada push para branches** → preview deploy com URL única
- **Pull Requests** → preview deploy com comentário automático

### 2.3 Configurações Avançadas Vercel

#### next-sitemap (pós-build)

```javascript
// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://andrevictor.dev',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
```

#### Headers de Segurança (next.config.mjs)

```javascript
// Adicionar ao next.config.mjs
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
      ],
    },
  ];
},
```

### 2.4 Domínio Customizado

1. Vercel Dashboard → **Settings → Domains**
2. Adicionar domínio: `andrevictor.dev`
3. Configurar DNS no registrador:
   - **A Record:** `76.76.21.21`
   - **CNAME (www):** `cname.vercel-dns.com`
4. SSL automático via Let's Encrypt

---

## 3. Deploy via Docker

### 3.1 Dockerfile (Multi-Stage Otimizado)

```dockerfile
# ============================================
# Dockerfile — André Victor Portfolio
# Multi-stage build otimizado para Next.js
# ============================================

# ----- Stage 1: Dependencies -----
FROM node:20-alpine AS deps

# Instalar dependências de sistema necessárias
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copiar apenas arquivos de dependência para cache eficiente
COPY package.json package-lock.json* ./

# Instalar dependências (production + dev para build)
RUN npm ci

# ----- Stage 2: Builder -----
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependências do stage anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilitar telemetria do Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Variáveis de build (podem ser sobrescritas)
ARG NEXT_PUBLIC_SITE_URL=https://andrevictor.dev
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

# Build da aplicação (gera standalone output)
RUN npm run build

# ----- Stage 3: Runner (Produção) -----
FROM node:20-alpine AS runner

WORKDIR /app

# Criar usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Configurações de ambiente
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copiar artefatos necessários do builder
# 1. Arquivos estáticos públicos
COPY --from=builder /app/public ./public

# 2. Standalone server (inclui server.js minificado)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# 3. Arquivos estáticos gerados pelo Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Usar usuário não-root
USER nextjs

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Iniciar servidor
CMD ["node", "server.js"]
```

### 3.2 .dockerignore

```dockerignore
# Dependencies
node_modules
npm-debug.log*

# Next.js build output
.next

# Git
.git
.gitignore

# IDE
.vscode
.idea
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Documentation (não necessária no container)
*.md
!README.md
LICENSE

# Docker
Dockerfile
docker-compose*.yml
.dockerignore

# CI/CD
.github

# Test files
__tests__
*.test.*
*.spec.*
jest.config.*
cypress/
```

### 3.3 docker-compose.yml

```yaml
# docker-compose.yml — Desenvolvimento e Produção

version: '3.8'

services:
  # ===== Ambiente de Produção =====
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        NEXT_PUBLIC_SITE_URL: ${NEXT_PUBLIC_SITE_URL:-https://andrevictor.dev}
    container_name: andre-portfolio
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s

  # ===== Ambiente de Desenvolvimento =====
  portfolio-dev:
    image: node:20-alpine
    container_name: andre-portfolio-dev
    working_dir: /app
    volumes:
      - .:/app
      - /app/node_modules    # Preservar node_modules do container
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    command: sh -c "npm install && npm run dev"
    profiles:
      - dev
```

### 3.4 Comandos Docker

```bash
# ===== BUILD & RUN (Produção) =====

# Build da imagem
docker build -t andre-portfolio:latest .

# Verificar tamanho da imagem (deve ser ~150-200MB)
docker images andre-portfolio

# Executar container
docker run -d \
  --name andre-portfolio \
  -p 3000:3000 \
  --restart unless-stopped \
  andre-portfolio:latest

# Ver logs
docker logs -f andre-portfolio

# Health check
docker inspect --format='{{.State.Health.Status}}' andre-portfolio

# ===== COM DOCKER COMPOSE =====

# Produção
docker compose up -d

# Desenvolvimento
docker compose --profile dev up portfolio-dev

# Rebuild após mudanças
docker compose up -d --build

# Parar
docker compose down

# ===== MANUTENÇÃO =====

# Limpar imagens antigas
docker image prune -f

# Ver uso de recursos
docker stats andre-portfolio
```

---

## 4. Deploy em VPS (Exemplo: DigitalOcean/AWS EC2)

### 4.1 Setup Inicial do Servidor

```bash
# 1. Conectar via SSH
ssh root@seu-servidor

# 2. Instalar Docker
curl -fsSL https://get.docker.com | sh

# 3. Instalar Docker Compose
sudo apt install docker-compose-plugin -y

# 4. Clonar repositório
git clone https://github.com/Andrevictor20/andre-portifolio.git
cd andre-portifolio

# 5. Build e deploy
docker compose up -d --build

# 6. Verificar status
docker compose ps
curl http://localhost:3000
```

### 4.2 Nginx como Reverse Proxy (Recomendado)

```nginx
# /etc/nginx/sites-available/andrevictor.dev

server {
    listen 80;
    server_name andrevictor.dev www.andrevictor.dev;

    # Redirect HTTP → HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name andrevictor.dev www.andrevictor.dev;

    # SSL (Certbot / Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/andrevictor.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/andrevictor.dev/privkey.pem;

    # Proxy para container Docker
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache para assets estáticos
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        proxy_pass http://localhost:3000;
        expires 30d;
        add_header Cache-Control "public";
    }
}
```

```bash
# Ativar site e obter SSL
sudo ln -s /etc/nginx/sites-available/andrevictor.dev /etc/nginx/sites-enabled/
sudo certbot --nginx -d andrevictor.dev -d www.andrevictor.dev
sudo nginx -t && sudo systemctl reload nginx
```

---

## 5. CI/CD (GitHub Actions)

```yaml
# .github/workflows/ci.yml

name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # Job 1: Lint & Type Check
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npm run lint

  # Job 2: Build
  build:
    runs-on: ubuntu-latest
    needs: quality
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Check bundle size
        run: |
          echo "Build completed successfully"
          du -sh .next/

  # Job 3: Docker Build (apenas em push para main)
  docker:
    runs-on: ubuntu-latest
    needs: build
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t andre-portfolio:${{ github.sha }} .
      - name: Test container
        run: |
          docker run -d --name test-container -p 3000:3000 andre-portfolio:${{ github.sha }}
          sleep 10
          curl -f http://localhost:3000 || exit 1
          docker stop test-container
```

---

## 6. Checklist de Deploy

### Pré-Deploy

- [ ] `npm run build` sem erros
- [ ] `npx tsc --noEmit` sem erros de tipo
- [ ] `npm run lint` sem warnings
- [ ] Lighthouse: Performance > 90, SEO > 95, A11y > 90
- [ ] Testar em mobile (Chrome DevTools)
- [ ] Verificar Dark/Light mode em todas as seções
- [ ] Verificar links de projetos (GitHub URLs)
- [ ] Testar formulário de contato
- [ ] Verificar download do CV (PDF)
- [ ] `robots.txt` e `sitemap.xml` acessíveis

### Pós-Deploy

- [ ] Site acessível na URL de produção
- [ ] SSL/HTTPS ativo
- [ ] Verificar OG tags (compartilhar no LinkedIn/Twitter)
- [ ] Google Search Console: submeter sitemap
- [ ] Monitorar Core Web Vitals
- [ ] Testar health check do container (Docker)

---

## 7. Métricas de Tamanho Esperadas

| Métrica | Valor Esperado |
|---------|---------------|
| Docker Image Size | ~150-200 MB |
| Build Time (local) | < 60s |
| Build Time (CI) | < 120s |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Bundle Size (JS) | < 200 KB (gzipped) |
| Lighthouse Performance | 90+ |
