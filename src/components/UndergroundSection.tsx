import { Mic2, ArrowRight } from "lucide-react";
import { WHATSAPP_UNDERGROUND_URL } from "@/lib/constants";
import FloatingDots from "./FloatingDots";
import undergroundVisuel from "@/assets/appel-aux-artistes-underground.webp";

const UndergroundSection = () => {
  return (
    <section id="underground" className="relative py-14 sm:py-20 bg-night overflow-hidden">
      <FloatingDots count={16} />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-up">
            <span className="eyebrow !text-[hsl(var(--gold))]">Open Mic & Scène</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5">
              Appel aux Artistes <span className="text-gradient-warm">Underground</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              La scène African Conscious Chill 3 offre une tribune aux artistes indépendants et à la
              scène underground. Rappeurs, chanteurs, slameurs, performeurs : c'est votre moment pour
              vous révéler devant le grand public, les marques et les influenceurs réunis.
            </p>
            <a
              href={WHATSAPP_UNDERGROUND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-hero pulse-glow"
            >
              <Mic2 size={20} /> Je veux performer <ArrowRight size={18} />
            </a>
          </div>

          <div className="fade-in-up">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[var(--shadow-floating)] bg-[hsl(var(--teal-deep))]">
              <img
                src={undergroundVisuel}
                alt="Appel aux artistes underground"
                className="w-full h-auto object-contain max-h-[640px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergroundSection;
