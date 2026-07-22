/**
 * AppModal — reusable modal wrapper
 *
 * Props:
 *   show      : boolean
 *   onHide    : function
 *   title     : string
 *   size      : 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
 *   footer    : React.ReactNode
 *   children  : React.ReactNode
 *   className : string
 */

import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './AppModal.module.scss';

const AppModal = ({
  show,
  onHide,
  title,
  size = 'md',
  footer,
  children,
  className = '',
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size === 'md' ? undefined : size}
      centered
      className={`${styles.modal} ${className}`}
      contentClassName={styles.content}
      backdropClassName={styles.backdrop}
    >
      {title && (
        <Modal.Header closeButton closeVariant="white" className={styles.header}>
          <Modal.Title className={styles.title}>{title}</Modal.Title>
        </Modal.Header>
      )}

      <Modal.Body className={styles.body}>{children}</Modal.Body>

      {footer && (
        <Modal.Footer className={styles.footer}>{footer}</Modal.Footer>
      )}
    </Modal>
  );
};

export default AppModal;
