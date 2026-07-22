// src/pages/ReservationPage.jsx
import React, { useRef } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import AppInput from '../components/common/AppInput';
import AppButton from '../components/common/AppButton';
import useForm from '../hooks/useForm';
import { submitReservation } from '../services/reservationService';
import styles from './ReservationPage.module.scss';

const FACILITIES = [
  { value: 'swimming-pool',   label: 'Swimming Pool' },
  { value: 'boat-jetty',      label: 'Boat Jetty & Marina' },
  { value: 'gym',             label: 'Gym & Fitness Centre' },
  { value: 'tennis',          label: 'Tennis Courts' },
  { value: 'badminton-squash',label: 'Badminton & Squash' },
  { value: 'restaurant',      label: 'River View Restaurant' },
  { value: 'banquet',         label: 'Grand Banquet Hall' },
  { value: 'members-lounge',  label: "Members' Lounge" },
];

const TIME_SLOTS = [
  { value: '08:00', label: '08:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '20:00', label: '08:00 PM' },
];

const INITIAL_VALUES = {
  name: '', email: '', phone: '', facilityId: '',
  date: '', time: '', guests: '', notes: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.name.trim())       errors.name       = 'Full name is required.';
  if (!values.email.trim())      errors.email      = 'Email address is required.';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Please enter a valid email.';
  if (!values.phone.trim())      errors.phone      = 'Phone number is required.';
  if (!values.facilityId)        errors.facilityId = 'Please select a facility.';
  if (!values.date)              errors.date       = 'Please select a date.';
  if (!values.time)              errors.time       = 'Please select a time slot.';
  if (!values.guests || isNaN(values.guests) || +values.guests < 1)
                                 errors.guests     = 'Enter a valid number of guests.';
  return errors;
};

const INFO_ITEMS = [
  { icon: '📞', label: 'Phone', value: '+88 01713005821' },
  { icon: '✉',  label: 'Email', value: 'noakhlaiclubdhaka@yahoo.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri 9AM–6PM, Sat 9AM–3PM' },
  { icon: '📍', label: 'Location', value: 'Gaus-E-Pak Bhaban, 17th Floor, 28/G/1 Toyenbee Circular Road, Motijheel C/A, Dhaka-1000' },
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

const formVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05
    }
  }
};

const sidebarVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const ReservationPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleSubmit = async (values) => {
    await submitReservation(values);
  };

  const {
    values, errors, touched, isSubmitting,
    submitError, submitSuccess,
    handleChange, handleBlur, handleSubmit: onSubmit,
  } = useForm(INITIAL_VALUES, validate, handleSubmit);

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
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
            Plan Your Visit
          </motion.p>
          <motion.h1 
            className={styles.heroTitle}
            variants={heroItemVariants}
          >
            Make a Reservation
          </motion.h1>
          <motion.div 
            className={styles.heroDivider}
            variants={heroItemVariants}
          />
          <motion.p 
            className={styles.heroDesc}
            variants={heroItemVariants}
          >
            Reserve facilities, book dining, or schedule your next event at Noakhali Club Dhaka Ltd.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── Form Section ────────────────────────────────── */}
      <motion.section 
        ref={ref}
        className={styles.formSection}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container>
          <Row className="g-5">
            {/* ── Form ────────────────────────────────── */}
            <Col lg={8}>
              <motion.div 
                className={styles.formCard}
                variants={formVariants}
              >
                <motion.div 
                  className={styles.formCardHeader}
                  variants={heroItemVariants}
                >
                  <h2 className={styles.formTitle}>Reservation Details</h2>
                  <p className={styles.formSubtitle}>
                    Complete the form below and our team will confirm within 24 hours.
                  </p>
                </motion.div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert variant="success" className={styles.successAlert}>
                      ✅ Your reservation request has been received! We'll contact you within 24 hours.
                    </Alert>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert variant="danger" className={styles.errorAlert}>
                      ⚠ {submitError}
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} noValidate>
                  {/* ── Personal Info ─────────────────── */}
                  <div className={styles.fieldGroup}>
                    <h3 className={styles.fieldGroupTitle}>Personal Information</h3>
                    <Row className="g-3">
                      <Col md={6}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Full Name" name="name" type="text"
                            value={values.name} onChange={handleChange} onBlur={handleBlur}
                            error={touched.name && errors.name}
                            placeholder="Your full name" required />
                        </motion.div>
                      </Col>
                      <Col md={6}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Email Address" name="email" type="email"
                            value={values.email} onChange={handleChange} onBlur={handleBlur}
                            error={touched.email && errors.email}
                            placeholder="you@example.com" required />
                        </motion.div>
                      </Col>
                      <Col md={6}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Phone Number" name="phone" type="tel"
                            value={values.phone} onChange={handleChange} onBlur={handleBlur}
                            error={touched.phone && errors.phone}
                            placeholder="+880 1XXX XXXXXX" required />
                        </motion.div>
                      </Col>
                      <Col md={6}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Number of Guests" name="guests" type="number"
                            value={values.guests} onChange={handleChange} onBlur={handleBlur}
                            error={touched.guests && errors.guests}
                            placeholder="e.g. 4" required min="1" max="800" />
                        </motion.div>
                      </Col>
                    </Row>
                  </div>

                  {/* ── Booking Details ───────────────── */}
                  <div className={styles.fieldGroup}>
                    <h3 className={styles.fieldGroupTitle}>Booking Details</h3>
                    <Row className="g-3">
                      <Col md={12}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Select Facility" name="facilityId" type="select"
                            value={values.facilityId} onChange={handleChange} onBlur={handleBlur}
                            error={touched.facilityId && errors.facilityId}
                            options={FACILITIES} placeholder="Choose a facility" required />
                        </motion.div>
                      </Col>
                      <Col md={6}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Preferred Date" name="date" type="date"
                            value={values.date} onChange={handleChange} onBlur={handleBlur}
                            error={touched.date && errors.date}
                            min={minDateStr} required />
                        </motion.div>
                      </Col>
                      <Col md={6}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Preferred Time" name="time" type="select"
                            value={values.time} onChange={handleChange} onBlur={handleBlur}
                            error={touched.time && errors.time}
                            options={TIME_SLOTS} placeholder="Select a time slot" required />
                        </motion.div>
                      </Col>
                      <Col md={12}>
                        <motion.div variants={heroItemVariants}>
                          <AppInput label="Special Requests / Notes" name="notes" type="textarea"
                            value={values.notes} onChange={handleChange} onBlur={handleBlur}
                            placeholder="Any dietary requirements, accessibility needs, or special arrangements…"
                            rows={4} />
                        </motion.div>
                      </Col>
                    </Row>
                  </div>

                  <motion.div 
                    className={styles.formFooter}
                    variants={heroItemVariants}
                  >
                    <p className={styles.formNote}>
                      * Reservations are subject to availability and member status verification.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AppButton
                        type="submit"
                        variant="gold"
                        size="lg"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        Submit Reservation Request
                      </AppButton>
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            </Col>

            {/* ── Sidebar ──────────────────────────── */}
            <Col lg={4}>
              <motion.div 
                className={styles.sidebar}
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
              >
                <h3 className={styles.sidebarTitle}>Contact & Information</h3>
                <ul className={styles.infoList}>
                  {INFO_ITEMS.map(({ icon, label, value }, index) => (
                    <motion.li 
                      key={label} 
                      className={styles.infoItem}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.08 + 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <span className={styles.infoIcon}>{icon}</span>
                      <div>
                        <span className={styles.infoLabel}>{label}</span>
                        <span className={styles.infoValue}>{value}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  className={styles.sidebarNote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className={styles.sidebarNoteTitle}>Booking Policy</h4>
                  <ul className={styles.policyList}>
                    {[
                      'Reservations must be made at least 24 hours in advance.',
                      'Cancellations require 12 hours notice.',
                      'Facility bookings are for members and authorised guests only.',
                      'Confirmation will be sent to your registered email.'
                    ].map((policy, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05 + 0.6 
                        }}
                      >
                        {policy}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </>
  );
};

export default ReservationPage;