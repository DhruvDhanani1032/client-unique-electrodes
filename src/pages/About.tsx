import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBolt, FaEye, FaHeart, FaCheckCircle } from 'react-icons/fa';
import factoryImg from '../assets/factory_about.webp';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { company } from '../data/content';
import SEO from '../components/common/SEO';
import './About.css';

const values = [
  { icon: <FaCheckCircle />, title: 'Quality First', desc: 'Every product is independently tested before it leaves our facility. No compromises.' },
  { icon: <FaHeart />, title: 'Integrity', desc: 'Transparent processes, honest claims, and genuine certifications — always.' },
  { icon: <FaBolt />, title: 'Safety Driven', desc: 'We build products that protect lives and infrastructure. Safety is not optional.' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <SEO
        title="About Us | Unique Electrodes - Earthing Solutions Surat"
        description="Learn about Unique Enterprise, manufacturer of maintenance-free chemical earthing electrodes, copper bonded rods and earthing compounds in Surat, Gujarat."
        keywords="about unique electrodes, earthing manufacturer Surat, unique enterprise Surat, electrical earthing company Gujarat"
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">About Us</span>
          </div>
          <div className="page-hero-tag"><FaBolt size={12} /> About Unique Electrodes</div>
          <h1 className="page-hero-title">Our Story & Mission</h1>
          <p className="page-hero-subtitle">
            A Surat-based MSME manufacturer with 1,000+ projects delivered and 20+ years product lifespan.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section about-story-section" ref={ref}>
        <div className="container">
          <div className="about-story-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img src={factoryImg} alt="Unique Enterprise Factory" className="about-story-img" />
            </motion.div>
            <motion.div
              className="about-story-text"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <span className="section-tag">Our Story</span>
              <h2 className="section-title about-story-title">Unique Enterprise</h2>
              <div className="accent-divider" />
              <p>
                Established on <strong>1st July 2021</strong>, Unique Enterprise was founded with a
                singular purpose — to manufacture earthing and lightning protection products that engineers
                and contractors can genuinely trust, backed by independent lab testing rather than just
                marketing claims.
              </p>
              <p>
                Operating from our manufacturing facility in <strong>Surat, Gujarat</strong>, we are a government-registered MSME
                manufacturer.
              </p>
              <p>
                Our products — from Copper Bonded Solid Rods to Earth Enhancement Compound — adhere to
                stringent national and international standards including IS:3043 and IEEE Std 80,
                delivering a proven <strong>20+ years product lifespan</strong> across more than
                <strong> 1,000+ projects delivered</strong> nationwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="about-mvv-grid">
            <div className="about-mvv-card primary">
              <div className="about-mvv-icon"><FaBolt /></div>
              <h3>Mission</h3>
              <p>To deliver safe, reliable, and independently tested earthing electrode products that protect India's electrical infrastructure — at every project, at every scale.</p>
            </div>
            <div className="about-mvv-card accent">
              <div className="about-mvv-icon"><FaEye /></div>
              <h3>Vision</h3>
              <p>To become India's most trusted brand for earthing and lightning protection — synonymous with quality, transparency, and safety.</p>
            </div>
            <div className="about-mvv-card dark">
              <div className="about-mvv-icon"><FaHeart /></div>
              <h3>Values</h3>
              <ul>
                {values.map((v, i) => (
                  <li key={i}><strong>{v.title}:</strong> {v.desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <div className="about-stats-grid">
            {company.stats.map((s, i) => (
              <div key={i} className="about-stat-item">
                <AnimatedCounter value={s.value} suffix={s.suffix} label={s.label} className="about-stat-counter" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
