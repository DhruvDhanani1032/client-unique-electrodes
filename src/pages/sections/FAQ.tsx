import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqs } from '../../data/content';
import SectionHeader from '../../components/ui/SectionHeader';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section-light faq-section">
      <div className="container">
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our earthing electrode products and solutions."
        />

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'faq-item--open' : ''}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <span className="faq-icon">
                  {open === i ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
