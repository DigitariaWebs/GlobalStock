import { Heart, ShoppingCart, Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

const categories = [
  "Tous",
  "Groupes Électrogènes",
  "Outillage Pro",
  "Solutions Solaires",
  "Équipements",
];

const products = [
  {
    id: 1,
    name: "Groupe Électrogène 5kVA",
    price: "850.00 €",
    discount: "-10%",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Panneau Solaire 400W",
    price: "145.00 €",
    discount: "-15%",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Perceuse Sans Fil 18V",
    price: "95.00 €",
    discount: "-5%",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Projecteur LED 50W",
    price: "45.00 €",
    discount: "-10%",
    isFavorite: true,
  },
  {
    id: 5,
    name: "Pompe de Surface Pro",
    price: "230.00 €",
    discount: "-10%",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Batterie Solaire 12V",
    price: "120.00 €",
    discount: "-10%",
    isFavorite: false,
  },
];

export function ProductsSection() {
  return (
    <section className="px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 md:gap-10 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`whitespace-nowrap pb-2 text-[15px] font-medium transition-colors ${
                index === 1
                  ? "text-[#196a76] border-b-2 border-[#196a76]"
                  : "text-[#71717a] hover:text-[#196a76]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]"
            >
              {/* Image Area */}
              <div className="relative bg-[#f8f9fa] h-[280px] w-full flex items-center justify-center p-6">
                
                {/* Discount Badge */}
                <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-[#196a76] text-white flex items-center justify-center text-[11px] font-bold shadow-sm">
                  {product.discount}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                  {product.isFavorite ? (
                    <Heart size={18} weight="fill" className="text-red-500" />
                  ) : (
                    <Heart size={18} weight="regular" className="text-[#a1a1aa]" />
                  )}
                </button>

                {/* Placeholder Image */}
                <div className="flex flex-col items-center gap-3 text-[#196a76]/30">
                  <ImageIcon size={52} weight="duotone" />
                  <span className="text-sm font-medium text-center px-4">
                     Placeholder<br/>{product.name}
                  </span>
                </div>

              </div>

              {/* Bottom Info Area */}
              <div className="bg-[#196a76] p-6 lg:p-7 flex items-center justify-between">
                <div className="flex flex-col gap-1.5 shrink min-w-0 pr-4">
                  <h4 className="text-[15px] font-medium text-white truncate">
                    {product.name}
                  </h4>
                  <span className="text-sm text-white/80">
                    {product.price}
                  </span>
                </div>

                <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#196a76] shrink-0 transition-transform hover:scale-105 shadow-sm">
                  <ShoppingCart size={20} weight="fill" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}