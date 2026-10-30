
import HeroSection from "@/components/sections/hero-section";
import SelectedWork from "@/components/sections/selected-work";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWork />
      <AboutSection />
      <ExperienceSection />
      </main>
  );
}
