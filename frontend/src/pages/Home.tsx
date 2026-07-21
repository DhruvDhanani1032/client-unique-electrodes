import HeroSection from './sections/HeroSection';
import StatsBar from './sections/StatsBar';
import AboutSnippet from './sections/AboutSnippet';
import ProductsShowcase from './sections/ProductsShowcase';
import IndustriesStrip from './sections/IndustriesStrip';
import WhyChooseUs from './sections/WhyChooseUs';
import ManufacturingProcess from './sections/ManufacturingProcess';
import QualitySection from './sections/QualitySection';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import ContactCTA from './sections/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnippet />
      <ProductsShowcase />
      <IndustriesStrip />
      <WhyChooseUs />
      <ManufacturingProcess />
      <QualitySection />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
