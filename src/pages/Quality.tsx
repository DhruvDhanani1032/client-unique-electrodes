import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import qualityImg from '../assets/quality_lab.png';
import './Quality.css';

const testResults = [
  { product: 'CB Solid Rod (17.2mm)', lab: 'CPRI Bhopal', date: 'March 2026', reportNo: 'CPRIBPLSTNBMISC26T0059', result: 'PASSED', detail: '15.11 kArms / 1 sec' },
  { product: 'GI Pipe Electrode (76mm)', lab: 'CPRI Bhopal', date: 'March 2026', reportNo: 'CPRIBPLSTNBMISC26T0060', result: 'PASSED', detail: '31.10 kArms / 1 sec (71.54 kApk)' },
  { product: 'CB Solid Rod (25mm, 3m)', lab: 'ERDA Vadodara', date: 'January 2026', reportNo: 'RP-2526-034776', result: 'PASSED', detail: '25 kArms / 1 sec' },
  { product: 'Earth Enhancement Compound', lab: 'Bhumi Research Center, Surat', date: 'February 2026', reportNo: 'MT-02-2026-EEC-PHY-1742-01', result: 'VERIFIED', detail: 'Resistivity: 0.84 Ohm-cm' },
];

const standards = ['IS:3043', 'IEEE Std 80', 'IEC 62561-7', 'NFC 17-102', 'IS:2629', 'IS:2720', 'IEC 62305', 'IS 2386'];

export default function Quality() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Quality</span>
          </div>
          <div className="page-hero-tag"><FaShieldAlt size={12} /> Quality Assurance</div>
          <h1 className="page-hero-title">Quality Is Our Foundation</h1>
          <p className="page-hero-subtitle">
            CPRI · ERDA · Bhumi Research Center · ISO 9001:2015 — independent verification at every stage.
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
                (Certificate No. TSNUK02740), ensuring consistent, documented quality processes
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

      {/* Testing Labs */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testing Partners</span>
            <h2 className="section-title">Our Testing Laboratories</h2>
          </div>
          <div className="quality-labs-grid">
            {[
              { name: 'CPRI', full: 'Central Power Research Institute', location: 'Bhopal', reports: '2 Test Reports (March 2026)', color: '#2563EB' },
              { name: 'ERDA', full: 'Electrical Research & Development Association', location: 'Vadodara', reports: '1 Test Report (January 2026)', color: '#7C3AED' },
              { name: 'Bhumi Research', full: 'Bhumi Research Center LLP', location: 'Surat', reports: '1 Lab Report (February 2026)', color: '#059669' },
              { name: 'ISO 9001:2015', full: 'TSN Certification Ltd (EUAS Accredited)', location: 'UK', reports: 'Cert No. TSNUK02740', color: '#C8791A' },
            ].map((lab, i) => (
              <div key={i} className="quality-lab-card" style={{ borderTopColor: lab.color }}>
                <div className="quality-lab-abbr" style={{ color: lab.color }}>{lab.name}</div>
                <div className="quality-lab-full">{lab.full}</div>
                <div className="quality-lab-location">📍 {lab.location}</div>
                <div className="quality-lab-reports">✓ {lab.reports}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Results Table */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Test Results</span>
            <h2 className="section-title">All Test Reports at a Glance</h2>
          </div>
          <div className="quality-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Product Tested</th>
                  <th>Testing Lab</th>
                  <th>Date</th>
                  <th>Report Number</th>
                  <th>Result</th>
                  <th>Key Finding</th>
                </tr>
              </thead>
              <tbody>
                {testResults.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.product}</strong></td>
                    <td>{row.lab}</td>
                    <td>{row.date}</td>
                    <td><span className="quality-report-code">{row.reportNo}</span></td>
                    <td><span className="badge badge-success" style={{ color: 'green' }}><FaCheckCircle size={10} /> {row.result}</span></td>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Compliance</span>
            <h2 className="section-title" style={{ color: 'white' }}>Standards We Comply With</h2>
          </div>
          <div className="standards-grid">
            {standards.map((std, i) => (
              <div key={i} className="standard-tag">
                <FaCheckCircle style={{ color: 'var(--color-accent)' }} />
                <span>{std}</span>
              </div>
            ))}
          </div>
          <div className="quality-cta-center">
            <Link to="/certifications" className="btn btn-primary">
              View All Certifications <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}