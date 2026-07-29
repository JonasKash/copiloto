const allowed = {
  gargalo: ["Atendimento ao cliente", "Produção de peças", "Organização de documentos", "Uso de IA", "Captação de clientes"],
  tempo: ["Menos de 30 minutos", "30 minutos a 1 hora", "1 a 2 horas", "Mais de 2 horas"],
  area: ["Trabalhista", "Previdenciário", "Família", "Empresarial", "Consumidor", "Outra"]
};

function json(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(body));
}

export async function handleDiagnostics(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Método não permitido" });
  const answers = request.body || {};
  const valid = Object.entries(allowed).every(([key, values]) => values.includes(answers[key]));
  if (!valid) return json(response, 400, { error: "Respostas inválidas" });
  return json(response, 201, { saved: false, local: true });
}
