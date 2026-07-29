import { randomUUID } from "node:crypto";
import { buildPix } from "./_pix.js";

function json(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(body));
}

export async function handleCheckout(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Método não permitido" });
  const orderId = randomUUID();
  const pix = "00020126360014BR.GOV.BCB.PIX011466309977000101520400005303986540517.005802BR5901N6001C62120508kitatend63048CCE";
  return json(response, 201, { orderId, pix, local: true, product: "Kit Atendimento" });
}
