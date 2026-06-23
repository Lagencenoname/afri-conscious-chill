import { Palette, Users, Briefcase } from "lucide-react";
import CountUp from "./CountUp";
import heroBanner from "@/assets/banner-hero.webp";
import themeVideo from "@/assets/hero-background-mobile.mp4";

const PILLARS = [
  {
    icon: Palette,
    title: "Créer",
    description:
      "Stimuler l'imagination et la production de contenus de haute qualité, et initier des projets inédits sur place.",
  },
  {
    icon: Users,
    title: "Collaborer",
    description:
      "Effacer les barrières hiérarchiques pour un dialogue horizontal entre les talents et les grands groupes.",
  },
  {
    icon: Briefcase,
    title: "Impacter",
    description:
      "Garantir que chaque interaction génère une valeur économique, sociale ou culturelle concrète.",
  },
];

const STATS = [
  { prefix: "+", end: 500, suffix: "", label: "Participants attendus" },
  { prefix: "+", end: 18, suffix: "", label: "Contrats signés (2 éditions)" },
  { prefix: "+", end: 1, suffix: "M", label: "Impressions partenaires" },
  { prefix: "", end: 94, suffix: "%", label: "Souhaitent revenir" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-14 sm:py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div className="fade-in-up">
          <span className="eyebrow">L'édition 2026</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6">
            L'ère de la co-création
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              L'édition 2026 de African Conscious Chill revient. Cette fois avec une réflexion
              essentielle sur les nouvelles dynamiques qui façonnent notre société.
            </p>
            <p>
              À l'heure où les contenus influencent les comportements, où les créateurs deviennent
              des relais de confiance et où les marques cherchent à toucher leurs publics autrement,
              il devient nécessaire de créer des espaces où ces acteurs se rencontrent, échangent et
              construisent des collaborations concrètes.
            </p>
            <p>
              Cette édition réunira dans un même cadre artistes, influenceurs, managers, créatifs
              visuels, entrepreneurs, responsables de marques, communicants, ainsi que les jeunes
              talents et étudiants en marketing qui construiront demain les stratégies d'impact de
              nos entreprises.
            </p>
            <p className="text-foreground font-medium">
              Vous êtes une entreprise, une marque ou une institution, et votre cible se retrouve
              parmi ces communautés en pleine croissance ? C'est le moment idéal pour associer votre
              image à cette initiative.
            </p>
            </div>
          </div>

          {/* Vidéo du thème */}
          <div className="fade-in-up flex justify-center">
            <div className="relative overflow-hidden rounded-3xl lg:border lg:border-border lg:shadow-[var(--shadow-floating)] bg-background">
              <video
                className="w-full h-auto object-contain mx-auto lg:max-h-[460px] lg:w-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroBanner}
              >
                <source src={themeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Piliers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="lift-card p-8 text-center fade-in-up">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-[hsl(var(--surface))] border border-border p-6 text-center fade-in-up"
            >
              <CountUp
                end={s.end}
                prefix={s.prefix}
                suffix={s.suffix}
                className="font-display text-3xl sm:text-4xl font-black text-gradient-warm block"
              />
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
