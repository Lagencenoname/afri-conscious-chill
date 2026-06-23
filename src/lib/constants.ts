// ==========================================================================
// African Conscious Chill 3 · Constantes globales (édition 2026)
// ==========================================================================

/** URL unique de billetterie (toujours ouvrir dans un nouvel onglet). */
export const BOOKING_URL =
  "https://me.mouvment.com/events/african-conscious-chill-3/booking";

/** Numéro WhatsApp Booking / Partenariat (format international sans +). */
export const WHATSAPP_BOOKING_NUMBER = "2290168525972";

/** Construit un lien WhatsApp avec un message pré-rempli. */
export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_BOOKING_NUMBER}?text=${encodeURIComponent(message)}`;

/** Lien WhatsApp direct (sans message) vers le contact Booking / Partenariat. */
export const WHATSAPP_BOOKING_URL = waLink(
  "Bonjour, je vous contacte au sujet de l'African Conscious Chill 3 (29 & 30 août 2026)."
);

/** Lien WhatsApp pré-rempli pour la réservation d'un stand. */
export const WHATSAPP_STAND_URL = waLink(
  "Bonjour, je souhaite réserver un stand pour l'événement ACC 2026."
);

/** Lien WhatsApp pré-rempli pour l'appel aux artistes underground. */
export const WHATSAPP_UNDERGROUND_URL = waLink(
  "Bonjour, je suis un artiste indépendant / underground et je souhaite performer à l'ACC 3."
);

// --- Groupes WhatsApp (écran de confirmation campagne salubrité) ---
// NOTE : remplacer ces liens d'invitation par les vrais liens des groupes.
export const WHATSAPP_GROUP_PUBLIC =
  "https://chat.whatsapp.com/REMPLACER_GROUPE_PUBLIC";
export const WHATSAPP_GROUP_MEDIA =
  "https://chat.whatsapp.com/REMPLACER_GROUPE_MEDIA";

/** Dates & lieu de l'édition 2026. */
export const EVENT_DATE_TARGET = "2026-08-29T09:00:00"; // début compte à rebours
export const EVENT_DATES_LABEL = "29 & 30 Août 2026";
export const EVENT_CITY = "Cotonou, Bénin";
export const EVENT_VENUE = "Le Concerto, Akpakpa";
export const SALUBRITE_DATE_LABEL = "29 Juillet 2026";

/** Réseaux sociaux. */
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61555937974681";
