import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaDownload,
  FaFileInvoiceDollar,
  FaBolt,
  FaAward,
} from 'react-icons/fa';
import heroBg from '../../assets/hero_bg.webp';
import './HeroSection.css';

const trustBadges = [
  { icon: <FaFileInvoiceDollar />, label: 'GST Registered' },
  { icon: <FaBolt />, label: 'IS 3043 Compliant' },
  { icon: <FaAward />, label: 'MSME Certified' },
  // { icon: <FaCheckCircle />, label: 'ISO 9001:2015' },
];

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      {/* Background */}
      <div className="hero-bg">
        <motion.img
          src={heroBg}
          alt="Industrial electrical installation"
          className="hero-bg-img"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'linear' }}
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="container hero-content">
        <motion.div
          className="hero-inner"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {/* Tag */}
          {/* <motion.div
            className="hero-tag"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <FaBolt size={12} />
            <span>ISO 9001:2015 Certified</span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            className="hero-headline"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            Grounded in Quality.
            <br />
            <span className="hero-headline-accent">Built for Safety.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="hero-subtext"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            India's trusted manufacturer of <strong>Copper Bonded Earthing Electrodes</strong>,
            Earth Enhancement Compounds &amp; Lightning Protection Systems.
             Surat, Gujarat.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link to="/products" className="btn btn-primary btn-lg">
              Explore Products <FaArrowRight size={14} />
            </Link>
            <a
              href="/unique-enterprise.pdf"
              download
              className="btn btn-outline-white btn-lg"
            >
              <FaDownload size={14} /> Download Brochure
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="hero-badges"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.1 } } }}
          >
            {trustBadges.map((b, i) => (
              <motion.div
                key={i}
                className="hero-badge"
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              >
                <span className="hero-badge-icon">{b.icon}</span>
                <span>{b.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
