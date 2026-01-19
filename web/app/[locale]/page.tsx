import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
    </div>
  );
}
