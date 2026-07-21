import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBoxOpen, FaCog, FaLayerGroup, FaRuler, FaFlask, FaTruck } from 'react-icons/fa';
import { processSteps } from '../../data/content';
import SectionHeader from '../../components/ui/SectionHeader';
import './ManufacturingProcess.css';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  FaBoxOpen: <FaBoxOpen />, FaCog: <FaCog />, FaLayerGroup: <FaLayerGroup />,
  FaRuler: <FaRuler />, FaFlask: <FaFlask />, FaTruck: <FaTruck />,
};

export default function ManufacturingProcess() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section section-dark process-section" ref={ref}>
      <div className="container">
        <SectionHeader
          tag="Manufacturing Process"
          title="Precision Engineered At Every Step"
          subtitle="From raw material to certified product — a rigorous process that guarantees quality."
          dark
        />

        <div className="process-timeline">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Connector line (not last) */}
              {i < processSteps.length - 1 && <div className="process-connector" />}

              <div className="process-step-number">
                <span>{step.step}</span>
              </div>
              <div className="process-step-icon">
                {iconMap[step.icon]}
              </div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
