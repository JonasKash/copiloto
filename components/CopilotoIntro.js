import { copy } from '@/content/copiloto';
import styles from './CopilotoIntro.module.css';

export default function CopilotoIntro() {
  const { copilotoIntro } = copy;
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <p className={styles.eyebrow}>{copilotoIntro.eyebrow}</p>
        <h2 className={styles.h}>{copilotoIntro.h}</h2>
        {copilotoIntro.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
