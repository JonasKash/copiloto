'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');

    // Sem suporte a IntersectionObserver: conteúdo fica sempre visível,
    // nunca preso em opacity:0.
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
