import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for scroll-triggered animations using Framer Motion's useInView.
 * Provides a `ref` and a `controls` object to be used with `motion` components.
 * @param {object} options - Configuration options.
 * @param {boolean} options.once - If true, the animation triggers only once.
 * @param {number} options.amount - The amount of the element that must be in view (0-1).
 * @returns {{ ref: React.RefObject, controls: any, inView: boolean }}
 */
export const useScrollAnimation = ({ once = true, amount = 0.15 } = {}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return { ref, inView };
};