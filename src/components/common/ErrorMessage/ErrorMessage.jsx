import React from 'react';
import { Alert } from 'react-bootstrap';
import styles from './ErrorMessage.module.scss';

/**
 * ErrorMessage — displays API or form errors gracefully
 * Props:
 *   message : string
 *   onRetry : function (optional — shows Retry button)
 */
const ErrorMessage = ({ message, onRetry }) => {
  if (!message) return null;

  return (
    <div className={styles.wrap}>
      <Alert variant="danger" className={styles.alert}>
        <span className={styles.icon}>⚠</span>
        <span className={styles.text}>{message}</span>
        {onRetry && (
          <button className={styles.retry} onClick={onRetry}>
            Retry
          </button>
        )}
      </Alert>
    </div>
  );
};

export default ErrorMessage;
