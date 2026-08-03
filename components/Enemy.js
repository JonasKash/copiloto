import { copy as defaultCopy } from '@/content/copiloto';
import styles from './Enemy.module.css';

export default function Enemy({ copy = defaultCopy }) {
  const { enemy } = copy;
  return (
    <section className={styles.section} id="como-funciona">
      <div className={`${styles.inner} wrap`}>
        <div className="reveal">
          <p className="eyebrow">{enemy.eyebrow}</p>
          <h2 className="section-h">{enemy.h}</h2>
          <p className="section-p">{enemy.p}</p>
          <p className={styles.quote}>&ldquo;{enemy.quote}&rdquo;</p>
        </div>

        <div className={`${styles.vs} reveal`}>
          <div className={`${styles.col} ${styles.bad}`}>
            <div className={`${styles.colLabel} ${styles.badLabel}`}>{enemy.bad.label}</div>
            <ul>
              {enemy.bad.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.col} ${styles.good}`}>
            <div className={`${styles.colLabel} ${styles.goodLabel}`}>{enemy.good.label}</div>
            <ul>
              {enemy.good.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
