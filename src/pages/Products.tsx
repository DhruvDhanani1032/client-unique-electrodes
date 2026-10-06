import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaBolt, FaChevronDown, FaCheck } from 'react-icons/fa';
import { products } from '../data/content';
import SEO from '../components/common/SEO';
import './Products.css';

const categories = [
  'All',
  'Pipe Type Chemical Earthing',
  'Solid Rod Type Earthing',
  'Lightning Protection Systems',
  'Specialty Products',
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const mobileFilterRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  // Close the dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileFilterRef.current &&
        e.target instanceof Node &&
        !mobileFilterRef.current.contains(e.target)
      ) {
        setMobileFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    setMobileFilterOpen(false);
  };

  return (
    <>
      <SEO
        title="Earthing Products & Lightning Arresters"
        description="Explore our full range of Copper Bonded Earthing Electrodes, GI Earthing Rods, Earth Enhancement Compounds, and ESE Lightning Arresters."
        keywords="chemical earthing electrodes, copper bonded rod price, GI earthing rod, lightning arresters, earth pit cover, earthing compound"
      />
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Products</span>
          </div>
          <div className="page-hero-tag"><FaBolt size={12} /> Product Range</div>
          <h1 className="page-hero-title">Our Products</h1>
          <p className="page-hero-subtitle">
             ISO 9001:2015 certified. IS:3043 compliant earthing solutions.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section products-page-section" ref={ref}>
        <div className="container">
          {/* Filter Bar - desktop/tablet button row */}
          <div className="products-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Filter Dropdown - mobile only */}
          <div className="mobile-filter" ref={mobileFilterRef}>
            <button
              type="button"
              className={`mobile-filter-trigger ${mobileFilterOpen ? 'open' : ''}`}
              onClick={() => setMobileFilterOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={mobileFilterOpen}
            >
              <span>
                <span className="mobile-filter-label">Filter:</span> {activeCategory}
              </span>
              <FaChevronDown className="mobile-filter-chevron" size={12} />
            </button>

            {mobileFilterOpen && (
              <ul className="mobile-filter-menu" role="listbox">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    role="option"
                    aria-selected={activeCategory === cat}
                    className={`mobile-filter-option ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => handleSelectCategory(cat)}
                  >
                    <span>{cat}</span>
                    {activeCategory === cat && <FaCheck size={11} />}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Grid */}
          <div className="products-page-grid">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                className="product-page-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/products/${product.id}`} className="product-page-card-link-wrap">
                  <div className="product-page-card-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-page-card-body">
                    <h3 className="product-page-card-title">{product.name}</h3>
                    <p className="product-page-card-tagline">{product.tagline}</p>
                  </div>
                </Link>
                <div className="product-page-card-footer">
                  <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
                    View Details <FaArrowRight size={12} />
                  </Link>
                  <a
                    href={`https://wa.me/919512231350?text=${encodeURIComponent(`Hi Unique Electrodes, I am interested in getting a quote for: ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}