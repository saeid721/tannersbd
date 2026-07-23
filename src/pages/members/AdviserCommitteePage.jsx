// FILE: src/pages/committee/AdviserCommitteePage.jsx

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../components/common/SectionHeader';
import { getInitials } from '../../utils/helpers';
import styles from './AdviserCommitteePage.module.scss';

import img01 from '../../assets/committee/02.jpg';
import img02 from '../../assets/committee/03.jpg';
import img03 from '../../assets/committee/04.jpg';
import img04 from '../../assets/committee/05.jpg';
import img05 from '../../assets/committee/06.jpg';
import img06 from '../../assets/committee/07.jpg';

const COMMITTEE = [
  {
    name: 'Md. Shakawat Ullah',
    role: 'Senior Vice Chairman',
    code: 'SVC-01',
    img: img01,
    company: 'Salma Tannery Ltd.',
    designation: 'Managing Director',
    address: 'Plot no: ZE-2, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka.',
    email: 'salmatannery12@gmail.com',
  },
  {
    name: 'Kazi Aminul Hassan',
    role: 'Vice Chairman',
    code: 'VC-01',
    img: img02,
    company: 'M/S Tippera Tannery',
    designation: 'Proprietor',
    address: 'Plot no: ZD-21, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'kazi_aminul@hotmail.com',
  },
  {
    name: 'Asikur Rahman',
    role: 'Vice Chairman',
    code: 'VC-02',
    img: img03,
    company: 'Tajin Leather Corporation Ltd.',
    designation: 'Director',
    address: 'Plot No: XE-4, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'tajin.asik3434@gmail.com',
  },
  {
    name: 'Md. Mizanur Rahman',
    role: 'General Secretary',
    code: 'GS-01',
    img: img04,
    company: 'Samata Leather Complex Ltd.',
    designation: 'Director',
    address: 'Plot No: ZC4+ZC5+ZC6, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'mizan8180@gmail.com',
  },
  {
    name: 'Md. Iqbal',
    role: 'Treasurer',
    code: 'TR-01',
    img: img05,
    company: 'Capital Tannery',
    designation: 'Proprietor',
    address: 'Plot No: YS-6B, BSCIC Chamra Shilpa Nagari, Horindhara, Hemayetpur, Savar, Dhaka.',
    email: 'capitaltannery@gmail.com',
  },
  {
    name: 'Masud Chowdhury',
    role: 'Member',
    code: 'M-01',
    img: img06,
    company: 'Sadar Tannery Ltd.',
    designation: 'Managing Director',
    address: 'Plot No: ZS-11, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'sadartanneryltd@hotmail.com',
  },
];


// Committee Card Component
const CommitteeCard = ({ member, index, cardRef }) => {
  return (
    <div
      ref={(el) => {
        if (cardRef && el) cardRef.current[index] = el;
      }}
      className={`${styles.card} ${styles['card--committee']}`}
    >
      <div className={styles.photoArea}>
        <span className={styles.codeBadge}>{member.code}</span>
        {member.img ? (
          <img src={member.img} alt={member.name} className={styles.photo} loading="lazy" />
        ) : (
          <div className={styles.initialsCircle}>
            <span className={styles.initialsText}>{getInitials(member.name)}</span>
          </div>
        )}
        <div className={styles.photoOverlay} />
      </div>

      <div className={styles.cardBody}>
        <span className={styles.goldBadge}>{member.role}</span>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.orgLine}>
          {member.designation}, <strong>{member.company}</strong>
        </p>
        {member.address && <p className={styles.address}>📍 {member.address}</p>}
        {member.email && (
          <a href={`mailto:${member.email}`} className={styles.email}>
            ✉ {member.email}
          </a>
        )}
      </div>
    </div>
  );
};

const AdviserCommitteePage = () => {
  const presidentCardRef = useRef([]);
  const committeeCardRef = useRef([]);

  // Animation observer for president card
  useEffect(() => {
    const observers = [];

    if (presidentCardRef.current[0]) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(presidentCardRef.current[0]);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Animation observer for committee cards with stagger effect
  useEffect(() => {
    const observers = [];

    committeeCardRef.current.forEach((el, i) => {
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (el) el.classList.add(styles.visible);
            }, i * 80);
            obs.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Our Leadership</p>
          <h1 className={styles.heroTitle}>Executive Committee (2025-2026)</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Steering Bangladesh's leather sector toward global standards, sustainable growth, and member excellence.
          </p>
        </Container>
      </div>

      {/* Committee Members Grid */}
      <section className={styles.section}>
        <Container>
          <SectionHeader subtitle="2024 – 2026 Term" title="Executive Committee Members" centered />
          <Row className="g-4 justify-content-center">
            {COMMITTEE.map((member, index) => (
              <Col key={index} lg={4} md={6}>
                <CommitteeCard member={member} index={index} cardRef={committeeCardRef} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdviserCommitteePage;