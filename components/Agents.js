import { copy } from '@/content/copiloto';
import styles from './Agents.module.css';

export default function Agents() {
  return (
    <section className={styles.section} id="agentes">
      {copy.agents.map((agent, i) => (
        <div key={agent.h} className={`${styles.row} ${i % 2 === 1 ? styles.rev : ''}`}>
          <div>
            <p className={`${styles.num} reveal`}>{agent.num}</p>
            <h2 className={`${styles.h} reveal`}>{agent.h}</h2>
            <p className={`${styles.p} reveal`}>{agent.p}</p>
            <ul className={`${styles.list} reveal`}>
              {agent.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.fv} reveal`}>
            <div className={styles.fvHeader}>
              <span className={`${styles.fdot} ${styles.fdotR}`} />
              <span className={`${styles.fdot} ${styles.fdotY}`} />
              <span className={`${styles.fdot} ${styles.fdotG}`} />
              <span className={styles.fvTab}>{agent.h.replace('.', '')}</span>
            </div>
            <div className={styles.fvBody}>
              {agent.list.map((item, idx) => (
                <div key={item} className={styles.barRow}>
                  <span className={styles.barLabel}>{item.split(' ').slice(0, 2).join(' ')}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${72 + idx * 7}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
