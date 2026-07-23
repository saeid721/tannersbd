// src/pages/OrganogramPage.jsx
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './OrganogramPage.module.scss';

// Main vertical chain, top to bottom, before the 3-way split
const CHAIN_TOP = [
  { title: 'Executive Committee BTA', isRoot: true },
  { title: 'Chief Executive Officer (CEO)' },
  { title: 'Head Of Projects & Program' },
  { title: 'Co-Ordinator' },
  { title: 'Head of Admn & Logistics' },
];

// The 3-way fan-out under "Head of Admn & Logistics"
const BRANCH = [
  { title: 'Executive Officers (04)' },
  { title: 'IT Officer' },
  { title: 'Accounts Officer' },
];

// Chain continues below the middle branch item (IT Officer)
const CHAIN_BOTTOM = [
  { title: 'Procurement Officer' },
  { title: 'Office Assistant' },
  { title: 'Office Shohayok' },
];

const EXECUTIVE_OFFICER_BREAKDOWN = [
  { role: 'Executive Officer (General)', count: '02' },
  { role: 'Executive Officer (Communication)', count: '01' },
  { role: 'Executive Officer cum Data Entry Operator', count: '01' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const OrganogramPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
          <motion.p className={styles.heroEyebrow} variants={fadeUp} initial="hidden" animate="visible">
            About BTA
          </motion.p>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={0.1} initial="hidden" animate="visible">
            Organogram
          </motion.h1>
          <motion.div className={styles.heroDivider} variants={fadeUp} custom={0.15} initial="hidden" animate="visible" />
          <motion.p className={styles.heroDesc} variants={fadeUp} custom={0.2} initial="hidden" animate="visible">
            Our organizational structure and chain of command
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Org Chart ────────────────────────────────────────── */}
      <motion.section ref={ref} className={styles.section} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
        <Container>
          <div className={styles.chartWrap}>
            {CHAIN_TOP.map((node, i) => (
              <React.Fragment key={node.title}>
                {i > 0 && <div className={styles.connector} />}
                <motion.div
                  className={`${styles.node} ${node.isRoot ? styles.nodeRoot : ''}`}
                  variants={fadeUp}
                  custom={i * 0.05}
                >
                  {node.title}
                </motion.div>
              </React.Fragment>
            ))}

            <div className={styles.connector} />

            <div className={styles.branch}>
              {BRANCH.map((node, i) => (
                <div className={styles.branchItem} key={node.title}>
                  <motion.div className={styles.node} variants={fadeUp} custom={0.3 + i * 0.05}>
                    {node.title}
                  </motion.div>
                </div>
              ))}
            </div>

            <div className={styles.connector} />

            {CHAIN_BOTTOM.map((node, i) => (
              <React.Fragment key={node.title}>
                {i > 0 && <div className={styles.connector} />}
                <motion.div className={styles.node} variants={fadeUp} custom={0.5 + i * 0.05}>
                  {node.title}
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          {/* ── Legend: Executive Officers breakdown ─────────── */}
          <div className={styles.legendWrap}>
            <motion.div className={styles.legendCard} variants={fadeUp} custom={0.7}>
              <p className={styles.legendTitle}>Executive Officers (04)</p>
              <ul className={styles.legendList}>
                {EXECUTIVE_OFFICER_BREAKDOWN.map((item) => (
                  <li className={styles.legendItem} key={item.role}>
                    <span>{item.role}</span>
                    <span>{item.count}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </motion.section>
    </>
  );
};

export default OrganogramPage;