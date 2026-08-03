import { copy } from '@/content/copiloto';
import styles from './FifteenRule.module.css';

export default function FifteenRule() {
  const { fifteenRule } = copy;
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <span className={styles.badge}>{fifteenRule.label}</span>
        <p className={styles.text}>{fifteenRule.text}</p>
      </div>
    </section>
  );
}
