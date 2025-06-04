"use client";
import { Plug, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Plug,
    title: "Integraciones rápidas",
    description: "Conecta WhatsApp e Instagram en minutos y centraliza tus conversaciones.",
  },
  {
    icon: Zap,
    title: "Automatizaciones sencillas",
    description: "Crea flujos de venta sin complicaciones y ofrece respuestas inmediatas.",
  },
  {
    icon: Users,
    title: "Colaboración en equipo",
    description: "Gestiona clientes con tu equipo en un solo lugar y mejora la atención.",
  },
];

export default function SimpleFeatures() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Todo lo que necesitas</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
