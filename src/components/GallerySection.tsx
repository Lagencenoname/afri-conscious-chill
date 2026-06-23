// Galerie des éditions précédentes · chargement automatique du dossier /assets/medis
const modules = import.meta.glob("@/assets/medis/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const IMAGES = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const GallerySection = () => {
  // Dupliqué pour un défilement marquee continu
  const loop = [...IMAGES, ...IMAGES];

  return (
    <section id="galerie" className="py-14 sm:py-20 bg-background overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-up">
          <span className="eyebrow">Revivez l'Expérience</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            2 ans de Connexions & d'Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Le succès de l'African Conscious Chill ne se raconte pas seulement, il se vit.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="marquee-track gap-4">
          {loop.map((src, i) => (
            <div
              key={i}
              className="relative h-56 sm:h-72 flex-shrink-0 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-raised)] bg-[hsl(var(--surface))]"
            >
              <img
                src={src}
                alt="African Conscious Chill · édition précédente"
                loading="lazy"
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default GallerySection;
