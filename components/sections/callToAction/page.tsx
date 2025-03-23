"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <div className="relative flex min-h-[400px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-8 md:py-12 px-4 md:px-6">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] ",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center font-serif gap-2 items-center mb-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground">
            Empieza a crecer y
          </h1>
          <h1 className="bg-gradient-to-r text-3xl md:text-4xl lg:text-5xl tracking-tight text-transparent bg-clip-text from-blue-600 to-cyan-500 dark:from-blue-300 dark:to-cyan-200">
            vender hoy
          </h1>
        </div>
        <p className="mb-8 text-base md:text-lg text-muted-foreground px-4 md:px-0">
          Únete a empresas que ya están automatizando su comunicación y
          convirtiendo conversaciones en clientes.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
        >
          <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#003B99_0%,#00D1FF_50%,#003B99_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
              <a
                href="https://wa.me/573053105505"
                className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-blue-300/20 via-blue-400/30 to-transparent dark:from-blue-300/10 dark:via-blue-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-blue-300/30 hover:via-blue-400/40 hover:to-transparent dark:hover:from-blue-300/15 dark:hover:via-blue-400/30 transition-all duration-200 sm:w-auto py-3 md:py-4 px-6 md:px-10 text-sm md:text-base"
              >
                Agenda una demo
              </a>
            </div>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
