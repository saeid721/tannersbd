// src/features/home/NewsSection/NewsSection.jsx
import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../../../components/common/SectionHeader';
import styles from './NewsSection.module.scss';

import img1 from '../../../assets/news/01.jpg';
import img2 from '../../../assets/news/02.jpg';
import img3 from '../../../assets/news/03.jpg';
import img4 from '../../../assets/news/04.jpg';

const NEWS = [
  {
    id: 1,
    image: img1,
    title: 'বগুড়ায় “কাঁচা চামড়ার গুণগত মান রক্ষায় লেস্-কাট নিয়ন্ত্রণ এবং সঠিক পদ্ধতিতে চামড়া সংগ্রহ, সংরক্ষণ ও পরিবহণ” শীর্ষক কর্মশালা অনুষ্ঠিত',
    desc: 'বিটিএ ও এলএসবিপিসি, বাণিজ্য মন্ত্রাণালয় এর যৌথ উদ্যোগে ২৮ এপ্রিল, ২০২৬ তারিখে বগুড়ায় “কাঁচা চামড়ার গুণগত মান রক্ষায় লেস্-কাট নিয়ন্ত্রণ এবং.....',
    link: 'http://www.tannersbd.com/?page_id=752',
  },
  {
    id: 2,
    image: img2,
    title: 'গাইবান্ধায় “কাঁচা চামড়ার গুণগত মান রক্ষায় লেস্-কাট নিয়ন্ত্রণ এবং সঠিক পদ্ধতিতে চামড়া সংগ্রহ, সংরক্ষণ ও পরিবহণ” শীর্ষক কর্মশালা অনুষ্ঠিত',
    desc: 'বিটিএ ও এলএসবিপিসি, বাণিজ্য মন্ত্রাণালয় এর যৌথ উদ্যোগে ২৭ এপ্রিল, ২০২৬ তারিখে পলাশবাড়ী, গাইবান্ধায় “কাঁচা চামড়ার গুণগত মান রক্ষায় লেস্-কাট নিয়ন্ত্রণ এবং.....',
    link: 'http://www.tannersbd.com/?page_id=752',
  },
  {
    id: 3,
    image: img3,
    title: 'জয়পুরহাটে “কাঁচা চামড়ার গুণগত মান রক্ষায় লেস্-কাট নিয়ন্ত্রণ এবং সঠিক পদ্ধতিতে চামড়া সংগ্রহ, সংরক্ষণ ও পরিবহণ” শীর্ষক কর্মশালা অনুষ্ঠিত',
    desc: 'বিটিএ ও এলএসবিপিসি, বাণিজ্য মন্ত্রাণালয় এর যৌথ উদ্যোগে ২৬ এপ্রিল, ২০২৬ তারিখে জয়পুরহাটে “কাঁচা চামড়ার গুণগত মান রক্ষায় লেস্-কাট নিয়ন্ত্রণ এবং.....',
    link: 'http://www.tannersbd.com/?page_id=752',
  },
  {
    id: 4,
    image: img3,
    title: 'Their Excellencies, the Ambassadors of the EU, Germany, and Italy to Bangladesh, visited the Tannery Industrial Estate, Dhaka',
    desc: 'H.E. Mr. Michael Miller Ambassador and Head of Delegation of the European Union to Bangladesh, H.E. Mr. Dr. Rüdiger Lotz Ambassador.....',
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

const NewsSection = () => {
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              subtitle="Latest Updates"
              titlePart1="Recent News"
              titlePart2=" & Events"
              centered
              variant="dark"
            />
          </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Row className="g-4">
            {NEWS.map((facility, index) => (
              <Col key={facility.id} lg={3} md={6}>
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
                    <Link to="/news" className={styles.cardImageWrapper}>
                      <motion.img
                        src={facility.image}
                        alt={facility.title}
                        className={styles.cardImage}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </Link>

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
                        <Link to="/facilities" className={styles.cardTitleLink}>
                          {facility.title}
                        </Link>
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

          <motion.div
            className={styles.viewAllWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/news" className={styles.viewAllBtn}>
              See All News & Events
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
      </Container>
    </section>
  );
};

export default NewsSection;
