import { copy } from '@/content/copiloto';
import styles from './CrescerVsTrabalhar.module.css';

export default function CrescerVsTrabalhar() {
  const { crescerVsTrabalhar: c } = copy;
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className="section-h" style={{ marginBottom: 4 }}>{c.h}</h2>
        <p className={styles.sub}>{c.sub}</p>
        <p className={styles.text}>{c.text}</p>
        <div className={styles.compare}>
          <div className={styles.col}>
            <span className={styles.colLabel}>📈 {c.left.label}</span>
            <p>{c.left.text}</p>
          </div>
          <div className={styles.col}>
            <span className={styles.colLabel}>📈 {c.right.label}</span>
            <p>{c.right.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
