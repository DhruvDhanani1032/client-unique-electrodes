import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle } from 'react-icons/fa';
import { certifications } from '../../data/content';
import SectionHeader from '../../components/ui/SectionHeader';
import './CertificationsSection.css';

const certStats = [
  { num: '4+', label: 'Accreditations & Standards', detail: 'GST, IS 3043, MSME, ISO 9001' },
  { num: 'ISO', label: 'Quality Certification', detail: 'ISO 9001:2015 (TSNUK02740)' },
  { num: '100%', label: 'Tested & Verified', detail: 'Bhumi Research & National Standards' },
];

export default function CertificationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section home-certs-section" id="certifications" ref={ref}>
      <div className="container">
        <SectionHeader
          tag="Certifications & Approvals"
          title="Official Accreditations & Reports"
          subtitle="Transparency and trust. All our official credentials, government registrations, and lab reports."
        />

        {/* Top Summary Stats */}
        <div className="home-certs-stats-strip">
          {certStats.map((s, i) => (
            <motion.div
              key={i}
              className="home-certs-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="home-certs-stat-num">{s.num}</span>
              <span className="home-certs-stat-label">{s.label}</span>
              <span className="home-certs-stat-detail">{s.detail}</span>
            </motion.div>
          ))}
        </div>

        {/* Certification Cards Grid */}
        <div className="home-certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="home-cert-card"
              style={{ '--cert-color': cert.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <div className="home-cert-card-header">
                <div className="home-cert-card-emoji">{cert.icon}</div>
                <div>
                  <div className="home-cert-card-category">{cert.category}</div>
                  <h3 className="home-cert-card-title">{cert.title}</h3>
                </div>
              </div>

              <div className="home-cert-card-body">
                <div className="home-cert-card-field">
                  <label>Issued By</label>
                  <span>{cert.issuedBy}</span>
                </div>
                <div className="home-cert-card-field">
                  <label>Certificate / Report No.</label>
                  <span className="home-cert-card-number">{cert.certNo}</span>
                </div>
                <div className="home-cert-card-field">
                  <label>Scope / Finding</label>
                  <span>{cert.scope}</span>
                </div>
                {cert.date && (
                  <div className="home-cert-card-field">
                    <label>Date</label>
                    <span>{cert.date}</span>
                  </div>
                )}
              </div>

              <div className="home-cert-card-footer">
                <span className="home-cert-verified-badge">
                  <FaCheckCircle /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
