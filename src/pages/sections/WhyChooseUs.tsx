import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaFlask, FaAward, FaBolt, FaCubes,
  FaClipboardCheck, FaBuilding
} from 'react-icons/fa';
import { whyChooseUs } from '../../data/content';
import SectionHeader from '../../components/ui/SectionHeader';
import './WhyChooseUs.css';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  FaFlask: <FaFlask />, FaAward: <FaAward />, FaBolt: <FaBolt />,
  FaCubes: <FaCubes />, FaClipboardCheck: <FaClipboardCheck />, FaBuilding: <FaBuilding />,
};

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section section-light why-section" ref={ref}>
      <div className="container">
        <SectionHeader
          tag="Why Choose Us"
          title="What Makes Us Different"
          subtitle="Every decision we make is backed by testing, certification, and a commitment to your safety."
        />

        <div className="why-grid">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="why-card-icon" style={{ background: `${item.color}18`, color: item.color }}>
                {iconMap[item.icon]}
              </div>
              <div className="why-card-body">
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
