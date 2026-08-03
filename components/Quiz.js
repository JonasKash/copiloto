'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, routeForAnswers } from '@/content/quiz';
import styles from './Quiz.module.css';

export default function Quiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const question = questions[step];
  const progress = ((step + 1) / questions.length) * 100;
  const isLast = step === questions.length - 1;
  const selected = answers[question.id];

  function selectOption(option) {
    setAnswers((prev) => ({ ...prev, [question.id]: option }));
  }

  async function handleNext() {
    if (!selected) return;

    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }

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
      body: JSON.stringify({ ...answers, meta }),
    }).catch(() => {});

    const destination = routeForAnswers(answers);
    const params = new URLSearchParams({ area: answers.area, tempo: answers.tempo });
    setTimeout(() => router.push(`${destination}?${params.toString()}`), 500);
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1);
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
            <p className={styles.eyebrow}>Diagnóstico gratuito</p>
            <h1 className={styles.h1}>
              Descubra onde seu escritório está <em>perdendo tempo.</em>
            </h1>
            <p className={styles.p}>
              Responda 3 perguntas rápidas e receba, na hora, a recomendação certa pra sua rotina.
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
                    ETAPA {step + 1} DE {questions.length}
                  </span>
                  <strong>{Math.round(progress)}%</strong>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>

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

                <div className={styles.actions}>
                  {step > 0 ? (
                    <button type="button" className={styles.backBtn} onClick={handleBack}>
                      Voltar
                    </button>
                  ) : (
                    <span />
                  )}
                  <button type="button" className={styles.nextBtn} disabled={!selected} onClick={handleNext}>
                    {isLast ? 'Ver meu diagnóstico' : 'Continuar'} →
                  </button>
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
