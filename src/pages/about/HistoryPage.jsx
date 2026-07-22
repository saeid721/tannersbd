// src/pages/HistoryPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './HistoryPage.module.scss';
import presidentImg from '../../assets/about-main.jpg';

const HistoryPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

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

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────── */}
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
            Est. 2017
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            History
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Want to build a better society.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Description Section ──────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.descriptionSection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <Row className="align-items-center g-5">
            {/* ── Left: Image Card ────────────────────────────── */}
            <Col lg={5}>
              <motion.div
                className={styles.imageWrapper}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img src={presidentImg} className={styles.image} alt="NCDL History" />
                <motion.div 
                  className={styles.overlay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className={styles.role}>NCDL</span>
                </motion.div>
              </motion.div>
            </Col>

            {/* ── Right: Content ──────────────────────────────── */}
            <Col lg={7}>
              <motion.div 
                className={styles.content}
                variants={contentVariants}
              >
                <motion.h2 
                  className={styles.heading}
                  variants={textVariants}
                  custom={0}
                >
                  <motion.span 
                    className={styles.titlePart1}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    OUR
                  </motion.span>{' '}
                  <motion.span 
                    className={styles.titlePart2}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    STORY
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className={styles.bio}
                  variants={textVariants}
                  custom={0.2}
                >
                  At the heart of Noakhali Club Dhaka lies a shared sense of community and purpose. Since beginning its journey on December 1st, 2017, the Club has stood as more than just a gathering place—it's a second home where values, vision, and vibrant connections come together. Built on the belief that meaningful change begins with strong relationships, the Club serves as a hub for members striving to grow personally, socially, and intellectually. Embracing the motto "Want to build a better society," our members actively pursue initiatives that balance personal development with community well-being. Through ongoing efforts in arts, culture, sports, and social events, Noakhali Club Dhaka continues to foster unity and inspire a stronger, more connected society.
                </motion.p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </>
  );
};

export default HistoryPage;