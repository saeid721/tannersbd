// src/pages/FacilitiesPage.jsx
import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import AppButton from '../components/common/AppButton';
import styles from './FacilitiesPage.module.scss';

const CATEGORIES = ['All', 'Aquatics', 'Sports', 'Dining', 'Events', 'Fitness'];

const FACILITIES = [
  // ... facilities data
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
      delay: custom * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const FacilitiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = activeCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === activeCategory);

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
        <Container className={styles.heroContent}>
          <motion.p 
            className={styles.heroEyebrow}
            variants={heroItemVariants}
          >
            What We Offer
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Club Facilities
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Every amenity crafted for excellence — from competitive sports to refined leisure.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Category Filter ─────────────────────────────── */}
      <section className={styles.filterSection}>
        <Container>
          <motion.div 
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {CATEGORIES.map((cat, index) => (
              <motion.button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles['filterBtn--active'] : ''}`}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05 + 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Facilities Grid ─────────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.facilitiesSection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <AnimatePresence mode="wait">
            <Row className="g-4">
              {filtered.map((facility, index) => (
                <Col key={facility.id} lg={4} md={6}>
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={styles.card}>
                      <div className={styles.cardHeader}>
                        <motion.div 
                          className={styles.cardIcon}
                          whileHover={{ 
                            rotate: 10, 
                            scale: 1.15,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {facility.icon}
                        </motion.div>
                        {facility.tag && (
                          <span className={styles.cardTag}>{facility.tag}</span>
                        )}
                      </div>
                      <span className={styles.cardCategory}>{facility.category}</span>
                      <h3 className={styles.cardTitle}>{facility.title}</h3>
                      <p className={styles.cardDesc}>{facility.desc}</p>
                      <ul className={styles.featureList}>
                        {facility.features.map((f, fi) => (
                          <motion.li 
                            key={f} 
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.08 + fi * 0.05 + 0.2 
                            }}
                          >
                            <span className={styles.featureDot} />
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatePresence>

          {/* ── Reservation CTA ───────────────────────── */}
          <motion.div 
            className={styles.bottomCta}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>Ready to Experience Our Facilities?</h3>
              <p className={styles.ctaDesc}>
                Book a facility tour or make a reservation for your next visit.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <AppButton as={Link} to="/reservation" variant="gold" size="lg">
                  Make a Reservation
                </AppButton>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
};

export default FacilitiesPage;