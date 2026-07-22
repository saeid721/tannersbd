// src/features/home/HeroSection/HeroSection.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import AppButton from '../../../components/common/AppButton';
import useMouseParallax from '../../../hooks/useMouseParallax';
import styles from './HeroSection.module.scss';

import heroBg from '../../../assets/slider/01.jpg';
import heroBg2 from '../../../assets/slider/02.jpg';
import heroBg3 from '../../../assets/slider/03.jpg';

const SLIDES = [
  {
    image: heroBg,
    eyebrow: 'EST. 1963 • BTA',
    headline: 'WELCOME TO ',
    highlight: 'Bangladesh Tanners Association',
    body: "Empowering Bangladesh's Leather Industry Since 1963",
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
  {
    image: heroBg2,
    eyebrow: 'EST. 1963 • BTA',
    headline: 'WELCOME TO ',
    highlight: 'Bangladesh Tanners Association',
    body: "United for Sustainable Leather Excellence",
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
  {
    image: heroBg3,
    eyebrow: 'EST. 1963 • BTA',
    headline: 'WELCOME TO ',
    highlight: 'Bangladesh Tanners Association',
    body: "The Voice of Bangladesh's Tanning Industry",
    cta: 'EXPLORE MEMBERSHIP',
    link: '/membership',
  },
];

// Text split animation helper
const splitText = (text) => {
  return text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: i * 0.08 + 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ display: 'inline-block', marginRight: '0.15em' }}
    >
      {word}
    </motion.span>
  ));
};

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const mousePos = useMouseParallax(0.015);

  // Preload images
  useEffect(() => {
    const images = [];
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      images.push(img);
    });
    setLoadedImages(images);
  }, []);

  // GSAP background parallax on scroll
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      const scrollPercent = 1 - (rect.bottom / window.innerHeight);
      if (scrollPercent > 0 && scrollPercent < 1) {
        gsap.to(hero.querySelector(`.${styles.bgContainer}`), {
          scale: 1 + scrollPercent * 0.1,
          y: scrollPercent * 50,
          duration: 0.1,
          ease: 'none',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length);
        setIsAnimating(false);
      }, 600);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    let nextSection = document.querySelector('[class*="about"], [class*="About"]');
    if (!nextSection) {
      const allSections = document.querySelectorAll('section');
      const heroSection = document.querySelector('[class*="hero"], [class*="Hero"]');
      if (heroSection && allSections.length > 1) {
        const sectionsArray = Array.from(allSections);
        const heroIndex = sectionsArray.indexOf(heroSection);
        if (heroIndex !== -1 && heroIndex + 1 < sectionsArray.length) {
          nextSection = sectionsArray[heroIndex + 1];
        }
      }
    }
    if (!nextSection) {
      window.scrollTo({
        top: window.innerHeight + 100,
        behavior: 'smooth'
      });
      return;
    }
    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const currentSlide = SLIDES[activeSlide];

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Background Slides with Parallax */}
      <div className={styles.bgContainer}>
        <AnimatePresence mode="wait">
          {SLIDES.map((slide, index) => (
            <motion.div
              key={index}
              className={`${styles.bgSlide} ${
                index === activeSlide ? styles.active : ''
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) scale(1.05)`,
              }}
              initial={index === activeSlide ? { scale: 1.1, opacity: 0 } : { opacity: 0 }}
              animate={index === activeSlide ? { scale: 1, opacity: 1 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                scale: { duration: 6, ease: 'easeOut' }
              }}
            />
          ))}
        </AnimatePresence>
        <div className={styles.overlay} />
      </div>

      <Container className={styles.container}>
        <motion.div 
          ref={contentRef}
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow with character stagger */}
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentSlide.eyebrow.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 + 0.2 }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Headline with word stagger */}
          <motion.h1 className={styles.headline}>
            <motion.span
              className={styles.headlineWhite}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {splitText(currentSlide.headline)}
            </motion.span>
            <motion.span
              className={styles.headlineGold}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {splitText(currentSlide.highlight)}
            </motion.span>
          </motion.h1>

          {/* Body text */}
          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentSlide.body}
          </motion.p>

          {/* CTA Button with hover animation */}
          <motion.div
            className={styles.ctaWrapper}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AppButton
              as={Link}
              to={currentSlide.link}
              variant="gold"
              size="lg"
              className={styles.ctaButton}
            >
              {currentSlide.cta}
              <motion.span
                className={styles.arrow}
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </AppButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator with pulse animation */}
      <motion.div
        className={styles.scrollIndicator}
        onClick={scrollToNextSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className={styles.mouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.div
            className={styles.wheel}
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1]
            }}
          />
        </motion.div>
        <motion.span
          className={styles.scrollText}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL
        </motion.span>
      </motion.div>
    </section>
  );
};

export default HeroSection;