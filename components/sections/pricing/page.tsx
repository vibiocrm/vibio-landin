"use client";

import { PricingCard } from "./components/PricingCard";

export default function PricingSection() {
  const pricingData = [
    {
      plan: "Básico",
      price: "70.000",
      description: "Ideal para equipos pequeños.",
      features: [
        "5 embudos de ventas",
        "5 canales de comunicación",
        "Soporte básico",
      ],
      popular: false,
    },
    {
      plan: "Avanzado",
      price: "110.000",
      description: "Ideal para equipos medianos.",
      features: [
        "Sin límite  de canales",
        "Sin límite  de embudos",
        "Soporte 24x/7",
        "Mensajes masivos",
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Elige el plan perfecto para ti
        </h2>
        <p className="text-lg text-gray-400">
          Vibio lo hace fácil para ti y tu equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
          />
        ))}
      </div>
    </div>
  );
}
