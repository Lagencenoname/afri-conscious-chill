import { Clock, Users, Sparkles, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { BOOKING_URL, EVENT_DATES_LABEL, EVENT_CITY } from "@/lib/constants";

const FinalCTASection = () => {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))]">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white mb-5 fade-in-up">
            Ne manquez pas l'édition 3
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 fade-in-up">
            {EVENT_DATES_LABEL} · {EVENT_CITY} · Rejoignez la Communauté des Créateurs,
            Influenceurs et Marques Conscients.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10 fade-in-up">
            <div className="flex items-center gap-2 glass px-4 py-2">
              <Clock className="text-white" size={18} />
              <span className="text-white font-semibold text-sm">Places limitées</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2">
              <Users className="text-white" size={18} />
              <span className="text-white font-semibold text-sm">+500 participants</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2">
              <Sparkles className="text-white" size={18} />
              <span className="text-white font-semibold text-sm">Concert de clôture</span>
            </div>
          </div>

          <div className="mb-10 fade-in-up">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-4">Il ne reste que</p>
            <CountdownTimer />
          </div>

          <div className="fade-in-up">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--orange-primary))] hover:bg-white/90 font-black py-4 sm:py-5 px-8 sm:px-12 rounded-2xl text-lg shadow-2xl transition-all duration-300 hover:scale-[1.03]"
            >
              Réserver maintenant <ArrowRight size={20} />
            </a>
            <p className="text-white/80 text-sm mt-4">
              Réservation 100% en ligne · Paiement sécurisé · Confirmation immédiate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
