import { Link } from "react-router-dom";
import { Calendar, HeartHandshake, ArrowRight } from "lucide-react";
import { SALUBRITE_DATE_LABEL } from "@/lib/constants";
import campagneVisuel from "@/assets/campagne-salubrite.webp";

const CampaignSection = () => {
  return (
    <section id="salubrite" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-up order-2 lg:order-1">
            <span className="eyebrow">Action citoyenne</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
              Campagne de Salubrité
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold mb-6">
              <Calendar size={16} /> {SALUBRITE_DATE_LABEL}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Avant l'événement, on retrousse les manches. Rejoignez l'équipe et les créatifs pour
              une matinée de salubrité dans la ville : un geste simple pour un Bénin plus propre.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Une matinée sur le terrain avec l'équipe et les créatifs",
                "L'occasion de rencontrer la communauté ACC avant l'événement",
                "De la visibilité pour les marques et partenaires présents",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/90">
                  <HeartHandshake className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/salubrite" className="cta-primary">
              Confirme ta présence <ArrowRight size={18} />
            </Link>
          </div>

          <div className="fade-in-up order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-floating)]">
              <img
                src={campagneVisuel}
                alt="Campagne de salubrité African Conscious Chill"
                className="w-full h-auto object-contain max-h-[560px] mx-auto bg-[hsl(var(--surface))]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
