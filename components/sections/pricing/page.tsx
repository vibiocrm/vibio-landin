"use client";

import { useState, useEffect, useRef } from "react";
import { PricingCard } from "./components/PricingCard";
import { PricingTabs } from "./components/PricingTabs";
import gsap from "gsap";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("standard");
  const [isLoading, setIsLoading] = useState(true);
  const [displayedPlans, setDisplayedPlans] = useState<typeof pricingData>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const blurOverlayRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isAnimatingRef = useRef(false);

  const tabs = [
    { id: "standard", label: "Planes Estándar" },
    { id: "ai", label: "Planes con IA" },
  ];

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
      isIA: false,
    },
    {
      plan: "Avanzado",
      price: "110.000",
      description: "Ideal para equipos medianos.",
      features: [
        "Sin límite de canales",
        "Sin límite de embudos",
        "Soporte 24x/7",
        "Mensajes masivos",
      ],
      popular: true,
      isIA: false,
    },
    // AI Plans
    {
      plan: "Agente IA Basico + Vibio CRM",
      price: "120.000",
      priceCrm: "40.000",
      features: [
        "Asistente virtual IA",
        "5 embudos de ventas",
        "5 canales de comunicación",
        "Análisis predictivo básico",
        "Hasta 5.000 mensajes al mes",
      ],
      popular: true,
      isIA: true,
    },
    {
      plan: "Agente IA Avanzado + Vibio CRM",
      price: "250.000",
      priceCrm: "60.000",
      features: [
        "Asistente virtual IA avanzado",
        "Sin límite de canales",
        "Sin límite de embudos",
        "Análisis predictivo completo",
        "Soporte prioritario 24/7",
        "Hasta 15.000 mensajes al mes",
      ],
      popular: false,
      isIA: true,
    },
  ];

  const handleTabChange = (tabId: string) => {
    if (activeTab === tabId || isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveTab(tabId);

        const filteredPlans = pricingData.filter(
          (plan) =>
            (tabId === "standard" && !plan.isIA) ||
            (tabId === "ai" && plan.isIA)
        );
        setDisplayedPlans(filteredPlans);
        isAnimatingRef.current = false;
      },
    });

    if (
      cardsContainerRef.current &&
      cardsContainerRef.current.children.length > 0
    ) {
      tl.to(cardsContainerRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const standardPlans = pricingData.filter((plan) => !plan.isIA);
    setDisplayedPlans(standardPlans);
  }, []);

  useEffect(() => {
    if (cardsContainerRef.current && !isLoading && displayedPlans.length > 0) {
      gsap.fromTo(
        cardsContainerRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.4)",
        }
      );
    }
  }, [displayedPlans, isLoading]);

  useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(() => {
      if (!isMounted) return;

      if (
        cardsContainerRef.current &&
        blurOverlayRef.current &&
        sectionRef.current
      ) {
        gsap.set(cardsContainerRef.current.children, {
          opacity: 0,
          y: 30,
        });

        const masterTl = gsap.timeline({
          onComplete: () => {
            if (isMounted) setIsLoading(false); 
          },
        });

        masterTl.fromTo(
          blurOverlayRef.current,
          {
            opacity: 1,
            backdropFilter: "blur(30px)",
          },
          {
            opacity: 0,
            backdropFilter: "blur(0px)",
            duration: 1.2,
            ease: "power2.inOut",
          },
          0
        );

        masterTl.fromTo(
          sectionRef.current,
          {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          {
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 1.5,
            ease: "power2.inOut",
          },
          0
        );

        masterTl.to(
          cardsContainerRef.current.children,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.2,
          },
          0.2
        );
      }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen text-white flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      <div
        ref={blurOverlayRef}
        className="absolute inset-0 z-10 backdrop-blur-3xl bg-black/50 pointer-events-none"
        style={{
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
      />

      <div className="glow-blob absolute left-0 top-1/4 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl opacity-70" />
      <div className="glow-blob absolute left-0 bottom-1/3 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl opacity-70" />
      <div className="glow-blob absolute left-10 bottom-10 w-56 h-56 rounded-full bg-cyan-500/20 blur-3xl opacity-50" />
      <div className="glow-blob absolute left-5 top-10 w-60 h-60 rounded-full bg-yellow-500/20 blur-3xl opacity-60" />

      <div className="glow-blob absolute right-0 top-1/3 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl opacity-70" />
      <div className="glow-blob absolute right-0 bottom-1/4 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl opacity-70" />
      <div className="glow-blob absolute right-20 top-20 w-56 h-56 rounded-full bg-indigo-500/20 blur-3xl opacity-50" />
      <div className="glow-blob absolute right-10 bottom-5 w-60 h-60 rounded-full bg-red-500/20 blur-3xl opacity-60" />
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tenemos el plan perfecto para ti
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Vibio lo hace fácil para ti y tu equipo.
        </p>

        <PricingTabs
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          tabs={tabs}
        />
      </div>

      <div
        ref={cardsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full relative z-20"
      >
        {displayedPlans.map((plan, index) => (
          <PricingCard
            key={`${plan.plan}-${index}`}
            plan={plan.plan}
            price={plan.price}
            priceCrm={plan.priceCrm}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            type={plan.isIA}
          />
        ))}
      </div>
    </div>
  );
}
