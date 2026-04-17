import { HeroSection } from "@/components/layout/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SuperSaleSection } from "@/components/sections/SuperSaleSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <SuperSaleSection />
      <ProductsSection />
    </main>
  );
}
