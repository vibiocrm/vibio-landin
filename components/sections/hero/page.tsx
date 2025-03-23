import { HeroSection } from "@/components/hero-section-dark";

export const HeroSectionMain = () => {
  return (
    <HeroSection
      title="Vibio CRM"
      subtitle={{
        regular: "Haz de cada conversación una ",
        gradient: "oportunidad de negocio",
      }}
      description="Impulsa ventas con un CRM conversacional. Vibio lo hace fácil."
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
  );
};
