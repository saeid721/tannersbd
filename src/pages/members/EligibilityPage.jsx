// src/pages/members/EligibilityPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './EligibilityPage.module.scss';
import BcmMemberImgImg from '../../assets/BcmMember.png';
import GeneralDoc from '../../assets/doc/Application-From-BTA-General.doc?url';
import GeneralPdf from '../../assets/doc/Application-From-BTA-General.pdf?url';
import AssociateDoc from '../../assets/doc/Aplication-From-BTA-Associate.doc?url';
import AssociatePdf from '../../assets/doc/Aplication-From-BTA-Associate.pdf?url';

const APPLICATION_FORMS = [
  {
    title: 'General Member',
    files: [
      { label: 'Word Document', meta: '72 KB', href: GeneralDoc, type: 'doc' },
      { label: 'PDF Document', meta: '178 KB', href: GeneralPdf, type: 'pdf' },
    ],
  },
  {
    title: 'Associate Member',
    files: [
      { label: 'Word Document', meta: '73 KB', href: AssociateDoc, type: 'doc' },
      { label: 'PDF Document', meta: '175 KB', href: AssociatePdf, type: 'pdf' },
    ],
  },
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

const EligibilityPage = () => {
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
          <motion.h1 className={styles.heroTitle} variants={fadeUp} custom={0.1}>Eligibility to be a BTA member</motion.h1>
          <motion.div className={styles.heroDivider} variants={fadeUp} custom={0.15} />
          <motion.p className={styles.heroDesc} variants={fadeUp} custom={0.2}>
            Qualifications and essential criteria for tannery owners joining our national association.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <section className={styles.descriptionSection}>
        <Container>
          <p className={styles.bio}>
              To be a precious member of BTA, please download the form and fill it. Then send it at tanners@net2bd.com other then you may visit our office for your membership.
            </p>
          <Block
            image={BcmMemberImgImg}
            imageAlt="BTA activities overview"
            containImage
          >
            
          </Block>

          {/* ── Application Forms Download ────────────────── */}
          <div className={styles.downloadBlock}>
            <div className={styles.content}>
              <h2 className={styles.heading}>
                <span className={styles.titlePart1}>Application</span>{' '}
                <span className={styles.titlePart2}>Forms</span>
              </h2>
              <p className={styles.bio}>
                Both PDF and Word format are given below. Download your suitable one.
              </p>
            </div>

            <div className={styles.formGroups}>
              {APPLICATION_FORMS.map((group) => (
                <div className={styles.formGroup} key={group.title}>
                  <p className={styles.formGroupTitle}>Application form for {group.title}</p>
                  <div className={styles.formCards}>
                    {group.files.map((file) => (
                      <a
                        key={file.label}
                        href={file.href}
                        download
                        className={styles.formCard}
                      >
                        <span className={`${styles.formIcon} ${file.type === 'pdf' ? styles.formIconPdf : styles.formIconDoc}`}>
                          {file.type === 'pdf' ? 'PDF' : 'DOC'}
                        </span>
                        <span className={styles.formInfo}>
                          <span className={styles.formLabel}>{file.label}</span>
                          <span className={styles.formMeta}>{file.meta} · Click to download</span>
                        </span>
                        <svg className={styles.formDownloadIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4V16M12 16L7 11M12 16L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EligibilityPage;