import React from 'react';
import styles from './LoadingSpinner.module.scss';

/**
 * LoadingSpinner — full-section loading indicator
 * Props:
 *   fullPage : boolean — centers in viewport
 *   size     : 'sm' | 'md' | 'lg'
 *   label    : string
 */
const LoadingSpinner = ({ fullPage = false, size = 'md', label = 'Loading…' }) => {
  return (
    <div className={`${styles.wrap} ${fullPage ? styles['wrap--fullPage'] : ''}`}>
      <div className={`${styles.ring} ${styles[`ring--${size}`]}`}>
        <div /><div /><div /><div />
      </div>
      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
};

export default LoadingSpinner;
