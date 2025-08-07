import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import accLogo from "@/assets/logo-africanconsciouschill.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={accLogo} alt="African Conscious Chill" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('programme')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Programmes
            </button>
            <button 
              onClick={() => scrollToSection('partenaires')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Partenaires
            </button>
            <button 
              onClick={() => scrollToSection('billets')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Billets
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="cta-primary"
              onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
            >
              ACHETER BILLETS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('programme')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Programmes
              </button>
              <button 
                onClick={() => scrollToSection('partenaires')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Partenaires
              </button>
              <button 
                onClick={() => scrollToSection('billets')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Billets
              </button>
              <Button 
                className="cta-primary w-full mt-4"
                onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
              >
                ACHETER BILLETS
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;