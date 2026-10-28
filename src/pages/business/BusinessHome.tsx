import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Check, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BusinessHeroVisual } from "@/components/business/AccBusinessCard";
import BusinessSimulator from "@/components/business/BusinessSimulator";
import {
  BUSINESS_NAME,
  BUSINESS_ROUTES,
  DEADLINE_FULL_LABEL,
  DEADLINE_LABEL,
  PAYMENT_LINK_PARTNER,
  PRICE_NON_PARTNER_LABEL,
  PRICE_PARTNER_LABEL,
} from "@/lib/business";

/** Les 5 raisons, chacune face à l'hésitation qu'elle lève. */
const REASONS = [
  {
    doubt: "Les invités ne me connaissent pas.",
    title: "Être découverte",
    text: "C'est justement le but : le guide présente votre activité à des personnes qui ne la connaissaient pas avant l'ACC.",
  },
  {
    doubt: "Expliquer ce que je vends prend du temps.",
    title: "Présenter vos offres",
    text: "Un visuel et une offre suffisent pour montrer en un coup d'œil ce que vous proposez.",
  },
  {
    doubt: "Ils repartiront sans mon numéro.",
    title: "Faciliter les prises de contact",
    text: "Depuis votre fiche, un visiteur passe directement à votre WhatsApp ou à vos réseaux sociaux.",
  },
  {
    doubt: "Seule, mon entreprise passe inaperçue.",
    title: "Profiter du réseau ACC",
    text: "Vous apparaissez dans un guide collectif lié à l'événement, aux côtés des autres entreprises participantes.",
  },
  {
    doubt: "Après le 15 novembre, tout s'arrête.",
    title: "Rester accessible après l'événement",
    text: "Votre fiche peut continuer à être consultée tant que l'annuaire reste actif.",
  },
];

/** Le parcours d'un invité, sans puis avec ACC Business. */
const COMPARISON = [
  {
    moment: "Pendant l'événement",
    without: "L'invité voit votre logo ou votre stand parmi beaucoup d'autres, puis passe à la suite.",
    with: "Il scanne la carte ACC et garde votre fiche sur son téléphone : votre offre, votre visuel, vos contacts.",
  },
  {
    moment: "Le lendemain",
    without: "Il se souvient vaguement de vous, sans votre nom exact ni votre numéro.",
    with: "Il rouvre le guide et retrouve votre entreprise en quelques secondes.",
  },
  {
    moment: "Le jour où il a besoin de vous",
    without: "Il cherche ailleurs, ou contacte quelqu'un qu'il sait joindre.",
    with: "Il appuie sur le bouton WhatsApp de votre fiche et vous écrit directement.",
  },
];

const STEPS = [
  {
    title: "Vous payez en ligne",
    text: `Le paiement de votre participation (${PRICE_PARTNER_LABEL} pour les partenaires) se fait sur la page sécurisée de notre prestataire.`,
  },
  {
    title: "Vous remplissez le formulaire",
    text: "Juste après le paiement, vous arrivez directement sur le formulaire officiel : informations de votre entreprise, offre, contacts et visuel publicitaire.",
  },
  {
    title: "L'équipe ACC prépare votre fiche",
    text: "Nous vérifions les informations reçues et préparons votre fiche pour sa publication dans l'annuaire.",
  },
];

const FAQ = [
  {
    q: "À quoi sert ACC Business ?",
    a: "À rassembler les entreprises participantes de l'ACC dans un guide numérique commun, pour que les invités puissent découvrir votre activité, voir votre offre et vous contacter facilement.",
  },
  {
    q: "Que contiendra ma fiche entreprise ?",
    a: "Le nom de votre entreprise, une courte présentation de votre activité, votre visuel publicitaire, l'offre que vous souhaitez mettre en avant, vos réseaux sociaux et un accès direct à votre WhatsApp professionnel.",
  },
  {
    q: "Comment les invités accéderont-ils à l'annuaire ?",
    a: "Grâce au QR code imprimé sur la carte de visite collective de l'ACC, remise à chaque invité dès son arrivée. Il suffit de le scanner avec un téléphone.",
  },
  {
    q: "Que dois-je fournir après le paiement ?",
    a: "Le formulaire officiel s'ouvre juste après le paiement. Vous y indiquez le nom de votre entreprise, sa présentation, votre offre, votre WhatsApp professionnel et vos réseaux sociaux, et vous y joignez votre visuel publicitaire.",
  },
  {
    q: "Quelle est la date limite ?",
    a: `Le ${DEADLINE_FULL_LABEL}. Le paiement et le formulaire complet doivent tous les deux être transmis avant cette date.`,
  },
  {
    q: "Le fait d'apparaître dans l'annuaire garantit-il des clients ?",
    a: "Non. ACC Business facilite la découverte de votre activité et la prise de contact, mais ne garantit ni ventes ni nombre de clients. La suite dépend de votre offre et des échanges avec les personnes qui vous contactent.",
  },
];

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/** Lien de paiement partenaire, ouvert dans la même page (retour via le formulaire Tally). */
const PayPartnerButton = ({ className = "" }: { className?: string }) => (
  <a href={PAYMENT_LINK_PARTNER} className={`cta-solid ${className}`}>
    Je participe · {PRICE_PARTNER_LABEL} <ArrowRight size={18} />
  </a>
);

const SectionTitle = ({ kicker, children }: { kicker?: string; children: React.ReactNode }) => (
  <div className="max-w-2xl mb-8 sm:mb-12">
    {kicker && (
      <p className="text-sm font-semibold text-[hsl(var(--primary-ink))] mb-3">{kicker}</p>
    )}
    <h2 className="font-display text-[1.9rem] leading-[1.1] sm:text-5xl font-black tracking-tight text-balance">
      {children}
    </h2>
  </div>
);

const BusinessHome = () => {
  return (
    <>
      {/* Présentation */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
        <div className="container grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--primary-ink))] mb-5">
              Une vitrine numérique pour les partenaires ACC
            </p>
            <h1 className="font-display text-[2.35rem] leading-[1.04] sm:text-7xl font-black tracking-tight mb-6">
              Votre entreprise, visible après l'ACC.
            </h1>
            <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed mb-8 max-w-xl">
              {BUSINESS_NAME} rassemble les entreprises participantes dans un guide accessible par
              QR code. Les invités peuvent découvrir vos offres, voir vos produits et vous contacter
              directement.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <button type="button" onClick={() => scrollToId("simulateur")} className="cta-solid w-full sm:w-auto">
                Prévisualiser ma fiche <ArrowDown size={18} />
              </button>
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                <span className="font-semibold text-foreground tabular-nums">{PRICE_PARTNER_LABEL}</span> · inscriptions
                jusqu'au {DEADLINE_LABEL}
              </p>
            </div>
          </div>
          <BusinessHeroVisual />
        </div>
      </section>

      {/* Avant / après */}
      <section className="py-16 sm:py-24 bg-[hsl(var(--teal-night))] text-white">
        <div className="container">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-sm font-semibold text-[hsl(var(--gold))] mb-3">Ce qui change pour vous</p>
            <h2 className="font-display text-[1.9rem] leading-[1.1] sm:text-5xl font-black tracking-tight text-balance">
              Un invité a remarqué votre entreprise à l'ACC. Et ensuite ?
            </h2>
          </div>

          <div className="hidden md:grid grid-cols-[14rem_1fr_1fr] gap-6 pb-4 border-b border-white/15 text-sm font-semibold">
            <span />
            <span className="text-white/50">Sans {BUSINESS_NAME}</span>
            <span className="text-[hsl(var(--gold))]">Avec {BUSINESS_NAME}</span>
          </div>
          <ol>
            {COMPARISON.map((row) => (
              <li
                key={row.moment}
                className="grid md:grid-cols-[14rem_1fr_1fr] gap-3 md:gap-6 py-7 border-b border-white/15 last:border-b-0"
              >
                <p className="font-display text-lg font-bold">{row.moment}</p>
                <div className="flex gap-3 text-white/55">
                  <Minus size={18} className="flex-shrink-0 mt-1" aria-hidden="true" />
                  <p>
                    <span className="md:hidden font-semibold">Sans : </span>
                    {row.without}
                  </p>
                </div>
                <div className="flex gap-3 text-white">
                  <Check size={18} className="flex-shrink-0 mt-1 text-[hsl(var(--gold))]" aria-hidden="true" />
                  <p>
                    <span className="md:hidden font-semibold text-[hsl(var(--gold))]">Avec : </span>
                    {row.with}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 raisons */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <SectionTitle kicker="Vous hésitez encore ?">5 bonnes raisons de rejoindre {BUSINESS_NAME}</SectionTitle>
          <ol className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
            {REASONS.map((r, i) => (
              <li
                key={r.title}
                className={`rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 flex flex-col ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === 4 ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <p className="text-[15px] text-muted-foreground italic mb-4">« {r.doubt} »</p>
                <h3 className="font-display text-xl font-bold mb-2 flex items-baseline gap-2.5">
                  <span className="text-[hsl(var(--primary-ink))] tabular-nums">{i + 1}.</span>
                  {r.title}
                </h3>
                <p className="text-foreground/75 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Simulateur */}
      <section id="simulateur" className="py-16 sm:py-24 bg-[hsl(var(--surface))] border-y border-[hsl(var(--border))] scroll-mt-16">
        <div className="container">
          <div className="max-w-2xl mb-8 sm:mb-12">
            <p className="text-sm font-semibold text-[hsl(var(--primary-ink))] mb-3">Simulateur</p>
            <h2 className="font-display text-[1.9rem] leading-[1.1] sm:text-5xl font-black tracking-tight mb-4 text-balance">
              À quoi ressemblera votre fiche ?
            </h2>
            <p className="text-foreground/75">Remplissez les champs : l'aperçu change au fur et à mesure.</p>
          </div>
          <BusinessSimulator onParticipate={() => scrollToId("tarifs")} />
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-16 sm:py-24 scroll-mt-16">
        <div className="container">
          <SectionTitle kicker="Tarifs">Rejoindre {BUSINESS_NAME}</SectionTitle>

          <div className="grid lg:grid-cols-[3fr_2fr] gap-5 items-stretch">
            <div className="rounded-2xl bg-[hsl(var(--teal-night))] text-white p-6 sm:p-10 flex flex-col">
              <p className="text-sm font-semibold text-white/70 mb-2">Votre tarif partenaire</p>
              <p className="font-display text-5xl sm:text-6xl font-black tracking-tight text-[hsl(var(--gold))] tabular-nums mb-5">
                {PRICE_PARTNER_LABEL}
              </p>
              <p className="text-white/80 leading-relaxed mb-8 max-w-lg">
                En tant que partenaire officiel de l'ACC, vous bénéficiez d'un tarif préférentiel pour
                intégrer {BUSINESS_NAME} et présenter votre activité, votre offre et vos contacts dans
                l'annuaire numérique.
              </p>
              <div className="mt-auto">
                <PayPartnerButton className="w-full sm:w-auto" />
                <p className="text-sm text-white/65 mt-3">
                  Paiement sécurisé via SasPay. Le formulaire s'ouvre juste après.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--border))] p-6 sm:p-8 flex flex-col">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Entreprises non partenaires</p>
              <p className="font-display text-3xl font-black tracking-tight tabular-nums mb-4">{PRICE_NON_PARTNER_LABEL}</p>
              <p className="text-foreground/75 leading-relaxed mb-6">
                Les entreprises qui ne sont pas partenaires officiels mais souhaitent rejoindre{" "}
                {BUSINESS_NAME} participent à hauteur de {PRICE_NON_PARTNER_LABEL}. Cette contribution
                soutient également l'initiative ACC.
              </p>
              <Link
                to={BUSINESS_ROUTES.join}
                className="mt-auto inline-flex items-start gap-1.5 font-semibold text-[hsl(var(--primary-ink))] hover:underline underline-offset-4"
              >
                Vous n'êtes pas partenaire ? Découvrez comment rejoindre {BUSINESS_NAME}.
                <ArrowRight size={18} className="flex-shrink-0 mt-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comment participer */}
      <section className="pb-16 sm:pb-24">
        <div className="container">
          <SectionTitle kicker="Comment participer ?">Trois étapes, et votre fiche est en route</SectionTitle>
          <ol className="grid md:grid-cols-3 gap-8 md:gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t-2 border-[hsl(var(--teal-night))] dark:border-white/30 pt-5">
                <p className="font-display text-sm font-bold text-[hsl(var(--primary-ink))] mb-2 tabular-nums">
                  Étape {i + 1}
                </p>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-foreground/75 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-foreground/75 max-w-3xl">
            Le paiement <strong className="text-foreground">et</strong> le formulaire doivent tous les
            deux être complétés avant la date limite pour que votre fiche soit prise en compte dans la
            préparation de l'annuaire pour l'événement.
          </p>
        </div>
      </section>

      {/* Date limite */}
      <section className="pb-16 sm:pb-24">
        <div className="container">
          <div className="rounded-2xl bg-[hsl(var(--orange-primary)/0.1)] border border-[hsl(var(--orange-primary)/0.35)] p-6 sm:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight mb-3 text-balance">
                Les inscriptions se clôturent le {DEADLINE_LABEL}.
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Pour préparer les fiches et finaliser l'annuaire avant l'événement du 15 novembre, le
                paiement et le formulaire complet doivent être transmis au plus tard le{" "}
                {DEADLINE_FULL_LABEL}.
              </p>
            </div>
            <a href={PAYMENT_LINK_PARTNER} className="cta-solid w-full md:w-auto">
              Finaliser ma participation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[hsl(var(--surface))] border-t border-[hsl(var(--border))]">
        <div className="container grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          <h2 className="font-display text-[1.9rem] leading-[1.1] sm:text-5xl font-black tracking-tight">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible>
            {FAQ.map(({ q, a }, i) => (
              <AccordionItem key={q} value={`q${i}`}>
                <AccordionTrigger className="text-left font-semibold text-base sm:text-lg py-5 hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed text-base">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default BusinessHome;
