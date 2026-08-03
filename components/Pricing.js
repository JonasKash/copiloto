import { copy, HOTMART_URL } from '@/content/copiloto';
import styles from './Pricing.module.css';

export default function Pricing() {
  const { pricing } = copy;
  const { plan } = pricing;

  return (
    <section className={styles.section} id="preco">
      <div className="wrap">
        <p className="eyebrow reveal" style={{ textAlign: 'center' }}>{pricing.eyebrow}</p>
        <h2 className="section-h reveal" style={{ textAlign: 'center', margin: '0 auto 14px' }}>
          {pricing.h}
        </h2>
        <p className="section-p reveal" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
          {pricing.p}
        </p>

        <div className={`${styles.card} reveal`}>
          <span className={styles.badge}>{plan.badge}</span>
          <div className={styles.name}>{plan.name}</div>
          <div className={styles.price}>{plan.price}</div>
          <div className={styles.period}>{plan.period}</div>
          <div className={styles.div} />
          <ul className={styles.feats}>
            {plan.features.map((feature) => (
              <li key={feature}>
                <span className={styles.chk}>
                  <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <a href={HOTMART_URL} className={styles.ctaBtn}>
            {plan.ctaLabel}
          </a>
          <p className={styles.guarantee}>{plan.guarantee}</p>
        </div>
      </div>
    </section>
  );
}
