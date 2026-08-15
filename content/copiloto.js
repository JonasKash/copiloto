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
    ctaSecondary: 'Ver os 9 processos',
  },
  atendimento: {
    h1: 'Enquanto você pesquisa a resposta certa, o cliente já mandou mensagem pra outro escritório.',
    sub:
      'Isso não tem nada a ver com digitar mais rápido. Tem a ver com quanto trabalho manual ainda fica entre a pergunta do cliente e a sua resposta.',
    ctaPrimary: 'Quero responder mais rápido',
    ctaSecondary: 'Ver os 9 processos',
  },
  peticao: {
    h1: 'Você abre um documento em branco toda vez que começa uma petição nova.',
    sub:
      'O Redator de Petições monta a peça com memória do processo. É um dos 9 processos que cuidam de pesquisa, contrato, prazo, risco, honorários e do seu próprio acervo, junto com o resto do Método.',
    ctaPrimary: 'Quero petições mais rápidas',
    ctaSecondary: 'Ver os 9 processos',
  },
  documentos: {
    h1: 'Você sabe que aquele documento existe. Só não lembra onde guardou.',
    sub:
      'Cada minuto procurando arquivo perdido é um minuto que não volta. O Método Escritório Processual organiza isso antes de qualquer outra coisa.',
    ctaPrimary: 'Quero parar de perder documento',
    ctaSecondary: 'Ver os 9 processos',
  },
  ia: {
    h1: 'Sua IA não sabe o que seu escritório já tem, nem o que você realmente precisa.',
    sub:
      'O problema nunca foi só a ferramenta. É que IA genérica não conhece seu acervo, não resume seu histórico, e não se adapta ao seu jeito de trabalhar. O Copiloto tem processo específico pra cada uma dessas três coisas.',
    ctaPrimary: 'Quero IA que conhece meu escritório',
    ctaSecondary: 'Ver os 9 processos',
  },
  captacao: {
    h1: 'Captar mais cliente sem organizar antes só aumenta a fila de espera.',
    sub:
      'Mais cliente num escritório sem processo não é crescimento. O Método organiza a operação antes de você acelerar a captação.',
    ctaPrimary: 'Quero crescer sem virar caos',
    ctaSecondary: 'Ver os 9 processos',
  },
};

// Seção "Os 9 processos" também muda de acordo com o gargalo apontado no
// diagnóstico: o(s) processo(s) mais ligado(s) àquela dor específica
// lidera(m) a lista e ganha(m) destaque visual. O produto continua sendo
// o mesmo (os 9 processos existem pra todo mundo) — o que muda é qual
// deles a página mostra primeiro e como a introdução da seção fala com
// quem acabou de dizer qual é o seu maior gargalo.
const processosIntroVariants = {
  default: {
    eyebrow: 'Os processos, não as ferramentas',
    h: 'Nove processos que deixam de depender só de você.',
    p: 'Cada ferramenta abaixo é só o mecanismo. O que muda o escritório é o processo por trás dela.',
  },
  atendimento: {
    eyebrow: 'O que resolve seu atendimento',
    h: 'Nove processos. Os dois primeiros tiram o cliente da fila de espera.',
    p: 'Pesquisa e petição são o que mais atrasa uma resposta ao cliente. Veja como esses dois processos entram primeiro, e o resto do Método que sustenta tudo isso.',
  },
  peticao: {
    eyebrow: 'O que tira a petição do zero',
    h: 'Nove processos. O primeiro é o que muda sua rotina de redação.',
    p: 'Produção de Peças lidera porque é aí que você mais sente o problema hoje. Os outros cinco processos sustentam o resto do Escritório Processual.',
  },
  documentos: {
    eyebrow: 'O que organiza seu escritório',
    h: 'Nove processos. Todos guardam e recuperam informação sozinhos.',
    p: 'Documento perdido é sintoma de processo que não existe. Veja como cada um desses 9 processos resolve isso, cada um à sua maneira.',
  },
  ia: {
    eyebrow: 'O que sua IA precisa saber sobre seu escritório',
    h: 'Nove processos. Os três últimos são o que faltava pra IA valer a pena.',
    p: 'IA sem saber o que você já tem, sem resumir o que é longo, e sem se adaptar ao seu jeito de trabalhar é só mais uma ferramenta genérica. Os três processos novos resolvem exatamente isso.',
  },
  captacao: {
    eyebrow: 'O que sustenta o crescimento',
    h: 'Nove processos. A base que aguenta captar mais sem quebrar a operação.',
    p: 'Antes de gastar mais com anúncio, veja o que precisa estar pronto pra aguentar o cliente que está por vir.',
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
  {
    num: 'Processo 07',
    h: 'Auditoria de Conteúdo',
    problem: 'Cliente pergunta algo que você já respondeu outro dia, mas o registro daquela resposta está perdido em algum lugar.',
    context: 'Sem saber o que já foi resolvido antes, cada resposta nova nasce do zero, mesmo quando não precisava.',
    transform: 'O Auditor de Conteúdo acha o que você já tem sobre aquele tipo de dúvida, então a resposta ao cliente sai mais rápido.',
    agent: 'Auditor de Conteúdo',
    agentLine: 'Esse processo roda com o Auditor de Conteúdo.',
    results: ['Inventário do que já existe', 'Lacunas identificadas por área', 'Resposta pronta baseada no que já foi resolvido'],
  },
  {
    num: 'Processo 08',
    h: 'Condensação de Informação',
    problem: 'Cliente manda um histórico longo de mensagens ou documentos, e ler tudo antes de responder consome o tempo que você não tem.',
    context: 'Quanto mais longo o material, mais a resposta atrasa, e o cliente sente esse atraso.',
    transform: 'O Condensador resume o que importa antes de você responder, sem precisar ler tudo de novo.',
    agent: 'Condensador',
    agentLine: 'Quem executa esse processo é o Condensador.',
    results: ['Resumo de decisões longas', 'Síntese de histórico de processo', 'Resposta rápida, sem reler tudo'],
  },
  {
    num: 'Processo 09',
    h: 'Criação de Agentes Sob Medida',
    problem: 'Seu jeito de atender cliente tem particularidade que nenhum processo pronto cobre exatamente.',
    context: 'Ferramenta fechada demais não se adapta ao seu fluxo de atendimento específico.',
    transform: 'O Criador de Agentes monta um processo de atendimento sob medida pro seu jeito de trabalhar, sem programar.',
    agent: 'Criador de Agentes',
    agentLine: 'Esse processo roda com o Criador de Agentes.',
    results: ['Agente configurado pra sua rotina específica', 'Sem programação', 'Cresce junto com o escritório'],
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
  {
    num: 'Processo 07',
    h: 'Auditoria de Conteúdo',
    problem: 'Você começa uma petição sem saber se já tem um modelo parecido guardado em algum lugar do seu próprio acervo.',
    context: 'Sem esse mapeamento, você recria o que já existe, em vez de só ajustar o que já funcionou antes.',
    transform: 'O Auditor de Conteúdo aponta o material do seu próprio acervo que já serve de base pra petição nova.',
    agent: 'Auditor de Conteúdo',
    agentLine: 'Esse processo roda com o Auditor de Conteúdo.',
    results: ['Inventário do que já existe', 'Lacunas identificadas por área', 'Base pronta pra reaproveitar'],
  },
  {
    num: 'Processo 08',
    h: 'Condensação de Informação',
    problem: 'Antes de escrever, você precisa reler decisão longa, histórico extenso do processo, ou anotação antiga de outra sessão.',
    context: 'Reler tudo de novo, toda vez, rouba o tempo que devia ir pra redação em si.',
    transform: 'O Condensador resume o que é essencial, e você começa a escrever direto do que importa.',
    agent: 'Condensador',
    agentLine: 'Quem executa esse processo é o Condensador.',
    results: ['Resumo de decisões longas', 'Síntese de histórico de processo', 'O essencial, sem reler tudo'],
  },
  {
    num: 'Processo 09',
    h: 'Criação de Agentes Sob Medida',
    problem: 'Seu tipo de petição mais comum tem uma estrutura própria que nenhum modelo genérico replica direito.',
    context: 'Ferramenta genérica demais entrega petição genérica. A sua rotina de redação é mais específica do que isso.',
    transform: 'O Criador de Agentes monta um processo de redação sob medida pro tipo de petição que você mais escreve.',
    agent: 'Criador de Agentes',
    agentLine: 'Esse processo roda com o Criador de Agentes.',
    results: ['Agente configurado pra sua rotina específica', 'Sem programação', 'Cresce junto com o escritório'],
  },
];

const baseCopy = {
  nav: {
    logo: 'Copiloto Jurídico',
    links: [
      { href: '#agentes', label: 'Os 9 processos' },
      { href: '#mentor', label: 'Quem criou' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    ctaLabel: 'Fazer o diagnóstico',
  },

  proofBar: [
    { num: '9', label: 'processos implantados' },
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
      'Foi exatamente por isso que criamos o Copiloto Jurídico. Ele não substitui o advogado. Ele gerencia processos.',
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
    ctaLabel: 'Quero implantar os 9 processos',
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
    {
      num: 'Processo 07',
      h: 'Auditoria de Conteúdo',
      problem: 'Você tem anos de petição, modelo e anotação salvos. Só que ninguém sabe exatamente o que tem, nem onde.',
      context: 'Sem esse mapeamento, você recria o que já existe, porque não tem como confiar que vai achar de novo.',
      transform: 'O Auditor de Conteúdo mapeia o que já existe no seu acervo e aponta o que falta pra cada caso novo.',
      agent: 'Auditor de Conteúdo',
      agentLine: 'Esse processo roda com o Auditor de Conteúdo.',
      results: ['Inventário do que já existe', 'Lacunas identificadas por área', 'Base pronta pra reaproveitar'],
    },
    {
      num: 'Processo 08',
      h: 'Condensação de Informação',
      problem: 'Decisão de 40 páginas, processo com histórico de anos, reunião de uma hora: você não tem tempo de reler tudo toda vez.',
      context: 'Informação em excesso, sem resumo confiável, é quase tão inútil quanto informação nenhuma.',
      transform: 'O Condensador transforma documento longo em resumo direto, com o que realmente importa pro caso.',
      agent: 'Condensador',
      agentLine: 'Quem executa esse processo é o Condensador.',
      results: ['Resumo de decisões longas', 'Síntese de histórico de processo', 'O essencial, sem reler tudo'],
    },
    {
      num: 'Processo 09',
      h: 'Criação de Agentes Sob Medida',
      problem: 'Seu escritório tem uma rotina específica que nenhum dos processos prontos cobre exatamente do seu jeito.',
      context: 'Ferramenta fechada demais não se adapta. Ferramenta aberta demais exige que você programe.',
      transform: 'O Criador de Agentes monta um processo novo, sob medida, sem exigir que você saiba programar.',
      agent: 'Criador de Agentes',
      agentLine: 'Esse processo roda com o Criador de Agentes.',
      results: ['Agente configurado pra sua rotina específica', 'Sem programação', 'Cresce junto com o escritório'],
    },
  ],

  compraReal: {
    eyebrow: 'Antes de você decidir',
    h: 'O que você está comprando por R$27?',
    text: [
      'Tecnicamente, nove processos de IA.',
      'Mas o que muda de verdade quando você compra é outra coisa: o primeiro passo pra sair do Escritório Artesanal.',
      'A ferramenta é só o meio. A mudança real acontece quando sua operação para de depender só de você.',
    ],
  },

  mentor: {
    eyebrow: 'Quem está por trás',
    h: 'Criado e supervisionado por um advogado, não só por programadores.',
    p:
      'Os 9 processos nasceram da rotina real de um escritório. Cada um resolve um gargalo que o Dr. Wladmir via todo dia na própria prática, tomando tempo que devia ir pro que realmente importa: o caso do cliente.',
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
        a: 'Os 9 processos cobrem rotina cível, trabalhista e contratual, incluindo organização do seu próprio conteúdo. Se sua área usa pesquisa, petição, contrato, prazo, cálculo ou depende de manter conhecimento organizado, o Método se aplica.',
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
    p: 'Você paga uma vez, pela Hotmart, e libera os 9 processos na hora.',
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
        'Implantação do Processo 07 — Auditoria de Conteúdo',
        'Implantação do Processo 08 — Condensação de Informação',
        'Implantação do Processo 09 — Criação de Agentes Sob Medida',
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
    p: 'Cada dia sem os 9 processos implantados é mais uma pesquisa manual, mais uma petição do zero, mais um prazo pra torcer que não passou.',
    ctaPrimary: 'Quero implantar os 9 processos',
    ctaSecondary: 'Ver os 9 processos de novo',
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
          { href: '#agentes', label: 'Os 9 processos' },
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

const processosDocumentos = [
  {
    num: 'Processo 01',
    h: 'Pesquisa Jurídica Inteligente',
    problem: 'Jurisprudência que você já pesquisou um dia está perdida em algum print, algum favorito de navegador, algum e-mail antigo.',
    context: 'Sem lugar organizado pra guardar, cada pesquisa nova vira decisão de recomeçar do zero, mesmo quando você sabe que já tinha achado antes.',
    transform: 'Cada resultado de pesquisa fica registrado e localizável, não perdido em aba de navegador.',
    agent: 'Pesquisador',
    agentLine: 'O Copiloto assume esse processo com o Pesquisador.',
    results: ['Jurisprudência organizada', 'Fonte rastreável em cada citação', 'Resultado fácil de achar depois'],
    highlight: true,
  },
  {
    num: 'Processo 02',
    h: 'Produção de Peças',
    problem: 'A petição do processo parecido do mês passado está em algum lugar. Você só não sabe em qual pasta.',
    context: 'Sem organização, cada modelo bom que você já escreveu vira arquivo perdido em vez de vantagem reaproveitável.',
    transform: 'Toda peça produzida fica vinculada ao processo certo, fácil de achar quando precisar de novo.',
    agent: 'Redator de Petições',
    agentLine: 'Quem executa esse processo é o Redator de Petições.',
    results: ['Case Memory por processo', 'Modelos prontos por tipo de ação', 'Peça pronta pra revisão e protocolo'],
  },
  {
    num: 'Processo 03',
    h: 'Revisão Contratual',
    problem: 'Qual foi a última versão do contrato mesmo? Tem três arquivos com nome parecido na pasta.',
    context: 'Sem controle de versão, comparar minutas vira adivinhação, e cláusula alterada passa despercebida.',
    transform: 'Cada versão fica registrada e comparável, sem confundir qual é a mais recente.',
    agent: 'Editor de Contratos',
    agentLine: 'O Editor de Contratos cuida desse processo pra você.',
    results: ['Comparação entre versões da minuta', 'Cláusulas de risco marcadas', 'Revisão em minutos, não em horas'],
    highlight: true,
  },
  {
    num: 'Processo 04',
    h: 'Gestão de Prazos',
    problem: 'O prazo estava anotado em algum lugar. Caderno, post-it, agenda antiga, só não tinha um lugar só.',
    context: 'Informação espalhada é informação perdida. E prazo perdido não tem como recuperar depois.',
    transform: 'Todo prazo mora num lugar só, ligado ao processo certo, sem depender de anotação avulsa.',
    agent: 'Gerenciador de Prazos',
    agentLine: 'Esse processo roda com o Gerenciador de Prazos.',
    results: ['Alerta automático por processo', 'Lembrete manual configurável', 'Visão única de todos os prazos'],
  },
  {
    num: 'Processo 05',
    h: 'Decisão Estratégica',
    problem: 'O histórico daquele caso parecido que você já resolveu está espalhado entre memória e papel avulso.',
    context: 'Sem registro organizado, cada decisão nova ignora o que você já aprendeu em casos passados.',
    transform: 'Histórico e dado de decisões anteriores ficam organizados, prontos pra consultar antes da próxima decisão.',
    agent: 'Analista de Riscos',
    agentLine: 'Quem traz esses números é o Analista de Riscos.',
    results: ['Prognóstico por vara e por juiz', 'Histórico de decisões similares', 'Apoio pra decidir recorrer ou acordar'],
  },
  {
    num: 'Processo 06',
    h: 'Processo Comercial',
    problem: 'Quanto você cobrou no último caso parecido? Você teria que vasculhar recibo ou planilha antiga pra saber.',
    context: 'Sem registro acessível, cada proposta nova nasce sem referência do que já funcionou antes.',
    transform: 'Cada cálculo fica registrado, fácil de consultar e usar como referência pro próximo.',
    agent: 'Calculador de Honorários',
    agentLine: 'O Calculador de Honorários fecha esse processo.',
    results: ['Base na tabela OAB vigente', 'Ajuste por complexidade do caso', 'Proposta pronta pra enviar ao cliente'],
  },
  {
    num: 'Processo 07',
    h: 'Auditoria de Conteúdo',
    problem: 'Você sabe que tem aquele documento em algum lugar. Só não sabe exatamente onde, nem se está completo.',
    context: 'Sem mapeamento do que existe, procurar documento vira busca às cegas, toda vez.',
    transform: 'O Auditor de Conteúdo mapeia tudo que já está salvo e aponta exatamente o que falta.',
    agent: 'Auditor de Conteúdo',
    agentLine: 'Esse processo roda com o Auditor de Conteúdo.',
    results: ['Inventário do que já existe', 'Lacunas identificadas por área', 'Base pronta pra reaproveitar'],
    highlight: true,
  },
  {
    num: 'Processo 08',
    h: 'Condensação de Informação',
    problem: 'O documento que você encontrou tem 60 páginas, e você só precisa de uma informação específica lá dentro.',
    context: 'Sem resumo, achar o documento certo não resolve, porque ainda falta garimpar a informação dentro dele.',
    transform: 'O Condensador entrega o essencial do documento longo, sem você precisar ler tudo de novo.',
    agent: 'Condensador',
    agentLine: 'Quem executa esse processo é o Condensador.',
    results: ['Resumo de decisões longas', 'Síntese de histórico de processo', 'O essencial, sem reler tudo'],
    highlight: true,
  },
  {
    num: 'Processo 09',
    h: 'Criação de Agentes Sob Medida',
    problem: 'Sua forma de organizar documento é específica do seu escritório, e nenhuma ferramenta pronta replica exatamente esse sistema.',
    context: 'Adaptar seu jeito de organizar a uma ferramenta genérica geralmente significa desistir do seu próprio sistema.',
    transform: 'O Criador de Agentes monta um processo de organização sob medida pro seu jeito de guardar e achar documento.',
    agent: 'Criador de Agentes',
    agentLine: 'Esse processo roda com o Criador de Agentes.',
    results: ['Agente configurado pra sua rotina específica', 'Sem programação', 'Cresce junto com o escritório'],
  },
];

const processosIA = [
  {
    num: 'Processo 01',
    h: 'Pesquisa Jurídica Inteligente',
    problem: 'Você já perguntou pra uma IA genérica uma jurisprudência, e ela inventou um número de processo que não existe.',
    context: 'IA genérica não tem compromisso com fonte real. Ela completa texto, não verifica se a decisão existe de verdade.',
    transform: 'Aqui a IA busca jurisprudência real, com fonte rastreável em cada resultado, pra você conferir antes de citar.',
    agent: 'Pesquisador',
    agentLine: 'O Copiloto assume esse processo com o Pesquisador.',
    results: ['Jurisprudência organizada', 'Fonte rastreável em cada citação', 'Resultado pronto pra revisão'],
  },
  {
    num: 'Processo 02',
    h: 'Produção de Peças',
    problem: 'Pedir pra IA genérica escrever uma petição do zero produz um texto bonito e sem o histórico do seu caso.',
    context: 'IA sem contexto do processo erra o que importa: o caso específico do seu cliente.',
    transform: 'Aqui a IA usa a memória do processo real, não um modelo genérico de petição.',
    agent: 'Redator de Petições',
    agentLine: 'Quem executa esse processo é o Redator de Petições.',
    results: ['Case Memory por processo', 'Modelos prontos por tipo de ação', 'Peça pronta pra revisão e protocolo'],
  },
  {
    num: 'Processo 03',
    h: 'Revisão Contratual',
    problem: 'IA genérica lê um contrato e responde de forma vaga, sem apontar risco específico de cláusula.',
    context: 'Sem ser treinada pra rotina jurídica, ela erra o que realmente importa numa revisão de contrato.',
    transform: 'Aqui a IA foi construída pra apontar risco contratual de verdade, não resumo genérico.',
    agent: 'Editor de Contratos',
    agentLine: 'O Editor de Contratos cuida desse processo pra você.',
    results: ['Comparação entre versões da minuta', 'Cláusulas de risco marcadas', 'Revisão em minutos, não em horas'],
  },
  {
    num: 'Processo 04',
    h: 'Gestão de Prazos',
    problem: 'Nenhuma IA genérica sabe seu prazo processual, porque ela não está ligada ao seu processo real.',
    context: 'Ferramenta de IA solta não substitui um sistema de acompanhamento de verdade.',
    transform: 'Aqui a IA está ligada ao processo, e o alerta chega automático, antes do vencimento.',
    agent: 'Gerenciador de Prazos',
    agentLine: 'Esse processo roda com o Gerenciador de Prazos.',
    results: ['Alerta automático por processo', 'Lembrete manual configurável', 'Visão única de todos os prazos'],
  },
  {
    num: 'Processo 05',
    h: 'Decisão Estratégica',
    problem: 'Perguntar pra IA genérica "devo recorrer" te dá uma resposta educada, mas sem dado real de jurimetria.',
    context: 'Sem acesso a histórico de vara e taxa de êxito real, a resposta da IA é só opinião bem escrita.',
    transform: 'Aqui a IA cruza dado real de jurimetria: histórico da vara, probabilidade de êxito, custo-benefício.',
    agent: 'Analista de Riscos',
    agentLine: 'Quem traz esses números é o Analista de Riscos.',
    results: ['Prognóstico por vara e por juiz', 'Histórico de decisões similares', 'Apoio pra decidir recorrer ou acordar'],
  },
  {
    num: 'Processo 06',
    h: 'Processo Comercial',
    problem: 'IA genérica não conhece a tabela OAB nem o critério de complexidade do seu caso.',
    context: 'Pedir cálculo de honorário pra IA solta é receita de proposta sem fundamento defensável.',
    transform: 'Aqui o cálculo nasce da tabela OAB cruzada com jurimetria, não de uma estimativa genérica.',
    agent: 'Calculador de Honorários',
    agentLine: 'O Calculador de Honorários fecha esse processo.',
    results: ['Base na tabela OAB vigente', 'Ajuste por complexidade do caso', 'Proposta pronta pra enviar ao cliente'],
  },
  {
    num: 'Processo 07',
    h: 'Auditoria de Conteúdo',
    problem: 'Você tem anos de petição, modelo, pesquisa e anotação salvos. Só que ninguém sabe exatamente o que tem, nem onde está.',
    context: 'Sem esse mapeamento, você recria o que já existe. E toda vez que você tenta usar uma IA genérica, ela também não tem acesso a nada disso, trabalha no vácuo.',
    transform: 'O Auditor de Conteúdo mapeia tudo que já existe no seu acervo e aponta o que falta, então qualquer IA aplicada depois parte de uma base real, não do zero.',
    agent: 'Auditor de Conteúdo',
    agentLine: 'Esse processo roda com o Auditor de Conteúdo.',
    results: ['Inventário do que já existe', 'Lacunas identificadas por área', 'Base real pra qualquer IA usar depois'],
    highlight: true,
  },
  {
    num: 'Processo 08',
    h: 'Condensação de Informação',
    problem: 'Decisão de 40 páginas, processo com histórico de anos, reunião de uma hora: você não tem tempo de reler tudo toda vez que precisa da informação.',
    context: 'Informação em excesso, sem resumo confiável, é quase tão inútil quanto informação nenhuma. Pedir resumo pra uma IA genérica, sem contexto do seu caso, sai raso ou sai errado.',
    transform: 'O Condensador entrega o essencial do documento longo, com contexto real do seu processo, não um resumo genérico.',
    agent: 'Condensador',
    agentLine: 'Quem executa esse processo é o Condensador.',
    results: ['Resumo de decisões longas', 'Síntese de histórico de processo', 'O essencial, sem reler tudo'],
  },
  {
    num: 'Processo 09',
    h: 'Criação de Agentes Sob Medida',
    problem: 'Seu escritório tem uma rotina específica que nenhum dos processos prontos cobre exatamente do seu jeito, e configurar isso numa IA genérica exige saber programar.',
    context: 'Ferramenta fechada demais não se adapta. Ferramenta aberta demais exige que você programe.',
    transform: 'O Criador de Agentes monta um processo novo, sob medida, sem exigir que você saiba programar.',
    agent: 'Criador de Agentes',
    agentLine: 'Esse processo roda com o Criador de Agentes.',
    results: ['Agente configurado pra sua rotina específica', 'Sem programação', 'Cresce junto com o escritório'],
    highlight: true,
  },
];

const processosCaptacao = [
  {
    num: 'Processo 01',
    h: 'Pesquisa Jurídica Inteligente',
    problem: 'Cada cliente novo que chega traz um caso novo pra pesquisar do zero, e a fila de pesquisa cresce junto com a captação.',
    context: 'Captar mais sem esse processo organizado significa só empilhar mais pesquisa manual pra fazer.',
    transform: 'A pesquisa vira parte do fluxo do escritório, então cada cliente novo não significa mais uma pesquisa manual acumulada.',
    agent: 'Pesquisador',
    agentLine: 'O Copiloto assume esse processo com o Pesquisador.',
    results: ['Jurisprudência organizada', 'Fonte rastreável em cada citação', 'Resultado pronto pra revisão'],
  },
  {
    num: 'Processo 02',
    h: 'Produção de Peças',
    problem: 'Mais cliente significa mais petição, e cada uma criada do zero é mais tempo que a captação não considerou.',
    context: 'Quem investe em captação sem pensar em produção de peça está construindo fila de espera, não crescimento.',
    transform: 'Cada petição nova reaproveita o que o escritório já sabe fazer, então mais cliente não vira mais gargalo.',
    agent: 'Redator de Petições',
    agentLine: 'Quem executa esse processo é o Redator de Petições.',
    results: ['Case Memory por processo', 'Modelos prontos por tipo de ação', 'Peça pronta pra revisão e protocolo'],
    highlight: true,
  },
  {
    num: 'Processo 03',
    h: 'Revisão Contratual',
    problem: 'Cliente novo às vezes chega com contrato pra revisar, e cada revisão manual é mais tempo represado.',
    context: 'Sem esse processo pronto, a captação vira promessa que a operação não consegue cumprir a tempo.',
    transform: 'A revisão sai rápido, então a captação não vira gargalo de contrato acumulado.',
    agent: 'Editor de Contratos',
    agentLine: 'O Editor de Contratos cuida desse processo pra você.',
    results: ['Comparação entre versões da minuta', 'Cláusulas de risco marcadas', 'Revisão em minutos, não em horas'],
  },
  {
    num: 'Processo 04',
    h: 'Gestão de Prazos',
    problem: 'Cada cliente novo traz um prazo novo, e cliente demais sem controle é receita de perder prazo.',
    context: 'Captar sem esse processo pronto é aumentar o risco de erro, não só o volume de trabalho.',
    transform: 'Cada prazo novo entra automático no sistema, sem depender da sua memória crescer junto com a captação.',
    agent: 'Gerenciador de Prazos',
    agentLine: 'Esse processo roda com o Gerenciador de Prazos.',
    results: ['Alerta automático por processo', 'Lembrete manual configurável', 'Visão única de todos os prazos'],
    highlight: true,
  },
  {
    num: 'Processo 05',
    h: 'Decisão Estratégica',
    problem: 'Mais cliente significa mais decisão de recorrer ou negociar, tomada correndo, sem tempo de analisar direito.',
    context: 'Crescer sem esse processo pronto significa decidir pior, mais vezes, sob mais pressão.',
    transform: 'Cada decisão nova já nasce com dado de vara e probabilidade de êxito, mesmo com volume maior.',
    agent: 'Analista de Riscos',
    agentLine: 'Quem traz esses números é o Analista de Riscos.',
    results: ['Prognóstico por vara e por juiz', 'Histórico de decisões similares', 'Apoio pra decidir recorrer ou acordar'],
  },
  {
    num: 'Processo 06',
    h: 'Processo Comercial',
    problem: 'Mais cliente significa mais proposta de honorário, e cobrar de cabeça, com pressa, é cobrar errado com mais frequência.',
    context: 'Captar mais sem esse processo pronto é multiplicar o erro de precificação, não só o volume de propostas.',
    transform: 'Cada proposta nasce de critério pronto, então mais cliente não significa mais chute no preço.',
    agent: 'Calculador de Honorários',
    agentLine: 'O Calculador de Honorários fecha esse processo.',
    results: ['Base na tabela OAB vigente', 'Ajuste por complexidade do caso', 'Proposta pronta pra enviar ao cliente'],
  },
  {
    num: 'Processo 07',
    h: 'Auditoria de Conteúdo',
    problem: 'Cada cliente novo captado pode precisar de material que seu escritório já tem, só que ninguém teria como saber sem procurar tudo manualmente.',
    context: 'Crescer sem saber o que já existe no acervo significa recriar trabalho à medida que capta mais gente.',
    transform: 'O Auditor de Conteúdo garante que material já pronto seja reaproveitado a cada cliente novo, não recriado.',
    agent: 'Auditor de Conteúdo',
    agentLine: 'Esse processo roda com o Auditor de Conteúdo.',
    results: ['Inventário do que já existe', 'Lacunas identificadas por área', 'Base pronta pra reaproveitar'],
  },
  {
    num: 'Processo 08',
    h: 'Condensação de Informação',
    problem: 'Mais cliente significa mais histórico, mais documento, mais material acumulando pra revisar antes de cada atendimento.',
    context: 'Crescer sem esse processo significa que cada cliente novo aumenta o tempo de preparo, não só o volume de trabalho.',
    transform: 'O Condensador resume o histórico de cada caso, então mais cliente não significa mais tempo de leitura acumulado.',
    agent: 'Condensador',
    agentLine: 'Quem executa esse processo é o Condensador.',
    results: ['Resumo de decisões longas', 'Síntese de histórico de processo', 'O essencial, sem reler tudo'],
  },
  {
    num: 'Processo 09',
    h: 'Criação de Agentes Sob Medida',
    problem: 'Conforme capta mais cliente, seu escritório desenvolve rotina própria que nenhum processo padrão cobre.',
    context: 'Crescer com processo genérico demais significa forçar o cliente novo a caber num molde que não é o seu.',
    transform: 'O Criador de Agentes monta processo sob medida conforme o escritório cresce, sem depender de programar.',
    agent: 'Criador de Agentes',
    agentLine: 'Esse processo roda com o Criador de Agentes.',
    results: ['Agente configurado pra sua rotina específica', 'Sem programação', 'Cresce junto com o escritório'],
  },
];

const processosVariants = {
  default: null, // usa baseCopy.processos, sem reescrita — fallback genérico
  atendimento: processosAtendimento,
  peticao: processosPeticao,
  documentos: processosDocumentos,
  ia: processosIA,
  captacao: processosCaptacao,
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
