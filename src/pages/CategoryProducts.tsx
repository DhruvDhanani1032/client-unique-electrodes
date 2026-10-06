import { useState, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBolt, FaFilter, FaTimes, FaArrowRight, FaCheck } from 'react-icons/fa';
import { allProducts, categoryMetaList } from '../data/productsData';
import ProductDetail from './ProductDetail';
import './CategoryProducts.css';

// Legacy single slugs map
const legacySlugMap: Record<string, { category: string; material?: string }> = {
  'galvanised-strip-in-pipe': { category: 'strip-in-pipe', material: 'galvanised' },
  'hot-dip-galvanised-strip-in-pipe': { category: 'strip-in-pipe', material: 'hot-dip-galvanised' },
  'copper-bonded-strip-in-pipe': { category: 'strip-in-pipe', material: 'copper-bonded' },
  'copper-bonded-rod-in-pipe': { category: 'rod-in-pipe', material: 'copper-bonded' },
  'copper-bonded-solid-rod': { category: 'solid-rod', material: 'copper-bonded' },
  'hot-dip-galvanised-solid-rod': { category: 'solid-rod', material: 'hot-dip-galvanised' },
  '4-meter-copper-bonded-rod': { category: 'solid-rod', material: 'copper-bonded-4m' },
  'pure-copper-solid-rod': { category: 'solid-rod', material: 'pure-copper' },
  'ese-lightning-arrestor': { category: 'lightning-arrestors' },
  'conventional-lightning-arrestor': { category: 'lightning-arrestors' },
  'lightning-protection-accessories': { category: 'lightning-arrestors' },
  'solar-earthing-kit': { category: 'specialty' },
  'ground-improving-compound': { category: 'specialty' },
};

function CategoryProductsView({
  resolvedCategory,
  resolvedMaterial,
}: {
  resolvedCategory: string;
  resolvedMaterial: string;
}) {
  // Determine lookup key for metadata
  const metaKey = resolvedMaterial ? `${resolvedCategory}/${resolvedMaterial}` : resolvedCategory;
  const pageMeta = categoryMetaList[metaKey] || {
    title: `${resolvedMaterial ? resolvedMaterial.replace(/-/g, ' ') : resolvedCategory?.replace(/-/g, ' ')} Chemical Earthing`,
    subtitle: 'High performance earthing solutions manufactured to IS 3043 and international standards.',
    category: resolvedCategory || 'strip-in-pipe',
    material: resolvedMaterial,
    breadcrumb: `${resolvedCategory} ${resolvedMaterial ? `— ${resolvedMaterial}` : ''}`,
    lengths: [2, 3],
    diameters: [48, 76],
  };

  // State for filters
  const [selectedLengths, setSelectedLengths] = useState<number[]>([]);
  const [selectedDiameters, setSelectedDiameters] = useState<number[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter products belonging to this category & material
  const categoryProducts = useMemo(() => {
    return allProducts.filter((p) => {
      if (resolvedCategory === 'lightning-arrestors') {
        return p.categorySlug === 'lightning-arrestors';
      }
      if (resolvedCategory === 'specialty') {
        return p.categorySlug === 'specialty';
      }
      const matchCat = p.categorySlug === resolvedCategory;
      const matchMat = !resolvedMaterial || p.materialSlug === resolvedMaterial;
      return matchCat && matchMat;
    });
  }, [resolvedCategory, resolvedMaterial]);

  // Apply length & diameter filters
  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((p) => {
      const matchLen = selectedLengths.length === 0 || (p.length !== undefined && selectedLengths.includes(p.length));
      const matchDia = selectedDiameters.length === 0 || (p.diameter !== undefined && selectedDiameters.includes(p.diameter));
      return matchLen && matchDia;
    });
  }, [categoryProducts, selectedLengths, selectedDiameters]);

  // Toggle filter helpers
  const toggleLength = (len: number) => {
    setSelectedLengths((prev) => (prev.includes(len) ? prev.filter((l) => l !== len) : [...prev, len]));
  };

  const toggleDiameter = (dia: number) => {
    setSelectedDiameters((prev) => (prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]));
  };

  const clearFilters = () => {
    setSelectedLengths([]);
    setSelectedDiameters([]);
  };

  const hasActiveFilters = selectedLengths.length > 0 || selectedDiameters.length > 0;

  // Available filter options based on this category
  const availableLengths = useMemo(() => {
    const lens = new Set<number>();
    categoryProducts.forEach((p) => {
      if (p.length !== undefined && p.length > 0) lens.add(p.length);
    });
    return Array.from(lens).sort((a, b) => a - b);
  }, [categoryProducts]);

  const availableDiameters = useMemo(() => {
    const dias = new Set<number>();
    categoryProducts.forEach((p) => {
      if (p.diameter !== undefined && p.diameter > 0) dias.add(p.diameter);
    });
    return Array.from(dias).sort((a, b) => a - b);
  }, [categoryProducts]);

  return (
    <div className="cat-page-wrapper">
      {/* Standard Brand Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/products">Our Products</Link>
            <span className="sep">/</span>
            <span className="current">{pageMeta.breadcrumb}</span>
          </div>
          <div className="page-hero-tag">
            <FaBolt size={12} />
            <span>Heavy Duty Quality • IS:3043</span>
          </div>
          <h1 className="page-hero-title">{pageMeta.title}</h1>
          <p className="page-hero-subtitle">{pageMeta.subtitle}</p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section cat-content-section">
        <div className="container">
          {/* Mobile Filter Toggle */}
          <div className="cat-mobile-filter-bar">
            <button
              className="cat-mobile-filter-btn"
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            >
              <FaFilter size={13} />
              <span>Filters {hasActiveFilters && `(${selectedLengths.length + selectedDiameters.length})`}</span>
            </button>
            <span className="cat-count-text">
              Showing <strong>{filteredProducts.length}</strong> of {categoryProducts.length} products
            </span>
          </div>

          <div className="cat-layout-grid">
            {/* Filter Sidebar */}
            <aside className={`cat-sidebar ${mobileFilterOpen ? 'cat-sidebar--open' : ''}`}>
              <div className="cat-sidebar-card">
                <div className="cat-sidebar-header">
                  <h3>Filter Products</h3>
                  {hasActiveFilters && (
                    <button className="cat-clear-btn" onClick={clearFilters}>
                      Clear All
                    </button>
                  )}
                  <button
                    className="cat-close-sidebar-mobile"
                    onClick={() => setMobileFilterOpen(false)}
                    aria-label="Close filters"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>

                {/* Length Filter */}
                {availableLengths.length > 0 && (
                  <div className="cat-filter-group">
                    <h4 className="cat-filter-title">Electrode Length</h4>
                    <div className="cat-filter-options">
                      {availableLengths.map((len) => {
                        const checked = selectedLengths.includes(len);
                        return (
                          <label key={len} className="cat-checkbox-label">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleLength(len)}
                            />
                            <span className="cat-custom-box">
                              {checked && <FaCheck size={10} color="#fff" />}
                            </span>
                            <span className="cat-label-text">{len} Meter{len > 1 ? 's' : ''}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Diameter Filter */}
                {availableDiameters.length > 0 && (
                  <div className="cat-filter-group">
                    <h4 className="cat-filter-title">Outer Diameter</h4>
                    <div className="cat-filter-options">
                      {availableDiameters.map((dia) => {
                        const checked = selectedDiameters.includes(dia);
                        return (
                          <label key={dia} className="cat-checkbox-label">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleDiameter(dia)}
                            />
                            <span className="cat-custom-box">
                              {checked && <FaCheck size={10} color="#fff" />}
                            </span>
                            <span className="cat-label-text">{dia} mm</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="cat-products-area">
              <div className="cat-desktop-count-bar">
                <p className="cat-count-text">
                  Showing <strong>{filteredProducts.length}</strong> of {categoryProducts.length} products
                </p>
                {hasActiveFilters && (
                  <button className="cat-clear-btn-inline" onClick={clearFilters}>
                    Reset filters
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="cat-no-products">
                  <p>No products match your selected filter criteria.</p>
                  <button className="btn btn-outline-primary" onClick={clearFilters}>
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="cat-cards-grid">
                  {filteredProducts.map((p, index) => {
                    const detailUrl = resolvedMaterial
                      ? `/products/${p.categorySlug}/${p.materialSlug}/${p.id}`
                      : `/products/${p.categorySlug}/${p.id}`;

                    return (
                      <motion.div
                        key={p.id}
                        className="cat-product-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                      >
                        <Link to={detailUrl} className="cat-card-img-link">
                          <div className="cat-card-img-wrap">
                            <img src={p.image} alt={p.name} loading="lazy" />
                          </div>
                        </Link>

                        <div className="cat-card-body">
                          <h3 className="cat-card-title">
                            <Link to={detailUrl}>{p.name}</Link>
                          </h3>
                          <p className="cat-card-desc">{p.shortDescription}</p>

                          {/* Quick specs highlights */}
                          <div className="cat-card-specs-row">
                            {p.specifications.wallThickness && (
                              <span className="cat-spec-tag">Wall: {p.specifications.wallThickness}</span>
                            )}
                            {p.specifications.innerStrip && (
                              <span className="cat-spec-tag">Strip: {p.specifications.innerStrip.split(' ')[0]}</span>
                            )}
                            {p.specifications.coating && (
                              <span className="cat-spec-tag">{p.specifications.coating}</span>
                            )}
                          </div>

                          <div className="cat-card-actions">
                            <Link to={detailUrl} className="btn cat-view-btn">
                              <span>View Details</span>
                              <FaArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CategoryProducts() {
  const params = useParams<{ category?: string; material?: string; id?: string }>();
  const location = useLocation();

  // Extract from path segments (robust against any route param differences)
  const pathParts = location.pathname.split('/').filter(Boolean);
  let resolvedCategory = params.category || '';
  let resolvedMaterial = params.material || '';

  // E.g. /products/strip-in-pipe/hot-dip-galvanised -> pathParts = ['products', 'strip-in-pipe', 'hot-dip-galvanised']
  if (pathParts.length >= 2 && pathParts[0] === 'products') {
    resolvedCategory = pathParts[1];
    if (pathParts.length >= 3) {
      resolvedMaterial = pathParts[2];
    }
  }

  // Check legacy map
  if (legacySlugMap[resolvedCategory]) {
    const mapped = legacySlugMap[resolvedCategory];
    resolvedCategory = mapped.category;
    resolvedMaterial = mapped.material || '';
  }
  if (params.id && legacySlugMap[params.id]) {
    const mapped = legacySlugMap[params.id];
    resolvedCategory = mapped.category;
    resolvedMaterial = mapped.material || '';
  }

  // If the path points directly to an individual product ID (e.g. ese-protector or strip-galv-48-2m), render ProductDetail
  const lastSegment = pathParts[pathParts.length - 1];
  const isDirectProduct = allProducts.some(
    (p) => p.id === resolvedCategory || p.id === resolvedMaterial || p.id === lastSegment || (params.id && p.id === params.id)
  );
  if (isDirectProduct) {
    return <ProductDetail />;
  }

  return (
    <CategoryProductsView
      key={location.pathname}
      resolvedCategory={resolvedCategory}
      resolvedMaterial={resolvedMaterial}
    />
  );
}

