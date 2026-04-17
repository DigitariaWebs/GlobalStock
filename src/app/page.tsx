import { HeroSection } from "@/components/layout/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
    </main>
  );
}
