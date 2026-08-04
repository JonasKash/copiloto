export const HOTMART_URL =
  'https://pay.hotmart.com/V105994251O?off=7xe30h5v&bid=1785716839200';

// Hero e Enemy mudam de acordo com a dor que o advogado apontou no diagnóstico.
// O resto da página (método, agentes, mentor, preço, FAQ) é o mesmo, porque a
// transformação vendida (Escritório Artesanal -> Escritório Inteligente) é a mesma.
const heroVariants = {
  default: {
    h1: 'Seu escritório trabalha pra você. Ou você trabalha pra ele?',
    sub:
      'O maior gargalo não é falta de cliente. É que pesquisa, petição, contrato, prazo, risco e honorários ainda dependem só de você. Os 6 agentes assumem o repetitivo pra você virar estrategista, não operador.',
    ctaPrimary: 'Quero meus 6 agentes por R$ 27',
    ctaSecondary: 'Ver os 6 agentes',
  },
  atendimento: {
    h1: 'Quanto custa um cliente perdido por demora na resposta?',
    sub:
      'Enquanto você pesquisa jurisprudência ou redige do zero, ele já está falando com outro escritório. Escritório Inteligente responde rápido porque automatizou o repetitivo, não porque contratou mais gente.',
    ctaPrimary: 'Quero responder mais rápido por R$ 27',
    ctaSecondary: 'Ver os 6 agentes',
  },
  peticao: {
    h1: 'Petição pronta em minutos. Não em horas.',
    sub:
      'Nada de folha em branco. O Redator de Petições monta a peça com memória do processo, e mais 5 agentes cuidam de pesquisa, contrato, prazo, risco e honorários. Menos tempo na tarefa repetitiva, mais tempo na estratégia do caso.',
    ctaPrimary: 'Quero petições mais rápidas por R$ 27',
    ctaSecondary: 'Ver os 6 agentes',
  },
};

const enemyVariants = {
  default: {
    h: 'O maior gargalo não é falta de cliente. É que tudo ainda depende de você.',
    p:
      'Pesquisar jurisprudência toma a manhã. Redigir a petição toma a tarde. E o prazo do processo do mês passado quase passou direto, porque ninguém lembrou.',
    quote: 'Você estudou pra advogar, não pra ser o único fio que sustenta o escritório.',
  },
  atendimento: {
    h: 'Escritório Artesanal responde quando dá. Escritório Inteligente responde rápido, sempre.',
    p:
      'Não é falta de vontade de responder rápido. É que a resposta boa exige pesquisa, contexto do caso, atenção. Isso consome o tempo que devia ir pro atendimento.',
    quote: 'Cliente rápido não é cliente mal atendido. É cliente que não fica esperando à toa.',
  },
  peticao: {
    h: 'Escritório Artesanal recomeça do zero. Escritório Inteligente reaproveita o que já construiu.',
    p:
      'Mesmo caso parecido com outro que você já fez mês passado, mas a peça nasce em branco de novo. Pesquisa, estrutura, fundamentação: tudo refeito, sempre.',
    quote: 'A petição não devia ser o gargalo. Devia ser a parte fácil.',
  },
};

const baseCopy = {
  nav: {
    logo: 'Copiloto Jurídico',
    links: [
      { href: '#metodo', label: 'O Método' },
      { href: '#agentes', label: 'Os 6 agentes' },
      { href: '#mentor', label: 'Quem criou' },
      { href: '#preco', label: 'Acesso' },
      { href: '#faq', label: 'Dúvidas' },
    ],
    ctaLabel: 'Garantir acesso',
  },

  hero: {
    proof: 'Supervisionado por um advogado registrado na OAB/SP',
  },

  proofBar: [
    { num: '6', label: 'agentes especializados' },
    { num: '80%', label: 'do trabalho repetitivo automatizado' },
    { num: 'R$27', label: 'pagamento único, sem mensalidade' },
    { num: 'min', label: 'para ativar e começar a usar' },
  ],

  fifteenRule: {
    label: 'A regra dos 15 minutos',
    text:
      'Se uma tarefa jurídica se repete toda semana, ela não deveria tomar mais que 15 minutos do seu dia. Pesquisa, petição, contrato, prazo, risco, honorários: ou você monta um processo pra isso, ou continua refazendo o mesmo trabalho pra sempre.',
  },

  enemy: {
    eyebrow: 'O problema',
    bad: {
      label: 'Escritório Artesanal',
      items: [
        'Horas procurando jurisprudência em três sites diferentes',
        'Petição em branco, começando do zero toda vez',
        'Prazo anotado em post-it ou agenda que ninguém revisa',
        'Contrato revisado por cima, sem tempo pra comparar cláusula por cláusula',
        'Honorários calculados no chute, com medo de cobrar errado',
        'Cliente esperando resposta que só sai no fim do dia',
      ],
    },
    good: {
      label: 'Escritório Inteligente',
      items: [
        'Pesquisador traz jurisprudência do STJ, STF e TRTs com fonte rastreável',
        'Redator monta a petição com memória do processo, não do zero',
        'Gerenciador de Prazos avisa antes, não depois',
        'Editor de Contratos compara minutas cláusula por cláusula',
        'Calculador de Honorários usa tabela OAB e jurimetria',
        'Resposta pronta pra revisar no mesmo dia',
      ],
    },
  },

  metodo: {
    eyebrow: 'Como funciona a transformação',
    h: 'O Método E.I. — Escritório Inteligente.',
    p: 'Não é sobre usar mais tecnologia. É sobre parar de ser o gargalo do próprio escritório.',
    steps: [
      { num: '01', h: 'Diagnosticar', p: 'Onde o seu tempo está sendo perdido de verdade.' },
      { num: '02', h: 'Eliminar', p: 'As tarefas repetitivas que não deveriam mais passar pela sua mão.' },
      { num: '03', h: 'Organizar', p: 'O fluxo do escritório, não só a vontade de ser organizado.' },
      { num: '04', h: 'Automatizar', p: 'Os 6 agentes assumem pesquisa, petição, contrato, prazo, risco e honorários.' },
      { num: '05', h: 'Escalar', p: 'Mais processo, mesmo tempo. Sem contratar antes da hora.' },
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
        p: 'Sem folha de pagamento, sem treinamento, sem rotatividade. R$27 uma vez só contra um salário todo mês.',
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
      p: 'Busca jurisprudência no STJ, STF e TRTs e entrega a fonte de cada citação. Sem inventar precedente, sem cortar caminho que compromete a peça.',
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
      p: 'Escreve a peça com memória do processo. Cada novo documento aproveita o histórico do caso, em vez de começar do zero toda vez.',
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
      p: 'Analisa, revisa e compara minutas cláusula por cláusula. Aponta o que mudou entre uma versão e outra antes de você assinar.',
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
      p: 'Cruza os prazos do processo com alertas automáticos. Você também pode criar lembretes manuais pra tudo que não está no sistema.',
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
      p: 'Cruza dados históricos pra estimar o comportamento de uma vara ou de um juiz específico antes de você decidir a estratégia.',
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
      p: 'Usa a tabela OAB cruzada com jurimetria pra sugerir um valor justo. Menos "no olho", mais número que você defende com segurança.',
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
      'Não criei uma IA pra substituir advogado. Criei o primeiro passo pra sair do Escritório Artesanal e virar um Escritório Inteligente.',
  },

  whoFor: {
    eyebrow: 'Pra quem é',
    h: 'Feito pra quem quer sair do Escritório Artesanal, não pra quem só quer testar IA.',
    cards: [
      { icon: 'scale', h3: 'Advogado autônomo', p: 'Você é a banca inteira. Precisa de alavancagem, não de mais uma tarefa.' },
      { icon: 'building', h3: 'Pequeno escritório', p: 'Poucos sócios, muitos processos. Os agentes assumem o volume repetitivo.' },
      { icon: 'chat', h3: 'Atendimento por WhatsApp', p: 'Responde cliente rápido sem abrir mão da precisão técnica.' },
      { icon: 'searchDoc', h3: 'Sem estagiário disponível', p: 'A pesquisa e a triagem que o estagiário faria, o agente faz primeiro.' },
      { icon: 'clock', h3: 'Sobrecarregado de prazos', p: 'Quem já perdeu ou quase perdeu um prazo sabe o preço disso.' },
      { icon: 'trendUp', h3: 'Quer recuperar tempo', p: 'Menos hora gasta em tarefa repetitiva, mais hora em estratégia e cliente.' },
    ],
    notFor: [
      'Banca grande com equipe de TI própria',
      'Quem busca substituir o advogado pela IA',
      'Quem não revisa o que assina',
    ],
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
    eyebrow: 'Acesso',
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
    h: 'Do Escritório Artesanal pro Escritório Inteligente, hoje.',
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
    tagline: 'O sistema operacional do Escritório Inteligente, supervisionado por um advogado.',
    columns: [
      {
        title: 'Produto',
        links: [
          { href: '#metodo', label: 'O Método' },
          { href: '#agentes', label: 'Os 6 agentes' },
          { href: '#mentor', label: 'Quem criou' },
          { href: '#preco', label: 'Acesso' },
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
  const enemy = enemyVariants[variant] || enemyVariants.default;
  return {
    ...baseCopy,
    hero: { ...baseCopy.hero, ...hero },
    enemy: { ...baseCopy.enemy, ...enemy },
  };
}

export const copy = getCopy('default');
