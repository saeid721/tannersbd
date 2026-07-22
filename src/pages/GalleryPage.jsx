// src/pages/GalleryPage.jsx
import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AppModal from '../components/common/AppModal';
import styles from './GalleryPage.module.scss';

const CATEGORIES = ['All', 'Events', 'Sports', 'Facilities', 'Members', 'Awards'];

// Import gallery images
const galleryModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const galleryImages = Object.fromEntries(
  Object.entries(galleryModules).map(([path, module]) => [path.split('/').pop(), module]),
);

// Create gallery items with real images
const GALLERY_ITEMS = [
  // Events (5 images)
  { id: 1, category: 'Events', title: 'Annual Gala Dinner', image: galleryImages['01.jpg'], year: 2024 },
  { id: 2, category: 'Events', title: 'Welcome Party', image: galleryImages['02.jpg'], year: 2024 },
  { id: 3, category: 'Events', title: 'Christmas Celebration', image: galleryImages['03.jpg'], year: 2023 },
  { id: 4, category: 'Events', title: 'New Year Bash', image: galleryImages['04.jpg'], year: 2024 },
  { id: 5, category: 'Events', title: 'Club Anniversary', image: galleryImages['05.jpg'], year: 2023 },
  
  // Sports (5 images)
  { id: 6, category: 'Sports', title: 'Cricket Tournament', image: galleryImages['06.jpg'], year: 2024 },
  { id: 7, category: 'Sports', title: 'Football Championship', image: galleryImages['07.jpg'], year: 2023 },
  { id: 8, category: 'Sports', title: 'Tennis Match', image: galleryImages['08.jpg'], year: 2024 },
  { id: 9, category: 'Sports', title: 'Swimming Competition', image: galleryImages['09.jpg'], year: 2023 },
  { id: 10, category: 'Sports', title: 'Marathon Day', image: galleryImages['10.jpg'], year: 2024 },
  
  // Facilities (3 images)
  { id: 11, category: 'Facilities', title: 'Swimming Pool', image: galleryImages['11.jpg'], year: 2024 },
  { id: 12, category: 'Facilities', title: 'Gym Center', image: galleryImages['12.jpg'], year: 2023 },
  { id: 13, category: 'Facilities', title: 'Club Restaurant', image: galleryImages['13.jpg'], year: 2024 },
  
  // Members (4 images)
  { id: 14, category: 'Members', title: 'Member Meetup', image: galleryImages['14.jpg'], year: 2024 },
  { id: 15, category: 'Members', title: 'Family Day', image: galleryImages['15.jpg'], year: 2023 },
  { id: 16, category: 'Members', title: 'Club Retreat', image: galleryImages['16.jpg'], year: 2024 },
  { id: 17, category: 'Members', title: 'Volunteer Appreciation', image: galleryImages['17.jpg'], year: 2023 },
  
  // Awards (3 images)
  { id: 18, category: 'Awards', title: 'Best Club Award', image: galleryImages['01.jpg'], year: 2024 },
  { id: 19, category: 'Awards', title: 'Sports Excellence', image: galleryImages['02.jpg'], year: 2023 },
  { id: 20, category: 'Awards', title: 'Community Service Award', image: galleryImages['03.jpg'], year: 2024 },
];

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.05,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <motion.div
        className={styles.hero}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
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
            variants={heroItemVariants}
          >
            Our Moments
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Photo Gallery
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Relive the celebrations, championships, and cherished moments of club life.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Filter ────────────────────────────────────────── */}
      <section className={styles.filterSection}>
        <Container>
          <motion.div 
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {CATEGORIES.map((cat, index) => (
              <motion.button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles['filterBtn--active'] : ''}`}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05 + 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Gallery Grid ──────────────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.gallery}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <motion.p 
            className={styles.resultCount}
            variants={heroItemVariants}
          >
            Showing <strong>{filtered.length}</strong> photos
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </motion.p>

          <AnimatePresence mode="wait">
            <Row className="g-3">
              {filtered.map((item, index) => (
                <Col key={item.id} lg={3} md={4} sm={6} xs={6}>
                  <motion.div
                    custom={index}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className={styles.item}
                    onClick={() => setLightboxItem(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setLightboxItem(item)}
                    aria-label={`View ${item.title}`}
                  >
                    <div className={styles.itemBg}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className={styles.itemImage}
                      />
                    </div>
                    <motion.div 
                      className={styles.itemOverlay}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={styles.itemCategory}>{item.category}</span>
                      <span className={styles.itemTitle}>{item.title}</span>
                      <span className={styles.itemYear}>{item.year}</span>
                      <span className={styles.itemZoom}>🔍</span>
                    </motion.div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatePresence>
        </Container>
      </motion.section>

      {/* ── Lightbox Modal ────────────────────────────────── */}
      <AppModal
        show={!!lightboxItem}
        onHide={() => setLightboxItem(null)}
        title={lightboxItem?.title}
        size="lg"
      >
        {lightboxItem && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.lightboxImg}>
              <img 
                src={lightboxItem.image} 
                alt={lightboxItem.title}
                className={styles.lightboxImage}
              />
            </div>
            <div className={styles.lightboxMeta}>
              <span className={styles.lightboxCategory}>{lightboxItem.category}</span>
              <h3 className={styles.lightboxTitle}>{lightboxItem.title}</h3>
              <p className={styles.lightboxYear}>Year: {lightboxItem.year}</p>
            </div>
          </motion.div>
        )}
      </AppModal>
    </>
  );
};

export default GalleryPage;