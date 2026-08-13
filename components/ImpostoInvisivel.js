import { copy } from '@/content/copiloto';
import styles from './ImpostoInvisivel.module.css';

export default function ImpostoInvisivel() {
  const { impostoInvisivel: c } = copy;
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <p className="eyebrow">{c.eyebrow}</p>
        <h2 className="section-h">{c.h}</h2>
        <p className={styles.intro}>{c.intro}</p>
        <ul className={styles.list}>
          {c.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className={styles.outro}>...{c.outro}</p>
        {c.closing.map((line) => (
          <p key={line} className={styles.closing}>{line}</p>
        ))}
      </div>
    </section>
  );
}
