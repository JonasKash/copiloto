function json(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(body));
}

export async function handlePaymentStatus(request, response) {
  if (request.method !== "GET") return json(response, 405, { error: "Método não permitido" });
  return json(response, 200, { status: "pending", local: true });
}
