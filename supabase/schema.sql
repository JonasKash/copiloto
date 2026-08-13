create table if not exists public.diagnostics (
  id uuid primary key default gen_random_uuid(),
  gargalo text not null,
  tempo text not null,
  area text not null,
  nome text,
  whatsapp text,
  user_agent text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Migração: adiciona coluna meta caso a tabela já exista sem ela
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

-- Migração 2026-08-12: adiciona nome/whatsapp (captura de contato pra
-- follow-up de quem completa o diagnóstico e não compra o Copiloto)
do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'diagnostics'
      and column_name  = 'nome'
  ) then
    alter table public.diagnostics add column nome text;
  end if;
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name   = 'diagnostics'
      and column_name  = 'whatsapp'
  ) then
    alter table public.diagnostics add column whatsapp text;
  end if;
end $$;

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

alter table public.diagnostics enable row level security;
alter table public.orders enable row level security;

-- Nenhuma policy pública: somente as funções server-side com service_role acessam as tabelas.
