import { Facebook, Instagram, Linkedin, Music2, ImageIcon, Tag } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";
import type { BusinessListing, SocialNetwork } from "@/lib/business";

const SOCIALS: { key: SocialNetwork; label: string; icon: typeof Facebook }[] = [
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "tiktok", label: "TikTok", icon: Music2 },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
];

type Props = {
  listing: BusinessListing;
  /**
   * Mode aperçu (simulateur) : textes indicatifs quand un champ est vide,
   * boutons non cliquables. En mode normal, seuls les liens fournis s'affichent.
   */
  preview?: boolean;
  className?: string;
};

/** Fiche entreprise ACC Business (simulateur, annuaire et page individuelle). */
const BusinessListingCard = ({ listing, preview = false, className }: Props) => {
  const name = listing.name.trim() || (preview ? "Nom de votre entreprise" : "");
  const description =
    listing.description.trim() ||
    (preview ? "Quelques mots pour présenter votre activité, vos produits ou vos services." : "");
  const offer =
    listing.offer.trim() || (preview ? "L'offre, le produit ou la nouveauté que vous voulez mettre en avant." : "");
  const initial = (listing.name.trim()[0] || "A").toUpperCase();

  const socials = preview ? SOCIALS : SOCIALS.filter((s) => listing.socials?.[s.key]);
  const whatsappHref = listing.whatsapp ? `https://wa.me/${listing.whatsapp}` : undefined;

  return (
    <article className={cn("rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-[var(--shadow-floating)] overflow-hidden", className)}>
      {/* Visuel publicitaire */}
      <div className="relative aspect-[4/3] bg-[hsl(var(--muted))]">
        {listing.visualUrl ? (
          <img
            src={listing.visualUrl}
            alt={`Visuel publicitaire de ${name}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground border-b border-dashed border-[hsl(var(--border))]">
            <ImageIcon size={32} strokeWidth={1.5} />
            <span className="text-sm">Votre visuel publicitaire</span>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[hsl(var(--teal-night))] text-white flex items-center justify-center font-display font-bold text-lg">
            {initial}
          </div>
          <div className="min-w-0">
            <h3
              className={cn(
                "font-display text-xl font-bold leading-tight break-words",
                !listing.name.trim() && "text-muted-foreground"
              )}
            >
              {name}
            </h3>
            <p className="text-xs text-muted-foreground">Entreprise partenaire ACC</p>
          </div>
        </div>

        <p
          className={cn(
            "text-sm leading-relaxed mb-4 break-words whitespace-pre-line",
            listing.description.trim() ? "text-foreground/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>

        {offer && (
          <div className="rounded-xl bg-[hsl(var(--primary)/0.08)] border border-[hsl(var(--primary)/0.25)] p-4 mb-5">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--primary-ink))] mb-1">
              <Tag size={14} /> Offre mise en avant
            </div>
            <p
              className={cn(
                "text-sm font-medium break-words whitespace-pre-line",
                !listing.offer.trim() && "text-muted-foreground font-normal"
              )}
            >
              {offer}
            </p>
          </div>
        )}

        {socials.length > 0 && (
          <div className="flex items-center gap-2 mb-5">
            {socials.map(({ key, label, icon: Icon }) => {
              const href = listing.socials?.[key];
              const cls =
                "flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(var(--border))] text-muted-foreground";
              return !preview && href ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(cls, "hover:text-primary hover:border-primary transition-colors")}
                >
                  <Icon size={18} />
                </a>
              ) : (
                <span key={key} aria-label={label} title={label} className={cls}>
                  <Icon size={18} />
                </span>
              );
            })}
          </div>
        )}

        {!preview && whatsappHref ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-3 rounded-xl transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" /> Contacter sur WhatsApp
          </a>
        ) : preview ? (
          <span
            aria-hidden="true"
            className="flex w-full items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl select-none"
          >
            <WhatsAppIcon className="w-5 h-5" /> Contacter sur WhatsApp
          </span>
        ) : null}
      </div>
    </article>
  );
};

export default BusinessListingCard;
