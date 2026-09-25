import { Header } from "@/components/header";
import { HeroLight } from "@/components/sections/hero-light";
import { HeroRippleExperiment } from "@/components/sections/hero-ripple-experiment";
import { InfiniteRibbon } from "@/components/sections/infinite-ribbon";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { BentoGridSection } from "@/components/sections/bento-grid-section";
import { FunctionDemoSection } from "@/components/sections/function-demo-section";
import { MissionSection } from "@/components/sections/mission-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <section id="hero">
          {/* TESTING: Ripple Effect Experiment */}
          <HeroRippleExperiment />
          {/* Original: <HeroLight /> */}
        </section>
        <InfiniteRibbon />
        <FunctionDemoSection />
        <section id="features">
          <StatsSection />
          <FeaturesSection />
        </section>
        <BentoGridSection />
        <section id="mission">
          <MissionSection />
        </section>
        <FAQSection />
        <section id="pricing">
          <CTASection />
        </section>
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
