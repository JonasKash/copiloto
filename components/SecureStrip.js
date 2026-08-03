import { copy } from '@/content/copiloto';
import styles from './SecureStrip.module.css';

export default function SecureStrip() {
  return (
    <div className={styles.secure}>
      {copy.secureStrip.map((item) => (
        <div key={item} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
}
