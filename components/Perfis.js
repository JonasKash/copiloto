import { copy } from '@/content/copiloto';
import styles from './Perfis.module.css';

export default function Perfis() {
  const { perfis } = copy;
  return (
    <section className={styles.section} id="perfis">
      <div className="wrap">
        <p className="eyebrow reveal">{perfis.eyebrow}</p>
        <h2 className="section-h reveal">{perfis.h}</h2>
        <div className={styles.grid}>
          {perfis.items.map((perfil) => (
            <div key={perfil.num} className={`${styles.card} reveal`}>
              <span className={styles.num}>{perfil.num}</span>
              <h3 className={styles.name}>{perfil.name}</h3>
              {perfil.tagline && <p className={styles.tagline}>{perfil.tagline}</p>}
              <p className={styles.headline}>
                {perfil.headline.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <div className={styles.body}>
                {perfil.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <a href="#metodo" className={styles.cta}>
                {perfil.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
