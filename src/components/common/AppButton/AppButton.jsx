// src/components/common/AppButton.jsx
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './AppButton.module.scss';

const AppButton = ({
  variant = 'gold',
  size = 'md',
  bgVariant = 'dark',
  loading = false,
  disabled = false,
  fullWidth = false,
  children,
  className = '',
  onClick,
  as,
  ...rest
}) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    styles[`btn--bg-${bgVariant}`],
    fullWidth ? styles['btn--full'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.div
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={styles.buttonWrapper}
    >
      <Button
        as={as}
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        {...rest}
      >
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className={styles.spinner}
            />
            <span className="ms-2">Loading…</span>
          </>
        ) : (
          children
        )}
        {!loading && !disabled && (
          <motion.span
            className={styles.ripple}
            initial={{ scale: 0, opacity: 0.5 }}
            whileHover={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </Button>
    </motion.div>
  );
};

export default AppButton;