// src/pages/EventsPage.jsx
import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './EventsPage.module.scss';

const FILTERS = ['All Events', 'Sports', 'Cultural', 'Social', 'Annual'];

const EVENTS = [
  {
    id: 1,
    day: '28',
    month: 'Apr',
    type: 'Annual Sports',
    filter: 'Sports',
    title: 'Annual Cricket Tournament 2025',
    venue: 'Mirpur Cricket Ground, Dhaka',
    time: '9:00 AM – 6:00 PM',
    status: 'open',
    statusLabel: 'Registration Open',
  },
  // ... remaining events data
];

const STATS = [
  { num: '7+', label: 'Years Active' },
  { num: '40+', label: 'Events per Year' },
  { num: '500+', label: 'Members' },
  { num: '12+', label: 'Districts Represented' },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.06,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const ref = useRef(null);
  const statsRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });

  const filtered =
    activeFilter === 'All Events'
      ? EVENTS
      : EVENTS.filter((e) => e.filter === activeFilter);

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
            Community & Culture
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Club Events
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Bringing members together through sports, culture, and meaningful
            celebrations across the year.
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

      {/* ── Events Section ───────────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.eventsSection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <motion.p 
            className={styles.sectionLabel}
            variants={heroItemVariants}
          >
            Upcoming & Recent
          </motion.p>
          <motion.h2 
            className={styles.sectionTitle}
            variants={heroItemVariants}
          >
            Events Calendar
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            variants={heroItemVariants}
          >
            Stay connected with all club activities. Members must register in
            advance for ticketed events. Guests must be accompanied by members.
          </motion.p>

          {/* Filter */}
          <motion.div 
            className={styles.filterRow}
            variants={heroItemVariants}
          >
            {FILTERS.map((f, index) => (
              <motion.button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(f)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              className={styles.eventsGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((event, index) => (
                <motion.div
                  key={event.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  className={styles.eventCard}
                >
                  <div className={styles.eventCardTop}>
                    <motion.div 
                      className={styles.eventDateRow}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.06 + 0.1 
                      }}
                    >
                      <div className={styles.eventDateBox}>
                        <div className={styles.eventDay}>{event.day}</div>
                        <div className={styles.eventMonth}>{event.month}</div>
                      </div>
                      <span className={styles.eventType}>{event.type}</span>
                    </motion.div>
                    <motion.h3 
                      className={styles.eventTitle}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.06 + 0.15 
                      }}
                    >
                      {event.title}
                    </motion.h3>
                    <motion.p 
                      className={styles.eventVenue}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.06 + 0.2 
                      }}
                    >
                      📍 {event.venue}
                    </motion.p>
                  </div>
                  <div className={styles.eventCardBottom}>
                    <span className={styles.eventTime}>⏰ {event.time}</span>
                    <div className={styles.eventActions}>
                      <motion.span 
                        className={`${styles.eventStatus} ${styles[`status_${event.status}`]}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.06 + 0.25 
                        }}
                      >
                        {event.statusLabel}
                      </motion.span>
                      <motion.button 
                        className={styles.eventCta}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.status === 'full' ? 'Waitlist' : 'Register'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Bar */}
          <motion.div 
            ref={statsRef}
            className={styles.statsBar}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {STATS.map((s, index) => (
              <motion.div 
                key={s.label} 
                className={styles.statItem}
                custom={index}
                variants={statVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={styles.statNum}
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {s.num}
                </motion.div>
                <div className={styles.statLabel}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
};

export default EventsPage;