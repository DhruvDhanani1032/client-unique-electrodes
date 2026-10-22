import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeader from "../../components/ui/SectionHeader";
import certImg1 from "../../assets/certified-img.webp";
import certImg2 from "../../assets/certified-img-2.webp";
import certImg3 from "../../assets/certified-img-3.webp";
import certImg4 from "../../assets/certified-img-4.webp";
import certIaf from "../../assets/certified-iaf.webp";
import certRohs from "../../assets/certified-rohs.webp";
import certTsn from "../../assets/certified-tsn.webp";
import certErda from "../../assets/certified-erda.webp";
import certBhumi from "../../assets/certified-bhumi.webp";
import "./CertificationsSection.css";

const certBadgesList = [
  { src: certImg1, alt: "Ministry of MSME, Govt. of India" },
  { src: certImg2, alt: "Certified ISO 9001:2015 Company" },
  { src: certIaf, alt: "IAF - International Accreditation Forum Multilateral Recognition" },
  { src: certRohs, alt: "RoHS Compliant Certified" },
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
];

export default function CertificationsSection() {
  return (
    <section
      className="section home-certs-section"
      id="certifications"
    >
      <div className="container">
        <SectionHeader
          tag="Certifications & Approvals"
          title="Official Accreditations & Reports"
          subtitle="Transparency and trust. All our official credentials, government registrations, and lab reports."
        />

        {/* Certificate Image Badges Swiper Slider */}
        <div className="home-certs-slider-wrapper">
          <button
            className="home-certs-nav-btn cert-prev"
            aria-label="Previous certificates"
          >
            <FaChevronLeft />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={700}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".cert-prev",
              nextEl: ".cert-next",
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              576: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="home-certs-swiper"
          >
            {certBadgesList.map((badge, i) => (
              <SwiperSlide key={i}>
                <div className="home-cert-img-card">
                  <div className="home-cert-img-wrap">
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="home-cert-badge-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="home-certs-nav-btn cert-next"
            aria-label="Next certificates"
          >
            <FaChevronRight />
          </button>
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
