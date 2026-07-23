// src/pages/HistoryPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './HistoryPage.module.scss';
import presidentImg from '../../assets/services-BTA.jpg';
import AboutUsPicsImg from '../../assets/AboutUsPics.jpg';

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

const HistoryPage = () => {
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
          <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={0.1}>BTA Profile</motion.h1>
          <motion.div className={styles.heroDivider} variants={fadeUp} custom={0.15} />
          <motion.p className={styles.heroDesc} variants={fadeUp} custom={0.2}>
            Who We Are, Our Mission, and Our Vision
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <Block
            eyebrow="Who We Are"
            titlePart1="What"
            titlePart2="We Are"
            image={presidentImg}
            imageAlt="BTA activities overview"
            containImage
          >
            <p className={styles.bio}>
              Bangladesh Tanners Association (BTA) is a nonprofit association of the Tanning Industry in
              Bangladesh. BTA plays a pivotal role in the industry as it advocates for the tanneries,
              agents for policy reforms in the interest of their members, the leather sector and in turn
              the nation. The primary object for which the association is established is to protect,
              promote and develop the tanning industry in Bangladesh by encouraging co-operation between
              firms, companies and individuals engaged in the tanning industry. We are also members of the
              Federation of Bangladesh Chambers of Commerce & Industries (FBCCI), through which we
              collaborate with various private sector entities to develop the leather sector.
            </p>
          </Block>

          <Block
            eyebrow="Our Mandate"
            titlePart1="What"
            titlePart2="We Do"
            image={AboutUsPicsImg}
            imageAlt="BTA members at work"
            reverse
          >
            <p className={styles.bio}>
              BTA is a business association that provides a range of services to its members. We have a
              total of 809 members: 170 general members are tannery owners with factories scattered across
              Bangladesh, concentrated mainly in Dhaka, and 649 associate members who commercially export
              by utilizing the facilities of the tanneries owned by our general members. BTA members are
              actively engaged in leather manufacturing and export promotion to satisfy international
              demand, playing a positive role in earning much-needed foreign exchange. It is our
              responsibility to prepare our members for the economic, environmental and social challenges
              of the leather tanning business.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>809</span>
                <span className={styles.statLabel}>Total Members</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>170</span>
                <span className={styles.statLabel}>General Members</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>649</span>
                <span className={styles.statLabel}>Associate Members</span>
              </div>
            </div>
          </Block>

          {/* ── Background / Founders ───────────────────────── */}
          <motion.div ref={bgRef} className={styles.block} initial="hidden" animate={bgInView ? 'visible' : 'hidden'}>
            <div className={styles.content}>
              <motion.h2 className={styles.heading} variants={fadeUp} custom={0.1}>
                <span className={styles.titlePart2}>Background</span>
              </motion.h2>
              <motion.div className={styles.divider} variants={fadeUp} custom={0.15} />
              <motion.p className={styles.bio} variants={fadeUp} custom={0.2}>
                Bangladesh Tanners Association came into being in 1963 and was registered on 16th November
                1964 under the Companies Act 1913. The association was formed under the name Pakistan
                Tanners Association, and was renamed Bangladesh Tanners Association following independence
                in 1971. We deeply remember its founding members:
              </motion.p>

              <motion.div className={styles.foundersGrid} variants={fadeUp} custom={0.3}>
                {FOUNDERS.map((f) => (
                  <div className={styles.founder} key={f.name}>
                    <span className={styles.founderText}>
                      <span className={styles.founderName}>{f.name}</span>
                      <span className={styles.founderRole}>{f.role}</span>
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default HistoryPage;