import { HeroSection } from "@/components/sections/hero-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { StatsSection } from "@/components/sections/stats-section"
import { AboutSection } from "@/components/sections/about-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ClientsSection /> */}
      <StatsSection />
      <AboutSection />
    </>
  )
}
