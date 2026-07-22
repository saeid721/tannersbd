// src/components/common/SkeletonLoader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkeletonLoader.module.scss';

const shimmerVariants = {
  initial: { x: '-100%' },
  animate: { 
    x: '100%',
    transition: { 
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear',
    }
  }
};

export const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={styles.skeletonCard}>
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonTitle} />
              <div className={styles.skeletonText} />
              <div className={styles.skeletonText} />
            </div>
            <motion.div
              className={styles.shimmer}
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        );
      case 'text':
        return (
          <div className={styles.skeletonTextLine}>
            <motion.div
              className={styles.shimmer}
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.skeletonWrapper}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeletonItem}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;