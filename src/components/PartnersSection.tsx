// Visuels partenaires · chargés automatiquement depuis /assets/partners (.webp)
const modules = import.meta.glob("@/assets/partners/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const LOGOS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

// Deux lignes : une image sur deux dans chaque ligne
const ROWS = [LOGOS.filter((_, i) => i % 2 === 0), LOGOS.filter((_, i) => i % 2 === 1)];

const PartnersSection = () => {
  return (
    <section id="partenaires" className="py-14 sm:py-20 bg-[hsl(var(--surface))] overflow-hidden">
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

        {LOGOS.length === 0 && (
          <p className="text-center text-muted-foreground fade-in-up">
            Les partenaires de cette édition seront dévoilés très bientôt.
          </p>
        )}
      </div>

      {LOGOS.length > 0 && (
        <div className="relative space-y-4">
          {ROWS.map((row, r) => (
            // Dupliqué pour un défilement marquee continu ; la 2e ligne défile en sens inverse
            <div key={r} className={`marquee-track gap-4 ${r === 1 ? "marquee-reverse" : ""}`}>
              {[...row, ...row].map((src, i) => (
                <div
                  key={i}
                  className="w-40 sm:w-52 flex-shrink-0 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-raised)] bg-[hsl(var(--surface))]"
                  aria-hidden={i >= row.length || undefined}
                >
                  <img
                    src={src}
                    alt={i < row.length ? "Partenaire African Conscious Chill 3" : ""}
                    width={868}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto"
                  />
                </div>
              ))}
            </div>
          ))}
          {/* Dégradés latéraux */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-32 bg-gradient-to-r from-[hsl(var(--surface))] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-32 bg-gradient-to-l from-[hsl(var(--surface))] to-transparent" />
        </div>
      )}
    </section>
  );
};

export default PartnersSection;
