import { copy } from '@/content/copiloto';
import styles from './Trifecta.module.css';

export default function Trifecta() {
  const { trifecta } = copy;
  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className="eyebrow reveal">{trifecta.eyebrow}</p>
        <h2 className="section-h reveal">{trifecta.h}</h2>
        <div className={styles.grid}>
          {trifecta.cards.map((card) => (
            <div key={card.vs} className={`${styles.card} reveal`}>
              <span className={styles.vsTag}>{card.vs}</span>
              <h3>{card.h3}</h3>
              <p>{card.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
