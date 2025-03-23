"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { ShimmerButton } from "./ui/shimmer-button";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: {
    light: string;
    dark: string;
  };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lightLineColor?: string;
    darkLineColor?: string;
  };
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "rgba(36, 139, 245, 0.2)",
  darkLineColor = "rgba(36, 139, 245, 0.3)",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = {
        light: "https://farmui.vercel.app/dashboard-light.png",
        dark: "https://farmui.vercel.app/dashboard.png",
      },
      gridOptions,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn("relative overflow-hidden", className)}
        ref={ref}
        {...props}
      >
        {/* Apple-inspired background elements */}
        <div className="absolute top-0 z-[0] h-screen w-screen">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950"></div>

          {/* Top blur circle - light blue */}
          <div className="absolute -top-[30%] left-[10%] w-[70%] h-[70%] rounded-full bg-blue-300/20 dark:bg-blue-500/10 blur-[120px]"></div>

          {/* Bottom right blur circle - cyan accent */}
          <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-[100px]"></div>

          {/* Left accent blur - subtle purple */}
          <div className="absolute top-[30%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-300/10 dark:bg-indigo-500/10 blur-[80px]"></div>

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyNDhCRjUwNSIgZD0iTTM2IDM0aDR2MWgtNHoiLz48L2c+PC9zdmc+')] opacity-30 dark:opacity-20"></div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-40 dark:opacity-30 mix-blend-overlay"></div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-gray-950 dark:via-transparent dark:to-gray-950 z-[1] opacity-80"></div>

        <section className="relative max-w-full mx-auto z-[2]">
          <RetroGrid {...gridOptions} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8"
          >
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm text-gray-600 dark:text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-blue-300/20 via-blue-400/20 to-transparent dark:from-blue-300/10 dark:via-blue-400/10 border-[2px] border-blue-500/10 dark:border-blue-400/10 rounded-3xl w-fit backdrop-blur-sm"
              >
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </motion.h1>

              {/* Rest of your component remains unchanged */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl tracking-tighter font-serif bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
              >
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-300 dark:to-cyan-200">
                  {subtitle.gradient}
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              >
                {description}
              </motion.p>
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
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-blue-300/20 via-blue-400/30 to-transparent dark:from-blue-300/10 dark:via-blue-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-blue-300/30 hover:via-blue-400/40 hover:to-transparent dark:hover:from-blue-300/15 dark:hover:via-blue-400/30 transition-all duration-200 sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </motion.div>
            </div>
            {bottomImage && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-96 mx-10 relative z-10"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
                <div className="mx-auto -mt-11 max-w-7xl">
                  <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                    <div className="[transform:rotateX(20deg);]">
                      {/* Background image with perspective */}
                      <div className="lg:h-176 relative skew-x-[.36rad] -mb-10">
                        <div
                          aria-hidden
                          className="absolute -inset-16 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:24px_24px] sm:-inset-32 dark:bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)]"
                        />
                        <div
                          aria-hidden
                          className="from-white to-transparent z-11 absolute inset-0 bg-gradient-to-l dark:from-gray-950"
                        />
                        <div
                          aria-hidden
                          className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#fff_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#030712_100%)]"
                        />
                        <Image
                          className="rounded-(--radius) z-1 relative border opacity-50 dark:hidden"
                          src="/dashboard.png"
                          alt="background dashboard"
                          width={2880}
                          height={2074}
                        />
                        <Image
                          className="rounded-(--radius) z-1 relative hidden border opacity-50 dark:block"
                          src="/dashboard.png"
                          alt="background store"
                          width={2880}
                          height={2074}
                        />
                      </div>

                      {/* Foreground image with same perspective */}
                      <div className="lg:h-176 relative skew-x-[.36rad] -mt-[90%]">
                        <div
                          aria-hidden
                          className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#fff_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#030712_100%)]"
                        />
                        <Image
                          className="rounded-(--radius) z-1 relative border dark:hidden"
                          src="/dashboard.png"
                          alt="tailus ui hero section"
                          width={2880}
                          height={2074}
                        />
                        <Image
                          className="rounded-(--radius) z-1 relative hidden border dark:block"
                          src="/store.png"
                          alt="tailus ui hero section"
                          width={2880}
                          height={2074}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black dark:from-black to-transparent z-30 pointer-events-none"></div>
        </section>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
