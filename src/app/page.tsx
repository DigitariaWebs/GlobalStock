import { HeroSection } from "@/components/layout/HeroSection";
import { BestSellingSection } from "@/components/sections/BestSellingSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SuperSaleSection } from "@/components/sections/SuperSaleSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BestSellingSection />
      <CategoriesSection />
      <SuperSaleSection />
      <ProductsSection />
    </main>
  );
}
