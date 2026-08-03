import { copy } from '@/content/copiloto';
import { WHO_FOR_ICONS } from './WhoForIcons';
import styles from './WhoFor.module.css';

export default function WhoFor() {
  const { whoFor } = copy;
  return (
    <>
      <section className={styles.section}>
        <div className="wrap">
          <p className="eyebrow reveal">{whoFor.eyebrow}</p>
          <h2 className="section-h reveal">{whoFor.h}</h2>
          <div className={styles.grid}>
            {whoFor.cards.map((card) => {
              const Icon = WHO_FOR_ICONS[card.icon];
              return (
                <div key={card.h3} className={`${styles.card} reveal`}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>
                  <h3>{card.h3}</h3>
                  <p>{card.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={styles.notStrip}>
        <div className={`${styles.notInner} wrap reveal`}>
          <span className={styles.notLabel}>Não é pra</span>
          {whoFor.notFor.map((item) => (
            <span key={item} className={styles.notTag}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
