"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SimpleHero() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Vibio CRM</h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Organiza tus conversaciones y potencia tus ventas con una plataforma simple y poderosa.
        </p>
        <div className="mt-8">
          <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <a href="https://wa.me/573053105505">Agenda una demo</a>
          </Button>
        </div>
        <div className="mt-12">
          <Image
            src="/dashboard.png"
            alt="Vista del dashboard de Vibio"
            width={1200}
            height={800}
            className="mx-auto rounded-xl shadow-xl border"
          />
        </div>
      </div>
    </section>
  );
}
