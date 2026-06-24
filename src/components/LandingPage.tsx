import { useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProgramSection from "./ProgramSection";
import CampaignSection from "./CampaignSection";
import StandSection from "./StandSection";
import UndergroundSection from "./UndergroundSection";
import GallerySection from "./GallerySection";
import PricingSection from "./PricingSection";
import SponsoringSection from "./SponsoringSection";
import PartnersSection from "./PartnersSection";
import SocialSection from "./SocialSection";
import LeadSection from "./LeadSection";
import FinalCTASection from "./FinalCTASection";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <CampaignSection />
      <StandSection />
      <UndergroundSection />
      <GallerySection />
      <PricingSection />
      <SponsoringSection />
      <PartnersSection />
      <SocialSection />
      <FinalCTASection />
      <LeadSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
