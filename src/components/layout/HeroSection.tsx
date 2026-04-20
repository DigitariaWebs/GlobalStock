import { Button } from "@/components/ui/button";
import { StarFour } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";















export function HeroSection() {
  return (
    <section className="relative w-full px-6 pt-2 pb-6 lg:px-12 flex flex-col gap-6">
      {/* Hero Image Section */}
      <div className="relative w-full h-145 sm:h-170 overflow-hidden rounded-3xl shadow-lg">
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
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
          {/* Top left: promo widget */}
          <div className="flex justify-start">
            <div className="flex items-center justify-between gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4 min-w-166">
              <div className="flex flex-col gap-0.5">
                <span className="inline-flex w-fit bg-primary rounded-full px-3 py-0.5 text-white text-xs font-bold uppercase tracking-widest">Offre spéciale</span>
                <p className="text-white font-semibold text-base">Tronçonneuse Daewoo DCS6524</p>
                <p className="text-white/50 text-xs">Fin dans : 05j · 14h · 20m · 30s</p>
              </div>
              <Link href="#promotions" className="shrink-0">
                <Button className="rounded-full px-8 py-5 text-sm font-semibold bg-primary hover:bg-primary/90 text-white">
                  Voir l'offre
                </Button>
              </Link>
            </div>
          </div>

          {/* Title + description — absolute bottom left */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-xl mb-2">
              Équipements Professionnels pour Tous vos Projets
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Groupes électrogènes, solutions solaires, outillage professionnel et manutention. Une gamme complète pour les professionnels et les particuliers, livrée partout en France et en Europe.
            </p>
          </div>

          {/* Bottom right: spinning circle CTA */}
          <div className="flex flex-col gap-6 mt-auto">
            <div className="flex justify-end">
              <Link href="/groupes-electrogenes" className="group flex items-center gap-6 bg-orange-800 hover:bg-orange-700 transition-colors rounded-2xl px-8 py-4 min-w-72">
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight text-right">
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
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Logos Carousel Component */}
      <div className="w-full mt-6 py-8 overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
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
