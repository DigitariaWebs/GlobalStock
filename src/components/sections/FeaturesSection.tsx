import {
  ArrowRight,
  Headset,
  Truck,
  ShieldCheck,
  Globe,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const features = [
  { icon: Globe, label: "Livraison France & Europe" },
  { icon: Truck, label: "Expédition en 5 Jours" },
  { icon: Headset, label: "Support Technique 6j/7" },
  { icon: ShieldCheck, label: "Garantie 2 Ans" },
];

export function FeaturesSection() {
  return (
    <section className=" px-6 py-12 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-300 flex flex-col gap-8">
        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-3 rounded-[2rem] bg-white p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] h-36"
            >
              <div className="relative flex items-center justify-center">
                {/* Abstract blob shape behind icon */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute text-[#e8f1f2] fill-current"
                >
                  <path
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98.1,-18,97.7,-2.8C97.4,12.4,89.9,24.4,80.7,35.4C71.5,46.4,60.6,56.5,47.9,64.2C35.2,71.9,20.8,77.3,5.5,78.6C-9.8,79.9,-26.1,75.9,-39.7,68C-53.3,60.1,-64.3,48.2,-72.7,34.7C-81.1,21.2,-87,6,-86.6,-8.8C-86.2,-23.6,-79.6,-38.1,-70.2,-50.2C-60.8,-62.3,-48.6,-72.1,-35,-79.6C-21.4,-87.1,-6.4,-92.3,7.6,-89.7C21.6,-87.1,43.2,-76.8,44.7,-76.4Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
                <Icon
                  weight="fill"
                  size={26}
                  className="text-primary relative z-10"
                />
              </div>
              <p className="text-[15px] font-semibold text-[#4a4a4a] whitespace-nowrap mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom: image + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Image */}
          <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-[#e8f1f2] to-[#c7e5e9] h-100 w-full">
            <Image
              src="/FeaturesSection/FeatureImage.png"
              alt="Groupe Électrogène 9.5 kVA"
              fill
              className="object-cover"
            />

          </div>

          {/* Text card */}
          <div className="flex flex-col justify-center rounded-[2rem] bg-white px-10 py-12 md:px-14 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
            <span className="mb-6 inline-flex w-fit items-center rounded-full bg-[#e8f1f2] px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              SPÉCIALISTE DEPUIS 2010
            </span>

            <p className="mb-10 text-lg leading-relaxed text-[#52525b]">
              GlobalStock met à votre disposition plus de 1 000 modèles de groupes
              électrogènes, solutions solaires et machines professionnelles. Nos
              équipes sélectionnent les meilleures marques du marché pour vous
              garantir fiabilité, performance et durabilité sur chaque chantier.
            </p>

            <div className="flex items-center gap-8">
              <Link
                href="/groupes-electrogenes"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Découvrir nos produits
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                href="/catalogue"
                className="text-[15px] font-semibold text-[#52525b] underline decoration-[#a1a1aa] underline-offset-4 hover:text-primary hover:decoration-primary transition-colors"
              >
                Voir le catalogue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
