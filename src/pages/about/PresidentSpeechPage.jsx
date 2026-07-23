// src/pages/PresidentSpeechPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './PresidentSpeechPage.module.scss';
import presidentImg from '../../assets/president.jpg';

const PRESIDENT = {
  name: 'Md. Shaheen Ahamed',
  title: 'Chairman, BTA',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'The Chairman',
  quote: 'Welcome to Bangladesh Tanners Association (BTA)',
  message: `We are a non-profit association of the tanneries in Bangladesh. We advocate for the tanneries and act as agent of policy reforms which affects the sector and uphold the interests of our members, the leather sector and in turn the nation. The government of Bangladesh has identified leather industry as a priority sector based on its considerable growth, investment potential and employment generation. Leather and footwear are the largest exporting manufacturing sectors after textile and apparel in Bangladesh. As the representative of the Bangladeshi leather sector, we hold a sincere responsibility to the country in upholding international quality, social and environmental standards in our industry. So that we can establish Bangladesh as the number one sourcing destination for all kinds of finished leather.
We believe, as an association, fostering collaboration with a wide range of stakeholders for the development of our leather sector is our primary responsibility. We are engaged in regular communication with its members, trade unions, government, NGOs and the development partners – through annual meetings, exhibition, fairs, workshops, seminars and trainings. Our stakeholders care about the wellbeing of the leather sector and provide insightful advice on the development of our members and the sector.
Leather sector is generally viewed as "dirty" or "polluting" industry around the globe. Tannery is a very traditional and old industry. There are many unorganized tannery clusters who contributed to the degradation of many rivers around the world through untreated tannery effluent. These tanneries created public health hazards by dumping solid waste irresponsibly. Irresponsible water and chemical use are also a major issue in these tanneries. These are the typical environmental concerns in a tanning unit. As an organization, we strive to use precautionary approach in dealing with potential environmental hazards in our member firms. We want to help them apply this approach to proactively deal with any environmental irreversible impact that tannery operation may pose.
It is my great pleasure to inform you that, we are about to launch ourselves to the new era of tanning. In 2017, all our member tanneries from Hazaribag moved to the new leather industrial park in Savar, Dhaka. This industrial park was designed with modern facilities like central effluent treatment plant, solid waste management system, chrome recovery system, etc. Most of these common facilities are currently under development. Once they are finalized, the sector will undergo a major transformation in terms of environmental sustainability and will become a role model for other current and aspiring leather manufacturing countries. In absence of those facilities, we are focused on complying with national environmental requirements in our member factories. Also, we are also working closely with our members in collaboration with development partners to make process improvements, monitoring resource usage and adopting cleaner technology in our facility.
In our journey to become one of the premier leather sourcing destinations of the world, we also believe it is important to give attention to our social responsibility to our workers and community. We have therefore in recent times provided much needed attention to social aspects of our business. We regularly in discussion with our members about different human right issues, including wages and benefits, child labor, discrimination, forced labor, freedom of association and collective bargaining, workplace environment and occupational hazards by maintaining zero tolerance in terms of any violation in the human rights issue. We have taken initiatives to train the management of our member factories in social compliance management and their workers on health and safety aspects.
We aim to sustain with our endeavors and generate satisfaction for all our workers, our employees, and our stakeholders. In this regard, I sincerely thank all our stakeholders and members for their ongoing understanding and continued support for our association.

We would also welcome your suggestions to improve our system and services for our members and clients nationally and globally.`
};

// Split the message into paragraphs for proper spacing
const MESSAGE_PARAGRAPHS = PRESIDENT.message.split('\n').map((p) => p.trim()).filter(Boolean);

const PresidentSpeechPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────── */}
      <motion.div className={styles.hero} variants={heroVariants} initial="hidden" animate="visible">
        <motion.div
          className={styles.heroBg}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <Container className={styles.heroContent}>
          <motion.p className={styles.heroEyebrow} variants={heroItemVariants}>Leadership Insights</motion.p>
          <motion.h1 className={styles.heroTitle} variants={heroItemVariants}>Chairman's Message</motion.h1>
          <motion.div className={styles.heroDivider} variants={heroItemVariants} />
          <motion.p className={styles.heroDesc} variants={heroItemVariants}>
            Want to build a better society.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Message Section: photo on top, message stacked below ─ */}
      <motion.section
        ref={ref}
        className={styles.descriptionSection}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Container>
          <Row className="g-5">
            <Col lg={4}>
              {/* Photo + name/title */}
              <motion.div className={styles.profileHeader} variants={imageVariants}>
                <motion.div className={styles.imageWrapper} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <img src={presidentImg} alt={PRESIDENT.name} className={styles.image} />
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={8}>
            <motion.span className={styles.eyebrow} variants={textVariants} custom={0}>
              {PRESIDENT.eyebrow}
            </motion.span>

            <motion.h2 className={styles.heading} variants={textVariants} custom={0.1}>
              <span className={styles.titlePart1}>{PRESIDENT.titlePart1}</span>{' '}
              <span className={styles.titlePart2}>{PRESIDENT.titlePart2}</span>
            </motion.h2>

            <motion.div className={styles.divider} variants={textVariants} custom={0.15} />

            <motion.p className={styles.quote} variants={textVariants} custom={0.2}>
              {PRESIDENT.quote}
            </motion.p>
            </Col>
          </Row>

          {/* Message content */}
          <motion.div className={styles.content} variants={contentVariants}>

            <div className={styles.messageBody}>
              {MESSAGE_PARAGRAPHS.map((para, i) => (
                <motion.p
                  key={i}
                  className={styles.bio}
                  variants={textVariants}
                  custom={0.25 + i * 0.05}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div className={styles.signature} variants={textVariants} custom={0.6}>
              <div className={styles.sigLine} />
              <div>
                <span className={styles.sigName}>{PRESIDENT.name}</span>
                <span className={styles.sigTitle}>{PRESIDENT.title}</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
};

export default PresidentSpeechPage;