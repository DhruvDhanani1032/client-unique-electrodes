import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import factoryImg from '../../assets/factory_about.png';
import SectionHeader from '../../components/ui/SectionHeader';
import './AboutSnippet.css';

const highlights = [
  'ISO 9001:2015 Quality Management Certified',
  'CPRI & ERDA tested — lab-verified performance',
  'MSME Registered Manufacturer (UDYAM-GJ-22-0120594)',
  'Complete earthing system solutions',
];

export default function AboutSnippet() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section about-snippet" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Image Side */}
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img src={factoryImg} alt="Unique Electrodes Manufacturing Facility" className="about-img" />
            <div className="about-img-badge">
              <span className="about-img-badge-number">2021</span>
              <span className="about-img-badge-label">Established</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <SectionHeader
              tag="About Us"
              title="Unique Electrodes"
              center={false}
            />
            <p className="about-text-body">
              Established on <strong>1st July 2021</strong>, <strong>Unique Enterprise</strong> operates
              under the <strong>UNIQUE ELECTRODES</strong> brand from our manufacturing facility in
              Udhna Udhyog Nagar, Surat, Gujarat.
            </p>
            <p className="about-text-body">
              We specialize in manufacturing world-class <strong>Copper Bonded Earthing Electrodes</strong>,
              GI Earthing Rods, Earth Enhancement Compounds, and Lightning Protection Systems — all backed
              by independent lab testing from CPRI, ERDA, and Bhumi Research Center.
            </p>

            <ul className="about-highlights">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="about-highlight-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <FaCheckCircle className="about-check" />
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            <Link to="/about" className="btn btn-outline-primary">
              Learn More About Us <FaArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
