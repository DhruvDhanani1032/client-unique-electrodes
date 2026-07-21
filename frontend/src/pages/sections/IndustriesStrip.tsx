import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBolt, FaSatelliteDish, FaSolarPanel, FaIndustry,
  FaHospital, FaServer, FaOilCan, FaBuilding
} from 'react-icons/fa';
import SectionHeader from '../../components/ui/SectionHeader';
import './IndustriesStrip.css';

const industries = [
  { icon: <FaBolt />, label: 'Power Sector', color: '#F59E0B' },
  { icon: <FaSatelliteDish />, label: 'Telecom', color: '#3B82F6' },
  { icon: <FaSolarPanel />, label: 'Solar Energy', color: '#EF4444' },
  { icon: <FaIndustry />, label: 'Industrial', color: '#8B5CF6' },
  { icon: <FaHospital />, label: 'Healthcare', color: '#10B981' },
  { icon: <FaServer />, label: 'Data Centers', color: '#06B6D4' },
  { icon: <FaOilCan />, label: 'Oil & Gas', color: '#F97316' },
  { icon: <FaBuilding />, label: 'Construction', color: '#6B7280' },
];

export default function IndustriesStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section section-dark industries-strip" ref={ref}>
      <div className="container">
        <SectionHeader
          tag="Industries We Serve"
          title="Trusted Across Critical Infrastructure"
          subtitle="From power plants to solar farms — reliable earthing solutions for every sector."
          dark
        />

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              className="industry-tile"
              style={{ '--ind-color': ind.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="industry-tile-icon">{ind.icon}</span>
              <span className="industry-tile-label">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
