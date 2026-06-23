# African Conscious Chill 3 — Landing Page (Édition 2026)

Landing page de l'événement **African Conscious Chill 3** : « Artistes, influenceurs, créatifs
et marques ensemble pour créer, collaborer et impacter. » — **29 & 30 août 2026, Cotonou**.
Une organisation HILS Company.

## Stack
Vite · React · TypeScript · Tailwind CSS · shadcn/ui · React Router.

## Démarrage
```sh
npm install
npm run dev      # serveur de dev
npm run build    # build de production
```

## Design system
Inspiré du design system **meetandjuice** (light, cartes glass, motion expressive) adapté à la
marque ACC : **couleur primaire orange** + accent teal nuit + or. Tokens dans
[src/index.css](src/index.css) (HSL), polices **Outfit** (corps) / **Roboto** (titres).

## Structure des pages

| Fichier | État | Rôle |
|---|---|---|
| [src/pages/Index.tsx](src/pages/Index.tsx) | ✅ | Monte la landing page (`/`) |
| [src/pages/Salubrite.tsx](src/pages/Salubrite.tsx) | ✅ | Page `/salubrite` : formulaire d'inscription + écran de confirmation (3 boutons WhatsApp) |
| [src/pages/Sponsoring.tsx](src/pages/Sponsoring.tsx) | ✅ | Page `/sponsoring` détaillée : pourquoi, 6 packs complets, 3 types de partenariat, CTA WhatsApp pré-remplis par contexte |
| [src/components/LandingPage.tsx](src/components/LandingPage.tsx) | ✅ | Orchestration des sections + reveal au scroll |

### Sections (dans l'ordre d'affichage)
Header · Hero · About (texte officiel 2026 + stats) · Program (Jour 1 / Jour 2) · Campaign
(salubrité) · Stand · Underground · Gallery (medis) · Pricing (passes) · Sponsoring (packs) ·
Partners (« Ils nous font confiance ») · Social · FinalCTA · Footer · WhatsAppButton.

### Constantes — [src/lib/constants.ts](src/lib/constants.ts)
URL billetterie unique, liens/numéros WhatsApp, dates de l'événement.

## Décisions clés
- **Billetterie** : tous les CTA pointent vers `BOOKING_URL` avec `target="_blank"`.
- **Compte à rebours** : cible `2026-08-29` (`EVENT_DATE_TARGET`).
- **Bouton WhatsApp flottant** : vraie icône officielle ([WhatsAppIcon.tsx](src/components/WhatsAppIcon.tsx)).
- **Nettoyage** : suppression de la vidéo embed, des posts Facebook, des points de retrait et de
  la mention « CMA » du footer.
- **Images** : assets de `medis/`, `partners/` et visuels lourds compressés via `sharp`
  (~61 Mo → ~6 Mo). Galerie et logos chargés via `import.meta.glob`.

## À faire / À compléter
- **Liens des groupes WhatsApp** (écran de confirmation salubrité) : remplacer
  `WHATSAPP_GROUP_PUBLIC` et `WHATSAPP_GROUP_MEDIA` dans `constants.ts` par les vrais liens
  d'invitation.
- **Formulaire salubrité** : actuellement stocké en `localStorage` — brancher un backend si besoin.
- **Lieu** : confirmé · **Le Concerto, Akpakpa** (`EVENT_VENUE`).
- **Tarifs des passes** : non communiqués dans le dossier ; ajouter les prix si disponibles.
