import leadPhoto from "@/assets/lead-acc.webp";

const LeadSection = () => {
  return (
    <section id="equipe" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Photo + identité */}
          <div className="fade-in-up">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-floating)]">
              <img
                src={leadPhoto}
                alt="Hervé TOGNISSOU, fondateur de l'African Conscious Chill"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-5">
              <h3 className="font-display text-xl font-bold text-foreground">Hervé TOGNISSOU</h3>
              <p className="text-primary font-medium mt-1">
                Promoteur de l'évènement, Founder &amp; Event Director
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Manager Hils Company. Stratège en communication et visibilité digitale, expert en
                stratégies et logistique évènementielle.
              </p>
            </div>
          </div>

          {/* Texte */}
          <div className="fade-in-up">
            <span className="eyebrow">Qui sommes-nous</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Un mouvement, pas seulement un événement
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                L'African Conscious Chill est né de la volonté de dynamiser les industries créatives
                au Bénin. On voulait un carrefour où l'énergie de la jeunesse rencontre l'expérience
                des professionnels.
              </p>
              <p>
                Nous croyons que l'art, l'influence et l'entrepreneuriat peuvent transformer notre
                société. Notre rôle est d'offrir un cadre sain, inspirant et structuré pour aider les
                talents à passer de l'idée à l'impact.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-background p-6">
              <h4 className="font-display text-lg font-bold text-foreground mb-2">Notre vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                Devenir la plateforme de référence en Afrique de l'Ouest pour professionnaliser les
                créatifs et rapprocher les marques engagées de leur audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSection;
