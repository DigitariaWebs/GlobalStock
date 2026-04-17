import { ArrowRight, ArrowUpRight, CaretLeft, CaretRight, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function InspirationsSection() {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[35%] flex flex-col items-start z-10 shrink-0">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#2d3748] leading-[1.25] tracking-tight">
            70+ Inspirations d'Aménagement
          </h2>
          <p className="text-[15px] text-[#71717a] mt-5 leading-relaxed">
            Robustes et performants, nos équipements professionnels sont conçus pour allier puissance et fiabilité sur tous vos chantiers.
          </p>
          <Link
            href="/inspirations"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[14px] font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Découvrir
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>

        {/* Right Carousel Area */}
        <div className="w-full lg:w-[65%] relative">
          <div className="flex gap-6 overflow-hidden">
            
            {/* Main Active Card */}
            <div className="relative w-[280px] sm:w-[340px] h-[420px] shrink-0 rounded-[2rem] bg-gradient-to-br from-primary/80 to-primary shadow-lg flex flex-col items-center justify-center">
              {/* Internal Placeholder Graphic */}
              <ImageIcon size={72} weight="duotone" className="text-white/20 absolute" />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-6 left-6 right-20 bg-white/90 backdrop-blur-md rounded-[1.2rem] p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold text-[#a1a1aa] tracking-widest">01</span>
                  <div className="w-6 h-[1px] bg-[#a1a1aa]/50"></div>
                  <span className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-wider">Chantier</span>
                </div>
                <h3 className="text-[16px] font-bold text-[#1a202c]">Projet d'Envergure</h3>
              </div>

              {/* Circular Action Button */}
              <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <ArrowUpRight size={20} weight="bold" className="text-primary" />
              </button>
            </div>

            {/* Second Card (Dimmed/Inactive Placeholder) */}
            <div className="relative w-[280px] sm:w-[340px] h-[420px] shrink-0 rounded-[2rem] bg-[#e8f1f2] flex items-center justify-center">
              <ImageIcon size={64} weight="duotone" className="text-primary/20" />
            </div>

            {/* Third Card (Partial View Placeholder) */}
            <div className="relative w-[280px] sm:w-[340px] h-[420px] shrink-0 rounded-[2rem] bg-[#f0f4f5] flex items-center justify-center">
              <ImageIcon size={64} weight="duotone" className="text-primary/10" />
            </div>
            
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 lg:pr-12">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2 pl-4">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#a1a1aa]/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#a1a1aa]/60"></div>
            </div>

            {/* Next/Prev Arrows */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-[#e4e4e7] flex items-center justify-center text-[#a1a1aa] hover:bg-gray-50 transition-colors">
                <CaretLeft size={16} weight="bold" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors">
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}