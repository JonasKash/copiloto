import { copy, HOTMART_URL } from '@/content/copiloto';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  const { finalCta } = copy;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{finalCta.eyebrow}</p>
        <h2 className={styles.h2}>{finalCta.h}</h2>
        <p className={styles.p}>{finalCta.p}</p>
        <div className={styles.actions}>
          <a href={HOTMART_URL} className="btn-white">
            {finalCta.ctaPrimary} →
          </a>
          <a href="#agentes" className="btn-ghost-white">
            {finalCta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
