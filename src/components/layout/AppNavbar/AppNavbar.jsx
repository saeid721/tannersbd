import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import useScrollPosition from '../../../hooks/useScrollPosition';
import config from '../../../utils/config';
import logo from '../../../assets/logo.png';
import styles from './AppNavbar.module.scss';

const NAV_ITEMS = [
  { type: 'link', to: '/', label: 'Home', end: true },
  {
    type: 'dropdown',
    label: 'About',
    items: [
      { to: '/about/history', label: 'History' },
      { to: '/about/speech', label: 'President Speech' }
    ]
  },
  {
    type: 'dropdown',
    label: 'Members',
    items: [
      { to: '/membersList', label: 'Member’s List' },
      { to: '/leadership', label: 'EC Member' },
      { to: '/members/life', label: 'Life Member' },
      { to: '/members/donor', label: 'Donor Member' },
      { to: '/members/permanent', label: 'Permanent Member' },
      { to: '/members/corporate', label: 'Corporate Member' },
      { to: '/members/foreign', label: 'Foreign Member' },
      { to: '/members/honorary', label: 'Honorary Member' },
      { to: '/members/use-club', label: 'Use club Member' },
      { to: '/members/associate', label: 'Associate Member' },
      { to: '/members/diplomate', label: 'Diplomate Member' },
    ]
  },
  { type: 'link', to: '/facilities', label: 'Facilities' },
  { type: 'link', to: '/menu', label: 'Menu' },
  { type: 'link', to: '/events', label: 'Events' },
  {
    type: 'dropdown',
    label: 'Gallery',
    items: [
      { to: '/gallery', label: 'Photo Gallery' },
      { to: '/video', label: 'Video Gallery' }
    ]
  },
  { type: 'link', to: '/notice', label: 'Notice' },
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

            {/* CTA Button */}
            <motion.div
              className={styles.ctaWrap}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: NAV_ITEMS.length * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/reservation"
                className={styles.ctaBtn}
                onClick={handleNavClick}
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Reservation
                </motion.span>
                <motion.span
                  className={styles.ctaArrow}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default AppNavbar;