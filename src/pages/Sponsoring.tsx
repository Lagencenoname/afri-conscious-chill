import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Gem,
  Check,
  Leaf,
  Megaphone,
  Wrench,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Download,
} from "lucide-react";
import accLogo from "@/assets/logo-africanconsciouschill.png";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FloatingDots from "@/components/FloatingDots";
import Footer from "@/components/Footer";
import { waLink, EVENT_DATES_LABEL, EVENT_VENUE, DOSSIER_PDF_URL } from "@/lib/constants";
import { PACKS, PARTNERSHIP_TYPES } from "@/lib/sponsoring";

const REASONS = [
  {
    icon: Sparkles,
    title: "Visibilité stratégique",
    text: "Logo sur l'ensemble des supports (TV, presse, affiches, réseaux, imprimés) et exposition auprès de +500 participants ciblés.",
  },
  {
    icon: ShieldCheck,
    title: "Levier RSE & ESG",
    text: "Renforcez vos critères Social (S) et Gouvernance (G) via le soutien aux jeunes talents et une œuvre caritative.",
  },
  {
    icon: TrendingUp,
    title: "Retour d'image mesurable",
    text: "Storytelling dédié, mention dans les retombées officielles, traçabilité réelle de votre contribution.",
  },
];

const TYPE_ICONS = [Leaf, Megaphone, Wrench];

const Sponsoring = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-night pt-8 pb-20 overflow-hidden">
        <FloatingDots count={20} />
        <div className="container relative z-10">
          <div className="flex items-center justify-between py-2 mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft size={18} /> Retour à l'accueil
            </Link>
            <img src={accLogo} alt="African Conscious Chill" className="h-11 w-auto" />
          </div>

          <div className="max-w-3xl">
            <span className="eyebrow !text-[hsl(var(--gold))]">Dossier de sponsoring</span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-[1.05] mb-5">
              Devenez sponsor de l'<span className="text-gradient-warm">ACC 3</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              S'engager comme sponsor de l'ACC Édition 3, c'est occuper une place stratégique au cœur
              d'un écosystème où se dessinent les collaborations de demain. {EVENT_DATES_LABEL} ·{" "}
              {EVENT_VENUE}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink(
                  "Bonjour, je souhaite devenir sponsor de l'African Conscious Chill 3. Pouvez-vous m'envoyer plus d'informations ?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-3.5 px-7 rounded-xl transition-all duration-300 hover:scale-[1.03]"
              >
                <WhatsAppIcon className="w-5 h-5" /> Parler à l'équipe partenariats
              </a>
              <a
                href={DOSSIER_PDF_URL}
                download="Dossier-presentation-ACC3.pdf"
                className="cta-ghost"
              >
                <Download size={18} /> Télécharger le dossier (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi sponsoriser */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="eyebrow justify-center">Pourquoi nous rejoindre</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Bien plus qu'une présence publicitaire
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {REASONS.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="lift-card p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packs détaillés */}
      <section className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="eyebrow justify-center">Nos offres</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Choisissez votre pack
            </h2>
            <p className="text-lg text-muted-foreground">
              Six niveaux d'engagement, du logo à la grande scène. Chaque bouton ouvre une
              conversation WhatsApp pré-remplie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKS.map((pack) => (
              <div
                key={pack.name}
                className={`flex flex-col p-7 rounded-2xl ${
                  pack.featured
                    ? "bg-night text-white border border-white/10 shadow-[var(--shadow-floating)]"
                    : "surface-card"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Gem className={pack.featured ? "text-[hsl(var(--gold))]" : "text-primary"} size={20} />
                  <h3 className="font-display text-xl font-bold">Pack {pack.name}</h3>
                  {pack.featured && (
                    <span className="ml-auto rounded-full bg-gradient-to-r from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] text-white px-2.5 py-0.5 text-xs font-bold">
                      Populaire
                    </span>
                  )}
                </div>
                <div className={`font-display text-2xl font-black mb-1 ${pack.featured ? "text-white" : "text-gradient-warm"}`}>
                  {pack.price}
                </div>
                <p className={`text-sm mb-5 ${pack.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {pack.tagline}
                </p>

                <ul className="space-y-2.5 mb-7 flex-1">
                  {pack.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          pack.featured ? "text-[hsl(var(--gold))]" : "text-[hsl(var(--orange-secondary))]"
                        }`}
                      />
                      <span className={pack.featured ? "text-white/85" : "text-foreground/85"}>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(
                    `Bonjour, je suis intéressé(e) par le Pack ${pack.name} (${pack.price}) pour sponsoriser l'African Conscious Chill 3.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pack.featured ? "cta-primary w-full" : "cta-outline w-full"}
                >
                  <WhatsAppIcon className="w-4 h-4" /> Choisir le Pack {pack.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de partenariat */}
      <section className="py-14 sm:py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="eyebrow justify-center">Plus qu'un logo, une alliance</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Devenir partenaire
            </h2>
            <p className="text-lg text-muted-foreground">
              Un apport financier, matériel ou logistique : chaque contribution est valorisée et
              ajustée à vos objectifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PARTNERSHIP_TYPES.map((t, i) => {
              const Icon = TYPE_ICONS[i];
              return (
                <div key={t.title} className="lift-card p-7 flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(var(--surface))] border border-border mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t.description}</p>
                  <p className="text-sm text-foreground/80 mb-2">
                    <span className="font-semibold text-foreground">Exemples : </span>
                    {t.examples}
                  </p>
                  <p className="text-sm text-foreground/80 mb-5">
                    <span className="font-semibold text-foreground">Modalité : </span>
                    {t.modality}
                  </p>
                  <a
                    href={waLink(
                      `Bonjour, je souhaite proposer un ${t.title.toLowerCase()} pour l'African Conscious Chill 3.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Proposer cet apport <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))]">
        <div className="container text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white mb-5">
            Construisons l'impact ensemble
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Discutons de la formule la plus adaptée à votre marque et à vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink(
                "Bonjour, je souhaite échanger sur un partenariat / sponsoring pour l'African Conscious Chill 3."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[hsl(var(--orange-primary))] hover:bg-white/90 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <WhatsAppIcon className="w-5 h-5" /> Contacter l'équipe
            </a>
            <Link to="/" className="cta-ghost">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsoring;
