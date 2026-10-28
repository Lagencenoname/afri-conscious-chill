import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AccBusinessCard } from "@/components/business/AccBusinessCard";
import {
  BUSINESS_NAME,
  BUSINESS_ROUTES,
  DEADLINE_LABEL,
  PRICE_PARTNER_LABEL,
} from "@/lib/business";

/** Encart de la page d'accueil qui renvoie vers la page ACC Business. */
const BusinessTeaserSection = () => (
  <section id="acc-business" className="py-14 sm:py-20 bg-[hsl(var(--surface))] border-y border-[hsl(var(--border))]">
    <div className="container">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center max-w-6xl mx-auto">
        <div className="fade-in-up">
          <p className="text-sm font-semibold text-[hsl(var(--primary-ink))] mb-3">
            Pour les entreprises partenaires
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-foreground mb-5 text-balance">
            {BUSINESS_NAME} : votre entreprise, visible après l'ACC.
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed mb-4">
            Chaque invité recevra une carte avec un QR code. Il ouvre un guide qui rassemble les
            entreprises participantes, avec leurs offres, leurs visuels et leur contact WhatsApp.
          </p>
          <p className="text-foreground/75 mb-8">
            Tarif partenaire : <span className="font-semibold text-foreground">{PRICE_PARTNER_LABEL}</span>.
            Inscriptions jusqu'au {DEADLINE_LABEL}.
          </p>
          <Link to={BUSINESS_ROUTES.home} className="cta-solid w-full sm:w-auto">
            Découvrir {BUSINESS_NAME} <ArrowRight size={18} />
          </Link>
        </div>

        <div className="fade-in-up flex justify-center py-4">
          <AccBusinessCard className="w-full max-w-[22rem] -rotate-[4deg]" />
        </div>
      </div>
    </div>
  </section>
);

export default BusinessTeaserSection;
