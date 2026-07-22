// src/components/animations/AnimatedWrapper.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * AnimatedWrapper - Reusable animation wrapper with scroll reveal
 * Supports fade, slide, scale, and stagger animations
 */
export const AnimatedWrapper = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.15,
  className = '',
  customStyles = {},
  ...props
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay, 
          ease: [0.22, 1, 0.36, 1] 
        }
      }
    },
    fadeDown: {
      hidden: { opacity: 0, y: -40 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
    },
    none: {
      hidden: { opacity: 1 },
      visible: { opacity: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      style={customStyles}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;