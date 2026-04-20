import {
  Heart,
  ShoppingBag,
  Star,
  ArrowRight,
  ArrowSquareOut,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    id: 1,
    name: "GE Diesel K9500 – 9,5 kVA Supersilencieux",
    currentPrice: "1 990.00 €",
    oldPrice: "2 490.00 €",
    discount: "Promotion !",
    rating: "4.9",
    delivery: "Expédié sous 5j",
    liked: true,
    image: "/BestSellingSection/9-5-kva-monophase-kraft-2-high.png",
  },
  {
    id: 2,
    name: "GE Diesel 12 kVA Triphasé Supersilencieux",
    currentPrice: "2 490.00 €",
    oldPrice: "2 990.00 €",
    discount: "Promotion !",
    rating: "5.0",
    delivery: "Expédié sous 5j",
    liked: false,
    image: "/BestSellingSection/kraft-18-kva-3phase-standard.png",
  },
  {
    id: 3,
    name: "GE Diesel 16 kVA Triphasé Silencieux",
    currentPrice: "3 990.00 €",
    oldPrice: "4 490.00 €",
    discount: "Épuisé",
    rating: "4.8",
    delivery: "Expédié sous 5j",
    liked: false,
    image: "/BestSellingSection/sans-titre-high.png",
  },
  {
    id: 4,
    name: "Nettoyeur HP Diesel HPW-3200D – 320 Bars",
    currentPrice: "1 990.00 €",
    oldPrice: "2 490.00 €",
    discount: "Promotion !",
    rating: "4.9",
    delivery: "Expédié sous 5j",
    liked: false,
    image: "/BestSellingSection/thumb_page_15544536691-1-2-high.png",
  },
];

export function BestSellingSection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a202c] leading-tight max-w-62.5">
            Nos Meilleures Ventes
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container */}
              <div className="relative bg-[#f4f5f7] rounded-[1.5rem] h-65 p-4 flex flex-col items-center justify-center overflow-hidden">
                {/* Full-area nav link — sibling of buttons */}
                <Link
                  href={`/products/${product.id}`}
                  className="absolute inset-0 z-1"
                  aria-label={`Voir ${product.name}`}
                />

                {/* Top Left Badge */}
                <div className="pointer-events-none absolute top-4 left-4 z-2">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide">
                    {product.discount}
                  </span>
                </div>

                {/* Top Right Icons — z above link */}
                <div className="absolute top-4 right-4 z-3 flex flex-col gap-2">
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    {product.liked ? (
                      <Heart size={16} weight="fill" className="text-red-400" />
                    ) : (
                      <Heart size={16} weight="regular" className="text-[#a1a1aa]" />
                    )}
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <ShoppingBag size={16} weight="fill" className="text-[#1a202c]" />
                  </button>
                </div>

                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={200}
                  className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-[1.06]"
                />

                {/* Hover pill */}
                <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-primary shadow-md backdrop-blur-sm">
                    <ArrowSquareOut size={13} />
                    Voir le produit
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <Link href={`/products/${product.id}`} className="mt-5 px-1 block" tabIndex={-1} aria-hidden="true">
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="text-[15px] font-bold text-[#1a202c] truncate pr-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star size={14} weight="fill" className="text-[#f2a74c]" />
                    <span className="text-[13px] font-bold text-[#1a202c]">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-[#1a202c]">
                      {product.currentPrice}
                    </span>
                    <span className="text-[12px] font-medium text-[#a1a1aa] line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <div className="w-0.75 h-0.75 rounded-full bg-primary"></div>
                    <span className="text-[11px] font-medium text-primary">
                      {product.delivery}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-transparent relative">
          {/* Centered Pagination Dots */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            {/* Active Dot */}
            <div className="w-4.5 h-4.5 rounded-full border-2 border-[#1a202c] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#1a202c]"></div>
            </div>
            {/* Inactive Dots */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a202c]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a202c]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a202c]"></div>
          </div>

          {/* Right Navigation Arrows */}
          <div className="ml-auto flex items-center gap-3">
            <button className="w-14 h-9 rounded-full flex items-center justify-center text-[#a1a1aa] border border-[#e4e4e7] bg-white hover:text-primary hover:border-primary transition-colors shadow-sm">
              <ArrowRight size={18} weight="bold" className="rotate-180" />
            </button>
            <button className="w-14 h-9 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors">
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}