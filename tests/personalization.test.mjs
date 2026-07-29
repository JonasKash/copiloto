import test from "node:test";
import assert from "node:assert/strict";
import { personalize } from "../lib/personalization.js";
import { buildPix } from "../api/_pix.js";
import { salesTemplate } from "../components/sales-page.js";

test("personaliza a copy com as três respostas", () => {
  const copy = personalize({ area: "Trabalhista", tempo: "30 minutos a 1 hora", gargalo: "Atendimento ao cliente" });
  assert.match(copy.heroSubtitle, /Enquanto você perde/);
  assert.match(copy.heroSubtitle, /1 hora/);
  assert.equal(copy.heroTitle, "Porque você informou que:");
  assert.match(copy.heroFacts[0], /Atua na área Trabalhista/);
  assert.match(copy.heroFacts[1], /Perde cerca de 1 hora por dia/);
  assert.match(copy.heroFacts[2], /Seu maior gargalo é atendimento ao cliente/);
  assert.doesNotMatch(copy.heroFacts.join(" "), /cerca de cerca de/);
});

test("renderiza o cenário consumerista sem repetir o tempo", () => {
  const copy = personalize({ area: "Consumidor", tempo: "30 minutos a 1 hora", gargalo: "Organização de documentos" });
  const html = salesTemplate(copy);

  assert.match(html, /Atua na área Consumerista/);
  assert.match(html, /Perde cerca de 1 hora por dia/);
  assert.match(html, /Enquanto você perde cerca de 1 hora por dia com organização de documentos/);
  assert.match(html, /\/public\/Mockup%20Head\.png/);
  assert.doesNotMatch(html, /cerca de cerca de|tempo 30 minutos a 1 hora/);
});

test("gera payload PIX completo com CRC", () => {
  const pix = buildPix({ key: "teste@example.com", name: "Wladmir Bonadio", city: "Araxa", amount: 17, txid: "ABC123" });
  assert.match(pix, /^00020126/);
  assert.match(pix, /5303986/);
  assert.match(pix, /540517\.00/);
  assert.match(pix, /6304[0-9A-F]{4}$/);
});
