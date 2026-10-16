import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../../components/ui/SectionHeader";
import certImg1 from "../../assets/certified-img.webp";
import certImg2 from "../../assets/certified-img-2.webp";
import certImg3 from "../../assets/certified-img-3.webp";
import certImg4 from "../../assets/certified-img-4.webp";
import certTsn from "../../assets/certified-tsn.webp";
import certErda from "../../assets/certified-erda.webp";
import certBhumi from "../../assets/certified-bhumi.webp";
import certNationalStd from "../../assets/certified-national-std.webp";
import "./CertificationsSection.css";

const certBadgesList = [
  { src: certImg1, alt: "Ministry of MSME, Govt. of India" },
  { src: certImg2, alt: "Certified ISO 9001:2015 Company" },
  { src: certImg3, alt: "Central Power Research Institute (CPRI)" },
  { src: certImg4, alt: "NABL ISO / IEC 17025 Accredited" },
  { src: certTsn, alt: "TSN Certification - ISO 9001:2015 Accredited" },
  {
    src: certErda,
    alt: "Electrical Research and Development Association (ERDA)",
  },
  {
    src: certBhumi,
    alt: "Bhumi Research Center LLP, Surat - Tested & Verified",
  },
  {
    src: certNationalStd,
    alt: "National Standards Compliant - IS 3043 & IEC 62561-7",
  },
];

export default function CertificationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      className="section home-certs-section"
      id="certifications"
      ref={ref}
    >
      <div className="container">
        <SectionHeader
          tag="Certifications & Approvals"
          title="Official Accreditations & Reports"
          subtitle="Transparency and trust. All our official credentials, government registrations, and lab reports."
        />

        {/* Certificate Image Badges Grid (iTorrent reference style) */}
        <div className="home-certs-img-grid">
          {certBadgesList.map((badge, i) => (
            <motion.div
              key={i}
              className="home-cert-img-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="home-cert-img-wrap">
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="home-cert-badge-img"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* PREVIOUS CARDS - COMMENTED OUT AS PER CLIENT REQUEST
        <div className="home-certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="home-cert-card"
              style={{ '--cert-color': cert.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <div className="home-cert-card-header">
                <div className="home-cert-card-emoji">{cert.icon}</div>
                <div>
                  <div className="home-cert-card-category">{cert.category}</div>
                  <h3 className="home-cert-card-title">{cert.title}</h3>
                </div>
              </div>

              <div className="home-cert-card-body">
                <div className="home-cert-card-field">
                  <label>Issued By</label>
                  <span>{cert.issuedBy}</span>
                </div>
                <div className="home-cert-card-field">
                  <label>Scope / Finding</label>
                  <span>{cert.scope}</span>
                </div>
                {cert.date && (
                  <div className="home-cert-card-field">
                    <label>Date</label>
                    <span>{cert.date}</span>
                  </div>
                )}
              </div>

              <div className="home-cert-card-footer">
                <span className="home-cert-verified-badge">
                  <FaCheckCircle /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
