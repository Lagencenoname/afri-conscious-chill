# African Conscious Chill 3 — Landing Page (Édition 2026)

Landing page de l'événement **African Conscious Chill 3** : « Artistes, influenceurs, créatifs
et marques ensemble pour créer, collaborer et impacter. » — **15 novembre 2026, Cotonou**.
Une organisation HILS Company.

## Stack
Vite · React · TypeScript · Tailwind CSS · shadcn/ui · React Router.
Google Analytics 4 (`G-YFCGCB35FT`) chargé dans `index.html`.

## Routes
| Route | État |
|---|---|
| `/` | Landing page de l'événement (avec un encart ACC Business et un lien « ACC Business » dans le menu) |
| `/sponsoring` | Dossier de sponsoring |
| `/business` | **ACC Business** : page destinée aux 27 partenaires (hero, avant/après, 5 raisons, simulateur de fiche, tarifs, étapes, date limite, FAQ) |
| `/business/rejoindre` | Version simple pour les entreprises non partenaires (10 000 FCFA) |
| `/business/annuaire`, `/business/annuaire/:slug` | À faire : annuaire public et fiches individuelles |

## ACC Business
- Configuration (liens de paiement, tarifs, date limite) : `src/lib/business.ts`.
  Les liens peuvent être remplacés sans toucher au code via `VITE_PAYMENT_LINK_PARTNER_5000`
  et `VITE_PAYMENT_LINK_NON_PARTNER_10000`.
- Paiement SasPay ouvert dans la même page ; SasPay redirige ensuite vers le formulaire Tally
  (aucun lien de formulaire sur le site).
- Composants dans `src/components/business/` : `BusinessLayout` (cadre des pages /business/*),
  `BusinessListingCard` (fiche entreprise réutilisable pour l'annuaire), `BusinessSimulator`,
  `AccBusinessCard` (carte invité + QR décoratif, réutilisée par `BusinessTeaserSection` sur l'accueil).
- Style : boutons `.cta-solid` (orange plein, texte nuit, contraste 5,3:1) ; `--primary-ink` pour
  les petits textes orange sur fond clair. Tous les CTA du site sont insécables (une ligne sur mobile).
- Décisions : paiement 100 % externe (SasPay), aucune donnée du simulateur n'est envoyée ni
  enregistrée, pas de compte à rebours, aucune promesse de résultats. Aucune durée de publication,
  politique de modification ou de remboursement n'est affichée tant que l'équipe ACC ne les a
  pas définies.

## Prochaines étapes
- Construire `/business/annuaire` et `/business/annuaire/:slug` à partir de `BusinessListingCard`.
- Générer le QR code de la carte de visite collective (vers `/business/annuaire`).
