"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SimpleHero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-24 grid gap-12 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Vibio CRM
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-md mx-auto md:mx-0">
            Organiza tus conversaciones y potencia tus ventas con una plataforma
            simple y poderosa.
          </p>
          <Button
            asChild
            className="mt-8 bg-gradient-to-r from-[#006EEE] to-[#49A1FF] text-white"
          >
            <a href="https://wa.me/573053105505">Agenda una demo</a>
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/dashboard.png"
            alt="Vista del dashboard de Vibio"
            width={1200}
            height={800}
            className="w-full rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-800"
          />
        </div>
      </div>
    </section>
  );
}
