import { useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import AboutSection from "./AboutSection";
import ProgramSection from "./ProgramSection";
import PricingSection from "./PricingSection";
import PickupPointsSection from "./PickupPointsSection";
import PartnersSection from "./PartnersSection";
import SocialSection from "./SocialSection";
import FinalCTASection from "./FinalCTASection";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const LandingPage = () => {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <ProgramSection />
      <PricingSection />
      <PickupPointsSection />
      <PartnersSection />
      <SocialSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;