// src/features/home/PresidentSection/PresidentSection.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import styles from './PresidentSection.module.scss';
import presidentImg from '../../../assets/president.jpg';

const PRESIDENT = {
  name: 'Md. Shaheen Ahamed',
  designation: 'Chairman',
  company: 'Bangladesh Tanners Association (BTA)',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'Chairman',
  quote: 'Welcome you to Bangladesh Tanners Association (BTA)',
  bio: `As a key advocate for Bangladesh's leather sector—the country’s second-largest manufacturing export after textiles—our association drives policy reform and industry growth. Though traditionally viewed as a high-polluting sector, we are committed to shifting this narrative by enforcing a proactive environmental approach across our member tanneries.

Our relocation from Hazaribag to the modern industrial park in Savar marks a major turning point. Equipped with central effluent treatment, chrome recovery, and solid waste management systems, this hub is set to position Bangladesh as a sustainable global leader in finished leather.

Beyond environmental progress, worker welfare remains a top priority. We maintain zero tolerance for human rights violations, actively addressing fair wages, child labor, and workplace safety through ongoing management and safety training. Through deep stakeholder collaboration, we are building an eco-conscious, socially responsible sourcing destination for the world.`
};

const PresidentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  return (
    <motion.section
      ref={ref}
      className={styles.section}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container>
        <Row className="align-items-center g-5">
          {/* Left: Image Card */}
          <Col lg={5}>
            <motion.div
              className={styles.imageWrapper}
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={presidentImg} alt={PRESIDENT.name} className={styles.image} />
              <motion.div 
                className={styles.overlay}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className={styles.name}>{PRESIDENT.name}</h3>
                <span className={styles.role}>{PRESIDENT.designation}</span>
                <span className={styles.company}>{PRESIDENT.company}</span>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right: Content */}
          <Col lg={7}>
            <motion.div className={styles.content}>
              <motion.div 
                className={styles.eyebrow}
                variants={itemVariants}
              >
                <span>{PRESIDENT.eyebrow}</span>
              </motion.div>

              <motion.h2 
                className={styles.heading}
                variants={itemVariants}
              >
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

              <motion.blockquote 
                className={styles.quote}
                variants={itemVariants}
              >
                "{PRESIDENT.quote}"
              </motion.blockquote>
              
              
              <motion.p 
                className={styles.bio}
                variants={itemVariants}
              >
                {PRESIDENT.bio}
              </motion.p>
              
              
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <Link to="/about/chairman-message" className={styles.readMoreLink}>
                  Read Full Message
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
    </motion.section>
  );
};

export default PresidentSection;