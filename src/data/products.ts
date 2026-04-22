import type React from "react";

import {
  DropIcon,
  GaugeIcon,
  LightningIcon,
  PlugIcon,
  SpeakerSimpleNoneIcon,
  WrenchIcon,
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

  /** index 0 = main/thumbnail, rest = gallery */
  images: string[];

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
  isBestSeller: boolean;
  isSuperSale: boolean;
  bestSellingRank?: number;

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
  return PRODUCTS.filter((p) => p.isBestSeller).sort(
    (a, b) => (a.bestSellingRank ?? 999) - (b.bestSellingRank ?? 999),
  );
}

export function getSuperSaleProducts() {
  return PRODUCTS.filter((p) => p.isSuperSale);
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
    images: [
      "/products/groupes-electrogenes/ps-1.png",
    ],
    category: "Groupes Électrogènes",
    chips: ["9,5 kVA", "Monophasé", "Supersilencieux"],
    power: 9.5,
    phase: "Monophasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 98,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 1,
    badge: "Promotion",
    rating: 4.9,
    reviewCount: 47,
    delivery: "Expédié sous 5j",
    sku: "KR-K9500-M-SS",
    stockCount: 6,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "9,5 kVA" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: PlugIcon, label: "Tension", value: "230 V" },
      { icon: SpeakerSimpleNoneIcon, label: "Bruit", value: "68 dB(A)" },
    ],
    description: `Le groupe électrogène Kraft K9500 supersilencieux monophasé offre 9,5 kVA de puissance dans un caisson insonorisé haute densité qui réduit le bruit à seulement 68 dB(A) à 7 mètres. Idéal pour les particuliers, les artisans et les petits chantiers en zone résidentielle où le niveau sonore est réglementé.

Son moteur diesel monocylindre à démarrage électrique, couplé à un alternateur brushless avec régulateur AVR, garantit une tension stable pour vos équipements sensibles. Le réservoir de 17 L assure une autonomie de 8 heures à pleine charge.`,
    features: [
      "Caisson supersilencieux — 68 dB(A) à 7 m",
      "Alternateur brushless AVR — tension stable (±1%)",
      "Démarrage électrique à clé + démarrage manuel de secours",
      "Disjoncteur automatique anti-surcharge",
      "Réservoir 17 L avec indicateur de niveau",
      "Voltmètre, fréquencemètre et horamètre intégrés",
      "Poignées ergonomiques et roulettes de transport",
    ],
    fullSpecs: [
      ["Puissance nominale", "9,5 kVA / 7,6 kW"],
      ["Puissance maximale", "10,5 kVA / 8,4 kW"],
      ["Phase", "Monophasé"],
      ["Tension de sortie", "230 V"],
      ["Fréquence", "50 Hz"],
      ["Facteur de puissance", "cos φ = 0,8"],
      ["Type de démarrage", "Électrique + manuel"],
      ["Carburant", "Diesel"],
      ["Cylindrée moteur", "625 cc"],
      ["Capacité réservoir", "17 L"],
      ["Autonomie (charge nominale)", "8 h"],
      ["Niveau sonore à 7 m", "68 dB(A)"],
      ["Sorties", "2× 230V (16A) + 1× 230V (32A)"],
      ["Poids", "245 kg"],
      ["Dimensions (L×l×H)", "1 050 × 620 × 790 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,1 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "780 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "420 KB", type: "PDF" },
      { name: "Schéma électrique", size: "950 KB", type: "PDF" },
    ],
  },
  {
    id: "ps-2",
    name: "GE Diesel 12 kVA Triphasé Supersilencieux AVR 400V",
    brand: "Kraft",
    type: "Industriels",
    price: 2490,
    oldPrice: 2990,
    inStock: true,
    images: [
      "/products/groupes-electrogenes/ps-2.png",
    ],
    category: "Groupes Électrogènes",
    chips: ["12 kVA", "Triphasé", "Supersilencieux"],
    power: 12,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 95,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 2,
    badge: "Promotion",
    rating: 5.0,
    reviewCount: 63,
    delivery: "Expédié sous 5j",
    sku: "KR-GE12T-SS-AVR",
    stockCount: 4,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "12 kVA" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: PlugIcon, label: "Tension", value: "400 V / 230 V" },
      { icon: SpeakerSimpleNoneIcon, label: "Bruit", value: "69 dB(A)" },
    ],
    description: `Le groupe électrogène Kraft 12 kVA Triphasé Supersilencieux AVR est la solution idéale pour les entreprises, les chantiers et les installations industrielles nécessitant une alimentation triphasée fiable et silencieuse. Son régulateur AVR électronique maintient la tension à ±1% quelle que soit la charge.

Le caisson insonorisé renforcé réduit les émissions sonores à 69 dB(A) à 7 mètres. L'alternateur brushless quatre pôles délivre un courant propre avec un taux de distorsion harmonique inférieur à 5%, compatible avec tous les équipements électroniques industriels.`,
    features: [
      "Régulateur AVR électronique — tension stable ±1%",
      "Sortie triphasée 400V + monophasée 230V simultanées",
      "Alternateur brushless 4 pôles — THD < 5%",
      "Caisson supersilencieux — 69 dB(A) à 7 m",
      "Démarrage électrique à clé + démarrage manuel",
      "Tableau de bord complet : voltmètre 3 phases, fréquencemètre, horamètre",
      "Compatible coffret ATS pour commutation automatique secteur/groupe",
    ],
    fullSpecs: [
      ["Puissance nominale", "12 kVA / 9,6 kW"],
      ["Puissance maximale", "13,2 kVA / 10,6 kW"],
      ["Phase", "Triphasé"],
      ["Tension de sortie", "400 V / 230 V"],
      ["Fréquence", "50 Hz"],
      ["Facteur de puissance", "cos φ = 0,8"],
      ["Distorsion harmonique (THD)", "< 5%"],
      ["Type de démarrage", "Électrique + manuel"],
      ["Carburant", "Diesel"],
      ["Cylindrée moteur", "903 cc"],
      ["Nombre de cylindres", "2"],
      ["Capacité réservoir", "21 L"],
      ["Autonomie (charge nominale)", "9 h"],
      ["Niveau sonore à 7 m", "69 dB(A)"],
      ["Sorties", "1× 400V (32A) + 2× 230V (16A)"],
      ["Poids", "310 kg"],
      ["Dimensions (L×l×H)", "1 150 × 660 × 830 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE / ISO 8528"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,3 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "850 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "440 KB", type: "PDF" },
      { name: "Schéma électrique", size: "1,0 MB", type: "PDF" },
    ],
  },
  {
    id: "ps-3",
    name: "GE Diesel 16 kVA Triphasé Silencieux",
    brand: "Kraft",
    type: "Industriels",
    price: 3990,
    oldPrice: 4490,
    inStock: true,
    images: [
      "/products/groupes-electrogenes/ps-3.png",
    ],
    category: "Groupes Électrogènes",
    chips: ["16 kVA", "Triphasé", "Silencieux"],
    power: 16,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 88,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 3,
    badge: "Promotion",
    rating: 4.8,
    reviewCount: 28,
    delivery: "Expédié sous 5j",
    sku: "KR-GE16T-SIL",
    stockCount: 0,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "16 kVA" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: PlugIcon, label: "Tension", value: "400 V / 230 V" },
      { icon: SpeakerSimpleNoneIcon, label: "Bruit", value: "72 dB(A)" },
    ],
    description: `Le groupe électrogène Kraft 16 kVA Triphasé Silencieux est conçu pour les applications industrielles et les chantiers de moyenne envergure. Son caisson silencieux réduit le bruit à 72 dB(A) à 7 mètres, offrant un compromis optimal entre performance et discrétion pour les zones semi-urbaines.

Alimenté par un moteur diesel bicylindre haute performance, il délivre une puissance triphasée de 16 kVA avec régulation AVR électronique. Ses sorties triphasées et monophasées simultanées le rendent compatible avec tous vos équipements de chantier.`,
    features: [
      "Moteur diesel bicylindre haute performance",
      "Caisson silencieux renforcé — 72 dB(A) à 7 m",
      "Sorties triphasées 400V + monophasées 230V simultanées",
      "Régulateur AVR électronique — tension stable",
      "Démarrage électrique à clé",
      "Tableau de bord complet avec voltmètre triphasé",
      "Compatible coffret ATS pour commutation automatique",
    ],
    fullSpecs: [
      ["Puissance nominale", "16 kVA / 12,8 kW"],
      ["Puissance maximale", "17,6 kVA / 14,1 kW"],
      ["Phase", "Triphasé"],
      ["Tension de sortie", "400 V / 230 V"],
      ["Fréquence", "50 Hz"],
      ["Facteur de puissance", "cos φ = 0,8"],
      ["Type de démarrage", "Électrique + manuel"],
      ["Carburant", "Diesel"],
      ["Nombre de cylindres", "2"],
      ["Capacité réservoir", "25 L"],
      ["Autonomie (charge nominale)", "10 h"],
      ["Niveau sonore à 7 m", "72 dB(A)"],
      ["Sorties", "1× 400V (32A) + 2× 230V (16A)"],
      ["Poids", "380 kg"],
      ["Dimensions (L×l×H)", "1 260 × 700 × 880 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE / ISO 8528"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,4 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "920 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "440 KB", type: "PDF" },
      { name: "Schéma électrique", size: "1,1 MB", type: "PDF" },
    ],
  },
  {
    id: "ps-4",
    name: "GE Diesel 10 kVA DualPower 380V/220V Mobile",
    brand: "Kraftpower",
    type: "De chantier",
    price: 1590,
    oldPrice: 1990,
    inStock: true,
    images: [
      "/products/groupes-electrogenes/ps-4.png",
    ],
    category: "Groupes Électrogènes",
    chips: ["10 kVA", "Triphasé"],
    power: 10,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    popularity: 84,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 4,
    badge: "Promotion",
    rating: 4.7,
    reviewCount: 34,
    delivery: "Expédié sous 5j",
    sku: "KP-GE10T-DP-MOB",
    stockCount: 5,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "10 kVA" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: PlugIcon, label: "Tension", value: "380V / 220V" },
      { icon: SpeakerSimpleNoneIcon, label: "Type", value: "Mobile" },
    ],
    description: `Le groupe électrogène Kraftpower 10 kVA DualPower Mobile combine polyvalence et mobilité pour les chantiers et les professionnels itinérants. Sa technologie DualPower permet de basculer entre 380V triphasé et 220V monophasé selon les besoins du chantier, sans aucune modification matérielle.

Son chassis tubulaire renforcé avec roues pneumatiques et poignée de remorquage facilite son déplacement même sur terrain accidenté. Le cadre de protection ROPS assure la sécurité de la machine lors des manutentions.`,
    features: [
      "Technologie DualPower — 380V triphasé / 220V monophasé",
      "Châssis mobile avec roues pneumatiques tout-terrain",
      "Cadre de protection renforcé ROPS",
      "Démarrage électrique à clé",
      "Réservoir grande capacité — autonomie 10 h",
      "Prises industrielles CEE 16A et 32A",
      "Coupure automatique basse pression d'huile",
    ],
    fullSpecs: [
      ["Puissance nominale", "10 kVA / 8 kW"],
      ["Puissance maximale", "11 kVA / 8,8 kW"],
      ["Phase", "Triphasé / Monophasé (DualPower)"],
      ["Tension de sortie", "380 V / 220 V"],
      ["Fréquence", "50 Hz"],
      ["Type de démarrage", "Électrique + manuel"],
      ["Carburant", "Diesel"],
      ["Capacité réservoir", "22 L"],
      ["Autonomie (charge nominale)", "10 h"],
      ["Mobilité", "Roues pneumatiques + poignée remorquage"],
      ["Sorties", "1× CEE 32A (380V) + 2× CEE 16A (220V)"],
      ["Poids", "290 kg"],
      ["Dimensions (L×l×H)", "1 200 × 720 × 960 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,0 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "810 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "390 KB", type: "PDF" },
    ],
  },
  {
    id: "ps-5",
    name: "GE Inverter KraftPower 4300W",
    brand: "Kraftpower",
    type: "Inverters",
    price: 899,
    oldPrice: 1199,
    inStock: true,
    images: [
      "/products/groupes-electrogenes/ps-5.png",
    ],
    category: "Groupes Électrogènes",
    chips: ["4,3 kVA", "Monophasé", "Silencieux"],
    power: 4.3,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    popularity: 91,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 5,
    badge: "Promotion",
    rating: 4.8,
    reviewCount: 89,
    delivery: "Expédié sous 3j",
    sku: "KP-INV-4300W",
    stockCount: 12,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "4 300 W" },
      { icon: DropIcon, label: "Carburant", value: "Essence" },
      { icon: PlugIcon, label: "Tension", value: "230 V" },
      { icon: SpeakerSimpleNoneIcon, label: "Bruit", value: "58 dB(A)" },
    ],
    description: `Le groupe électrogène Inverter KraftPower 4300W est le choix idéal pour les utilisateurs exigeant un courant parfaitement stable pour leurs équipements électroniques sensibles — camping-cars, ordinateurs, matériel médical portable, instruments de musique. Sa technologie onduleur produit un courant sinusoïdal pur avec un THD inférieur à 3%.

Ultra-compact et silencieux (58 dB(A) à 7m), il consomme jusqu'à 40% de carburant en moins grâce au mode Eco-Throttle qui adapte le régime moteur à la charge réelle. Sa conception fermée le rend insensible aux intempéries légères.`,
    features: [
      "Technologie Inverter — courant sinusoïdal pur (THD < 3%)",
      "Mode Eco-Throttle — économie carburant jusqu'à 40%",
      "Ultra-silencieux — 58 dB(A) à 7 m",
      "Démarrage facile par lanceur récoil ergonomique",
      "Prise USB 5V intégrée pour charge directe",
      "Protection surcharge, surtension et basse huile",
      "Design compact — 45 kg, transportable à une personne",
    ],
    fullSpecs: [
      ["Puissance nominale", "3 800 W"],
      ["Puissance maximale", "4 300 W"],
      ["Phase", "Monophasé"],
      ["Tension de sortie", "230 V"],
      ["Distorsion harmonique (THD)", "< 3%"],
      ["Fréquence", "50 Hz"],
      ["Type de démarrage", "Lanceur récoil"],
      ["Carburant", "Essence sans plomb"],
      ["Cylindrée moteur", "212 cc"],
      ["Capacité réservoir", "7,5 L"],
      ["Autonomie (charge nominale)", "7 h"],
      ["Niveau sonore à 7 m", "58 dB(A)"],
      ["Sorties", "2× 230V (16A) + 1× USB 5V"],
      ["Poids", "45 kg"],
      ["Dimensions (L×l×H)", "560 × 380 × 490 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "1,6 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "620 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "350 KB", type: "PDF" },
    ],
  },
  {
    id: "ps-6",
    name: "GE Diesel 22 kVA Triphasé Silencieux Bi-Cylindre",
    brand: "Kraft",
    type: "Industriels",
    price: 5490,
    oldPrice: 5990,
    inStock: true,
    images: [
      "/products/groupes-electrogenes/ps-6.png",
    ],
    category: "Groupes Électrogènes",
    chips: ["22 kVA", "Triphasé", "Silencieux"],
    power: 22,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    popularity: 80,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 6,
    badge: "Promotion",
    rating: 4.9,
    reviewCount: 19,
    delivery: "Expédié sous 7j",
    sku: "KR-GE22T-SIL-BI",
    stockCount: 2,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "22 kVA" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: PlugIcon, label: "Tension", value: "400 V / 230 V" },
      { icon: SpeakerSimpleNoneIcon, label: "Bruit", value: "74 dB(A)" },
    ],
    description: `Le groupe électrogène Kraft 22 kVA Triphasé Silencieux Bi-Cylindre est une solution industrielle puissante pour les sites exigeant une alimentation électrique triphasée continue. Son moteur diesel bi-cylindre en V garantit une durabilité et une fiabilité exceptionnelles pour un usage intensif.

Avec son caisson silencieux haute densité ramenant le bruit à 74 dB(A), il convient parfaitement aux chantiers urbains, aux événements extérieurs et aux installations industrielles temporaires. Le régulateur AVR assure une tension parfaitement stable même lors de démarrages de charges lourdes.`,
    features: [
      "Moteur diesel bi-cylindre en V — robustesse industrielle",
      "Caisson silencieux haute densité — 74 dB(A) à 7 m",
      "Régulateur AVR électronique — démarrage charges lourdes",
      "Sorties triphasées et monophasées simultanées",
      "Démarrage électrique 12V avec batterie intégrée",
      "Réservoir grande capacité — autonomie 12 h",
      "Compatible ATS pour commutation automatique secteur",
    ],
    fullSpecs: [
      ["Puissance nominale", "22 kVA / 17,6 kW"],
      ["Puissance maximale", "24 kVA / 19,2 kW"],
      ["Phase", "Triphasé"],
      ["Tension de sortie", "400 V / 230 V"],
      ["Fréquence", "50 Hz"],
      ["Facteur de puissance", "cos φ = 0,8"],
      ["Type de démarrage", "Électrique 12V + manuel"],
      ["Carburant", "Diesel"],
      ["Nombre de cylindres", "2 (en V)"],
      ["Capacité réservoir", "35 L"],
      ["Autonomie (charge nominale)", "12 h"],
      ["Niveau sonore à 7 m", "74 dB(A)"],
      ["Sorties", "1× 400V (63A) + 2× 230V (32A)"],
      ["Poids", "560 kg"],
      ["Dimensions (L×l×H)", "1 450 × 780 × 1 020 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE / ISO 8528"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,8 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "1,1 MB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "480 KB", type: "PDF" },
      { name: "Schéma électrique", size: "1,3 MB", type: "PDF" },
    ],
  },

  // Achat en gros
  {
    id: "ag-palette-4-inverter-7600w",
    name: "Palette de 4 Groupes Électrogènes Inverter KRAFTPOWER 7600W",
    brand: "GlobalStock",
    type: "Palettes",
    price: 5990,
    oldPrice: 6990,
    inStock: true,
    images: [
      "/AchatEnGrosSection/gemini_generated_image_mbttxmbttxmbttxm-high-uth4w1.png",
    ],
    category: "Achat en gros",
    chips: ["Palette x4", "Inverter", "7600W"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 88,
    isBestSeller: false,
    isSuperSale: false,
    rating: 4.8,
    reviewCount: 8,
    delivery: "Livraison palettisée sous 10j",
    sku: "GS-AG-INV7600-P4",
    stockCount: 3,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance unitaire", value: "7 600 W" },
      { icon: GaugeIcon, label: "Quantité", value: "4 unités" },
      { icon: DropIcon, label: "Carburant", value: "Essence" },
      { icon: WrenchIcon, label: "Livraison", value: "Palettisée" },
    ],
    description: `Cette palette de 4 groupes électrogènes Inverter KRAFTPOWER 7600W est une offre exclusive destinée aux revendeurs, grossistes et entreprises souhaitant constituer un stock. Chaque unité est un groupe Inverter technologie avancée produisant un courant sinusoïdal pur (THD < 3%), compatible avec tout équipement électronique sensible.

La palette est livrée cerclée et filmée sur palette bois, prête pour la manutention par chariot élévateur. Chaque groupe est emballé individuellement dans son carton d'origine avec accessoires complets.`,
    features: [
      "4 groupes Inverter 7600W en palette livrée cerclée et filmée",
      "Courant sinusoïdal pur — THD < 3% — équipements sensibles",
      "Mode Eco-Throttle — économie carburant jusqu'à 40%",
      "Démarrage électrique inclus sur chaque unité",
      "Emballage d'origine individuel avec accessoires complets",
      "Livraison palettisée par transporteur spécialisé",
      "Tarif dégressif disponible sur demande pour grandes quantités",
    ],
    fullSpecs: [
      ["Nombre d'unités", "4 groupes"],
      ["Puissance nominale par unité", "6 500 W"],
      ["Puissance maximale par unité", "7 600 W"],
      ["Technologie", "Inverter — courant sinusoïdal pur"],
      ["THD", "< 3%"],
      ["Carburant", "Essence sans plomb"],
      ["Démarrage", "Électrique + lanceur récoil"],
      ["Mode économie", "Eco-Throttle"],
      ["Conditionnement", "Palette bois cerclée et filmée"],
      ["Poids palette totale", "≈ 240 kg"],
      ["Garantie par unité", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Fiche produit palette", size: "980 KB", type: "PDF" },
      { name: "Bon de commande grossiste", size: "420 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "380 KB", type: "PDF" },
    ],
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
    images: [
      "/AchatEnGrosSection/gemini_generated_image_gsub2ogsub2ogsub-high.png",
    ],
    category: "Achat en gros",
    chips: ["Palette x4", "Diesel", "8,1 kVA"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 82,
    isBestSeller: false,
    isSuperSale: false,
    badge: "Épuisé",
    rating: 4.7,
    reviewCount: 5,
    delivery: "Rupture de stock",
    sku: "GS-AG-DW8100-P4",
    stockCount: 0,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance unitaire", value: "8,1 kVA" },
      { icon: GaugeIcon, label: "Quantité", value: "4 unités" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: SpeakerSimpleNoneIcon, label: "Type", value: "Silencieux" },
    ],
    description: `La palette de 4 groupes électrogènes Diesel Daewoo DDAE10500DSE-3G 8,1 kVA est une offre professionnelle pour revendeurs et entreprises. Le modèle DDAE10500DSE-3G est un groupe Dual Power permettant de basculer entre 380V triphasé et 220V monophasé, avec caisson silencieux intégré.

Actuellement en rupture de stock. Ce produit est disponible sur commande avec délai de réapprovisionnement de 4 à 6 semaines. Contactez notre service commercial pour toute commande en volume.`,
    features: [
      "4 groupes Diesel Daewoo DDAE10500DSE-3G en palette",
      "Technologie Dual Power — 380V triphasé / 220V monophasé",
      "Caisson silencieux intégré — usage urbain",
      "Démarrage électrique avec tableau de bord complet",
      "Moteur diesel Daewoo robustesse industrielle",
      "Emballage d'origine individuel avec accessoires",
      "Disponible sur commande — délai 4 à 6 semaines",
    ],
    fullSpecs: [
      ["Nombre d'unités", "4 groupes"],
      ["Puissance nominale par unité", "8,1 kVA"],
      ["Technologie", "Dual Power (380V/220V)"],
      ["Marque moteur", "Daewoo"],
      ["Référence", "DDAE10500DSE-3G"],
      ["Carburant", "Diesel"],
      ["Type caisson", "Silencieux"],
      ["Démarrage", "Électrique"],
      ["Conditionnement", "Palette bois cerclée et filmée"],
      ["Garantie par unité", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Fiche produit palette", size: "1,0 MB", type: "PDF" },
      { name: "Bon de commande grossiste", size: "420 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "390 KB", type: "PDF" },
    ],
  },
  {
    id: "ag-palette-4-diesel-insonorise-8500w",
    name: "Palette de 4 GE Diesel Insonorisés 8.5kW – Moteur 10CV",
    brand: "GlobalStock",
    type: "Palettes",
    price: 4990,
    oldPrice: 5990,
    inStock: true,
    images: [
      "/AchatEnGrosSection/whatsapp-image-2025-11-09-12-36-30_66ac7cba-high.png",
    ],
    category: "Achat en gros",
    chips: ["Palette x4", "Diesel", "Insonorisé"],
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    popularity: 80,
    isBestSeller: false,
    isSuperSale: false,
    rating: 4.8,
    reviewCount: 6,
    delivery: "Livraison palettisée sous 10j",
    sku: "GS-AG-INS8500-P4",
    stockCount: 2,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance unitaire", value: "8,5 kW" },
      { icon: GaugeIcon, label: "Quantité", value: "4 unités" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: SpeakerSimpleNoneIcon, label: "Type", value: "Insonorisé" },
    ],
    description: `La palette de 4 groupes électrogènes diesel insonorisés 8,5 kW avec moteur 10CV est une offre grossiste destinée aux revendeurs et entreprises de location de matériel. Chaque groupe est équipé d'un caisson insonorisé haute densité et d'un moteur diesel 10CV robuste pour un usage intensif sur chantier.

Ces groupes sont particulièrement adaptés aux chantiers en zone urbaine où les contraintes sonores sont strictes. La palette livrée cerclée et filmée sur palette bois est prête pour manutention par chariot.`,
    features: [
      "4 groupes diesel 8,5 kW insonorisés en palette",
      "Moteur diesel 10CV — robustesse usage intensif",
      "Caisson insonorisé haute densité — zones urbaines",
      "Tableau de bord complet avec horamètre",
      "Réservoir grande capacité — autonomie prolongée",
      "Emballage d'origine individuel avec accessoires",
      "Livraison palettisée par transporteur spécialisé",
    ],
    fullSpecs: [
      ["Nombre d'unités", "4 groupes"],
      ["Puissance nominale par unité", "8,5 kW"],
      ["Puissance moteur", "10 CV"],
      ["Carburant", "Diesel"],
      ["Type caisson", "Insonorisé haute densité"],
      ["Démarrage", "Électrique"],
      ["Réservoir", "18 L"],
      ["Conditionnement", "Palette bois cerclée et filmée"],
      ["Poids palette totale", "≈ 920 kg"],
      ["Garantie par unité", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE"],
    ],
    documents: [
      { name: "Fiche produit palette", size: "1,1 MB", type: "PDF" },
      { name: "Bon de commande grossiste", size: "420 KB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "400 KB", type: "PDF" },
    ],
  },

  // ── BestSelling: products that weren't in ProductsSection ────────────────
  {
    id: "ps-7",
    name: "GE Diesel 20 kVA Triphasé Supersilencieux",
    brand: "Kraft",
    type: "Industriels",
    price: 4990,
    oldPrice: 5990,
    inStock: true,
    images: [
      "/products/groupes-electrogenes/ps-7.png",
    ],
    category: "Groupes Électrogènes",
    power: 20,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    popularity: 89,
    isBestSeller: true,
    isSuperSale: false,
    bestSellingRank: 6,
    badge: "Nouveau",
    rating: 4.9,
    reviewCount: 35,
    delivery: "Expédié sous 7j",
    sku: "KR-GE20T-SS",
    stockCount: 3,
    keySpecs: [
      { icon: LightningIcon, label: "Puissance", value: "20 kVA" },
      { icon: DropIcon, label: "Carburant", value: "Diesel" },
      { icon: PlugIcon, label: "Tension", value: "400 V / 230 V" },
      { icon: SpeakerSimpleNoneIcon, label: "Bruit", value: "70 dB(A)" },
    ],
    description: `Le groupe électrogène Kraft 20 kVA Triphasé Supersilencieux est la solution industrielle idéale pour les entreprises, hôtels, cliniques et grandes surfaces nécessitant une alimentation de secours puissante et silencieuse. Son caisson supersilencieux maintient le bruit à 70 dB(A) à 7 mètres.

Équipé d'un moteur diesel bi-cylindre et d'un alternateur brushless AVR, il délivre une puissance triphasée de 20 kVA avec une stabilité de tension à ±1%. Le système de démarrage automatique ATS-ready permet une commutation instantanée lors d'une coupure réseau.`,
    features: [
      "20 kVA triphasé — puissance industrielle",
      "Caisson supersilencieux — 70 dB(A) à 7 m",
      "Alternateur brushless AVR — tension ±1%",
      "Prêt pour coffret ATS — commutation automatique",
      "Démarrage électrique 12V avec batterie intégrée",
      "Tableau de bord : voltmètre 3 phases, fréquencemètre, horamètre",
      "Réservoir grande capacité — autonomie 12 h",
    ],
    fullSpecs: [
      ["Puissance nominale", "20 kVA / 16 kW"],
      ["Puissance maximale", "22 kVA / 17,6 kW"],
      ["Phase", "Triphasé"],
      ["Tension de sortie", "400 V / 230 V"],
      ["Fréquence", "50 Hz"],
      ["Distorsion harmonique (THD)", "< 5%"],
      ["Type de démarrage", "Électrique 12V + manuel"],
      ["Carburant", "Diesel"],
      ["Nombre de cylindres", "2"],
      ["Capacité réservoir", "32 L"],
      ["Autonomie (charge nominale)", "12 h"],
      ["Niveau sonore à 7 m", "70 dB(A)"],
      ["Sorties", "1× 400V (63A) + 2× 230V (32A)"],
      ["Poids", "490 kg"],
      ["Dimensions (L×l×H)", "1 380 × 740 × 970 mm"],
      ["Garantie", "2 ans pièces & main d'œuvre"],
      ["Normes", "CE / ISO 8528"],
    ],
    documents: [
      { name: "Manuel d'utilisation", size: "2,6 MB", type: "PDF" },
      { name: "Fiche technique complète", size: "1,0 MB", type: "PDF" },
      { name: "Certificat de conformité CE", size: "460 KB", type: "PDF" },
      { name: "Schéma électrique", size: "1,2 MB", type: "PDF" },
    ],
  },

];
