import { Trophy, Music, Users, Mic, Sparkles, PartyPopper } from "lucide-react";

const DAYS = [
  {
    tag: "Jour 1 · 29 Août",
    title: "Chill & Connexion",
    accent: "from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))]",
    items: [
      { icon: Trophy, text: "Match de gala (artistes, influenceurs, managers, designers, marques)" },
      { icon: Sparkles, text: "Installation du site & ambiance lounge" },
      { icon: Music, text: "Animations musicales" },
      { icon: Users, text: "Networking & stands partenaires" },
    ],
  },
  {
    tag: "Jour 2 · 30 Août",
    title: "Contenus & Expériences",
    accent: "from-[hsl(var(--teal-deep))] to-[hsl(var(--teal-night))]",
    items: [
      { icon: Mic, text: "Cérémonie d'ouverture, Keynote & Panels" },
      { icon: Users, text: "Découverte des stands partenaires" },
      { icon: Sparkles, text: "Open mic, performances, jeux" },
      { icon: PartyPopper, text: "Concert de clôture" },
    ],
  },
];

const ProgramSection = () => {
  return (
    <section id="programme" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-up">
          <span className="eyebrow">Formats & Programmes</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            02 Jours, 02 Atmosphères
          </h2>
          <p className="text-lg text-muted-foreground">
            Du networking décontracté aux moments les plus forts sur scène, chaque instant est conçu
            pour transformer une rencontre en collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DAYS.map((day) => (
            <div key={day.title} className="lift-card overflow-hidden fade-in-up">
              <div className={`bg-gradient-to-r ${day.accent} px-8 py-6`}>
                <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                  {day.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">{day.title}</h3>
              </div>
              <div className="p-8 space-y-5">
                {day.items.map((item) => {
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
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 fade-in-up">
          Lieu : Le Concerto, Akpakpa · Cotonou · Un after party est prévu 🎉
        </p>
      </div>
    </section>
  );
};

export default ProgramSection;
