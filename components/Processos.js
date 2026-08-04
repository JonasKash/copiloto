import { copy } from '@/content/copiloto';
import styles from './Processos.module.css';

export default function Processos() {
  return (
    <section className={styles.section} id="agentes">
      <div className="wrap">
        <p className="eyebrow reveal">Os processos, não as ferramentas</p>
        <h2 className="section-h reveal">Seis processos que deixam de depender só de você.</h2>
        <p className="section-p reveal">Cada agente abaixo é só o mecanismo. O que muda o escritório é o processo por trás dele.</p>
      </div>

      {copy.processos.map((processo, i) => (
        <div key={processo.h} className={`${styles.row} ${i % 2 === 1 ? styles.rev : ''}`}>
          <div>
            <p className={`${styles.num} reveal`}>{processo.num}</p>
            <h3 className={`${styles.h} reveal`}>{processo.h}</h3>
            <p className={`${styles.problem} reveal`}>{processo.problem}</p>
            <p className={`${styles.context} reveal`}>{processo.context}</p>
            <p className={`${styles.transform} reveal`}>{processo.transform}</p>
            <p className={`${styles.agentLine} reveal`}>
              O Copiloto opera esse processo através do <strong>{processo.agent}</strong>.
            </p>
            <ul className={`${styles.results} reveal`}>
              {processo.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.fv} reveal`}>
            <div className={styles.fvHeader}>
              <span className={`${styles.fdot} ${styles.fdotR}`} />
              <span className={`${styles.fdot} ${styles.fdotY}`} />
              <span className={`${styles.fdot} ${styles.fdotG}`} />
              <span className={styles.fvTab}>{processo.agent}</span>
            </div>
            <div className={styles.fvBody}>
              {processo.results.map((item, idx) => (
                <div key={item} className={styles.barRow}>
                  <span className={styles.barLabel}>{item.split(' ').slice(0, 2).join(' ')}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${72 + idx * 9}%` }} />
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
