// src/features/home/Gallery/Gallery.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../../../components/common/SectionHeader';
import styles from './Gallery.module.scss';

// Gallery images
import galleryImg1 from '../../../assets/gallery/01.jpg';
import galleryImg2 from '../../../assets/gallery/02.jpg';
import galleryImg3 from '../../../assets/gallery/03.jpg';
import galleryImg4 from '../../../assets/gallery/04.jpg';
import galleryImg5 from '../../../assets/gallery/05.jpg';
import galleryImg6 from '../../../assets/gallery/06.jpg';
import galleryImg7 from '../../../assets/gallery/07.jpg';
import galleryImg8 from '../../../assets/gallery/08.jpg';
import galleryImg9 from '../../../assets/gallery/09.jpg';
import galleryImg10 from '../../../assets/gallery/10.jpg';
import galleryImg11 from '../../../assets/gallery/11.jpg';
import galleryImg12 from '../../../assets/gallery/12.jpg';
import galleryImg13 from '../../../assets/gallery/13.jpg';
import galleryImg14 from '../../../assets/gallery/14.jpg';
import galleryImg15 from '../../../assets/gallery/15.jpg';

const GALLERY_IMAGES = [
  { id: 1, img: galleryImg1 },
  { id: 2, img: galleryImg2 },
  { id: 3, img: galleryImg3 },
  { id: 4, img: galleryImg4 },
  { id: 5, img: galleryImg5 },
  { id: 6, img: galleryImg6 },
  { id: 7, img: galleryImg7 },
  { id: 8, img: galleryImg8 },
  { id: 9, img: galleryImg9 },
  { id: 10, img: galleryImg10 },
  { id: 11, img: galleryImg11 },
  { id: 12, img: galleryImg12 },
  { id: 13, img: galleryImg13 },
  { id: 14, img: galleryImg14 },
  { id: 15, img: galleryImg15 },
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

const GalleryItem = ({ image, index, onOpen }) => {
  return (
    <motion.div
      className={styles.galleryItem}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 12px 40px rgba(255, 215, 0, 0.3)'
      }}
      onClick={() => onOpen(index)}
    >
      <img src={image.img} alt="Gallery" className={styles.galleryImage} />
      <div className={styles.galleryOverlay}>
        <span className={styles.galleryIcon}>🔍</span>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const sectionRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <>

      {/* ── Gallery Section ──────────────────────────────────── */}
      <motion.section
        ref={sectionRef}
        className={styles.gallerySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <Container fluid className={styles.containerFluid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              subtitle="Memories & Moments"
              titlePart1="Gallery"
              titlePart2="Highlights"
              centered
              variant="dark"
            />
          </motion.div>

          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((image, index) => (
              <GalleryItem 
                key={image.id}
                image={image} 
                index={index} 
                onOpen={setLightboxIndex}
              />
            ))}
          </div>
        </Container>
        

      
      <motion.div
        className={styles.viewAllWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/gallery" className={styles.viewAllBtn}>
          See All Photos
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
      </motion.section>

      {/* ── Fullscreen Lightbox ────────────────────────────── */}
      {lightboxIndex !== null && (
        <motion.div
          className={styles.lightboxOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNavPrev}`}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <motion.img
            key={lightboxIndex}
            src={GALLERY_IMAGES[lightboxIndex].img}
            alt="Gallery"
            className={styles.lightboxImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className={`${styles.lightboxNav} ${styles.lightboxNavNext}`}
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;