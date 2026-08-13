'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, routeForAnswers } from '@/content/quiz';
import { pushEvent } from '@/lib/analytics';
import styles from './Quiz.module.css';

const TOTAL_STEPS = questions.length + 1;

function sanitizePhone(value) {
  return value.replace(/\D/g, '');
}

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showContact, setShowContact] = useState(false);
  const [contact, setContact] = useState({ nome: '', whatsapp: '' });
  const [contactError, setContactError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const question = questions[step];
  const currentStepNumber = showContact ? TOTAL_STEPS : step + 1;
  const progress = (currentStepNumber / TOTAL_STEPS) * 100;
  const isLastQuestion = step === questions.length - 1;
  const selected = question ? answers[question.id] : null;

  function selectOption(option) {
    setAnswers((prev) => ({ ...prev, [question.id]: option }));
  }

  function handleNext() {
    if (!selected) return;

    if (!isLastQuestion) {
      setStep((s) => s + 1);
      return;
    }

    setShowContact(true);
  }

  function handleBack() {
    if (showContact) {
      setShowContact(false);
      return;
    }
    if (step > 0) setStep((s) => s - 1);
  }

  async function handleSubmit() {
    const nome = contact.nome.trim();
    const whatsapp = sanitizePhone(contact.whatsapp);

    if (nome.length < 2) {
      setContactError('Digita seu nome.');
      return;
    }
    if (whatsapp.length < 10 || whatsapp.length > 11) {
      setContactError('Digita um WhatsApp válido, com DDD.');
      return;
    }
    setContactError('');
    setSubmitting(true);

    const meta = {};
    if (typeof window !== 'undefined') {
      new URLSearchParams(window.location.search).forEach((value, key) => {
        if (key.startsWith('utm_')) meta[key] = value;
      });
    }

    fetch('/api/diagnostics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...answers, nome, whatsapp, meta }),
    }).catch(() => {});

    pushEvent('diagnostico_completo', { area: answers.area, tempo: answers.tempo, ...meta });

    const destination = routeForAnswers(answers);
    const params = new URLSearchParams({ area: answers.area, tempo: answers.tempo });
    setTimeout(() => router.push(`${destination}?${params.toString()}`), 500);
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.brand}>
          <span className={styles.mark}>W</span>
          <span>Copiloto Jurídico</span>
        </header>

        <section className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Diagnóstico Escritório Processual</p>
            <h1 className={styles.h1}>
              Seu escritório fatura mais a cada ano. <em>Sua semana também fica mais cheia?</em>
            </h1>
            <p className={styles.p}>
              Na maioria dos escritórios, tudo ainda depende do advogado: pesquisa, petição, prazo, atendimento. Responda 3 perguntas rápidas e descubra em qual nível o seu está.
            </p>
            <div className={styles.trust}>
              <span>⏱ Menos de 1 minuto</span>
              <span>🔒 Dados protegidos</span>
            </div>
          </div>

          <div className={styles.card} aria-live="polite">
            {submitting ? (
              <div className={styles.loading}>
                <div className={styles.spinner} />
                <p>Montando seu diagnóstico…</p>
              </div>
            ) : (
              <>
                <div className={styles.progressMeta}>
                  <span>
                    ETAPA {currentStepNumber} DE {TOTAL_STEPS}
                  </span>
                  <strong>{Math.round(progress)}%</strong>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>

                {showContact ? (
                  <>
                    <p className={styles.questionEyebrow}>Quase lá</p>
                    <h2 className={styles.question}>Pra onde mandamos seu diagnóstico?</h2>

                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="quiz-nome">Nome</label>
                      <input
                        id="quiz-nome"
                        type="text"
                        className={styles.fieldInput}
                        value={contact.nome}
                        onChange={(e) => setContact((prev) => ({ ...prev, nome: e.target.value }))}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.fieldLabel} htmlFor="quiz-whatsapp">WhatsApp</label>
                      <input
                        id="quiz-whatsapp"
                        type="tel"
                        inputMode="numeric"
                        className={styles.fieldInput}
                        value={contact.whatsapp}
                        onChange={(e) => setContact((prev) => ({ ...prev, whatsapp: e.target.value }))}
                        placeholder="(11) 91234-5678"
                      />
                      <p className={styles.fieldHint}>Só usamos pra te enviar o resultado e tirar dúvida, sem spam.</p>
                      {contactError && <p className={styles.fieldError}>{contactError}</p>}
                    </div>
                  </>
                ) : (
                  <>
                    <p className={styles.questionEyebrow}>{question.eyebrow}</p>
                    <h2 className={styles.question}>{question.title}</h2>

                    <div className={styles.options}>
                      {question.options.map((option, index) => (
                        <button
                          key={option}
                          type="button"
                          className={`${styles.option} ${selected === option ? styles.optionSelected : ''}`}
                          onClick={() => selectOption(option)}
                        >
                          <span className={styles.optionIndex}>{String.fromCharCode(65 + index)}</span>
                          <span className={styles.optionLabel}>{option}</span>
                          {selected === option && (
                            <svg width="14" height="12" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <div className={styles.actions}>
                  {step > 0 || showContact ? (
                    <button type="button" className={styles.backBtn} onClick={handleBack}>
                      Voltar
                    </button>
                  ) : (
                    <span />
                  )}
                  {showContact ? (
                    <button type="button" className={styles.nextBtn} onClick={handleSubmit}>
                      Ver meu diagnóstico →
                    </button>
                  ) : (
                    <button type="button" className={styles.nextBtn} disabled={!selected} onClick={handleNext}>
                      Continuar →
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Copiloto Jurídico <span>OAB/SP 398.640</span>
        </footer>
      </div>
    </div>
  );
}
