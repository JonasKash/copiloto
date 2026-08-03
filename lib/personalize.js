const AREA_LABEL = {
  Trabalhista: 'Trabalhista',
  'Previdenciário': 'Previdenciária',
  'Família': 'de Família',
  Empresarial: 'Empresarial',
  Consumidor: 'Consumerista',
};

const TIME_LABEL = {
  'Menos de 30 minutos': 'até 30 minutos',
  '30 minutos a 1 hora': 'cerca de 1 hora',
  '1 a 2 horas': 'de 1 a 2 horas',
  'Mais de 2 horas': 'mais de 2 horas',
};

export function personalizeSub(baseSub, { area, tempo } = {}) {
  const areaLabel = AREA_LABEL[area];
  const timeLabel = TIME_LABEL[tempo];
  if (!areaLabel && !timeLabel) return baseSub;

  const areaPart = areaLabel ? `pra você que atua na área ${areaLabel}` : 'pra você';
  const timePart = timeLabel ? ` e perde ${timeLabel} por dia com tarefa repetitiva` : '';

  return `Pensado ${areaPart}${timePart}. ${baseSub}`;
}
