"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: {
    title: string;
    href: string;
    description?: string;
  }[];
  ctaText?: string;
  ctaHref?: string;
}

export function NavBar({
  className,
  items = [{ title: "Inicio", href: "/" }],
  ctaText = "Agenda una demo",
  ctaHref = "https://wa.me/573053105505",
  ...props
}: NavBarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b backdrop-blur-md bg-white/70 dark:bg-gray-950/80 transition-all duration-200",
        className
      )}
      {...props}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-36">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold"
              src="/logo.png"
              alt="Vibio Logo"
              width={32}
              height={32}
            />

            <span className="text-lg font-medium hidden md:inline-block">
              Vibio
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 relative py-1",
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <Button asChild variant="ghost" className="mr-2">
              <Link href="https://app.vibiocrm.com/login">Iniciar sesión</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
        >
          <div className="container py-4 px-4 space-y-4">
            <nav className="flex flex-col gap-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md",
                    pathname === item.href
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950"
                      : "text-gray-600 dark:text-gray-300"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-800">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Iniciar sesión</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
              >
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
