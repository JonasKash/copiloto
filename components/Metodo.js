import { copy } from '@/content/copiloto';
import styles from './Metodo.module.css';

export default function Metodo() {
  const { metodo } = copy;
  return (
    <section className={styles.section} id="metodo">
      <div className="wrap">
        <p className="eyebrow reveal">{metodo.eyebrow}</p>
        <h2 className="section-h reveal">{metodo.h}</h2>
        <p className="section-p reveal">{metodo.p}</p>
        <div className={styles.grid}>
          {metodo.steps.map((step) => (
            <div key={step.num} className={`${styles.card} reveal`}>
              <span className={styles.num}>{step.num}</span>
              <h3>{step.h}</h3>
              <p>{step.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
