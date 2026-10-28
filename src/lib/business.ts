// ==========================================================================
// ACC Business · Configuration & types partagés
// Les liens de paiement se changent ici, ou sans toucher au code
// via les variables d'environnement VITE_* (fichier .env / réglages hébergeur).
// ==========================================================================

const env = import.meta.env;

/** Lien de paiement SasPay · tarif partenaire (5 000 FCFA). */
export const PAYMENT_LINK_PARTNER =
  env.VITE_PAYMENT_LINK_PARTNER_5000 || "https://link.saspay.me/b33laon958i";

/** Lien de paiement SasPay · entreprises non partenaires (10 000 FCFA). */
export const PAYMENT_LINK_NON_PARTNER =
  env.VITE_PAYMENT_LINK_NON_PARTNER_10000 || "https://link.saspay.me/u5pxv5lhnbw";

// Le formulaire officiel (Tally) n'est pas lié depuis le site : SasPay y
// redirige automatiquement le partenaire juste après le paiement.

export const BUSINESS_NAME = "ACC Business";
export const BUSINESS_TAGLINE = "Les entreprises. Les offres. Les contacts.";

export const PRICE_PARTNER_LABEL = "5 000 FCFA";
export const PRICE_NON_PARTNER_LABEL = "10 000 FCFA";

export const DEADLINE_LABEL = "10 novembre 2026";
export const DEADLINE_FULL_LABEL = "10 novembre 2026 à 23 h 59, heure du Bénin";

/** Routes ACC Business (les pages annuaire viendront plus tard). */
export const BUSINESS_ROUTES = {
  home: "/business",
  join: "/business/rejoindre",
  directory: "/business/annuaire",
  listing: (slug: string) => `/business/annuaire/${slug}`,
} as const;

/** Réseaux sociaux qu'une fiche peut afficher. */
export type SocialNetwork = "facebook" | "instagram" | "tiktok" | "linkedin";

/**
 * Fiche entreprise de l'annuaire. Sert au simulateur aujourd'hui,
 * et servira aux pages /business/annuaire et /business/annuaire/:slug.
 */
export type BusinessListing = {
  slug?: string;
  name: string;
  description: string;
  offer: string;
  /** URL du visuel publicitaire (objet local `blob:` dans le simulateur). */
  visualUrl?: string;
  /** Numéro WhatsApp professionnel, format international sans + (ex. 2290100000000). */
  whatsapp?: string;
  socials?: Partial<Record<SocialNetwork, string>>;
};
