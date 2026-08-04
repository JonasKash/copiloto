import { copy } from '@/content/copiloto';
import styles from './CompraReal.module.css';

export default function CompraReal() {
  const { compraReal } = copy;
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <p className={styles.eyebrow}>{compraReal.eyebrow}</p>
        <h2 className={styles.h}>{compraReal.h}</h2>
        {compraReal.text.map((paragraph, i) => (
          <p key={paragraph} className={i === 1 ? styles.highlight : styles.text}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
