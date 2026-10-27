import {
  Laptop,
  Rocket,
  GraduationCap,
  School,
  Wallet,
  Briefcase,
  Building2,
  Lightbulb,
  Handshake,
  Info,
} from "lucide-react";
import { WHATSAPP_STAND_URL } from "@/lib/constants";
import villageVisuel from "@/assets/villages-solutions-acc.webp";
import WhatsAppIcon from "./WhatsAppIcon";

const STRUCTURES = [
  { icon: Laptop, label: "Solutions numériques" },
  { icon: Rocket, label: "Startups" },
  { icon: GraduationCap, label: "Centres de formation" },
  { icon: School, label: "Écoles & instituts" },
  { icon: Wallet, label: "Fintech" },
  { icon: Briefcase, label: "Services professionnels" },
  { icon: Building2, label: "Organisations" },
  { icon: Lightbulb, label: "Entreprises innovantes" },
  { icon: Handshake, label: "Solutions pour entrepreneurs" },
];

const StandSection = () => {
  return (
    <section id="stands" className="py-14 sm:py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-up">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-floating)] bg-[hsl(var(--surface))]">
              <img
                src={villageVisuel}
                alt="Village des solutions et opportunités · African Conscious Chill 3"
                className="w-full h-auto object-contain max-h-[620px] mx-auto"
              />
              <div className="absolute top-4 left-4 rounded-full bg-[hsl(var(--red-accent))] text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                Places limitées
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <span className="eyebrow">Exposition</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
              Village des Solutions & Opportunités
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Exposez au cœur de cette édition de l'ACC vos solutions, vos services et vos
              opportunités, et venez à la rencontre de jeunes, entrepreneurs, créateurs,
              professionnels et porteurs de projets.
            </p>

            <h3 className="font-display text-lg font-bold text-foreground mb-3">
              Structures recherchées
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {STRUCTURES.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--surface))] border border-border px-4 py-2 text-sm font-medium text-foreground/90"
                  >
                    <Icon size={16} className="text-primary" /> {c.label}
                  </span>
                );
              })}
            </div>

            <p className="flex items-center gap-2 text-sm font-semibold text-[hsl(var(--red-accent))] mb-6">
              <Info size={18} /> Places limitées : réservez votre stand dès maintenant.
            </p>

            <a
              href={WHATSAPP_STAND_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-3.5 px-7 rounded-xl shadow-[var(--shadow-raised)] transition-all duration-300 hover:scale-[1.03]"
            >
              <WhatsAppIcon className="w-5 h-5" /> Réserver mon Stand
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandSection;
