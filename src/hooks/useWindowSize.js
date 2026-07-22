/**
 * useWindowSize — returns current browser window dimensions
 * Usage: const { width, height } = useWindowSize();
 */

import { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 150);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    ...size,
    isMobile:  size.width < 576,
    isTablet:  size.width >= 576 && size.width < 992,
    isDesktop: size.width >= 992,
  };
};

export default useWindowSize;
