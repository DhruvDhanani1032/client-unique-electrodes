import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '919512231350',
  defaultMessage = "Hi, I'm interested in your earthing products and would like more information.",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className={`floating-whatsapp ${isScrolled ? 'has-scroll-top' : ''}`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-whatsapp-pulse" aria-hidden="true" />
        <FaWhatsapp className="floating-whatsapp-icon" />
        <span className="floating-whatsapp-tooltip">Chat with us</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
