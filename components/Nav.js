import { copy, HOTMART_URL } from '@/content/copiloto';
import styles from './Nav.module.css';

export default function Nav() {
  const { nav } = copy;
  return (
    <nav className={styles.nav}>
      <div className={`${styles.inner} wrap`}>
        <a href="#" className={styles.logo}>
          <span className={styles.mark}>W</span>
          {nav.logo}
        </a>
        <div className={styles.links}>
          {nav.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.actions}>
          <a href={HOTMART_URL} className={styles.cta}>
            {nav.ctaLabel}
          </a>
        </div>
      </div>
    </nav>
  );
}
