import { HeroSection } from "@/components/layout/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
