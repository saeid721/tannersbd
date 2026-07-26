// src/pages/HistoryPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './MissionVisionPage.module.scss';
import MissionVisionImg from '../../assets/MV.jpg';

const FOUNDERS = [
  { name: 'Wahidul Hader Chowdhury', role: 'Proprietor, M/S Milon Tannery' },
  { name: 'Khalilur Rahman Sarder', role: 'Proprietor, M/S Pubali Tannery' },
  { name: 'Saidur Rahman', role: 'Proprietor, M/S Jamila Tannery' },
  { name: 'M. Nasir', role: 'Proprietor, M/S H.B Tannery' },
  { name: 'Monsur Ahmed', role: 'Proprietor, M/S Gulshan Tannery' },
  { name: 'Md Mostafa', role: 'Proprietor, M/S Shadhin Tannery' },
  { name: 'Saidur Haque (Master)', role: 'Proprietor, M/S Royal Tannery' },
  { name: 'Habibur Tahman', role: 'Proprietor, M/S Taj Tannery' },
  { name: 'A. Matin', role: 'Proprietor, M/S Ayub Brothers Tannery' },
  { name: 'Ishaque Miah', role: 'Proprietor, I.S Tannery' },
  { name: 'Saif Ullah', role: 'Proprietor, M/S Dhakanagore Tannery' },
  { name: 'Elias Miah', role: 'Proprietor, M/S Yousuf Brothers Tannery' },
  { name: 'Saed Ali', role: 'Proprietor, M/S Diamond Tannery' },
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
      <Row className="align-items-center g-5">
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

const MissionVisionPage = () => {
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
          <motion.p className={styles.heroEyebrow} variants={fadeUp}>Est. 1963</motion.p>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={0.1}>Mission & Vision</motion.h1>
          <motion.div className={styles.heroDivider} variants={fadeUp} custom={0.15} />
          <motion.p className={styles.heroDesc} variants={fadeUp} custom={0.2}>
            Our Mission, and Our Vision
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <Block
            eyebrow="Our Vision"
            titlePart1="Our"
            titlePart2="Vision"
            image={MissionVisionImg}
            imageAlt="BTA activities overview"
            containImage
          >
            <p className={styles.bio}>
              Our vision is to establish a compliant and viable leather industry in Bangladsh for sustainable economic growth.
            </p>
          </Block>
          <Block
            eyebrow="Our Mission"
            titlePart1="Our"
            titlePart2="Mission"
            image={MissionVisionImg}
            imageAlt="BTA activities overview"
            containImage
          >
            <p className={styles.bio}>
              Develop an economically viable and sustainable tanning environment for tanning industry in Bangladesh.
Lead the way in industrial development of the leather sector and enabling the leather industry to stay ahead of tomorrow’s challenges and
Make all possible efforts to strengthen the economy of Bangladesh through exporting leather & goods.
            </p>
          </Block>
        </Container>
      </section>
    </>
  );
};

export default MissionVisionPage;