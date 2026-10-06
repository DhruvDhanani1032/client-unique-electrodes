import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaPaperPlane } from 'react-icons/fa';
import { company } from '../data/content';
import SEO from '../components/common/SEO';
import './Contact.css';
import { IoChatbox } from 'react-icons/io5';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', product: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', product: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Contact Us | Request Quote & Technical Consultation"
        description="Get in touch with Unique Electrodes Surat for quotes, inquiries, and technical guidance on earthing systems. Call +91 9512231350."
        keywords="contact unique electrodes, earthing supplier Surat phone number, buy earthing electrodes Gujarat, earthing quote"
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Contact</span>
          </div>
          <div className="page-hero-tag"><FaPhoneAlt size={12} /> Get In Touch</div>
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">
            We'd love to hear about your earthing requirements. Get a custom quote today.
          </p>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Contact Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-sub">Fill out the form and our team will get back to you within 24 hours.</p>

              {submitted && (
                <div className="contact-success">
                  ✅ Thank you! Your message has been sent. We'll contact you shortly.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required
                      placeholder="Your full name"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email" id="email" name="email" required
                      placeholder="your@email.com"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel" id="phone" name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="product">Product of Interest</label>
                    <select id="product" name="product" value={formData.product} onChange={handleChange}>
                      <option value="">Select a product</option>
                      <option value="copper-bonded-solid-rod">Copper Bonded Solid Rod</option>
                      <option value="copper-bonded-pipe-type">Copper Bonded Pipe Type</option>
                      <option value="gi-earthing-electrodes">GI Earthing Electrodes</option>
                      <option value="earth-enhancement-compound">Earth Enhancement Compound</option>
                      <option value="lightning-arresters">Lightning Arresters</option>
                      <option value="solar-earthing-kit">Solar Earthing Kit</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Describe your project requirements, quantities needed, or any questions..."
                    value={formData.message} onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg contact-submit">
                  <FaPaperPlane size={14} /> Send Message
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div className="contact-info-wrap">
              <h2 className="contact-info-title">Get In Touch</h2>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Factory Address</h4>
                    <p>{company.address.full}</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><FaPhoneAlt /></div>
                  <div>
                    <h4>Phone Numbers</h4>
                    {company.contacts.map((c, i) => (
                      <p key={i}><a href={`tel:${c}`}>{c}</a></p>
                    ))}
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><FaEnvelope /></div>
                  <div>
                    <h4>Email</h4>
                    {company.emails.map((e, i) => (
                      <p key={i}><a href={`mailto:${e}`}>{e}</a></p>
                    ))}
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-info-icon"><FaGlobe /></div>
                  <div>
                    <h4>Website</h4>
                    <p><a href={`https://${company.website}`} target="_blank" rel="noreferrer">{company.website}</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-whatsapp">
                <a
                  href="https://wa.me/919512231350"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-100"
                  style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.35)', justifyContent: 'center' }}
                >
                  <IoChatbox size={22} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact-map-wrap">
            <h3 className="contact-map-title">Find Our Factory</h3>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.849!2d72.858!3d21.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6b4bd8e3c3%3A0x123!2sUdhna+Udhyog+Nagar%2C+Surat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1620000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unique Electrodes Factory Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
