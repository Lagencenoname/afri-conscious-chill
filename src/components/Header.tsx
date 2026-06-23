import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import accLogo from "@/assets/logo-africanconsciouschill.webp";
import { BOOKING_URL } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { id: "accueil", label: "Accueil" },
  { id: "programme", label: "Programme" },
  { id: "salubrite", label: "Salubrité" },
  { id: "stands", label: "Stands" },
  { id: "sponsoring", label: "Sponsoring" },
  { id: "partenaires", label: "Partenaires" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(var(--background))]/95 backdrop-blur-md shadow-[var(--shadow-raised)] border-b border-[hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("accueil")} className="flex items-center">
            <img src={accLogo} alt="African Conscious Chill" className="h-12 w-auto" />
          </button>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle variant={scrolled ? "auto" : "onDark"} />
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="cta-primary !py-2.5 !px-5 text-sm">
              Réserver mon billet
            </a>
          </div>

          <button
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-4 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl shadow-[var(--shadow-floating)]">
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2.5"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary w-full mt-3"
              >
                Réserver mon billet
              </a>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[hsl(var(--border))]">
                <span className="text-sm font-medium text-muted-foreground">Thème sombre</span>
                <ThemeToggle variant="auto" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
