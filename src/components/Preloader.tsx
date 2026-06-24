import { useEffect, useState } from "react";
import accLogo from "@/assets/logo-africanconsciouschill.webp";
import heroVideo from "@/assets/hero-background-mobile.mp4";
import FloatingDots from "./FloatingDots";

// Toutes les images lourdes à précharger (galerie + visuels + partenaires)
const medis = import.meta.glob("@/assets/medis/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const partners = import.meta.glob("@/assets/partners/*.webp", { eager: true, import: "default" }) as Record<string, string>;
const visuals = import.meta.glob("@/assets/{banner-hero,campagne-salubrite,stands-acc,appel-aux-artistes-underground,lead-acc}.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const IMAGE_URLS = [
  ...Object.values(medis),
  ...Object.values(partners),
  ...Object.values(visuals),
];

const MAX_WAIT = 6000; // filet de sécurité : on révèle le site au bout de 6 s max

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let loaded = 0;
    const total = IMAGE_URLS.length + 1; // +1 pour la vidéo
    let finished = false;

    const bump = () => {
      loaded += 1;
      setProgress(Math.round((loaded / total) * 100));
      if (loaded >= total) finish();
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      setHidden(true);
      setTimeout(() => setRemoved(true), 500); // attendre la fin du fondu
    };

    // Préchargement des images
    IMAGE_URLS.forEach((src) => {
      const img = new Image();
      img.onload = bump;
      img.onerror = bump;
      img.src = src;
    });

    // Préchargement de la vidéo
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.src = heroVideo;
    const onVideoReady = () => bump();
    video.addEventListener("canplaythrough", onVideoReady, { once: true });
    video.addEventListener("error", onVideoReady, { once: true });
    video.load();

    // Filet de sécurité
    const timer = setTimeout(finish, MAX_WAIT);

    // Bloque le scroll pendant le chargement
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (hidden) document.body.style.overflow = "";
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-night flex flex-col items-center justify-center transition-opacity duration-500 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={hidden}
      role="status"
      aria-live="polite"
    >
      <FloatingDots count={14} />

      <div className="relative z-10 flex flex-col items-center px-6">
        <img
          src={accLogo}
          alt="African Conscious Chill"
          className="h-20 sm:h-24 w-auto preloader-logo"
        />

        {/* Barre de progression */}
        <div className="mt-8 w-56 sm:w-64 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-sm text-white/60 tabular-nums">{progress}%</p>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[hsl(var(--gold))]">
          African Conscious Chill 3
        </p>
      </div>
    </div>
  );
};

export default Preloader;
