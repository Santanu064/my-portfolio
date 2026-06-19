import { CursorSpotlight } from "@/components/animation/cursor-spotlight";
import { GsapPortfolioRuntime } from "@/components/animation/gsap-portfolio-runtime";
import { FloatingAssistant } from "@/components/assistant/floating-assistant";
import { Footer } from "@/components/layout/footer";
import { NavBar } from "@/components/layout/nav-bar";
import { AnalyticsSection } from "@/components/sections/analytics-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { TechSection } from "@/components/sections/tech-section";

export default function Home() {
  return (
    <>
      <GsapPortfolioRuntime />
      <CursorSpotlight />
      <NavBar />
      <main>
        <HeroSection />
        <TechSection />
        <CaseStudiesSection />
        <JourneySection />
        <AnalyticsSection />
        <ContactSection />
      </main>
      <FloatingAssistant />
      <Footer />
    </>
  );
}
