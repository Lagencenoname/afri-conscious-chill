import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import accLogo from "@/assets/logo-africanconsciouschill.webp";
import Footer from "@/components/Footer";
import { BUSINESS_NAME, BUSINESS_ROUTES } from "@/lib/business";

const TITLES: Record<string, string> = {
  [BUSINESS_ROUTES.home]: `${BUSINESS_NAME} · Les entreprises de l'ACC 3`,
  [BUSINESS_ROUTES.join]: `Rejoindre ${BUSINESS_NAME} · ACC 3`,
};

/** Cadre commun des pages /business/* (barre du haut + pied de page du site). */
const BusinessLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === BUSINESS_ROUTES.home;

  useEffect(() => {
    const previous = document.title;
    document.title = TITLES[pathname] ?? BUSINESS_NAME;
    return () => {
      document.title = previous;
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-40 bg-background border-b border-[hsl(var(--border))]">
        <div className="container flex items-center justify-between h-16">
          <Link to={isHome ? "/" : BUSINESS_ROUTES.home} className="flex items-center gap-3 min-w-0">
            <span className="flex items-center justify-center rounded-lg bg-[hsl(var(--teal-night))] p-1.5">
              <img src={accLogo} alt="African Conscious Chill" className="h-7 w-auto" />
            </span>
            <span className="font-display font-bold text-lg truncate">{BUSINESS_NAME}</span>
          </Link>
          <Link
            to={isHome ? "/" : BUSINESS_ROUTES.home}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{isHome ? "Site de l'ACC" : BUSINESS_NAME}</span>
            <span className="sm:hidden">Retour</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessLayout;
