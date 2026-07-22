// src/pages/FaqPage.jsx
import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styles from './FaqPage.module.scss';

const FAQS = [
  {
    question: 'What is the Bangladesh Tanners Association (BTA)?',
    answer: 'BTA is the national trade association representing the tanning industry in Bangladesh, established in 1963. We advocate for our members, drive policy reform, and support the sustainable growth of the country\'s leather sector.',
  },
  {
    question: 'How can I become a member of BTA?',
    answer: 'Tanneries and businesses operating in the leather sector can apply for membership by submitting the required documents to our office. Visit our "Become a Member" page or contact us directly for the eligibility criteria and application process.',
  },
  {
    question: 'What are the benefits of BTA membership?',
    answer: 'Members gain access to industry advocacy, policy representation, networking opportunities, participation in trade fairs and exhibitions, and updates on regulatory and market developments affecting the leather sector.',
  },
  {
    question: 'Where is the BTA office located?',
    answer: 'Our office is located at Concord Sohel Square, 9-A, 9th Floor, Plot # 775 (old), 75 (new), Satmasjid Road, Dhanmondi-27, Dhaka-1209.',
  },
  {
    question: 'How do I contact BTA for queries or support?',
    answer: 'You can reach us via phone at +8801703-248923, email at tanners@net2bd.com, or through the contact form on our website. Our team typically responds within 24 hours.',
  },
  {
    question: 'Does BTA organize industry events or exhibitions?',
    answer: 'Yes, BTA regularly organizes and participates in industry events, workshops, seminars, and trade exhibitions such as the Bangladesh Leather & Footwear Expo, in collaboration with our members and international partners.',
  },
  {
    question: 'What role does BTA play in environmental compliance?',
    answer: 'BTA works closely with member tanneries to promote sustainable practices, including proper effluent treatment, chrome recovery, and solid waste management, especially following the relocation to the Savar industrial park.',
  },
];

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const FaqItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        className={styles.faqQuestion}
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <motion.span
          className={styles.faqIcon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.faqAnswerWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.faqAnswer}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
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

const FaqPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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
      <motion.div
        className={styles.hero}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.heroBg} />
        <Container className={styles.heroContent}>
          <motion.p className={styles.heroEyebrow} variants={heroItemVariants}>
            Need Help?
          </motion.p>
          <motion.h1 className={styles.heroTitle} variants={heroItemVariants}>
            FAQ
          </motion.h1>
          <motion.div className={styles.heroDivider} variants={heroItemVariants} />
          <motion.p className={styles.heroDesc} variants={heroItemVariants}>
            Answers to common questions about BTA membership, services, and the leather industry.
          </motion.p>
        </Container>
      </motion.div>

      {/* ── FAQ Section ───────────────────────────────── */}
      <motion.section
        ref={ref}
        className={styles.faqSection}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Container>
          <div className={styles.faqList}>
            {FAQS.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </Container>
      </motion.section>

      {/* ── Still Have Questions? Contact Form ────────── */}
      <section className={styles.formSection}>
        <Container>
          <motion.p
            className={styles.formIntro}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Still have questions? Send us a message and our team will get back to you.
          </motion.p>

          <div className={styles.formWrap}>
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
              <div className={styles.formGrid}>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div className={styles.fullWidth}>
                  <input
                    className={styles.formInput}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fullWidth}>
                  <textarea
                    className={styles.formTextarea}
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.submitWrap}>
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
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FaqPage;