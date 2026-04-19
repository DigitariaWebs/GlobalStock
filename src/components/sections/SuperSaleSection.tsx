import React from "react";
import { Clock } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export function SuperSaleSection() {
  return (
    <section id="promotions" className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Side: Sale Card */}
        <div className="lg:col-span-8 bg-[#f8f9fa] rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] min-h-115">
          
          {/* Header Row: Title & Price */}
          <div className="flex justify-between items-start w-full relative z-20">
            <div>
              <h2 className="text-[32px] font-medium text-[#1a202c] mb-2 tracking-tight">Tronçonneuse Daewoo DCS6524</h2>
              <p className="text-[14px] text-[#a1a1aa] font-medium">Lame 60 cm — Promotion !</p>
              
              {/* Event Badge */}
              <div className="mt-6 mb-4">
                <span className="flex items-center gap-1.5 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] font-bold text-[#71717a] border border-[#e4e4e7] w-fit shadow-sm">
                  <Clock size={14} weight="bold" />
                  FIN DANS
                </span>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-3">
                {[
                  { value: "05", label: "Jours" },
                  { value: "14", label: "Heures" },
                  { value: "20", label: "Mins" },
                  { value: "30", label: "Secs" },
                ].map((item, i, arr) => (
                  <React.Fragment key={item.label}>
                    <div className="flex flex-col items-center min-w-8">
                      <span className="text-[28px] font-bold text-[#1a202c] leading-none mb-1">{item.value}</span>
                      <span className="text-[10px] text-[#a1a1aa] font-medium">{item.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-[22px] font-bold text-[#1a202c] leading-none self-start mt-0.5">:</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="text-right flex flex-col items-end">
              <span className="text-[#a1a1aa] line-through text-[15px] font-medium mb-1">399,00 €</span>
              <span className="text-[26px] font-bold text-[#1a202c] tracking-tight">299,00 €</span>
            </div>
          </div>

          {/* Product Image — background layer */}
          <div className="absolute bottom-0 right-0 w-[70%] h-[75%] z-0">
            <Image
              src="/SuperSaleSection/daewookettensaegedcs6524_4-standard.png"
              alt="Tronçonneuse Daewoo DCS6524"
              fill
              className="object-contain object-bottom-right"
            />
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-10 right-10 z-30">
            <Link
              href="/shop/sale"
              className="bg-primary text-white px-8 py-3 rounded-full text-[14px] font-semibold shadow-md hover:bg-primary/90 transition-colors"
            >
              Acheter
            </Link>
          </div>
        </div>

        {/* Right Side: Dual Vertical Cards */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:gap-6 min-h-115">
          
          {/* Vertical Card 1 — left half of the continuous image */}
          <div className="rounded-[3rem] relative overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 bottom-0 left-0 w-[calc(200%+1rem)] lg:w-[calc(200%+1.5rem)]">
              <Image
                src="/SuperSaleSection/ChatGPT Image Apr 17, 2026, 02_23_44 PM.png"
                alt="Équipements industriels"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-2.5 border-[1.5px] border-white/20 rounded-[2.5rem] z-20 pointer-events-none"></div>
          </div>

          {/* Vertical Card 2 — right half of the continuous image */}
          <div className="rounded-[3rem] relative overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
            <div className="absolute top-0 bottom-0 right-0 w-[calc(200%+1rem)] lg:w-[calc(200%+1.5rem)]">
              <Image
                src="/SuperSaleSection/ChatGPT Image Apr 17, 2026, 02_23_44 PM.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-2.5 border-[1.5px] border-white/20 rounded-[2.5rem] z-20 pointer-events-none"></div>
          </div>

        </div>
        
      </div>
    </section>
  );
}