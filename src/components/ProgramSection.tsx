import { CalendarDays, MapPin, Clock, Mic, Download, PartyPopper } from "lucide-react";
import visuelOfficiel from "@/assets/visuel-officiel-acc3.webp";
import panel1 from "@/assets/panels/panel-1-acc3.webp";
import panel2 from "@/assets/panels/panel-2-acc3.webp";
import { PROGRAMME_PDF_URL } from "@/lib/constants";

// Programme officiel ACC 3 (dimanche 15 novembre 2026)
type Slot = {
  start: string;
  end: string;
  title: string;
  text?: string;
  details?: { time: string; text: string }[];
};

const BEFORE_PANELS: Slot[] = [
  {
    start: "09h00",
    end: "11h00",
    title: "Accueil et cérémonie d'ouverture",
    details: [
      { time: "09h00 – 10h00", text: "Accueil, enregistrement et installation des participants." },
      { time: "10h00 – 10h10", text: "Mot de bienvenue et présentation du programme de la journée." },
      { time: "10h10 – 10h20", text: "Discours du promoteur d'ACC." },
      { time: "10h20 – 10h35", text: "Discours d'ouverture et intervention inaugurale de la personnalité invitée : Dr AKINTOLA." },
      { time: "10h35 – 10h55", text: "Prestation artistique, groupe de danse : Ora Mouvement." },
      { time: "10h55 – 11h00", text: "Transition et installation pour le premier panel." },
    ],
  },
];

type Panel = {
  num: number;
  start: string;
  end: string;
  theme: string;
  subtitle: string;
  image: string;
  panelists: { name: string; role: string }[];
  moderator: { label: string; name: string; role: string };
};

const PANELS: Panel[] = [
  {
    num: 1,
    start: "11h00",
    end: "12h00",
    theme: "Marques X Créateurs de contenus :",
    subtitle: "Comment négocier un partenariat équitable quand on est créateur de contenu ?",
    image: panel1,
    panelists: [
      { name: "Lionel Hounsou", role: "Spécialiste en communication globale et en personal branding, manager de talents" },
      { name: "Adéniran M. Ibrahim", role: "Digital Marketing Supervisor & Social Media chez MTN Bénin" },
      { name: "Odette Savi", role: "Maîtresse de cérémonie et influenceuse, promotrice Life Suprise" },
      { name: "Aiwa Sèna Iziath", role: "Chargée de communication chez AdXenx" },
    ],
    moderator: {
      label: "Modératrice",
      name: "Océane A. Djomatin",
      role: "Spécialiste des questions de communication 360, initiatrice du Canapé du CM et auteure",
    },
  },
  {
    num: 2,
    start: "13h35",
    end: "14h35",
    theme: "Industries créatives et culturelles en Afrique :",
    subtitle: "entre opportunités, défis et structuration d'un véritable marché.",
    image: panel2,
    panelists: [
      { name: "Aristide Agondanou", role: "Consultant en ICC, directeur artistique du FInAB, gestionnaire des carrières artistiques" },
      { name: "Esprit Hugues Amoussou", role: "Entrepreneur, CEO Brave EMG" },
      { name: "Marion Akpo", role: "CEO de My Star Shine, chanteur d'opéra" },
      { name: "Hadi Boukari", role: "Entrepreneur mode" },
    ],
    moderator: { label: "Modérateur", name: "Degbegni Djossou", role: "Communicant digital" },
  },
];

// Déroulé complet, dans l'ordre (les panels renvoient aux cartes détaillées)
const TIMELINE: (Slot | { panel: number; start: string; end: string })[] = [
  ...BEFORE_PANELS,
  { panel: 1, start: "11h00", end: "12h00" },
  {
    start: "12h10",
    end: "13h10",
    title: "Pause-déjeuner et découverte du Village",
    text: "Temps libre pour découvrir les stands du Village des Opportunités, échanger avec les exposants et profiter des installations sur l'esplanade.",
  },
  {
    start: "13h20",
    end: "13h35",
    title: "Prestation humoristique",
    text: "L'humoriste AMOU AIOU, un moment de détente avant la dernière session de discussions.",
  },
  { panel: 2, start: "13h35", end: "14h35" },
  {
    start: "14h35",
    end: "15h00",
    title: "Transition vers le Village des Opportunités",
    text: "Fin des activités en amphithéâtre et orientation des participants vers l'esplanade.",
  },
];

const ESPLANADE = [
  "Découverte et visite du Village des Opportunités",
  "Rencontres avec les startups, entreprises et exposants",
  "Jeux et animations interactives",
  "Séances photos et moments de convivialité",
  "Networking et mise en relation entre participants",
  "Découverte des solutions et opportunités des exposants",
];

const INFOS = [
  { icon: CalendarDays, label: "Date", value: "Dimanche 15 novembre 2026" },
  { icon: MapPin, label: "Lieu", value: "EYA Centre Communautaire" },
  { icon: Clock, label: "Horaires", value: "09h00 – 17h30" },
];

const TimeCol = ({ start, end }: { start: string; end: string }) => (
  <div className="sm:w-28 flex-shrink-0">
    <p className="font-display text-2xl font-bold text-[hsl(var(--primary-ink))] tabular-nums leading-none">{start}</p>
    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">à {end}</p>
  </div>
);

const ProgramSection = () => {
  return (
    <section id="programme" className="py-14 sm:py-20 bg-[hsl(var(--surface))]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10 fade-in-up">
          <span className="eyebrow">Programme officiel</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Une Journée, Mille Connexions
          </h2>
          <p className="text-lg text-muted-foreground">
            Deux panels, des prestations artistiques et un après-midi entier de rencontres sur l'esplanade.
          </p>
        </div>

        {/* Infos clés */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 sm:divide-x divide-white/10 rounded-2xl overflow-hidden bg-night text-white mb-6 fade-in-up">
          {INFOS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="relative z-10 flex items-center gap-3 px-5 py-4">
              <Icon className="w-5 h-5 text-[hsl(var(--gold))] flex-shrink-0" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--gold))]">{label}</p>
                <p className="font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mb-12 fade-in-up">
          Maître et maîtresse de cérémonie : <strong className="text-foreground">Espérance & Giovani</strong>
        </p>

        {/* Déroulé */}
        <ol className="max-w-4xl mx-auto divide-y divide-border border-y border-border mb-6">
          {TIMELINE.map((slot) => {
            if ("panel" in slot) {
              const p = PANELS[slot.panel - 1];
              return (
                <li key={`panel-${p.num}`} className="py-7 flex flex-col sm:flex-row gap-4 sm:gap-8 fade-in-up">
                  <TimeCol start={slot.start} end={slot.end} />
                  <a
                    href={`#panel-${p.num}`}
                    className="flex-1 block rounded-2xl bg-night text-white p-6 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 block">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[hsl(var(--gold))] mb-2">
                        Panel {p.num} · Thème
                      </span>
                      <span className="block font-display text-xl sm:text-2xl font-bold">{p.theme}</span>
                      <span className="block font-display italic text-lg text-white/90">{p.subtitle}</span>
                      <span className="block text-sm text-white/70 mt-3">
                        Interventions des panélistes, modération et questions-réponses avec le public.
                      </span>
                    </span>
                  </a>
                </li>
              );
            }
            return (
              <li key={slot.start} className="py-7 flex flex-col sm:flex-row gap-4 sm:gap-8 fade-in-up">
                <TimeCol start={slot.start} end={slot.end} />
                <div className="flex-1">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground mb-2">{slot.title}</h3>
                  {slot.text && <p className="text-muted-foreground leading-relaxed">{slot.text}</p>}
                  {slot.details && (
                    <ul className="space-y-2 mt-1">
                      {slot.details.map((d) => (
                        <li key={d.time} className="grid sm:grid-cols-[8.5rem_1fr] gap-x-4">
                          <span className="text-sm font-semibold text-[hsl(var(--primary-ink))] tabular-nums">{d.time}</span>
                          <span className="text-foreground/90">{d.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {/* Esplanade */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-[hsl(var(--orange-primary))] to-[hsl(var(--orange-secondary))] text-[hsl(var(--teal-night))] p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 fade-in-up">
          <div className="sm:w-28 flex-shrink-0">
            <p className="font-display text-3xl font-black leading-none">15h00</p>
            <p className="text-xs font-bold uppercase tracking-wider opacity-80 mt-1">à 17h30</p>
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold">Expériences, rencontres et networking</h3>
            <p className="opacity-90 mt-1 mb-4">Ouverture de la séquence libre sur l'esplanade :</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {ESPLANADE.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 mb-16 fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--primary-ink))]">17h30</p>
          <p className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">
            Fin des activités et clôture de l'édition ACC 3
          </p>
          <p className="inline-flex items-center gap-2 text-muted-foreground mt-3">
            <PartyPopper className="w-4 h-4 text-primary" /> Un after party est prévu.
          </p>
        </div>

        {/* Panels détaillés */}
        <div className="max-w-6xl mx-auto space-y-10 mb-16">
          {PANELS.map((p) => (
            <article
              key={p.num}
              id={`panel-${p.num}`}
              className="scroll-mt-28 grid md:grid-cols-2 gap-6 md:gap-10 items-center fade-in-up"
            >
              <div className={`rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-floating)] ${p.num === 2 ? "md:order-2" : ""}`}>
                <img
                  src={p.image}
                  alt={`Panel ${p.num} · ${p.theme} ${p.subtitle}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="eyebrow">Panel {p.num} · {p.start} – {p.end}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{p.theme}</h3>
                <p className="font-display italic text-lg text-muted-foreground mb-6">{p.subtitle}</p>
                <ul className="space-y-3">
                  {p.panelists.map((s) => (
                    <li key={s.name} className="flex gap-3">
                      <Mic className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <p>
                        <span className="font-semibold text-foreground">{s.name}</span>
                        <span className="text-muted-foreground"> · {s.role}</span>
                      </p>
                    </li>
                  ))}
                  <li className="flex gap-3 pt-3 border-t border-border">
                    <Mic className="w-4 h-4 text-foreground flex-shrink-0 mt-1" />
                    <p>
                      <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--primary-ink))]">{p.moderator.label} </span>
                      <span className="font-semibold text-foreground">{p.moderator.name}</span>
                      <span className="text-muted-foreground"> · {p.moderator.role}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Téléchargement du programme */}
        <div
          id="programme-officiel"
          className="scroll-mt-28 max-w-4xl mx-auto lift-card p-6 sm:p-8 grid sm:grid-cols-[180px_1fr] gap-6 items-center fade-in-up"
        >
          <img
            src={visuelOfficiel}
            alt="African Conscious Chill 3 · 15 Novembre 2026 · EYA Centre Communautaire"
            className="w-full max-w-[180px] mx-auto rounded-xl border border-border"
            loading="lazy"
          />
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Le programme officiel en PDF</h3>
            <p className="text-muted-foreground mb-5">
              Gardez le déroulé complet de la journée sur votre téléphone ou partagez-le avec vos proches.
            </p>
            <a
              href={PROGRAMME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-solid"
            >
              <Download size={18} /> Télécharger le programme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
