"use client";

import {
  Heart,
  ShoppingBag,
  Star,
  ArrowRight,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

import { getBestSellingProducts } from "@/data/products";
const bestSellers = getBestSellingProducts();

const PAGE_SIZE = 4;
const TOTAL_PAGES = Math.ceil(bestSellers.length / PAGE_SIZE);

export function BestSellingSection() {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [page, setPage] = useState(0);

  const visible = bestSellers.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className=" px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a202c] leading-tight max-w-62.5">
            Nos Meilleures Ventes
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visible.map((product) => {
            const fav = isInWishlist(product.id);
            return (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container */}
              <div className="relative bg-[#f4f5f7] rounded-[1.5rem] h-52 sm:h-65 p-4 flex flex-col items-center justify-center overflow-hidden">
                {/* Full-area nav link — sibling of buttons */}
                <Link
                  href={`/products/${product.id}`}
                  className="absolute inset-0 z-1"
                  aria-label={`Voir ${product.name}`}
                />

                {/* Top Left Badge */}
                <div className="pointer-events-none absolute top-4 left-4 z-2">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide">
                    {product.badge ?? ""}
                  </span>
                </div>

                {/* Top Right Icons — z above link */}
                <div className="absolute top-4 right-4 z-3 flex flex-col gap-2">
                  <button
                    onClick={() => fav ? removeFromWishlist(product.id) : addToWishlist({ id: product.id, name: product.name, price: product.price, oldPrice: product.oldPrice, image: product.images[0] })}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Heart size={16} weight={fav ? "fill" : "regular"} className={fav ? "text-red-400" : "text-[#a1a1aa]"} />
                  </button>
                  <button
                    onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <ShoppingBag size={16} weight="fill" className="text-[#1a202c]" />
                  </button>
                </div>

                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={260}
                  height={200}
                  className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-[1.06]"
                />

                {/* Hover pill */}
                <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-primary shadow-md backdrop-blur-sm">
                    <ArrowSquareOut size={13} />
                    Voir le produit
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <Link href={`/products/${product.id}`} className="mt-5 px-1 block" tabIndex={-1} aria-hidden="true">
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="text-[15px] font-bold text-[#1a202c] truncate pr-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star size={14} weight="fill" className="text-[#f2a74c]" />
                    <span className="text-[13px] font-bold text-[#1a202c]">
                      {(product.rating ?? 0).toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-[#1a202c]">
                      {product.price.toLocaleString("fr-FR")} €
                    </span>
                    <span className="text-[12px] font-medium text-[#a1a1aa] line-through">
                      {product.oldPrice.toLocaleString("fr-FR")} €
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <div className="w-0.75 h-0.75 rounded-full bg-primary"></div>
                    <span className="text-[11px] font-medium text-primary">
                      {product.delivery ?? ""}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            );
          })}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-transparent relative">
          {/* Centered Pagination Dots */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            {Array.from({ length: TOTAL_PAGES }).map((_, i) =>
              i === page ? (
                <button key={i} onClick={() => setPage(i)} className="w-4.5 h-4.5 rounded-full border-2 border-[#1a202c] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#1a202c]" />
                </button>
              ) : (
                <button key={i} onClick={() => setPage(i)} className="w-1.5 h-1.5 rounded-full bg-[#1a202c]/30 hover:bg-[#1a202c] transition-colors" />
              )
            )}
          </div>

          {/* Right Navigation Arrows */}
          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-14 h-9 rounded-full flex items-center justify-center text-[#a1a1aa] border border-[#e4e4e7] bg-white hover:text-primary hover:border-primary transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={18} weight="bold" className="rotate-180" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              className="w-14 h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}