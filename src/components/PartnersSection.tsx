import { useEffect, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Logos partenaires · chargés automatiquement depuis /assets/partners (.jpg)
const modules = import.meta.glob("@/assets/partners/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const LOGOS = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const PartnersSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1400);
    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <section id="partenaires" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10 fade-in-up">
          <span className="eyebrow">Sponsors & Partenaires</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Ils Nous Font Confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            Marques, Institutions et Créatifs qui construisent avec nous un Ecosystème créatif fort.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full fade-in-up"
        >
          <CarouselContent>
            {LOGOS.map((src, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                <div className="flex items-center justify-center h-40 sm:h-44 px-6 dark:bg-white dark:rounded-2xl dark:m-2">
                  <img
                    src={src}
                    alt="Partenaire African Conscious Chill"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersSection;
