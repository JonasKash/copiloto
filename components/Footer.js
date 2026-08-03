import { copy } from '@/content/copiloto';
import styles from './Footer.module.css';

export default function Footer() {
  const { footer } = copy;
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <span className={styles.mark}>W</span>
              {footer.brand}
            </div>
            <p>{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title} className={styles.col}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <p>{footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
