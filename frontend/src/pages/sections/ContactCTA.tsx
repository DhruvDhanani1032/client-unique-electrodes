import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ContactCTA.css';

export default function ContactCTA() {
  return (
    <section className="contact-cta-section">
      <div className="contact-cta-bg" />
      <div className="container">
        <div className="contact-cta-inner">
          <div className="contact-cta-text">
            <h2 className="contact-cta-title">Ready to Ground Your Project Right?</h2>
            <p className="contact-cta-sub">
              Get expert advice and a custom quote for your earthing requirements — from our team in Surat, Gujarat.
            </p>
          </div>
          <div className="contact-cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <FaArrowRight size={14} />
            </Link>
            {/* <a href="tel:+919512231350" className="btn btn-outline-white btn-lg">
              <FaPhoneAlt size={14} /> +91 9512231350
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
