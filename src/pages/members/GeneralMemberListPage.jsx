import React, { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import styles from './GeneralMemberPage.module.scss';

// ── Data ──────────────────────────────────────────────────────────
// Each section = one alphabet group. Add more rows/sections as needed.
const MEMBER_SECTIONS = [
  {
    letter: 'A',
    members: [
      { sl: '01', firm: 'Anjuman Trading Corporation Ltd.', rep: 'Md. Shaheen Ahamed', designation: 'Managing Director', address: 'Plot no: ZE-28, Tannery Industrial Estate, Savar, Dhaka.', contact: '01711522288', email: 'universalpellis@gmail.com', memberNo: '002', product: 'Crust & Finished Leather' },
      { sl: '02', firm: 'Ahsan Habib & Brothers', rep: 'Md. Mizanur Rahman', designation: 'Proprietor', address: 'Plot no: ZE-4, Leather Industrial Area, Hemayetpur, Savar, Dhaka.', contact: '01859699183', email: 'mamun_tarc04@yahoo.com', memberNo: '011', product: 'Crust & Finished Leather' },
      { sl: '03', firm: 'A. B. S Tannery Ltd.', rep: 'Md. Emam Hossain', designation: 'Managing Director', address: 'Plot no-YS-9, Leather Industrial Area, Jhowchar, Savar, Dhaka.', contact: '01710978509', email: '', memberNo: '015', product: 'Crust & Finished Leather' },
      { sl: '04', firm: 'Arafat Leather Complex Ltd.', rep: 'Md. Monir Hossain', designation: 'Managing Director', address: 'Plot No: ZE-40, Tannery Industrial Estate, Dhaka (TIED).', contact: '01819954589', email: '', memberNo: '026', product: 'Crust & Finished Leather' },
      { sl: '06', firm: 'Arab Tannery (Pvt) Limited', rep: 'Eliasur Rahman', designation: 'Managing Director', address: 'Plot No: YS-12A, Tannery Industrial Estate, Dhaka (TIED).', contact: '01711523548', email: 'office@arableatherholdings.com', memberNo: '031', product: 'Crust & Finished Leather' },
      { sl: '07', firm: 'Asif Leather Ltd', rep: 'Mr. Mohammad Rashed Khan Ujjal', designation: 'Managing Director', address: 'Plot No: YS-9A, Tannery Industrial Estate, Savar, Dhaka.', contact: '01711595882', email: 'asifleatherltd@gmail.com', memberNo: '033', product: 'Crust & Finished Leather' },
      { sl: '08', firm: 'Asia Tannery Ltd', rep: 'MD. Nurul Alam Shekh', designation: 'Managing Director', address: 'Plot no: ZS-26, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka.', contact: '01743764507', email: '', memberNo: '040', product: 'Crust & Finished Leather' },
      { sl: '09', firm: 'Aleya Tannery', rep: 'Md. Nurul Huda', designation: 'Proprietor', address: 'Plot no: ZS-12, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka.', contact: '01819216527', email: '', memberNo: '093', product: 'Crust & Finished Leather' },
      { sl: '10', firm: 'Abul Hossain Leather Complex-1', rep: 'Md. Saber Hosen Vuiya', designation: 'Proprietor', address: '61/2/A, Gojmohal, Hazaribagh, Dhaka-1209.', contact: '01924084238', email: '', memberNo: '113', product: 'Crust & Finished Leather' },
      { sl: '11', firm: 'A K Leather Complex Ltd.', rep: 'Md. Abdul Quddus', designation: 'Managing Director', address: 'Plot – YS1+YS2, Leather Industrial Area, Jhowchor, Heamayatpur, Savar, Dhaka.', contact: '01711543063, 02-8626728', email: '', memberNo: '120', product: 'Crust & Finished Leather' },
      { sl: '12', firm: 'Amin Tannery Ltd.', rep: 'Abdul Kader', designation: 'Managing Director', address: 'Plot no: YS-27, Leather Industrial Area, Savar, Dhaka.', contact: '01711594563, 02-8628908', email: '', memberNo: '122', product: 'Crust & Finished Leather' },
      { sl: '13', firm: 'Abul Hossain Leather Complex-2', rep: 'Md. Saber Hossain Bhuyan', designation: 'Proprietor', address: '61/2/B, Gozmohol, Dhaka-1209.', contact: '9634843, 01924084238', email: '', memberNo: '148', product: 'Crust & Finished Leather' },
      { sl: '14', firm: 'Aaron Leather Complex', rep: 'Mazakat Harun', designation: 'Proprietor', address: '124/3, Hazaribagh, Tannery Area, Dhaka-1209.', contact: '01711537931', email: '', memberNo: '152', product: 'Crust & Finished Leather' },
      { sl: '15', firm: 'Asian Leather Complex', rep: 'Mohammad Monir Hossan', designation: 'Proprietor', address: '143/1, Hazaribagh, Tannery Area, Dhaka.', contact: '01711523637', email: '', memberNo: '157', product: 'Crust & Finished Leather' },
      { sl: '16', firm: 'Abdus Sattar Leather', rep: 'Fociur Rahman', designation: 'Proprietor', address: '105/A, Hazaribagh, Tannery Area, Dhaka-1209.', contact: '01862444344 (Kamrul Uddin)', email: '', memberNo: '165', product: 'Crust & Finished Leather' },
      { sl: '17', firm: 'Al-Madina Tannery', rep: 'Noor Mohammad Chowdhury', designation: 'Proprietor', address: 'Plot no: ZD-15, Chamra Shilpa Nagari, Savar, Dhaka.', contact: '01713004922', email: '', memberNo: '171', product: 'Crust & Finished Leather' },
      { sl: '18', firm: 'Angon Leather Complex', rep: 'Md. Mahiuddin Miah', designation: 'Proprietor', address: 'Plot No: ZE-23, Tannery Industrial Estate, Hemayetpur, Savar, Dhaka.', contact: '01739772136', email: '', memberNo: '176', product: 'Crust & Finished Leather' },
      { sl: '19', firm: 'Ayub Brothers Tannery Ltd.', rep: 'Md. Monir Hossan', designation: 'Managing Director', address: 'Plot No- Ys28+Zs17, Tannery State, Hemayetpur, Savar, Dhaka.', contact: '', email: '', memberNo: '181', product: 'Crust & Finished Leather' },
      { sl: '20', firm: 'A. S Leather Export Ltd.', rep: 'Md. Azizur Rahman', designation: 'Managing Director', address: 'Plot: ZD-14, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.', contact: '01711430626', email: '', memberNo: '185', product: 'Crust & Finished Leather' },
      { sl: '21', firm: 'Aaron Leather Complex Ltd.', rep: 'Md. Arman Hossain', designation: 'Managing Director', address: 'Plot No: YE-15, BSCIC Industrial Area, Hemayetpur, Savar, Dhaka.', contact: '01819432695', email: 'aleltd2022@gmail.com', memberNo: '191', product: 'Crust & Finished Leather' },
    ],
  },
  {
    letter: 'B',
    members: [
      { sl: '01', firm: 'Bengal Pelli Export Co. Ltd.', rep: 'Shadek Babu', designation: 'Managing Director', address: 'Plot No: YE-4, Tannery Estate, Horindhora, Hemayetpur, Savar, Dhaka.', contact: '01720169930, 01713063095', email: '', memberNo: '034', product: 'Crust & Finished Leather' },
      { sl: '02', firm: 'Bhuyian Leather Complex', rep: 'Md. Nizam Uddin Bhuyian', designation: 'Proprietor', address: '104, Hazaribagh, Dhaka-1209.', contact: '9664078, 01715087400', email: '', memberNo: '094', product: 'Crust & Finished Leather' },
      { sl: '03', firm: 'Bhuyian Tannery', rep: 'Md. Jamal Uddin Bhuyian', designation: 'Proprietor', address: 'Plot no: YE-11, Leather Industrial Area, Horindora, Hemayetpur, Savar, Dhaka.', contact: '01712911572', email: '', memberNo: '096', product: 'Crust & Finished Leather' },
      { sl: '04', firm: 'Bashar Leather Complex', rep: 'Hajee Abdus Sattar', designation: 'Proprietor', address: '136/2, Hazaribagh, Tannery Area.', contact: '01819279888', email: 'basharleathercomplex@gmail.com', memberNo: '125', product: 'Crust & Finished Leather' },
      { sl: '05', firm: 'Bovine Leather', rep: 'Md. Sayed Hasan', designation: 'Managing Partner', address: 'Plot No: YS-6D, BSCIC Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.', contact: '01758363651', email: 'bovineleatherbd@gmail.com', memberNo: '192', product: 'Crust & Finished Leather' },
      { sl: '06', firm: 'Bay Tanneries Ltd.', rep: 'Asifur Rahman', designation: 'Managing Director', address: 'Plot No: XB1+XD1, Chamra Shilpa Nagari, Hemayetpur, Savar, Dhaka.', contact: '01711322895', email: 'rrahman@baygroupco.com', memberNo: '197', product: 'Crust & Finished Leather' },
    ],
  },
];

// ── Single row rendered as a table row (desktop) ────────────────
const MemberRow = ({ member }) => (
  <tr className={styles.row}>
    <td className={styles.slCell}>{member.sl}</td>
    <td className={styles.firmCell}>
      <p className={styles.firmName}>{member.firm}</p>
      <p className={styles.repName}>
        {member.rep}
        <span className={styles.designation}>{member.designation}</span>
      </p>
    </td>
    <td className={styles.addressCell}>
      <p className={styles.addressText}>{member.address}</p>
      {(member.contact || member.email) && (
        <p className={styles.contactText}>
          {member.contact && <span>{member.contact}</span>}
          {member.email && <span className={styles.emailText}>{member.email}</span>}
        </p>
      )}
    </td>
    <td className={styles.memberNoCell}>
      <span className={styles.memberNoBadge}>{member.memberNo}</span>
    </td>
    <td className={styles.productCell}>{member.product}</td>
  </tr>
);

// ── Single member rendered as a card (mobile) ────────────────────
const MemberCard = ({ member }) => (
  <div className={styles.card}>
    <div className={styles.cardTop}>
      <span className={styles.cardSl}>#{member.sl}</span>
      <span className={styles.cardMemberNo}>MEM {member.memberNo}</span>
    </div>

    <h3 className={styles.cardFirm}>{member.firm}</h3>
    <p className={styles.cardRep}>
      {member.rep}
      {member.designation && <span className={styles.cardDesignation}> · {member.designation}</span>}
    </p>

    <div className={styles.cardDivider} />

    <div className={styles.cardRowItem}>
      <span className={styles.cardLabel}>Address</span>
      <span className={styles.cardValue}>{member.address}</span>
    </div>

    {member.contact && (
      <div className={styles.cardRowItem}>
        <span className={styles.cardLabel}>Contact</span>
        <span className={styles.cardValue}>{member.contact}</span>
      </div>
    )}

    {member.email && (
      <div className={styles.cardRowItem}>
        <span className={styles.cardLabel}>Email</span>
        <span className={`${styles.cardValue} ${styles.cardEmail}`}>{member.email}</span>
      </div>
    )}

    <div className={styles.cardFooter}>
      <span className={styles.cardProductLabel}>Product</span>
      <span className={styles.cardProductValue}>{member.product}</span>
    </div>
  </div>
);

const SectionBlock = ({ section }) => (
  <div className={styles.sectionBlock}>
    <div className={styles.letterHeading}>
      <span className={styles.letterCircle}>{section.letter}</span>
      <span className={styles.letterLine} />
    </div>

    {/* Desktop / tablet: table */}
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.slCell}>Sl. No</th>
            <th className={styles.firmCell}>Name of the Firm &amp; Representative</th>
            <th className={styles.addressCell}>Address &amp; Contact</th>
            <th className={styles.memberNoCell}>Member No.</th>
            <th className={styles.productCell}>Product</th>
          </tr>
        </thead>
        <tbody>
          {section.members.map((m) => (
            <MemberRow key={m.memberNo || m.sl} member={m} />
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile: stacked cards */}
    <div className={styles.cardGrid}>
      {section.members.map((m) => (
        <MemberCard key={m.memberNo || m.sl} member={m} />
      ))}
    </div>
  </div>
);

const GeneralMemberListPage = () => {
  const [query, setQuery] = useState('');

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MEMBER_SECTIONS;

    return MEMBER_SECTIONS
      .map((section) => ({
        ...section,
        members: section.members.filter(
          (m) =>
            m.firm.toLowerCase().includes(q) ||
            m.rep.toLowerCase().includes(q) ||
            m.memberNo.toLowerCase().includes(q)
        ),
      }))
      .filter((section) => section.members.length > 0);
  }, [query]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Our Members</p>
          <h1 className={styles.heroTitle}>General Member List</h1>
          <div className={styles.heroDivider} />
          <p className={styles.heroDesc}>
            The complete directory of Bangladesh Tanners Association member firms, listed alphabetically by
            company name.
          </p>
        </Container>
      </div>

      {/* ── Members ──────────────────────────────────────────── */}
      <section className={styles.section}>
        <Container>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search by firm name, representative, or member no."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {filteredSections.length === 0 ? (
            <p className={styles.noResults}>No members found matching “{query}”.</p>
          ) : (
            filteredSections.map((section) => <SectionBlock key={section.letter} section={section} />)
          )}
        </Container>
      </section>
    </>
  );
};

export default GeneralMemberListPage;