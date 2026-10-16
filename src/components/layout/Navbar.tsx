import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBolt, FaBars, FaTimes, FaPhoneAlt, FaChevronDown } from 'react-icons/fa';
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
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <FaBolt size={36} />
            </div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-brand">UNIQUE ELECTRODES</span>
              <span className="navbar-logo-sub">by Unique Enterprise</span>
            </div>
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

          {/* Hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            <ul className="mobile-menu-links">
              {navLinks.map((link, i) => {
                if (link.hasDropdown) {
                  return (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="mobile-products-wrapper"
                    >
                      <div
                        className="mobile-link mobile-link-with-chevron"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      >
                        <span>{link.label}</span>
                        <FaChevronDown className={`dropdown-chevron ${mobileProductsOpen ? 'open' : ''}`} size={14} />
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
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
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
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link to="/contact" className="btn btn-primary w-100 mt-2" onClick={handleLinkClick}>
                  Get a Quote →
                </Link>
              </motion.li>
            </ul>
            <div className="mobile-menu-footer">
              <a href="tel:+919512231350">📞 +91 9512231350</a>
              <a href="mailto:uniqueelectrode2025@gmail.com">✉️ uniqueelectrode2025@gmail.com</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
