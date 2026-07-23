// src/pages/NewsPage.jsx
import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './NewsPage.module.scss';
import { NEWS_DATA } from '../data/newsData';

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const noticeVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.98 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.06,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const ref = useRef(null);
  const totalPages = 3;
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const nonPinnedNotices = NEWS_DATA.filter((n) => !n.pinned);
  const pinnedNotice = NEWS_DATA.find((n) => n.pinned);
  const serialNotices = nonPinnedNotices;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <motion.div
        className={styles.hero}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className={styles.heroBg}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div 
          className={styles.heroPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <Container className={styles.heroContent}>
          <motion.p 
            className={styles.heroEyebrow}
            variants={heroItemVariants}
          >
            Official Communication
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Latest News
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Official announcements, circulars and updates for all club members
            and stakeholders.
          </motion.p>
        </Container>
      </motion.div>

      <motion.div 
        className={styles.sectionDivider}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ transformOrigin: 'left' }}
      />

      {/* ── Notice Section ───────────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.noticeSection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          {/* News List */}
          <AnimatePresence mode="wait">
            <div className={styles.noticeList}>
              {/* Pinned Notice */}
              {pinnedNotice && (
                <motion.div 
                  className={`${styles.noticeItem} ${styles.noticePinned}`}
                  variants={noticeVariants}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 5 }}
                >
                  <Link to={`/news/${pinnedNotice.id}`} className={styles.noticeLink}>
                    <div className={styles.noticeBody}>
                      <div className={styles.noticeTags}>
                        {pinnedNotice.tags.map((tag) => (
                          <motion.span 
                            key={tag.label} 
                            className={`${styles.tag} ${styles[`tag_${tag.type}`]}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {tag.label}
                          </motion.span>
                        ))}
                      </div>
                      <h3 className={styles.noticeTitle}>{pinnedNotice.title}</h3>
                      <p className={styles.noticeExcerpt}>{pinnedNotice.excerpt}</p>
                      <div className={styles.noticeMeta}>
                        <span className={styles.noticeDate}>{pinnedNotice.date}</span>
                        <span className={styles.readMore}>Read Full →</span>
                      </div>
                    </div>
                    <div className={styles.noticeThumb}>
                      <img src={pinnedNotice.image} alt={pinnedNotice.title} />
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Serial Notices */}
              {serialNotices.map((notice, idx) => (
                <motion.div 
                  key={notice.id} 
                  className={styles.noticeItem}
                  variants={noticeVariants}
                  custom={idx + 1}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 5 }}
                >
                  <Link to={`/news/${notice.id}`} className={styles.noticeLink}>
                    <div className={styles.noticeBody}>
                      <div className={styles.noticeTags}>
                        {notice.tags.map((tag) => (
                          <motion.span 
                            key={tag.label} 
                            className={`${styles.tag} ${styles[`tag_${tag.type}`]}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.06 + 0.1 }}
                          >
                            {tag.label}
                          </motion.span>
                        ))}
                      </div>
                      <h3 className={styles.noticeTitle}>{notice.title}</h3>
                      <p className={styles.noticeExcerpt}>{notice.excerpt}</p>
                      <div className={styles.noticeMeta}>
                        <span className={styles.noticeDate}>{notice.date}</span>
                        <span className={styles.readMore}>Read Full →</span>
                      </div>
                    </div>
                    <div className={styles.noticeThumb}>
                      <img src={notice.image} alt={notice.title} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {/* Pagination */}
          <motion.div 
            className={styles.pagination}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              className={styles.pgArrow}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </motion.button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <motion.button
                key={p}
                className={`${styles.pgBtn} ${currentPage === p ? styles.pgBtnActive : ''}`}
                onClick={() => setCurrentPage(p)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: p * 0.05 + 0.5 }}
              >
                {p}
              </motion.button>
            ))}
            <motion.button
              className={styles.pgArrow}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </motion.button>
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
};

export default NewsPage;