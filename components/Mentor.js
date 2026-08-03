import Image from 'next/image';
import { copy } from '@/content/copiloto';
import styles from './Mentor.module.css';
import mentorPhoto from '../public/assets/wladmir.png';

export default function Mentor() {
  const { mentor } = copy;
  return (
    <section className={styles.section} id="mentor">
      <div className={`${styles.inner} wrap`}>
        <div className={`${styles.photoWrap} reveal`}>
          <Image
            src={mentorPhoto}
            alt={mentor.name}
            className={styles.photo}
            placeholder="blur"
            sizes="(min-width: 960px) 360px, 80vw"
          />
        </div>
        <div className="reveal">
          <p className="eyebrow">{mentor.eyebrow}</p>
          <h2 className="section-h">{mentor.h}</h2>
          <p className="section-p" style={{ marginBottom: 24 }}>
            {mentor.p}
          </p>
          <p className={styles.quote}>&ldquo;{mentor.quote}&rdquo;</p>
          <div className={styles.byline}>
            <strong>{mentor.name}</strong>
            <span>{mentor.credentials} · {mentor.instagram}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
