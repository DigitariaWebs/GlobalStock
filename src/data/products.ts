import type React from "react";

import {
  BatteryFull,
  Drop,
  Gauge,
  Lightning,
  Plug,
  SpeakerSimpleNone,
  Sun,
  Thermometer,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";

export type CategoryLabel =
  | "Groupes Électrogènes"
  | "Machines & Outillage Pro"
  | "Solaire"
  | "Achat en gros";

export type CategorySlug =
  | "groupes-electrogenes"
  | "machines-outillage-pro"
  | "solaire"
  | "achat-en-gros";

export const CATEGORY_META: Record<
  CategoryLabel,
  { slug: CategorySlug; href: string }
> = {
  "Groupes Électrogènes": { slug: "groupes-electrogenes", href: "/groupes-electrogenes" },
  "Machines & Outillage Pro": {
    slug: "machines-outillage-pro",
    href: "/machines-outillage-pro",
  },
  "Solaire": { slug: "solaire", href: "/solaire" },
  "Achat en gros": { slug: "achat-en-gros", href: "/achat-en-gros" },
};

export type Phase = "Monophasé" | "Triphasé" | "—";
export type Fuel = "Diesel" | "Essence" | "—";
export type Noise = "Standard" | "Silencieux" | "Supersilencieux" | "—";

export type ProductTag = "bestSelling" | "superSale";

export type ProductDocument = {
  name: string;
  size: string;
  type: string;
};

export type ProductKeySpec = {
  icon: React.ElementType;
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: CategoryLabel;
  type: string;

  price: number;
  oldPrice: number;
  inStock: boolean;
  stockCount?: number;

  image: string;
  images?: string[];

  chips?: string[];
  popularity?: number;

  power?: number; // kVA (0 for accessories)
  phase?: Phase;
  fuel?: Fuel;
  noise?: Noise;

  rating?: number;
  reviewCount?: number;
  delivery?: string;

  badge?: string;
  tags?: ProductTag[];
  bestSellingRank?: number;

  // Product details (optional)
  sku?: string;
  keySpecs?: ProductKeySpec[];
  description?: string;
  features?: string[];
  fullSpecs?: Array<[string, string]>;
  documents?: ProductDocument[];
};

export function getCategoryHref(category: CategoryLabel) {
  return CATEGORY_META[category].href;
}

export function getProducts() {
  return PRODUCTS;
}

export function getProductsByCategory(category: CategoryLabel) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getBestSellingProducts() {
  return PRODUCTS.filter((p) => p.tags?.includes("bestSelling")).sort(
    (a, b) => (a.bestSellingRank ?? 999) - (b.bestSellingRank ?? 999),
  );
}

export function getSuperSaleProducts() {
  return PRODUCTS.filter((p) => p.tags?.includes("superSale"));
}

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

// Home page wholesale carousel items
export type AchatEnGrosHighlight = {
  id: string;
  title: string;
  price: string;
  image: string;
  href: string;
  badge?: string;
};

export const ACHAT_EN_GROS_HIGHLIGHTS: AchatEnGrosHighlight[] = [
  {
    id: "ag-1",
    title: "Palette de 4 Groupes Électrogènes Inverter KRAFTPOWER 7600W",
    price: "5 990,00 €",
    image: "/AchatEnGrosSection/gemini_generated_image_mbttxmbttxmbttxm-high-uth4w1.png",
    href: "/achat-en-gros",
  },
  {
    id: "ag-2",
    title:
      "Palette de 4 Groupes Électrogènes Diesel Daewoo 8,1 kVA DDAE10500DSE-3G – Dual Power Silencieux",
    price: "5 990,00 €",
    image: "/AchatEnGrosSection/gemini_generated_image_gsub2ogsub2ogsub-high.png",
    href: "/achat-en-gros",
    badge: "Épuisé",
  },
  {
    id: "ag-3",
    title: "Palette de 4 GE Diesel Insonorisés 8.5kW – Moteur 10CV",
    price: "4 990,00 €",
    image: "/AchatEnGrosSection/whatsapp-image-2025-11-09-12-36-30_66ac7cba-high.png",
    href: "/achat-en-gros",
  },
];

const IMAGES = {
  mono95: "/ProductsSection/ge-9-5kva-supersilencieux-mono.png",
  tri12: "/ProductsSection/ge-12kva-triphase-supersilencieux.png",
  tri16: "/ProductsSection/ge-16kva-triphase-silencieux.png",
  tri22: "/ProductsSection/ge-22kva-triphase-silencieux-bicylindre.png",
  mobile10: "/ProductsSection/ge-10kva-dualpower-mobile.png",
  inv43: "/ProductsSection/ge-inverter-kraftpower-4300w.png",
  monoKraft: "/BestSellingSection/9-5-kva-monophase-kraft-2-high.png",
  triKraft18: "/BestSellingSection/kraft-18-kva-3phase-standard.png",
  plain: "/BestSellingSection/sans-titre-high.png",
  chainsaw: "/SuperSaleSection/daewookettensaegedcs6524_4-standard.png",
  nettoyeur: "/BestSellingSection/thumb_page_15544536691-1-2-high.png",
};

export const PRODUCTS: Product[] = [
  // ── Home: ProductsSection (canonical IDs: ps-*) ───────────────────────────
  {
    id: "ps-1",
    name: "GE Diesel K9500 – 9,5 kVA Supersilencieux Monophasé",
    brand: "Kraft",
    type: "Domestiques",
    price: 1990,
    oldPrice: 2490,
    inStock: true,
    image: IMAGES.mono95,
    category: "Groupes Électrogènes",
    chips: ["9,5 kVA", "Monophasé", "Supersilencieux"],
    power: 9.5,
    phase: "Monophasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 98,
    tags: ["bestSelling"],
    bestSellingRank: 1,
    badge: "Promotion !",
    rating: 4.9,
    delivery: "Expédié sous 5j",
  },
  {
    id: "ps-2",
    name: "GE Diesel 12 kVA Triphasé Supersilencieux AVR 400V",
    brand: "Kraft",
    type: "Industriels",
    price: 2490,
    oldPrice: 2990,
    inStock: true,
    image: IMAGES.tri12,
    category: "Groupes Électrogènes",
    chips: ["12 kVA", "Triphasé", "Supersilencieux"],
    power: 12,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 95,
    tags: ["bestSelling"],
    bestSellingRank: 2,
    badge: "Promotion !",
    rating: 5.0,
    delivery: "Expédié sous 5j",
  },
  {
    id: "ps-3",
    name: "GE Diesel 16 kVA Triphasé Silencieux",
    brand: "Kraft",
    type: "Industriels",
    price: 3990,
    oldPrice: 4490,
    inStock: true,
    image: IMAGES.tri16,
    category: "Groupes Électrogènes",
    chips: ["16 kVA", "Triphasé", "Silencieux"],
    power: 16,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 88,
    tags: ["bestSelling"],
    bestSellingRank: 3,
    badge: "Épuisé",
    rating: 4.8,
    delivery: "Expédié sous 5j",
  },
  {
    id: "ps-4",
    name: "GE Diesel 10 kVA DualPower 380V/220V Mobile",
    brand: "Kraftpower",
    type: "De chantier",
    price: 1590,
    oldPrice: 1990,
    inStock: true,
    image: IMAGES.mobile10,
    category: "Groupes Électrogènes",
    chips: ["10 kVA", "Triphasé"],
    power: 10,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    popularity: 84,
  },
  {
    id: "ps-5",
    name: "GE Inverter KraftPower 4300W",
    brand: "Kraftpower",
    type: "Inverters",
    price: 899,
    oldPrice: 1199,
    inStock: true,
    image: IMAGES.inv43,
    category: "Groupes Électrogènes",
    chips: ["4,3 kVA", "Monophasé", "Silencieux"],
    power: 4.3,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    popularity: 91,
  },
  {
    id: "ps-6",
    name: "GE Diesel 22 kVA Triphasé Silencieux Bi-Cylindre",
    brand: "Kraft",
    type: "Industriels",
    price: 5490,
    oldPrice: 5990,
    inStock: true,
    image: IMAGES.tri22,
    category: "Groupes Électrogènes",
    chips: ["22 kVA", "Triphasé", "Silencieux"],
    power: 22,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 80,
  },

  // Machines & Outillage Pro
  {
    id: "ps-7",
    name: "Nettoyeur Haute Pression Diesel HPW-3200D – 320 Bars",
    brand: "Kraft",
    type: "Nettoyeurs haute pression",
    price: 1990,
    oldPrice: 2490,
    inStock: true,
    image: IMAGES.nettoyeur,
    category: "Machines & Outillage Pro",
    chips: ["320 Bars", "Diesel"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 90,
    tags: ["bestSelling"],
    bestSellingRank: 4,
    badge: "Promotion !",
    rating: 4.9,
    delivery: "Expédié sous 5j",
  },
  {
    id: "tronconneuse-daewoo-dcs6524",
    name: "Tronçonneuse Daewoo DCS6524 – Lame 60 cm",
    brand: "Daewoo",
    type: "Jardin",
    price: 299,
    oldPrice: 399,
    inStock: true,
    image: IMAGES.chainsaw,
    category: "Machines & Outillage Pro",
    chips: ["60 cm", "58 cc", "Essence"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 92,
    tags: ["bestSelling", "superSale"],
    bestSellingRank: 7,
    badge: "Promotion !",
    rating: 4.6,
    delivery: "Expédié sous 3j",

    // Detailed product page content (was in products/[id]/page.tsx)
    sku: "DW-DCS6524",
    stockCount: 8,
    reviewCount: 38,
    images: [IMAGES.chainsaw, IMAGES.chainsaw, IMAGES.chainsaw, IMAGES.chainsaw],
    keySpecs: [
      { icon: Lightning, label: "Puissance", value: "2 400 W" },
      { icon: Gauge, label: "Lame", value: "60 cm" },
      { icon: Drop, label: "Carburant", value: "Essence" },
      { icon: Wrench, label: "Cylindrée", value: "58 cc" },
    ],
    description: `La tronçonneuse Daewoo DCS6524 est une machine thermique puissante et fiable, équipée d'une lame de 60 cm idéale pour l'abattage et le débitage de bois de grande section. Dotée d'un moteur 2 temps de 58 cc, elle offre un rapport puissance/poids exceptionnel pour les travaux forestiers intensifs.

Son système de lubrification automatique de chaîne, son frein de chaîne de sécurité intégré et sa poignée anti-vibrations ergonomique garantissent confort et sécurité lors de longues sessions de travail.`,
    features: [
      "Moteur 2 temps 58 cc — puissance maximale",
      "Lame guide-chaîne Oregon 60 cm",
      "Frein de chaîne de sécurité automatique",
      "Lubrification automatique de chaîne",
      "Système anti-vibrations — confort prolongé",
      "Démarrage facile par starter automatique",
      "Filtre à air facilement accessible",
    ],
    fullSpecs: [
      ["Puissance moteur", "2 400 W"],
      ["Cylindrée", "58 cc"],
      ["Longueur de lame", "60 cm"],
      ["Pas de chaîne", "3/8\""],
      ["Jauge de chaîne", "1,5 mm"],
      ["Vitesse de chaîne", "22 m/s"],
      ["Contenance réservoir", "0,55 L"],
      ["Contenance huile", "0,29 L"],
      ["Niveau sonore", "103 dB(A)"],
      ["Niveau vibrations", "< 6,1 m/s²"],
      ["Poids (sans chaîne)", "6,8 kg"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "1,8 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "650 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "380 KB", type: "PDF" },
    ],
  },
  {
    id: "ps-9",
    name: "Nettoyeur HP Thermique 250 Bars – Chantier Pro",
    brand: "Kraft",
    type: "Nettoyeurs haute pression",
    price: 1490,
    oldPrice: 1890,
    inStock: true,
    image: IMAGES.nettoyeur,
    category: "Machines & Outillage Pro",
    chips: ["250 Bars", "Thermique"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 78,
  },
  {
    id: "ps-10",
    name: "Compresseur Silent Pro 100 L – 3 CV",
    brand: "Kraftpower",
    type: "Compresseurs",
    price: 890,
    oldPrice: 1090,
    inStock: true,
    image: IMAGES.plain,
    category: "Machines & Outillage Pro",
    chips: ["100 L", "3 CV", "Silencieux"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 86,
    tags: ["bestSelling"],
    bestSellingRank: 8,
    badge: "Promotion !",
    rating: 4.8,
    delivery: "Expédié sous 5j",
  },
  {
    id: "ps-11",
    name: 'Pompe à Eau Thermique 4" – 1 400 L/min',
    brand: "Kraft",
    type: "Pompes à eau",
    price: 590,
    oldPrice: 790,
    inStock: true,
    image: IMAGES.monoKraft,
    category: "Machines & Outillage Pro",
    chips: ["1 400 L/min", "Essence"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 74,
  },
  {
    id: "ps-12",
    name: "Tronçonneuse Thermique 52 cc – Lame 45 cm",
    brand: "Kraft",
    type: "Jardin",
    price: 249,
    oldPrice: 329,
    inStock: false,
    image: IMAGES.chainsaw,
    category: "Machines & Outillage Pro",
    chips: ["45 cm", "52 cc"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 60,
  },

  // Achat en gros (catalog items; also mirrored by ACHAT_EN_GROS_HIGHLIGHTS)
  {
    id: "ag-palette-4-inverter-7600w",
    name: "Palette de 4 Groupes Électrogènes Inverter KRAFTPOWER 7600W",
    brand: "GlobalStock",
    type: "Palettes",
    price: 5990,
    oldPrice: 6990,
    inStock: true,
    image: "/AchatEnGrosSection/gemini_generated_image_mbttxmbttxmbttxm-high-uth4w1.png",
    category: "Achat en gros",
    chips: ["Palette x4", "Inverter", "7600W"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 88,
  },
  {
    id: "ag-palette-4-daewoo-8100",
    name:
      "Palette de 4 Groupes Électrogènes Diesel Daewoo 8,1 kVA DDAE10500DSE-3G – Dual Power Silencieux",
    brand: "GlobalStock",
    type: "Palettes",
    price: 5990,
    oldPrice: 6990,
    inStock: false,
    image: "/AchatEnGrosSection/gemini_generated_image_gsub2ogsub2ogsub-high.png",
    category: "Achat en gros",
    chips: ["Palette x4", "Diesel", "8,1 kVA"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 82,
    badge: "Épuisé",
  },
  {
    id: "ag-palette-4-diesel-insonorise-8500w",
    name: "Palette de 4 GE Diesel Insonorisés 8.5kW – Moteur 10CV",
    brand: "GlobalStock",
    type: "Palettes",
    price: 4990,
    oldPrice: 5990,
    inStock: true,
    image: "/AchatEnGrosSection/whatsapp-image-2025-11-09-12-36-30_66ac7cba-high.png",
    category: "Achat en gros",
    chips: ["Palette x4", "Diesel", "Insonorisé"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 80,
  },

  // Solaire
  {
    id: "ps-13",
    name: "Panneau Solaire Monocristallin 400W – Haut Rendement",
    brand: "Kraft",
    type: "Panneaux solaires",
    price: 290,
    oldPrice: 390,
    inStock: true,
    image: IMAGES.inv43,
    category: "Solaire",
    chips: ["400W", "Monocristallin"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 83,
  },
  {
    id: "ps-14",
    name: "Onduleur Solaire Hybride 5 kW – Monophasé",
    brand: "Kraftpower",
    type: "Onduleurs",
    price: 890,
    oldPrice: 1190,
    inStock: true,
    image: IMAGES.mono95,
    category: "Solaire",
    chips: ["5 kW", "Hybride", "Monophasé"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 81,
  },
  {
    id: "ps-15",
    name: "Kit Solaire Autonome 3 kW – Batterie Lithium 100 Ah",
    brand: "Kraft",
    type: "Batteries solaires",
    price: 2490,
    oldPrice: 3190,
    inStock: true,
    image: IMAGES.mobile10,
    category: "Solaire",
    chips: ["3 kW", "Lithium 100 Ah"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 79,
  },
  {
    id: "ps-16",
    name: "Panneau Solaire Bifacial 550W – Industriel",
    brand: "Kraft",
    type: "Panneaux solaires",
    price: 390,
    oldPrice: 490,
    inStock: true,
    image: IMAGES.inv43,
    category: "Solaire",
    chips: ["550W", "Bifacial"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 77,
  },
  {
    id: "ps-17",
    name: "Batterie Solaire LiFePO4 200 Ah – 25,6V",
    brand: "Kraftpower",
    type: "Batteries solaires",
    price: 1290,
    oldPrice: 1690,
    inStock: true,
    image: IMAGES.tri12,
    category: "Solaire",
    chips: ["200 Ah", "25,6V", "LiFePO4"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 76,
  },
  {
    id: "ps-18",
    name: "Régulateur MPPT 60A – Contrôleur de Charge Solaire",
    brand: "Kraft",
    type: "Onduleurs",
    price: 190,
    oldPrice: 259,
    inStock: false,
    image: IMAGES.inv43,
    category: "Solaire",
    chips: ["60A", "MPPT"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 65,
  },

  // ── BestSelling: products that weren't in ProductsSection ────────────────
  {
    id: "ge-bs-20kva",
    name: "GE Diesel 20 kVA Triphasé Supersilencieux",
    brand: "Kraft",
    type: "Industriels",
    price: 4990,
    oldPrice: 5990,
    inStock: true,
    image: IMAGES.triKraft18,
    category: "Groupes Électrogènes",
    power: 20,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 89,
    tags: ["bestSelling"],
    bestSellingRank: 6,
    badge: "Nouveau",
    rating: 4.9,
    delivery: "Expédié sous 7j",
  },

  // ── Category page: Groupes Électrogènes additional items (from groupes-electrogenes/page.tsx) ──
  {
    id: "ge-7",
    name: "GE Essence 3,5 kVA Domestique Portable",
    brand: "Kraftpower",
    type: "Domestiques",
    price: 549,
    oldPrice: 699,
    inStock: true,
    image: IMAGES.monoKraft,
    category: "Groupes Électrogènes",
    power: 3.5,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Standard",
    popularity: 76,
  },
  {
    id: "ge-8",
    name: "GE Diesel 6 kVA Monophasé Silencieux Domestique",
    brand: "Kraft",
    type: "Domestiques",
    price: 1290,
    oldPrice: 1590,
    inStock: true,
    image: IMAGES.mono95,
    category: "Groupes Électrogènes",
    power: 6,
    phase: "Monophasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 82,
  },
  {
    id: "ge-9",
    name: "GE Inverter 2200W Ultra-Compact",
    brand: "Honda",
    type: "Inverters",
    price: 1190,
    oldPrice: 1390,
    inStock: true,
    image: IMAGES.inv43,
    category: "Groupes Électrogènes",
    power: 2.2,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Supersilencieux",
    popularity: 87,
  },
  {
    id: "ge-10",
    name: "GE Inverter 3500W Digital Eco-Mode",
    brand: "Kraftpower",
    type: "Inverters",
    price: 799,
    oldPrice: 999,
    inStock: false,
    image: IMAGES.inv43,
    category: "Groupes Électrogènes",
    power: 3.5,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    popularity: 73,
  },
  {
    id: "ge-11",
    name: "GE Diesel 8 kVA Ouvert De Chantier",
    brand: "ITC",
    type: "De chantier",
    price: 1390,
    oldPrice: 1690,
    inStock: true,
    image: IMAGES.plain,
    category: "Groupes Électrogènes",
    power: 8,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    popularity: 71,
    tags: ["bestSelling"],
    bestSellingRank: 5,
    badge: "Promotion !",
    rating: 4.7,
    delivery: "Expédié sous 5j",
  },
  {
    id: "ge-12",
    name: "GE Diesel 15 kVA Ouvert De Chantier Mobile",
    brand: "Kraft",
    type: "De chantier",
    price: 2290,
    oldPrice: 2690,
    inStock: true,
    image: IMAGES.mobile10,
    category: "Groupes Électrogènes",
    power: 15,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    popularity: 68,
  },
  {
    id: "ge-13",
    name: "GE Diesel 30 kVA Triphasé Industriel AVR",
    brand: "ITC",
    type: "Industriels",
    price: 6990,
    oldPrice: 7490,
    inStock: true,
    image: IMAGES.triKraft18,
    category: "Groupes Électrogènes",
    power: 30,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 70,
  },
  {
    id: "ge-14",
    name: "GE Diesel 45 kVA Triphasé Industriel Bi-Cylindre",
    brand: "Kraft",
    type: "Industriels",
    price: 9490,
    oldPrice: 10490,
    inStock: false,
    image: IMAGES.tri22,
    category: "Groupes Électrogènes",
    power: 45,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 62,
  },
  {
    id: "ge-15",
    name: "GE Diesel 60 kVA Triphasé Industriel Silencieux",
    brand: "ITC",
    type: "Industriels",
    price: 12990,
    oldPrice: 13990,
    inStock: true,
    image: IMAGES.tri22,
    category: "Groupes Électrogènes",
    power: 60,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 58,
  },
  {
    id: "ge-16",
    name: "GE Diesel 18 kVA Triphasé Supersilencieux ATS",
    brand: "Kraft",
    type: "Industriels",
    price: 4490,
    oldPrice: 4990,
    inStock: true,
    image: IMAGES.triKraft18,
    category: "Groupes Électrogènes",
    power: 18,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 79,
  },
  {
    id: "ge-17",
    name: "GE Diesel 25 kVA Supersilencieux Industriel",
    brand: "Kraft",
    type: "Industriels",
    price: 5990,
    oldPrice: 6490,
    inStock: true,
    image: IMAGES.tri16,
    category: "Groupes Électrogènes",
    power: 25,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 74,
  },
  {
    id: "ge-18",
    name: "GE Essence 2,2 kVA Mini Portable Camping",
    brand: "Honda",
    type: "Domestiques",
    price: 489,
    oldPrice: 599,
    inStock: true,
    image: IMAGES.monoKraft,
    category: "Groupes Électrogènes",
    power: 2.2,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    popularity: 69,
  },
  {
    id: "ge-19",
    name: "GE Essence 5,5 kVA Domestique AVR Démarrage Électrique",
    brand: "Kraftpower",
    type: "Domestiques",
    price: 899,
    oldPrice: 1099,
    inStock: true,
    image: IMAGES.monoKraft,
    category: "Groupes Électrogènes",
    power: 5.5,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Standard",
    popularity: 72,
  },
  {
    id: "ge-20",
    name: "GE Diesel 20 kVA Chantier Ouvert Robuste",
    brand: "Kraftpower",
    type: "De chantier",
    price: 3290,
    oldPrice: 3790,
    inStock: true,
    image: IMAGES.tri16,
    category: "Groupes Électrogènes",
    power: 20,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    popularity: 64,
  },
  {
    id: "ge-21",
    name: "Filtre à Huile Universel Moteur Diesel",
    brand: "Kraft",
    type: "Pièces & accessoires",
    price: 19,
    oldPrice: 29,
    inStock: true,
    image: IMAGES.plain,
    category: "Groupes Électrogènes",
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 55,
  },
  {
    id: "ge-22",
    name: "Kit ATS 125A Commutation Automatique",
    brand: "ITC",
    type: "Pièces & accessoires",
    price: 349,
    oldPrice: 429,
    inStock: true,
    image: IMAGES.plain,
    category: "Groupes Électrogènes",
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 61,
  },
  {
    id: "ge-23",
    name: "Roulettes + Poignées Kit Mobilité GE",
    brand: "Kraftpower",
    type: "Pièces & accessoires",
    price: 79,
    oldPrice: 99,
    inStock: true,
    image: IMAGES.plain,
    category: "Groupes Électrogènes",
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 50,
  },
  {
    id: "ge-24",
    name: "Batterie 12V 60Ah Démarrage GE",
    brand: "Kraft",
    type: "Pièces & accessoires",
    price: 129,
    oldPrice: 159,
    inStock: false,
    image: IMAGES.plain,
    category: "Groupes Électrogènes",
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 52,
  },

  // ── Product detail fallback (was MOCK_PRODUCT in products/[id]/page.tsx) ──
  {
    id: "ge-9500-mono-silence",
    name: "Groupe Électrogène Insonorisé 9,5 kVA Monophasé Diesel",
    brand: "Kraft",
    category: "Groupes Électrogènes",
    type: "Industriels",
    sku: "KR-GE-9500-M-INS",
    price: 3290,
    oldPrice: 4190,
    inStock: true,
    stockCount: 4,
    rating: 4.8,
    reviewCount: 52,
    image: IMAGES.mono95,
    images: [IMAGES.mono95, IMAGES.monoKraft, IMAGES.mobile10, IMAGES.tri12],
    keySpecs: [
      { icon: Lightning, label: "Puissance", value: "9,5 kVA" },
      { icon: Drop, label: "Carburant", value: "Diesel" },
      { icon: Plug, label: "Tension", value: "230 V" },
      { icon: SpeakerSimpleNone, label: "Bruit", value: "68 dB(A)" },
    ],
    description: `Le groupe électrogène Kraft 9,5 kVA Insonorisé Monophasé est conçu pour les professionnels exigeant fiabilité et discrétion au quotidien. Son caisson insonorisé haute densité ramène le niveau sonore à seulement 68 dB(A) à 7 mètres, le rendant parfaitement adapté aux chantiers en zone urbaine, aux événements extérieurs et aux installations industrielles sensibles.

Équipé d'un moteur diesel robuste à injection directe et d'un alternateur brushless sans balais, il délivre un courant stable et propre pour vos équipements électroniques. Le démarrage électrique à clé assure une mise en route instantanée, même par temps froid.`,
    features: [
      "Caisson insonorisé haute performance — 68 dB(A) à 7 m",
      "Alternateur brushless — courant propre (THD < 5%)",
      "Protection disjoncteur automatique anti-surcharge",
      "Tableau de bord : voltmètre, fréquencemètre, horamètre",
      "Réservoir 19 L avec indicateur de niveau intégré",
      "Compatible coffret ATS pour commutation automatique",
      "Poignées et roues pour transport facilité",
    ],
    fullSpecs: [
      ["Puissance nominale", "9,5 kVA / 7,6 kW"],
      ["Puissance maximale", "10,5 kVA / 8,4 kW"],
      ["Phase", "Monophasé"],
      ["Tension de sortie", "230 V"],
      ["Fréquence", "50 Hz"],
      ["Facteur de puissance", "cos φ = 0,8"],
      ["Distorsion harmonique (THD)", "< 5%"],
      ["Type de démarrage", "Électrique (clé) + manuel"],
      ["Carburant", "Diesel"],
      ["Cylindrée moteur", "708 cc"],
      ["Nombre de cylindres", "2"],
      ["Régime nominal", "3 000 tr/min"],
      ["Capacité réservoir", "19 L"],
      ["Autonomie (75% charge)", "9 h"],
      ["Niveau sonore à 7 m", "68 dB(A)"],
      ["Catégorie bruit", "Supersilencieux"],
      ["Alternateur", "Brushless sans balais"],
      ["Régulateur", "AVR électronique"],
      ["Protection IP", "IP23"],
      ["Sorties", "2× 230V (16A) + 1× 230V (32A)"],
      ["Poids", "275 kg"],
      ["Dimensions (L×l×H)", "1 100 × 640 × 820 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE / ISO 8528"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,4 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "890 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "450 KB", type: "PDF" },
      { name: "Schéma électrique", size: "1,1 MB", type: "PDF" },
    ],
    power: 9.5,
    phase: "Monophasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 97,
  },
];

// Optional (used by some components/pages)
export const SOLAIRE_TYPES = [
  "Panneaux solaires",
  "Onduleurs",
  "Batteries solaires",
  "Pompes à chaleur",
] as const;

export const MACHINES_TYPES = [
  "Nettoyeurs haute pression",
  "Balayeuses & Autolaveuses",
  "Compresseurs",
  "Equipement atelier",
  "Pompes a eau",
  "Chantiers",
  "Jardin",
  "Manutention",
] as const;

export const SOLAIRE_TYPE_ICONS = {
  "Panneaux solaires": Sun,
  Onduleurs: Plug,
  "Batteries solaires": BatteryFull,
  "Pompes à chaleur": Thermometer,
};
