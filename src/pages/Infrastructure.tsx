import { Link } from 'react-router-dom';
import { FaIndustry, FaMapMarkerAlt } from 'react-icons/fa';
import factoryImg from '../assets/factory_about.webp';
import qualityImg from '../assets/quality_lab.webp';
import SEO from '../components/common/SEO';
import './Infrastructure.css';

const capabilities = [
  { title: 'Manufacturing', items: ['CNC precision machining', 'Copper electroplating tanks', 'MS rod cutting & processing', 'Thread & coupler production', 'GI pipe fabrication'] },
  { title: 'Quality Control', items: ['Dimensional inspection tools', 'Copper coating thickness gauge', 'Visual inspection station', 'Batch-wise quality records', 'ISO 9001:2015 procedures'] },
  { title: 'Packaging & Dispatch', items: ['Branded product packaging', 'Certificate-included delivery', 'PAN India shipping capability', 'Bulk order management', 'Direct factory supply'] },
];

export default function Infrastructure() {
  return (
    <>
      <SEO
        title="Manufacturing Facility & Infrastructure | Surat Factory"
        description="Take a look inside Unique Electrodes' state-of-the-art earthing manufacturing facility at Udhyog Nagar, Udhana, Surat."
        keywords="earthing manufacturing plant Surat, earthing factory Gujarat, copper electroplating facility, Unique Enterprise infrastructure"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Infrastructure</span>
          </div>
          <div className="page-hero-tag"><FaIndustry size={12} /> Manufacturing Infrastructure</div>
          <h1 className="page-hero-title">Our Facility</h1>
          <p className="page-hero-subtitle">
            Built for precision. Engineered for quality. Manufacturing from the heart of Surat's industrial hub.
          </p>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="section infra-overview">
        <div className="container">
          <div className="infra-overview-banner">
            <img src={factoryImg} alt="Unique Enterprise Factory" className="infra-banner-img" />
            <div className="infra-banner-overlay">
              <div className="infra-banner-info">
                <FaMapMarkerAlt size={24} style={{ color: 'var(--color-accent)' }} />
                <div>
                  <h3>Manufacturing Address</h3>
                  <p>Plot No. B-116, Shed No. 1, Road No. 8,<br />Udhyog Nagar, Udhana, Surat, Gujarat — 394210</p>
                </div>
              </div>
              <div className="infra-banner-stats">
                <div><span>MSME</span><label>Government Registered</label></div>
                <div><span>ISO</span><label>9001:2015 Certified</label></div>
                <div><span>2021</span><label>Established</label></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Capabilities</span>
            <h2 className="section-title">Manufacturing Capabilities</h2>
          </div>
          <div className="infra-caps-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="infra-cap-card">
                <h3 className="infra-cap-title">{cap.title}</h3>
                <ul>
                  {cap.items.map((item, ii) => (
                    <li key={ii} className="infra-cap-item">
                      <span className="infra-cap-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Facility</span>
            <h2 className="section-title">Facility Gallery</h2>
          </div>
          <div className="infra-gallery">
            <div className="infra-gallery-main">
              <img src={factoryImg} alt="Factory floor" />
            </div>
            <div className="infra-gallery-side">
              <img src={qualityImg} alt="Quality lab" />
              <img src={factoryImg} alt="Production line" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
