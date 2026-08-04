export const HOTMART_URL =
  'https://pay.hotmart.com/V105994251O?off=7xe30h5v&bid=1785716839200';

// Hero muda de acordo com a dor que o advogado apontou no diagnóstico.
// O resto da página é o mesmo, porque a transformação vendida
// (Escritório Artesanal -> Escritório Processual) é a mesma.
// Preço não aparece no Hero nem na proof bar de propósito: só é revelado
// perto do fim, depois que o problema e o método já foram estabelecidos.
const heroVariants = {
  default: {
    h1: 'Seu escritório cresce. Ou só você trabalha mais?',
    sub:
      'A maioria dos escritórios confunde as duas coisas. Pesquisa, petição, contrato, prazo, risco e honorários ainda dependem só de você. Os 6 agentes existem pra isso parar de ser verdade.',
    ctaPrimary: 'Quero sair do Escritório Artesanal',
    ctaSecondary: 'Ver os 6 agentes',
  },
  atendimento: {
    h1: 'Você não tem um problema de atendimento. Tem um problema de operação.',
    sub:
      'Enquanto você pesquisa jurisprudência ou redige do zero, o cliente espera e desiste. Isso não se resolve respondendo mais rápido no talento. Se resolve tirando o repetitivo do seu caminho.',
    ctaPrimary: 'Quero responder mais rápido',
    ctaSecondary: 'Ver os 6 agentes',
  },
  peticao: {
    h1: 'Não é que você é lento pra escrever petição. É que ela sempre começa do zero.',
    sub:
      'O Redator de Petições monta a peça com memória do processo, e mais 5 agentes cuidam de pesquisa, contrato, prazo, risco e honorários. Isso é diferença de método, não de esforço.',
    ctaPrimary: 'Quero petições mais rápidas',
    ctaSecondary: 'Ver os 6 agentes',
  },
};

const baseCopy = {
  nav: {
    logo: 'Copiloto Jurídico',
    links: [
      { href: '#perfis', label: 'Seu nível' },
      { href: '#metodo', label: 'O Método' },
      { href: '#agentes', label: 'Os 6 agentes' },
      { href: '#mentor', label: 'Quem criou' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    ctaLabel: 'Fazer o diagnóstico',
  },

  hero: {
    proof: 'Supervisionado por um advogado registrado na OAB/SP',
  },

  proofBar: [
    { num: '6', label: 'agentes especializados' },
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
    h: 'Isso não é uma lista de perfis. É um diagnóstico.',
    items: [
      {
        level: 'Nível 1',
        name: 'Operação Dependente',
        state: 'problem',
        tagline: 'Tudo passa por você.',
        headline: ['Seu escritório não funciona.', 'Você funciona por ele.'],
        text: [
          'Você responde clientes. Você revisa petições. Você tira dúvidas da equipe. Você acompanha prazos. Você decide praticamente tudo.',
          'Quando você para, o escritório desacelera junto.',
          'O problema nunca foi falta de competência. O problema é que seu escritório depende mais de você do que de um processo.',
        ],
      },
      {
        level: 'Nível 2',
        name: 'Operação Sobrecarregada',
        state: 'problem',
        headline: ['O problema não é o volume.', 'É a repetição.'],
        text: [
          'Responder cliente. Pesquisar jurisprudência. Montar petição. Revisar contrato. Calcular honorários.',
          'Você faz as mesmas tarefas dezenas de vezes por semana. Não porque elas são difíceis. Mas porque nunca foram organizadas.',
          'Enquanto isso, o atendimento atrasa, os clientes esperam, e sua agenda continua cheia.',
        ],
      },
      {
        level: 'Nível 3',
        name: 'Operação Estagnada',
        state: 'problem',
        headline: ['Você não consegue crescer.', 'Porque cada novo cliente cria mais trabalho.'],
        text: [
          'Mais clientes deveriam significar mais faturamento. Mas hoje, cada novo processo significa mais mensagens, mais documentos, mais revisões, mais horas.',
          'Seu escritório cresce. Sua liberdade diminui.',
          'Isso acontece porque você aumentou o volume, mas nunca mudou a operação.',
        ],
      },
      {
        level: 'Nível 4',
        name: 'Operação Processual',
        state: 'goal',
        tagline: 'O nível pra onde o Método leva.',
        headline: ['Seu escritório começa a funcionar', 'sem depender só de você.'],
        text: [
          'Não é sobre trabalhar menos por sorte. É sobre ter processo pra cada coisa que hoje só existe na sua cabeça.',
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
    p: 'Não é sobre usar mais tecnologia. É sobre parar de ser o gargalo do próprio escritório.',
    steps: [
      { num: '01', h: 'Mapear', p: 'Onde o seu escritório perde tempo de verdade.' },
      { num: '02', h: 'Padronizar', p: 'Tudo que hoje depende só da sua memória.' },
      { num: '03', h: 'Processualizar', p: 'Criar um fluxo único pra cada atividade que se repete.' },
      { num: '04', h: 'Automatizar', p: 'Só depois entram os 6 agentes: pesquisa, petição, contrato, prazo, risco e honorários.' },
      { num: '05', h: 'Escalar', p: 'Crescer sem aumentar o caos.' },
    ],
  },

  checklist: {
    eyebrow: 'A diferença',
    h: 'O que um Escritório Processual faz diferente?',
    items: [
      'Não depende da memória do advogado.',
      'Não começa tudo do zero.',
      'Não pesquisa duas vezes a mesma coisa.',
      'Não responde clientes no fim do expediente.',
      'Não perde tempo procurando arquivos.',
      'Não cresce contratando antes de organizar.',
    ],
  },

  copilotoIntro: {
    eyebrow: 'A ferramenta',
    h: 'O Copiloto Jurídico.',
    sub: 'O sistema operacional do Escritório Processual.',
    text:
      'Os seis agentes não existem pra substituir o advogado. Eles existem pra que tarefas repetitivas deixem de depender exclusivamente dele.',
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
  },

  agents: [
    {
      num: 'Agente 01',
      h: 'Pesquisador.',
      antes: 'Você abre três sites, compara decisões e confere se estão atualizadas.',
      depois: 'Em poucos minutos você recebe jurisprudência organizada, rastreável e pronta pra usar.',
      list: [
        'Busca cruzada em STJ, STF e TRTs',
        'Fonte rastreável em cada citação',
        'Filtro por vara, tribunal e período',
        'Resultado pronto pra colar na petição',
      ],
    },
    {
      num: 'Agente 02',
      h: 'Redator de Petições.',
      antes: 'Cada petição começa praticamente do zero.',
      depois: 'Cada nova peça reaproveita o conhecimento acumulado do processo.',
      list: [
        'Case Memory por processo',
        'Modelos por tipo de ação',
        'Ajuste de tom e argumento',
        'Exportação pronta pra protocolar',
      ],
    },
    {
      num: 'Agente 03',
      h: 'Editor de Contratos.',
      antes: 'Você revisa cláusula por cláusula sozinho, torcendo pra não passar nada batido.',
      depois: 'Cada cláusula de risco já vem marcada e comparada com a versão anterior.',
      list: [
        'Comparação entre versões de minuta',
        'Marcação de cláusulas de risco',
        'Sugestão de ajuste de redação',
        'Revisão em minutos, não em horas',
      ],
    },
    {
      num: 'Agente 04',
      h: 'Gerenciador de Prazos.',
      antes: 'O prazo mora na sua memória, numa agenda ou num post-it que ninguém revisa.',
      depois: 'Cada prazo tem alerta automático, antes do vencimento, não depois.',
      list: [
        'Alerta automático por processo',
        'Lembrete manual configurável',
        'Visão única de todos os prazos',
        'Aviso antes do vencimento, não depois',
      ],
    },
    {
      num: 'Agente 05',
      h: 'Analista de Riscos (Jurimetria).',
      antes: 'Você decide litigar ou acordar no feeling, sem dado nenhum por trás.',
      depois: 'Você decide com probabilidade de êxito, histórico da vara e custo-benefício calculado.',
      list: [
        'Prognóstico por vara e por juiz',
        'Histórico de decisões similares',
        'Leitura de tendência, não de aposta',
        'Apoio pra decidir recorrer ou acordar',
      ],
    },
    {
      num: 'Agente 06',
      h: 'Calculador de Honorários.',
      antes: 'Você calcula honorários no chute, com medo de cobrar errado.',
      depois: 'Você propõe um valor fundamentado na tabela OAB e na jurimetria, e defende com segurança.',
      list: [
        'Base na tabela OAB vigente',
        'Ajuste por complexidade do caso',
        'Cruzamento com dados de jurimetria',
        'Proposta pronta pra enviar ao cliente',
      ],
    },
  ],

  mentor: {
    eyebrow: 'Quem está por trás',
    h: 'Criado e supervisionado por um advogado, não só por programadores.',
    p:
      'Os 6 agentes nasceram da rotina real de um escritório. Cada um foi desenhado pra resolver um gargalo que o Dr. Wladmir via todo dia na própria prática, tomando tempo que devia ir pro que realmente importa: o caso do cliente.',
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
        a: 'Os 6 agentes cobrem rotina cível, trabalhista e contratual. Se sua área usa pesquisa, petição, contrato, prazo ou cálculo, eles se aplicam.',
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
    h: 'Pagamento único. Os 6 agentes. Sem mensalidade.',
    p: 'Você paga uma vez, pela Hotmart, e libera os 6 agentes na hora.',
    plan: {
      badge: 'Acesso completo',
      name: 'Copiloto Jurídico',
      price: 'R$ 27',
      period: 'pagamento único',
      features: [
        'Pesquisador de jurisprudência',
        'Redator de Petições com Case Memory',
        'Editor de Contratos',
        'Gerenciador de Prazos',
        'Analista de Riscos (Jurimetria)',
        'Calculador de Honorários',
        'Suporte direto de uso',
      ],
      ctaLabel: 'Garantir meu acesso',
      guarantee: 'Sem mensalidade, sem renovação automática',
    },
  },

  finalCta: {
    eyebrow: 'Pronto pra parar de ser o gargalo do seu escritório?',
    h: 'Do Escritório Artesanal pro Escritório Processual, hoje.',
    p: 'Cada dia sem os 6 agentes é mais uma pesquisa manual, mais uma petição do zero, mais um prazo pra torcer que não passou.',
    ctaPrimary: 'Quero meus 6 agentes por R$ 27',
    ctaSecondary: 'Ver os 6 agentes de novo',
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
          { href: '#agentes', label: 'Os 6 agentes' },
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
