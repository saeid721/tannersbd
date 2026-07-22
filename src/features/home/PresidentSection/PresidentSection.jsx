// src/features/home/PresidentSection/PresidentSection.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import styles from './PresidentSection.module.scss';
import presidentImg from '../../../assets/president.jpg';

const PRESIDENT = {
  name: 'Mohd. Ataur Rahman Bhuiyan',
  title: 'President, NCDL',
  eyebrow: 'Leadership Insights',
  titlePart1: 'Message From',
  titlePart2: 'The President',
  quote: "Welcome to Noakhali Club Dhaka Ltd (NCDL)—a destination where elegance meets community, and tradition blends seamlessly with modern leisure.",
  bio: "It is with great pleasure that I welcome you to the official website of Noakhali Club Dhaka Ltd. As the President of this esteemed Club, I am happy to extend my warmest greetings to each of you. It's my privilege to lead our inclusive community of Members who share a common passion for excellence, camaraderie, and the pursuit of a dynamic and fulfilling lifestyle. Remaining a central focal point for a wide range of social, cultural, and recreational activities within our cherished city. Whether you're seeking a serene environment to relax, a platform to network with like-minded individuals, or an opportunity to engage in sports and cultural events, Noakhali Club Dhaka Ltd has something special for you. It's a place where individuals from diverse backgrounds come together to celebrate life, make memories, and create meaningful relationships. At Noakhali Club Dhaka Ltd, we believe in the power of connections, the joy of shared experiences, and the beauty of lifelong friendships."
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
                <span className={styles.role}>{PRESIDENT.title}</span>
              </motion.div>
            </motion.div>
          </Col>

          {/* Right: Content */}
          <Col lg={7}>
            <motion.div className={styles.content}>
              <motion.span 
                className={styles.eyebrow}
                variants={itemVariants}
              >
                {PRESIDENT.eyebrow}
              </motion.span>

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

              <motion.div 
                className={styles.divider}
                variants={itemVariants}
              />
              
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
                className={styles.signature}
                variants={itemVariants}
              >
                <div className={styles.sigLine} />
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={styles.sigName}>{PRESIDENT.name}</span>
                  <span className={styles.sigTitle}>{PRESIDENT.title}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default PresidentSection;