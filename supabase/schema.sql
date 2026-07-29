create table if not exists public.diagnostics (
  id uuid primary key default gen_random_uuid(),
  gargalo text not null,
  tempo text not null,
  area text not null,
  user_agent text,
  created_at timestamptz not null default now()
);

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
