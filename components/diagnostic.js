import { questions } from "../content/questions.js";
import { icons } from "./icons.js";

export function diagnosticTemplate(state) {
  const question = questions[state.step];
  const progress = ((state.step + 1) / questions.length) * 100;
  return `
    <main class="diagnostic-shell">
      <header class="brand"><span class="brand-mark">AV</span><span>Avestra <b>Digital</b></span></header>
      <section class="diagnostic-grid">
        <div class="intro-panel">
          <div class="eyebrow"><span></span> Diagnóstico gratuito</div>
          <h1>Descubra onde seu escritório está <em>perdendo tempo.</em></h1>
          <p>Responda 3 perguntas rápidas e receba uma recomendação criada para a sua rotina jurídica.</p>
          <div class="trust-row">
            <span>${icons.clock} Menos de 1 minuto</span>
            <span>${icons.shield} Dados protegidos</span>
          </div>
        </div>
        <div class="form-card" aria-live="polite">
          <div class="progress-meta"><span>ETAPA ${state.step + 1} DE ${questions.length}</span><strong>${Math.round(progress)}%</strong></div>
          <div class="progress"><i style="width:${progress}%"></i></div>
          <form id="diagnostic-form">
            <p class="question-eyebrow">${question.eyebrow}</p>
            <h2>${question.title}</h2>
            <div class="options">
              ${question.options.map((option, index) => `
                <label class="option ${state.answers[question.id] === option ? "selected" : ""}">
                  <input type="radio" name="answer" value="${option}" ${state.answers[question.id] === option ? "checked" : ""}>
                  <span class="option-index">${String.fromCharCode(65 + index)}</span>
                  <span>${option}</span>
                  <i>${icons.check}</i>
                </label>`).join("")}
            </div>
            <div class="form-actions">
              ${state.step ? `<button class="back" type="button" data-back>Voltar</button>` : `<span></span>`}
              <button class="primary" type="submit" ${state.answers[question.id] ? "" : "disabled"}>
                ${state.step === questions.length - 1 ? "Ver meu diagnóstico" : "Continuar"} ${icons.arrow}
              </button>
            </div>
            ${state.error ? `<p class="form-error">${state.error}</p>` : ""}
          </form>
        </div>
      </section>
      <footer class="minimal-footer">© ${new Date().getFullYear()} Avestra Digital <span>OAB/SP 398.640</span></footer>
    </main>`;
}
