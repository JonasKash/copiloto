# Copiloto Jurídico — Landing Page

Landing page de vendas do **Copiloto Jurídico** (SaaS com 6 agentes de IA para rotina jurídica),
assinatura de R$ 27/mês vendida via Hotmart. Autor Hotmart: AVESTRA MARKETING DIRETO LTDA.

## Stack

- Next.js 14 (App Router)
- React + CSS Modules (sem Tailwind, sem CSS-in-JS)
- Zero backend próprio — todo CTA leva direto ao checkout da Hotmart

## Estrutura

```
app/
  layout.js       ← fonte (Inter), metadata, viewport
  globals.css      ← design system (cores, tipografia, botões, reveal)
  page.js          ← composição das seções
components/        ← uma seção por componente, cada um com seu .module.css
content/
  copiloto.js      ← toda a copy do produto + link de checkout Hotmart
public/assets/
  wladmir.png      ← foto real do Dr. Wladmir Bonadio Filho
```

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Deploy

Build padrão Next.js, sem configuração extra de rotas:

```bash
npm run build
npm run start
```

Antes de publicar na Vercel, seguir a skill `deploy` do projeto:
`vercel link --project <slug-do-cliente> --scope jonaskashs-projects --yes`
com um slug próprio e descritivo (nunca reaproveitar nome de pasta genérico).

## Onde mudar o quê

| Precisa mudar | Editar |
|---|---|
| Preço, textos, FAQ, features dos 6 agentes | `content/copiloto.js` |
| Link de checkout | `HOTMART_URL` em `content/copiloto.js` |
| Foto do mentor | `public/assets/wladmir.png` |
| Cores / tipografia / botões | `app/globals.css` |
| Layout de uma seção específica | `components/<Secao>.module.css` |

## Segurança

`next.config.js` aplica os headers da skill `cybersecurity` (HSTS, X-Frame-Options,
CSP, etc.). Não existem API Routes nem formulários próprios nesta versão — o checkout
inteiro roda na Hotmart — então `middleware.ts` e `lib/security.ts` (sanitização de
input) não foram incluídos. Se uma rota própria (`app/api/*`) for adicionada no futuro,
aplicar o template seguro da skill `cybersecurity` a ela.

## Sobre a versão anterior

Este repositório continha antes um funil diferente: "Kit Produtividade Jurídica" a
R$17, com diagnóstico de 3 perguntas, checkout PIX próprio (Supabase + BR Code) e
entrega por redirecionamento ao WhatsApp. Esse código foi removido (`index.html`,
`api/`, `components/diagnostic.js`, `lib/personalization.js`, etc.) porque o produto
vendido mudou para o Copiloto Jurídico via Hotmart. Todo o histórico continua
disponível no git caso seja necessário recuperar algo.

`supabase/schema.sql` ficou no repositório como referência histórica, mas não é usado
por esta landing page. As variáveis em `.env` (`SUPABASE_*`, `PIX_*`,
`PAYMENT_WEBHOOK_SECRET`) também não são mais usadas.
