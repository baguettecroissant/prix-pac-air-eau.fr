/**
 * ⭐ SITE CONFIGURATION — SEUL FICHIER À MODIFIER POUR CHAQUE NOUVEAU SITE
 * Clone le boilerplate, modifie ce fichier, déploie.
 */
export const siteConfig = {
  // === IDENTITÉ ===
  domain: "prix-poele-bois-devis.fr",
  name: "Prix Poêle à bois",
  tagline: "Poêle à bois — Guide, Prix & Devis Locaux 2026",
  description: "Obtenez jusqu'à 3 devis gratuits pour votre poêle à bois. Comparez les prix d'installateurs certifiés RGE et profitez des aides MaPrimeRénov' 2026.",

  // === NICHE ===
  niche: {
    slug: "poele-a-bois",
    name: "Poêle à bois",
    nameShort: "Poêle bois",
    emoji: "🔥",
    icon: "flame",
    seoTitleTemplate: "Poêle à bois à {city} — Prix & devis {zip}",
    metaDescTemplate: "Comparez les prix de poêle à bois à {city} ({zip}). Jusqu'à 3 devis gratuits d'installateurs RGE. Aides MaPrimeRénov' déduites. Réponse sous 48h.",
    heroTitle: "Poêle à bois : Prix, Aides & Devis Gratuit 2026",
    heroSubtitle: "Comparez jusqu'à 3 devis d'installateurs certifiés RGE. Service 100% gratuit et sans engagement.",
  },

  // === PRIX ===
  pricing: [
    { service: "Poêle à bois Standard", price: "2 500€", details: "Configuration de base, modèle classique" },
    { service: "Poêle à bois Intermédiaire", price: "3 750€", details: "Matériaux milieu de gamme, design moderne" },
    { service: "Poêle à bois Premium", price: "8 000€", details: "Sur-mesure, haute qualité, accumulation de chaleur" },
    { service: "Création de conduit de fumée", price: "1 500 – 3 000€", details: "Si aucun conduit existant (tubage double paroi)" },
    { service: "Tubage conduit existant", price: "500 – 1 000€", details: "Mise aux normes d'un conduit maçonné" },
    { service: "Entretien annuel (Ramonage)", price: "60 – 120€", details: "Obligatoire 1 à 2 fois par an selon assurance" },
  ],
  pricingNote: "Prix TTC moyens constatés en 2026, pose comprise. Avant déduction des aides (MaPrimeRénov', CEE, TVA 5.5%).",

  // === AIDES ===
  aids: [
    { name: "MaPrimeRénov'", amount: "Jusqu'à 2 500€", condition: "Selon revenus du foyer (Très modestes à intermédiaires)" },
    { name: "CEE (Prime énergie)", amount: "Jusqu'à 800€", condition: "Cumulable avec MaPrimeRénov'" },
    { name: "TVA réduite 5,5%", amount: "Directement sur le devis", condition: "Logement > 2 ans, artisan RGE" },
    { name: "Éco-PTZ", amount: "Jusqu'à 15 000€ à taux 0%", condition: "Sans condition de revenus" },
  ],

  // === MONÉTISATION ===
  viteundevis: {
    partnerId: "2353",
    boxId: "822b6a43e4",
    categoryId: "70",
  },

  // === COULEURS ===
  colors: {
    primary: "dc2626",    // red-600
    primaryDark: "b91c1c", // red-700
    accent: "0284c7",     // sky-600
    dark: "7f1d1d",       // red-900
  },

  // === PROCESSUS ===
  process: [
    { title: "Décrivez votre projet", desc: "Type de poêle, besoin de création de conduit, surface à chauffer.", icon: "📋", duration: "2 min" },
    { title: "Recevez 3 devis", desc: "Des installateurs RGE de votre département vous contactent sous 48h.", icon: "📨", duration: "24-48h" },
    { title: "Comparez & choisissez", desc: "Comparez prix, modèles et garanties des professionnels locaux.", icon: "⚖️" },
    { title: "Installation certifiée", desc: "Votre artisan installe votre poêle selon les normes DTU 24.1.", icon: "🏗️", duration: "1-2 jours" },
  ],

  // === FAQ ===
  faq: [
    {
      q: "Quel est le prix moyen d'un poêle à bois posé en 2026 ?",
      a: "Le prix d'un poêle à bois varie entre 2 500€ (standard) et 8 000€ (premium) TTC pose comprise. Ce tarif peut varier selon la nécessité de créer ou de tuber un conduit d'évacuation des fumées."
    },
    {
      q: "Quelles sont les aides pour installer un poêle à bois ?",
      a: "Vous pouvez cumuler MaPrimeRénov' (jusqu'à 2 500€), la Prime Énergie (CEE), la TVA à 5,5% et l'Éco-PTZ. Il est obligatoire de faire appel à un artisan certifié RGE QualiBois pour en bénéficier."
    },
    {
      q: "Faut-il obligatoirement un conduit de cheminée pour un poêle à bois ?",
      a: "Oui, un conduit d'évacuation des fumées conforme (norme NF DTU 24.1) est obligatoire. Si vous n'en possédez pas, l'installateur devra créer un conduit isolé (type Poujoulat), ce qui représente un surcoût d'environ 1 500€ à 3 000€."
    },
    {
      q: "Quelle puissance choisir pour mon poêle à bois ?",
      a: "En moyenne, on compte 1 kW pour 10 m² (ou 25 m³) pour une maison correctement isolée. Pour une maison de 100 m², un poêle de 8 à 10 kW est généralement suffisant. Un surdimensionnement encrasse le conduit et diminue le rendement."
    },
    {
      q: "Bûches ou granulés : que choisir ?",
      a: "Le poêle à bûches offre une belle flamme et fonctionne sans électricité (idéal en chauffage d'appoint ou plaisir). Le poêle à granulés (pellets) est programmable, autonome et régule la température, mais nécessite une prise électrique."
    },
  ],

  // === TRUST ===
  trustBadges: ["Artisans RGE QualiBois", "Devis 100% gratuit", "Sans engagement", "Norme NF DTU 24.1"],

  // === CONTENT BLOCKS ===
  introText: `Le poêle à bois est la solution de chauffage au bois la plus conviviale et authentique. Que ce soit pour un chauffage principal dans une maison bien isolée ou comme chauffage d'appoint, le poêle à bois offre un confort thermique exceptionnel et le charme d'une vraie flambée.

Avec un rendement allant de 70% à plus de 85% pour les modèles récents (Label Flamme Verte 7 étoiles), c'est une solution écologique et économique, le bois bûche restant l'une des énergies les moins chères du marché. Grâce aux aides de l'État (MaPrimeRénov'), l'investissement initial est rapidement amorti.`,

  whyChooseUs: [
    "Jusqu'à 3 devis d'installateurs RGE QualiBois locaux",
    "Service 100% gratuit et sans aucun engagement",
    "Artisans vérifiés avec assurances à jour",
    "Réponse sous 24h à 48h maximum",
    "Aide au choix du modèle et dimensionnement",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
