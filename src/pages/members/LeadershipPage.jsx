import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../components/common/SectionHeader';
import { getInitials } from '../../utils/helpers';
import styles from './LeadershipPage.module.scss';

import imgPresident from '../../assets/committee/president.jpg';
import img01 from '../../assets/committee/02.jpg';
import img02 from '../../assets/committee/03.jpg';
import img03 from '../../assets/committee/04.jpg';
import img04 from '../../assets/committee/05.jpg';
import img05 from '../../assets/committee/06.jpg';
import img06 from '../../assets/committee/07.jpg';
import img07 from '../../assets/committee/08.jpg';
import img08 from '../../assets/committee/09.jpg';
import img09 from '../../assets/committee/10.jpg';
import img10 from '../../assets/committee/11.jpg';
import img11 from '../../assets/committee/12.jpg';
import img12 from '../../assets/committee/13.jpg';
import img13 from '../../assets/committee/14.jpg';
import img14 from '../../assets/committee/15.jpg';
import img15 from '../../assets/committee/16.jpg';
import img16 from '../../assets/committee/17.jpg';

const PRESIDENT = {
  name: 'Mr. Mohd. Ataur Rahman Bhuiyan (Manik)',
  role: 'President',
  code: 'P-01',
  img: imgPresident,
  tenure: '2024 – 2026',
  bio: 'A distinguished leader with over three decades of association with Noakhali Club Dhaka Ltd, Mr. Ataur Rahman Bhuiyan has guided the club through transformative growth and modernisation initiatives.',
};

const COMMITTEE = [
  { name: 'Mr. Mohammed Abdul Hai',                  role: 'General Secretary', code: 'GS-01', img: img01, tenure: '2024–2026', bio: 'Oversees all administrative and operational functions of the club.' },
  { name: 'Mr. Md. Kamal Uddin',                     role: 'Treasurer',         code: 'TR-01', img: img02, tenure: '2024–2026', bio: 'Manages club finances, budgets, and financial planning.' },
  { name: 'Mr. Mohammed Shamsuddin Ahmed (Salim)',   role: 'Director',          code: 'D-01',  img: img03, tenure: '2024–2026', bio: 'Strategic planning and club development initiatives.' },
  { name: 'Mr. Md. Tafazzal Hossain Forhad',         role: 'Director',          code: 'D-02',  img: img04, tenure: '2024–2026', bio: 'Member relations and community engagement.' },
  { name: 'Barrister Imam Hossain Tareq',            role: 'Director',          code: 'D-03',  img: img05, tenure: '2024–2026', bio: 'Legal affairs and compliance oversight.' },
  { name: 'Mr. Abul Kalam Azad',                     role: 'Director',          code: 'D-04',  img: img06, tenure: '2024–2026', bio: 'Events and cultural activities coordination.' },
  { name: 'Mr. Azizur Rahman Kiran',                 role: 'Director',          code: 'D-05',  img: img07, tenure: '2024–2026', bio: 'Sports and recreational activities management.' },
  { name: 'Mr. Mohammad Anwoar Hossain Monto',       role: 'Director',          code: 'D-06',  img: img08, tenure: '2024–2026', bio: 'Infrastructure and facilities development.' },
  { name: 'Mr. Md. Mahfuzur Rahman Kiron',           role: 'Director',          code: 'D-07',  img: img09, tenure: '2024–2026', bio: 'Membership growth and retention strategies.' },
  { name: 'Mr. Md. Salim Chowdhury',                 role: 'Director',          code: 'D-08',  img: img10, tenure: '2024–2026', bio: 'IT and digital transformation initiatives.' },
  { name: 'Mr. Md. Monjurul Azim (Sumon)',           role: 'Director',          code: 'D-09',  img: img11, tenure: '2024–2026', bio: 'Public relations and media communications.' },
  { name: 'Mr. Md. Zakir Hossain Parvez',            role: 'Director',          code: 'D-10',  img: img12, tenure: '2024–2026', bio: 'Youth and young professionals engagement.' },
  { name: 'Mr. Md. Salah Uddin',                     role: 'Director',          code: 'D-11',  img: img13, tenure: '2024–2026', bio: 'Corporate partnerships and sponsorships.' },
  { name: 'Mr. Ahmed Ullah',                         role: 'Director',          code: 'D-12',  img: img14, tenure: '2024–2026', bio: 'Social welfare and community service.' },
  { name: 'Mr. A.K.M. Ayub Ullah',                   role: 'Director',          code: 'D-13',  img: img15, tenure: '2024–2026', bio: 'Audit and compliance monitoring.' },
  { name: 'Mr. Fazla Azim (Sudan)',                  role: 'Director',          code: 'D-14',  img: img16, tenure: '2024–2026', bio: 'International relations and diaspora engagement.' },
];

// President Card Component
const PresidentCard = ({ member, index, cardRef }) => {
  return (
    <div
      ref={(el) => {
        if (cardRef && el) cardRef.current[index] = el;
      }}
      className={`${styles.card} ${styles['card--featured']}`}
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
      <div className={styles.cornerAccent} />

      <div className={styles.cardBody}>
        <span className={styles.goldBadge}>{member.role}</span>
        <h3 className={styles.name}>{member.name}</h3>
        {member.tenure && <p className={styles.tenure}>{member.tenure}</p>}
        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>
    </div>
  );
};

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
      <div className={styles.cornerAccent} />

      <div className={styles.cardBody}>
        <span className={styles.goldBadge}>{member.role}</span>
        <h3 className={styles.name}>{member.name}</h3>
        {member.tenure && <p className={styles.tenure}>{member.tenure}</p>}
        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>
    </div>
  );
};

const LeadershipPage = () => {
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
          <h1 className={styles.heroTitle}>Executive Committee</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Guiding Noakhali Club Dhaka Ltd with vision, integrity, and an unwavering commitment to our members.
          </p>
        </Container>
      </div>

      {/* President Section */}
      <section className={styles.presidentSection}>
        <Container>
          <SectionHeader subtitle="The President" title="Club President" centered />
          <div className={styles.presidentWrap}>
            <PresidentCard member={PRESIDENT} index={0} cardRef={presidentCardRef} />
          </div>
        </Container>
      </section>

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

export default LeadershipPage; 