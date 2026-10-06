import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import qualityImg from '../../assets/quality_lab.webp';
import './QualitySection.css';

const certBadges = [
  { label: 'ISO 9001:2015', sub: 'Quality Certified', color: '#C8791A' },
  { label: 'MSME Reg.', sub: 'UDYAM-GJ-22', color: '#16A34A' },
];

export default function QualitySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section quality-section" ref={ref}>
      <div className="container">
        <div className="quality-grid">
          {/* Text Side */}
          <motion.div
            className="quality-text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">Quality Assurance</span>
            <h2 className="quality-title">Quality Is Our Foundation</h2>
            <div className="accent-divider" />
            <p className="quality-desc">
              Every Unique Electrodes product undergoes rigorous quality checks and standards compliance
              before reaching your project site.
            </p>
            <p className="quality-desc">
              Our quality management system is <strong>ISO 9001:2015 certified</strong> (Cert No. TSNUK02740),
              and all products adhere strictly to <strong>IS:3043</strong> and <strong>IEC international standards</strong>.
            </p>

            <div className="quality-cert-badges">
              {certBadges.map((b, i) => (
                <motion.div
                  key={i}
                  className="quality-cert-badge"
                  style={{ '--cert-color': b.color } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="quality-cert-badge-label">{b.label}</span>
                  <span className="quality-cert-badge-sub">{b.sub}</span>
                </motion.div>
              ))}
            </div>

            <a href="#certifications" className="btn btn-primary">
              View All Certifications <FaArrowRight size={13} />
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="quality-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img src={qualityImg} alt="Quality testing lab" className="quality-img" />
            <div className="quality-img-overlay">
              <div className="quality-stat">
                <span className="quality-stat-number">4</span>
                <span className="quality-stat-label">Testing Labs & Certifications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
