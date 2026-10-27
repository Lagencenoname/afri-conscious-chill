import { Music, Users, Mic, Sparkles, PartyPopper, Store, Armchair } from "lucide-react";
import visuelOfficiel from "@/assets/visuel-officiel-acc3.webp";

const ITEMS = [
  { icon: Armchair, text: "Installation du site & ambiance lounge" },
  { icon: Mic, text: "Cérémonie d'ouverture, Keynote & Panels" },
  { icon: Store, text: "Découverte du Village des solutions et opportunités" },
  { icon: Users, text: "Networking" },
  { icon: Music, text: "Animations musicales" },
  { icon: Sparkles, text: "Open mic, performances, jeux" },
  { icon: PartyPopper, text: "Concert de clôture" },
];

const ProgramSection = () => {
  return (
    <section id="programme" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-up">
          <span className="eyebrow">Formats & Programmes</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Une Journée, Mille Connexions
          </h2>
          <p className="text-lg text-muted-foreground">
            Une journée pensée pour que les rencontres se transforment en projets.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 fade-in-up">
          <div className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-floating)]">
            <img
              src={visuelOfficiel}
              alt="African Conscious Chill 3 · 15 Novembre 2026 · EYA Centre Communautaire"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto lift-card p-6 sm:p-10 fade-in-up">
          <div className="grid sm:grid-cols-2 gap-5">
            {ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(var(--surface))] border border-border">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed pt-1.5">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 fade-in-up">
          Lieu : Centre EYA, Akpakpa (Cotonou). Un after party est prévu.
        </p>
      </div>
    </section>
  );
};

export default ProgramSection;
