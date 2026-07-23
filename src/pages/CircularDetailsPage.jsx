// src/pages/CircularDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './CircularDetailsPage.module.scss';
import { NEWS_DATA } from '../data/newsData';

const CircularDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const foundNews = NEWS_DATA.find(item => item.id === parseInt(id));
    if (foundNews) {
      setNews(foundNews);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (!news) {
    return (
      <Container className={styles.notFound}>
        <h2>Circular not found</h2>
        <Link to="/circular" className={styles.backLink}>Back to Circular</Link>
      </Container>
    );
  }

  return (
    <div className={styles.newsDetailsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <Link to="/circular" className={styles.backButton}>
              ← Back to Circular
            </Link>
            <h1 className={styles.title}>{news.title}</h1>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <Container>
          <Row className="g-5">
            <Col lg={8}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.featuredImage}>
                  <img src={news.image} alt={news.title} />
                </div>
                
                <div className={styles.articleContent}>
                  <p className={styles.lead}>{news.excerpt}</p>
                  
                  <div className={styles.body}>
                    {news.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {news.images && news.images.length > 1 && (
                    <div className={styles.gallery}>
                      {news.images.map((img, idx) => (
                        <div key={idx} className={styles.galleryItem}>
                          <img src={img} alt={`${news.title} - ${idx + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Share Section */}
                <div className={styles.shareSection}>
                  <h4>Share this Circular:</h4>
                  <div className={styles.shareButtons}>
                    <button className={styles.shareBtn}>Facebook</button>
                    <button className={styles.shareBtn}>Twitter</button>
                    <button className={styles.shareBtn}>LinkedIn</button>
                    <button className={styles.shareBtn}>Email</button>
                  </div>
                </div>

                {/* Comment Section */}
                <div className={styles.commentSection}>
                  <h4>Leave a Reply</h4>
                  <form
                    className={styles.commentForm}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <textarea
                      className={styles.commentTextarea}
                      placeholder="Comment"
                      rows={5}
                      required
                    />
                    <div className={styles.commentFieldsRow}>
                      <input
                        type="text"
                        className={styles.commentInput}
                        placeholder="Name *"
                        required
                      />
                      <input
                        type="email"
                        className={styles.commentInput}
                        placeholder="Email *"
                        required
                      />
                    </div>
                    <input
                      type="url"
                      className={styles.commentInput}
                      placeholder="Website"
                    />
                    <button type="submit" className={styles.commentSubmitBtn}>
                      Post Comment
                    </button>
                  </form>
                </div>
              </motion.article>
            </Col>

            <Col lg={4}>
              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={styles.sidebar}
              >
                <div className={styles.sidebarBox}>
                  <h3>Recent Circular</h3>
                  <div className={styles.recentNews}>
                    {NEWS_DATA.filter(item => item.id !== news.id).slice(0, 4).map((item) => (
                      <Link 
                        key={item.id} 
                        to={`/news/${item.id}`}
                        className={styles.recentNewsItem}
                      >
                        <img src={item.image} alt={item.title} />
                        <div className={styles.recentNewsContent}>
                          <div className={styles.recentNewsDate}>{item.date}</div>
                          <div className={styles.recentNewsTitle}>{item.title.substring(0, 80)}...</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.aside>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CircularDetailsPage;