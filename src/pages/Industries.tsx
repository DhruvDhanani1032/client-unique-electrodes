import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBolt, FaSatelliteDish, FaSolarPanel, FaIndustry, FaHospital, FaServer, FaOilCan, FaBuilding, FaArrowRight } from 'react-icons/fa';
import { industries } from '../data/content';
import SEO from '../components/common/SEO';
import './Industries.css';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  FaBolt: <FaBolt />, FaSatelliteDish: <FaSatelliteDish />, FaSolarPanel: <FaSolarPanel />,
  FaIndustry: <FaIndustry />, FaHospital: <FaHospital />, FaServer: <FaServer />,
  FaOilWell: <FaOilCan />, FaBuilding: <FaBuilding />,
};

export default function Industries() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <SEO
        title="Industries Served | Electrical Earthing Solutions"
        description="Reliable earthing and lightning protection solutions for power plants, telecom towers, solar installations, data centers, hospitals, and heavy industries."
        keywords="industrial earthing, solar earthing kit, telecom earthing electrode, data center earthing, Unique Electrodes Surat"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Industries</span>
          </div>
          <div className="page-hero-tag"><FaIndustry size={12} /> Industries Served</div>
          <h1 className="page-hero-title">Industries We Serve</h1>
          <p className="page-hero-subtitle">
            Critical safety for every sector — power, telecom, solar, healthcare, data centers and more.
          </p>
        </div>
      </section>

      <section className="section industries-page-section" ref={ref}>
        <div className="container">
          <div className="industries-page-grid">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                className="industry-card"
                style={{ '--ind-color': ind.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="industry-card-icon">
                  {iconMap[ind.icon]}
                </div>
                <div className="industry-card-body">
                  <h3 className="industry-card-title">{ind.title}</h3>
                  <p className="industry-card-desc">{ind.description}</p>
                  <div className="industry-card-products">
                    <span className="industry-card-products-label">Recommended Products:</span>
                    <div className="industry-card-product-tags">
                      {ind.products.map((p, pi) => (
                        <span key={pi} className="industry-product-tag">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to="/products" className="industry-card-cta">
                  View Products <FaArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IS:3043 Selection Guide */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">IS:3043 Guide</span>
            <h2 className="section-title" style={{ color: 'white' }}>Electrode Selection by Soil Resistivity</h2>
            <p className="section-subtitle">As per IS:3043 Code of Practice for Earthing</p>
          </div>
          <div className="soil-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Soil Resistivity (Ω-m)</th>
                  <th>Recommended Electrode</th>
                  <th>Additional Measure</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>&lt; 25</td><td>Single 17.2mm CB Solid Rod, 1.5m</td><td>—</td></tr>
                <tr><td>25 – 50</td><td>Single 17.2mm CB Solid Rod, 3m</td><td>—</td></tr>
                <tr><td>50 – 100</td><td>Multiple rods or 25mm CB Rod</td><td>Add Earth Compound</td></tr>
                <tr><td>&gt; 100</td><td>Chemical Earthing + Backfill Compound</td><td>Pipe-in-Pipe type recommended</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/contact" className="btn btn-primary">
              Get a Custom Recommendation <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
