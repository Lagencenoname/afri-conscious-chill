// Données des offres de sponsoring & partenariat (dossier ACC 3)

export interface Pack {
  name: string;
  price: string;
  tagline: string;
  perks: string[];
  featured?: boolean;
}

export const PACKS: Pack[] = [
  {
    name: "Améthyste",
    price: "250 000 FCFA",
    tagline: "L'entrée idéale pour exister sur l'événement.",
    perks: [
      "Logo sur tous les supports (affiches, bâches, etc.)",
      "1 accès VIP pour les deux jours, concert de clôture inclus",
      "Parrainage d'un prix spécial (Jeux / performances)",
      "Goodies African Conscious Chill",
      "Remise d'une distinction sur scène",
      "Certificat de partenariat + publication de remerciement",
    ],
  },
  {
    name: "Gold",
    price: "350 000 FCFA",
    tagline: "Plus de visibilité et d'interaction directe.",
    perks: [
      "Logo sur tous les supports de communication",
      "3 accès VIP pour les deux jours",
      "Stand d'exposition",
      "Parrainage exclusif d'une Masterclass ou d'un Mentoring",
      "Animation d'un jeu-concours sur scène",
      "Une publication publicitaire sur nos réseaux",
      "Certificat de partenariat + publication de remerciement",
    ],
  },
  {
    name: "Topaze Bleue",
    price: "500 000 FCFA",
    tagline: "Prise de parole et contenu de marque dédié.",
    perks: [
      "Logo sur tous les supports de communication",
      "4 accès VIP pour les deux jours",
      "Campagne Brand Content dédiée (interview vidéo)",
      "5 minutes pour présenter votre structure",
      "Deux publications publicitaires sur nos réseaux",
      "Goodies African Conscious Chill",
      "Certificat de partenariat + publication de remerciement",
    ],
  },
  {
    name: "Rubis",
    price: "800 000 FCFA",
    tagline: "Le pack équilibré pour les marques ambitieuses.",
    featured: true,
    perks: [
      "Logo sur tous les supports de communication",
      "5 accès VIP pour les deux jours",
      "Mise en avant d'un kakémono sur le site",
      "8 minutes de prise de parole avec PPT",
      "Parrainage d'un prix spécial (audace créative)",
      "Une publication publicitaire sur nos réseaux",
      "Bonus éventuel : Podcast chez Voxhub",
    ],
  },
  {
    name: "Émeraude",
    price: "1 500 000 FCFA",
    tagline: "Storytelling premium et exposition renforcée.",
    perks: [
      "Tous les avantages du pack Rubis",
      "6 accès VIP pour les deux jours",
      "12 minutes de prise de parole avec PPT",
      "Vidéo personnalisée diffusée pendant l'événement",
      "Brand Content Premium : mini-documentaire Success Story",
      "Article dédié sur le site web de l'événement",
      "Visite de vos locaux avec des créateurs de contenus",
    ],
  },
  {
    name: "Diamant",
    price: "2 000 000 FCFA",
    tagline: "Le statut de Parrain officiel de l'édition.",
    perks: [
      "Tous les avantages du pack Émeraude",
      "8 accès VIP pour les deux jours",
      "Reconnaissance officielle en tant que Parrain de l'événement",
      "Intervention sur le panel principal de votre choix",
      "Interview exclusif du dirigeant (média Success Story PodLab)",
      "Distribution de supports d'entreprise sur les lieux",
      "Visibilité médiatique avant et après l'événement",
    ],
  },
];

export interface PartnershipType {
  title: string;
  description: string;
  examples: string;
  modality: string;
}

export const PARTNERSHIP_TYPES: PartnershipType[] = [
  {
    title: "Partenariat en nature",
    description: "Vous fournissez des biens ou services essentiels en échange de visibilité.",
    examples: "Boissons, restauration, sonorisation, stands, billets d'avion, hébergement…",
    modality: "Valorisation financière de l'apport pour vous attribuer le pack correspondant.",
  },
  {
    title: "Partenariat Média & Influence",
    description: "Vous offrez une caisse de résonance à l'événement.",
    examples: "Passages radio/TV, affichage urbain, articles de presse, diffusion réseaux sociaux.",
    modality: "Plan de communication croisé (l'ACC communique sur votre média et vice-versa).",
  },
  {
    title: "Partenariat Technique & Expertise",
    description: "Vous apportez une valeur ajoutée au contenu de l'événement.",
    examples: "Mentors, masterclasses, solutions de paiement ou technologiques.",
    modality: "Intégration au programme officiel + mention « Partenaire Technique Officiel ».",
  },
];
