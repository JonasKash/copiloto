import { randomUUID } from "node:crypto";
import { json, supabaseRequest } from "./_supabase.js";
import { buildPix } from "./_pix.js";

const DEFAULT_PIX = "00020126360014BR.GOV.BCB.PIX011466309977000101520400005303986540517.005802BR5901N6001C62120508kitatend63048CCE";

export default async function handler(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Método não permitido" });
  const orderId = randomUUID();
  const txid = orderId.replaceAll("-", "").slice(0, 25);

  try {
    const result = await supabaseRequest("orders", {
      method: "POST",
      body: JSON.stringify({
        id: orderId,
        txid,
        product_slug: "kit-produtividade-juridica",
        amount_cents: 1700,
        status: "pending",
        diagnosis: {
          answers: request.body?.answers || {},
          meta: request.body?.meta || {}
        }
      })
    });

    if (!result.ok) throw new Error(await result.text());

    const pixKey = process.env.PIX_KEY;
    const pixName = process.env.PIX_MERCHANT_NAME || "Avestra Digital";
    const pixCity = process.env.PIX_MERCHANT_CITY || "ARAxa";
    const amount = 17;

    const pix = pixKey
      ? buildPix({ key: pixKey, name: pixName, city: pixCity, amount, txid })
      : DEFAULT_PIX;

    return json(response, 201, { orderId, pix });
  } catch (error) {
    console.error("checkout:", error.message);
    return json(response, 503, { error: "Não foi possível iniciar o pagamento" });
  }
}
