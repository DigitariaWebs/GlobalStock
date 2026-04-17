import {
  CaretLeft,
  CaretRight,
  Heart,
  Image as ImageIcon,
  ShoppingBag,
  Star,
} from "@phosphor-icons/react/dist/ssr";

const bestSellers = [
  {
    id: 1,
    name: "Générateur Pro 3kW",
    currentPrice: "450.00 €",
    oldPrice: "500.00 €",
    discount: "-10% OFF",
    rating: "4.9",
    delivery: "2 jours ouvré",
    liked: true,
  },
  {
    id: 2,
    name: "Lampe de Chantier",
    currentPrice: "70.00 €",
    oldPrice: "90.00 €",
    discount: "-10% OFF",
    rating: "5.0",
    delivery: "2 jours ouvré",
    liked: false,
  },
  {
    id: 3,
    name: "Perforateur 18V",
    currentPrice: "90.00 €",
    oldPrice: "110.00 €",
    discount: "-10% OFF",
    rating: "5.0",
    delivery: "2 jours ouvré",
    liked: false,
  },
  {
    id: 4,
    name: "Souffleur Sans Fil",
    currentPrice: "130.00 €",
    oldPrice: "150.00 €",
    discount: "-10% OFF",
    rating: "4.9",
    delivery: "2 jours ouvré",
    liked: false,
  },
];

export function BestSellingSection() {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1a202c] leading-tight max-w-[250px]">
            Nos Meilleures Ventes
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <div key={product.id} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="relative bg-[#f4f5f7] rounded-[1.5rem] h-[260px] p-4 flex flex-col items-center justify-center transition-transform group-hover:scale-[1.02]">
                {/* Top Left Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#196a76] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wide">
                    {product.discount}
                  </span>
                </div>

                {/* Top Right Icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
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

                {/* Placeholder Image */}
                <div className="flex flex-col items-center gap-2 text-[#196a76]/20">
                  <ImageIcon size={64} weight="duotone" />
                  <span className="text-xs font-semibold">Image Produit</span>
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-5 px-1">
                {/* Title & Rating */}
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

                {/* Price & Delivery */}
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
                    <div className="w-[3px] h-[3px] rounded-full bg-[#196a76]"></div>
                    <span className="text-[11px] font-medium text-[#196a76]">
                      {product.delivery}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-transparent relative">
          {/* Centered Pagination Dots */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            {/* Active Dot */}
            <div className="w-[18px] h-[18px] rounded-full border-2 border-[#1a202c] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#1a202c]"></div>
            </div>
            {/* Inactive Dots */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a202c]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a202c]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1a202c]"></div>
          </div>

          {/* Right Navigation Arrows */}
          <div className="ml-auto flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-[#e4e4e7] flex items-center justify-center text-[#a1a1aa] hover:bg-gray-50 transition-colors">
              <CaretLeft size={16} weight="bold" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#196a76] flex items-center justify-center text-white shadow-md hover:bg-[#13535d] transition-colors">
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}