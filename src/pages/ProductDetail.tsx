import { useState, useMemo, useEffect } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaWhatsapp,
  FaTools,
  FaListUl,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";
import {
  LuShield,
  LuAward,
  LuClock,
  LuLayers,
  LuPaintRoller,
  LuCircleSlash,
  LuMoveHorizontal,
  LuMoveVertical,
  LuAlignJustify,
  LuLayoutGrid,
  LuTag,
  LuNut,
  LuFlaskConical,
  LuShieldCheck,
  LuZap,
  LuFileText,
  LuBox,
} from "react-icons/lu";
import { allProducts, getRelatedFamilyVariants } from "../data/productsData";
import { products as legacyProducts } from "../data/content";
import SEO from "../components/common/SEO";
import productGiPipeSingle from "../assets/product_gi_pipe_single.webp";
import productGiPipePallet from "../assets/product_gi_pipe_pallet.webp";
import productGiPipeBatch from "../assets/product_gi_pipe_batch.webp";
import productGiPipeVertical from "../assets/product_gi_pipe_vertical.webp";
import productCopperPipeBatch from "../assets/product_copper_pipe_batch.webp";
import productCopperPipe48mm from "../assets/product_copper_pipe_48mm.webp";
import productCopperPipePure from "../assets/product_copper_pipe_pure.webp";
import productCopperPipePackaged from "../assets/product_copper_pipe_packaged.webp";
import productCopperRod from "../assets/product_copper_rod.webp";
import productEseArrester from "../assets/product_ese_arrester.webp";
import "./ProductDetail.css";

export default function ProductDetail() {
  const params = useParams<{
    category?: string;
    material?: string;
    productId?: string;
    id?: string;
  }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  // Robust target product ID resolution
  const pathParts = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];
  const targetId =
    params.productId ||
    (allProducts.some((p) => p.id === lastSegment) ? lastSegment : undefined) ||
    params.id ||
    (allProducts.some((p) => p.id === params.material)
      ? params.material
      : undefined);

  const product = useMemo(() => {
    if (!targetId) return allProducts[0];

    // Try finding exact ID in allProducts
    const found = allProducts.find((p) => p.id === targetId);
    if (found) return found;

    // Check if matched by legacy ID (e.g. galvanised-strip-in-pipe)
    if (targetId === "galvanised-strip-in-pipe") {
      return (
        allProducts.find((p) => p.id === "strip-galv-48-2m") || allProducts[0]
      );
    }
    if (targetId === "hot-dip-galvanised-strip-in-pipe") {
      return (
        allProducts.find((p) => p.id === "strip-hdg-48-2m") || allProducts[0]
      );
    }
    if (targetId === "copper-bonded-strip-in-pipe") {
      return (
        allProducts.find((p) => p.id === "strip-cb-48-2m") || allProducts[0]
      );
    }
    if (targetId === "copper-bonded-rod-in-pipe") {
      return (
        allProducts.find((p) => p.id === "rip-cb-48-25-2m") || allProducts[0]
      );
    }
    if (targetId === "copper-bonded-solid-rod") {
      return allProducts.find((p) => p.id === "cbr-25-3m") || allProducts[0];
    }
    if (targetId === "hot-dip-galvanised-solid-rod") {
      return (
        allProducts.find((p) => p.id === "hdg-solid-16-3m") || allProducts[0]
      );
    }
    if (targetId === "4-meter-copper-bonded-rod") {
      return allProducts.find((p) => p.id === "cbr-4m-17") || allProducts[0];
    }
    if (targetId === "pure-copper-solid-rod") {
      return (
        allProducts.find((p) => p.id === "pure-cu-16-3m") || allProducts[0]
      );
    }
    if (targetId === "ese-lightning-arrestor") {
      return (
        allProducts.find((p) => p.id === "ese-protector") || allProducts[0]
      );
    }
    if (targetId === "conventional-lightning-arrestor") {
      return (
        allProducts.find((p) => p.id === "conv-copper-bonded") || allProducts[0]
      );
    }
    if (targetId === "lightning-protection-accessories") {
      return (
        allProducts.find((p) => p.id === "lightning-mast-pole") ||
        allProducts[0]
      );
    }

    // Try finding in legacy products
    const leg = legacyProducts.find((p) => p.id === targetId);
    if (leg) {
      return (
        allProducts.find((p) => p.categoryName === leg.category) ||
        allProducts[0]
      );
    }

    return allProducts[0];
  }, [targetId]);

  const [activeTab, setActiveTab] = useState<"specifications" | "installation">(
    "specifications",
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery of actual product shots
  const gallery = useMemo(() => {
    const cat = product.categorySlug || "";
    const mat = (
      product.materialSlug ||
      product.materialName ||
      ""
    ).toLowerCase();
    const name = product.name.toLowerCase();
    const id = product.id.toLowerCase();

    if (
      cat === "strip-in-pipe" ||
      cat === "rod-in-pipe" ||
      cat.includes("pipe") ||
      product.categoryName?.includes("Pipe")
    ) {
      if (
        mat.includes("copper") ||
        name.includes("copper") ||
        id.includes("cb")
      ) {
        return [
          productCopperPipeBatch,
          productCopperPipe48mm,
          productCopperPipePure,
          productCopperPipePackaged,
        ];
      } else {
        return [
          productGiPipePallet,
          productGiPipeSingle,
          productGiPipeBatch,
          productGiPipeVertical,
        ];
      }
    }

    if (
      cat === "solid-rod" ||
      cat.includes("rod") ||
      product.categoryName?.includes("Solid Rod")
    ) {
      if (
        mat.includes("copper") ||
        name.includes("copper") ||
        id.includes("cu") ||
        id.includes("cbr")
      ) {
        return [productCopperRod, productCopperPipePure];
      }
    }

    if (
      cat === "lightning-arrestors" ||
      product.categoryName?.includes("Lightning") ||
      name.includes("lightning")
    ) {
      if (name.includes("ese") || id.includes("ese")) {
        return [productEseArrester];
      }
    }

    return [product.image];
  }, [product]);

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImage(null);
  }, [product.id]);

  const activeImage = selectedImage || product.image;

  const handleScrollToSpecifications = () => {
    setActiveTab("specifications");
    const target = document.getElementById("technical-specifications");
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Related size variants in same family
  const familyVariants = useMemo(() => {
    return getRelatedFamilyVariants(product);
  }, [product]);

  // Related products from other families
  const relatedProducts = useMemo(() => {
    return allProducts
      .filter(
        (p) =>
          p.id !== product.id &&
          (p.categorySlug === product.categorySlug ||
            p.materialSlug === product.materialSlug),
      )
      .slice(0, 3);
  }, [product]);

  // Map specification key/label to modern visual icon
  const getSpecIcon = (key: string, label: string) => {
    const k = (key + " " + label).toLowerCase();
    if (k.includes("material")) return <LuLayers />;
    if (k.includes("coating")) return <LuPaintRoller />;
    if (k.includes("dia") || k.includes("diameter")) return <LuCircleSlash />;
    if (k.includes("length")) return <LuMoveHorizontal />;
    if (k.includes("thickness") || k.includes("wall")) return <LuMoveVertical />;
    if (k.includes("strip") || k.includes("conductor") || k.includes("inner")) return <LuAlignJustify />;
    if (k.includes("section") || k.includes("area") || k.includes("cross")) return <LuLayoutGrid />;
    if (k.includes("lug") || k.includes("terminal")) return <LuTag />;
    if (k.includes("hardware") || k.includes("nut") || k.includes("bolt")) return <LuNut />;
    if (k.includes("compound") || k.includes("gic") || k.includes("backfill")) return <LuFlaskConical />;
    if (k.includes("isi") || k.includes("marking")) return <LuShieldCheck />;
    if (k.includes("conductivity") || k.includes("current") || k.includes("electric")) return <LuZap />;
    if (k.includes("life") || k.includes("durability")) return <LuClock />;
    if (k.includes("standard") || k.includes("compliance")) return <LuFileText />;
    if (k.includes("warranty")) return <LuShield />;
    return <LuBox />;
  };

  // Format specifications into readable label/value pairs (Exact Original Data)
  const specEntries = useMemo(() => {
    const formatKey = (key: string) => {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
    };

    return Object.entries(product.specifications || {}).map(([key, val]) => ({
      key,
      label: formatKey(key),
      value: val,
    }));
  }, [product]);

  // Exact Original 5 Installation Steps (Not a single word changed)
  const installationSteps = [
    {
      num: "01",
      title: "Auger Boring / Pit Excavation",
      desc: "Auger a vertical borehole of 100mm to 150mm diameter to the specified depth (2.0 to 3.0 meters depending on electrode length).",
    },
    {
      num: "02",
      title: "Electrode Centering & Positioning",
      desc: "Place the chemical earthing electrode vertically in the center of the drilled borehole, ensuring the terminal lug sits 150mm above ground level.",
    },
    {
      num: "03",
      title: "Backfilling with Ground Improving Compound",
      desc: "Mix the supplied Ground Improving Compound with clean water into a semi-liquid slurry. Pour the compound into the annular space around the pipe, rodding gently to eliminate air cavities.",
    },
    {
      num: "04",
      title: "Terminal Bonding & Connection",
      desc: "Fasten the copper or galvanized earthing flat tape securely to the terminal lug using the supplied dual stainless steel nut bolts and spring washers.",
    },
    {
      num: "05",
      title: "Chamber Installation & Resistance Verification",
      desc: "Install a heavy-duty concrete or poly-plastic earth inspection pit chamber with removable cover. Measure earth resistance with a calibrated earth tester per IS 3043.",
    },
  ];

  const waQuoteMessage = encodeURIComponent(
    `Hello Unique Electrodes! I am interested in purchasing:\nProduct: ${product.name}\nSKU: ${product.sku}\nPlease share best quotation and availability.`,
  );

  const productSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.name,
      image: `https://www.uniqueelectrodes.com${product.image}`,
      description: product.shortDescription || product.longDescription,
      brand: {
        "@type": "Brand",
        name: "Unique Electrodes",
      },
      manufacturer: {
        "@type": "Organization",
        name: "Unique Enterprise",
      },
      category: product.categoryName,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: product.price || 0,
        availability: "https://schema.org/InStock",
        url: `https://www.uniqueelectrodes.com${location.pathname}`,
      },
    }),
    [product, location.pathname],
  );

  return (
    <div className="pd-page">
      <SEO
        title={`${product.name} | Unique Electrodes`}
        description={
          product.shortDescription || product.longDescription.slice(0, 160)
        }
        keywords={`${product.name}, ${product.categoryName}, ${product.materialName || ""}, earthing electrode Surat, unique electrodes`}
        ogType="product"
        ogImage={product.image}
        schema={productSchema}
      />

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
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="pd-image-box">
                <div className="pd-image-inner">
                  <img src={activeImage} alt={product.name} />
                </div>
                <div className="pd-image-badge">
                  <FaBolt size={12} />
                  <span>Tested Quality • IS 3043 Compliant</span>
                </div>
              </div>

              {/* Multi-angle Product Gallery */}
              {gallery.length > 1 && (
                <div className="pd-gallery-thumbnails">
                  {gallery.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`pd-gallery-thumb ${activeImage === imgSrc ? "active" : ""}`}
                      onClick={() => setSelectedImage(imgSrc)}
                      title={`View product photo ${idx + 1}`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${product.name} angle ${idx + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right: Product Info & Actions (Quick Specs removed to below) */}
            <motion.div
              className="pd-info-column"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Badges */}
              <div className="pd-badge-row">
                <span className="pd-badge pd-badge--category">
                  {product.category.replace(/-/g, " ")}
                </span>
                <span className="pd-badge pd-badge--standard">
                  IS 3043 Certified
                </span>
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
                  <p className="pd-stat-text">10 Yr Warranty</p>
                </div>
              </div>

              {/* Size / Variant Selector Pills */}
              {familyVariants.length > 1 && (
                <div className="pd-variants-box">
                  <div className="pd-variant-label">
                    <span>Available Sizes & Models:</span>
                    <span className="pd-variant-selected-badge">
                      {product.diameter}mm × {product.length}m
                    </span>
                  </div>
                  <div className="pd-variant-pills">
                    {familyVariants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        className={`pd-variant-pill ${v.id === product.id ? "pd-variant-pill--active" : ""}`}
                        onClick={() => navigate(v.url)}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

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

                <button
                  type="button"
                  onClick={handleScrollToSpecifications}
                  className="btn btn-outline-primary btn-lg pd-brochure-btn"
                  title="View Technical Specifications"
                >
                  <FaFileAlt size={15} />
                  <span>View Datasheet</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quick Specifications Overview Bar (Moved Below Main Product Grid) ── */}
      <section className="pd-quick-strip-section">
        <div className="container">
          <motion.div
            className="pd-quick-strip-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="pd-quick-strip-header">
              <span className="pd-quick-strip-tag">Essential Parameters</span>
              <h3 className="pd-quick-strip-title">Quick Specifications</h3>
            </div>
            <div className="pd-quick-strip-grid">
              <div className="pd-quick-strip-item">
                <span className="pd-quick-lbl">Material</span>
                <strong className="pd-quick-val">
                  {product.material === "copper-bonded"
                    ? product.category === "solid-rod"
                      ? "Copper Bonded (Low Carbon Core)"
                      : "Copper Bonded MS Pipe"
                    : product.material === "pure-copper"
                      ? "Pure Electrolytic Copper"
                      : "Low Carbon MS Pipe"}
                </strong>
              </div>
              <div className="pd-quick-strip-item">
                <span className="pd-quick-lbl">Coating</span>
                <strong className="pd-quick-val">100 microns</strong>
              </div>
              <div className="pd-quick-strip-item">
                <span className="pd-quick-lbl">Diameters</span>
                <strong className="pd-quick-val">48mm, 62mm, 76mm</strong>
              </div>
              <div className="pd-quick-strip-item">
                <span className="pd-quick-lbl">Lengths</span>
                <strong className="pd-quick-val">1m, 2m, 3m</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tabs Section: Technical Specifications & Installation Guide ── */}
      <section
        id="technical-specifications"
        className="section pd-tabs-section"
      >
        <div className="container">
          {/* Tab Navigation Buttons */}
          <div className="pd-tab-nav">
            <button
              className={`pd-tab-btn ${activeTab === "specifications" ? "active" : ""}`}
              onClick={() => setActiveTab("specifications")}
            >
              <FaListUl size={14} />
              <span>Technical Specifications</span>
            </button>
            <button
              className={`pd-tab-btn ${activeTab === "installation" ? "active" : ""}`}
              onClick={() => setActiveTab("installation")}
            >
              <FaTools size={14} />
              <span>Installation Guide</span>
            </button>
          </div>

          {/* Tab 1: Technical Specifications (Animated Modern Cards with Icons & Elevation Hover) */}
          {activeTab === "specifications" && (
            <motion.div
              className="pd-tab-pane"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pd-spec-box">
                <div className="pd-spec-header">
                  <span className="pd-spec-tag">PRODUCT DETAILS</span>
                  <h3 className="pd-spec-title">Technical Specifications</h3>
                  <p className="pd-spec-desc">
                    All values measured in accordance with IS 3043 and
                    manufacturing quality benchmarks.
                  </p>
                </div>

                <div className="pd-spec-cards-grid">
                  {specEntries.map((spec, i) => (
                    <motion.div
                      key={i}
                      className="pd-spec-tile"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.02 }}
                      whileHover={{ y: -6, scale: 1.025 }}
                    >
                      <div className="pd-spec-tile-icon">
                        {getSpecIcon(spec.key, spec.label)}
                      </div>
                      <div className="pd-spec-tile-content">
                        <span className="pd-spec-tile-label">
                          {spec.label}
                        </span>
                        <strong className="pd-spec-tile-val">
                          {spec.value}
                        </strong>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Installation Guide (Animated Timeline Flow — Exact Original Text) */}
          {activeTab === "installation" && (
            <motion.div
              className="pd-tab-pane"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pd-install-box">
                <div className="pd-install-header">
                  <h3>Step-by-Step Installation Methodology</h3>
                  <p>
                    Follow the standard field procedure recommended per IS 3043
                    for optimal soil resistivity and earthing effectiveness.
                  </p>
                </div>

                <div className="pd-timeline-flow">
                  {installationSteps.map((step, idx) => (
                    <motion.div
                      key={step.num}
                      className="pd-timeline-item"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.08 }}
                      whileHover={{ x: 6 }}
                    >
                      <div className="pd-timeline-node">
                        <span className="pd-node-circle">{step.num}</span>
                        {idx < installationSteps.length - 1 && (
                          <span className="pd-node-line" />
                        )}
                      </div>
                      <div className="pd-timeline-card">
                        <div className="pd-timeline-card-header">
                          <span className="pd-timeline-step-badge">
                            Step {step.num}
                          </span>
                          <h4>{step.title}</h4>
                        </div>
                        <p>{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
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
            <div
              className="section-header"
              style={{ textAlign: "left", marginBottom: "28px" }}
            >
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
                      <Link
                        to={relUrl}
                        className="btn btn-outline-primary btn-sm pd-rel-btn"
                      >
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
