import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logoImg from '../../assets/logo-unique-dark.png';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Our Products', hasDropdown: true },
  { to: '/quality', label: 'Quality' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 992) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Auto-close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const preventReopenRef = useRef(false);

  const handleMouseEnter = () => {
    if (preventReopenRef.current) return;
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
      preventReopenRef.current = false;
    }, 150);
  };

  const handleLinkClick = () => {
    preventReopenRef.current = true;
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopDropdownOpen(false);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      preventReopenRef.current = false;
    }, 350);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="navbar-announcement">
        <span>📍 Surat, Gujarat</span>
        <span className="sep">|</span>
        <a href="tel:+919512231350"><FaPhoneAlt size={10} /> +91 9512231350</a>
      </div>

      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Unique Electrodes Home">
            <img src={logoImg} alt="Unique Electrodes - Down to Earth" className="navbar-logo-img" />
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar-links">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li
                    key={link.to}
                    className="navbar-dropdown-wrapper"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `navbar-link navbar-link--has-dropdown ${isActive ? 'active' : ''}`}
                      onClick={handleLinkClick}
                    >
                      <span>{link.label}</span>
                      <FaChevronDown className={`dropdown-chevron ${desktopDropdownOpen ? 'open' : ''}`} size={10} />
                    </NavLink>

                    <AnimatePresence>
                      {desktopDropdownOpen && (
                        <motion.div
                          className="navbar-mega-menu"
                          initial={{ opacity: 0, y: 12, x: '-50%' }}
                          animate={{ opacity: 1, y: 0, x: '-50%' }}
                          exit={{ opacity: 0, y: 8, x: '-50%' }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={(e) => {
                            if ((e.target as HTMLElement).closest('a')) {
                              handleLinkClick();
                            }
                          }}
                        >
                          <div className="mega-menu-grid">
                            {/* Column 1: Pipe Type Chemical Earthing */}
                            <div className="mega-col">
                              <h4 className="mega-col-title">PIPE TYPE CHEMICAL EARTHING</h4>
                              <div className="mega-subgroup">
                                <span className="mega-subgroup-title">Strip In Pipe Chemical Earthing</span>
                                <ul className="mega-subgroup-list">
                                  <li>
                                    <Link to="/products/strip-in-pipe/galvanised" onClick={handleLinkClick}>
                                      Galvanised Strip In Pipe
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/products/strip-in-pipe/hot-dip-galvanised" onClick={handleLinkClick}>
                                      Hot Dip Galvanised Strip In Pipe
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="/products/strip-in-pipe/copper-bonded" onClick={handleLinkClick}>
                                      Copper Bonded Strip In Pipe
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="mega-subgroup">
                                <span className="mega-subgroup-title">Rod In Pipe Chemical Earthing</span>
                                <ul className="mega-subgroup-list">
                                  <li>
                                    <Link to="/products/rod-in-pipe/copper-bonded" onClick={handleLinkClick}>
                                      Copper Bonded Rod In Pipe
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* Column 2: Solid Rod Type Earthing */}
                            <div className="mega-col">
                              <h4 className="mega-col-title">SOLID ROD TYPE EARTHING</h4>
                              <ul className="mega-subgroup-list">
                                <li>
                                  <Link to="/products/solid-rod/copper-bonded" onClick={handleLinkClick}>
                                    Copper Bonded Solid Rod
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/products/solid-rod/hot-dip-galvanised" onClick={handleLinkClick}>
                                    Hot Dip Galvanised Solid Rod
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/products/solid-rod/copper-bonded-4m" onClick={handleLinkClick}>
                                    4 Meter Copper Bonded Rod
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/products/solid-rod/pure-copper" onClick={handleLinkClick}>
                                    Pure Copper Solid Rod
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Column 3: Lightning Protection & Specialty Products */}
                            <div className="mega-col">
                              <h4 className="mega-col-title">LIGHTNING PROTECTION SYSTEMS</h4>
                              <ul className="mega-subgroup-list">
                                <li>
                                  <Link to="/products/lightning-arrestors" onClick={handleLinkClick}>
                                    ESE Lightning Arrestor
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/products/lightning-arrestors" onClick={handleLinkClick}>
                                    Conventional Lightning Arrestor
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/products/lightning-arrestors" onClick={handleLinkClick}>
                                    Lightning Protection Accessories
                                  </Link>
                                </li>
                              </ul>

                              <h4 className="mega-col-title" style={{ marginTop: '20px' }}>SPECIALTY PRODUCTS</h4>
                              <ul className="mega-subgroup-list">
                                <li>
                                  <Link to="/products/specialty" onClick={handleLinkClick}>
                                    Solar Earthing Kit
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/products/specialty" onClick={handleLinkClick}>
                                    Ground Improving Compound
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="mega-menu-footer">
                            <span>IS:3043 compliant earthing solutions for industrial, telecom & solar sites.</span>
                            <Link to="/products" className="mega-all-btn" onClick={handleLinkClick}>
                              View All Products →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link to="/contact" className="btn btn-primary navbar-cta">
            Get a Quote →
          </Link>

          {/* Hamburger Toggle */}
          <button
            type="button"
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            >
              {/* Drawer Top Header with Logo and Close Button */}
              <div className="mobile-menu-header">
                <Link to="/" className="mobile-menu-brand" onClick={handleLinkClick} aria-label="Unique Electrodes Home">
                  <img src={logoImg} alt="Unique Electrodes - Down to Earth" className="mobile-drawer-logo-img" />
                </Link>
                <button
                  type="button"
                  className="mobile-menu-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="mobile-menu-links">
                {navLinks.map((link, i) => {
                  if (link.hasDropdown) {
                    return (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="mobile-products-wrapper"
                      >
                        <div
                          className="mobile-link mobile-link-with-chevron"
                          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                          role="button"
                          tabIndex={0}
                        >
                          <span>{link.label}</span>
                          <FaChevronDown className={`dropdown-chevron ${mobileProductsOpen ? 'open' : ''}`} size={13} />
                        </div>

                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              className="mobile-products-accordion"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="mobile-accordion-group">
                                <div className="mobile-accordion-cat">Pipe Type Chemical Earthing</div>
                                <Link to="/products/strip-in-pipe/galvanised" className="mobile-accordion-item" onClick={handleLinkClick}>• Galvanised Strip In Pipe</Link>
                                <Link to="/products/strip-in-pipe/hot-dip-galvanised" className="mobile-accordion-item" onClick={handleLinkClick}>• Hot Dip Galvanised Strip In Pipe</Link>
                                <Link to="/products/strip-in-pipe/copper-bonded" className="mobile-accordion-item" onClick={handleLinkClick}>• Copper Bonded Strip In Pipe</Link>
                                <Link to="/products/rod-in-pipe/copper-bonded" className="mobile-accordion-item" onClick={handleLinkClick}>• Copper Bonded Rod In Pipe</Link>
                              </div>

                              <div className="mobile-accordion-group">
                                <div className="mobile-accordion-cat">Solid Rod Type Earthing</div>
                                <Link to="/products/solid-rod/copper-bonded" className="mobile-accordion-item" onClick={handleLinkClick}>• Copper Bonded Solid Rod</Link>
                                <Link to="/products/solid-rod/hot-dip-galvanised" className="mobile-accordion-item" onClick={handleLinkClick}>• Hot Dip Galvanised Solid Rod</Link>
                                <Link to="/products/solid-rod/copper-bonded-4m" className="mobile-accordion-item" onClick={handleLinkClick}>• 4 Meter Copper Bonded Rod</Link>
                                <Link to="/products/solid-rod/pure-copper" className="mobile-accordion-item" onClick={handleLinkClick}>• Pure Copper Solid Rod</Link>
                              </div>

                              <div className="mobile-accordion-group">
                                <div className="mobile-accordion-cat">Lightning Protection</div>
                                <Link to="/products/lightning-arrestors" className="mobile-accordion-item" onClick={handleLinkClick}>• ESE Lightning Arrestor</Link>
                                <Link to="/products/lightning-arrestors" className="mobile-accordion-item" onClick={handleLinkClick}>• Conventional Lightning Arrestor</Link>
                                <Link to="/products/lightning-arrestors" className="mobile-accordion-item" onClick={handleLinkClick}>• Lightning Accessories</Link>
                              </div>

                              <div className="mobile-accordion-group">
                                <div className="mobile-accordion-cat">Specialty Products</div>
                                <Link to="/products/specialty" className="mobile-accordion-item" onClick={handleLinkClick}>• Solar Earthing Kit</Link>
                                <Link to="/products/specialty" className="mobile-accordion-item" onClick={handleLinkClick}>• Ground Improving Compound</Link>
                              </div>

                              <Link to="/products" className="mobile-all-products-link" onClick={handleLinkClick}>
                                Browse All Products →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    );
                  }
                  return (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Get a Quote Action Button */}
              <div className="mobile-drawer-cta">
                <Link to="/contact" className="btn btn-primary w-100" onClick={handleLinkClick}>
                  Get a Quote →
                </Link>
              </div>

              {/* Footer Quick Contact */}
              <div className="mobile-menu-footer">
                <a href="tel:+919512231350" className="mobile-footer-item">
                  <FaPhoneAlt size={12} /> +91 9512231350
                </a>
                <a href="mailto:uniqueelectrode2025@gmail.com" className="mobile-footer-item">
                  <FaEnvelope size={12} /> uniqueelectrode2025@gmail.com
                </a>
                <span className="mobile-footer-item mobile-footer-location">
                  <FaMapMarkerAlt size={12} /> Surat, Gujarat, India
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
