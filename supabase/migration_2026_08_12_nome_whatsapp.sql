-- ============================================================
-- MIGRAÇÃO 2026-08-12 — adiciona nome/whatsapp em diagnostics
-- Rodar uma vez no SQL Editor do Supabase (projeto mbolxjcilvuxxtoaatqj)
--
-- Por quê: o quiz de diagnóstico passou a coletar Nome + WhatsApp
-- (Quiz.js, 4ª etapa) pra permitir follow-up de quem completa o
-- diagnóstico e não compra o Copiloto de R$27. Sem rodar isso, o
-- insert do /api/diagnostics vai falhar (coluna não existe).
-- ============================================================

alter table public.diagnostics add column if not exists nome text;
alter table public.diagnostics add column if not exists whatsapp text;

-- Conferência — confirma que as colunas existem agora
-- select column_name from information_schema.columns
-- where table_schema = 'public' and table_name = 'diagnostics';
