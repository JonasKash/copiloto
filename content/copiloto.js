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

const baseCopy = {
  nav: {
    logo: 'Copiloto Jurídico',
    links: [
      { href: '#perfis', label: 'Seu nível' },
      { href: '#metodo', label: 'O Método' },
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
    closing: 'Você não percebe porque paga em horas. Não em dinheiro.',
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
          { href: '#perfis', label: 'Seu nível' },
          { href: '#metodo', label: 'O Método' },
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

export function getCopy(variant = 'default') {
  const hero = heroVariants[variant] || heroVariants.default;
  return {
    ...baseCopy,
    hero: { ...baseCopy.hero, ...hero },
  };
}

export const copy = getCopy('default');
