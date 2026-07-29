const areaPlural = {
  "Trabalhista": "trabalhistas",
  "Previdenciário": "previdenciários",
  "Família": "de família",
  "Empresarial": "empresariais",
  "Consumidor": "consumeristas",
  "Outra": "de diferentes áreas"
};

const actionByBottleneck = {
  "Atendimento ao cliente": "agilizar o atendimento aos clientes",
  "Produção de peças": "produzir peças com mais agilidade",
  "Organização de documentos": "organizar documentos sem retrabalho",
  "Uso de IA": "aplicar IA com segurança na rotina",
  "Captação de clientes": "estruturar uma captação mais eficiente"
};

const timeCopy = {
  "Menos de 30 minutos": "até 30 minutos",
  "30 minutos a 1 hora": "cerca de 1 hora",
  "1 a 2 horas": "de 1 a 2 horas",
  "Mais de 2 horas": "mais de 2 horas"
};

const areaDisplay = {
  "Trabalhista": "Trabalhista",
  "Previdenciário": "Previdenciária",
  "Família": "de Família",
  "Empresarial": "Empresarial",
  "Consumidor": "Consumerista",
  "Outra": "informada"
};

export function personalize(answers) {
  const area = areaPlural[answers.area] || "de diferentes áreas";
  const action = actionByBottleneck[answers.gargalo] || "reduzir tarefas repetitivas";
  const time = timeCopy[answers.tempo] || "tempo todos os dias";
  const areaLabel = areaDisplay[answers.area] || "informada";
  const gargaloLabel = answers.gargalo || "seu maior gargalo";
  const timeDaily = `${time} por dia`;
  return {
    heroTitle: "Porque você informou que:",
    heroFacts: [
      `Atua na área ${areaLabel}`,
      `Perde ${timeDaily}`,
      `Seu maior gargalo é ${gargaloLabel.toLowerCase()}`
    ],
    heroSubtitle: `Enquanto você perde ${timeDaily} com ${gargaloLabel.toLowerCase()}, outros advogados já estão trabalhando com processos prontos.`,
    time,
    timeDaily,
    area,
    action,
    areaLabel,
    gargaloLabel,
    diagnosis: `Seu maior ponto de alavancagem está em ${answers.gargalo.toLowerCase()}. Com um fluxo simples, você pode recuperar ${time} diariamente.`
  };
}
