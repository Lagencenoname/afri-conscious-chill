import { useMemo } from "react";

/**
 * Points orange animés flottant aléatoirement, pour les sections sombres.
 * Décoratif uniquement (pointer-events-none).
 */
const FloatingDots = ({ count = 18 }: { count?: number }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 4 + Math.random() * 8; // 4 → 12px
        return {
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size,
          variant: `fd${(i % 4) + 1}`,
          delay: `${(Math.random() * 6).toFixed(2)}s`,
        };
      }),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]" aria-hidden="true">
      {dots.map((d) => (
        <span
          key={d.id}
          className={`float-dot ${d.variant}`}
          style={{
            top: d.top,
            left: d.left,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: d.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
