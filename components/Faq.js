'use client';

import { useState } from 'react';
import { copy } from '@/content/copiloto';
import styles from './Faq.module.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { faq } = copy;

  return (
    <section className={styles.section} id="faq">
      <div className="wrap">
        <p className="eyebrow reveal">{faq.eyebrow}</p>
        <h2 className="section-h reveal">{faq.h}</h2>
        <div className={`${styles.list} reveal`}>
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.q}
                  <span className={styles.iconCircle}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1V9M1 5H9" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className={styles.answer}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
