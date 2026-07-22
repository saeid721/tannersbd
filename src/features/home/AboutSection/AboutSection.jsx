// src/features/home/AboutSection/AboutSection.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import styles from './AboutSection.module.scss';

import imgMain from "../../../assets/about-main.jpg";
import imgSmall1 from "../../../assets/about-small-1.jpg";
import member1 from "../../../assets/committee/president.jpg";
import member2 from "../../../assets/committee/02.jpg";
import member3 from "../../../assets/committee/03.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.15,
    margin: "0px 0px -50px 0px"
  });

  return (
    <section ref={ref} className={styles.about}>
      <Container>
        <Row className="g-0 align-items-center">
          <Col lg={6}>
            <motion.div
              className={styles.imageGrid}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Large image */}
              <motion.div
                className={`${styles.imgBox} ${styles['imgBox--large']}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={imgMain}
                  alt="Noakhali Club Dhaka waterfront view"
                  initial={{ scale: 1.1 }}
                  animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>

              {/* Small image */}
              <motion.div
                className={`${styles.imgBox} ${styles['imgBox--small']}`}
                initial={{ opacity: 0, x: 40, y: -40 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 40, y: -40 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={imgSmall1} alt="Club facilities and dining" />
              </motion.div>

              {/* Badge */}
              <motion.div
                className={styles.badge}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.badgeLeft}>
                  <span className={styles.badgeYear}>10 Years of</span>
                  <span className={styles.badgeText}>Pure Legacy</span>
                </div>
                <div className={styles.badgeDivider} />
                <div className={styles.badgeRight}>
                  <div className={styles.memberAvatars}>
                    {[member1, member2, member3].map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt="Member"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                      />
                    ))}
                    <motion.span
                      className={styles.memberCountBubble}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4, delay: 1.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      +1200
                    </motion.span>
                  </div>
                  <span className={styles.membersLabel}>of Members</span>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              className={styles.content}
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className={styles.estText}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span>Est. 2017</span>
              </motion.div>

              <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className={styles.titlePart1}>OUR</span>
                <span className={styles.titlePart2}>STORY</span>
              </motion.h2>

              {[
                "Built on the belief that meaningful change begins with strong relationships, the Club serves as a hub for members striving to grow personally, socially, and intellectually.",
                "Welcome to Noakhali Club Dhaka Ltd (NCDL), the capital's premier social hub for the Noakhali community. Established in 2017, our club offers a unique blend of cultural heritage and modern recreation, providing members with top-tier facilities including tennis, squash, and billiards in a sophisticated environment.",
                "More than just a sports center, NCDL is a vibrant community where families connect and lifelong friendships are forged. We are dedicated to celebrating our shared milestones and keeping members updated on exclusive events, relying on your active participation to help our journey continue to flourish."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className={styles.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                >
                  {text}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ x: 10 }}
              >
                <Link to="/about/legacy" className={styles.legacyLink}>
                  Our Legacy
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;