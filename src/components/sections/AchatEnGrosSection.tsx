"use client";

import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import { ACHAT_EN_GROS_HIGHLIGHTS } from "@/data/products";

const products = ACHAT_EN_GROS_HIGHLIGHTS;

export function AchatEnGrosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const mainProduct = products[activeIndex];
  const secondaryProducts = products.filter((_, i) => i !== activeIndex);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeIndex]);

  const prev = () => setActiveIndex((p) => (p === 0 ? products.length - 1 : p - 1));
  const next = () => setActiveIndex((p) => (p === products.length - 1 ? 0 : p + 1));

  return (
    <section className="px-6 py-12 lg:px-10 lg:py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-300 flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
        {/* Left Content Area */}
        <div className="w-full lg:w-[35%] flex flex-col items-start z-10 shrink-0">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#2d3748] leading-tight tracking-tight">
            Achat en Gros &amp; Tarifs Pro
          </h2>
          <p className="text-[15px] text-[#71717a] mt-5 leading-relaxed">
            Revendeurs, installateurs, entreprises BTP — bénéficiez de tarifs
            dégressifs, d&apos;un devis personnalisé sous 1 heure et d&apos;une
            livraison prioritaire partout en France et en Europe.
          </p>
          <Link
            href="/achat-en-gros"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[14px] font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Demander un devis
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        {/* Right Carousel Area */}
        <div className="w-full lg:w-[60%] flex flex-col lg:flex-row gap-8">
          {/* Main Active Card (Taller) */}
          <div className="relative w-full lg:w-85 xl:w-100 h-80 sm:h-100 lg:h-130 shrink-0 rounded-[2.5rem] bg-linear-to-b from-primary/90 to-primary shadow-xl flex flex-col items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mainProduct.image}
              alt={mainProduct.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {mainProduct.badge && (
              <span className="absolute top-5 right-5 z-10 bg-[#f2a74c] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                {mainProduct.badge}
              </span>
            )}

            <div className="absolute flex gap-3 bottom-6 left-6 right-6">
              <div className="flex-1 bg-white/95 backdrop-blur-md rounded-[1.2rem] p-4 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[12px] font-medium text-[#71717a]">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-0.5 bg-[#d4d4d8]"></div>
                  <span className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider">
                    {mainProduct.price}
                  </span>
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1a202c] leading-snug line-clamp-2">
                  {mainProduct.title}
                </h3>
              </div>

              <Link
                href={mainProduct.href}
                className="w-14 h-14 sm:w-15 sm:h-15 shrink-0 self-end rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              >
                <ArrowUpRight size={24} weight="bold" className="text-primary" />
              </Link>
            </div>
          </div>

          {/* Secondary Cards & Navigation Column */}
          <div className="flex flex-col gap-6 w-full overflow-hidden">
            {/* Smaller Cards Track */}
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {secondaryProducts.map((item) => {
                const realIndex = products.findIndex((p) => p.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(realIndex)}
                    className="relative w-48 sm:w-70 lg:w-80 h-60 sm:h-80 lg:h-95 shrink-0 rounded-[2rem] bg-[#f8f9fa] overflow-hidden cursor-pointer group"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {item.badge && (
                      <span className="absolute top-4 right-4 z-10 bg-[#f2a74c] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {item.badge}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls (Below smaller cards) */}
            <div className="flex items-center gap-10 mt-6 pl-4">
              {/* Pagination Dots */}
              <div className="flex items-center gap-3">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={
                      i === activeIndex
                        ? "w-6 h-6 rounded-full border-[1.5px] border-primary flex items-center justify-center"
                        : "w-2 h-2 rounded-full bg-[#d4d4d8] hover:bg-primary/60 transition-colors"
                    }
                  >
                    {i === activeIndex && (
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#a1a1aa] border border-[#e4e4e7] hover:text-primary transition-colors"
                >
                  <ArrowRight size={20} weight="bold" className="rotate-180" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors"
                >
                  <ArrowRight size={20} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
