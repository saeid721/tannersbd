// src/features/home/FacilitiesPreview/FacilitiesPreview.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import styles from './FacilitiesPreview.module.scss';

import img1 from '../../../assets/facilities/history.jpg';
import img2 from '../../../assets/facilities/become-member.jpg';
import img3 from '../../../assets/facilities/area-of-bta.jpg';

const FACILITIES = [
  {
    id: 1,
    image: img1,
    title: 'History',
    desc: 'Bangladesh Tanners Association came into being in the year 1963. It’s registration no- 2256 EP under the companies Act 1913.',
    link: 'http://www.tannersbd.com/?page_id=752',
  },
  {
    id: 2,
    image: img2,
    title: 'Become a BTA Member',
    desc: 'To become a BTA Member, please',
    link: 'http://www.tannersbd.com/?page_id=752',
  },
  {
    id: 3,
    image: img3,
    title: 'Area of BTA',
    desc: '',
    link: 'http://www.tannersbd.com/?page_id=752',
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

const FacilitiesPreview = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px"
  });

  return (
    <section ref={ref} className={styles.section}>
      <Container>
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
                    {/* Full card image */}
                    <div className={styles.cardImageWrapper}>
                      <motion.img
                        src={facility.image}
                        alt={facility.title}
                        className={styles.cardImage}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>

                    <div className={styles.cardBody}>
                      {/* Title */}
                      <motion.h3
                        className={styles.cardTitle}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08 + 0.3
                        }}
                      >
                        {facility.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className={styles.cardDesc}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08 + 0.35
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
                        Read More 
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default FacilitiesPreview;
