// src/pages/members/MembershipBenefitsPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './MembershipBenefitsPage.module.scss';

const BENEFITS = [
  <>Provides an opportunity to its members to involve in <strong>BTA</strong>'s activities and meet Government officials, Federal and Provincial Ministers, Ambassadors and Leading Businessmen both Local and International.</>,
  <><strong>BTA</strong> is regularly consulted by the Government on issues related to the Export-import and other facilities, which provides openings for our members to share their views and concerns.</>,
  <>The Association also explains procedures, new regulations, provides in-depth trade &amp; investment advice.</>,
  <>Standing Committees actively monitor and pursue issues concerning trade, foreign investment regulations, taxation, infrastructure requirements etc.</>,
  <>Regular notices are circulated on business opportunities available – importers/exporters wanted, tender notices, <strong>BTA</strong> News, etc.</>,
  <><strong>BTA</strong> members are nominated for numerous Government advisory committees and statutory boards where national policies are formulated.</>,
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Turns "Saidur Haque (Master)" -> "SH", "M. Nasir" -> "MN"
const getInitials = (name) =>
  name
    .replace(/\(.*?\)/g, '')
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const Block = ({ eyebrow, titlePart1, titlePart2, children, reverse, image, imageAlt, imageRole, containImage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div ref={ref} className={styles.block} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
      <Row className="align-items-center g-3 g-lg-5">
        <Col lg={5} className={reverse ? 'order-lg-2' : ''}>
          <motion.div
            className={`${styles.imageWrapper} ${containImage ? styles.imageWrapperLight : ''}`}
            variants={fadeInScale}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              className={`${styles.image} ${containImage ? styles.imageContain : ''}`}
              alt={imageAlt}
            />
            {imageRole && (
              <motion.div
                className={styles.overlay}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className={styles.role}>{imageRole}</span>
              </motion.div>
            )}
          </motion.div>
        </Col>

        <Col lg={7} className={reverse ? 'order-lg-1' : ''}>
          <div className={styles.content}>
            <motion.h2 className={styles.heading} variants={fadeUp} custom={0.1}>
              <span className={styles.titlePart1}>{titlePart1}</span>{' '}
              <span className={styles.titlePart2}>{titlePart2}</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={0.2}>
              {children}
            </motion.div>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

const MembershipBenefitsPage = () => {
  const bgRef = useRef(null);
  const bgInView = useInView(bgRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <motion.div className={styles.hero} initial="hidden" animate="visible">
        <motion.div
          className={styles.heroBg}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <Container className={styles.heroContent}>
          <motion.p className={styles.heroEyebrow} variants={fadeUp}>JOIN BTA</motion.p>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={0.1}>Membership Benefits</motion.h1>
          <motion.div className={styles.heroDivider} variants={fadeUp} custom={0.15} />
          <motion.p className={styles.heroDesc} variants={fadeUp} custom={0.2}>
            Empowering our member tanneries through policy advocacy, global market access, and sustainable industrial growth.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <ol className={styles.benefitsList}>
              {BENEFITS.map((item, i) => (
                <li key={i} className={styles.benefitItem}>
                  <span className={styles.benefitIndex}>{i + 1}</span>
                  <span className={styles.benefitText}>{item}</span>
                </li>
              ))}
            </ol>
        </Container>
      </section>
    </>
  );
};

export default MembershipBenefitsPage;