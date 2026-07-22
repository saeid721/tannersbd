// src/pages/MenuPage.jsx
import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './MenuPage.module.scss';

const CATEGORIES = ['All Items', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Beverages'];

const MENU_ITEMS = [
  {
    id: 1,
    icon: '🍛',
    badge: 'popular',
    badgeLabel: 'Popular',
    name: 'Noakhali Special Bhuna Khichuri',
    desc: 'Aromatic slow-cooked lentil rice with hilsa fry and begun bhaji',
    price: '৳ 350',
    category: 'Lunch',
  },
  {
    id: 2,
    icon: '🐟',
    badge: 'popular',
    badgeLabel: 'Popular',
    name: 'Ilish Bhapa (Hilsa Steamed)',
    desc: 'Premium Padma hilsa steamed in mustard & green chilli paste',
    price: '৳ 650',
    category: 'Lunch',
  },
  {
    id: 3,
    icon: '🥩',
    badge: 'new',
    badgeLabel: 'New',
    name: 'Mutton Rezala',
    desc: 'Tender mutton in aromatic white gravy, Mughal-style preparation',
    price: '৳ 550',
    category: 'Dinner',
  },
  {
    id: 4,
    icon: '🍗',
    badge: null,
    name: 'Deshi Murgi Ranna',
    desc: 'Free-range country chicken cooked with traditional spice blend',
    price: '৳ 420',
    category: 'Dinner',
  },
  {
    id: 5,
    icon: '🥗',
    badge: 'veg',
    badgeLabel: 'Veg',
    name: 'Mixed Vegetable Curry',
    desc: 'Seasonal vegetables in a light, flavourful Bengali gravy',
    price: '৳ 180',
    category: 'Lunch',
  },
  {
    id: 6,
    icon: '🍜',
    badge: null,
    name: 'Club Noodles (Continental)',
    desc: 'Stir-fried noodles with mixed vegetables and choice of protein',
    price: '৳ 280',
    category: 'Snacks',
  },
  {
    id: 7,
    icon: '🫖',
    badge: null,
    name: 'Malai Cha (Milk Tea)',
    desc: 'Traditional thick Bengali milk tea with cardamom & ginger',
    price: '৳ 60',
    category: 'Beverages',
  },
  {
    id: 8,
    icon: '🧁',
    badge: 'new',
    badgeLabel: 'New',
    name: 'Mishti Doi Sundae',
    desc: 'House-set sweet yoghurt with seasonal fruit compote',
    price: '৳ 150',
    category: 'Snacks',
  },
  {
    id: 9,
    icon: '🍳',
    badge: 'veg',
    badgeLabel: 'Veg',
    name: 'Full English Breakfast',
    desc: 'Eggs, toast, grilled tomato, baked beans and mushrooms',
    price: '৳ 320',
    category: 'Breakfast',
  },
  {
    id: 10,
    icon: '🍞',
    badge: 'veg',
    badgeLabel: 'Veg',
    name: 'Club Sandwich',
    desc: 'Three-layer sandwich with fresh vegetables, cheese & sauces',
    price: '৳ 220',
    category: 'Snacks',
  },
  {
    id: 11,
    icon: '🥤',
    badge: null,
    name: 'Fresh Lime Soda',
    desc: 'Freshly squeezed lime with sparkling water, mint and salt or sugar',
    price: '৳ 80',
    category: 'Beverages',
  },
  {
    id: 12,
    icon: '🍚',
    badge: 'popular',
    badgeLabel: 'Popular',
    name: 'Kacchi Biryani (Half)',
    desc: 'Slow-dum Dhaka-style mutton kacchi with borhani',
    price: '৳ 480',
    category: 'Dinner',
  },
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

const menuCardVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.06,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Items');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filtered =
    activeCategory === 'All Items'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

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
        <motion.div 
          className={styles.heroPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <Container className={styles.heroContent}>
          <motion.p 
            className={styles.heroEyebrow}
            variants={heroItemVariants}
          >
            Culinary Experience
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Special Menu
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Savour the finest Bengali cuisine and continental delights crafted
            for our esteemed members.
          </motion.p>
        </Container>
      </motion.div>

      <motion.div 
        className={styles.sectionDivider}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ transformOrigin: 'left' }}
      />

      {/* ── Menu Section ─────────────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.menuSection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <motion.p 
            className={styles.sectionLabel}
            variants={heroItemVariants}
          >
            Our Offerings
          </motion.p>
          <motion.h2 
            className={styles.sectionTitle}
            variants={heroItemVariants}
          >
            Dining at the Club
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            variants={heroItemVariants}
          >
            Available exclusively for members and their guests. Orders can be
            placed at the reception or through the club steward.
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            className={styles.filterRow}
            variants={heroItemVariants}
          >
            {CATEGORIES.map((cat, index) => (
              <motion.button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05 + 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              className={styles.menuGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={menuCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    y: -6,
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    transition: { duration: 0.3 }
                  }}
                  className={styles.menuCard}
                >
                  <motion.div 
                    className={styles.menuIcon}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={styles.menuInfo}>
                    {item.badge && (
                      <motion.span 
                        className={`${styles.badge} ${styles[`badge_${item.badge}`]}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.06 + 0.1 
                        }}
                      >
                        {item.badgeLabel}
                      </motion.span>
                    )}
                    <div className={styles.menuName}>{item.name}</div>
                    <div className={styles.menuDesc}>{item.desc}</div>
                    <motion.div 
                      className={styles.menuPrice}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.06 + 0.15 
                      }}
                    >
                      {item.price}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dining Note */}
          <motion.div 
            className={styles.diningNote}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className={styles.diningNoteIcon}>📋</span>
            <p className={styles.diningNoteText}>
              <strong>Dining Hours:</strong> Breakfast 7:00–10:00 AM · Lunch
              12:30–3:00 PM · Dinner 7:30–10:30 PM. For large group bookings or
              special arrangements, please contact the Club Manager at least 48
              hours in advance. All prices are inclusive of VAT.
            </p>
          </motion.div>
        </Container>
      </motion.section>
    </>
  );
};

export default MenuPage;