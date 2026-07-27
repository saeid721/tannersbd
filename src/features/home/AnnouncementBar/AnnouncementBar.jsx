import React from 'react';
import styles from './AnnouncementBar.module.scss';

// ─── Static Announcements ──────────────────────────────────────────
const MESSAGES = [
  'LWG সনদ অর্জনে ট্যানারি প্রস্তুত করণের লক্ষ্যে “Validation Workshop”- এর আয়োজন ',
  '“কাঁচা চামড়ার গুণগত মান রক্ষায় লেস-কাট নিয়ন্ত্রণ এবং সঠিক পদ্ধতিতে চামড়া সংগ্রহ, সংরক্ষণ ও পরিবহন” শীর্ষক কর্মশালা ',
  '“দূষণ নিয়ন্ত্রণ ও সবুজ শিল্পায়নে সচেতনতা” বিষয়ক আলোচনা সভা ',
  '  এস, এ, এফ ইন্ডাস্ট্রিজ লিঃ – এ “LWG সনদ অর্জন পরবর্তী করনীয়” শীর্ষক কর্মশালা',
];

// ─── Announcement Top Bar ─────────────────────────────────────────
const AnnouncementBar = () => {
  if (!MESSAGES.length) return null;

  return (
    <div className={styles['announcement-bar']}>
      <span className={styles['announcement-bar__label']}>Recent News:</span>
      <div className={styles['announcement-bar__viewport']}>
        <div className={styles['announcement-bar__track']}>
          {[...MESSAGES, ...MESSAGES].map((msg, i) => (
            <span key={i} className={styles['announcement-bar__slide']}>{msg}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;