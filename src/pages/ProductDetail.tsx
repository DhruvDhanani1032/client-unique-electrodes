import { useState, useMemo, useEffect } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaBolt,
  FaWhatsapp,
  FaDownload,
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaListUl,
  FaLayerGroup,
  FaCheck,
  FaArrowRight,
} from 'react-icons/fa';
import { LuShield, LuAward, LuClock } from 'react-icons/lu';
import { allProducts, getRelatedFamilyVariants } from '../data/productsData';
import { products as legacyProducts } from '../data/content';
import './ProductDetail.css';

export default function ProductDetail() {
  const params = useParams<{ category?: string; material?: string; productId?: string; id?: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Robust target product ID resolution
  const pathParts = location.pathname.split('/').filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];
  const targetId =
    params.productId ||
    (allProducts.some((p) => p.id === lastSegment) ? lastSegment : undefined) ||
    params.id ||
    (allProducts.some((p) => p.id === params.material) ? params.material : undefined);

  const product = useMemo(() => {
    if (!targetId) return allProducts[0];

    // Try finding exact ID in allProducts
    const found = allProducts.find((p) => p.id === targetId);
    if (found) return found;

    // Check if matched by legacy ID (e.g. galvanised-strip-in-pipe)
    if (targetId === 'galvanised-strip-in-pipe') {
      return allProducts.find((p) => p.id === 'strip-galv-48-2m') || allProducts[0];
    }
    if (targetId === 'hot-dip-galvanised-strip-in-pipe') {
      return allProducts.find((p) => p.id === 'strip-hdg-48-2m') || allProducts[0];
    }
    if (targetId === 'copper-bonded-strip-in-pipe') {
      return allProducts.find((p) => p.id === 'strip-cb-48-2m') || allProducts[0];
    }
    if (targetId === 'copper-bonded-rod-in-pipe') {
      return allProducts.find((p) => p.id === 'rip-cb-48-25-2m') || allProducts[0];
    }
    if (targetId === 'copper-bonded-solid-rod') {
      return allProducts.find((p) => p.id === 'cbr-25-3m') || allProducts[0];
    }
    if (targetId === 'hot-dip-galvanised-solid-rod') {
      return allProducts.find((p) => p.id === 'hdg-solid-16-3m') || allProducts[0];
    }
    if (targetId === '4-meter-copper-bonded-rod') {
      return allProducts.find((p) => p.id === 'cbr-4m-17') || allProducts[0];
    }
    if (targetId === 'pure-copper-solid-rod') {
      return allProducts.find((p) => p.id === 'pure-cu-16-3m') || allProducts[0];
    }
    if (targetId === 'ese-lightning-arrestor') {
      return allProducts.find((p) => p.id === 'ese-protector') || allProducts[0];
    }
    if (targetId === 'conventional-lightning-arrestor') {
      return allProducts.find((p) => p.id === 'conv-copper-bonded') || allProducts[0];
    }
    if (targetId === 'lightning-protection-accessories') {
      return allProducts.find((p) => p.id === 'lightning-mast-pole') || allProducts[0];
    }

    // Try finding in legacy products
    const leg = legacyProducts.find((p) => p.id === targetId);
    if (leg) {
      return allProducts.find((p) => p.categoryName === leg.category) || allProducts[0];
    }

    return allProducts[0];
  }, [targetId]);

  const [activeTab, setActiveTab] = useState<'specifications' | 'features' | 'applications' | 'installation'>('specifications');

  // Related size variants in same family
  const familyVariants = useMemo(() => {
    return getRelatedFamilyVariants(product);
  }, [product]);

  // Related products from other families
  const relatedProducts = useMemo(() => {
    return allProducts
      .filter((p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.materialSlug === product.materialSlug))
      .slice(0, 3);
  }, [product]);

  // Format specifications into readable label/value pairs
  const specEntries = useMemo(() => {
    const formatKey = (key: string) => {
      return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
    };

    return Object.entries(product.specifications).map(([key, val]) => ({
      key,
      label: formatKey(key),
      value: val,
    }));
  }, [product]);

  const waQuoteMessage = encodeURIComponent(
    `Hello Unique Electrodes! I am interested in purchasing:\nProduct: ${product.name}\nPlease share best quotation and availability.`
  );

  return (
    <div className="pd-page">
      {/* Standard Brand Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/products">Our Products</Link>
            <span className="sep">/</span>
            {product.categorySlug && (
              <>
                <Link
                  to={
                    product.materialSlug
                      ? `/products/${product.categorySlug}/${product.materialSlug}`
                      : `/products/${product.categorySlug}`
                  }
                >
                  {product.materialName
                    ? `${product.materialName} ${product.subCategory || product.categoryName}`
                    : product.categoryName}
                </Link>
                <span className="sep">/</span>
              </>
            )}
            <span className="current">{product.name}</span>
          </div>

          <div className="page-hero-tag">
            <FaBolt size={12} />
            <span>{product.categoryName}</span>
          </div>
          <h1 className="page-hero-title">{product.name}</h1>
          <p className="page-hero-subtitle">{product.shortDescription}</p>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section className="section pd-main-section">
        <div className="container">
          <div className="pd-main-grid">
            {/* Left: Product Image */}
            <motion.div
              className="pd-media-column"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="pd-image-box">
                <div className="pd-image-inner">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="pd-image-badge">
                  <FaBolt size={12} />
                  <span>Tested Quality • IS 3043 Compliant</span>
                </div>
              </div>

              {/* Quick Contact Box on Desktop */}
              <div className="pd-support-box">
                <div className="pd-support-item">
                  <FaPhoneAlt className="pd-support-icon" />
                  <div>
                    <span className="pd-support-sub">Direct Sales & Orders</span>
                    <a href="tel:+919512231350" className="pd-support-val">+91 9512231350</a>
                  </div>
                </div>
                <div className="pd-support-item">
                  <FaEnvelope className="pd-support-icon" />
                  <div>
                    <span className="pd-support-sub">Technical Enquiries</span>
                    <a href="mailto:uniqueelectrodes@gmail.com" className="pd-support-val">uniqueelectrodes@gmail.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Product Info & Actions */}
            <motion.div
              className="pd-info-column"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Badges */}
              <div className="pd-badge-row">
                <span className="pd-badge pd-badge--category">{product.category.replace(/-/g, ' ')}</span>
                <span className="pd-badge pd-badge--standard">IS 3043 Certified</span>
              </div>

              {/* Title */}
              <h1 className="pd-title">{product.name}</h1>

              {/* Short Description */}
              <p className="pd-short-desc">{product.shortDescription}</p>

              {/* 3 Stat Badges (Life, Standard, Warranty) */}
              <div className="pd-stats-row">
                <div className="pd-stat-card">
                  <LuShield className="pd-stat-icon" />
                  <p className="pd-stat-text">20+ Years Life</p>
                </div>
                <div className="pd-stat-card">
                  <LuAward className="pd-stat-icon" />
                  <p className="pd-stat-text">IS 3043</p>
                </div>
                <div className="pd-stat-card">
                  <LuClock className="pd-stat-icon" />
                  <p className="pd-stat-text">5 Yr Warranty</p>
                </div>
              </div>

              {/* Size / Variant Selector Pills */}
              {familyVariants.length > 1 && (
                <div className="pd-variants-box">
                  <div className="pd-variant-label">
                    <span>Available Sizes & Models:</span>
                    <span className="pd-variant-selected-badge">{product.diameter}mm × {product.length}m</span>
                  </div>
                  <div className="pd-variant-pills">
                    {familyVariants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        className={`pd-variant-pill ${v.id === product.id ? 'pd-variant-pill--active' : ''}`}
                        onClick={() => navigate(v.url)}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Specifications Box */}
              <div className="pd-quick-specs">
                <h3 className="pd-quick-title">Quick Specifications</h3>
                <div className="pd-quick-grid">
                  <div>
                    <span className="pd-quick-lbl">Material</span>
                    <strong className="pd-quick-val">
                      {product.material === 'copper-bonded'
                        ? (product.category === 'solid-rod' ? 'Copper Bonded (Low Carbon Core)' : 'Copper Bonded MS Pipe')
                        : product.material === 'pure-copper'
                        ? 'Pure Electrolytic Copper'
                        : 'Low Carbon MS Pipe'}
                    </strong>
                  </div>
                  <div>
                    <span className="pd-quick-lbl">Coating</span>
                    <strong className="pd-quick-val">100 microns</strong>
                  </div>
                  <div>
                    <span className="pd-quick-lbl">Diameters</span>
                    <strong className="pd-quick-val">48mm, 62mm, 76mm</strong>
                  </div>
                  <div>
                    <span className="pd-quick-lbl">Lengths</span>
                    <strong className="pd-quick-val">1m, 2m, 3m</strong>
                  </div>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="pd-actions-row">
                <a
                  href={`https://wa.me/919512231350?text=${waQuoteMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg pd-quote-btn"
                >
                  <FaWhatsapp size={18} />
                  <span>Request Instant Quote</span>
                </a>

                <a
                  href="/src/data/unique-enterprise.pdf"
                  download="unique-enterprise-brochure.pdf"
                  className="btn btn-outline-primary btn-lg pd-brochure-btn"
                >
                  <FaDownload size={15} />
                  <span>Download Datasheet</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section: Specifications, Features, Applications, Installation */}
      <section className="section pd-tabs-section">
        <div className="container">
          {/* Tab Navigation Buttons */}
          <div className="pd-tab-nav">
            <button
              className={`pd-tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('specifications')}
            >
              <FaListUl size={14} />
              <span>Technical Specifications</span>
            </button>
            <button
              className={`pd-tab-btn ${activeTab === 'features' ? 'active' : ''}`}
              onClick={() => setActiveTab('features')}
            >
              <FaCheckCircle size={14} />
              <span>Key Features ({product.features.length})</span>
            </button>
            <button
              className={`pd-tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              <FaLayerGroup size={14} />
              <span>Applications</span>
            </button>
            <button
              className={`pd-tab-btn ${activeTab === 'installation' ? 'active' : ''}`}
              onClick={() => setActiveTab('installation')}
            >
              <FaTools size={14} />
              <span>Installation Guide</span>
            </button>
          </div>

          {/* Tab 1: Technical Specifications Grid */}
          {activeTab === 'specifications' && (
            <motion.div
              className="pd-tab-pane"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pd-spec-box">
                <div className="pd-spec-header">
                  <h3>Technical Parameters & Compliance</h3>
                  <p>All values measured in accordance with IS 3043 and manufacturing quality benchmarks.</p>
                </div>
                <div className="pd-spec-table-wrap">
                  <table className="data-table pd-spec-table">
                    <thead>
                      <tr>
                        <th style={{ width: '40%' }}>Parameter / Specification</th>
                        <th style={{ width: '60%' }}>Technical Value / Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {specEntries.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                          <td className="pd-spec-prop-td">
                            <strong>{spec.label}</strong>
                          </td>
                          <td className="pd-spec-val-td">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Key Features Checklist */}
          {activeTab === 'features' && (
            <motion.div
              className="pd-tab-pane"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pd-features-box">
                <div className="pd-features-grid">
                  {product.features.map((feat, i) => (
                    <div key={i} className="pd-feat-item">
                      <div className="pd-feat-icon-box">
                        <FaCheck size={12} />
                      </div>
                      <span className="pd-feat-text">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Applications */}
          {activeTab === 'applications' && (
            <motion.div
              className="pd-tab-pane"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pd-apps-box">
                <div className="pd-apps-grid">
                  {product.applications.map((app, i) => (
                    <div key={i} className="pd-app-card">
                      <FaBolt className="pd-app-icon" />
                      <h4>{app}</h4>
                      <p>Engineered to deliver rapid fault current dissipation and long-term ground potential stabilization.</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 4: Installation Guide */}
          {activeTab === 'installation' && (
            <motion.div
              className="pd-tab-pane"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pd-install-box">
                <div className="pd-install-steps">
                  <div className="pd-install-step">
                    <span className="pd-step-num">01</span>
                    <div className="pd-step-content">
                      <h4>Auger Boring / Pit Excavation</h4>
                      <p>Auger a vertical borehole of 100mm to 150mm diameter to the specified depth (2.0 to 3.0 meters depending on electrode length).</p>
                    </div>
                  </div>

                  <div className="pd-install-step">
                    <span className="pd-step-num">02</span>
                    <div className="pd-step-content">
                      <h4>Electrode Centering & Positioning</h4>
                      <p>Place the chemical earthing electrode vertically in the center of the drilled borehole, ensuring the terminal lug sits 150mm above ground level.</p>
                    </div>
                  </div>

                  <div className="pd-install-step">
                    <span className="pd-step-num">03</span>
                    <div className="pd-step-content">
                      <h4>Backfilling with Ground Improving Compound</h4>
                      <p>Mix the supplied Ground Improving Compound with clean water into a semi-liquid slurry. Pour the compound into the annular space around the pipe, rodding gently to eliminate air cavities.</p>
                    </div>
                  </div>

                  <div className="pd-install-step">
                    <span className="pd-step-num">04</span>
                    <div className="pd-step-content">
                      <h4>Terminal Bonding & Connection</h4>
                      <p>Fasten the copper or galvanized earthing flat tape securely to the terminal lug using the supplied dual stainless steel nut bolts and spring washers.</p>
                    </div>
                  </div>

                  <div className="pd-install-step">
                    <span className="pd-step-num">05</span>
                    <div className="pd-step-content">
                      <h4>Chamber Installation & Resistance Verification</h4>
                      <p>Install a heavy-duty concrete or poly-plastic earth inspection pit chamber with removable cover. Measure earth resistance with a calibrated earth tester per IS 3043.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Products Showcase */}
      {relatedProducts.length > 0 && (
        <section className="section pd-related-section">
          <div className="container">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '28px' }}>
              <span className="section-tag">Explore More</span>
              <h2 className="section-title">Related Earthing Products</h2>
            </div>

            <div className="pd-related-grid">
              {relatedProducts.map((rel) => {
                const relUrl = rel.materialSlug
                  ? `/products/${rel.categorySlug}/${rel.materialSlug}/${rel.id}`
                  : `/products/${rel.categorySlug}/${rel.id}`;

                return (
                  <div key={rel.id} className="pd-related-card">
                    <Link to={relUrl} className="pd-rel-img-link">
                      <img src={rel.image} alt={rel.name} loading="lazy" />
                    </Link>
                    <div className="pd-rel-body">
                      <h4 className="pd-rel-title">
                        <Link to={relUrl}>{rel.name}</Link>
                      </h4>
                      <p className="pd-rel-desc">{rel.shortDescription}</p>
                      <Link to={relUrl} className="btn btn-outline-primary btn-sm pd-rel-btn">
                        <span>View Details</span>
                        <FaArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
