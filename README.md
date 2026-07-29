# Avestra â€” Kit JurÃ­dico MVP

MVP de diagnÃ³stico, landing personalizada e checkout PIX para venda do Kit Produtividade JurÃ­dica por R$ 17.

## Fluxo

1. O advogado responde trÃªs perguntas.
2. A API valida e salva o diagnÃ³stico no Supabase.
3. A landing usa as trÃªs respostas na copy.
4. O checkout cria um pedido e um payload PIX de R$ 17.
5. Um webhook do provedor confirma o pagamento.
6. O navegador redireciona para o WhatsApp `5534997101300` com a mensagem do produto.

## PublicaÃ§Ã£o hoje

1. Crie um projeto na Vercel apontando para esta pasta.
2. Execute [`supabase/schema.sql`](./supabase/schema.sql) no SQL Editor do Supabase.
3. Cadastre na Vercel as variÃ¡veis de [`.env.example`](./.env.example).
4. Configure o provedor/banco para enviar a confirmaÃ§Ã£o para `POST /api/payment-webhook`, com o header `x-webhook-secret`.
5. FaÃ§a deploy.

`SUPABASE_SERVICE_ROLE_KEY` e `PAYMENT_WEBHOOK_SECRET` sÃ£o exclusivamente server-side. NÃ£o use prefixo pÃºblico e nÃ£o inclua esses valores em JavaScript do navegador.

## Testes

```powershell
npm.cmd test
```

## ObservaÃ§Ã£o sobre confirmaÃ§Ã£o PIX

O BR Code gera o QR e o cÃ³digo copia-e-cola, mas a confirmaÃ§Ã£o automÃ¡tica depende de um banco ou provedor PIX com webhook. A rota receptora jÃ¡ estÃ¡ pronta; adapte o formato do evento ao provedor escolhido antes de receber pagamentos reais.

