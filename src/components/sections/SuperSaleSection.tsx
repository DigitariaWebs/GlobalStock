import React from "react";
import { Clock, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function SuperSaleSection() {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Side: Sale Card */}
        <div className="lg:col-span-8 bg-[#f8f9fa] rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] min-h-[460px]">
          
          {/* Header Row: Title & Price */}
          <div className="flex justify-between items-start w-full relative z-20">
            <div>
              <h2 className="text-[32px] font-medium text-[#1a202c] mb-2 tracking-tight">Super Promo !</h2>
              <p className="text-[14px] text-[#a1a1aa] font-medium">Jusqu'à -50%. Offre Limitée !</p>
              
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
                    <div className="flex flex-col items-center min-w-[32px]">
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
              <span className="text-[#a1a1aa] line-through text-[15px] font-medium mb-1">2 490.00 €</span>
              <span className="text-[26px] font-bold text-[#1a202c] tracking-tight">1 790.00 €</span>
            </div>
          </div>

          {/* Product Placeholder */}
          <div className="flex-1 w-full bg-gradient-to-br from-[#e8f1f2]/50 to-[#c7e5e9]/50 rounded-[2rem] mt-8 flex flex-col items-center justify-center border-2 border-dashed border-primary/20 relative z-10">
            <ImageIcon size={64} weight="duotone" className="text-primary/30 mb-4" />
            <span className="text-primary/40 font-semibold text-lg">Image du Groupe Électrogène</span>
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
        <div className="lg:col-span-4 grid grid-cols-2 gap-4 lg:gap-6 min-h-[460px]">
          
          {/* Vertical Card 1 */}
          <div className="bg-gradient-to-b from-[#e8f1f2] to-[#c7e5e9] rounded-[3rem] p-2 relative flex flex-col justify-center items-center overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
            {/* Inner Border Outline mimicking the image UI */}
            <div className="absolute inset-[10px] border-[1.5px] border-white/70 rounded-[2.5rem] z-20 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <ImageIcon size={42} weight="duotone" className="text-primary/40 mb-3" />
              <span className="text-xs font-semibold text-primary/50 text-center px-4">Installation Industrielle</span>
            </div>
          </div>

          {/* Vertical Card 2 */}
          <div className="bg-gradient-to-b from-[#e8f1f2] to-[#d8eeef] rounded-[3rem] p-2 relative flex flex-col justify-center items-center overflow-hidden shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
            {/* Inner Border Outline mimicking the image UI */}
            <div className="absolute inset-[10px] border-[1.5px] border-white/70 rounded-[2.5rem] z-20 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <ImageIcon size={42} weight="duotone" className="text-primary/40 mb-3" />
              <span className="text-xs font-semibold text-primary/50 text-center px-4">Atelier Pro</span>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}