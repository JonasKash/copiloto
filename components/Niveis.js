import { copy } from '@/content/copiloto';
import styles from './Niveis.module.css';

export default function Niveis() {
  const { niveis } = copy;
  return (
    <section className={styles.section} id="perfis">
      <div className="wrap">
        <p className="eyebrow reveal">{niveis.eyebrow}</p>
        <h2 className="section-h reveal">{niveis.h}</h2>
        <div className={styles.grid}>
          {niveis.items.map((item) => (
            <div
              key={item.level}
              className={`${styles.card} ${item.state === 'goal' ? styles.goal : ''} reveal`}
            >
              <div className={styles.dots}>
                {[1, 2, 3, 4].map((d) => (
                  <span
                    key={d}
                    className={`${styles.dot} ${d <= Number(item.level.replace(/\D/g, '')) ? styles.dotOn : ''}`}
                  />
                ))}
              </div>
              <span className={styles.level}>
                {item.level} — {item.name}
              </span>
              {item.tagline && <p className={styles.tagline}>{item.tagline}</p>}
              <p className={styles.headline}>
                {item.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <div className={styles.body}>
                {item.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {item.cta && (
                <a href="#metodo" className={styles.cta}>
                  {item.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
