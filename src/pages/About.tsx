import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FaBolt, FaEye, FaHeart, FaCheckCircle } from 'react-icons/fa';
import factoryImg from '../assets/factory_about.webp';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { company } from '../data/content';
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
      {/* Meta */}
      <title>About Unique Electrodes | ISO-Certified Earthing Electrode Manufacturer Surat</title>

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
                Operating from our facility at <strong>Plot No. B-116, Shed No. 1, Road No. 8,
                Udhyog Nagar, Udhana, Surat, Gujarat</strong>, we are a government-registered MSME
                manufacturer (UDYAM-GJ-22-0120594) and ISO 9001:2015 certified quality system.
              </p>
              <p>
                Our products — from Copper Bonded Solid Rods to Earth Enhancement Compound — adhere to
                stringent national and international standards including IS:3043 and IEEE Std 80,
                delivering a proven <strong>20+ years product lifespan</strong> across more than
                <strong> 1,000+ projects delivered</strong> nationwide.
              </p>
              <div className="about-story-details">
                <div><strong>Legal Name:</strong> {company.legalName}</div>
                <div><strong>Brand:</strong> {company.name}</div>
                <div><strong>Established:</strong> {company.established}</div>
                <div><strong>Projects:</strong> 1,000+ Delivered</div>
                <div><strong>Product Lifespan:</strong> 20+ Years</div>
                <div><strong>MSME Reg:</strong> {company.msme}</div>
                <div><strong>ISO Cert:</strong> {company.isoNo}</div>
              </div>
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

      {/* Registrations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Official Registrations</span>
            <h2 className="section-title">Government & Certification Details</h2>
          </div>
          <div className="about-reg-grid">
            {[
              { label: 'UDYAM Registration', value: company.msme, desc: 'MSME — Micro Manufacturing Enterprise' },
              { label: 'ISO Certificate', value: company.isoNo, desc: 'ISO 9001:2015 — Quality Management' },
              { label: 'NIC Code (Mfg)', value: '27320', desc: 'Manufacture of wiring accessories' },
              { label: 'NIC Code (Trade)', value: '46529', desc: 'Wholesale of electrical goods' },
            ].map((r, i) => (
              <div key={i} className="about-reg-card">
                <div className="about-reg-label">{r.label}</div>
                <div className="about-reg-value">{r.value}</div>
                <div className="about-reg-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
