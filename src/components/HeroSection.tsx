import { Calendar, Clock, MapPin, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('billets');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProgram = () => {
    const element = document.getElementById('programme');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Title */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 mt-8 drop-shadow-lg animate-fade-in-up">
          African Conscious
          <span className="block text-yellow-300">Chill 2025</span>
        </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Rendez-vous annuel de réflexion, d'échange et de valorisation des secteurs créatifs, culturels et entrepreneurial en Afrique
          </p>

          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Calendar className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">31 AOÛT 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">15H</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <MapPin className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">PAVILLON DU LAC</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="cta-hero pulse-glow"
              onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
            >
              RÉSERVER MON BILLET
            </Button>
            <Button 
              className="cta-secondary bg-white/20 border-white text-white hover:bg-white hover:text-primary"
              onClick={scrollToProgram}
            >
              <Play size={20} className="mr-2" />
              VOIR LE PROGRAMME
            </Button>
          </div>

          {/* Countdown */}
          <div className="animate-fade-in-up mb-8" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-white mb-4">Plus que :</h3>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
