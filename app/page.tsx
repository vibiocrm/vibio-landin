import { NavBar } from "@/components/nav-bar";
import { CallToAction } from "@/components/sections/callToAction/page";
import FeaturesSection from "@/components/sections/features/page";
import { FooterSection } from "@/components/sections/footer/page";
import { HeroSectionMain } from "@/components/sections/hero/page";
import PricingSection from "@/components/sections/pricing/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Vibio | CRM Conversacional para WhatsApp, Instagram y Ventas Automatizadas",
  description:
    "Vibio es el CRM conversacional que te ayuda a automatizar WhatsApp, Instagram y más. Centraliza tus chats, optimiza la atención al cliente y aumenta tus ventas sin perder el toque humano.",
  openGraph: {
    title: "Vibio CRM - Vibio lo hace fácil",
    description:
      "Vibio es el CRM conversacional que te ayuda a automatizar WhatsApp, Instagram y más. Centraliza tus chats, optimiza la atención al cliente y aumenta tus ventas sin perder el toque humano.",
    type: "website",
    url: "https://vibio.com",
    siteName: "Vibio CRM",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vibio CRM - Vibio lo hace fácil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibio CRM - Vibio lo hace fácil",
    description:
      "Vibio es el CRM conversacional que te ayuda a automatizar WhatsApp, Instagram y más. Centraliza tus chats, optimiza la atención al cliente y aumenta tus ventas sin perder el toque humano.",
  },
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <div>
          <HeroSectionMain />
        </div>

        {/* <div>
          <TrustedBySection />
        </div> */}

        <div>
          <FeaturesSection />
        </div>

        <div>
          <PricingSection />
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
