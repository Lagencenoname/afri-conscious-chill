import { Facebook, Hash } from "lucide-react";
import { FACEBOOK_URL } from "@/lib/constants";
import FloatingDots from "./FloatingDots";

const HASHTAGS = ["AfricanConsciousChill", "ACC2026", "CoCreation", "MadeInBenin"];

const SocialSection = () => {
  return (
    <section className="py-20 bg-night relative overflow-hidden">
      <FloatingDots count={16} />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5 fade-in-up">
            Suivez-nous
          </h2>
          <p className="text-lg text-white/80 mb-8 fade-in-up">
            Restez connectés et ne manquez aucune actualité de l'African Conscious Chill 3.
          </p>

          <div className="mb-8 fade-in-up">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[hsl(var(--teal-night))] hover:bg-white/90 font-semibold py-3.5 px-7 rounded-xl transition-all duration-300 hover:scale-[1.03]"
            >
              <Facebook size={22} /> Page Facebook officielle
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 fade-in-up">
            {HASHTAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 glass px-4 py-2 text-sm text-white/85"
              >
                <Hash size={14} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
