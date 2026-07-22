import React from 'react';
import styles from './AnnouncementBar.module.scss';

// ─── Static Announcements ──────────────────────────────────────────
const MESSAGES = [
  'Bangladesh Leather & Footwear Expo (BLF) — Sept. 24-26, 2026 at ICCB, Dhaka.',
  'Membership renewal for 2026 is now open. Contact the BTA office for details.',
  'BTA General Meeting scheduled — check the Notice page for date and venue.',
  'New members are welcome to join the Bangladesh Tanners Association.',
  'Visit our Gallery for highlights from previous industry events.',
];

// ─── Announcement Top Bar ─────────────────────────────────────────
const AnnouncementBar = () => {
  if (!MESSAGES.length) return null;

  return (
    <div className={styles['announcement-bar']}>
      <div className={styles['announcement-bar__track']}>
        {/* Duplicate for seamless loop */}
        {[...MESSAGES, ...MESSAGES].map((msg, i) => (
          <span key={i} className={styles['announcement-bar__slide']}>{msg}</span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;