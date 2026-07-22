// src/features/home/CTABanner/CTABanner.jsx
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import AppButton from '../../../components/common/AppButton';
import styles from './CTABanner.module.scss';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <motion.section
      ref={ref}
      className={styles.banner}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className={styles.inner}>
        <motion.div className={styles.content}>
          <motion.span 
            className={styles.eyebrow}
            variants={itemVariants}
          >
            Become a Member
          </motion.span>
          
          <motion.h2 
            className={styles.title}
            variants={itemVariants}
          >
            <motion.span 
              className={styles.titlePart1}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join the Legacy of 
            </motion.span>
            <motion.span 
              className={styles.titlePart2}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Noakhali Club Dhaka
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className={styles.desc}
            variants={itemVariants}
          >
            Built on tradition and community spirit, NCDL offers refined sports, vibrant social life, and timeless elegance.
          </motion.p>
          
          <motion.div 
            className={styles.actions}
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <AppButton as={Link} to="/reservation" variant="gold" size="lg">
                Apply for Membership
              </AppButton>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <AppButton as={Link} to="/facilities" variant="outline" size="lg">
                Explore the Club
              </AppButton>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default CTABanner;