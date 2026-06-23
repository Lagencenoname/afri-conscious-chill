import { Link } from "react-router-dom";
import { Gem, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/constants";
import { PACKS } from "@/lib/sponsoring";

const SponsoringSection = () => {
  return (
    <section id="sponsoring" className="py-14 sm:py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-up">
          <span className="eyebrow">Devenez sponsor</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Prenez le Lead sur l'Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformez votre budget marketing en un impact social mesurable et mémorable. Du digital
            jusqu'à la grande scène du concert de clôture.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PACKS.map((pack) => (
            <div
              key={pack.name}
              className={`fade-in-up flex flex-col p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 ${
                pack.featured
                  ? "bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] text-white shadow-[var(--shadow-warm)]"
                  : "surface-card"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Gem className={pack.featured ? "text-white" : "text-primary"} size={20} />
                <h3 className="font-display text-xl font-bold">Pack {pack.name}</h3>
              </div>
              <div className={`font-display text-2xl font-black mb-3 ${pack.featured ? "text-white" : "text-gradient-warm"}`}>
                {pack.price}
              </div>
              <p className={`text-sm leading-relaxed flex-1 ${pack.featured ? "text-white/90" : "text-muted-foreground"}`}>
                {pack.tagline}
              </p>
              <a
                href={waLink(
                  `Bonjour, je suis intéressé(e) par le Pack ${pack.name} (${pack.price}) pour sponsoriser l'African Conscious Chill 3.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  pack.featured ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80"
                }`}
              >
                Choisir ce pack <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Link to="/sponsoring" className="cta-primary">
            Voir tous les détails du sponsoring <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsoringSection;
