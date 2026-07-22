// src/pages/ContactPage.jsx
import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import styles from './ContactPage.module.scss';

const OFFICE = {
  address: 'Concord Sohel Square, 9-A, 9th Floor, Plot # 775 (old), 75 (new), Satmasjid Road, Dhanmondi-27, Dhaka-1209.',
  tel: '02223312024, 02223312025',
  phone: '+8801703-248923',
  email: 'tanners@net2bd.com',
  web: 'www.tannersbd.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.190!2d90.373!3d23.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBangladesh+Tanners+Association!5e0!3m2!1sen!2sbd',
};

const INITIAL_VALUES = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };

const validate = (values) => {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = 'First name is required.';
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.';
  if (!values.email.trim()) errors.email = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Enter a valid email.';
  if (!values.phone.trim()) errors.phone = 'Phone number is required.';
  return errors;
};

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...values }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ firstName: true, lastName: true, email: true, phone: true });

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // TODO: wire this up to your actual contact/email API endpoint
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitSuccess(true);
      setValues(INITIAL_VALUES);
      setTouched({});
    } catch (err) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.heroTitle}>Contact Us</h1>
        </Container>
      </div>

      {/* ── Breadcrumb ───────────────────────────────── */}
      <div className={styles.breadcrumb}>
        <Container className={styles.breadcrumbInner}>
          <Link to="/" className={styles.breadcrumbLink}>Bangladesh Tanners Association (BTA)</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>Contact Us</span>
        </Container>
      </div>

      {/* ── Form + Info ───────────────────────────────── */}
      <motion.section
        ref={ref}
        className={styles.formSection}
        variants={heroVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Container>
          <motion.p className={styles.formIntro} variants={itemVariants}>
            We're committed to helping you. For any queries or assistance, please contact at the
            mentioned address or leave an email. Thanks for being with us.
          </motion.p>

          <Row className="g-5">
            {/* ── Form (Left) ─────────────────────────── */}
            <Col lg={8}>
              {submitSuccess && (
                <motion.div
                  className={styles.successAlert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ✅ Your message has been sent! We'll get back to you shortly.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  className={styles.errorAlert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ⚠ {submitError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <Row className="g-3">
                  <Col md={6}>
                    <motion.div variants={itemVariants}>
                      <input
                        className={`${styles.formInput} ${touched.firstName && errors.firstName ? styles.inputError : ''}`}
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.firstName && errors.firstName && (
                        <span className={styles.fieldError}>{errors.firstName}</span>
                      )}
                    </motion.div>
                  </Col>
                  <Col md={6}>
                    <motion.div variants={itemVariants}>
                      <input
                        className={`${styles.formInput} ${touched.lastName && errors.lastName ? styles.inputError : ''}`}
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.lastName && errors.lastName && (
                        <span className={styles.fieldError}>{errors.lastName}</span>
                      )}
                    </motion.div>
                  </Col>
                  <Col md={6}>
                    <motion.div variants={itemVariants}>
                      <input
                        className={`${styles.formInput} ${touched.email && errors.email ? styles.inputError : ''}`}
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <span className={styles.fieldError}>{errors.email}</span>
                      )}
                    </motion.div>
                  </Col>
                  <Col md={6}>
                    <motion.div variants={itemVariants}>
                      <input
                        className={`${styles.formInput} ${touched.phone && errors.phone ? styles.inputError : ''}`}
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number *"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.phone && errors.phone && (
                        <span className={styles.fieldError}>{errors.phone}</span>
                      )}
                    </motion.div>
                  </Col>
                  <Col md={12}>
                    <motion.div variants={itemVariants}>
                      <input
                        className={styles.formInput}
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={values.subject}
                        onChange={handleChange}
                      />
                    </motion.div>
                  </Col>
                  <Col md={12}>
                    <motion.div variants={itemVariants}>
                      <textarea
                        className={styles.formTextarea}
                        name="message"
                        placeholder="Message"
                        rows={7}
                        value={values.message}
                        onChange={handleChange}
                      />
                    </motion.div>
                  </Col>
                </Row>

                <motion.div variants={itemVariants} className={styles.submitWrap}>
                  <motion.button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            </Col>

            {/* ── Office Info (Right) ─────────────────── */}
            <Col lg={4}>
              <motion.div
                className={styles.infoSidebar}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className={styles.infoHeading}>Office Address</h2>
                <p className={styles.infoAddress}>{OFFICE.address}</p>
                <ul className={styles.infoList}>
                  <li><strong>Telephone:</strong> {OFFICE.tel} ; <strong>Phone:</strong> {OFFICE.phone}</li>
                  <li><strong>E-mail:</strong> <a href={`mailto:${OFFICE.email}`}>{OFFICE.email}</a></li>
                  <li><strong>Web:</strong> <a href={`https://${OFFICE.web}`} target="_blank" rel="noopener noreferrer">{OFFICE.web}</a></li>
                </ul>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* ── Map (Full Width, Bottom) ─────────────────── */}
      <section className={styles.mapSection}>
        <Container>
          <motion.div
            className={styles.mapWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="BTA Office Location"
              src={OFFICE.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;