import { Facebook, Phone, MapPin, Mail, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import accLogo from "@/assets/logo-africanconsciouschill.webp";
import { FACEBOOK_URL, BOOKING_URL, WHATSAPP_BOOKING_URL } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

const QUICK_LINKS = [
  { id: "programme", label: "Programme" },
  { id: "salubrite", label: "Campagne Salubrité" },
  { id: "stands", label: "Stands" },
  { id: "sponsoring", label: "Sponsoring" },
  { id: "partenaires", label: "Partenaires" },
];

const Footer = () => {
  const navigate = useNavigate();

  // Scroll vers une section si présente sur la page, sinon retour à l'accueil + ancre.
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else navigate(`/#${id}`);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[hsl(var(--teal-night))] text-white py-16">
      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        aria-label="Revenir en haut de la page"
        className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] text-white shadow-[var(--shadow-warm)] transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
      >
        <ArrowUp size={22} />
      </button>

      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={accLogo} alt="African Conscious Chill" className="h-14 w-auto mb-4" />
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Artistes, influenceurs, créatifs et marques ensemble pour créer, collaborer et
              impacter. Une organisation HILS Company · Événementiel, Industries Créatives et
              Culturelles.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white/10 hover:bg-primary rounded-full p-3 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+229 01 68 52 59 72</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+229 01 96 01 67 86</span>
              </div>
              <a href="mailto:hilscompany15@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>hilscompany15@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Liens rapides</h4>
            <div className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-white/70 hover:text-primary transition-colors block"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors block"
              >
                Billetterie
              </a>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors block"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            © 2026 African Conscious Chill · Une organisation HILS Company. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">Thème</span>
            <ThemeToggle variant="onDark" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
