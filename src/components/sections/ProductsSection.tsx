"use client";

import { Heart, ShoppingCart, ArrowSquareOut, ArrowRight, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

import { getProductsByCategory, getCategoryHref, type CategoryLabel } from "@/data/products";

type Category = Extract<CategoryLabel, "Groupes Électrogènes" | "Machines & Outillage Pro" | "Solaire">;

function formatPrice(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(n);
}

const CATEGORIES: Category[] = [
  "Groupes Électrogènes",
  "Solaire",
  "Machines & Outillage Pro",
];

const PAGE_SIZE = 6;

export function ProductsSection() {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [active, setActive] = useState<Category>("Groupes Électrogènes");

  const visible = getProductsByCategory(active).slice(0, PAGE_SIZE);

  return (
    <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a202c] leading-tight">
            Nos Produits
          </h2>
          <Link href={getCategoryHref(active)} className="flex items-center gap-1.5 text-[13px] font-bold text-primary hover:underline">
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
                    onClick={() => fav ? removeFromWishlist(p.id) : addToWishlist({ id: p.id, name: p.name, price: p.price, oldPrice: p.oldPrice, image: p.images[0] })}
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

                  {p.images[0] ? (
                    <Image src={p.images[0]} alt={p.name} width={320} height={240} className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-105" />
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
                    onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, image: p.images[0] })}
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
            href={getCategoryHref(active)}
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
