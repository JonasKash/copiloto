import { questions } from "./content/questions.js";
import { product } from "./content/products.js";
import { diagnosticTemplate } from "./components/diagnostic.js";
import { salesTemplate } from "./components/sales-page.js";
import { personalize } from "./lib/personalization.js";

const root = document.querySelector("#app");
const state = { step: 0, answers: {}, error: "", meta: getTrackingMeta() };
const STATIC_PIX = "00020126360014BR.GOV.BCB.PIX011466309977000101520400005303986540517.005802BR5901N6001C62120508kitatend63048CCE";
const STORAGE_KEY = "avestra-diagnostic";

function getTrackingMeta() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || params.get("source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    origem: params.get("origem") || document.referrer || "",
    source_url: window.location.href,
    created_at: new Date().toISOString()
  };
}

function renderDiagnostic() {
  root.innerHTML = diagnosticTemplate(state);
  const form = document.querySelector("#diagnostic-form");
  form.addEventListener("change", (event) => {
    const question = questions[state.step];
    state.answers[question.id] = event.target.value;
    state.error = "";
    renderDiagnostic();
  });
  form.addEventListener("submit", handleNext);
  document.querySelector("[data-back]")?.addEventListener("click", () => {
    state.step -= 1;
    renderDiagnostic();
  });
}

async function handleNext(event) {
  event.preventDefault();
  const question = questions[state.step];
  if (!state.answers[question.id]) return;
  if (state.step < questions.length - 1) {
    state.step += 1;
    renderDiagnostic();
    return;
  }

  const button = event.currentTarget.querySelector("button[type=submit]");
  button.disabled = true;
  const originalText = button.innerHTML;
  button.innerHTML = `Criando sua recomendação…`;

  try {
    const response = await fetch("/api/diagnostics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...state.answers, ...state.meta })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data?.error || `Falha ao salvar diagnóstico (${response.status})`);
    }
  } catch (error) {
    console.warn(error.message);
    state.error = error.message;
    button.disabled = false;
    button.innerHTML = originalText;
    return renderDiagnostic();
  }

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: state.answers, meta: state.meta }));
  renderSales();
}

function renderSales() {
  const copy = personalize(state.answers);
  root.innerHTML = salesTemplate(copy);
  window.scrollTo({ top: 0, behavior: "instant" });
  document.querySelectorAll("[data-checkout]").forEach(button => button.addEventListener("click", openCheckout));
  document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", closeCheckout));
  document.addEventListener("keydown", escapeCheckout);
}

async function openCheckout() {
  const modal = document.querySelector("#checkout-modal");
  const content = document.querySelector("#checkout-content");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector("button, [data-close-inner]")?.focus();

  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: product.slug, answers: state.answers, meta: state.meta })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || response.statusText || "Checkout indisponível");
    content.innerHTML = `
      <span class="modal-eyebrow">PAGAMENTO VIA PIX</span>
      <h2 id="checkout-title">Seu acesso está quase pronto</h2>
      <p>Escaneie o QR Code ou copie o código PIX. O valor é <strong>R$ 17,00</strong>.</p>
      <img class="qr-code" src="https://quickchart.io/qr?size=260&margin=1&text=${encodeURIComponent(data.pix || STATIC_PIX)}" alt="QR Code PIX de R$ 17,00">
      <label class="pix-copy"><span id="pix-code">${data.pix || STATIC_PIX}</span><button type="button" data-copy>Copiar PIX</button></label>
      <p class="pix-label"><span>Descrição do pagamento</span><strong>Kit Aceleração Advocacia</strong></p>
      <div class="payment-status"><i></i><span><b>Aguardando pagamento</b><small>A confirmação será identificada automaticamente.</small></span></div>`;
    document.querySelector("[data-copy]").addEventListener("click", copyPix);
    pollPayment(data.orderId);
  } catch (error) {
    content.innerHTML = `<span class="modal-eyebrow">PAGAMENTO VIA PIX</span><h2 id="checkout-title">Checkout em configuração</h2><p>${error.message}. Use a chave PIX de teste enquanto ajustamos o ambiente.</p><button class="outline-button" data-close-inner>Entendi</button>`;
    document.querySelector("[data-close-inner]").addEventListener("click", closeCheckout);
    document.querySelector("[data-close-inner]")?.focus();
  }
}

async function copyPix(event) {
  await navigator.clipboard.writeText(document.querySelector("#pix-code").textContent);
  event.currentTarget.textContent = "Copiado!";
}

async function pollPayment(orderId) {
  let attempts = 0;
  const timer = setInterval(async () => {
    attempts += 1;
    if (attempts > 60 || !document.querySelector("#checkout-modal.open")) return clearInterval(timer);
    try {
      const response = await fetch(`/api/payment-status?orderId=${encodeURIComponent(orderId)}`);
      const data = await response.json();
      if (data.status === "paid") {
        clearInterval(timer);
        const message = encodeURIComponent(`Olá! Acabei de comprar o ${product.name} e gostaria de receber meus arquivos.`);
        window.location.href = `https://wa.me/${product.whatsapp}?text=${message}`;
      }
    } catch {}
  }, 3000);
}

function closeCheckout() {
  const checkoutModal = document.querySelector("#checkout-modal");
  const firstCheckoutButton = document.querySelector("[data-checkout]");
  firstCheckoutButton?.focus();
  checkoutModal?.setAttribute("aria-hidden", "true");
  checkoutModal?.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function escapeCheckout(event) { if (event.key === "Escape") closeCheckout(); }

const saved = sessionStorage.getItem(STORAGE_KEY) || sessionStorage.getItem("bonadio-diagnostic");
if (saved) {
  try {
    const parsed = JSON.parse(saved);
    state.answers = parsed.answers || parsed;
    state.meta = parsed.meta || state.meta;
  } catch {}
}
renderDiagnostic();
