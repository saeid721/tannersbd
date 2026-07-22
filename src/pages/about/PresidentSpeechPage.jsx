// src/pages/PresidentSpeechPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './PresidentSpeechPage.module.scss';
import presidentImg from '../../assets/president.jpg';

const PRESIDENT = {
  name: 'Mohd. Ataur Rahman Bhuiyan',
  title: 'President, NCDL',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'The President',
  quote: "Welcome to Noakhali Club Dhaka Ltd (NCDL)—a destination where elegance meets community, and tradition blends seamlessly with modern leisure.",
  bio: "It is with great pleasure that I welcome you to the official website of Noakhali Club Dhaka Ltd. As the President of this esteemed Club, I am happy to extend my warmest greetings to each of you. It's my privilege to lead our inclusive community of Members who share a common passion for excellence, camaraderie, and the pursuit of a dynamic and fulfilling lifestyle. Remaining a central focal point for a wide range of social, cultural, and recreational activities within our cherished city. Whether you're seeking a serene environment to relax, a platform to network with like-minded individuals, or an opportunity to engage in sports and cultural events, Noakhali Club Dhaka Ltd has something special for you. It's a place where individuals from diverse backgrounds come together to celebrate life, make memories, and create meaningful relationships. At Noakhali Club Dhaka Ltd, we believe in the power of connections, the joy of shared experiences, and the beauty of lifelong friendships. As we embark on this digital journey with our website, you'll find up-to-date information on upcoming events, member-exclusive benefits, and a glimpse into the soul of our Club life. We're continually evolving to meet the needs and desires of our members. Your feedback is invaluable as we continuously strive to improve and exceed your expectations. Our dedicated team, both on the management and staff side, is dedicated to ensuring that your experience at the club is nothing short of extraordinary. I encourage you to explore our website, discover the numerous opportunities it offers, and make the most of your membership. Thank you for being part of the Noakhali Club Dhaka Ltd family. Together, we'll create lasting moments and nurture a sense of belonging that will last a lifetime."
};

const PresidentSpeechPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
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

  const signatureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
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
            Leadership
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            President's Message
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
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.4 }
                }}
              >
                <img src={presidentImg} alt={PRESIDENT.name} className={styles.image} />
                <motion.div 
                  className={styles.overlay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.h3 
                    className={styles.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {PRESIDENT.name}
                  </motion.h3>
                  <motion.span 
                    className={styles.role}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {PRESIDENT.title}
                  </motion.span>
                </motion.div>
              </motion.div>
            </Col>

            {/* ── Right: Content ──────────────────────────────── */}
            <Col lg={7}>
              <motion.div 
                className={styles.content}
                variants={contentVariants}
              >
                <motion.span 
                  className={styles.eyebrow}
                  variants={textVariants}
                  custom={0}
                >
                  {PRESIDENT.eyebrow}
                </motion.span>
                
                <motion.h2 className={styles.heading}>
                  <motion.span 
                    className={styles.titlePart1}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {PRESIDENT.titlePart1}
                  </motion.span>{' '}
                  <motion.span 
                    className={styles.titlePart2}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {PRESIDENT.titlePart2}
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className={styles.bio}
                  variants={textVariants}
                  custom={0.2}
                >
                  {PRESIDENT.bio}
                </motion.p>
                
                <motion.div 
                  className={styles.signature}
                  variants={signatureVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.sigLine} />
                  <div>
                    <motion.span 
                      className={styles.sigName}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      {PRESIDENT.name}
                    </motion.span>
                    <motion.span 
                      className={styles.sigTitle}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      {PRESIDENT.title}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </>
  );
};

export default PresidentSpeechPage;