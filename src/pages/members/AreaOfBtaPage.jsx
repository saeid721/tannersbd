// src/pages/members/AreaOfBtaPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './AreaOfBtaPage.module.scss';

import DMDLogo from '../../assets/area/DMD.jpg';
import BBLogo from '../../assets/area/BB.jpg';
import BEGPLogo from '../../assets/area/BEGP.jpg';
import BFCCILogo from '../../assets/area/BFCCI.jpg';
import BLFLogo from '../../assets/area/BLF.jpg';
import BPCLogo from '../../assets/area/BPC.jpg';
import EC4JLogo from '../../assets/area/EC4J.jpg';
import GIZLogo from '../../assets/area/GIZ.jpg';
import NBRLogo from '../../assets/area/NBR.jpg';
import SNLogo from '../../assets/area/SN.jpg';
import TAFLogo from '../../assets/area/TAF.jpg';
import ECOLEBANLogo from '../../assets/area/ECOLEBAN.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: custom * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ORGANIZATIONS = [
  { name: 'Different Ministries and Department', short: 'DMD', logo: DMDLogo },
  { name: 'Bangladesh Economic Growth Program', short: 'BEGP', logo: BEGPLogo },
  { name: 'National Board of Revenue', short: 'NBR', logo: NBRLogo },
  { name: 'Bangladesh Bank', short: 'BB', logo: BBLogo },
  { name: 'Business Promotion Council', short: 'BPC', logo: BPCLogo },
  { name: 'GIZ', short: 'GIZ', logo: GIZLogo },
  { name: 'The Asia Foundation', short: 'TAF', logo: TAFLogo },
  { name: 'EC4J', short: 'EC4J', logo: EC4JLogo },
  { name: 'Solidaridad Network', short: 'SN', logo: SNLogo },
  { name: 'Bangladesh Labour Foundation', short: 'BLF', logo: BLFLogo },
  { name: 'ECOLEBAN', short: 'EB', logo: ECOLEBANLogo },
  { name: 'The Federation of Bangladesh Chambers of Commerce and Industry', short: 'FBCCI', logo: BFCCILogo },
];

const AreaOfBtaPage = () => {
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
          <motion.p className={styles.heroEyebrow} variants={fadeUp}>OUR REACH & NETWORK</motion.p>
          <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={0.1}>Area of BTA</motion.h1>
          <motion.div className={styles.heroDivider} variants={fadeUp} custom={0.15} />
          <motion.p className={styles.heroDesc} variants={fadeUp} custom={0.2}>
            Fostering strategic partnerships across government bodies, international development organizations, and trade associations to advance the leather sector.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <motion.div
            className={styles.introBlock}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className={styles.bio}>
              Our journey so far has been possible due to a harmonious, mutually beneficial working collaboration with various industry organizations and government bodies such as:
            </p>
          </motion.div>

          <div className={styles.orgGrid}>
            {ORGANIZATIONS.map((org, index) => (
              <motion.div
                key={org.name}
                className={styles.orgCard}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6 }}
              >
                <div className={styles.orgLogo}>
                  {org.logo ? (
                    <img src={org.logo} alt={org.name} />
                  ) : (
                    <span className={styles.orgLogoFallback}>{org.short}</span>
                  )}
                </div>
                <p className={styles.orgName}>{org.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className={styles.etcNote}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            ...and many more partner organizations working toward a sustainable leather industry.
          </motion.p>
        </Container>
      </section>
    </>
  );
};

export default AreaOfBtaPage;