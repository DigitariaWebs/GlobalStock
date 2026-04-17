import { ArrowRight, ArrowUpRight, CaretLeft, CaretRight, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";














export function AchatEnGrosSection() {
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
        <div className="w-full lg:w-[60%] flex gap-8">
          {/* Main Active Card (Taller) */}
          <div className="relative w-[340px] sm:w-[400px] h-[520px] shrink-0 rounded-[2.5rem] bg-gradient-to-b from-primary/90 to-primary shadow-xl flex flex-col items-center justify-center overflow-hidden">
            <Image
              src="/AchatEnGrosSection/gemini_generated_image_mbttxmbttxmbttxm-high-uth4w1.png"
              alt="Palette Groupes Électrogènes"
              fill
              className="object-cover"
            />

            <div className="absolute flex gap-3 bottom-6 left-6 right-6">
              <div className="flex-1 bg-white/95 backdrop-blur-md rounded-[1.2rem] p-4 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[12px] font-medium text-[#71717a]">
                    01
                  </span>
                  <div className="w-8 h-[2px] bg-[#d4d4d8]"></div>
                  <span className="text-[12px] font-medium text-[#71717a] uppercase tracking-wider">
                    4 990,00 €
                  </span>
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1a202c] leading-snug line-clamp-2">
                  Palette de 4 GE Diesel Insonorisés 8.5kW – Moteur 10CV
                </h3>
              </div>

              <button className="w-14 h-14 sm:w-[60px] sm:h-[60px] shrink-0 self-end rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                <ArrowUpRight
                  size={24}
                  weight="bold"
                  className="text-primary"
                />
              </button>
            </div>
          </div>

          {/* Secondary Cards & Navigation Column */}
          <div className="flex flex-col gap-6 w-full overflow-hidden">
            {/* Smaller Cards Track */}
            <div className="flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Second Card (Shorter) */}
              <div className="relative w-[280px] sm:w-[320px] h-[380px] shrink-0 rounded-[2rem] bg-[#f8f9fa] overflow-hidden">
                <Image
                  src="/AchatEnGrosSection/gemini_generated_image_gsub2ogsub2ogsub-high.png"
                  alt="Achat en gros solaire"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third Card (Shorter) */}
              <div className="relative w-[280px] sm:w-[320px] h-[380px] shrink-0 rounded-[2rem] bg-[#f8f9fa] flex flex-col items-center justify-center overflow-hidden">
                <ImageIcon
                  size={64}
                  weight="duotone"
                  className="text-gray-300"
                />
                <div className="absolute flex gap-3 bottom-0 left-0 right-0 p-6 opacity-40"></div>
              </div>
            </div>

            {/* Navigation Controls (Below smaller cards) */}
            <div className="flex items-center gap-10 mt-6 pl-4">
              {/* Pagination Dots */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-[1.5px] border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#d4d4d8]"></div>
                <div className="w-2 h-2 rounded-full bg-[#d4d4d8]"></div>
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3">
                <button className="w-[56px] h-[36px] rounded-full flex items-center justify-center text-[#a1a1aa] border border-[#e4e4e7] bg-white hover:text-primary hover:border-primary transition-colors shadow-sm">
                  <ArrowRight size={18} weight="bold" className="rotate-180" />
                </button>
                <button className="w-[56px] h-[36px] rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors">
                  <ArrowRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
