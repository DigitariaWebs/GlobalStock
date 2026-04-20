"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Heart,
  ShoppingCart,
  Image as ImageIcon,
  House,
  Lightning,
  Buildings,
  Factory,
  Gear,
  SquaresFour,
  CaretRight,
  FunnelSimple,
  X,
  ArrowsClockwise,
  CheckCircle,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";





































type GeType =
  | "Domestiques"
  | "Inverters"
  | "De chantier"
  | "Industriels"
  | "Pièces & accessoires";

type Phase = "Monophasé" | "Triphasé" | "—";
type Fuel = "Diesel" | "Essence" | "—";
type Noise = "Standard" | "Silencieux" | "Supersilencieux" | "—";

type Product = {
  id: number;
  name: string;
  type: GeType;
  brand: string;
  price: number;
  oldPrice: number;
  power: number; // kVA (0 for accessoires)
  phase: Phase;
  fuel: Fuel;
  noise: Noise;
  inStock: boolean;
  image: string;
  popularity: number;
};

const TYPES: {
  label: "Tous" | GeType;
  icon: React.ComponentType<{
    size?: number;
    weight?: "regular" | "fill" | "duotone" | "bold";
    className?: string;
  }>;
  hint: string;
}[] = [
  { label: "Tous", icon: SquaresFour, hint: "Tout le catalogue" },
  { label: "Domestiques", icon: House, hint: "Pour la maison" },
  { label: "Inverters", icon: Lightning, hint: "Courant propre" },
  { label: "De chantier", icon: Buildings, hint: "Sur le terrain" },
  { label: "Industriels", icon: Factory, hint: "Haute puissance" },
  { label: "Pièces & accessoires", icon: Gear, hint: "Entretien & SAV" },
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
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "GE Diesel K9500 – 9,5 kVA Supersilencieux Monophasé",
    type: "Domestiques",
    brand: "Kraft",
    price: 1990,
    oldPrice: 2490,
    power: 9.5,
    phase: "Monophasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    inStock: true,
    image: IMAGES.mono95,
    popularity: 98,
  },
  {
    id: 2,
    name: "GE Diesel 12 kVA Triphasé Supersilencieux AVR 230V/400V",
    type: "Industriels",
    brand: "Kraft",
    price: 2490,
    oldPrice: 2990,
    power: 12,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    inStock: true,
    image: IMAGES.tri12,
    popularity: 95,
  },
  {
    id: 3,
    name: "GE Diesel 16 kVA Triphasé Silencieux",
    type: "Industriels",
    brand: "Kraft",
    price: 3990,
    oldPrice: 4490,
    power: 16,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.tri16,
    popularity: 88,
  },
  {
    id: 4,
    name: "GE Diesel 10 kVA DUALPOWER 380V/220V Mobile",
    type: "De chantier",
    brand: "Kraftpower",
    price: 1590,
    oldPrice: 1990,
    power: 10,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    inStock: true,
    image: IMAGES.mobile10,
    popularity: 84,
  },
  {
    id: 5,
    name: "GE Inverter KRAFTPOWER 4300W",
    type: "Inverters",
    brand: "Kraftpower",
    price: 899,
    oldPrice: 1199,
    power: 4.3,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.inv43,
    popularity: 91,
  },
  {
    id: 6,
    name: "GE Diesel 22 kVA Triphasé Silencieux BI-CYLINDRE",
    type: "Industriels",
    brand: "Kraft",
    price: 5490,
    oldPrice: 5990,
    power: 22,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.tri22,
    popularity: 80,
  },
  {
    id: 7,
    name: "GE Essence 3,5 kVA Domestique Portable",
    type: "Domestiques",
    brand: "Kraftpower",
    price: 549,
    oldPrice: 699,
    power: 3.5,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Standard",
    inStock: true,
    image: IMAGES.monoKraft,
    popularity: 76,
  },
  {
    id: 8,
    name: "GE Diesel 6 kVA Monophasé Silencieux Domestique",
    type: "Domestiques",
    brand: "Kraft",
    price: 1290,
    oldPrice: 1590,
    power: 6,
    phase: "Monophasé",
    fuel: "Diesel",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.mono95,
    popularity: 82,
  },
  {
    id: 9,
    name: "GE Inverter 2200W Ultra-Compact",
    type: "Inverters",
    brand: "Honda",
    price: 1190,
    oldPrice: 1390,
    power: 2.2,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Supersilencieux",
    inStock: true,
    image: IMAGES.inv43,
    popularity: 87,
  },
  {
    id: 10,
    name: "GE Inverter 3500W Digital Eco-Mode",
    type: "Inverters",
    brand: "Kraftpower",
    price: 799,
    oldPrice: 999,
    power: 3.5,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    inStock: false,
    image: IMAGES.inv43,
    popularity: 73,
  },
  {
    id: 11,
    name: "GE Diesel 8 kVA Ouvert De Chantier",
    type: "De chantier",
    brand: "ITC",
    price: 1390,
    oldPrice: 1690,
    power: 8,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    inStock: true,
    image: IMAGES.plain,
    popularity: 71,
  },
  {
    id: 12,
    name: "GE Diesel 15 kVA Ouvert De Chantier Mobile",
    type: "De chantier",
    brand: "Kraft",
    price: 2290,
    oldPrice: 2690,
    power: 15,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    inStock: true,
    image: IMAGES.mobile10,
    popularity: 68,
  },
  {
    id: 13,
    name: "GE Diesel 30 kVA Triphasé Industriel AVR",
    type: "Industriels",
    brand: "ITC",
    price: 6990,
    oldPrice: 7490,
    power: 30,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.triKraft18,
    popularity: 70,
  },
  {
    id: 14,
    name: "GE Diesel 45 kVA Triphasé Industriel Bi-Cylindre",
    type: "Industriels",
    brand: "Kraft",
    price: 9490,
    oldPrice: 10490,
    power: 45,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    inStock: false,
    image: IMAGES.tri22,
    popularity: 62,
  },
  {
    id: 15,
    name: "GE Diesel 60 kVA Triphasé Industriel Silencieux",
    type: "Industriels",
    brand: "ITC",
    price: 12990,
    oldPrice: 13990,
    power: 60,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.tri22,
    popularity: 58,
  },
  {
    id: 16,
    name: "GE Diesel 18 kVA Triphasé Supersilencieux ATS",
    type: "Industriels",
    brand: "Kraft",
    price: 4490,
    oldPrice: 4990,
    power: 18,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    inStock: true,
    image: IMAGES.triKraft18,
    popularity: 79,
  },
  {
    id: 17,
    name: "GE Diesel 25 kVA Supersilencieux Industriel",
    type: "Industriels",
    brand: "Kraft",
    price: 5990,
    oldPrice: 6490,
    power: 25,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Supersilencieux",
    inStock: true,
    image: IMAGES.tri16,
    popularity: 74,
  },
  {
    id: 18,
    name: "GE Essence 2,2 kVA Mini Portable Camping",
    type: "Domestiques",
    brand: "Honda",
    price: 489,
    oldPrice: 599,
    power: 2.2,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Silencieux",
    inStock: true,
    image: IMAGES.monoKraft,
    popularity: 69,
  },
  {
    id: 19,
    name: "GE Essence 5,5 kVA Domestique AVR Démarrage Électrique",
    type: "Domestiques",
    brand: "Kraftpower",
    price: 899,
    oldPrice: 1099,
    power: 5.5,
    phase: "Monophasé",
    fuel: "Essence",
    noise: "Standard",
    inStock: true,
    image: IMAGES.monoKraft,
    popularity: 72,
  },
  {
    id: 20,
    name: "GE Diesel 20 kVA Chantier Ouvert Robuste",
    type: "De chantier",
    brand: "Kraftpower",
    price: 3290,
    oldPrice: 3790,
    power: 20,
    phase: "Triphasé",
    fuel: "Diesel",
    noise: "Standard",
    inStock: true,
    image: IMAGES.tri16,
    popularity: 64,
  },
  {
    id: 21,
    name: "Filtre à Huile Universel Moteur Diesel",
    type: "Pièces & accessoires",
    brand: "Kraft",
    price: 19,
    oldPrice: 29,
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    inStock: true,
    image: IMAGES.plain,
    popularity: 55,
  },
  {
    id: 22,
    name: "Kit ATS 125A Commutation Automatique",
    type: "Pièces & accessoires",
    brand: "ITC",
    price: 349,
    oldPrice: 429,
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    inStock: true,
    image: IMAGES.plain,
    popularity: 61,
  },
  {
    id: 23,
    name: "Roulettes + Poignées Kit Mobilité GE",
    type: "Pièces & accessoires",
    brand: "Kraftpower",
    price: 79,
    oldPrice: 99,
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    inStock: true,
    image: IMAGES.plain,
    popularity: 50,
  },
  {
    id: 24,
    name: "Batterie 12V 60Ah Démarrage GE",
    type: "Pièces & accessoires",
    brand: "Kraft",
    price: 129,
    oldPrice: 159,
    power: 0,
    phase: "—",
    fuel: "—",
    noise: "—",
    inStock: false,
    image: IMAGES.plain,
    popularity: 52,
  },
];

const POWER_RANGES = [
  { label: "Toutes puissances", value: "all", min: -1, max: 10000 },
  { label: "< 5 kVA", value: "lt5", min: 0.1, max: 4.99 },
  { label: "5 – 10 kVA", value: "5to10", min: 5, max: 10 },
  { label: "10 – 20 kVA", value: "10to20", min: 10.01, max: 20 },
  { label: "20 – 50 kVA", value: "20to50", min: 20.01, max: 50 },
  { label: "> 50 kVA", value: "gt50", min: 50.01, max: 10000 },
];

const PHASES: Phase[] = ["Monophasé", "Triphasé"];
const FUELS: Fuel[] = ["Diesel", "Essence"];
const NOISES: Noise[] = ["Standard", "Silencieux", "Supersilencieux"];
const BRANDS = ["Kraft", "Kraftpower", "ITC", "Honda"];

type SortKey =
  | "popularity"
  | "price-asc"
  | "price-desc"
  | "power-asc"
  | "power-desc";

function formatPrice(n: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(n);
}

function GroupesElectrogenesPage() {
  const searchParams = useSearchParams();
  const paramType = searchParams.get("type") as GeType | null;
  const validTypes: GeType[] = [
    "Domestiques",
    "Inverters",
    "De chantier",
    "Industriels",
    "Pièces & accessoires",
  ];
  const [activeType, setActiveType] = useState<"Tous" | GeType>(
    paramType && validTypes.includes(paramType) ? paramType : "Tous",
  );

  useEffect(() => {
    if (paramType && validTypes.includes(paramType as GeType)) {
      setActiveType(paramType as GeType);
    } else if (!paramType) {
      setActiveType("Tous");
    }
  }, [paramType]);

  const [powerRange, setPowerRange] = useState("all");
  const [phases, setPhases] = useState<Set<Phase>>(new Set());
  const [fuels, setFuels] = useState<Set<Fuel>>(new Set());
  const [noises, setNoises] = useState<Set<Noise>>(new Set());
  const [brands, setBrands] = useState<Set<string>>(new Set());
  const [onlyStock, setOnlyStock] = useState(false);
  const [onlyPromo, setOnlyPromo] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState<SortKey>("popularity");
  const [favorites, setFavorites] = useState<Set<number>>(new Set([1, 5]));
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 15;
  const gridRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setPage(1);
  }, [
    activeType,
    powerRange,
    phases,
    fuels,
    noises,
    brands,
    onlyStock,
    onlyPromo,
    minPrice,
    maxPrice,
    sort,
  ]);
  useEffect(() => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page, activeType]);

  const toggle = <T,>(set: Set<T>, v: T, setState: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(v)) next.delete(v);
    else next.add(v);
    setState(next);
  };

  const filtered = useMemo(() => {
    const range = POWER_RANGES.find((r) => r.value === powerRange)!;
    const minP = minPrice ? Number(minPrice) : -Infinity;
    const maxP = maxPrice ? Number(maxPrice) : Infinity;
    const list = PRODUCTS.filter((p) => {
      if (activeType !== "Tous" && p.type !== activeType) return false;
      if (range.value !== "all" && (p.power < range.min || p.power > range.max))
        return false;
      if (phases.size && p.phase !== "—" && !phases.has(p.phase)) return false;
      if (phases.size && p.phase === "—") return false;
      if (fuels.size && p.fuel !== "—" && !fuels.has(p.fuel)) return false;
      if (fuels.size && p.fuel === "—") return false;
      if (noises.size && p.noise !== "—" && !noises.has(p.noise)) return false;
      if (noises.size && p.noise === "—") return false;
      if (brands.size && !brands.has(p.brand)) return false;
      if (onlyStock && !p.inStock) return false;
      if (onlyPromo && p.oldPrice <= p.price) return false;
      if (p.price < minP || p.price > maxP) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "power-asc":
        list.sort((a, b) => a.power - b.power);
        break;
      case "power-desc":
        list.sort((a, b) => b.power - a.power);
        break;
      default:
        list.sort((a, b) => b.popularity - a.popularity);
    }
    return list;
  }, [
    activeType,
    powerRange,
    phases,
    fuels,
    noises,
    brands,
    onlyStock,
    onlyPromo,
    minPrice,
    maxPrice,
    sort,
  ]);

  const typeCount = (t: "Tous" | GeType) =>
    t === "Tous"
      ? PRODUCTS.length
      : PRODUCTS.filter((p) => p.type === t).length;

  const activeFilterCount =
    (powerRange !== "all" ? 1 : 0) +
    phases.size +
    fuels.size +
    noises.size +
    brands.size +
    (onlyStock ? 1 : 0) +
    (onlyPromo ? 1 : 0) +
    (minPrice ? 1 : 0) +
    (maxPrice ? 1 : 0);

  const resetAll = () => {
    setActiveType("Tous");
    setPowerRange("all");
    setPhases(new Set());
    setFuels(new Set());
    setNoises(new Set());
    setBrands(new Set());
    setOnlyStock(false);
    setOnlyPromo(false);
    setMinPrice("");
    setMaxPrice("");
  };

  const toggleFavorite = (id: number) => {
    const next = new Set(favorites);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setFavorites(next);
  };

  return (
    <>
      {/* Page Header — breadcrumb + title (no hero) */}
      <section className="bg-background px-6 pt-8 pb-10 lg:px-10 lg:pt-12 lg:pb-14 ">
        <div className="mx-auto max-w-300">
          {/* Breadcrumb */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <h1 className="text-[32px] md:text-[40px] font-bold text-[#1a202c] leading-tight tracking-tight">
                Groupes Électrogènes
              </h1>
              <p className="text-[14px] text-muted-foreground mt-2 max-w-xl">
                Domestiques, de chantier, industriels, inverters et
                supersilencieux — toutes les puissances, monophasé et triphasé,
                diesel ou essence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Type Tiles (6 types + Tous) */}
      <section className="bg-background px-6 py-10 lg:px-10 lg:py-12">
        <div className="mx-auto max-w-300">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[18px] font-bold text-[#1a202c]">
              Parcourir par type
            </h2>
            <span className="text-[12px] text-muted-foreground hidden sm:block">
              Cliquez pour filtrer
            </span>
          </div>

          <div className="flex flex-wrap items-stretch gap-3 md:gap-4">
            {TYPES.map((t) => {
              const Icon = t.icon;
              const active = activeType === t.label;
              const count = typeCount(t.label);
              return (
                <button
                  key={t.label}
                  onClick={() => setActiveType(t.label)}
                  className={cn(
                    "flex-1 min-w-30 group relative flex flex-col items-center justify-center gap-2.5 rounded-[1.5rem] p-4 md:p-5 min-h-32 text-center transition-all border",
                    active
                      ? "bg-primary text-white border-primary shadow-[0_8px_24px_-8px_rgba(30,58,95,0.5)]"
                      : "bg-white border-border/50 hover:border-border hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)]",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-11 md:size-12 items-center justify-center rounded-full transition-colors",
                      active ? "bg-white/15" : "bg-white shadow-sm",
                    )}
                  >
                    <Icon
                      size={22}
                      weight={active ? "fill" : "duotone"}
                      className={active ? "text-white" : "text-primary"}
                    />
                  </span>

                  <span
                    className={cn(
                      "text-[12.5px] font-semibold leading-tight",
                      active ? "text-white" : "text-[#1a202c]",
                    )}
                  >
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main: horizontal filter bar + product grid */}
      <section
        ref={gridRef}
        className="bg-background px-6 pb-16 lg:px-10 lg:pb-20"
      >
        <div className="mx-auto max-w-300">
          {/* Horizontal Filter Bar */}
          <div className="bg-white rounded-[1.5rem] p-3 md:p-4 mb-6 border border-border/60">
            <div className="flex items-center gap-2 mb-2 px-2">
              <FunnelSimple size={14} weight="bold" className="text-primary" />
              <span className="text-[11.5px] font-bold text-[#1a202c] uppercase tracking-wider">
                Filtres avancés
              </span>
              {activeFilterCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-primary text-white text-[10px] font-bold">
                  {activeFilterCount}
                </span>
              )}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetAll}
                  className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                >
                  <ArrowsClockwise size={11} weight="bold" />
                  Réinitialiser
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Puissance — single select radio */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={filterTriggerClass(powerRange !== "all")}>
                    <Lightning size={14} weight="bold" />
                    {powerRange === "all"
                      ? "Puissance"
                      : POWER_RANGES.find((r) => r.value === powerRange)!.label}
                    <CaretRight
                      size={11}
                      weight="bold"
                      className="rotate-90 opacity-70"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-52">
                  <DropdownMenuLabel>Gamme de puissance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={powerRange}
                    onValueChange={setPowerRange}
                  >
                    {POWER_RANGES.map((r) => (
                      <DropdownMenuRadioItem key={r.value} value={r.value}>
                        {r.label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Phase */}
              <MultiDropdown
                label="Phase"
                values={PHASES}
                selected={phases}
                onToggle={(v) => toggle(phases, v, setPhases)}
              />

              {/* Carburant */}
              <MultiDropdown
                label="Carburant"
                values={FUELS}
                selected={fuels}
                onToggle={(v) => toggle(fuels, v, setFuels)}
              />

              {/* Niveau sonore */}
              <MultiDropdown
                label="Niveau sonore"
                values={NOISES}
                selected={noises}
                onToggle={(v) => toggle(noises, v, setNoises)}
              />

              {/* Marque */}
              <MultiDropdown
                label="Marque"
                values={BRANDS}
                selected={brands}
                onToggle={(v) => toggle(brands, v, setBrands)}
              />

              {/* Prix */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={filterTriggerClass(!!minPrice || !!maxPrice)}
                  >
                    Prix
                    {(minPrice || maxPrice) && (
                      <span className="inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-white text-primary text-[9px] font-bold">
                        {(minPrice ? 1 : 0) + (maxPrice ? 1 : 0)}
                      </span>
                    )}
                    <CaretRight
                      size={11}
                      weight="bold"
                      className="rotate-90 opacity-70"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-64 p-3">
                  <DropdownMenuLabel className="px-0 pt-0">
                    Intervalle de prix (€)
                  </DropdownMenuLabel>
                  <div
                    className="flex items-center gap-2 mt-2"
                    onKeyDown={(e) => e.stopPropagation()}
                  >
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="h-9 rounded-lg"
                    />
                    <span className="text-muted-foreground text-xs">—</span>
                    <Input
                      type="number"
                      inputMode="numeric"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="h-9 rounded-lg"
                    />
                  </div>
                  {(minPrice || maxPrice) && (
                    <button
                      onClick={() => {
                        setMinPrice("");
                        setMaxPrice("");
                      }}
                      className="mt-2.5 text-[11px] font-semibold text-primary hover:underline"
                    >
                      Effacer l&apos;intervalle
                    </button>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Toggle pills */}
              <ToggleChip
                active={onlyStock}
                onClick={() => setOnlyStock(!onlyStock)}
              >
                <CheckCircle
                  size={13}
                  weight={onlyStock ? "fill" : "regular"}
                />
                En stock
              </ToggleChip>
              <ToggleChip
                active={onlyPromo}
                onClick={() => setOnlyPromo(!onlyPromo)}
              >
                En promo
              </ToggleChip>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <p className="text-[13px] text-muted-foreground">
              <strong className="text-foreground">{filtered.length}</strong>{" "}
              résultat{filtered.length > 1 ? "s" : ""}
              {activeType !== "Tous" && (
                <>
                  {" "}
                  dans{" "}
                  <span className="text-primary font-semibold">
                    {activeType}
                  </span>
                </>
              )}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[12px] text-muted-foreground hidden sm:block">
                Trier par
              </span>
              <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                <SelectTrigger className="h-10 w-48 rounded-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularité</SelectItem>
                  <SelectItem value="price-asc">Prix — croissant</SelectItem>
                  <SelectItem value="price-desc">Prix — décroissant</SelectItem>
                  <SelectItem value="power-asc">
                    Puissance — croissante
                  </SelectItem>
                  <SelectItem value="power-desc">
                    Puissance — décroissante
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Content column */}
          <div className="min-w-0">
            {/* Active chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {powerRange !== "all" && (
                  <ActiveChip
                    label={
                      POWER_RANGES.find((r) => r.value === powerRange)!.label
                    }
                    onRemove={() => setPowerRange("all")}
                  />
                )}
                {[...phases].map((v) => (
                  <ActiveChip
                    key={v}
                    label={v}
                    onRemove={() => toggle(phases, v, setPhases)}
                  />
                ))}
                {[...fuels].map((v) => (
                  <ActiveChip
                    key={v}
                    label={v}
                    onRemove={() => toggle(fuels, v, setFuels)}
                  />
                ))}
                {[...noises].map((v) => (
                  <ActiveChip
                    key={v}
                    label={v}
                    onRemove={() => toggle(noises, v, setNoises)}
                  />
                ))}
                {[...brands].map((v) => (
                  <ActiveChip
                    key={v}
                    label={v}
                    onRemove={() => toggle(brands, v, setBrands)}
                  />
                ))}
                {onlyStock && (
                  <ActiveChip
                    label="En stock"
                    onRemove={() => setOnlyStock(false)}
                  />
                )}
                {onlyPromo && (
                  <ActiveChip
                    label="En promo"
                    onRemove={() => setOnlyPromo(false)}
                  />
                )}
                {minPrice && (
                  <ActiveChip
                    label={`Min ${minPrice} €`}
                    onRemove={() => setMinPrice("")}
                  />
                )}
                {maxPrice && (
                  <ActiveChip
                    label={`Max ${maxPrice} €`}
                    onRemove={() => setMaxPrice("")}
                  />
                )}
                <button
                  onClick={resetAll}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary hover:underline ml-1"
                >
                  <ArrowsClockwise size={12} weight="bold" />
                  Réinitialiser
                </button>
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <EmptyState onReset={resetAll} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
                {filtered
                  .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
                  .map((p) => {
                    const discount =
                      p.oldPrice > p.price
                        ? Math.round((1 - p.price / p.oldPrice) * 100)
                        : 0;
                    const fav = favorites.has(p.id);
                    return (
                      <article
                        key={p.id}
                        className="group flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-transparent hover:border-primary/20 transition-all duration-200 hover:shadow-[0_8px_32px_-8px_rgba(30,58,95,0.15)]"
                      >
                        {/* Image area */}
                        <div className="relative bg-[#f4f5f7] h-70 w-full flex items-center justify-center p-6">
                          {/* Full-area nav link — sibling of buttons, not their parent */}
                          <Link
                            href={`/products/${p.id}`}
                            className="absolute inset-0 z-1"
                            aria-label={`Voir ${p.name}`}
                          />

                          {discount > 0 && (
                            <div className="pointer-events-none absolute top-5 left-5 z-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold shadow-sm">
                              -{discount}%
                            </div>
                          )}

                          {!p.inStock && (
                            <div className="pointer-events-none absolute top-5 left-5 z-2 mt-11 px-2.5 h-6 rounded-full bg-[#1a202c] text-white text-[10px] font-bold flex items-center">
                              Épuisé
                            </div>
                          )}

                          <button
                            onClick={() => toggleFavorite(p.id)}
                            aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
                            className="absolute top-5 right-5 z-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform hover:scale-105 hover:shadow-md"
                          >
                            <Heart
                              size={18}
                              weight={fav ? "fill" : "regular"}
                              className={fav ? "text-red-500" : "text-[#a1a1aa]"}
                            />
                          </button>

                          <div className="pointer-events-none absolute bottom-4 left-5 right-5 z-2 flex flex-wrap gap-1.5">
                            {p.power > 0 && (
                              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white text-primary shadow-sm">
                                {p.power} kVA
                              </span>
                            )}
                            {p.phase !== "—" && (
                              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white text-foreground/70 shadow-sm">
                                {p.phase}
                              </span>
                            )}
                            {p.noise === "Supersilencieux" && (
                              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-primary text-white shadow-sm">
                                Supersilencieux
                              </span>
                            )}
                          </div>

                          {p.image ? (
                            <Image
                              src={p.image}
                              alt={p.name}
                              width={320}
                              height={240}
                              className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="pointer-events-none flex flex-col items-center gap-3 text-primary/30">
                              <ImageIcon size={52} weight="duotone" />
                              <span className="text-sm font-medium text-center px-4">
                                {p.name}
                              </span>
                            </div>
                          )}

                          {/* "Voir le produit" hover pill */}
                          <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-primary shadow-md backdrop-blur-sm">
                              <ArrowSquareOut size={14} />
                              Voir le produit
                            </span>
                          </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="bg-primary p-6 flex items-center justify-between gap-3">
                          <Link
                            href={`/products/${p.id}`}
                            className="flex flex-col gap-1 min-w-0 pr-2 flex-1"
                            tabIndex={-1}
                            aria-hidden="true"
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                              {p.brand} · {p.type}
                            </p>
                            <h3
                              className="text-[15px] font-medium text-white truncate"
                              title={p.name}
                            >
                              {p.name}
                            </h3>
                            <div className="flex items-baseline gap-2">
                              <span className="text-[14px] font-bold text-white">
                                {formatPrice(p.price)}
                              </span>
                              {discount > 0 && (
                                <span className="text-[11px] text-white/60 line-through">
                                  {formatPrice(p.oldPrice)}
                                </span>
                              )}
                            </div>
                          </Link>

                          <button
                            aria-label="Ajouter au panier"
                            disabled={!p.inStock}
                            className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-105 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <ShoppingCart size={20} weight="fill" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
              </div>
            )}

            {/* Pagination */}
            {Math.ceil(filtered.length / PAGE_SIZE) > 1 && (
              <div className="mt-10">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        aria-disabled={page === 1}
                        className={
                          page === 1
                            ? "pointer-events-none opacity-40"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>

                    {(() => {
                      const total = Math.ceil(filtered.length / PAGE_SIZE);
                      const pages: (number | "…")[] = [];
                      if (total <= 7) {
                        for (let i = 1; i <= total; i++) pages.push(i);
                      } else {
                        pages.push(1);
                        if (page > 3) pages.push("…");
                        for (
                          let i = Math.max(2, page - 1);
                          i <= Math.min(total - 1, page + 1);
                          i++
                        )
                          pages.push(i);
                        if (page < total - 2) pages.push("…");
                        pages.push(total);
                      }
                      return pages.map((p, i) =>
                        p === "…" ? (
                          <PaginationItem key={`ellipsis-${i}`}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        ) : (
                          <PaginationItem key={p}>
                            <PaginationLink
                              isActive={p === page}
                              onClick={() => setPage(p as number)}
                              className="cursor-pointer"
                            >
                              {p}
                            </PaginationLink>
                          </PaginationItem>
                        ),
                      );
                    })()}

                    <PaginationItem>
                      <PaginationNext
                        onClick={() =>
                          setPage((p) =>
                            Math.min(
                              Math.ceil(filtered.length / PAGE_SIZE),
                              p + 1,
                            ),
                          )
                        }
                        aria-disabled={
                          page === Math.ceil(filtered.length / PAGE_SIZE)
                        }
                        className={
                          page === Math.ceil(filtered.length / PAGE_SIZE)
                            ? "pointer-events-none opacity-40"
                            : "cursor-pointer"
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function filterTriggerClass(active: boolean) {
  return cn(
    "flex-1 inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors border",
    active
      ? "bg-primary text-white border-primary hover:bg-primary/90"
      : "bg-white text-foreground border-border hover:border-primary hover:text-primary",
  );
}

function MultiDropdown<T extends string>({
  label,
  values,
  selected,
  onToggle,
}: {
  label: string;
  values: readonly T[];
  selected: Set<T>;
  onToggle: (v: T) => void;
}) {
  const count = selected.size;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={filterTriggerClass(count > 0)}>
          {label}
          {count > 0 && (
            <span className={cn(
              "inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full text-[9px] font-bold",
              "bg-white text-primary",
            )}>
              {count}
            </span>
          )}
          <CaretRight size={11} weight="bold" className="rotate-90 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-48">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {values.map((v) => (
          <DropdownMenuCheckboxItem
            key={v}
            checked={selected.has(v)}
            onCheckedChange={() => onToggle(v)}
            onSelect={(e) => e.preventDefault()}
          >
            {v}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ToggleChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} className={filterTriggerClass(active)}>
      {children}
    </button>
  );
}

function ActiveChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="inline-flex items-center gap-1.5 px-3 h-7 rounded-full bg-secondary text-[12px] font-semibold text-primary border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors"
    >
      {label}
      <X size={12} weight="bold" />
    </button>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white rounded-[2rem] py-20 px-6 border border-border/60">
      <div className="size-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-5">
        <FunnelSimple size={26} weight="duotone" className="text-primary" />
      </div>
      <h3 className="text-[18px] font-bold text-[#1a202c] mb-2">Aucun produit ne correspond</h3>
      <p className="text-[13px] text-muted-foreground max-w-sm mb-6">
        Essayez d&apos;élargir votre recherche en modifiant la puissance, le carburant
        ou en réinitialisant les filtres.
      </p>
      <Button onClick={onReset} className="rounded-full h-10 px-5">
        <ArrowsClockwise size={14} weight="bold" />
        Réinitialiser les filtres
      </Button>
    </div>
  );
}


export default function Page() {
  return <Suspense><GroupesElectrogenesPage /></Suspense>;
}
