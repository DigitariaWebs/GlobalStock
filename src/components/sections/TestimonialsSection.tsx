"use client";

import { CaretLeft, CaretRight, Star, Quotes, UserFocus } from "@phosphor-icons/react/dist/ssr";
import { useState, useRef, useEffect } from "react";









const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Directrice des Achats",
    text: "La qualité du matériel est exceptionnelle. Les contraintes de notre dernier chantier industriel étaient énormes, et leurs équipements ont parfaitement tenu la charge. Un service client irréprochable qui comprend les urgences.",
    isActive: true,
    rating: 5,
  },
  {
    id: 2,
    name: "Marc Leblanc",
    role: "Chef de Chantier BTP",
    text: "Nous avons renouvelé tout notre outillage professionnel chez eux. Rien à redire : c'est robuste, la livraison a été rapide, et le support technique répond toujours présent. Je recommande fortement pour les gros projets.",
    isActive: false,
    rating: 5,
  },
  {
    id: 3,
    name: "Lucie Dubois",
    role: "Architecte d'Intérieur",
    text: "Une sélection impressionnante et un accompagnement de A à Z. Les solutions solaires proposées nous ont permis de décrocher un marché très exigeant sur l'aspect écologique. Bravo à l'équipe !",
    isActive: false,
    rating: 4,
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
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all focus:outline-none border border-primary text-primary hover:bg-primary hover:text-white"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all focus:outline-none border border-primary text-primary hover:bg-primary hover:text-white"
            >
              <CaretRight size={20} weight="bold" />
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
                    className={`relative w-full h-auto sm:h-70 rounded-[2.5rem] p-8 sm:p-10 sm:pl-70 flex flex-col justify-center mt-25 sm:mt-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-primary text-white shadow-[0_20px_40px_-15px_rgba(17,75,86,0.3)] scale-100"
                        : "bg-white text-[#1a202c] shadow-[0_8px_30px_-10px_rgba(0,0,0,0.05)] border border-[#f0f4f5] scale-95 opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* Protruding Image */}
                    <div
                      className={`absolute -top-20 sm:-bottom-6 sm:-top-6 left-6 sm:left-8 w-40 h-40 sm:w-52.5 sm:h-auto rounded-[2rem] flex flex-col items-center justify-center border-4 border-white sm:border-[6px] shadow-xl overflow-hidden transition-all duration-500 ease-out z-20 ${
                        isActive
                          ? "opacity-100 border-white/10 sm:border-white scale-100"
                          : "opacity-60 border-white bg-gray-50 grayscale-50 group-hover:grayscale-0 group-hover:opacity-100 scale-95"
                      }`}
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-[#c7e5e9] to-[#e8f1f2]"></div>
                      <UserFocus
                        size={48}
                        weight="duotone"
                        className="text-primary/40 mb-2 relative z-10"
                      />
                      <span className="text-[10px] font-bold text-primary/50 uppercase tracking-widest text-center px-4 relative z-10">
                        Portrait Client {item.id}
                      </span>
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
