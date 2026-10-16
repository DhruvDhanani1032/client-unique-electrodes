import { Link } from 'react-router-dom';
import {
  FaIndustry,
  FaCogs,
  FaCheckCircle,
  FaTruck,
  FaMicroscope,
  FaWarehouse,
  FaTools,
  FaFileDownload,
  FaPhoneAlt,
  FaBolt,
} from 'react-icons/fa';
import factoryImg from '../assets/factory_about.webp';
import qualityImg from '../assets/quality_lab.webp';
import SEO from '../components/common/SEO';
import './Infrastructure.css';

const capabilities = [
  {
    icon: <FaCogs size={22} />,
    title: 'Manufacturing',
    items: [
      'CNC precision machining & automated processing',
      'High-current copper electroplating tanks',
      'Low carbon high tensile steel rod cutting',
      'Cold-rolled thread & coupler production',
      'Hot-dip galvanised & GI pipe fabrication',
    ],
  },
  {
    icon: <FaCheckCircle size={22} />,
    title: 'Quality Control',
    items: [
      'Magnetic copper coating thickness gauge (250µm+)',
      'Digital micro-ohm electrical conductivity tester',
      'Adhesion & bend test apparatus as per UL 467',
      'Batch-wise certified inspection records',
      'Documented quality control procedures & traceability',
    ],
  },
  {
    icon: <FaTruck size={22} />,
    title: 'Packaging & Dispatch',
    items: [
      'Heavy-duty weatherproof bundle packaging',
      'Test certificate included with every shipment',
      'Pan-India road & container freight dispatch',
      'Bulk inventory for rapid order turnaround',
      'Direct factory billing & GST compliance',
    ],
  },
];

const highlights = [
  {
    icon: <FaBolt />,
    title: 'Molecular Bonding Tanks',
    desc: 'Advanced continuous DC electroplating baths ensuring 99.9% pure electrolytic copper bonded permanently to high-tensile steel cores.',
  },
  {
    icon: <FaTools />,
    title: 'CNC Threading Bay',
    desc: 'Cold-rolled precision threading machinery that retains grain structure and guarantees high torque strength for deep installations.',
  },
  {
    icon: <FaMicroscope />,
    title: 'In-House Metrology Lab',
    desc: 'Equipped with digital coating thickness meters, resistivity testers, and bend-test rigs verifying compliance to IS 3043 & UL 467.',
  },
  {
    icon: <FaWarehouse />,
    title: 'Covered Finished Bay',
    desc: 'Dry indoor storage facility keeping electrodes, enhancement compound bags, and accessories fully protected before dispatch.',
  },
];

export default function Infrastructure() {
  return (
    <>
      <SEO
        title="Manufacturing Facility & Infrastructure | Surat Factory"
        description="Take a look inside Unique Electrodes' state-of-the-art earthing manufacturing facility at Udhyog Nagar, Udhana, Surat."
        keywords="earthing manufacturing plant Surat, earthing factory Gujarat, copper electroplating facility, Unique Enterprise infrastructure"
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Infrastructure</span>
          </div>
          <div className="page-hero-tag"><FaIndustry size={12} /> Manufacturing Infrastructure</div>
          <h1 className="page-hero-title">Our Facility & Plant</h1>
          <p className="page-hero-subtitle">
            Built for precision. Engineered for quality. Manufacturing from the heart of Surat's industrial corridor.
          </p>
        </div>
      </section>

      {/* Factory Overview Banner */}
      <section className="section infra-overview">
        <div className="container">
          <div className="infra-overview-banner">
            <img src={factoryImg} alt="Unique Enterprise Factory Surat" className="infra-banner-img" />
            <div className="infra-banner-overlay">
              <div className="infra-banner-caption">
                <span className="infra-banner-badge">
                  <FaIndustry size={12} /> Production & Processing Plant
                </span>
                <h3 className="infra-banner-heading">High-Capacity Earthing & Molecular Electroplating Works</h3>
              </div>

              <div className="infra-banner-stats">
                <div className="infra-stat-box">
                  <span>MSME</span>
                  <label>Govt Registered</label>
                </div>
                <div className="infra-stat-box">
                  <span>IS 3043</span>
                  <label>Quality Standard</label>
                </div>
                <div className="infra-stat-box">
                  <span>2021</span>
                  <label>Established</label>
                </div>
                <div className="infra-stat-box">
                  <span>50K+</span>
                  <label>Meters / Month</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section section-light infra-caps-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Production Capabilities</span>
            <h2 className="section-title infra-section-title">End-To-End Manufacturing Control</h2>
            <p className="section-subtitle">
              Every stage from raw steel preparation to electroplating, finishing, and laboratory testing is performed in-house.
            </p>
          </div>

          <div className="infra-caps-grid">
            {capabilities.map((cap, i) => (
              <div key={i} className="infra-cap-card">
                <div className="infra-cap-header">
                  <div className="infra-cap-icon-box">{cap.icon}</div>
                  <h3 className="infra-cap-title">{cap.title}</h3>
                </div>
                <ul className="infra-cap-list">
                  {cap.items.map((item, ii) => (
                    <li key={ii} className="infra-cap-item">
                      <span className="infra-cap-dot" />
                      <span className="infra-cap-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery & Infrastructure Highlights */}
      <section className="section infra-pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Plant Highlights</span>
            <h2 className="section-title infra-section-title">Specialized Machinery & Equipment</h2>
            <p className="section-subtitle">
              Engineered with heavy-duty tooling to ensure maximum electrical conductivity, uniform bonding, and long service life.
            </p>
          </div>

          <div className="infra-pillars-grid">
            {highlights.map((item, i) => (
              <div key={i} className="infra-pillar-card">
                <div className="infra-pillar-icon">{item.icon}</div>
                <h3 className="infra-pillar-title">{item.title}</h3>
                <p className="infra-pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Visual Gallery */}
      <section className="section section-light infra-gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Inside The Factory</span>
            <h2 className="section-title infra-section-title">Facility & Operations Gallery</h2>
            <p className="section-subtitle">
              A transparent look into our Surat manufacturing bay, inspection facilities, and inventory lines.
            </p>
          </div>

          <div className="infra-gallery">
            <div className="infra-gallery-item infra-gallery-main">
              <img src={factoryImg} alt="Factory floor and production plant" />
              <div className="infra-gallery-badge">
                <FaIndustry size={14} />
                <span>Heavy Electroplating & Fabrication Bay</span>
              </div>
            </div>

            <div className="infra-gallery-side">
              <div className="infra-gallery-item">
                <img src={qualityImg} alt="Quality testing laboratory" />
                <div className="infra-gallery-badge">
                  <FaMicroscope size={14} />
                  <span>In-House Metrology & QC Lab</span>
                </div>
              </div>
              <div className="infra-gallery-item">
                <img src={factoryImg} alt="Machining and packaging floor" />
                <div className="infra-gallery-badge">
                  <FaWarehouse size={14} />
                  <span>CNC Cutting & Finished Inventory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Visit & Audit CTA Banner */}
      <section className="section infra-cta-section">
        <div className="container">
          <div className="infra-cta-banner">
            <div className="infra-cta-content">
              <span className="infra-cta-tag">Direct Factory Sourcing</span>
              <h2 className="infra-cta-title">Schedule a Plant Visit or Quality Audit</h2>
              <p className="infra-cta-desc">
                We invite utility engineers, EPC contractors, and procurement heads to inspect our facility, review test records, and discuss custom manufacturing requirements.
              </p>
            </div>
            <div className="infra-cta-actions">
              <Link to="/contact" className="btn btn-primary infra-cta-btn">
                <FaPhoneAlt size={14} /> Contact Us →
              </Link>
              <a
                href="/unique-enterprise.pdf"
                download="Unique-Enterprise-Brochure.pdf"
                className="btn btn-outline-white infra-cta-brochure"
              >
                <FaFileDownload size={14} /> Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
