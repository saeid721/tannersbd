/**
 * NotFoundPage — 404 page
 */

import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppButton from '../components/common/AppButton';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <section className={styles.page}>
    <div className={styles.bg} />
    <Container className={styles.container}>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <div className={styles.divider} />
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          The page you're looking for may have moved or doesn't exist. Let's get you back on course.
        </p>
        <div className={styles.actions}>
          <AppButton as={Link} to="/" variant="gold" size="lg">
            Return Home
          </AppButton>
          <AppButton as={Link} to="/facilities" variant="outline" size="lg">
            Explore Facilities
          </AppButton>
        </div>

        {/* Quick nav */}
        <div className={styles.quickLinks}>
          <p className={styles.quickLinksLabel}>Quick Links</p>
          <div className={styles.quickLinksRow}>
            {[
              { to: '/leadership',  label: 'Leadership' },
              { to: '/gallery',     label: 'Gallery' },
              { to: '/reservation', label: 'Reservation' },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className={styles.quickLink}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default NotFoundPage;
