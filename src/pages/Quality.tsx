import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import qualityImg from '../assets/quality_lab.webp';
import SEO from '../components/common/SEO';
import './Quality.css';

export default function Quality() {
  return (
    <>
      <SEO
        title="Quality Assurance & Independent Testing"
        description="ISO 9001:2015 certified quality processes and testing verification. Consistent, verified earthing solutions from Surat."
        keywords="earthing quality testing, ISO 9001 earthing manufacturer, IS:3043 compliance, quality earthing electrodes Surat"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Quality</span>
          </div>
          <div className="page-hero-tag"><FaShieldAlt size={12} /> Quality Assurance</div>
          <h1 className="page-hero-title">Quality Is Our Foundation</h1>
          <p className="page-hero-subtitle">
             Bhumi Research Center · ISO 9001:2015 — independent verification at every stage.
          </p>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section quality-page-intro">
        <div className="container">
          <div className="quality-page-grid">
            <div className="quality-page-text">
              <span className="section-tag">Our Commitment</span>
              <h2 className="section-title quality-page-title">Why Independent Testing Matters</h2>
              <div className="accent-divider" />
              <p>
                At Unique Electrodes, we believe that claims without proof are worthless.
                That's why every major product we manufacture is sent to India's premier,
                independent testing laboratories for rigorous verification.
              </p>
              <p>
                Our quality management system is certified to <strong>ISO 9001:2015</strong>
                ensuring consistent, documented quality processes
                across every batch we produce.
              </p>
              <div className="quality-checklist">
                {[
                  'Every batch manufactured against documented quality procedures',
                  'Independent third-party testing — not just internal claims',
                  'Official test reports available for client documentation',
                  'IS:3043 & IEC compliance verified through testing',
                ].map((item, i) => (
                  <div key={i} className="quality-check-item">
                    <FaCheckCircle className="about-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="quality-page-img-wrap">
              <img src={qualityImg} alt="Testing laboratory" className="quality-page-img" />
            </div>
          </div>
        </div>
      </section>  
    </>
  );
}