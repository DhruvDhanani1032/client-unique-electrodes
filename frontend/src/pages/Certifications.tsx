import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaAward, FaCheckCircle, FaBolt } from 'react-icons/fa';
import { certifications } from '../data/content';
import './Certifications.css';

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Certifications</span>
          </div>
          <div className="page-hero-tag"><FaAward size={12} /> Certified & Tested</div>
          <h1 className="page-hero-title">Certifications & Test Reports</h1>
          <p className="page-hero-subtitle">
            Transparency. Trust. Tested. — All our credentials in one place.
          </p>
        </div>
      </section>

      <section className="section certs-page-section" ref={ref}>
        <div className="container">
          {/* Intro Stats */}
          <div className="certs-stats-strip">
            {[
              { num: '1', label: 'ISO Certification', detail: 'ISO 9001:2015' },
              { num: '2', label: 'CPRI Test Reports', detail: 'Bhopal, March 2026' },
              { num: '1', label: 'ERDA Test Report', detail: 'Vadodara, Jan 2026' },
              { num: '1', label: 'Lab Research Report', detail: 'Bhumi Research, Feb 2026' },
            ].map((s, i) => (
              <div key={i} className="certs-stat">
                <span className="certs-stat-num">{s.num}</span>
                <span className="certs-stat-label">{s.label}</span>
                <span className="certs-stat-detail">{s.detail}</span>
              </div>
            ))}
          </div>

          {/* Certification Cards */}
          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                style={{ '--cert-color': cert.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="cert-card-header">
                  <div className="cert-card-emoji">{cert.icon}</div>
                  <div>
                    <div className="cert-card-category">{cert.category}</div>
                    <h3 className="cert-card-title">{cert.title}</h3>
                  </div>
                </div>

                <div className="cert-card-body">
                  <div className="cert-card-field">
                    <label>Issued By</label>
                    <span>{cert.issuedBy}</span>
                  </div>
                  <div className="cert-card-field">
                    <label>Certificate / Report No.</label>
                    <span className="cert-card-number">{cert.certNo}</span>
                  </div>
                  <div className="cert-card-field">
                    <label>Scope / Finding</label>
                    <span>{cert.scope}</span>
                  </div>
                  {cert.date && (
                    <div className="cert-card-field">
                      <label>Date</label>
                      <span>{cert.date}</span>
                    </div>
                  )}
                </div>

                <div className="cert-card-footer">
                  <span className="cert-verified-badge">
                    <FaCheckCircle /> Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <FaBolt style={{ fontSize: '40px', color: 'var(--color-accent)', marginBottom: '16px' }} />
            <h2 className="section-title" style={{ color: 'white', marginBottom: '16px' }}>Need to Verify?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
              All our test reports and certifications can be verified directly with the issuing organizations.
              Contact us to request official copies of any certificate or test report.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">Request Documents →</a>
          </div>
        </div>
      </section>
    </>
  );
}
