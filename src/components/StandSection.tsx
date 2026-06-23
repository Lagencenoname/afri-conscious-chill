import { Utensils, CupSoda, Laptop, BookOpen, Palette } from "lucide-react";
import { WHATSAPP_STAND_URL } from "@/lib/constants";
import standVisuel from "@/assets/stands-acc.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const CATEGORIES = [
  { icon: Utensils, label: "Nourritures" },
  { icon: CupSoda, label: "Boissons" },
  { icon: Laptop, label: "Solutions numériques" },
  { icon: BookOpen, label: "Livres & œuvres d'auteurs" },
  { icon: Palette, label: "Créations artisanales" },
];

const StandSection = () => {
  return (
    <section id="stands" className="py-14 sm:py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="fade-in-up">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-floating)] bg-[hsl(var(--surface))]">
              <img
                src={standVisuel}
                alt="Demande de stand · African Conscious Chill"
                className="w-full h-auto object-contain max-h-[560px] mx-auto"
              />
              <div className="absolute top-4 left-4 rounded-full bg-[hsl(var(--red-accent))] text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                Seulement 5 stands
              </div>
            </div>
          </div>

          <div className="fade-in-up">
            <span className="eyebrow">Exposition</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-5">
              Demande de Stand
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              5 stands, 5 opportunités de visibilité, de prospection et de vente. Cette édition ouvre
              ses espaces d'exposition aux marques, entrepreneurs et créateurs qui souhaitent
              présenter leurs produits et services à une communauté dynamique de créateurs de
              contenu, d'influenceurs, d'artistes et de passionnés du numérique.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map((c) => {
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

            <p className="text-sm text-muted-foreground mb-6">
              Faites découvrir votre activité, générez des contacts et gagnez en visibilité.
              Réservez votre stand dès maintenant.
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
