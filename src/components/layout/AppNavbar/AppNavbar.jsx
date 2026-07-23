import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useScrollPosition from '../../../hooks/useScrollPosition';
import config from '../../../utils/config';
import logo from '../../../assets/logo2.png';
import styles from './AppNavbar.module.scss';

const NAV_ITEMS = [
  { type: 'link', to: '/', label: 'Home', end: true },
  {
    type: 'dropdown',
    label: 'About Us',
    items: [
      { to: '/about/history', label: 'BTA Profile' },
      { to: '/about/history', label: 'Mission & Vision' },
      { to: '/about/speech', label: 'Message from Chairman' },
      { to: '/about/history', label: 'Former Chairman' },
      { to: '/about/history', label: 'Management Staff' },
      { to: '/about/history', label: 'Organogram' },
    ]
  },
  {
    type: 'dropdown',
    label: 'Committee',
    items: [
      { to: '/membersList', label: 'Executive Committee (2025-2026)' },
      { to: '/leadership', label: 'Adviser Committee' },
    ]
  },
  {
    type: 'dropdown',
    label: 'Member Directory',
    items: [
      { to: '/membersList', label: 'General Member List (2025-2026)' },
      { to: '/leadership', label: 'Associate Member List (2025-2026)' },
      { to: '/members/life', label: 'Eligibility to be a BTA member' },
      { to: '/members/donor', label: 'Membership Benefits' },
    ]
  },
  {
    type: 'dropdown',
    label: 'News & Events',
    items: [
      { to: '/news', label: 'Latest News' },
      { to: '/circular', label: 'Circular for Member’s' },
      { to: '/pressRelease', label: 'Press Release' },
    ]
  },
  {
    type: 'dropdown',
    label: 'Gallery',
    items: [
      { to: '/gallery', label: 'Photo Gallery' },
      { to: '/video', label: 'Video Gallery' }
    ]
  },
  { type: 'link', to: '/faq', label: 'FAQ' },
  { type: 'link', to: '/contact', label: 'Contact' },
];

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const AppNavbar = () => {
  const scrollY = useScrollPosition();
  const [expanded, setExpanded] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isScrolled = scrollY > 60;

  useEffect(() => {
    setIsLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile && !expanded) {
      setHoveredDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredDropdown(null);
    }
  };

  const handleToggle = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setHoveredDropdown(null);
      setOpenDropdowns({});
    }
  };

  const handleNavClick = () => {
    setExpanded(false);
    setHoveredDropdown(null);
    setOpenDropdowns({});
  };

  const toggleDropdown = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMobile || expanded) {
      setOpenDropdowns(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  const isDropdownVisible = (index) => {
    if (isMobile || expanded) {
      return openDropdowns[index] || false;
    }
    return hoveredDropdown === index;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
        className={`${styles.navbar} ${isScrolled ? styles['navbar--scrolled'] : ''}`}
        fixed="top"
      >
        <Container fluid className={styles.navContainer}>
          {/* Brand / Logo */}
          <Navbar.Brand
            as={Link}
            to="/"
            className={styles.brand}
            onClick={handleNavClick}
          >
            <motion.div 
              className={styles.brandLogo}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={logo}
                alt={`${config.site.name} Logo`}
                className={styles.logoImg}
              />
            </motion.div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>Bangladesh Tanners Association</span>
              <span className={styles.brandSub}>Est. 1963 · BTA</span>
            </div>
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle 
            aria-controls="main-nav" 
            className={styles.toggle}
            onClick={handleToggle}
          >
            <motion.div
              className={styles.hamburgerWrapper}
              animate={expanded ? "open" : "closed"}
            >
              <motion.span
                className={styles.hamburgerLine}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={styles.hamburgerLine}
                variants={{
                  closed: { opacity: 1, x: 0 },
                  open: { opacity: 0, x: -20 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={styles.hamburgerLine}
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Navbar.Toggle>

          {/* Nav Links */}
          <Navbar.Collapse id="main-nav" className={styles.navCollapse}>
            <Nav className={styles.navLinks}>
              {NAV_ITEMS.map((navItem, i) => {
                if (navItem.type === 'link') {
                  const { to, label, end } = navItem;
                  return (
                    <motion.div
                      key={to}
                      custom={i}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      className={styles.navItemWrapper}
                    >
                      <Nav.Item>
                        <NavLink
                          to={to}
                          end={end}
                          className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles['navLink--active'] : ''} ${isScrolled ? styles['navLink--scrolled'] : ''}`
                          }
                          onClick={handleNavClick}
                        >
                          {({ isActive }) => (
                            <>
                              {label}
                              {isActive && (
                                <motion.span
                                  className={styles.activeIndicator}
                                  layoutId="activeIndicator"
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </>
                          )}
                        </NavLink>
                      </Nav.Item>
                    </motion.div>
                  );
                }

                // Dropdown item
                const { label, items } = navItem;
                const showDropdown = isDropdownVisible(i);
                
                return (
                  <motion.div
                    key={`dropdown-${i}`}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    className={`${styles.dropdownWrapper} ${expanded || isMobile ? styles['dropdownWrapper--mobile'] : ''}`}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavDropdown
                      title={label}
                      id={`nav-dropdown-${label.toLowerCase().replace(/ /g, '-')}`}
                      show={showDropdown}
                      className={`${styles.dropdown} ${isScrolled ? styles['dropdown--scrolled'] : ''}`}
                      onClick={(e) => toggleDropdown(i, e)}
                    >
                      <div className={styles.dropdownMenuWrapper}>
                        {items.map((sub, j) => (
                          <motion.div
                            key={j}
                            initial={showDropdown ? { opacity: 0, x: -10 } : false}
                            animate={showDropdown ? { opacity: 1, x: 0 } : false}
                            transition={{ 
                              delay: j * 0.03,
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          >
                            <NavDropdown.Item
                              as={Link}
                              to={sub.to}
                              className={styles.dropdownItem}
                              onClick={handleNavClick}
                            >
                              {sub.label}
                            </NavDropdown.Item>
                          </motion.div>
                        ))}
                      </div>
                    </NavDropdown>
                  </motion.div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default AppNavbar;