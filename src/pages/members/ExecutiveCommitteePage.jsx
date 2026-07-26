// FILE: src/pages/committee/ExecutiveCommitteePage.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../components/common/SectionHeader';
import { getInitials } from '../../utils/helpers';
import styles from './ExecutiveCommitteePage.module.scss';

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

const PRESIDENT = {
  name: 'Md. Shaheen Ahamed',
  role: 'Chairman',
  code: 'P-01',
  img: imgPresident,
  company: 'Anjuman Trading Corporation Ltd.',
  designation: 'Managing Director',
  address: 'Plot no: ZE-28, Tannery Industrial Estate Savar, Dhaka.',
  email: 'universalpellis@gmail.com',
};

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
  {
    name: 'Saleh Ahmed',
    role: 'Member',
    code: 'M-02',
    img: img07,
    company: 'Islamia Tannery (BD) Ltd.',
    designation: 'Chairman',
    address: 'Plot No: YE-5, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'islamiatannerybd@gmail.com',
  },
  {
    name: 'Mohammed Amin Ullah',
    role: 'Member',
    code: 'M-03',
    img: img08,
    company: 'Modhu Hazi Tannery',
    designation: 'Proprietor',
    address: 'Plot No: YS-13, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'modhuhajitannery@gmail.com',
  },
  {
    name: 'Md. Emam Hossain',
    role: 'Member',
    code: 'M-04',
    img: img09,
    company: 'A.B.S Tannery Ltd.',
    designation: 'Managing Director',
    address: 'Plot No: YS-9, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'abstanneryltd@gmail.com',
  },
  {
    name: 'Mohammad Mahbubbur Rahman',
    role: 'Member',
    code: 'M-05',
    img: img10,
    company: 'The Comilla Tannery Ltd.',
    designation: 'Managing Director',
    address: 'Plot No: XE-3, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'mahbuburrahman7945@gmail.com',
  },
  {
    name: 'Belyet Hossain',
    role: 'Member',
    code: 'M-06',
    img: img11,
    company: 'Leather Corner',
    designation: 'Proprietor',
    address: 'Plot No: ZS-4+ZS-5, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'leather.corner100@gmail.com',
  },
  {
    name: 'Golam Mowla',
    role: 'Member',
    code: 'M-07',
    img: img12,
    company: 'Leximco Complex',
    designation: 'Proprietor',
    address: 'Add: 115/1, Moneshwar Road, Hazaribagh, Dhaka-1209.',
    email: 'lexmicocomplex5678@gmail.com',
  },
  {
    name: 'Md. Riaz Uddin',
    role: 'Member',
    code: 'M-08',
    img: img13,
    company: 'C T Leather Complex',
    designation: 'Proprietor',
    address: 'Plot No: YS-24, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.',
    email: 'ctleathercomplex@gmail.com',
  },
  {
    name: 'A B M Masud',
    role: 'Member',
    code: 'M-09',
    img: img14,
    company: 'Sarm Leather International Co.',
    designation: 'Proprietor',
    address: 'Add: 6/C, 42/8, Apon Nibash, Zigatola, New Road, Dhanmondi, Dhaka-1209.',
    email: 'ecopelli@net2bd.com',
  },
  {
    name: 'Nurul Haque',
    role: 'Member',
    code: 'M-10',
    img: img15,
    company: 'Palco (BD) Ltd.',
    designation: 'Managing Director',
    address: 'Add: ZS-29, Jawchore Leather Industrial, Zoon Hemayetpur, Savar, Dhaka-1340, (Rent).',
    email: 'palco@dhaka.net',
  },
];

// President Card Component
const PresidentCard = ({ member }) => {
  return (
    <div className={`${styles.card} ${styles['card--featured']}`}>
      <span className={styles.chairmanRibbon}>Chairman</span>

      <div className={styles.photoArea}>
        <span className={styles.codeBadge}>{member.code}</span>
        {member.img ? (
          <img src={member.img} alt={member.name} className={styles.photo} loading="lazy" />
        ) : (
          <div className={styles.initialsCircle}>
            <span className={styles.initialsText}>{getInitials(member.name)}</span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <span className={styles.goldBadge}>{member.role}</span>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.orgLine}>
          {member.designation}, <strong>{member.company}</strong>
        </p>

        {member.address && (
          <div className={styles.metaRow}>
            <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C12 21 19 15.5 19 10C19 5.85786 15.6421 2.5 12 2.5C8.35786 2.5 5 5.85786 5 10C5 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            <p className={styles.address}>{member.address}</p>
          </div>
        )}
        {member.email && (
          <div className={styles.metaRow}>
            <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={`mailto:${member.email}`}
              className={styles.email}
              onClick={(e) => e.stopPropagation()}
            >
              {member.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Committee Card Component
const CommitteeCard = ({ member, index }) => {
  return (
    <div
      className={`${styles.card} ${styles['card--committee']}`}
      style={{ animationDelay: `${Math.min(index * 0.06, 0.6)}s` }}
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
        <div className={styles.overlayInfo}>
          <span className={styles.goldBadge}>{member.role}</span>
          <h3 className={styles.name}>{member.name}</h3>
          <p className={styles.orgLine}>
            {member.designation}, <strong>{member.company}</strong>
          </p>
            {member.email && (
              <div className={styles.metaRow}>
                <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M4 6.5L12 13L20 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href={`mailto:${member.email}`}
                  className={styles.email}
                  onClick={(e) => e.stopPropagation()}
                >
                  {member.email}
                </a>
              </div>
            )}
        </div>
      </div>

      <div className={styles.cardBody}>
        {member.address && (
          <div className={styles.metaRow}>
            <svg className={styles.metaIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C12 21 19 15.5 19 10C19 5.85786 15.6421 2.5 12 2.5C8.35786 2.5 5 5.85786 5 10C5 15.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            <p className={styles.address}>{member.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ExecutiveCommitteePage = () => {



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

      {/* President Section */}
      <section className={styles.presidentSection}>
        <Container>
          <div className={styles.presidentWrap}>
            <PresidentCard member={PRESIDENT} />
          </div>
        </Container>
      </section>

      {/* Committee Members Grid */}
      <section className={styles.section}>
        <Container>
          <Row className="g-4 justify-content-center">
            {COMMITTEE.map((member, index) => (
              <Col key={index} lg={4} md={6}>
                <CommitteeCard member={member} index={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ExecutiveCommitteePage;