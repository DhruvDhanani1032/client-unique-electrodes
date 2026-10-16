import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaBolt,
  FaLayerGroup,
  FaFileAlt,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import qualityImg from "../assets/quality_lab.webp";
import SEO from "../components/common/SEO";
import SectionHeader from "../components/ui/SectionHeader";
import "./Quality.css";

// 4 Core Quality Pillars (Purely theoretical, no math tables)
const qualityPillars = [
  {
    title: "Material Purity & Integrity",
    subtitle: "Certified Raw Materials",
    desc: "We exclusively use tested low-carbon steel cores and high-purity electrolytic copper cathodes to guarantee maximum mechanical strength and uncompromised electrical conductivity.",
    icon: FaLayerGroup,
  },
  {
    title: "Bonding & Surface Protection",
    subtitle: "Long-Term Corrosion Defense",
    desc: "Advanced metallurgical bonding and uniform galvanization protect the core against harsh soil chemicals, ensuring the outer layer never cracks, peels, or flakes during installation.",
    icon: FaShieldAlt,
  },
  {
    title: "Fault Current & Surge Safety",
    subtitle: "Reliable Dissipation",
    desc: "Every product is engineered to safely channel high-voltage lightning strikes and dangerous electrical short-circuits directly into the ground, safeguarding human life and capital equipment.",
    icon: FaBolt,
  },
  {
    title: "Batch Verification & Inspection",
    subtitle: "Complete Traceability",
    desc: "Each manufacturing batch is systematically audited before dispatch, supported by verified test reports and material test certificates for complete client confidence.",
    icon: FaFileAlt,
  },
];

// Recognized Engineering Standards
const standardsList = [
  { code: "IS:3043:2018", title: "Code of Practice for Earthing" },
  { code: "IEEE Std 80", title: "Guide for Safety in AC Substation Grounding" },
  { code: "IEC 62561", title: "Lightning Protection & Earthing Components" },
  { code: "BS 7430", title: "Code of Practice for Protective Earthing" },
  { code: "UL 467", title: "Grounding & Bonding Equipment Standard" },
  { code: "IS:2629 / IS:4759", title: "Hot Dip Galvanizing of Iron & Steel" },
];

export default function Quality() {
  const { ref: pillarsRef, inView: pillarsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <SEO
        title="Quality Assurance & Engineering Standards | Unique Electrodes"
        description="Learn about Unique Electrodes uncompromising quality philosophy, material integrity, and adherence to national and global earthing standards."
        keywords="earthing quality assurance, IS:3043 compliance, copper bonded electrode testing, Unique Electrodes Surat"
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Quality</span>
          </div>
          <div className="page-hero-tag">
            <FaShieldAlt size={12} /> Quality Assurance
          </div>
          <h1 className="page-hero-title">Quality Is Our Foundation</h1>
          <p className="page-hero-subtitle">
            Manufactured with certified raw materials, proven engineering practices, and tested for dependable lifelong electrical safety.
          </p>
        </div>
      </section>

      {/* Section 1: Quality Philosophy & Commitment */}
      <section className="section quality-page-intro">
        <div className="container">
          <div className="quality-page-grid">
            <div className="quality-page-text">
              <span className="section-tag">Our Commitment</span>
              <h2 className="section-title quality-page-title">
                Why Independent Testing Matters
              </h2>
              <div className="accent-divider" />
              <p>
                At Unique Electrodes, we believe that an earthing system is not just another hardware component — it is the primary safety shield that protects precious human lives and expensive electrical machinery from catastrophic failures.
              </p>
              <p>
                That is why we never rely solely on internal test claims. Every product category we manufacture is verified by leading third-party testing laboratories to ensure predictable electrical dissipation and complete peace of mind in the field.
              </p>
              <div className="quality-checklist">
                {[
                  "Certified raw materials sourced strictly from trusted metallurgical vendors",
                  "Independent third-party laboratory verification for project credibility",
                  "Traceable manufacturing records and batch test certificates",
                  "Maintenance-free performance engineered for 20+ years of active safety",
                ].map((item, i) => (
                  <div key={i} className="quality-check-item">
                    <FaCheckCircle className="about-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="quality-page-img-wrap">
              <div className="quality-page-img-container">
                <img
                  src={qualityImg}
                  alt="Quality testing laboratory"
                  className="quality-page-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 4 Core Quality Pillars */}
      <section className="section quality-pillars-section" ref={pillarsRef}>
        <div className="container">
          <SectionHeader
            tag="Core Principles"
            title="Four Pillars of Our Quality Assurance"
            subtitle="How we maintain reliability across design, manufacturing, and performance."
          />

          <div className="quality-pillars-grid">
            {qualityPillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={i}
                  className="quality-pillar-card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <div className="quality-pillar-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="quality-pillar-sub">{pillar.subtitle}</span>
                  <h3 className="quality-pillar-title">{pillar.title}</h3>
                  <p className="quality-pillar-desc">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Recognized Standards */}
      <section className="section section-dark quality-standards-section">
        <div className="container">
          <div className="quality-standards-header">
            <span
              className="section-tag"
              style={{ color: "var(--color-accent)" }}
            >
              Engineering Codes
            </span>
            <h2 className="section-title text-white">
              Adherence to Recognized Engineering Standards
            </h2>
            <p className="section-subtitle text-white-70">
              Manufactured strictly in alignment with respected national and international electrical safety codes.
            </p>
          </div>

          <div className="standards-grid">
            {standardsList.map((std, i) => (
              <div key={i} className="standard-tag">
                <FaShieldAlt className="standard-tag-icon" />
                <div>
                  <strong>{std.code}</strong>
                  <span className="standard-tag-title">{std.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Quality Documentation Request CTA */}
      <section className="section quality-cta-section">
        <div className="container">
          <div className="quality-cta-banner">
            <div className="quality-cta-content">
              <span className="quality-cta-tag">
                <FaShieldAlt size={12} /> Project Documentation
              </span>
              <h2 className="quality-cta-title">
                Need Official Test Reports & Product Certificates?
              </h2>
              <p className="quality-cta-desc">
                Download our complete product brochure containing certified laboratory test reports, technical specifications, and compliance documentation.
              </p>
              <div className="quality-cta-actions">
                <a
                  href="/unique-enterprise.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg quality-cta-brochure"
                >
                  <FaDownload size={15} />
                  <span>Download Brochure</span>
                </a>
                <Link to="/contact" className="btn btn-outline-white btn-lg quality-cta-contact-btn">
                  <span>Contact Us</span>
                  <FaArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
