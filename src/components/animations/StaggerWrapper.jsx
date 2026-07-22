// src/components/animations/StaggerWrapper.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

export const StaggerWrapper = ({
  children,
  staggerDelay = 0.08,
  delay = 0,
  variant = 'fadeUp',
  className = '',
  once = true,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1] 
        }
      }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants[variant] || itemVariants.fadeUp}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerWrapper;