import { product } from "../content/products.js";
import { icons } from "./icons.js";

export function salesTemplate(copy) {
  return `
    <main class="sales-page">
      <nav class="sales-nav"><div class="brand"><span class="brand-mark">AV</span><span>Avestra <b>Digital</b></span></div><span class="nav-safe">${icons.shield} Compra segura</span></nav>
      <section class="hero">
        <div class="hero-copy reveal">
          <div class="eyebrow"><span></span> Recomendado para você</div>
          <h1>${copy.heroTitle}</h1>
          <ul class="personalized-facts">
            ${copy.heroFacts.map(fact => `<li>${icons.check}<span>${fact}</span></li>`).join("")}
          </ul>
          <p class="hero-subheadline">${copy.heroSubtitle}</p>
          <div class="hero-actions">
            <button class="gold-button" data-checkout>Quero recuperar meu tempo ${icons.arrow}</button>
            <small>${icons.shield} Pagamento único • Acesso imediato</small>
          </div>
        </div>
        <div class="product-visual reveal">
          <div class="mockup-glow" aria-hidden="true"></div>
          <img class="head-mockup" src="/public/Mockup%20Head.png" alt="Kit Avestra com painel de produtividade, modelos prontos e recursos de inteligência artificial" width="1536" height="1536" loading="eager" fetchpriority="high">
          <div class="float-pill">${icons.clock}<span><b>${copy.time}</b><small>recuperados por dia</small></span></div>
        </div>
      </section>

      <section class="diagnosis-strip"><span>${icons.spark}</span><div><small>SEU DIAGNÓSTICO</small><p>${copy.diagnosis}</p></div></section>

      <section class="section benefits"><div class="section-head"><span>FEITO PARA A SUA ROTINA</span><h2>Trabalhe com mais clareza.<br><em>Entregue com mais velocidade.</em></h2></div>
        <div class="benefit-grid">
          ${[["01","Atendimento mais ágil",`Responda e qualifique clientes com fluxos adaptados para advogados ${copy.area}.`],["02","Menos tarefas manuais",`Automatize o que hoje consome ${copy.time} da sua rotina.`],["03","IA com aplicação prática",`Use comandos prontos para ${copy.action}, mesmo sem experiência técnica.`]].map(item => `<article><span>${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></article>`).join("")}
        </div>
      </section>

      <section class="section deliverables"><div class="deliverable-copy"><span>O QUE VOCÊ RECEBE</span><h2>Um atalho prático para um escritório mais leve.</h2><p>Sem teoria extensa. Abra, personalize e aplique ainda hoje.</p></div>
        <div class="deliverable-list">${product.deliverables.map((item, index) => `<div><span>${icons.check}</span><p><small>ARQUIVO 0${index + 1}</small>${item}</p></div>`).join("")}</div>
      </section>

      <section class="time-section"><div><span class="giant-time">${copy.time}</span><p>Esse é o tempo que pode voltar para seus clientes, sua estratégia ou sua vida - todos os dias.</p></div></section>

      <section class="section guarantee"><div class="guarantee-seal"><span>7</span><small>DIAS</small></div><div><span>RISCO ZERO</span><h2>Teste por 7 dias.</h2><p>Se o material não ajudar sua rotina, basta solicitar o reembolso dentro do prazo da garantia.</p></div></section>

      <section class="section faq"><div class="section-head"><span>DÚVIDAS FREQUENTES</span><h2>Antes de começar</h2></div><div class="faq-list">${product.faqs.map(([q,a],i) => `<details ${i === 0 ? "open" : ""}><summary>${q}<i>+</i></summary><p>${a}</p></details>`).join("")}</div></section>

      <section class="checkout-section" id="oferta"><div class="checkout-card"><div class="checkout-copy"><span>OFERTA ESPECIAL</span><h2>${product.name}</h2><ul>${product.deliverables.map(item => `<li>${icons.check}${item}</li>`).join("")}</ul></div><div class="price-box"><small>ACESSO COMPLETO POR</small><div><sup>R$</sup><strong>17</strong><sup>,00</sup></div><p>Pagamento único. Sem mensalidade.</p><button class="gold-button" data-checkout>Comprar agora ${icons.arrow}</button><small>${icons.shield} Ambiente seguro</small></div></div></section>
      <footer class="sales-footer"><div class="brand"><span class="brand-mark">AV</span><span>Avestra <b>Digital</b></span></div><p>© ${new Date().getFullYear()} • Todos os direitos reservados</p></footer>
    </main>
    <div class="modal" id="checkout-modal" aria-hidden="true"><div class="modal-backdrop" data-close></div><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="checkout-title"><button class="modal-close" data-close aria-label="Fechar">×</button><div id="checkout-content"><span class="modal-eyebrow">PAGAMENTO VIA PIX</span><h2 id="checkout-title">Finalize seu acesso</h2><p>Gerando seu PIX seguro…</p><div class="loading-ring"></div></div></section></div>`;
}
