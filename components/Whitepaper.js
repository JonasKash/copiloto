import Nav from './Nav';
import Footer from './Footer';
import styles from './Whitepaper.module.css';

export default function Whitepaper() {
  return (
    <div className={styles.page}>
      <Nav />

      <header className={styles.hero}>
        <div className="wrap">
          <p className={styles.kicker}>Whitepaper — Avestra</p>
          <h1 className={styles.title}>O Estado da Advocacia Artesanal 2026</h1>
          <p className={styles.byline}>
            Em parceria com Dr. Wladmir Bonadio Filho, OAB/SP 398.640
          </p>
        </div>
      </header>

      <article className={styles.article}>
        <h2>Sumário executivo</h2>
        <p>Este é o primeiro relatório de uma série contínua sobre o estado operacional da advocacia no Brasil.</p>
        <p>
          A tese central é simples de enunciar e difícil de resolver: a maior parte dos escritórios de
          advocacia brasileiros opera hoje no que este relatório chama de <strong>modelo artesanal</strong>,
          um modelo em que a operação inteira depende da presença ativa de uma única pessoa, geralmente o
          sócio fundador. Isso não é uma falha de caráter nem de competência jurídica. É uma consequência
          direta de como a profissão foi formada: a faculdade ensina Direito, não ensina como estruturar
          uma operação que sobreviva sem o fundador presente o tempo todo.
        </p>
        <p>Este relatório organiza essa tese em cinco partes:</p>
        <ol>
          <li>O tamanho e a estrutura do mercado jurídico brasileiro, com base em dados públicos.</li>
          <li>Um framework de quatro estágios operacionais, construído a partir da observação direta de escritórios reais.</li>
          <li>Os cinco sintomas mais recorrentes do modelo artesanal.</li>
          <li>Como a inteligência artificial está mudando a advocacia, e por que a maioria das tentativas de adoção falha.</li>
          <li>Um método de transição, testável e replicável, do modelo artesanal para o modelo processual.</li>
        </ol>
        <p>
          Diferente do Manifesto que este relatório acompanha, aqui o objetivo não é mover pela identidade.
          É mover pelo argumento. Cada seção separa com clareza o que é dado público verificável, o que é
          observação de campo, e o que é hipótese de trabalho ainda em teste.
        </p>

        <h2>1. Nota de metodologia</h2>
        <p>Transparência sobre fonte é parte do valor deste documento, não um rodapé.</p>
        <p>
          <strong>Dados públicos.</strong> Números sobre o tamanho da advocacia brasileira e o volume de
          processos no Judiciário vêm de fontes públicas oficiais, como os relatórios da OAB e o anuário
          <em> Justiça em Números</em> do CNJ. Esses números mudam a cada edição desses relatórios. Antes
          de citar uma cifra específica deste documento em anúncio, apresentação ou mídia paga, confirme o
          valor mais recente direto na fonte oficial, porque relatórios anuais atualizam esses dados com
          regularidade e este whitepaper não substitui a fonte primária.
        </p>
        <p>
          <strong>Observação de campo.</strong> Os quatro estágios operacionais, os cinco sintomas e o
          framework do Método Escritório Processual™ vêm de conversas diretas com advogados solo e pequenos
          escritórios, não de uma pesquisa quantitativa formal com amostra representativa. É prática
          qualificada, não estatística com margem de erro calculada.
        </p>
        <p>
          <strong>Dados proprietários, em construção.</strong> A partir desta edição, o Diagnóstico
          Escritório Processual (o quiz de três perguntas em <code>copilotojuridico.avestra.site</code>)
          começa a gerar dados próprios sobre em qual estágio operacional os escritórios respondentes se
          encontram. Esse volume ainda é pequeno demais pra generalizar. A próxima edição deste relatório,
          com uma base maior de respostas, poderá citar essa distribuição com mais confiança. Este
          documento já reserva o espaço pra isso: é, por desenho, o primeiro de uma série que fica mais
          rigorosa a cada edição.
        </p>

        <h2>2. O tamanho do mercado</h2>
        <p>
          O Brasil tem, segundo dados historicamente divulgados pela própria OAB, uma das maiores bases de
          advogados registrados do mundo, casa dos milhões de inscritos ativos somando todas as seccionais.
          É um mercado grande, disperso entre poucos escritórios de grande porte e um número muito maior de
          advogados solo ou em bancas pequenas, geralmente com menos de cinco pessoas na equipe.
        </p>
        <p>
          Esse segundo grupo, o de escritórios pequenos e médios, raramente é o público de quem vende
          tecnologia jurídica no Brasil. A maior parte das soluções de legaltech nacional foi desenhada
          pensando em departamentos jurídicos corporativos ou grandes bancas, com equipe de TI própria,
          orçamento de software e processo de compra formal. O advogado solo ou o escritório de cinco
          pessoas fica, na prática, sem ferramenta pensada pra sua realidade: fica com planilha, WhatsApp e
          a própria memória.
        </p>
        <p>
          O Judiciário brasileiro, por sua vez, processa um volume de casos que o <em>Justiça em Números</em> do
          CNJ historicamente descreve como um dos maiores acervos do mundo em tramitação simultânea. Esse
          volume não para de crescer, e cada processo novo que entra no sistema representa trabalho manual
          de pesquisa, redação, acompanhamento de prazo e cálculo em algum escritório, grande ou pequeno.
        </p>
        <p>
          A conclusão estrutural: existe um mercado enorme de advogados individuais e pequenos escritórios
          que carregam, sozinhos, uma fração desproporcional do volume de trabalho jurídico do país, sem
          nunca terem recebido ferramenta ou método pensado pro tamanho da operação deles.
        </p>

        <h2>3. O framework: quatro estágios operacionais</h2>
        <p>
          A observação direta de dezenas de escritórios, ao longo de conversas de diagnóstico e consultoria,
          revela um padrão que se repete com uma regularidade que surpreende quem nunca parou pra nomear.
        </p>
        <p>Não é um padrão de talento jurídico. É um padrão de operação.</p>

        <h3>Estágio 1 — Operação Dependente</h3>
        <p>
          Tudo passa pela mesma pessoa. Toda decisão relevante, toda dúvida da equipe, toda resposta a
          cliente, converge pro fundador. A operação funciona enquanto essa pessoa está presente e
          desacelera visivelmente quando ela sai de cena, seja em férias, doença ou apenas um dia de
          agenda cheia de audiência.
        </p>
        <p className={styles.note}>
          <strong>Sinal de campo:</strong> perguntado se conseguiu tirar uma semana de férias sem responder
          mensagem de trabalho, o advogado nesse estágio quase sempre responde que não, ou que tentou e não
          deu certo.
        </p>

        <h3>Estágio 2 — Operação Sobrecarregada</h3>
        <p>
          O volume de trabalho cresceu, mas nenhuma das tarefas repetitivas foi organizada. A mesma
          pesquisa é refeita, a mesma dúvida é respondida de novo, a mesma petição recomeça do zero. O
          problema deixou de ser falta de cliente e passou a ser a ausência de repetição estruturada.
        </p>
        <p className={styles.note}>
          <strong>Sinal de campo:</strong> a equipe pergunta a mesma coisa mais de uma vez por semana, e o
          fundador responde, sem nunca ter documentado a resposta em lugar nenhum que a equipe possa
          consultar sozinha.
        </p>

        <h3>Estágio 3 — Operação Estagnada</h3>
        <p>
          O faturamento sobe junto com o número de clientes, mas a carga de trabalho sobe na mesma
          proporção, ou mais. Crescer deixou de significar ganhar mais por hora trabalhada e passou a
          significar trabalhar mais horas pelo mesmo retorno relativo.
        </p>
        <p className={styles.note}>
          <strong>Sinal de campo:</strong> o escritório fatura mais este ano do que no ano passado, e ainda
          assim a sensação subjetiva de sobrecarga também aumentou, não diminuiu.
        </p>

        <h3>Estágio 4 — Operação Processual</h3>
        <p>
          O escritório continua funcionando quando o fundador não está presente. Atendimento, petição,
          prazo e cálculo seguem fluxo definido, documentado, executável por outra pessoa ou por uma
          ferramenta configurada pra isso. Esse estágio não surge por acaso. Surge de decisão deliberada de
          mapear, padronizar e processualizar antes de automatizar.
        </p>
        <p className={styles.note}>
          <strong>Sinal de campo:</strong> o fundador consegue ficar uma semana inteira fora, incluindo
          férias reais, e a operação continua entregando no padrão esperado.
        </p>

        <h3>Por que esse framework importa</h3>
        <p>
          Os três primeiros estágios descrevem, em graus diferentes, o que este relatório chama de modelo
          artesanal. O quarto descreve o modelo processual. A distância entre eles não se mede em anos de
          experiência, tamanho de equipe ou faturamento. Mede-se em quantidade de processo documentado e
          executável sem depender de uma pessoa específica.
        </p>
        <p>
          Isso tem uma implicação prática direta pra quem vende ferramenta ou serviço pra advogado:
          perguntar &ldquo;em que estágio você está&rdquo; é uma pergunta de diagnóstico mais útil do que
          perguntar &ldquo;quanto você fatura&rdquo; ou &ldquo;há quanto tempo você atua&rdquo;.
        </p>

        <h2>4. Os cinco sintomas mais recorrentes</h2>
        <p>
          Cruzando os quatro estágios com as conversas de campo, cinco sintomas aparecem com frequência
          muito maior que qualquer outro, em qualquer área do direito:
        </p>
        <ol>
          <li><strong>O fundador responde praticamente todas as mensagens de clientes</strong>, mesmo as que a equipe já saberia responder se tivesse onde consultar o padrão.</li>
          <li><strong>A equipe pergunta antes de agir</strong>, porque a decisão nunca foi documentada, só vive na memória de quem fundou o escritório.</li>
          <li><strong>Cada petição começa do zero</strong>, mesmo quando um caso semelhante já foi resolvido antes, porque não existe repositório organizado do que já foi produzido.</li>
          <li><strong>Tirar férias de verdade não é uma opção real</strong>, porque a operação não sobrevive à ausência do fundador por mais de alguns dias.</li>
          <li><strong>O escritório para quando o fundador para.</strong> Esse é o sintoma-síntese: todos os outros quatro, somados, produzem esse resultado final.</li>
        </ol>
        <p>
          Nenhum desses sintomas é sinal de um escritório mal administrado no sentido comum da palavra. São
          o resultado esperado de uma formação jurídica que nunca ensinou gestão de operação, combinada com
          um mercado de ferramentas que, historicamente, também nunca foi desenhado pra esse público.
        </p>

        <h2>5. Onde a inteligência artificial está mudando a advocacia</h2>
        <p>
          A adoção de inteligência artificial generativa em profissões baseadas em texto e pesquisa
          (direito, entre elas) é uma das mudanças tecnológicas mais discutidas globalmente nos últimos
          anos, com grandes escritórios internacionais e fornecedores de legaltech investindo pesado em
          pesquisa, redação e revisão assistidas por IA. Esse movimento chegou ao Brasil, mas chegou de
          forma desigual: departamentos jurídicos grandes e escritórios de porte já têm acesso a ferramenta
          e treinamento. O advogado solo e o escritório pequeno, de novo, ficam por último na fila.
        </p>
        <p>Isso cria uma oportunidade real, mas também um risco real, que este relatório considera importante nomear com honestidade.</p>

        <h3>O risco: automatizar o caos</h3>
        <p>
          A tentação natural, ao ouvir falar de inteligência artificial jurídica, é comprar a ferramenta e
          esperar que ela resolva o problema operacional sozinha. Na prática de campo, o padrão observado é
          o oposto: um escritório sem processo definido que adota uma ferramenta de IA não fica mais
          organizado. Fica mais rápido produzindo o mesmo caos.
        </p>
        <p>
          O documento sai errado mais rápido. A informação se perde mais rápido. A confusão entre o que a
          IA gerou e o que precisa de revisão humana se espalha mais rápido pela equipe.
        </p>
        <p>
          Esse é o motivo estrutural pelo qual, no framework deste relatório, a automação por IA só entra
          na quarta etapa de um método de cinco (ver seção 6), nunca na primeira. Ferramenta de IA aplicada
          antes de mapear, padronizar e processualizar acelera o problema, não a solução.
        </p>

        <h3>A oportunidade: um copiloto operacional, não um substituto</h3>
        <p>
          Quando aplicada depois de mapeamento e padronização, a IA muda de papel. Deixa de ser promessa
          genérica de &ldquo;transformação digital&rdquo; e passa a executar, de forma consistente,
          processos que já foram definidos por gente que entende do próprio negócio.
        </p>
        <p>
          É essa a lógica por trás do Copiloto Jurídico: seis processos automatizados (pesquisa de
          jurisprudência, redação de petições, revisão de contratos, gestão de prazos, análise de risco por
          jurimetria e cálculo de honorários), cada um operacionalizando uma etapa que, sem processo
          definido antes, um advogado tentaria automatizar sozinho e provavelmente pioraria.
        </p>
        <p>A IA não substitui o julgamento do advogado responsável por cada caso. Acelera a parte do trabalho que já era repetitiva antes da IA existir.</p>

        <h2>6. O Método: cinco etapas, ordem obrigatória</h2>
        <p>
          A transição do modelo artesanal pro modelo processual segue uma sequência específica. Pular
          etapa não acelera o resultado. Só transfere o caos pra dentro de um sistema mais rápido.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>Etapa</th><th>O que acontece</th><th>Erro comum de quem pula essa etapa</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1. Mapear</strong></td><td>Levantamento preciso de onde o tempo do escritório é gasto de verdade, com base na rotina real, não na percepção subjetiva.</td><td>Assumir que já se sabe onde está o gargalo, sem checar com dado real.</td></tr>
              <tr><td><strong>2. Padronizar</strong></td><td>Tudo que hoje só existe na memória do fundador vira modelo, roteiro ou checklist escrito e consultável.</td><td>Documentar de forma incompleta, deixando exceção demais fora do padrão.</td></tr>
              <tr><td><strong>3. Processualizar</strong></td><td>Cada atividade recorrente ganha um fluxo único: sequência de passos, responsável por cada um, e o que acontece depois.</td><td>Padronizar a peça isolada, sem desenhar o fluxo completo em volta dela.</td></tr>
              <tr><td><strong>4. Automatizar</strong></td><td>Só agora entra tecnologia (incluindo IA), assumindo o que já foi mapeado, padronizado e processualizado.</td><td>Comprar ferramenta antes das três etapas anteriores, automatizando a bagunça.</td></tr>
              <tr><td><strong>5. Escalar</strong></td><td>Com processo rodando, mais cliente passa a significar mais faturamento sem aumento proporcional de carga de trabalho.</td><td>Tentar escalar (contratar, captar mais) antes de ter processo que sustente o volume novo.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Esse método não é uma lista de boas intenções. É uma sequência de dependência lógica: cada etapa
          só funciona se a anterior já foi feita. É o motivo pelo qual comprar ferramenta de IA sem ter
          passado pelas três primeiras etapas raramente entrega o resultado prometido, independente da
          qualidade da ferramenta em si.
        </p>

        <h2>7. Antes e depois: seis processos, uma mudança estrutural</h2>
        <p>Aplicado a um escritório jurídico, o Método muda de forma concreta seis áreas de trabalho que, sem processo, consomem tempo desproporcional:</p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>Processo</th><th>Antes (modelo artesanal)</th><th>Depois (modelo processual)</th></tr>
            </thead>
            <tbody>
              <tr><td>Pesquisa de jurisprudência</td><td>Refeita do zero a cada caso semelhante, sem fonte rastreável organizada.</td><td>Parte do fluxo do escritório, com fonte rastreável em cada citação.</td></tr>
              <tr><td>Redação de petições</td><td>Cada peça começa em branco, mesmo com caso parecido já resolvido antes.</td><td>Reaproveita o histórico de casos já produzidos pelo escritório.</td></tr>
              <tr><td>Revisão de contratos</td><td>Revisão por cima, torcendo pra não passar cláusula problemática.</td><td>Cláusula de risco identificada antes da assinatura, de forma sistemática.</td></tr>
              <tr><td>Gestão de prazos</td><td>Depende da memória ou de agenda pessoal de quem fundou o escritório.</td><td>Mora no processo, com alerta automático antes do vencimento.</td></tr>
              <tr><td>Decisão de recorrer ou negociar</td><td>Baseada só na experiência pessoal do advogado responsável.</td><td>Considera dado real: histórico da vara, probabilidade de êxito, custo-benefício.</td></tr>
              <tr><td>Cálculo de honorários</td><td>No chute, com medo recorrente de cobrar errado.</td><td>Critério claro, documentado, defensável diante do cliente.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Nenhuma dessas seis mudanças depende, em si, de inteligência artificial. Dependem de processo. A
          IA entra depois, executando o que o processo já definiu, e é isso que separa uma ferramenta que
          gera resultado de uma ferramenta que só gera mais uma assinatura mensal esquecida.
        </p>

        <h2>8. O que isso significa pra quem está lendo agora</h2>
        <p>
          Se boa parte dos sintomas listados na seção 4 soou familiar, isso não é coincidência estatística.
          É o padrão dominante do mercado jurídico brasileiro hoje, não uma exceção isolada do seu
          escritório.
        </p>
        <p>
          A pergunta que este relatório propõe não é &ldquo;meu escritório tem problema&rdquo;. É outra:{' '}
          <strong>em qual dos quatro estágios operacionais o meu escritório está agora, e o que precisa
          acontecer, na ordem certa, pra sair dele.</strong>
        </p>
        <p>
          Essa pergunta tem resposta objetiva. O Diagnóstico Escritório Processual (três perguntas, menos
          de um minuto, gratuito) foi desenhado exatamente pra respondê-la, sem depender de opinião ou de
          venda: <code>copilotojuridico.avestra.site</code>.
        </p>
        <p>
          Pra quem já sabe que quer avançar além do diagnóstico, existem hoje seis degraus formais, do
          gratuito ao acompanhamento completo de 90 dias, cada um resolvendo uma parte diferente da
          transição descrita neste relatório: Diagnóstico, Copiloto Jurídico, Playbook Escritório
          Processual, Implantação do Processo, Consultoria Estratégica e Escritório Processual Premium.
        </p>

        <h2>9. Próximas edições</h2>
        <p>Este relatório é o primeiro de uma série contínua, não um documento fechado.</p>
        <p>A cada edição, três coisas devem melhorar:</p>
        <ol>
          <li><strong>Volume de dado proprietário.</strong> Conforme mais escritórios respondem ao Diagnóstico, a distribuição real entre os quatro estágios operacionais deixa de ser observação qualitativa e passa a ser dado agregado, anonimizado, com tamanho de amostra crescente.</li>
          <li><strong>Casos documentados.</strong> A série semanal &ldquo;Diagnóstico nº&rdquo; publica, toda semana, uma análise real e anonimizada de um escritório: quantas tarefas repetidas foram encontradas, quantos gargalos, quantas oportunidades. Ao longo do tempo, isso vira um banco de casos que alimenta diretamente as próximas edições deste whitepaper.</li>
          <li><strong>Validação de campo do Método.</strong> Cada escritório que passa pela Consultoria Estratégica ou pelo Escritório Processual Premium gera um caso de antes e depois real, mensurável, que testa a tese central deste relatório contra a realidade, não contra a teoria.</li>
        </ol>
        <p>Quem quiser contribuir com dado real pra próxima edição, de forma anônima, pode responder ao Diagnóstico ou entrar em contato diretamente com a Avestra.</p>
      </article>

      <div className={styles.ctaWrap}>
        <a href="/" className="btn btn-black btn-large">
          Fazer o Diagnóstico →
        </a>
      </div>

      <hr className={styles.divider} />

      <div className={styles.signature}>
        <p>Produzido pela Avestra em parceria com Dr. Wladmir Bonadio Filho — OAB/SP 398.640</p>
        <p>
          Baseado em observação de campo de escritórios de advocacia brasileiros e em dados públicos
          oficiais (OAB e CNJ), citados com a devida ressalva de que devem ser confirmados contra a fonte
          mais recente antes de republicação em qualquer peça de mídia paga. Este documento não constitui
          parecer jurídico nem substitui consulta com advogado responsável por caso concreto. O Copiloto
          Jurídico e as demais ferramentas mencionadas são instrumentos de apoio à atividade advocatícia.
        </p>
      </div>

      <Footer />
    </div>
  );
}
