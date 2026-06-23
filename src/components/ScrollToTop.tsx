import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ramène la fenêtre en haut à chaque changement de route.
 * Désactive aussi la restauration de scroll native (rechargement de page).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) {
      // Laisse le temps à la page de se monter avant de viser l'ancre.
      const id = hash.replace("#", "");
      const t = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
