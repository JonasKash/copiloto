import { copy as defaultCopy, HOTMART_URL } from '@/content/copiloto';
import styles from './Hero.module.css';

const AGENT_ROWS = [
  { name: 'Pesquisador', meta: 'Jurisprudência STJ/STF/TRTs', color: '#E0E7FF', text: '#3730A3', initials: 'PE' },
  { name: 'Redator de Petições', meta: 'Case Memory por processo', color: '#FCE7F3', text: '#9D174D', initials: 'RP' },
  { name: 'Gerenciador de Prazos', meta: 'Alerta antes do vencimento', color: '#D1FAE5', text: '#065F46', initials: 'GP' },
];

export default function Hero({ copy = defaultCopy }) {
  const { hero } = copy;
  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} wrap`}>
        <div className={styles.content}>
          <h1 className={styles.h1}>{hero.h1}</h1>
          <p className={styles.sub}>{hero.sub}</p>
          <div className={styles.actions}>
            <a href={HOTMART_URL} className="btn btn-black btn-large">
              {hero.ctaPrimary} →
            </a>
            <a href="#agentes" className="btn btn-outline btn-large">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className={`${styles.visual} reveal`}>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <span className={`${styles.dot} ${styles.dotR}`} />
              <span className={`${styles.dot} ${styles.dotY}`} />
              <span className={`${styles.dot} ${styles.dotG}`} />
              <span className={styles.url}>app.copilotojuridico.com.br</span>
            </div>
            <div className={styles.body}>
              {AGENT_ROWS.map((row) => (
                <div key={row.name} className={styles.row}>
                  <span
                    className={styles.avatar}
                    style={{ background: row.color, color: row.text }}
                  >
                    {row.initials}
                  </span>
                  <div className={styles.rowInfo}>
                    <div className={styles.rowName}>{row.name}</div>
                    <div className={styles.rowMeta}>{row.meta}</div>
                  </div>
                  <span className={styles.rowChip}>ativo</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
