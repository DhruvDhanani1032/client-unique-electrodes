import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { company } from '../../data/content';
import logoImg from '../../assets/logo-unique-dark.png';
import './Footer.css';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  // { to: '/industries', label: 'Industries' },
  { to: '/quality', label: 'Quality' },
  // { to: '/certifications', label: 'Certifications' },
  // { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/contact', label: 'Contact' },
];

const productLinks = [
  { to: '/products/galvanised-strip-in-pipe', label: 'Strip In Pipe' },
  { to: '/products/copper-bonded-rod-in-pipe', label: 'Rod In Pipe' },
  { to: '/products/copper-bonded-solid-rod', label: 'CB Solid Rod' },
  { to: '/products/hot-dip-galvanised-solid-rod', label: 'HDG Solid Rod' },
  { to: '/products/ese-lightning-arrestor', label: 'ESE Lightning Arrestor' },
  { to: '/products/solar-earthing-kit', label: 'Solar Earthing Kit' },
  { to: '/products/ground-improving-compound', label: 'Ground Improving Compound' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top CTA Strip */}
      {/* <div className="footer-cta-strip">
        <div className="container">
          <div className="footer-cta-inner">
            <div>
              <h3>Ready to Ground Your Project Right?</h3>
              <p>Get expert advice and a custom quote for your earthing requirements.</p>
            </div>
            <div className="footer-cta-actions">
              <Link to="/contact" className="btn btn-primary">Get a Quote →</Link>
              <a href="tel:+919512231350" className="btn btn-outline-white">
                <FaPhoneAlt size={14} /> +91 9512231350
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="Unique Electrodes Home">
                <img src={logoImg} alt="Unique Electrodes - Down to Earth" className="footer-logo-img" />
              </Link>
              <p className="footer-tagline">{company.tagline}</p>
              <div className="footer-badges">
                {/* <span className="footer-badge">ISO 9001:2015</span> */}
                <span className="footer-badge">IS:3043 Compliant</span>
                <span className="footer-badge">MSME Certified</span>
              </div>
              {/* <div className="footer-social">
                <a href="https://wa.me/919512231350" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul>
                {quickLinks.map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-col">
              <h4 className="footer-col-title">Products</h4>
              <ul>
                {productLinks.map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span>{company.address.full}</span>
                </li>
                <li>
                  <FaPhoneAlt className="footer-contact-icon" />
                  <div>
                    <a href={`tel:${company.contacts[0]}`}>{company.contacts[0]}</a>
                    <br />
                    <a href={`tel:${company.contacts[1]}`}>{company.contacts[1]}</a>
                  </div>
                </li>
                <li>
                  <FaEnvelope className="footer-contact-icon" />
                  <a href={`mailto:${company.emails[0]}`}>{company.emails[0]}</a>
                </li>
                <li>
                  <FaGlobe className="footer-contact-icon" />
                  <a href={`https://${company.website}`} target="_blank" rel="noreferrer">{company.website}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Unique Enterprise. All Rights Reserved.</p>
            <p><strong>MSME Registered Enterprise</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
