import { HeroSection } from "@/components/hero-section-dark";
import Github from "@/components/logos/github";
import { NavBar } from "@/components/nav-bar";
import { CallToAction } from "@/components/sections/callToAction/page";
import FeaturesSection from "@/components/sections/features/page";
import { FooterSection } from "@/components/sections/footer/page";
import { HeroSectionMain } from "@/components/sections/hero/page";
import TrustedBySection from "@/components/sections/trustedby/default";
import { Footer } from "@/components/ui/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Hexagon, Twitter } from "lucide-react";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <div>
          <HeroSectionMain />
        </div>

        <div>
          <TrustedBySection />
        </div>

        <div>
          <FeaturesSection />
        </div>

        <div>
          <CallToAction />
        </div>

        <div className="w-full">
          <FooterSection />
        </div>
      </main>
    </>
  );
}
