'use client';

import { useLayoutEffect, useRef } from 'react';

/**
 * Tiny client component that adds parallax scroll effect to the hero background.
 * Targets the element by ID to avoid wrapping the image in a client boundary.
 */
export function ParalaxScroll() {
  const attached = useRef(false);

  useLayoutEffect(() => {
    if (attached.current) return;
    attached.current = true;

    const el = document.getElementById('hero-bg');
    if (!el) return;

    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
