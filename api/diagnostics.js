import { json, supabaseRequest } from "./_supabase.js";

const allowed = {
  gargalo: ["Atendimento ao cliente", "Produção de peças", "Organização de documentos", "Uso de IA", "Captação de clientes"],
  tempo: ["Menos de 30 minutos", "30 minutos a 1 hora", "1 a 2 horas", "Mais de 2 horas"],
  area: ["Trabalhista", "Previdenciário", "Família", "Empresarial", "Consumidor", "Outra"]
};

export default async function handler(request, response) {
  if (request.method !== "POST") return json(response, 405, { error: "Método não permitido" });
  const answers = request.body || {};
  const valid = Object.entries(allowed).every(([key, values]) => values.includes(answers[key]));
  if (!valid) return json(response, 400, { error: "Respostas inválidas" });
  try {
    const result = await supabaseRequest("diagnostics", {
      method: "POST",
      body: JSON.stringify({ ...answers, user_agent: request.headers["user-agent"]?.slice(0, 250) || null })
    });
    if (!result.ok) {
      const text = await result.text().catch(() => "");
      throw new Error(text || "Falha ao gravar no Supabase");
    }
    return json(response, 201, { saved: true });
  } catch (error) {
    console.error("diagnostics:", error.message);
    const fallback = "Armazenamento temporariamente indisponível";
    return json(response, 503, { error: error.message || fallback });
  }
}
