"use client";

import { Heart, ShoppingCart, ArrowSquareOut, ArrowRight, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Category = "Groupes Électrogènes" | "Machines & Outillage Pro" | "Solaire";

interface Product {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  oldPrice: number;
  image: string;
  category: Category;
  inStock: boolean;
  chips?: string[];
}

function formatPrice(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(n);
}

const products: Product[] = [
  // Groupes Électrogènes — 6
  { id: "ps-1", name: "GE Diesel K9500 – 9,5 kVA Supersilencieux Monophasé",    brand: "Kraft",      type: "Domestiques",  price: 1990, oldPrice: 2490, inStock: true,  image: "/ProductsSection/ge-9-5kva-supersilencieux-mono.png",         category: "Groupes Électrogènes", chips: ["9,5 kVA", "Monophasé", "Supersilencieux"] },
  { id: "ps-2", name: "GE Diesel 12 kVA Triphasé Supersilencieux AVR 400V",      brand: "Kraft",      type: "Industriels",  price: 2490, oldPrice: 2990, inStock: true,  image: "/ProductsSection/ge-12kva-triphase-supersilencieux.png",       category: "Groupes Électrogènes", chips: ["12 kVA", "Triphasé", "Supersilencieux"] },
  { id: "ps-3", name: "GE Diesel 16 kVA Triphasé Silencieux",                    brand: "Kraft",      type: "Industriels",  price: 3990, oldPrice: 4490, inStock: true,  image: "/ProductsSection/ge-16kva-triphase-silencieux.png",            category: "Groupes Électrogènes", chips: ["16 kVA", "Triphasé", "Silencieux"] },
  { id: "ps-4", name: "GE Diesel 10 kVA DualPower 380V/220V Mobile",            brand: "Kraftpower", type: "De chantier",  price: 1590, oldPrice: 1990, inStock: true,  image: "/ProductsSection/ge-10kva-dualpower-mobile.png",              category: "Groupes Électrogènes", chips: ["10 kVA", "Triphasé"] },
  { id: "ps-5", name: "GE Inverter KraftPower 4300W",                            brand: "Kraftpower", type: "Inverters",    price: 899,  oldPrice: 1199, inStock: true,  image: "/ProductsSection/ge-inverter-kraftpower-4300w.png",           category: "Groupes Électrogènes", chips: ["4,3 kVA", "Monophasé", "Silencieux"] },
  { id: "ps-6", name: "GE Diesel 22 kVA Triphasé Silencieux Bi-Cylindre",       brand: "Kraft",      type: "Industriels",  price: 5490, oldPrice: 5990, inStock: true,  image: "/ProductsSection/ge-22kva-triphase-silencieux-bicylindre.png", category: "Groupes Électrogènes", chips: ["22 kVA", "Triphasé", "Silencieux"] },

  // Machines & Outillage Pro — 6
  { id: "ps-7",  name: "Nettoyeur Haute Pression Diesel HPW-3200D – 320 Bars",  brand: "Kraft",      type: "Nettoyeurs HP", price: 1990, oldPrice: 2490, inStock: true,  image: "/BestSellingSection/thumb_page_15544536691-1-2-high.png",     category: "Machines & Outillage Pro", chips: ["320 Bars", "Diesel"] },
  { id: "ps-8",  name: "Tronçonneuse Daewoo DCS6524 – Lame 60 cm",             brand: "Daewoo",     type: "Tronçonneuses", price: 299,  oldPrice: 399,  inStock: true,  image: "/SuperSaleSection/daewookettensaegedcs6524_4-standard.png",  category: "Machines & Outillage Pro", chips: ["60 cm", "58 cc", "Essence"] },
  { id: "ps-9",  name: "Nettoyeur HP Thermique 250 Bars – Chantier Pro",        brand: "Kraft",      type: "Nettoyeurs HP", price: 1490, oldPrice: 1890, inStock: true,  image: "/BestSellingSection/thumb_page_15544536691-1-2-high.png",     category: "Machines & Outillage Pro", chips: ["250 Bars", "Thermique"] },
  { id: "ps-10", name: "Compresseur Silent Pro 100 L – 3 CV",                   brand: "Kraftpower", type: "Compresseurs",  price: 890,  oldPrice: 1090, inStock: true,  image: "/BestSellingSection/sans-titre-high.png",                    category: "Machines & Outillage Pro", chips: ["100 L", "3 CV", "Silencieux"] },
  { id: "ps-11", name: "Pompe à Eau Thermique 4\" – 1 400 L/min",               brand: "Kraft",      type: "Pompes à eau",  price: 590,  oldPrice: 790,  inStock: true,  image: "/BestSellingSection/9-5-kva-monophase-kraft-2-high.png",     category: "Machines & Outillage Pro", chips: ["1 400 L/min", "Essence"] },
  { id: "ps-12", name: "Tronçonneuse Thermique 52 cc – Lame 45 cm",             brand: "Kraft",      type: "Tronçonneuses", price: 249,  oldPrice: 329,  inStock: false, image: "/SuperSaleSection/daewookettensaegedcs6524_4-standard.png",  category: "Machines & Outillage Pro", chips: ["45 cm", "52 cc"] },

  // Solaire — 6
  { id: "ps-13", name: "Panneau Solaire Monocristallin 400W – Haut Rendement",  brand: "Kraft",      type: "Panneaux",      price: 290,  oldPrice: 390,  inStock: true,  image: "/ProductsSection/ge-inverter-kraftpower-4300w.png",          category: "Solaire",  chips: ["400W", "Monocristallin"] },
  { id: "ps-14", name: "Onduleur Solaire Hybride 5 kW – Monophasé",             brand: "Kraftpower", type: "Onduleurs",     price: 890,  oldPrice: 1190, inStock: true,  image: "/ProductsSection/ge-9-5kva-supersilencieux-mono.png",        category: "Solaire",  chips: ["5 kW", "Hybride", "Monophasé"] },
  { id: "ps-15", name: "Kit Solaire Autonome 3 kW – Batterie Lithium 100 Ah",   brand: "Kraft",      type: "Kits complets",  price: 2490, oldPrice: 3190, inStock: true,  image: "/ProductsSection/ge-10kva-dualpower-mobile.png",             category: "Solaire",  chips: ["3 kW", "Lithium 100 Ah"] },
  { id: "ps-16", name: "Panneau Solaire Bifacial 550W – Industriel",             brand: "Kraft",      type: "Panneaux",      price: 390,  oldPrice: 490,  inStock: true,  image: "/ProductsSection/ge-inverter-kraftpower-4300w.png",          category: "Solaire",  chips: ["550W", "Bifacial"] },
  { id: "ps-17", name: "Batterie Solaire LiFePO4 200 Ah – 25,6V",               brand: "Kraftpower", type: "Batteries",     price: 1290, oldPrice: 1690, inStock: true,  image: "/ProductsSection/ge-12kva-triphase-supersilencieux.png",     category: "Solaire",  chips: ["200 Ah", "25,6V", "LiFePO4"] },
  { id: "ps-18", name: "Régulateur MPPT 60A – Contrôleur de Charge Solaire",    brand: "Kraft",      type: "Régulateurs",   price: 190,  oldPrice: 259,  inStock: false, image: "/ProductsSection/ge-inverter-kraftpower-4300w.png",          category: "Solaire",  chips: ["60A", "MPPT"] },
];

const CATEGORIES: Category[] = ["Groupes Électrogènes", "Solaire", "Machines & Outillage Pro"];

const CATEGORY_HREF: Record<Category, string> = {
  "Groupes Électrogènes": "/groupes-electrogenes",
  "Machines & Outillage Pro": "/machines-outillage-pro",
  "Solaire":   "/solaire",
};

const PAGE_SIZE = 6;

export function ProductsSection() {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [active, setActive] = useState<Category>("Groupes Électrogènes");

  const visible = products.filter((p) => p.category === active).slice(0, PAGE_SIZE);

  return (
    <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a202c] leading-tight">
            Nos Produits
          </h2>
          <Link href={CATEGORY_HREF[active]} className="flex items-center gap-1.5 text-[13px] font-bold text-primary hover:underline">
            Voir tout <ArrowRight size={13} weight="bold" />
          </Link>
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-1 flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-[#f4f5f7] text-[#71717a] hover:bg-[#ebebeb] hover:text-[#1a202c]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {visible.map((p) => {
            const discount = p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
            const fav = isInWishlist(p.id);
            return (
              <article
                key={p.id}
                className="group flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-transparent hover:border-primary/20 transition-all duration-200 hover:shadow-[0_8px_32px_-8px_rgba(30,58,95,0.15)]"
              >
                {/* Image area */}
                <div className="relative bg-[#f4f5f7] h-70 w-full flex items-center justify-center p-6">
                  <Link href={`/products/${p.id}`} className="absolute inset-0 z-1" aria-label={`Voir ${p.name}`} />

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
                    onClick={() => fav ? removeFromWishlist(p.id) : addToWishlist({ id: p.id, name: p.name, price: p.price, oldPrice: p.oldPrice, image: p.image })}
                    aria-label={fav ? "Retirer des favoris" : "Ajouter aux favoris"}
                    className="absolute top-5 right-5 z-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform hover:scale-105 hover:shadow-md"
                  >
                    <Heart size={18} weight={fav ? "fill" : "regular"} className={fav ? "text-red-500" : "text-[#a1a1aa]"} />
                  </button>

                  {/* Spec chips */}
                  {p.chips && p.chips.length > 0 && (
                    <div className="pointer-events-none absolute bottom-4 left-5 right-5 z-2 flex flex-wrap gap-1.5">
                      {p.chips.map((chip) => (
                        <span key={chip} className="text-[10px] font-bold px-2 py-1 rounded-full bg-white text-primary shadow-sm">
                          {chip}
                        </span>
                      ))}
                    </div>
                  )}

                  {p.image ? (
                    <Image src={p.image} alt={p.name} width={320} height={240} className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <div className="pointer-events-none flex flex-col items-center gap-3 text-primary/30">
                      <ImageIcon size={52} weight="duotone" />
                      <span className="text-sm font-medium text-center px-4">{p.name}</span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-primary shadow-md backdrop-blur-sm">
                      <ArrowSquareOut size={14} />
                      Voir le produit
                    </span>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="bg-primary p-6 flex items-center justify-between gap-3">
                  <Link href={`/products/${p.id}`} className="flex flex-col gap-1 min-w-0 pr-2 flex-1" tabIndex={-1} aria-hidden="true">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                      {p.brand} · {p.type}
                    </p>
                    <h3 className="text-[15px] font-medium text-white truncate" title={p.name}>
                      {p.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[14px] font-bold text-white">{formatPrice(p.price)}</span>
                      {discount > 0 && (
                        <span className="text-[11px] text-white/60 line-through">{formatPrice(p.oldPrice)}</span>
                      )}
                    </div>
                  </Link>

                  <button
                    aria-label="Ajouter au panier"
                    disabled={!p.inStock}
                    onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.image })}
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-105 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart size={20} weight="fill" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href={CATEGORY_HREF[active]}
            className="flex items-center gap-2 bg-[#f4f5f7] hover:bg-primary hover:text-white text-[#1a202c] px-8 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200 group"
          >
            Voir tous les produits
            <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
