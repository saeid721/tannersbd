// FILE: src/pages/GalleryPage.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from './GalleryPage.module.scss';

// Import gallery images
const galleryModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const GALLERY_ITEMS = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, img], index) => ({
    id: index + 1,
    img,
    category: 'Events',
  }));

const GalleryItem = ({ image, index, onOpen }) => {
  return (
    <motion.div
      className={styles.galleryItem}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (index % 12) * 0.05,
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

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.heroBg}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <Container className={styles.heroContent}>
          <motion.p
            className={styles.heroEyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Moments
          </motion.p>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Photo Gallery
          </motion.h1>
          <motion.div
            className={styles.heroDivider}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Showcasing Industry Innovation, Events, and Sustainable Progress
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Gallery Grid ──────────────────────────────────── */}
      <section className={styles.gallerySection}>
        <Container fluid className={styles.containerFluid}>

          <div className={styles.galleryGrid}>
            {filtered.map((image, index) => (
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                onOpen={setLightboxIndex}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Fullscreen Lightbox ────────────────────────────── */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
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
            src={filtered[lightboxIndex].img}
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

export default GalleryPage;