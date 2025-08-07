import { Facebook, Phone, MapPin, Mail } from "lucide-react";
import accLogo from "@/assets/logo-africanconsciouschill.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={accLogo} alt="African Conscious Chill" className="h-12 w-auto" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  African Conscious Chill
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Le rendez-vous annuel des créateurs, entrepreneurs et marques qui croient au pouvoir de la collaboration en Afrique.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61555937974681" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary rounded-full p-3 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} className="text-primary" />
                  <span className="text-sm">+229 01 95 416 626</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} className="text-primary" />
                  <span className="text-sm">+229 01 68 525 972</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">Pavillon du Lac, Bénin</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
              <div className="space-y-2">
                <div>
                  <button 
                    onClick={() => document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                  >
                    Programme
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('billets')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                  >
                    Billets
                  </button>
                </div>
                <div>
                  <button 
                    onClick={() => document.getElementById('partenaires')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                  >
                    Partenaires
                  </button>
                </div>
                <div>
                  <a 
                    href="https://wa.me/message/TLW5YHAJ74CTH1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors text-sm block"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 African Conscious Chill. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              PLS BOOST • Conçue par la CMA Communication •
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
