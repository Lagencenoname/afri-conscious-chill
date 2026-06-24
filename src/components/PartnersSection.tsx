// Logos partenaires · chargés automatiquement depuis /assets/partners (.webp)
const modules = import.meta.glob("@/assets/partners/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const LOGOS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const PartnersSection = () => {
  return (
    <section id="partenaires" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10 fade-in-up">
          <span className="eyebrow">Sponsors & Partenaires</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Les marques et institutions qui nous accompagnent sur cette édition.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto fade-in-up">
          {LOGOS.map((src, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-32 sm:h-40 px-4 rounded-2xl dark:bg-white"
            >
              <img
                src={src}
                alt="Partenaire African Conscious Chill"
                loading="lazy"
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
