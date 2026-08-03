import { NextResponse } from 'next/server';
import { supabaseRequest } from '@/lib/supabase';

const ALLOWED = {
  gargalo: ['Atendimento ao cliente', 'Produção de peças', 'Organização de documentos', 'Uso de IA', 'Captação de clientes'],
  tempo: ['Menos de 30 minutos', '30 minutos a 1 hora', '1 a 2 horas', 'Mais de 2 horas'],
  area: ['Trabalhista', 'Previdenciário', 'Família', 'Empresarial', 'Consumidor', 'Outra'],
};

function sanitizeMeta(meta) {
  if (typeof meta !== 'object' || meta === null || Array.isArray(meta)) return {};
  const out = {};
  for (const [key, value] of Object.entries(meta)) {
    if (typeof key !== 'string' || key.length > 60) continue;
    if (typeof value === 'string') out[key] = value.slice(0, 300);
    else if (typeof value === 'number' || typeof value === 'boolean') out[key] = value;
  }
  return out;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Corpo inválido' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Formato inválido' }, { status: 400 });
  }

  const { meta, ...answers } = body;
  const valid = Object.entries(ALLOWED).every(([key, values]) => values.includes(answers[key]));
  if (!valid) {
    return NextResponse.json({ error: 'Respostas inválidas' }, { status: 400 });
  }

  try {
    const result = await supabaseRequest('diagnostics', {
      method: 'POST',
      body: JSON.stringify({
        gargalo: answers.gargalo,
        tempo: answers.tempo,
        area: answers.area,
        meta: sanitizeMeta(meta),
        user_agent: request.headers.get('user-agent')?.slice(0, 250) || null,
      }),
    });

    if (!result.ok) {
      console.error('diagnostics: supabase error', await result.text().catch(() => ''));
      return NextResponse.json({ error: 'Armazenamento temporariamente indisponível' }, { status: 503 });
    }

    return NextResponse.json({ saved: true }, { status: 201 });
  } catch (error) {
    console.error('diagnostics:', error.message);
    return NextResponse.json({ error: 'Armazenamento temporariamente indisponível' }, { status: 503 });
  }
}
