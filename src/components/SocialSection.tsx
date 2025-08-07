import { Facebook, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
            Suivez-nous
          </h2>
          
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Restez connectés et ne manquez aucune actualité de l'African Conscious Chill
          </p>

          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61555937974681', '_blank')}
            >
              <Facebook className="mr-3" size={24} />
              Page Facebook Officielle
            </Button>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <span className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Hash size={16} />
                AfricanConsciousChill
              </span>
              <span className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Hash size={16} />
                ACC2025
              </span>
              <span className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <Hash size={16} />
                CreativiteAfricaine
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;