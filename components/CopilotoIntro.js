import { copy } from '@/content/copiloto';
import styles from './CopilotoIntro.module.css';

export default function CopilotoIntro() {
  const { copilotoIntro } = copy;
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <p className={styles.eyebrow}>{copilotoIntro.eyebrow}</p>
        <h2 className={styles.h}>{copilotoIntro.h}</h2>
        <p className={styles.sub}>{copilotoIntro.sub}</p>
        <p className={styles.text}>{copilotoIntro.text}</p>
      </div>
    </section>
  );
}
