import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div id="top">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <WhyUsSection />
    <GallerySection />
    <FaqSection />
    <CtaSection />
    <Footer />
  </div>
);

export default Index;
