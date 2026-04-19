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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10">
          {/* Top right: spinning circle CTA */}
          <div className="flex justify-end">
            <Link href="/groupes-electrogenes" className="group flex items-center gap-4">
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

          {/* Title — pinned independently */}
          <h1 className="absolute bottom-36 left-6 sm:left-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-xl max-w-xl">
            L'Énergie Fiable pour l'Industrie
          </h1>

          {/* Stats + Promo — pinned to bottom */}
          <div className="flex flex-col gap-6 mt-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              {/* Stats */}
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">2.5k</p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1 leading-tight">Groupes Installés</p>
                </div>
                <div className="w-px h-10 bg-white/30" />
                <div>
                  <p className="text-3xl sm:text-4xl font-bold text-white">500+</p>
                  <p className="text-xs sm:text-sm text-white/70 mt-1 leading-tight">Entreprises Partenaires</p>
                </div>
              </div>

              {/* Promo widget */}
              <div className="flex items-center justify-between gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 w-fit">
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
          </div>
        </div>
      </div>


      {/* Logos Carousel Component */}
      <div className="w-full mt-6 py-8 overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
        <p className="text-center text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
          Ils nous font confiance
        </p>
        <div className="flex w-fit animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[
            "/companies/Picsart_26-04-19_21-13-04-673.png",
            "/companies/Picsart_26-04-19_21-13-53-972.png",
            "/companies/Picsart_26-04-19_21-14-59-187.png",
            "/companies/Picsart_26-04-19_21-15-57-197.png",
            "/companies/Picsart_26-04-19_21-17-14-980.png",
            "/companies/Picsart_26-04-19_21-18-09-708.png",
            "/companies/Picsart_26-04-19_21-19-08-655.png",
            "/companies/Picsart_26-04-19_21-20-09-148.png",
            "/companies/Picsart_26-04-19_21-28-59-754.png",
            "/companies/Picsart_26-04-19_21-31-22-610.png",
            "/companies/Picsart_26-04-19_21-32-30-716.png",
            "/companies/Picsart_26-04-19_21-35-36-472.png",
          ].map((src, i) => (
            <div
              key={`set1-${i}`}
              className="flex items-center justify-center w-48 px-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img
                src={src}
                alt={`Company partner ${i + 1}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
          {[
            "/companies/Picsart_26-04-19_21-13-04-673.png",
            "/companies/Picsart_26-04-19_21-13-53-972.png",
            "/companies/Picsart_26-04-19_21-14-59-187.png",
            "/companies/Picsart_26-04-19_21-15-57-197.png",
            "/companies/Picsart_26-04-19_21-17-14-980.png",
            "/companies/Picsart_26-04-19_21-18-09-708.png",
            "/companies/Picsart_26-04-19_21-19-08-655.png",
            "/companies/Picsart_26-04-19_21-20-09-148.png",
            "/companies/Picsart_26-04-19_21-28-59-754.png",
            "/companies/Picsart_26-04-19_21-31-22-610.png",
            "/companies/Picsart_26-04-19_21-32-30-716.png",
            "/companies/Picsart_26-04-19_21-35-36-472.png",
          ].map((src, i) => (
            <div
              key={`set2-${i}`}
              className="flex items-center justify-center w-48 px-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
            >
              <img
                src={src}
                alt={`Company partner ${i + 1}`}
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
