/**
 * AppCard — versatile card component
 *
 * Props:
 *   image      : string (src URL)
 *   imageAlt   : string
 *   tag        : string (small badge/category label)
 *   title      : string
 *   description: string
 *   footer     : React.ReactNode
 *   onClick    : function
 *   className  : string
 *   horizontal : boolean (image left, content right)
 *   overlay    : boolean (content overlaid on image)
 */

import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './AppCard.module.scss';

const AppCard = ({
  image,
  imageAlt = '',
  tag,
  title,
  description,
  footer,
  onClick,
  className = '',
  horizontal = false,
  overlay = false,
}) => {
  const classes = [
    styles.card,
    horizontal ? styles['card--horizontal'] : '',
    overlay ? styles['card--overlay'] : '',
    onClick ? styles['card--clickable'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Card className={classes} onClick={onClick}>
      {image && (
        <div className={styles.imageWrap}>
          <Card.Img
            variant={horizontal ? 'left' : 'top'}
            src={image}
            alt={imageAlt}
            className={styles.image}
          />
          {overlay && <div className={styles.overlayGradient} />}
        </div>
      )}

      <Card.Body className={styles.body}>
        {tag && <span className={styles.tag}>{tag}</span>}
        {title && <Card.Title className={styles.title}>{title}</Card.Title>}
        {description && <Card.Text className={styles.description}>{description}</Card.Text>}
        {footer && <div className={styles.footer}>{footer}</div>}
      </Card.Body>
    </Card>
  );
};

export default AppCard;
