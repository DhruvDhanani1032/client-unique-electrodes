import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/content';
import SectionHeader from '../../components/ui/SectionHeader';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="section section-light testimonials-section">
      <div className="container">
        <SectionHeader
          tag="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by electrical contractors, project engineers, and developers across India."
        />

        <div className="testimonials-wrapper">
          <button className="swiper-nav-btn prev-btn testimonial-prev" aria-label="Previous slide">
            <FaChevronLeft />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-card">
                  <FaQuoteLeft className="testimonial-quote-icon" />
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                      <div className="testimonial-location">📍 {t.location}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-nav-btn next-btn testimonial-next" aria-label="Next slide">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
