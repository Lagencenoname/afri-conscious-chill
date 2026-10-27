import { Check, Minus, Star } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";

type Pass = {
  name: string;
  price: string;
  tagline: string;
  features: { label: string; ok: boolean }[];
  highlighted: boolean;
  badge?: string;
};

const PASSES: Pass[] = [
  {
    name: "Pass Premium",
    price: "15.000 F",
    tagline: "L'expérience Premium",
    features: [
      { label: "Accès à l'amphithéâtre et à l'ensemble de l'événement", ok: true },
      { label: "Participation aux panels et activités", ok: true },
      { label: "Accès au networking", ok: true },
      { label: "Participation aux expériences proposées durant l'événement", ok: true },
      { label: "Expérience Premium", ok: true },
    ],
    highlighted: false,
  },
  {
    name: "Pass VIP",
    price: "30.000 F",
    tagline: "L'expérience complète",
    features: [
      { label: "Tous les privilèges du Pass Premium", ok: true },
      { label: "Accès à un espace VIP dédié", ok: true },
      { label: "Networking privilégié avec invités, partenaires et intervenants", ok: true },
      { label: "Bracelet / kit VIP exclusif", ok: true },
      { label: "Accès à l'expérience After Party & Camping hors Cotonou", ok: true },
      { label: "Catalogue exclusif des créateurs de contenu", ok: true },
    ],
    highlighted: true,
    badge: "Recommandé",
  },
];

const PricingSection = () => {
  return (
    <section id="billets" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-up">
          <span className="eyebrow">Billetterie</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Choisissez votre Pass
          </h2>
          <p className="text-lg text-muted-foreground">
            Trois formules pour les deux jours de l'African Conscious Chill 3.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {PASSES.map((pass) => (
            <div
              key={pass.name}
              className={`fade-in-up flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                pass.highlighted
                  ? "bg-night text-white shadow-[var(--shadow-floating)] md:-translate-y-3 border border-white/10"
                  : "surface-card hover:-translate-y-1.5"
              }`}
            >
              {pass.badge && (
                <div className="inline-flex items-center gap-1 self-start rounded-full bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] text-white px-3 py-1 text-xs font-bold mb-4">
                  <Star size={12} /> {pass.badge}
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-1">{pass.name}</h3>
              <p className={`text-sm mb-6 ${pass.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                {pass.tagline}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pass.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm">
                    {f.ok ? (
                      <Check className="w-5 h-5 text-[hsl(var(--orange-secondary))] flex-shrink-0" />
                    ) : (
                      <Minus className={`w-5 h-5 flex-shrink-0 ${pass.highlighted ? "text-white/30" : "text-muted-foreground/40"}`} />
                    )}
                    <span className={f.ok ? "" : pass.highlighted ? "text-white/40" : "text-muted-foreground/60"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  pass.highlighted
                    ? "cta-primary w-full"
                    : "cta-outline w-full"
                }
              >
                Réserver
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 fade-in-up">
          Un after party est prévu. Réservation en ligne, paiement sécurisé.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
