/**
 * AppFooter — site-wide footer
 * Sections: Brand, Quick Links, Contact, Social
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import config from '../../../utils/config';
import logo from '../../../assets/logo.png';
import styles from './AppFooter.module.scss';

const QUICK_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/leadership',  label: 'Executive Committee' },
  { to: '/facilities',  label: 'Club Facilities' },
  { to: '/gallery',     label: 'Gallery' },
  { to: '/reservation', label: 'Reservation' },
];

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* ── Gold Top Border ───────────────────────────────── */}
      <div className={styles.topBorder} />

      <Container>
        <div className={styles.main}>
          <Row className="g-5">
            {/* ── Brand Column ────────────────────────────── */}
            <Col lg={4} md={6}>
              <div className={styles.brand}>
                {/* ✅ Logo Image */}
                <div className={styles.brandLogo}>
                  <img 
                    src={logo} 
                    alt={`${config.site.name} Logo`} 
                    className={styles.logoImg}
                  />
                </div>
                <p className={styles.brandDesc}>
                  Bangladesh's premier nautical social club — offering world-class luxury facilities, and exclusive networking.
                </p>

              </div>
            </Col>

            {/* ── Quick Links ─────────────────────────────── */}
            <Col lg={2} md={6} sm={6}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {QUICK_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className={styles.footerLink}>
                      <span className={styles.linkArrow}>›</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* ── Facilities ──────────────────────────────── */}
            <Col lg={2} md={6} sm={6}>
              <h4 className={styles.colTitle}>Facilities</h4>
              <ul className={styles.linkList}>
                {['Swimming Pool', 'Boat Jetty', 'Gym & Fitness', 'Restaurant', 'Banquet Hall', 'Tennis Court'].map((f) => (
                  <li key={f}>
                    <Link to="/facilities" className={styles.footerLink}>
                      <span className={styles.linkArrow}>›</span>
                      {f}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            {/* ── Contact ─────────────────────────────────── */}
            <Col lg={4} md={6}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>📍</span>
                  <span>{config.site.address}</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>📞</span>
                  <a href={`tel:${config.site.phone}`} className={styles.contactLink}>
                    {config.site.phone}
                  </a>
                </li>
                <li>
                  <span className={styles.contactIcon}>📞</span>
                  <a href={`tel:${config.site.telephone}`} className={styles.contactLink}>
                    {config.site.telephone}
                  </a>
                </li>
                <li>
                  <span className={styles.contactIcon}>✉</span>
                  <a href={`mailto:${config.site.email}`} className={styles.contactLink}>
                    {config.site.email}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <div className={styles.bottom}>
          {/* ── Social Icons ──────────────────────── */}
          <div className={styles.social}>
            <a href={config.social.facebook} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href={config.social.instagram} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href={config.social.twitter} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="Twitter / X">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          <p className={styles.copyright}>
            © 2017 Noakhali Club Dhaka Ltd | All rights reserved | Powered by  
            <a href="https://stitbd.com/" className={styles.copyrightLink} target="_blank" rel="noopener noreferrer"> STITBD</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;