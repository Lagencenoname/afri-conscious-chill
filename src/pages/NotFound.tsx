import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="font-display text-5xl font-black mb-4 text-gradient-warm">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oups ! Cette page est introuvable.</p>
        <a href="/" className="cta-primary">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
