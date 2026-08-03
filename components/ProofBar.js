import { Fragment } from 'react';
import { copy } from '@/content/copiloto';
import styles from './ProofBar.module.css';

export default function ProofBar() {
  return (
    <div className={styles.bar}>
      <div className={`${styles.inner} wrap`}>
        {copy.proofBar.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && <span className={styles.divider} />}
            <div className={`${styles.stat} reveal`}>
              <div className={styles.num}>{stat.num}</div>
              <div className={styles.lbl}>{stat.label}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
