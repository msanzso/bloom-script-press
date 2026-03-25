import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductSection from '@/components/ProductSection';
import PersonalizationSection from '@/components/PersonalizationSection';
import PricingSection from '@/components/PricingSection';
import OccasionsSection from '@/components/OccasionsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackgroundMusic from '@/components/BackgroundMusic';

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProductSection />
    <PersonalizationSection />
    <PricingSection />
    <OccasionsSection />
    <BlogSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
    <BackgroundMusic />
  </>
);

export default Index;
