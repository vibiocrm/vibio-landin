import { HeroSection } from "@/components/hero-section-dark";
import Github from "@/components/logos/github";
import { NavBar } from "@/components/nav-bar";
import { CallToAction } from "@/components/sections/callToAction/page";
import FeaturesSection from "@/components/sections/features/page";
import TrustedBySection from "@/components/sections/trustedby/default";
import { Footer } from "@/components/ui/footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Hexagon, Twitter } from "lucide-react";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <HeroSection
          title="Welcome to Our Platform"
          subtitle={{
            regular: "Haz de cada conversación una ",
            gradient: "oportunidad de negocio",
          }}
          description="Impulsa ventas con CRM para WhatsApp. Vibio lo hace fácil."
          ctaText="Agenda una demo"
          ctaHref="https://wa.me/573053105505"
          bottomImage={{
            light: "/store-light.png",
            dark: "/store.png",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />

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
          <Footer
            logo={<Hexagon className="h-10 w-10" />}
            brandName="Awesome Corp"
            socialLinks={[
              {
                icon: <Twitter className="h-5 w-5" />,
                href: "https://twitter.com",
                label: "Twitter",
              },
              {
                icon: <Github className="h-5 w-5" />,
                href: "https://github.com",
                label: "GitHub",
              },
            ]}
            mainLinks={[
              { href: "/products", label: "Products" },
              { href: "/about", label: "About" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ]}
            legalLinks={[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ]}
            copyright={{
              text: "© 2024 Awesome Corp",
              license: "All rights reserved",
            }}
          />
        </div>
      </main>
    </>
  );
}
