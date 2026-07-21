import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { products } from '../../data/content';
import SectionHeader from '../../components/ui/SectionHeader';
import './ProductsShowcase.css';

const featured = products.slice(0, 4);

export default function ProductsShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section section-light products-showcase" ref={ref}>
      <div className="container">
        <SectionHeader
          tag="Our Products"
          title="Complete Earthing Solutions"
          subtitle="CPRI & ERDA tested. ISO 9001:2015 certified. IS:3043 compliant."
        />

        <div className="products-grid">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link to={`/products/${product.id}`}>
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                  <span className={`badge badge-${product.badgeType} product-card-badge`}>
                    <FaCheckCircle size={10} /> {product.badge}
                  </span>
                </div>
                <div className="product-card-body">
                  <span className="product-card-category">{product.category}</span>
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-spec">{product.keySpec}</p>
                  <p className="product-card-desc">{product.tagline}</p>
                </div>
                <div className="product-card-footer">
                  <Link to={`/products/${product.id}`} className="product-card-link">
                    View Details <FaArrowRight size={12} />
                  </Link>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="products-showcase-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/products" className="btn btn-primary btn-lg">
            View All Products <FaArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
