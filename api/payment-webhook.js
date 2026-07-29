import { timingSafeEqual } from "node:crypto";
import { json, supabaseRequest } from "./_supabase.js";

function safeEqual(left, right) {
  const a = Buffer.from(left || ""); const b = Buffer.from(right || "");
  return a.length === b.length && timingSafeEqual(a, b);
}

export default async function handler(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Método não permitido" });
  if (!safeEqual(request.headers["x-webhook-secret"], process.env.PAYMENT_WEBHOOK_SECRET)) return json(response, 401, { error: "Não autorizado" });
  const { txid, status } = request.body || {};
  if (!txid || status !== "paid") return json(response, 400, { error: "Evento inválido" });
  const result = await supabaseRequest(`orders?txid=eq.${encodeURIComponent(txid)}`, { method: "PATCH", body: JSON.stringify({ status: "paid", paid_at: new Date().toISOString() }) });
  if (!result.ok) return json(response, 503, { error: "Falha ao atualizar pedido" });
  return json(response, 200, { received: true });
}
