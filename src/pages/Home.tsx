import SEO from '../components/common/SEO';
import HeroSection from './sections/HeroSection';
import StatsBar from './sections/StatsBar';
import AboutSnippet from './sections/AboutSnippet';
import ProductsShowcase from './sections/ProductsShowcase';
import IndustriesStrip from './sections/IndustriesStrip';
import WhyChooseUs from './sections/WhyChooseUs';
import ManufacturingProcess from './sections/ManufacturingProcess';
import QualitySection from './sections/QualitySection';
import CertificationsSection from './sections/CertificationsSection';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import ContactCTA from './sections/ContactCTA';

export default function Home() {
  return (
    <>
      <SEO
        title="Unique Electrodes | Copper Bonded Earthing Electrode Manufacturer Surat"
        description="India's trusted manufacturer of Copper Bonded Earthing Electrodes, GI Earthing Rods, Earth Enhancement Compound and Lightning Arresters in Surat, Gujarat."
        keywords="copper bonded earthing electrode, earthing electrode manufacturer Surat, GI earthing rod, chemical earthing electrode Gujarat, lightning arrester manufacturer India"
      />
      <HeroSection />
      <StatsBar />
      <AboutSnippet />
      <ProductsShowcase />
      <IndustriesStrip />
      <WhyChooseUs />
      <ManufacturingProcess />
      <QualitySection />
      <CertificationsSection />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
