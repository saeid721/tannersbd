import React from 'react';
import styles from './SectionHeader.module.scss';
import classNames from 'classnames';

const SectionHeader = ({
  subtitle,
  titlePart1,
  titlePart2,
  description,
  centered = false,
  variant = 'light', // 'light' or 'dark'
  className = '',
}) => {
  const headerClasses = classNames(
    styles.header,
    {
      [styles['header--centered']]: centered,
      [styles[`header--${variant}`]]: variant,
    },
    className
  );

  return (
    <div className={headerClasses}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      
      <h2 className={classNames(styles.title, { [styles['title--centered']]: centered })}>
        <span className={styles.titlePart1}>{titlePart1}</span>{' '}
        <span className={styles.titlePart2}>{titlePart2}</span>
      </h2>
      
      <div className={centered ? styles.dividerCenter : styles.divider} />
      
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SectionHeader;