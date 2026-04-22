"use client";

import { Button } from "@/components/ui/button";
import { StarFour } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
















export function HeroSection() {
  return (
    <section className="relative w-full flex flex-col sm:gap-6 sm:px-6 sm:pt-2 sm:pb-6 lg:px-12">
      {/* Hero Image Section */}
      <div className="relative w-full h-[75dvh] sm:h-145 lg:h-170 overflow-hidden rounded-none sm:rounded-3xl sm:shadow-lg">
        <Image
          src="/HeroSection.png"
          alt="GlobalStock — Équipements énergétiques industriels"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-10">
          {/* Top: promo widget */}
          <div className="flex justify-start">
            {/* Mobile: slim pill */}
            <button
              onClick={() => document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth", block: "center" })}
              className="sm:hidden flex items-center gap-2 bg-primary/90 backdrop-blur-md rounded-full px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
              <span className="text-white text-[11px] font-semibold">Offre spéciale · 25% de réduction — Voir l'offre</span>
            </button>

            {/* sm+: full widget */}
            <div className="hidden sm:flex items-center justify-between gap-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 min-w-170">
              <div className="flex flex-col gap-1.5">
                <span className="inline-flex w-fit bg-primary rounded-full px-3 py-0.5 text-white text-[10px] font-bold uppercase tracking-widest">Offre spéciale — 25% de réduction</span>
                <p className="text-white/50 text-xs">Fin dans : 05j · 14h · 20m · 30s</p>
              </div>
              <Button
                onClick={() => document.getElementById("promotions")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="shrink-0 rounded-full px-6 py-4 text-sm font-semibold bg-primary hover:bg-primary/90 text-white"
              >
                Voir l'offre
              </Button>
            </div>
          </div>

          {/* Mobile/tablet (< lg): title + CTAs in flow at bottom */}
          <div className="flex flex-col gap-4 lg:hidden">
            <div className="max-w-sm">
              <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight drop-shadow-xl mb-1.5">
                Équipements Professionnels pour Tous vos Projets
              </h1>
              <p className="text-white/70 text-xs sm:text-base leading-relaxed">
                Groupes électrogènes, solutions solaires, outillage professionnel et manutention.
              </p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-4 py-2.5 text-white transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-white/80">Parlez à un</span>
                  <span className="text-xs font-bold leading-tight">Expert en direct</span>
                </div>
              </a>
              <button
                onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="flex items-center gap-2 bg-orange-800 hover:bg-orange-700 transition-colors rounded-2xl px-4 py-2.5"
              >
                <span className="text-sm font-bold text-white">Nos Produits</span>
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-primary shrink-0">
                  <StarFour weight="fill" size={14} />
                </div>
              </button>
            </div>
          </div>

          {/* lg+: original layout — CTAs stacked right, title absolute */}
          <div className="hidden lg:flex flex-col gap-4 mt-auto">
            <div className="flex justify-end">
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-3 text-white transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Parlez à un</span>
                  <span className="text-sm font-bold leading-tight">Expert en direct</span>
                </div>
              </a>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="group flex items-center gap-6 bg-orange-800 hover:bg-orange-700 transition-colors rounded-2xl px-8 py-4 min-w-72"
              >
                <h2 className="text-2xl font-bold text-white leading-tight text-right">
                  Explorez nos<br />Produits
                </h2>
                <div className="relative w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible text-white/90">
                      <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      <text className="text-[10px] uppercase font-bold tracking-widest" fill="currentColor">
                        <textPath href="#circlePath" startOffset="0%">Nos Produits •</textPath>
                        <textPath href="#circlePath" startOffset="50%">Nos Produits •</textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10 text-primary">
                    <StarFour weight="fill" size={20} />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* lg+: title absolute bottom-left */}
          <div className="hidden lg:block absolute bottom-8 left-10 max-w-2xl">
            <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-xl mb-2">
              Équipements Professionnels pour Tous vos Projets
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Groupes électrogènes, solutions solaires, outillage professionnel et manutention. Une gamme complète pour les professionnels et les particuliers, livrée partout en France et en Europe.
            </p>
          </div>
        </div>
      </div>

      {/* Logos Carousel Component */}
      <div className="mx-5 sm:mx-0 mt-5 sm:mt-0 py-8 overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
        <p className="text-center text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
          Ils nous font confiance
        </p>
        <div className="flex w-fit animate-[marquee_40s_linear_infinite] hover:paused">
          {[
            { src: "/Companies/Edf.png", name: "EDF" },
            { src: "/Companies/Engie.png", name: "Engie" },
            { src: "/Companies/Eiffage.png", name: "Eiffage" },
            { src: "/Companies/TotalEnergies.png", name: "TotalEnergies" },
            { src: "/Companies/SchneiderElectric.png", name: "Schneider Electric" },
            { src: "/Companies/VinciConstruction.png", name: "Vinci Construction" },
          ].map((company, i) => (
            <div
              key={`set1-${i}`}
              className="flex items-center justify-center w-56 px-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img
                src={company.src}
                alt={company.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
          {[
            { src: "/Companies/Edf.png", name: "EDF" },
            { src: "/Companies/Engie.png", name: "Engie" },
            { src: "/Companies/Eiffage.png", name: "Eiffage" },
            { src: "/Companies/TotalEnergies.png", name: "TotalEnergies" },
            { src: "/Companies/SchneiderElectric.png", name: "Schneider Electric" },
            { src: "/Companies/VinciConstruction.png", name: "Vinci Construction" },
          ].map((company, i) => (
            <div
              key={`set2-${i}`}
              className="flex items-center justify-center w-56 px-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img
                src={company.src}
                alt={company.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `,
        }}
      />
    </section>
  );
}
