// src/hooks/useParallax.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const yPos = rect.top + scrolled;
      const offset = (scrolled - yPos) * speed;
      
      gsap.to(element, {
        y: offset,
        duration: 0.1,
        ease: 'none',
        overwrite: 'auto',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

export default useParallax;