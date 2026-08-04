import { copy } from '@/content/copiloto';
import styles from './AreaBlock.module.css';

export default function AreaBlock({ area }) {
  const { area: areaCopy } = copy;
  const match = area ? areaCopy.items[area] : null;
  const content = match || areaCopy.fallback;

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} wrap reveal`}>
        <p className={styles.eyebrow}>{areaCopy.eyebrow}</p>
        <h2 className={styles.h}>{content.h}</h2>
        <p className={styles.text}>{content.text}</p>
      </div>
    </section>
  );
}
