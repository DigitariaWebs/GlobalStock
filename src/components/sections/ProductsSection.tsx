import { Heart, ShoppingCart, Image as ImageIcon, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

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
    name: "GE Diesel K9500 – 9,5 kVA Supersilencieux Monophasé",
    price: "1 990.00 €",
    oldPrice: "2 490.00 €",
    discount: "-20%",
    isFavorite: true,
    image: "/ProductsSection/ge-9-5kva-supersilencieux-mono.png",
  },
  {
    id: 2,
    name: "GE Diesel 12 kVA Triphasé Supersilencieux AVR 230V/400V",
    price: "2 490.00 €",
    oldPrice: "2 990.00 €",
    discount: "-17%",
    isFavorite: false,
    image: "/ProductsSection/ge-12kva-triphase-supersilencieux.png",
  },
  {
    id: 3,
    name: "GE Diesel 16 kVA Triphasé Silencieux",
    price: "3 990.00 €",
    oldPrice: "4 490.00 €",
    discount: "-11%",
    isFavorite: false,
    image: "/ProductsSection/ge-16kva-triphase-silencieux.png",
  },
  {
    id: 4,
    name: "GE Diesel 10 kVA DUALPOWER 380V/220V Mobile",
    price: "1 590.00 €",
    oldPrice: "1 990.00 €",
    discount: "-20%",
    isFavorite: false,
    image: "/ProductsSection/ge-10kva-dualpower-mobile.png",
  },
  {
    id: 5,
    name: "GE Inverter KRAFTPOWER 4300W",
    price: "899.00 €",
    oldPrice: "1 199.00 €",
    discount: "-25%",
    isFavorite: true,
    image: "/ProductsSection/ge-inverter-kraftpower-4300w.png",
  },
  {
    id: 6,
    name: "GE Diesel 22 kVA Triphasé Silencieux BI-CYLINDRE",
    price: "5 490.00 €",
    oldPrice: "5 990.00 €",
    discount: "-8%",
    isFavorite: false,
    image: "/ProductsSection/ge-22kva-triphase-silencieux-bicylindre.png",
  },
];

export function ProductsSection() {
  return (
    <section className="bg-white px-6 py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-300">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 md:gap-10 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`whitespace-nowrap pb-2 text-[15px] font-medium transition-colors ${
                index === 1
                  ? "text-primary border-b-2 border-primary"
                  : "text-[#71717a] hover:text-primary"
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
              className="group flex flex-col rounded-[2rem] overflow-hidden bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-transparent hover:border-primary/20 transition-all duration-200 hover:shadow-[0_8px_32px_-8px_rgba(30,58,95,0.15)]"
            >
              {/* Image Area */}
              <div className="relative bg-[#f8f9fa] h-70 w-full flex items-center justify-center p-6">
                {/* Full-area nav link — sibling of buttons */}
                <Link
                  href={`/products/${product.id}`}
                  className="absolute inset-0 z-1"
                  aria-label={`Voir ${product.name}`}
                />

                {/* Discount Badge */}
                <div className="pointer-events-none absolute top-5 left-5 z-2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold shadow-sm">
                  {product.discount}
                </div>

                {/* Favorite Button — z above link */}
                <button className="absolute top-5 right-5 z-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                  {product.isFavorite ? (
                    <Heart size={18} weight="fill" className="text-red-500" />
                  ) : (
                    <Heart size={18} weight="regular" className="text-[#a1a1aa]" />
                  )}
                </button>

                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={240}
                    className="pointer-events-none object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="pointer-events-none flex flex-col items-center gap-3 text-primary/30">
                    <ImageIcon size={52} weight="duotone" />
                    <span className="text-sm font-medium text-center px-4">{product.name}</span>
                  </div>
                )}

                {/* Hover pill */}
                <div className="pointer-events-none absolute inset-0 z-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-[13px] font-semibold text-primary shadow-md backdrop-blur-sm">
                    <ArrowSquareOut size={14} />
                    Voir le produit
                  </span>
                </div>
              </div>

              {/* Bottom Info Area */}
              <div className="bg-primary p-6 lg:p-7 flex items-center justify-between">
                <Link
                  href={`/products/${product.id}`}
                  className="flex flex-col gap-1.5 shrink min-w-0 pr-4 flex-1"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <h4 className="text-[15px] font-medium text-white truncate">
                    {product.name}
                  </h4>
                  <span className="text-sm text-white/80">
                    {product.price}
                  </span>
                </Link>

                <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-105 shadow-sm">
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