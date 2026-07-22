// src/features/home/FacilitiesPreview/FacilitiesPreview.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionHeader from '../../../components/common/SectionHeader';
import AppButton from '../../../components/common/AppButton';
import styles from './FacilitiesPreview.module.scss';

const FACILITIES = [
  {
    id: 1,
    icon: '🏛️',
    title: 'Conference Hall',
    category: 'Events',
    tag: null,
    desc: 'A fully equipped modern conference hall with state-of-the-art audiovisual systems, high-speed Wi-Fi, and executive seating. Perfect for corporate meetings, seminars, and private gatherings.',
    features: ['AV equipment', 'High-speed Wi-Fi', 'Executive seating', 'Catering available'],
  },
  {
    id: 2,
    icon: '🥖',
    title: 'Bakery',
    category: 'Dining',
    tag: null,
    desc: 'Freshly baked artisanal breads, pastries, and cakes daily. Our master bakers use traditional techniques and premium ingredients to create delightful treats for members.',
    features: ['Fresh daily', 'Artisanal breads', 'Custom cakes', 'Takeaway available'],
  },
  {
    id: 3,
    icon: '💪',
    title: 'Gym & Fitness Centre',
    category: 'Fitness',
    tag: null,
    desc: 'Modern gymnasium with premium cardio equipment, free weights, resistance machines, and a dedicated stretching and yoga studio. Personal trainers available.',
    features: ['Latest equipment', 'Personal trainers', 'Yoga studio', 'Open 6AM – 10PM'],
  },
  {
    id: 4,
    icon: '🎾',
    title: 'Indoor Sports',
    category: 'Sports',
    tag: null,
    desc: 'Multi-purpose indoor sports arena featuring basketball, volleyball, and futsal courts with professional-grade flooring and lighting systems.',
    features: ['Basketball court', 'Volleyball net', 'Futsal ready', 'Spectator area'],
  },
  {
    id: 5,
    icon: '🛋️',
    title: 'Lobby',
    category: 'Events',
    tag: null,
    desc: 'Elegantly designed central lobby with comfortable seating, ambient lighting, and a welcoming atmosphere. Ideal for informal meetings, reading, or relaxing.',
    features: ['Comfortable seating', 'Ambient lighting', 'Reading area', 'Refreshment corner'],
  },
  {
    id: 6,
    icon: '📚',
    title: 'Library',
    category: 'Events',
    tag: null,
    desc: 'A quiet, well-stocked library with a vast collection of books, journals, and digital resources. Cozy reading nooks and study carrels for focused work.',
    features: ['Wide book collection', 'Digital resources', 'Reading nooks', 'Silent study area'],
  },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Header animation variants
const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Card animation variants
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: custom * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// CTA button variants
const ctaVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const FacilitiesPreview = () => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -50px 0px"
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={ref} className={styles.section}>
      <Container>
        {/* Header with animation */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionHeader
            subtitle="What We Offer"
            titlePart1="World-Class"
            titlePart2="Facilities"
            description="Every facility at Noakhali Club Dhaka is designed to deliver an exceptional experience — from sporting performance to relaxed socialising."
            centered={true}
            variant="dark"
          />
        </motion.div>

        {/* Cards with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Row className="g-4">
            {FACILITIES.map((facility, index) => (
              <Col key={facility.id} lg={4} md={6}>
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className={styles.cardWrapper}
                >
                  <motion.div 
                    className={styles.card}
                    whileHover={{
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255, 215, 0, 0.3)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Icon and Title in same row */}
                    <div className={styles.cardHeader}>
                      <motion.div
                        className={styles.cardIconWrapper}
                        whileHover={{ 
                          rotate: 8, 
                          scale: 1.15,
                          transition: { duration: 0.3 }
                        }}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.08 + 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <div className={styles.cardIcon}>
                          {facility.icon}
                        </div>
                      </motion.div>
                      
                      <div className={styles.cardTitleGroup}>
                        {facility.tag && (
                          <motion.div 
                            className={styles.cardTag}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.08 + 0.3 
                            }}
                          >
                            {facility.tag}
                          </motion.div>
                        )}
                        
                        <motion.h3 
                          className={styles.cardTitle}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.08 + 0.35 
                          }}
                        >
                          {facility.title}
                        </motion.h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <motion.p 
                      className={styles.cardDesc}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.08 + 0.4 
                      }}
                    >
                      {facility.desc}
                    </motion.p>
                    
                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.08 + 0.45 
                      }}
                      whileHover={{ x: 8 }}
                    >
                      <Link to="/facilities" className={styles.cardLink}>
                        Learn more 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className={styles.cta}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <AppButton as={Link} to="/facilities" variant="outline" size="lg">
              View All Facilities
            </AppButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FacilitiesPreview;