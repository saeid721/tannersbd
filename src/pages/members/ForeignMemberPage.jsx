import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getInitials } from '../../utils/helpers';
import styles from './MemberPage.module.scss';

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

const COMMITTEE = [
  { name: 'Mr. Mohd. Ataur Rahman Bhuiyan (Manik)', role: 'President',         code: 'P-01',  img: imgPresident },
  { name: 'Mr. Mohammed Abdul Hai',                  role: 'General Secretary', code: 'GS-01', img: img01 },
  { name: 'Mr. Md. Kamal Uddin',                     role: 'Treasurer',         code: 'TR-01', img: img02 },
  { name: 'Mr. Mohammed Shamsuddin Ahmed (Salim)',   role: 'Director',          code: 'D-01',  img: img03 },
  { name: 'Mr. Md. Tafazzal Hossain Forhad',        role: 'Director',          code: 'D-02',  img: img04 },
  { name: 'Barrister Imam Hossain Tareq',            role: 'Director',          code: 'D-03',  img: img05 },
  { name: 'Mr. Abul Kalam Azad',                     role: 'Director',          code: 'D-04',  img: img06 },
  { name: 'Mr. Azizur Rahman Kiran',                 role: 'Director',          code: 'D-05',  img: img07 },
  { name: 'Mr. Mohammad Anwoar Hossain Monto',      role: 'Director',          code: 'D-06',  img: img08 },
  { name: 'Mr. Md. Mahfuzur Rahman Kiron',           role: 'Director',          code: 'D-07',  img: img09 },
  { name: 'Mr. Md. Salim Chowdhury',                 role: 'Director',          code: 'D-08',  img: img10 },
  { name: 'Mr. Md. Monjurul Azim (Sumon)',           role: 'Director',          code: 'D-09',  img: img11 },
  { name: 'Mr. Md. Zakir Hossain Parvez',            role: 'Director',          code: 'D-10',  img: img12 },
  { name: 'Mr. Md. Salah Uddin',                     role: 'Director',          code: 'D-11',  img: img13 },
  { name: 'Mr. Ahmed Ullah',                          role: 'Director',          code: 'D-12',  img: img14 },
  { name: 'Mr. A.K.M. Ayub Ullah',                   role: 'Director',          code: 'D-13',  img: img15 },
  { name: 'Mr. Fazla Azim (Sudan)',                   role: 'Director',          code: 'D-14',  img: img16 },
];

const MemberCard = ({ member, index, wrapperRef }) => (
  <div
    ref={(el) => { wrapperRef.current[index] = el; }}
    className={styles.cardWrapper}
  >
    {/* ── Card: overflow hidden clips photo zoom & overlay ── */}
    <div className={styles.card}>
      <div className={styles.photoArea}>
        {member.img ? (
          <img src={member.img} alt={member.name} className={styles.photo} />
        ) : (
          <div className={styles.initialsCircle}>
            <span className={styles.initialsText}>{getInitials(member.name)}</span>
          </div>
        )}
        {/* Overlay slides up from bottom on hover */}
        <div className={styles.photoOverlay} />
      </div>
    </div>

    {/* ── Info panel: half inside card, half hanging below ── */}
    <div className={styles.infoPanel}>
      <div className={styles.infoPanelTop}>
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <div className={styles.divider} />
    </div>
  </div>
);


const ForeignMemberPage = () => {
  // ref array points to each cardWrapper element
  const wrapperRef = useRef([]);

  useEffect(() => {
    const observers = [];

    wrapperRef.current.forEach((wrapper, i) => {
      if (!wrapper) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Find the inner .card element and add .visible for entrance animation
            const card = wrapper.querySelector(`.${styles.card}`);
            if (card) {
              setTimeout(() => card.classList.add(styles.visible), i * 65);
            }
            obs.unobserve(wrapper);
          }
        },
        { threshold: 0.08 }
      );

      obs.observe(wrapper);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const members = COMMITTEE.filter((m) => m.role !== 'President');

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Our Members</p>
          <h1 className={styles.heroTitle}>Foreign Members</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            Guiding Noakhali Club Dhaka Ltd with vision, integrity, and an unwavering commitment to our members.
          </p>
        </Container>
      </div>

      {/* ── Members Grid ─────────────────────────────────────────────────── */}
      <section className={styles.section}>
        <Container>

          <Row className="g-4 justify-content-center">
            {members.map((member, index) => (
              <Col key={index} lg={4} md={6}>
                <MemberCard member={member} index={index} wrapperRef={wrapperRef} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ForeignMemberPage;