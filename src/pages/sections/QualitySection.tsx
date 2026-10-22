import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';
import qualityImg from '../../assets/quality_lab.webp';
import './QualitySection.css';

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
              All products adhere strictly to <strong>IS:3043</strong> and <strong>IEC international standards</strong>,
              ensuring consistent and reliable protection.
            </p>

            <Link to="/certifications" className="btn btn-primary quality-btn">
              View All Certifications <FaArrowRight size={13} />
            </Link>
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
