import { copy } from '@/content/copiloto';
import styles from './Checklist.module.css';

export default function Checklist() {
  const { checklist } = copy;
  return (
    <section className={styles.section}>
      <div className="wrap">
        <p className="eyebrow reveal" style={{ textAlign: 'center' }}>{checklist.eyebrow}</p>
        <h2 className="section-h reveal" style={{ textAlign: 'center', margin: '0 auto 32px' }}>
          {checklist.h}
        </h2>
        <div className={`${styles.list} reveal`}>
          {checklist.items.map((item) => (
            <div key={item} className={styles.item}>
              <span className={styles.check}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
