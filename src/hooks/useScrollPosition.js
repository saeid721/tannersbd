/**
 * useScrollPosition — tracks vertical scroll offset
 * Usage: const scrollY = useScrollPosition();
 */

import { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';

const useScrollPosition = (debounceMs = 10) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrollY(window.pageYOffset);
    }, debounceMs);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debounceMs]);

  return scrollY;
};

export default useScrollPosition;
