"use client";

import { CaretLeft, CaretRight, Star, Quotes, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";


const testimonials = [
  {
    id: 1,
    name: "Patrick Hotton",
    role: "Achat vérifié · 31 déc. 2025",
    text: "Comment forme à mes attentes",
    rating: 5,
    image: "https://primary.jwwb.nl/public/v/e/r/temp-bcgxbkflntsrxiueoqvk/daewookettensaegedcs6524_4-standard.jpg",
  },
  {
    id: 2,
    name: "Client",
    role: "Achat vérifié · 26 déc. 2025",
    text: "Je comptais beaucoup sur cette tronconneuse malheureusement elle n a jamais démarré. Néanmoins le vendeur m a appelé en me disant que celle ci fonctionnait parfaitement. Aïs je respecte la procédure de mise en route ? Oui mais pas pour le vendeur",
    rating: 2,
    image: "https://primary.jwwb.nl/public/v/e/r/temp-bcgxbkflntsrxiueoqvk/daewookettensaegedcs6524_4-standard.jpg",
  },
  {
    id: 3,
    name: "Sylvain",
    role: "Achat vérifié · 9 sept. 2017",
    text: "Après deux chars, c'est un cheval de travail. Je suis content de m'être éloigné de l'électricité, je n'ai qu'à m'inquiéter pour la conduite d'eau. La pression est suffisamment forte pour nettoyer complètement les éléments que je devais faire.",
    rating: 5,
    image: "https://primary.jwwb.nl/public/v/e/r/temp-bcgxbkflntsrxiueoqvk/washer-ford-234-b-copie-high.jpg",
  },
  {
    id: 4,
    name: "OR",
    role: "Achat vérifié · 15 déc. 2025",
    text: "Les batteries s'intègrent facilement dans une installation existante via l'app Growatt et Home Assistant. Très bonne impression générale — le chauffage intégré fonctionne même par grand froid. Pour le prix, je compte en racheter.",
    rating: 5,
    image: "https://primary.jwwb.nl/public/v/e/r/temp-bcgxbkflntsrxiueoqvk/hd9682f0f690b44bd86b9f259548cb917e-high.png",
  },
  {
    id: 5,
    name: "Z***r",
    role: "Achat vérifié · 16 jan. 2026",
    text: "En tant que professionnel, ce produit représente un très haut niveau de qualité. Design soigné et moderne, service excellent avec une communication rapide et fiable. Très fortement recommandé.",
    rating: 5,
    image: "https://primary.jwwb.nl/public/v/e/r/temp-bcgxbkflntsrxiueoqvk/2-high.png",
  },
  {
    id: 6,
    name: "Phil From Florida",
    role: "Achat vérifié · 28 jan. 2025",
    text: "Livré en parfait état, emballé avec soin jusqu'aux roues. Solide, fluide et conforme à la description. Les raccords Zerk pour graissage sont un vrai plus. Expérience globale au-delà de mes attentes.",
    rating: 5,
    image: "https://primary.jwwb.nl/public/v/e/r/temp-bcgxbkflntsrxiueoqvk/pte15q-8-jpg-1-high.webp",
  },
  {
    id: 7,
    name: "Terry",
    role: "Achat vérifié · 17 déc. 2023",
    text: "Facile à utiliser et à nettoyer, fait très bien le travail. Il faut laisser les bacs ouverts pour sécher car le petit rebord rend difficile l'élimination des dernières traces. 9/10",
    rating: 4,
    image: "/CategoriesSection/MachinesOutillagePro.png",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeCard = container.children[activeIndex] as HTMLElement;
      if (activeCard) {
        const scrollLeft =
          activeCard.offsetLeft -
          container.clientWidth / 2 +
          activeCard.clientWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="px-6 py-12 lg:px-10 lg:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12 z-20 relative">
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a202c] leading-[1.2] tracking-tight max-w-125">
              Ce Que Disent Nos Partenaires
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#71717a] mt-2">
              Découvrez les retours d&apos;expérience de professionnels qui nous font
              confiance.
            </p>

          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevTestimonial}
              className="w-14 h-9 rounded-full flex items-center justify-center text-[#a1a1aa] border border-[#e4e4e7] bg-white hover:text-primary hover:border-primary transition-colors shadow-sm"
            >
              <ArrowRight size={18} weight="bold" className="rotate-180" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-14 h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative w-full -mx-6 px-6 lg:-mx-10 lg:px-10">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 sm:gap-12 overflow-x-auto pb-16 sm:pb-20 pt-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory"
          >
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-end relative h-auto sm:h-90 w-85 sm:w-175 shrink-0 group cursor-pointer snap-center"
                >
                  {/* Background Card */}
                  <div
                    className={`relative w-full h-auto sm:h-80 rounded-[2.5rem] p-8 sm:p-10 sm:pl-72 flex flex-col justify-center mt-25 sm:mt-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-primary text-white shadow-[0_20px_40px_-15px_rgba(17,75,86,0.3)] scale-100"
                        : "bg-white text-[#1a202c] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] border border-[#f0f4f5] scale-95 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* Protruding Image */}
                    <div
                      className={`absolute -top-20 sm:-bottom-6 sm:-top-6 left-6 sm:left-8 w-44 h-44 sm:w-60 sm:h-80 rounded-[2rem] border-4 border-white sm:border-[6px] shadow-xl overflow-hidden transition-all duration-500 ease-out z-20 bg-white ${
                        isActive
                          ? "opacity-100 border-white/10 sm:border-white scale-100"
                          : "opacity-60 border-white grayscale-50 group-hover:grayscale-0 group-hover:opacity-100 scale-95"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={280}
                        height={320}
                        className="object-contain w-full h-full p-3"
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-5 sm:mt-0 relative z-10 flex flex-col justify-center h-full">
                      {/* Decorative Quotes watermark */}
                      <Quotes
                        size={80}
                        weight="fill"
                        className={`absolute -top-4 right-0 sm:right-4 z-0 transition-colors ${isActive ? "text-white/5" : "text-primary/5"}`}
                      />

                      <div className="relative z-10">
                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              weight="fill"
                              className={
                                i < item.rating
                                  ? "text-[#f2a74c]"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>

                        <p
                          className={`text-[14px] sm:text-[15px] leading-[1.6] mb-4 sm:mb-6 font-medium line-clamp-4 ${isActive ? "text-white/90" : "text-[#4a5568]"}`}
                        >
                          &quot;{item.text}&quot;
                        </p>

                        <div>
                          <h4
                            className={`text-[16px] sm:text-[18px] font-bold leading-none mb-1 ${isActive ? "text-white" : "text-[#1a202c]"}`}
                          >
                            {item.name}
                          </h4>
                          <p
                            className={`text-[12px] font-bold tracking-wider uppercase ${isActive ? "text-[#f2a74c]/90" : "text-primary"}`}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots indicating total count below the card */}
        <div className="flex items-center justify-center gap-2 mt-2 sm:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
