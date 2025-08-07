import { Button } from "@/components/ui/button";
import { Clock, Users, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-500 to-red-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 animate-fade-in-up">
            Ne Manquez Pas Cette Opportunité Unique !
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Rejoignez la communauté des créateurs et entrepreneurs conscients
          </p>

          {/* Urgency Elements */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">Places Limitées</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">Déjà +200 inscrits</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Zap className="text-yellow-300" size={20} />
              <span className="text-white font-semibold">Événement Unique</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-white mb-6">Il ne reste que :</h3>
            <CountdownTimer />
          </div>

          {/* Main CTA */}
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-black py-6 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 pulse-glow"
              onClick={() => window.open('https://wa.me/message/TLW5YHAJ74CTH1', '_blank')}
            >
              RÉSERVER MON BILLET MAINTENANT
            </Button>
            
            <p className="text-white/80 text-sm">
              Réservation instantanée via WhatsApp • Paiement sécurisé • Confirmation immédiate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;