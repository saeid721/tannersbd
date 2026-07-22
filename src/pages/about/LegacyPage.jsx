// src/pages/LegacyPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import styles from './LegacyPage.module.scss';
import AppButton from '../../components/common/AppButton';
import presidentImg from '../../assets/about-main.jpg';

const LegacyPage = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const visionRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  // Hero animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
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
        delay: custom * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    }
  };

  const stats = [
    { value: '1,200+', label: 'Global Members' },
    { value: '30+', label: 'Luxury Boats' },
    { value: '02+', label: 'Premium Restaurants' },
    { value: '10+', label: 'Years Registry' },
  ];

  const visionCards = [
    {
      icon: '👁️',
      title: 'Our Vision',
      text: 'To be the benchmark for luxury boating and social clubs in South Asia, recognized for our commitment to quality and prestige.',
      className: styles.visionCardDark
    },
    {
      icon: '🎯',
      title: 'Our Mission',
      text: 'To foster a vibrant community through exceptional waterfront experiences, elite networking, and world-class hospitality.',
      className: styles.visionCardGold
    },
    {
      icon: '💎',
      title: 'Our Values',
      text: 'Integrity, Excellence, Heritage, and Community are the pillars that support everything we do at Noakhali Club Dhaka.',
      className: styles.visionCardLight
    }
  ];

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
            About the Club
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Our Legacy & Vision
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
            <Col lg={5}>
              <motion.div
                className={styles.imageWrapper}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img src={presidentImg} className={styles.image} alt="NCDL Legacy" />
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

            <Col lg={7}>
              <motion.div 
                className={styles.content}
                variants={contentVariants}
              >
                <motion.h2 className={styles.heading}>
                  <motion.span 
                    className={styles.titlePart1}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Legacy &
                  </motion.span>{' '}
                  <motion.span 
                    className={styles.titlePart2}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    History
                  </motion.span>
                </motion.h2>
                
                {[
                  "Welcome to Noakhali Club Dhaka Ltd (NCDL), the distinguished destination for heritage, connection, and community in the heart of the capital. Since our founding in 2017, NCDL has served as a premier social hub, dedicated to fostering the traditions and spirit of our roots while providing a sophisticated environment for our members for over a decade.",
                  "The Noakhali Club Dhaka was born from a shared vision to create a space where identity and excellence meet. It stands as a unique institution in Dhaka, offering a bridge between our rich cultural history and the modern urban lifestyle. While we take immense pride in our heritage, the club is a dynamic center for recreation, featuring top-tier facilities for tennis, squash, billiards, and a variety of other indoor and outdoor sports.",
                  "NCDL is more than just a club; it is a sanctuary where families gather to unwind and professionals build lasting networks. This platform is designed to keep our community informed, celebrate our collective achievements, and highlight upcoming milestones. As we continue to evolve, the engagement and insights of our members remain the heartbeat of our progress."
                ].map((text, index) => (
                  <motion.p 
                    key={index}
                    className={styles.bio}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + (index * 0.15),
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* ── Vision / Mission / Values ──────────────────────────── */}
      <motion.section 
        ref={visionRef}
        className={styles.visionSection}
        initial="hidden"
        animate={visionInView ? "visible" : "hidden"}
      >
        <Container>
          <Row className="g-4 justify-content-center">
            {visionCards.map((card, index) => (
              <Col key={card.title} lg={4} md={6}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`${styles.visionCard} ${card.className}`}>
                    <motion.div 
                      className={styles.visionIcon}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className={styles.visionTitle}>{card.title}</h3>
                    <p className={styles.visionText}>{card.text}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* ── Stats Bar ───────────────────────────────────────────── */}
      <motion.section 
        ref={statsRef}
        className={styles.statsSection}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
      >
        <Container>
          <Row className="text-center g-4">
            {stats.map((stat, index) => (
              <Col key={stat.label} xs={6} md={3}>
                <motion.div
                  custom={index}
                  variants={statVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={styles.statValue}
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      {/* ── CTA Section ─────────────────────────────────────────── */}
      <motion.section 
        ref={ctaRef}
        className={styles.ctaSection}
        variants={ctaVariants}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
      >
        <Container className="text-center">
          <motion.h2 
            className={styles.ctaTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Ready to witness our legacy?
          </motion.h2>
          <motion.p 
            className={styles.ctaDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We invite you to visit our premises and experience the atmosphere first-hand. Our membership committee is ready to assist you.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <AppButton as={Link} to="/reservation" variant="gold" size="lg">
                BOOK A VISIT
              </AppButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <AppButton as={Link} to="/" variant="outline" size="lg">
                Check Membership Requirements →
              </AppButton>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
};

export default LegacyPage;