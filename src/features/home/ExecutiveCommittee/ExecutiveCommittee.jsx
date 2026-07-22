// src/features/home/ExecutiveCommittee/ExecutiveCommittee.jsx
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionHeader from '../../../components/common/SectionHeader';
import { getInitials } from '../../../utils/helpers';
import styles from './ExecutiveCommittee.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import imgPresident from '../../../assets/committee/president.jpg';
import img01 from '../../../assets/committee/02.jpg';
import img02 from '../../../assets/committee/03.jpg';
import img03 from '../../../assets/committee/04.jpg';
import img04 from '../../../assets/committee/05.jpg';
import img05 from '../../../assets/committee/06.jpg';
import img06 from '../../../assets/committee/07.jpg';
import img07 from '../../../assets/committee/08.jpg';
import img08 from '../../../assets/committee/09.jpg';
import img09 from '../../../assets/committee/10.jpg';
import img10 from '../../../assets/committee/11.jpg';
import img11 from '../../../assets/committee/12.jpg';
import img12 from '../../../assets/committee/13.jpg';
import img13 from '../../../assets/committee/14.jpg';
import img14 from '../../../assets/committee/15.jpg';
import img15 from '../../../assets/committee/16.jpg';
import img16 from '../../../assets/committee/17.jpg';

const COMMITTEE = [
  { name: 'Mr. Mohd. Ataur Rahman Bhuiyan (Manik)', role: 'President', code: 'P-01', img: imgPresident },
  { name: 'Mr. Mohammed Abdul Hai', role: 'General Secretary', code: 'GS-01', img: img01 },
  { name: 'Mr. Md. Kamal Uddin', role: 'Treasurer', code: 'TR-01', img: img02 },
  { name: 'Mr. Mohammed Shamsuddin Ahmed (Salim)', role: 'Director', code: 'D-01', img: img03 },
  { name: 'Mr. Md. Tafazzal Hossain Forhad', role: 'Director', code: 'D-02', img: img04 },
  { name: 'Barrister Imam Hossain Tareq', role: 'Director', code: 'D-03', img: img05 },
  { name: 'Mr. Abul Kalam Azad', role: 'Director', code: 'D-04', img: img06 },
  { name: 'Mr. Azizur Rahman Kiran', role: 'Director', code: 'D-05', img: img07 },
  { name: 'Mr. Mohammad Anwoar Hossain Monto', role: 'Director', code: 'D-06', img: img08 },
  { name: 'Mr. Md. Mahfuzur Rahman Kiron', role: 'Director', code: 'D-07', img: img09 },
  { name: 'Mr. Md. Salim Chowdhury', role: 'Director', code: 'D-08', img: img10 },
  { name: 'Mr. Md. Monjurul Azim (Sumon)', role: 'Director', code: 'D-09', img: img11 },
  { name: 'Mr. Md. Zakir Hossain Parvez', role: 'Director', code: 'D-10', img: img12 },
  { name: 'Mr. Md. Salah Uddin', role: 'Director', code: 'D-11', img: img13 },
  { name: 'Mr. Ahmed Ullah', role: 'Director', code: 'D-12', img: img14 },
  { name: 'Mr. A.K.M. Ayub Ullah', role: 'Director', code: 'D-13', img: img15 },
  { name: 'Mr. Fazla Azim (Sudan)', role: 'Director', code: 'D-14', img: img16 },
];

const MemberCard = ({ member, index, cardRef }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={(el) => { if (cardRef.current && el) cardRef.current[index] = el; }}
      className={styles.cardWrapper}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className={styles.card}
        whileHover={{ 
          boxShadow: '0 0 0 1px rgba(255, 215, 0, 0.4), 0 0 32px 8px rgba(255, 215, 0, 0.6), 0 20px 60px rgba(0, 0, 0, 0.5)',
          borderColor: 'rgba(255, 215, 0, 0.8)'
        }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.photoArea}>
          {member.img ? (
            <motion.img 
              src={member.img} 
              alt={member.name} 
              className={styles.photo}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <motion.div 
              className={styles.initialsCircle}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.initialsText}>{getInitials(member.name)}</span>
            </motion.div>
          )}
          <motion.div 
            className={styles.photoOverlay}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      <motion.div 
        className={styles.infoPanel}
        whileHover={{ 
          y: -20,
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.28)'
        }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.infoPanelTop}>
          <span className={styles.codeBadge}>{member.code}</span>
          <motion.span 
            className={styles.dotAccent}
            whileHover={{ 
              scale: 1.5,
              backgroundColor: '#FFD700',
              boxShadow: '0 0 6px #FFD700'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.h3 
          className={styles.name}
          whileHover={{ color: '#FFD700' }}
          transition={{ duration: 0.3 }}
        >
          {member.name}
        </motion.h3>
        <div className={styles.divider} />
        <p className={styles.role}>{member.role}</p>
      </motion.div>
    </motion.div>
  );
};

const ExecutiveCommittee = () => {
  const cardRef = useRef([]);
  const members = COMMITTEE.filter((m) => m.role !== 'President');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const observers = [];
    cardRef.current.forEach((el, i) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const card = el.querySelector(`.${styles.card}`);
            if (card) setTimeout(() => card.classList.add(styles.visible), i * 65);
            obs.unobserve(el);
          }
        },
        { threshold: 0.08 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container fluid className={styles.containerFluid}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionHeader
            subtitle="2024 – 2026 Term"
            titlePart1="Executive Committee"
            titlePart2="Members"
            centered
            variant="dark"
          />
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={1000}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className={styles.swiperContainer}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <MemberCard member={member} index={index} cardRef={cardRef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </motion.section>
  );
};

export default ExecutiveCommittee;