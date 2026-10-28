import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { waLink } from "@/lib/constants";
import {
  BUSINESS_NAME,
  BUSINESS_ROUTES,
  DEADLINE_FULL_LABEL,
  PAYMENT_LINK_NON_PARTNER,
  PRICE_NON_PARTNER_LABEL,
} from "@/lib/business";

/** /business/rejoindre · participation des entreprises non partenaires. */
const BusinessJoin = () => (
  <section className="py-12 sm:py-20">
    <div className="container max-w-3xl">
      <Link
        to={BUSINESS_ROUTES.home}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft size={16} /> Découvrir {BUSINESS_NAME}
      </Link>

      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--primary-ink))] mb-4">
        Entreprises non partenaires
      </p>
      <h1 className="font-display text-[2.4rem] leading-[1.05] sm:text-6xl font-black tracking-tight mb-5">
        Rejoindre {BUSINESS_NAME}
      </h1>
      <p className="text-lg text-foreground/75 leading-relaxed mb-10">
        Les entreprises qui ne sont pas partenaires officiels mais souhaitent rejoindre{" "}
        {BUSINESS_NAME} participent à hauteur de {PRICE_NON_PARTNER_LABEL}. Cette contribution soutient
        également l'initiative ACC.
      </p>

      <div className="rounded-2xl bg-[hsl(var(--teal-night))] text-white p-6 sm:p-9 mb-8">
        <p className="text-sm font-semibold text-white/70 mb-2">Participation</p>
        <p className="font-display text-5xl font-black tracking-tight text-[hsl(var(--gold))] tabular-nums mb-5">
          {PRICE_NON_PARTNER_LABEL}
        </p>
        <p className="text-white/80 leading-relaxed mb-8">
          Juste après le paiement, vous arrivez sur le formulaire officiel pour transmettre les
          informations de votre entreprise et votre visuel publicitaire. L'équipe ACC vérifie ensuite
          les informations et prépare votre fiche. Date limite : {DEADLINE_FULL_LABEL}.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={PAYMENT_LINK_NON_PARTNER} className="cta-solid">
            Je participe · {PRICE_NON_PARTNER_LABEL} <ArrowRight size={18} />
          </a>
          <a
            href={waLink(`Bonjour, j'ai une question sur ${BUSINESS_NAME} (entreprise non partenaire).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 px-5 rounded-xl border border-white/30 font-semibold transition-colors hover:bg-white/10"
          >
            <WhatsAppIcon className="w-5 h-5" /> Poser une question
          </a>
        </div>
      </div>

      <p className="text-foreground/75">
        Vous êtes partenaire officiel de l'ACC ?{" "}
        <Link
          to={`${BUSINESS_ROUTES.home}#tarifs`}
          className="font-semibold text-[hsl(var(--primary-ink))] underline-offset-4 hover:underline"
        >
          Voir le tarif partenaire
        </Link>
      </p>
    </div>
  </section>
);

export default BusinessJoin;
