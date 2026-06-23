import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_BOOKING_URL } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={WHATSAPP_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full p-4 shadow-[var(--shadow-floating)] transition-all duration-300 hover:scale-110"
        aria-label="Contacter via WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-ping opacity-40" />

        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[hsl(var(--teal-night))] text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
            Réservez vos billets
            <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-[hsl(var(--teal-night))]" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
