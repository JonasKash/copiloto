export const questions = [
  {
    id: 'gargalo',
    eyebrow: 'Rotina do escritório',
    title: 'Qual é o maior gargalo do seu escritório hoje?',
    options: [
      'Atendimento ao cliente',
      'Produção de peças',
      'Organização de documentos',
      'Uso de IA',
      'Captação de clientes',
    ],
  },
  {
    id: 'tempo',
    eyebrow: 'Tempo desperdiçado',
    title: 'Quanto tempo você perde por dia com tarefas repetitivas?',
    options: ['Menos de 30 minutos', '30 minutos a 1 hora', '1 a 2 horas', 'Mais de 2 horas'],
  },
  {
    id: 'area',
    eyebrow: 'Seu posicionamento',
    title: 'Qual sua principal área de atuação?',
    options: ['Trabalhista', 'Previdenciário', 'Família', 'Empresarial', 'Consumidor', 'Outra'],
  },
];

// A dor que ele apontar como maior gargalo decide qual página ele recebe.
export const ROUTE_BY_GARGALO = {
  'Atendimento ao cliente': '/atendimento',
  'Produção de peças': '/peticao',
  'Organização de documentos': '/6-agentes',
  'Uso de IA': '/6-agentes',
  'Captação de clientes': '/6-agentes',
};

export function routeForAnswers(answers) {
  return ROUTE_BY_GARGALO[answers.gargalo] || '/6-agentes';
}
