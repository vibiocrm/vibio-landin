"use client";
import {
  Bot,
  Megaphone,
  Sparkles,
  Plug,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Megaphone,
    title: "Mensajes masivos",
    description: "Envía campañas y comunicados a todos tus contactos en segundos.",
    className: "md:col-span-2",
  },
  {
    icon: MessageCircle,
    title: "Respuestas automáticas",
    description: "Configura flujos y chatbots para atender a tus clientes 24/7.",
  },
  {
    icon: Bot,
    title: "Atención potenciada por IA",
    description: "Aprovecha la inteligencia artificial para mejorar cada interacción.",
    className: "md:row-span-2 flex flex-col justify-between",
  },
  {
    icon: Plug,
    title: "Integración multicanal",
    description: "Centraliza WhatsApp, Instagram y más en una sola plataforma.",
  },
  {
    icon: Sparkles,
    title: "Experiencias personalizadas",
    description: "Sorprende a tus clientes con mensajes y ofertas adaptadas a sus necesidades.",
  },
];

export default function SimpleFeatures() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Todo lo que necesitas
        </h2>
        <div className="grid grid-cols-2 auto-rows-[220px] gap-6 md:grid-cols-3 md:auto-rows-[250px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "rounded-2xl border border-border bg-gray-50 dark:bg-neutral-900 p-6 flex flex-col shadow-sm",
                feature.className
              )}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#006EEE] to-[#49A1FF] text-white mb-4">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
