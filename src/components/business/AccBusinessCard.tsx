import accLogo from "@/assets/logo-africanconsciouschill.webp";
import { cn } from "@/lib/utils";
import { BUSINESS_TAGLINE } from "@/lib/business";

/**
 * Motif décoratif façon QR code (non scannable) : 3 repères d'angle
 * et un remplissage pseudo-aléatoire stable.
 */
export const QrMark = ({ className }: { className?: string }) => {
  const size = 21;
  const cells: [number, number][] = [];
  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x >= size - 8 && y < 8) || (x < 8 && y >= size - 8);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (inFinder(x, y)) continue;
      if ((x * 7 + y * 13 + x * y * 3) % 5 < 2) cells.push([x, y]);
    }
  }
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={7} height={7} fill="currentColor" />
      <rect x={x + 1} y={y + 1} width={5} height={5} fill="white" />
      <rect x={x + 2} y={y + 2} width={3} height={3} fill="currentColor" />
    </g>
  );
  return (
    <svg viewBox={`-1 -1 ${size + 2} ${size + 2}`} className={className} aria-hidden="true" shapeRendering="crispEdges">
      <rect x={-1} y={-1} width={size + 2} height={size + 2} fill="white" />
      {finder(0, 0)}
      {finder(size - 7, 0)}
      {finder(0, size - 7)}
      {cells.map(([x, y]) => (
        <rect key={`${x}.${y}`} x={x} y={y} width={1} height={1} fill="currentColor" />
      ))}
    </svg>
  );
};

/** La carte de visite collective remise aux invités (représentation, QR non scannable). */
export const AccBusinessCard = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative aspect-[1.7] rounded-2xl bg-[hsl(var(--teal-night))] text-white p-5 flex flex-col justify-between overflow-hidden shadow-[0_24px_48px_-16px_rgba(6,30,36,0.55)]",
      className
    )}
  >
    {/* Liseré orange : rappel de la bande de couleur des supports ACC */}
    <span className="absolute inset-y-0 left-0 w-1.5 bg-[hsl(var(--orange-primary))]" aria-hidden="true" />
    <div className="flex items-start justify-between gap-3">
      <img src={accLogo} alt="" className="h-9 w-auto" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 pt-1">Carte invité</span>
    </div>
    <div className="flex items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="font-display text-xl font-black leading-none mb-1.5">ACC Business</p>
        <p className="text-[11px] leading-snug text-white/70 max-w-[11rem]">{BUSINESS_TAGLINE}</p>
        <p className="text-[11px] font-semibold text-[hsl(var(--gold))] mt-2 tabular-nums">15.11.2026 · Cotonou</p>
      </div>
      <QrMark className="w-[4.5rem] h-[4.5rem] flex-shrink-0 rounded-md text-[hsl(var(--teal-night))]" />
    </div>
  </div>
);

/** Téléphone schématique : la carte se scanne, le guide s'ouvre (pas une capture d'écran). */
const PhoneSketch = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "w-44 h-[22rem] rounded-[2rem] border-[5px] border-[hsl(var(--teal-night))] bg-[hsl(var(--card))] p-3 flex flex-col gap-2.5 shadow-[var(--shadow-floating)]",
      className
    )}
    aria-hidden="true"
  >
    <div className="mx-auto w-12 h-1.5 rounded-full bg-[hsl(var(--border))] mb-1" />
    <div className="h-2 w-20 rounded bg-foreground/70" />
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] p-2">
        <div className={cn("w-8 h-8 rounded-md flex-shrink-0", i === 0 ? "bg-[hsl(var(--orange-primary))]" : "bg-[hsl(var(--teal-night)/0.15)]")} />
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 rounded bg-foreground/40 w-full" />
          <div className="h-1.5 rounded bg-foreground/15 w-2/3" />
        </div>
      </div>
    ))}
    <div className="mt-auto h-8 rounded-lg bg-[#25D366]" />
  </div>
);

/** Composition du hero : la carte devant le téléphone. */
export const BusinessHeroVisual = () => (
  <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-md">
    <div className="relative h-[24rem] sm:h-[26rem]">
      <PhoneSketch className="absolute right-2 sm:right-6 top-0 rotate-[4deg]" />
      <AccBusinessCard className="absolute left-0 bottom-6 w-[17.5rem] sm:w-[19rem] -rotate-[5deg]" />
    </div>
    <figcaption className="text-sm text-muted-foreground text-center">
      La carte est remise à chaque invité à son arrivée. Son QR code ouvre le guide des entreprises.
    </figcaption>
  </figure>
);
