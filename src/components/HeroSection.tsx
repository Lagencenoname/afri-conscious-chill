import { Calendar, MapPin, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import FloatingDots from "./FloatingDots";
import Typewriter from "./Typewriter";
import { BOOKING_URL, EVENT_DATES_LABEL, EVENT_VENUE } from "@/lib/constants";
import heroBanner from "@/assets/banner-hero.jpg";

const HeroSection = () => {
  const scrollToProgram = () =>
    document.getElementById("programme")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="accueil" className="relative bg-night min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img src={heroBanner} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--teal-night))] via-[hsl(var(--teal-night))/0.85] to-[hsl(var(--teal-night))/0.7]" />
      </div>

      <FloatingDots count={22} />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white/90 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))] animate-pulse" />
            3ᵉ Édition · Une organisation de HILS Company
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] mb-6 drop-shadow-xl animate-fade-in-up">
            African Conscious
            <span className="block text-gradient-warm">CHILL 3</span>
          </h1>

          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[hsl(var(--gold))] mb-3 animate-fade-in-up">
            Thème de l'édition
          </p>
          <p className="text-base sm:text-xl font-medium text-white max-w-2xl mx-auto mb-8 leading-relaxed min-h-[3.5rem] sm:min-h-[4rem]">
            <Typewriter
              text="Artistes, Influenceurs, Créatifs et Marques : Ensemble pour Créer, Collaborer et Impacter."
              speed={42}
              startDelay={600}
            />
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up">
            <div className="flex items-center gap-2 glass px-4 py-2">
              <Calendar className="text-[hsl(var(--gold))]" size={18} />
              <span className="text-white font-semibold text-sm">{EVENT_DATES_LABEL}</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2">
              <MapPin className="text-[hsl(var(--gold))]" size={18} />
              <span className="text-white font-semibold text-sm">{EVENT_VENUE}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14 animate-fade-in-up">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="cta-hero pulse-glow">
              Réserver mon billet <ArrowRight size={20} />
            </a>
            <button onClick={scrollToProgram} className="cta-ghost">
              Voir le programme
            </button>
          </div>

          <div className="animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">
              Ouverture des portes dans
            </p>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
