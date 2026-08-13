-- ============================================================
-- RESET PRÉ-CAMPANHA — rodar uma vez, manualmente, no SQL Editor do Supabase
-- Projeto: mbolxjcilvuxxtoaatqj
--
-- O que faz:
--   1. Apaga todos os registros de diagnostics (19 leads de teste) e
--      orders (2 registros) — confirmado com o cliente em 2026-08-10.
--   2. Garante que a estrutura das duas tabelas bate exatamente com o
--      que o site grava hoje (Quiz de 3 perguntas -> gargalo/tempo/area).
--
-- NÃO roda sozinho em nenhum deploy — é um script manual, de uso único.
-- Depois de rodado, os dados que chegarem em diante são 100% da campanha
-- real, sem ruído do período de teste.
-- ============================================================

-- 1) Limpa os dados existentes (idempotente — não falha se as tabelas já
--    estiverem vazias). RESTART IDENTITY não se aplica (id é uuid, não
--    serial), mantido aqui só por padrão de escrita.
truncate table public.diagnostics restart identity;
truncate table public.orders restart identity;

-- 2) Garante a estrutura de diagnostics — reflete exatamente as 3
--    perguntas do quiz hoje (content/quiz.js): gargalo, tempo, area.
--    Se a tabela não existir (banco novo), cria do zero.
create table if not exists public.diagnostics (
  id uuid primary key default gen_random_uuid(),
  gargalo text not null,        -- Pergunta 1: maior gargalo do escritório
  tempo text not null,          -- Pergunta 2: tempo perdido por dia
  area text not null,           -- Pergunta 3: área de atuação
  user_agent text,              -- navegador de quem respondeu
  meta jsonb not null default '{}'::jsonb,  -- UTMs capturados na hora do envio
  created_at timestamptz not null default now()
);

-- Migração de segurança: garante a coluna meta mesmo se a tabela já
-- existia antes dela ter sido adicionada.
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'diagnostics'
      and column_name  = 'meta'
  ) then
    alter table public.diagnostics add column meta jsonb not null default '{}'::jsonb;
  end if;
end $$;

-- Índice pra consultar por data com frequência (relatório de campanha,
-- comparação de período) sem full scan.
create index if not exists idx_diagnostics_created_at on public.diagnostics (created_at desc);

-- Índice pra cruzar público-alvo por gargalo/área — é exatamente o dado
-- que responde "qual o público que está respondendo o diagnóstico".
create index if not exists idx_diagnostics_gargalo on public.diagnostics (gargalo);
create index if not exists idx_diagnostics_area on public.diagnostics (area);

-- 3) Garante a estrutura de orders — fluxo de pagamento via PIX que tem
--    as credenciais em .env (PIX_KEY, PAYMENT_WEBHOOK_SECRET) mas ainda
--    não tem nenhuma rota de API implementada (`app/api/*`). Estrutura
--    mantida por consistência com schema.sql; nenhum dado real deve
--    estar sendo gravado aqui até essa rota existir.
create table if not exists public.orders (
  id uuid primary key,
  txid text unique not null,
  product_slug text not null,
  amount_cents integer not null check (amount_cents > 0),
  status text not null default 'pending' check (status in ('pending','paid','cancelled','refunded')),
  diagnosis jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

-- 4) Segurança — mantém RLS ativo, sem policy pública. Só o
--    service_role (usado nas rotas server-side) acessa essas tabelas.
alter table public.diagnostics enable row level security;
alter table public.orders enable row level security;

-- ============================================================
-- Conferência pós-reset — rodar depois do script acima pra confirmar
-- que as duas tabelas realmente ficaram vazias.
-- ============================================================
-- select count(*) as total_diagnostics from public.diagnostics;
-- select count(*) as total_orders from public.orders;
