import { HeroSection } from "@/components/layout/HeroSection";
import { BestSellingSection } from "@/components/sections/BestSellingSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AchatEnGrosSection } from "@/components/sections/AchatEnGrosSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SuperSaleSection } from "@/components/sections/SuperSaleSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <BestSellingSection />
      <ProductsSection />
      <AchatEnGrosSection />
      <SuperSaleSection />
      <TestimonialsSection />
    </main>
  );
}
