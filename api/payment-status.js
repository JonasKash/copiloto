import { json, supabaseRequest } from "./_supabase.js";

export default async function handler(request, response) {
  if (request.method !== "GET") return json(response, 405, { error: "Método não permitido" });
  const orderId = String(request.query?.orderId || "");
  if (!/^[0-9a-f-]{36}$/i.test(orderId)) return json(response, 400, { error: "Pedido inválido" });
  try {
    const result = await supabaseRequest(`orders?id=eq.${encodeURIComponent(orderId)}&select=status&limit=1`, { method: "GET" });
    const rows = await result.json();
    return json(response, 200, { status: rows[0]?.status || "pending" });
  } catch {
    return json(response, 200, { status: "pending" });
  }
}
