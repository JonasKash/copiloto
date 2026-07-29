import { randomUUID } from "node:crypto";
import { json, supabaseRequest } from "./_supabase.js";

const PIX = "00020126360014BR.GOV.BCB.PIX011466309977000101520400005303986540517.005802BR5901N6001C62120508kitatend63048CCE";

export default async function handler(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "MÃ©todo nÃ£o permitido" });
  const orderId = randomUUID();
  try {
    const result = await supabaseRequest("orders", {
      method: "POST",
      body: JSON.stringify({ id: orderId, txid: orderId.replaceAll("-", "").slice(0, 25), product_slug: "kit-atendimento", amount_cents: 1700, status: "pending", diagnosis: request.body?.answers || {} })
    });
    if (!result.ok) throw new Error(await result.text());
    return json(response, 201, { orderId, pix: PIX });
  } catch (error) {
    console.error("checkout:", error.message);
    return json(response, 503, { error: "NÃ£o foi possÃ­vel iniciar o pagamento" });
  }
}
