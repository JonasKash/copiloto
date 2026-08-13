export const HOTMART_URL =
  'https://pay.hotmart.com/V105994251O?off=7xe30h5v&bid=1785716839200';

// Hero muda de acordo com a dor que o advogado apontou no diagnóstico.
// O resto da página é o mesmo, porque a transformação vendida
// (Escritório Artesanal -> Escritório Processual) é a mesma.
// Preço não aparece no Hero nem na proof bar de propósito: só é revelado
// perto do fim, depois que o problema e o método já foram estabelecidos.
const heroVariants = {
  default: {
    h1: 'O escritório cresce. Mas quem trabalha mais continua sendo você.',
    sub:
      'Pesquisa, petição, contrato, prazo, risco e honorários ainda dependem só de você. O Método Escritório Processual existe pra mudar exatamente essa conta.',
    ctaPrimary: 'Quero sair do Escritório Artesanal',
    ctaSecondary: 'Ver os 6 processos',
  },
  atendimento: {
    h1: 'Enquanto você pesquisa a resposta certa, o cliente já mandou mensagem pra outro escritório.',
    sub:
      'Isso não tem nada a ver com digitar mais rápido. Tem a ver com quanto trabalho manual ainda fica entre a pergunta do cliente e a sua resposta.',
    ctaPrimary: 'Quero responder mais rápido',
    ctaSecondary: 'Ver os 6 processos',
  },
  peticao: {
    h1: 'Você abre um documento em branco toda vez que começa uma petição nova.',
    sub:
      'O Redator de Petições monta a peça com memória do processo. É um dos 6 processos que cuidam de pesquisa, contrato, prazo, risco e honorários, junto com o resto do Método.',
    ctaPrimary: 'Quero petições mais rápidas',
    ctaSecondary: 'Ver os 6 processos',
  },
};

// Seção "Os 6 processos" também muda de acordo com o gargalo apontado no
// diagnóstico: o(s) processo(s) mais ligado(s) àquela dor específica
// lidera(m) a lista e ganha(m) destaque visual. O produto continua sendo
// o mesmo (os 6 processos existem pra todo mundo) — o que muda é qual
// deles a página mostra primeiro e como a introdução da seção fala com
// quem acabou de dizer qual é o seu maior gargalo.
const processosIntroVariants = {
  default: {
    eyebrow: 'Os processos, não as ferramentas',
    h: 'Seis processos que deixam de depender só de você.',
    p: 'Cada ferramenta abaixo é só o mecanismo. O que muda o escritório é o processo por trás dela.',
  },
  atendimento: {
    eyebrow: 'O que resolve seu atendimento',
    h: 'Seis processos. Os dois primeiros tiram o cliente da fila de espera.',
    p: 'Pesquisa e petição são o que mais atrasa uma resposta ao cliente. Veja como esses dois processos entram primeiro, e o resto do Método que sustenta tudo isso.',
  },
  peticao: {
    eyebrow: 'O que tira a petição do zero',
    h: 'Seis processos. O primeiro é o que muda sua rotina de redação.',
    p: 'Produção de Peças lidera porque é aí que você mais sente o problema hoje. Os outros cinco processos sustentam o resto do Escritório Processual.',
  },
};

// Cada processo abaixo é sempre executado pelo mesmo agente (o produto não
// muda). O que muda por variante é o *ângulo*: problem/context/transform
// reescritos pra falar da dor específica que a pessoa apontou no
// diagnóstico, não só a ordem. Isso bate direto na dor de quem está lendo,
// em vez de mostrar a mesma lista genérica pra todo mundo.

const processosAtendimento = [
  {
    num: 'Processo 01',
    h: 'Pesquisa Jurídica Inteligente',
    problem: 'Enquanto você pesquisa a resposta certa, o cliente já está esperando do outro lado da linha.',
    context: 'Toda dúvida que exige pesquisa manual atrasa a resposta, e é nesse intervalo que o cliente sente que foi esquecido.',
    transform: 'A pesquisa vira parte do fluxo de atendimento. A resposta chega rápido, com fonte confiável, sem o cliente esperar.',
    agent: 'Pesquisador',
    agentLine: 'O Copiloto assume esse processo com o Pesquisador.',
    results: ['Jurisprudência organizada', 'Fonte rastreável em cada citação', 'Resposta pronta pra mandar ao cliente'],
    highlight: true,
  },
  {
    num: 'Processo 02',
    h: 'Produção de Peças',
    problem: '"Quando sai minha petição?" — a pergunta que mais chega no seu WhatsApp.',
    context: 'Enquanto a peça não sai, o cliente manda mensagem atrás de mensagem perguntando status, e cada uma delas também rouba seu tempo.',
    transform: 'Com o histórico do caso reaproveitado, a peça sai mais rápido, e o cliente para de precisar perguntar.',
    agent: 'Redator de Petições',
    agentLine: 'Quem executa esse processo é o Redator de Petições.',
    results: ['Case Memory por processo', 'Modelos prontos por tipo de ação', 'Peça pronta pra revisão e protocolo'],
    highlight: true,
  },
  {
    num: 'Processo 03',
    h: 'Revisão Contratual',
    problem: 'Cliente acha que revisar contrato é rápido. Raramente é, e a espera vira reclamação.',
    context: 'Cada rodada de revisão manual é mais um dia sem resposta, mais uma cobrança chegando.',
    transform: 'Risco identificado em minutos significa resposta ao cliente em minutos, não em dias.',
    agent: 'Editor de Contratos',
    agentLine: 'O Editor de Contratos cuida desse processo pra você.',
    results: ['Comparação entre versões da minuta', 'Cláusulas de risco marcadas', 'Revisão em minutos, não em horas'],
  },
  {
    num: 'Processo 04',
    h: 'Gestão de Prazos',
    problem: 'Cliente pergunta sobre prazo, e às vezes você mesmo precisa conferir antes de responder.',
    context: 'Isso atrasa a resposta e passa insegurança pro cliente, mesmo quando está tudo sob controle.',
    transform: 'Com alerta automático, você responde na hora, porque já sabe o status sem precisar checar.',
    agent: 'Gerenciador de Prazos',
    agentLine: 'Esse processo roda com o Gerenciador de Prazos.',
    results: ['Alerta automático por processo', 'Lembrete manual configurável', 'Visão única de todos os prazos'],
  },
  {
    num: 'Processo 05',
    h: 'Decisão Estratégica',
    problem: '"Vale a pena recorrer?" — o cliente espera uma resposta segura, não um "deixa eu ver".',
    context: 'Sem dado à mão, a resposta demora, ou sai baseada só no instinto, na hora, sob pressão.',
    transform: 'Com histórico da vara e probabilidade de êxito prontos, você responde com segurança já na primeira conversa.',
    agent: 'Analista de Riscos',
    agentLine: 'Quem traz esses números é o Analista de Riscos.',
    results: ['Prognóstico por vara e por juiz', 'Histórico de decisões similares', 'Resposta segura na hora da dúvida do cliente'],
  },
  {
    num: 'Processo 06',
    h: 'Processo Comercial',
    problem: '"Quanto vai custar?" — hesitar nessa resposta já derruba a confiança do cliente.',
    context: 'Calcular de cabeça, na pressa de responder rápido, é receita pra cobrar errado ou parecer inseguro.',
    transform: 'Com critério pronto, a proposta de honorários sai junto com a resposta, sem hesitação.',
    agent: 'Calculador de Honorários',
    agentLine: 'O Calculador de Honorários fecha esse processo.',
    results: ['Base na tabela OAB vigente', 'Ajuste por complexidade do caso', 'Proposta pronta pra enviar ao cliente'],
  },
];

const processosPeticao = [
  {
    num: 'Processo 01',
    h: 'Pesquisa Jurídica Inteligente',
    problem: 'Toda petição nova te manda pesquisar jurisprudência de novo, mesmo em caso parecido com outro que você já fez.',
    context: 'Isso é tempo que devia ir pra redação, não pra procurar de novo o que você já tinha achado antes.',
    transform: 'A pesquisa fica pronta e organizada antes de você abrir o documento em branco.',
    agent: 'Pesquisador',
    agentLine: 'O Copiloto assume esse processo com o Pesquisador.',
    results: ['Jurisprudência organizada', 'Fonte rastreável em cada citação', 'Base pronta antes de começar a escrever'],
  },
  {
    num: 'Processo 02',
    h: 'Produção de Peças',
    problem: 'Toda petição criada do zero é sinal de que seu escritório ainda depende mais da memória do advogado do que de um processo.',
    context: 'Cada caso novo devia aproveitar o que o escritório já sabe fazer, não recomeçar do nada.',
    transform: 'Aqui, o conhecimento não se perde. Ele é reaproveitado a cada nova petição.',
    agent: 'Redator de Petições',
    agentLine: 'Quem executa esse processo é o Redator de Petições.',
    results: ['Case Memory por processo', 'Modelos prontos por tipo de ação', 'Peça pronta pra revisão e protocolo'],
    highlight: true,
  },
  {
    num: 'Processo 03',
    h: 'Revisão Contratual',
    problem: 'Enquanto você não termina uma petição, ainda tem contrato acumulando pra revisar.',
    context: 'A pilha de documento parado cresce, e cada minuto revisando manualmente é um minuto a menos redigindo.',
    transform: 'A revisão sai rápido, sobra tempo pra focar na petição que está atrasada.',
    agent: 'Editor de Contratos',
    agentLine: 'O Editor de Contratos cuida desse processo pra você.',
    results: ['Comparação entre versões da minuta', 'Cláusulas de risco marcadas', 'Revisão em minutos, não em horas'],
  },
  {
    num: 'Processo 04',
    h: 'Gestão de Prazos',
    problem: 'Enquanto você escreve uma petição, outro prazo de outro caso pode estar vencendo sem você perceber.',
    context: 'Focar em redigir bem já toma toda a atenção. Não sobra espaço mental pra também vigiar prazo.',
    transform: 'O prazo é monitorado sozinho, e você escreve sem o medo de esquecer outro caso.',
    agent: 'Gerenciador de Prazos',
    agentLine: 'Esse processo roda com o Gerenciador de Prazos.',
    results: ['Alerta automático por processo', 'Lembrete manual configurável', 'Visão única de todos os prazos'],
  },
  {
    num: 'Processo 05',
    h: 'Decisão Estratégica',
    problem: 'Antes de redigir, você precisa decidir a estratégia, e decidir sem dado deixa a petição mais fraca.',
    context: 'Uma peça boa começa antes da redação, na escolha certa de argumento e pedido.',
    transform: 'Com histórico de vara e probabilidade de êxito à mão, a petição já nasce com a estratégia certa.',
    agent: 'Analista de Riscos',
    agentLine: 'Quem traz esses números é o Analista de Riscos.',
    results: ['Prognóstico por vara e por juiz', 'Histórico de decisões similares', 'Estratégia definida antes de escrever'],
  },
  {
    num: 'Processo 06',
    h: 'Processo Comercial',
    problem: 'Depois de terminar a petição, ainda falta calcular o honorário, e isso também rouba tempo da próxima peça da fila.',
    context: 'Calcular de cabeça, correndo, é o que sobra quando a prioridade real é escrever bem.',
    transform: 'O cálculo sai pronto e defensável, sem tirar tempo da sua real prioridade: a próxima petição.',
    agent: 'Calculador de Honorários',
    agentLine: 'O Calculador de Honorários fecha esse processo.',
    results: ['Base na tabela OAB vigente', 'Ajuste por complexidade do caso', 'Proposta pronta pra enviar ao cliente'],
  },
];

const baseCopy = {
  nav: {
    logo: 'Copiloto Jurídico',
    links: [
      { href: '#agentes', label: 'Os 6 processos' },
      { href: '#mentor', label: 'Quem criou' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    ctaLabel: 'Fazer o diagnóstico',
  },

  proofBar: [
    { num: '6', label: 'processos implantados' },
    { num: '80%', label: 'do trabalho repetitivo automatizado' },
    { num: '5', label: 'passos no Método Escritório Processual' },
    { num: 'min', label: 'para ativar e começar a usar' },
  ],

  fifteenRule: {
    label: 'A regra dos 15 minutos',
    text:
      'Se uma tarefa jurídica se repete toda semana, ela não deveria tomar mais que 15 minutos do seu dia. Pesquisa, petição, contrato, prazo, risco, honorários: ou você monta um processo pra isso, ou continua refazendo o mesmo trabalho pra sempre.',
  },

  niveis: {
    eyebrow: 'Em qual estágio seu escritório está?',
    h: 'Encontre o nível que mais se parece com o seu escritório hoje.',
    items: [
      {
        level: 'Nível 1',
        name: 'Operação Dependente',
        state: 'problem',
        tagline: 'Tudo passa por você.',
        headline: ['Se você parar um dia,', 'o escritório para junto.'],
        text: [
          'Você responde clientes. Você revisa petições. Você tira dúvidas da equipe. Você acompanha prazos. Você decide praticamente tudo.',
          'Isso não tem a ver com falta de competência. Tem a ver com um escritório que ainda depende mais de você do que de um processo.',
        ],
      },
      {
        level: 'Nível 2',
        name: 'Operação Sobrecarregada',
        state: 'problem',
        headline: ['Você faz a mesma tarefa', 'dezenas de vezes por semana.'],
        text: [
          'Responder cliente. Pesquisar jurisprudência. Montar petição. Revisar contrato. Calcular honorários.',
          'Não porque elas são difíceis. Porque nunca foram organizadas. Enquanto isso, o atendimento atrasa, os clientes esperam, e sua agenda continua cheia.',
        ],
      },
      {
        level: 'Nível 3',
        name: 'Operação Estagnada',
        state: 'problem',
        headline: ['Cada cliente novo devia trazer lucro.', 'Na prática, traz mais trabalho.'],
        text: [
          'Mais mensagens, mais documentos, mais revisões, mais horas. O faturamento sobe, e junto com ele sobe também o tamanho da sua agenda.',
          'Isso acontece porque o volume aumentou, mas a operação continua a mesma de sempre.',
        ],
      },
      {
        level: 'Nível 4',
        name: 'Operação Processual',
        state: 'goal',
        tagline: 'O nível pra onde o Método leva.',
        headline: ['O escritório roda', 'mesmo quando você não está.'],
        text: [
          'Isso significa ter processo pra cada coisa que hoje só existe na sua cabeça.',
          'Cliente atendido, petição redigida, prazo acompanhado, contrato revisado: acontecendo mesmo quando você está numa audiência, num compromisso, ou de férias.',
        ],
        cta: 'Descubra como chegar no Nível 4.',
      },
    ],
  },

  area: {
    eyebrow: 'Personalizado pra sua área',
    fallback: {
      h: 'Isso vale pra qualquer área do direito.',
      text:
        'Trabalhista, família, previdenciário, empresarial: se sua rotina tem pesquisa, petição, contrato, prazo ou atendimento repetitivo, o Escritório Processual se aplica.',
    },
    items: {
      Trabalhista: {
        h: 'Trabalhista',
        text:
          'Hoje você atua em uma das áreas com maior volume repetitivo da advocacia. Reclamações parecidas, petições semelhantes, jurisprudência consultada diariamente. Quanto maior o volume, mais importante se torna criar processos.',
      },
      'Família': {
        h: 'Família',
        text:
          'Além da técnica jurídica, você administra ansiedade. Clientes querem respostas rápidas. Enquanto você pesquisa, eles imaginam que foram esquecidos. Seu escritório precisa responder na velocidade que o cliente espera.',
      },
      'Previdenciário': {
        h: 'Previdenciário',
        text:
          'Cada atendimento envolve documentos, análises, regras, histórico. Quanto mais manual esse processo continua, mais caro fica crescer.',
      },
      Empresarial: {
        h: 'Empresarial',
        text:
          'Empresas não contratam apenas conhecimento jurídico. Contratam previsibilidade. Um escritório organizado transmite segurança antes mesmo da primeira reunião.',
      },
    },
  },

  impostoInvisivel: {
    eyebrow: 'O custo que ninguém calcula',
    h: 'Todo advogado calcula honorários. Poucos calculam o custo da própria operação.',
    intro: 'Toda vez que você:',
    items: [
      'pesquisa a mesma jurisprudência de novo',
      'começa uma petição do zero',
      'responde uma dúvida repetida',
      'procura um documento perdido',
      'interrompe uma tarefa pra responder o WhatsApp',
    ],
    outro: 'você está pagando um imposto invisível. O imposto do Escritório Artesanal.',
    closing: ['Você não percebe porque paga em horas', 'Não em dinheiro.'],
  },

  crescerVsTrabalhar: {
    eyebrow: 'A confusão mais cara da advocacia',
    h: 'Você não precisa de mais clientes.',
    sub: 'Precisa que os próximos clientes não aumentem seu trabalho.',
    text: 'Existe uma diferença enorme entre crescer e trabalhar mais. O Escritório Processual existe pra que um novo cliente aumente seu faturamento. Não sua carga de trabalho.',
    left: { label: 'Crescer', text: 'Mais faturamento. Mesma operação.' },
    right: { label: 'Trabalhar mais', text: 'Mais faturamento. Mais horas. Mais você no meio de tudo.' },
  },

  metodo: {
    eyebrow: 'Existe um método',
    h: 'O Método Escritório Processual™.',
    p: 'Tecnologia sozinha não organiza nada. Quem organiza é o método, o Copiloto entra só no quarto passo.',
    steps: [
      { num: '01', h: 'Mapear', p: 'Onde o seu escritório perde tempo de verdade.' },
      { num: '02', h: 'Padronizar', p: 'Tudo que hoje depende só da sua memória.' },
      { num: '03', h: 'Processualizar', p: 'Criar um fluxo único pra cada atividade que se repete.' },
      { num: '04', h: 'Automatizar', p: 'Só depois entra o Copiloto, executando os processos que você já mapeou e padronizou.' },
      { num: '05', h: 'Escalar', p: 'Crescer sem aumentar o caos.' },
    ],
  },

  checklist: {
    eyebrow: 'A diferença',
    h: 'O que um Escritório Processual faz diferente?',
    intro: 'Cada item abaixo já deixou de ser um problema pra quem virou Escritório Processual.',
    items: [
      'Não depende da memória do advogado.',
      'Não responde clientes no fim do expediente.',
      'Não perde tempo procurando arquivos.',
      'Não cresce contratando antes de organizar.',
    ],
  },

  copilotoIntro: {
    eyebrow: 'Do método pra prática',
    h: 'Como o Método vira realidade.',
    paragraphs: [
      'Existe uma pergunta importante: como colocar tudo isso em prática sem criar mais trabalho?',
      'Foi exatamente por isso que criamos o Copiloto Jurídico. Ele não substitui o advogado. Ele operacionaliza o Método.',
      'Cada agente representa um processo que deixa de depender exclusivamente da sua memória, do seu tempo e da sua presença.',
    ],
  },

  trifecta: {
    eyebrow: 'Por que não dá pra continuar do jeito antigo',
    h: 'Diferente de fazer sozinho. Diferente de contratar. Diferente de IA genérica.',
    cards: [
      {
        vs: 'vs Fazer sozinho',
        h3: 'Mais rápido.',
        p: 'O que levava horas de pesquisa e redação vira minutos de revisão. A regra dos 15 minutos, na prática.',
      },
      {
        vs: 'vs Contratar estagiário',
        h3: 'Mais barato.',
        p: 'Sem folha de pagamento, sem treinamento, sem rotatividade.',
      },
      {
        vs: 'vs IA genérica (ChatGPT)',
        h3: 'Mais preciso.',
        p: 'Os agentes foram construídos pra rotina jurídica, com jurisprudência rastreável. Não é um chat que inventa citação.',
      },
    ],
    ctaLabel: 'Quero implantar os 6 processos',
  },

  processos: [
    {
      num: 'Processo 01',
      h: 'Pesquisa Jurídica Inteligente',
      problem: 'Nenhum advogado deveria pesquisar a mesma jurisprudência duas vezes.',
      context:
        'Toda vez que você abre três sites diferentes pra procurar decisões, você está repetindo um trabalho que já podia estar organizado.',
      transform:
        'No Escritório Processual, a pesquisa deixa de depender do tempo disponível do advogado. Ela passa a fazer parte do fluxo do escritório.',
      agent: 'Pesquisador',
      agentLine: 'O Copiloto assume esse processo com o Pesquisador.',
      results: ['Jurisprudência organizada', 'Fonte rastreável em cada citação', 'Resultado pronto pra revisão'],
    },
    {
      num: 'Processo 02',
      h: 'Produção de Peças',
      problem:
        'Toda petição criada do zero é sinal de que seu escritório ainda depende mais da memória do advogado do que de um processo.',
      context: 'Cada caso novo devia aproveitar o que o escritório já sabe fazer, não recomeçar do nada.',
      transform: 'Aqui, o conhecimento não se perde. Ele é reaproveitado a cada novo caso.',
      agent: 'Redator de Petições',
      agentLine: 'Quem executa esse processo é o Redator de Petições.',
      results: ['Case Memory por processo', 'Modelos prontos por tipo de ação', 'Peça pronta pra revisão e protocolo'],
    },
    {
      num: 'Processo 03',
      h: 'Revisão Contratual',
      problem: 'Um contrato não deveria depender só da atenção de quem está revisando.',
      context: 'Cláusula de risco escondida no meio do texto é o tipo de erro que passa despercebido numa revisão cansada.',
      transform: 'O risco passa a ser identificado antes da assinatura. Não depois que o problema já aconteceu.',
      agent: 'Editor de Contratos',
      agentLine: 'O Editor de Contratos cuida desse processo pra você.',
      results: ['Comparação entre versões da minuta', 'Cláusulas de risco marcadas', 'Revisão em minutos, não em horas'],
    },
    {
      num: 'Processo 04',
      h: 'Gestão de Prazos',
      problem: 'O prazo não pode morar na memória do advogado.',
      context: 'Precisa morar no processo, não num post-it ou numa agenda que só você olha.',
      transform: 'Cada prazo ganha um alerta automático, antes do vencimento, não depois.',
      agent: 'Gerenciador de Prazos',
      agentLine: 'Esse processo roda com o Gerenciador de Prazos.',
      results: ['Alerta automático por processo', 'Lembrete manual configurável', 'Visão única de todos os prazos'],
    },
    {
      num: 'Processo 05',
      h: 'Decisão Estratégica',
      problem: 'Recorrer ou negociar? No Escritório Artesanal, essa decisão nasce só da experiência.',
      context: 'E experiência sozinha erra. Principalmente sob pressão de prazo.',
      transform: 'A decisão passa a considerar dado, não só instinto: histórico da vara, probabilidade de êxito, custo-benefício.',
      agent: 'Analista de Riscos',
      agentLine: 'Quem traz esses números é o Analista de Riscos.',
      results: ['Prognóstico por vara e por juiz', 'Histórico de decisões similares', 'Apoio pra decidir recorrer ou acordar'],
    },
    {
      num: 'Processo 06',
      h: 'Processo Comercial',
      problem: 'Honorários não deveriam depender do "feeling".',
      context: 'Devem seguir critério claro, que você consegue defender diante do cliente sem hesitar.',
      transform: 'O valor nasce da tabela OAB cruzada com jurimetria. Não do chute.',
      agent: 'Calculador de Honorários',
      agentLine: 'O Calculador de Honorários fecha esse processo.',
      results: ['Base na tabela OAB vigente', 'Ajuste por complexidade do caso', 'Proposta pronta pra enviar ao cliente'],
    },
  ],

  compraReal: {
    eyebrow: 'Antes de você decidir',
    h: 'O que você está comprando por R$27?',
    text: [
      'Tecnicamente, seis agentes de IA.',
      'Mas o que muda de verdade quando você compra é outra coisa: o primeiro passo pra sair do Escritório Artesanal.',
      'A ferramenta é só o meio. A mudança real acontece quando sua operação para de depender só de você.',
    ],
  },

  mentor: {
    eyebrow: 'Quem está por trás',
    h: 'Criado e supervisionado por um advogado, não só por programadores.',
    p:
      'Os 6 processos nasceram da rotina real de um escritório. Cada um resolve um gargalo que o Dr. Wladmir via todo dia na própria prática, tomando tempo que devia ir pro que realmente importa: o caso do cliente.',
    name: 'Dr. Wladmir Bonadio Filho',
    credentials: 'OAB/SP 398.640',
    instagram: '@wbonadiofilho',
    quote:
      'Não criei uma IA pra substituir advogado. Criei o primeiro passo pra sair do Escritório Artesanal e virar um Escritório Processual.',
  },

  faq: {
    eyebrow: 'Dúvidas',
    h: 'Antes de garantir seu acesso, responde isso aqui.',
    items: [
      {
        q: 'A IA substitui o advogado?',
        a: 'Não. Os agentes aceleram pesquisa, redação, revisão e cálculo. A decisão final e a assinatura continuam sendo suas.',
      },
      {
        q: 'É pagamento único ou mensalidade?',
        a: 'Pagamento único de R$27. Você paga uma vez, processado com segurança pela Hotmart, e o acesso é seu.',
      },
      {
        q: 'Preciso saber programar ou usar ferramentas de IA?',
        a: 'Não. A compra é feita pela Hotmart e o acesso chega pronto pra usar, sem instalação.',
      },
      {
        q: 'Funciona pra qualquer área do direito?',
        a: 'Os 6 processos cobrem rotina cível, trabalhista e contratual. Se sua área usa pesquisa, petição, contrato, prazo ou cálculo, o Método se aplica.',
      },
      {
        q: 'A jurisprudência trazida pelo Pesquisador é confiável?',
        a: 'Cada resultado vem com a fonte indicada, pra você conferir antes de citar. O agente busca, você valida.',
      },
      {
        q: 'Se eu tiver dúvida depois de comprar, tem suporte?',
        a: 'Tem. O acesso inclui suporte direto pra dúvidas de uso da plataforma.',
      },
    ],
  },

  pricing: {
    eyebrow: 'O primeiro passo',
    h: 'Pagamento único. O Método implantado. Sem mensalidade.',
    p: 'Você paga uma vez, pela Hotmart, e libera os 6 processos na hora.',
    plan: {
      badge: 'Acesso completo',
      name: 'Copiloto Jurídico',
      price: 'R$ 27',
      period: 'pagamento único',
      features: [
        'Implantação do Processo 01 — Pesquisa Jurídica Inteligente',
        'Implantação do Processo 02 — Produção de Peças',
        'Implantação do Processo 03 — Revisão Contratual',
        'Implantação do Processo 04 — Gestão de Prazos',
        'Implantação do Processo 05 — Decisão Estratégica',
        'Implantação do Processo 06 — Processo Comercial',
        'Método Escritório Processual™ operacionalizado pelo Copiloto',
        'Suporte direto de uso',
      ],
      ctaLabel: 'Garantir meu acesso',
      guarantee: 'Sem mensalidade, sem renovação automática',
    },
  },

  finalCta: {
    eyebrow: 'Pronto pra parar de ser o gargalo do seu escritório?',
    h: 'Do Escritório Artesanal pro Escritório Processual, hoje.',
    p: 'Cada dia sem os 6 processos implantados é mais uma pesquisa manual, mais uma petição do zero, mais um prazo pra torcer que não passou.',
    ctaPrimary: 'Quero implantar os 6 processos',
    ctaSecondary: 'Ver os 6 processos de novo',
  },

  secureStrip: [
    'Pagamento processado pela Hotmart',
    'Pagamento único, sem mensalidade',
    'Suporte direto de uso',
    'Acesso liberado na hora',
  ],

  footer: {
    brand: 'Copiloto Jurídico',
    tagline: 'O sistema operacional do Escritório Processual, supervisionado por um advogado.',
    columns: [
      {
        title: 'Produto',
        links: [
          { href: '#agentes', label: 'Os 6 processos' },
          { href: '#mentor', label: 'Quem criou' },
        ],
      },
      {
        title: 'Suporte',
        links: [
          { href: '#faq', label: 'Dúvidas frequentes' },
          { href: 'mailto:agencialobuzlancamentos@gmail.com', label: 'agencialobuzlancamentos@gmail.com' },
        ],
      },
      {
        title: 'Responsável técnico',
        links: [
          { href: 'https://instagram.com/wbonadiofilho', label: '@wbonadiofilho' },
          { href: 'https://wladmirbonadio.com.br', label: 'wladmirbonadio.com.br' },
        ],
      },
    ],
    legal:
      'AVESTRA MARKETING DIRETO LTDA · CNPJ 66.309.977/0001-01. O Copiloto Jurídico é uma ferramenta de apoio à atividade advocatícia e não substitui o advogado responsável pelo caso.',
  },
};

const processosVariants = {
  default: null, // usa baseCopy.processos, sem reescrita — gargalo genérico
  atendimento: processosAtendimento,
  peticao: processosPeticao,
};

export function getCopy(variant = 'default') {
  const hero = heroVariants[variant] || heroVariants.default;
  const processosIntro = processosIntroVariants[variant] || processosIntroVariants.default;
  const processos = processosVariants[variant] || baseCopy.processos;
  return {
    ...baseCopy,
    hero: { ...baseCopy.hero, ...hero },
    processosIntro,
    processos,
  };
}

export const copy = getCopy('default');
