import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBolt, FaArrowRight, FaDownload } from 'react-icons/fa';
import { products } from '../data/content';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) return <Navigate to="/products" />;

  const related = products.filter((p) => p.id !== id).slice(0, 3);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/products">Products</Link>
            <span className="sep">/</span>
            <span className="current">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section pd-section">
        <div className="container">
          <div className="pd-grid">
            {/* Image */}
            <motion.div
              className="pd-image-wrap"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img src={product.image} alt={product.name} className="pd-img" />
              {product.testReports.length > 0 && (
                <div className="pd-tested-strip">
                  <FaCheckCircle /> Lab Tested & Verified — View Reports Below
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              className="pd-info"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="product-card-category">{product.category}</span>
              <h1 className="pd-title">{product.name}</h1>
              <p className="pd-tagline">{product.tagline}</p>
              <p className="pd-description">{product.description}</p>

              {/* Key Spec Badge */}
              <div className="pd-key-spec">
                <FaBolt size={14} />
                <span>{product.keySpec}</span>
              </div>

              {/* Applications */}
              <div className="pd-applications">
                <h4>Applications</h4>
                <div className="pd-app-tags">
                  {product.applications.map((app, i) => (
                    <span key={i} className="pd-app-tag">{app}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pd-ctas">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get a Quote <FaArrowRight size={14} />
                </Link>
                <a href="/src/data/unique-enterprise.pdf" download className="btn btn-outline-primary btn-lg">
                  <FaDownload size={14} /> Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section section-light pd-specs-section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '32px' }}>
            <span className="section-tag">Technical Specifications</span>
            <h2 className="section-title pd-spec-title">Product Specifications</h2>
          </div>
          <div className="pd-specs-table-wrap">
            <table className="data-table">
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={i}>
                    <th style={{ width: '35%', background: i % 2 === 0 ? 'var(--color-primary)' : '#132647' }}>{spec.param}</th>
                    <td style={{ background: i % 2 === 0 ? 'white' : 'var(--color-bg-light)' }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Test Reports */}
      {product.testReports.length > 0 && (
        <section className="section pd-reports-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '32px' }}>
              <span className="section-tag">Verification</span>
              <h2 className="section-title pd-spec-title">Test Reports</h2>
            </div>
            <div className="pd-reports-grid">
              {product.testReports.map((report, i) => (
                <div key={i} className="pd-report-card">
                  <div className="pd-report-badge">
                    <FaCheckCircle /> {report.result}
                  </div>
                  <h3 className="pd-report-lab">{report.lab}</h3>
                  <div className="pd-report-detail">{report.detail}</div>
                  <div className="pd-report-meta">
                    <span>📋 Report No: {report.reportNo}</span>
                    <span>📅 {report.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Related Products</h2>
          </div>
          <div className="pd-related-grid">
            {related.map((p) => (
              <Link key={p.id} to={`/products/${p.id}`} className="pd-related-card">
                <img src={p.image} alt={p.name} />
                <div className="pd-related-body">
                  <span className="product-card-category">{p.category}</span>
                  <h4>{p.name}</h4>
                  <span className="pd-related-link">View Details <FaArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
