"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 mx-auto py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bento 1 - Feature highlight with icon */}
        <motion.div
          className="rounded-3xl border border-neutral-800 bg-neutral-950/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm col-span-1 md:col-span-2 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-semibold font-geist mb-2">
              Integración en un Clic
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Conéctate fácilmente con WhatsApp, Instagram y otros canales sin
              complicaciones.
            </p>
            <div className="relative mt-10 sm:mt-12 md:top-20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-blue-400/30 to-blue-300/30 blur-3xl opacity-30 transition-all duration-300 hover:opacity-60"></div>
              <div>
                <div className="flex items-center justify-around">
                  <div className="border-border dark:border-border/50 dark:inset-shadow-lg inset-shadow-brand/10 flex items-center justify-center rounded-full border p-1 sm:p-2 lg:p-3">
                    <div className="border-border dark:border-border/70 dark:inset-shadow-lg inset-shadow-red-800 flex items-center justify-center rounded-full border p-1 sm:p-2 lg:p-3">
                      <div className="glass-4 relative z-10 flex size-6 sm:size-8 lg:size-16 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-boxes size-4 sm:size-6 lg:size-8 stroke-1"
                        >
                          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                          <path d="m7 16.5-4.74-2.85"></path>
                          <path d="m7 16.5 5-3"></path>
                          <path d="M7 16.5v5.17"></path>
                          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                          <path d="m17 16.5-5-3"></path>
                          <path d="m17 16.5 4.74-2.85"></path>
                          <path d="M17 16.5v5.17"></path>
                          <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                          <path d="M12 8 7.26 5.15"></path>
                          <path d="m12 8 4.74-2.85"></path>
                          <path d="M12 13.5V8"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="border-border dark:border-border/50 dark:inset-shadow-lg inset-shadow-brand/10 flex items-center justify-center rounded-full border p-2 sm:p-3 lg:p-4">
                      <div className="border-border dark:border-border/70 dark:inset-shadow-lg inset-shadow-brand/20 flex items-center justify-center rounded-full border p-2 sm:p-3 lg:p-4">
                        <div className="glass-4 relative z-10 flex size-8 sm:size-12 lg:size-24 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-105">
                          <div
                            data-slot="beam"
                            className="relative after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-200 after:bg-radial after:from-brand-foreground/30 after:from-10% after:to-brand-foreground/0 after:to-60%"
                          >
                            <div className="relative z-10">
                              <Image
                                src="/logo-empty.webp"
                                alt="Logo"
                                width={35}
                                height={35}
                                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="from-brand-foreground/30 dark:from-brand-foreground/70 via-brand-foreground/10 to-brand-foreground/0 absolute top-[50%] left-0 size-16 sm:size-24 -translate-y-8 sm:-translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                    {/* <div className="absolute top-[50%] left-3 sm:left-5 z-1 size-6 sm:size-8 -translate-y-3 sm:-translate-y-4 rounded-full bg-radial from-blue-300 from-20% to-blue-300/0 to-60% lg:left-6"></div>
                    <div className="absolute top-[50%] right-3 sm:right-5 z-1 size-6 sm:size-8 -translate-y-3 sm:-translate-y-4 rounded-full bg-radial from-blue-300 from-20% to-blue-300/0 to-60% lg:right-6"></div> */}
                  </div>
                  <div className="from-brand-foreground/30 dark:from-brand-foreground/70 via-brand-foreground/10 to-brand-foreground/0 absolute top-[50%] right-0 size-16 sm:size-24 -translate-y-8 sm:-translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                  <div className="border-border dark:border-border/50 dark:inset-shadow-lg inset-shadow-brand/10 flex items-center justify-center rounded-full border p-1 sm:p-2 lg:p-3">
                    <div className="border-border dark:border-border/70 dark:inset-shadow-lg inset-shadow-brand/20 flex items-center justify-center rounded-full border p-1 sm:p-2 lg:p-3">
                      <div className="glass-4 relative z-10 flex size-6 sm:size-8 lg:size-16 items-center justify-center rounded-full shadow-md backdrop-blur-lg transition-all duration-1000 ease-in-out group-hover:scale-95">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-globe size-4 sm:size-6 lg:size-8 stroke-1"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="group-hover:animate-impulse absolute top-[50%] left-0 opacity-0">
                    <div className="from-brand-foreground/50 via-brand-foreground/10 to-brand-foreground/0 absolute top-[50%] -left-12 size-24 -translate-y-12 rounded-full bg-radial from-20% via-50% to-80%"></div>
                    <div className="absolute top-[50%] -left-4 z-1 size-8 -translate-y-4 rounded-full bg-radial from-white/70 from-20% to-white/0 to-60%"></div>
                  </div>
                </div>
                <div className="absolute top-[calc(50%-1px)] w-full">
                  <div className="via-foreground/10 dark:via-border absolute top-[calc(50%-1px)] left-0 h-0.5 w-full bg-linear-to-r from-transparent to-transparent"></div>

                  <motion.div
                    className="absolute top-[calc(50%-4px)] h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-blue-500"
                    style={{
                      boxShadow:
                        "0 0 8px 2px rgba(59, 130, 246, 0.6), 0 0 12px 4px rgba(59, 130, 246, 0.3)",
                    }}
                    initial={{ left: 30, scale: 0.8 }}
                    animate={{
                      left: "calc(90%)",
                      scale: 1.7,
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      scale: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento 2 - Testimonial */}
        <motion.div
          className="rounded-3xl border border-neutral-800 bg-neutral-950/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm col-span-1 row-span-1 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold font-geist mb-2">
            Conversaciones que Convierten
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Transforma cada chat en una oportunidad de venta con flujos
            automatizados y personalizados.
          </p>

          <div>
            <div
              data-slot="chat-illustration"
              className="relative flex w-full flex-col gap-2 p-2 sm:p-4 text-xs sm:text-sm mt-4"
            >
              <div className="flex flex-col items-start gap-4 sm:gap-8">
                <div className="glass-4 bg-gradient-to-r from-[#1f1f23] via-[#23232a]/90 to-[#1f1f23] text-muted-foreground max-w-[200px] sm:max-w-[280px] rounded-md px-2 sm:px-3 py-1 sm:py-2 shadow-md border-t border-r border-l border-white/15 border-t-white/50">
                  Hola, quiero reservar una habitación para este fin de semana
                </div>
                <motion.div
                  className="items-center gap-1 dark:bg-[#fb923c] relative z-10 flex rounded-lg border border-white/50 px-1 sm:px-1.5 py-0.5 shadow-lg text-xs"
                  animate={{
                    y: [0, -4, 0],
                    x: [-6, 6, -6],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    x: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Image
                    className="rounded-full w-3 h-3 sm:w-5 sm:h-5"
                    src="/alant.png"
                    alt="Avatar"
                    width={16}
                    height={16}
                  />
                  <span className="ml-1">Alan T.</span>
                  <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-3">
                    <motion.svg
                      width="14"
                      height="18"
                      viewBox="0 0 18 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      animate={{
                        rotate: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="sm:w-[18px] sm:h-[23px]"
                    >
                      <path
                        d="M14.5514 1.49706L1.49701 14.5515C0.741049 15.3074 1.27645 16.6 2.34553 16.6H8.50147C9.13799 16.6 9.74844 16.8529 10.1985 17.3029L14.5514 21.6558C15.3074 22.4118 16.6 21.8764 16.6 20.8073V2.34558C16.6 1.2765 15.3074 0.741098 14.5514 1.49706Z"
                        className="fill-orange-400 stroke-orange-400 dark:fill-orange-400 dark:stroke-orange-400 stroke-1"
                      ></path>
                    </motion.svg>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="bg-gradient-to-r from-[#1f1f23] via-[#23232a]/90 to-[#1f1f23] text-muted-foreground max-w-[180px] sm:max-w-[280px] rounded-md px-2 sm:px-3 py-1 sm:py-2 shadow-md border-t border-r border-l border-white/15 border-t-white/50">
                  Hola claro
                </div>
                <div className="bg-gradient-to-r from-[#1f1f23] via-[#23232a]/90 to-[#1f1f23] text-muted-foreground max-w-[180px] sm:max-w-[280px] rounded-md px-2 sm:px-3 py-1 sm:py-2 shadow-md border-t border-r border-l border-white/15 border-t-white/50">
                  tengo disponibilidad para esta semana, ¿qué día te queda
                  mejor?
                </div>
                <motion.div
                  className="group-hover:animate-hover relative z-10 top-2 sm:top-4"
                  animate={{
                    x: [0, 12, 0],
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="items-center border-border/80 bg-foreground text-primary-foreground flex -translate-x-16 sm:-translate-x-24 rounded-lg border px-1 sm:px-1.5 py-0.5 text-xs">
                    <Image
                      className="rounded-full w-3 h-3 sm:w-5 sm:h-5"
                      src="/nikola.png"
                      alt="Avatar"
                      width={16}
                      height={16}
                    />
                    <span className="ml-1">Nikola T.</span>
                    <div className="absolute -top-4 sm:-top-6 -left-2 sm:-left-3">
                      <svg
                        width="14"
                        height="18"
                        viewBox="0 0 18 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="sm:w-[18px] sm:h-[23px]"
                      >
                        <path
                          d="M2.64853 1.49706L15.7029 14.5515C16.4589 15.3074 15.9235 16.6 14.8544 16.6H8.69848C8.06196 16.6 7.45151 16.8529 7.00143 17.3029L2.64853 21.6558C1.89257 22.4118 0.6 21.8764 0.6 20.8073V2.34558C0.6 1.2765 1.89257 0.741098 2.64853 1.49706Z"
                          className="fill-foreground stroke-border/80 stroke-1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div
            data-slot="glow"
            className="absolute w-full bottom-0 scale-x-[2.0] opacity-20 transition-all duration-300 hover:opacity-40"
          >
            <div className="absolute left-1/2 h-[80px] sm:h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-[3] rounded-[50%] bg-radial from-orange-500/50 to-orange-500/0 from-10% to-60% opacity-20 dark:opacity-100"></div>
          </div>
        </motion.div>

        {/* Bento 3 - Statistics 
        <motion.div
          className="rounded-3xl border border-neutral-800 bg-neutral-950/50 backdrop-blur-sm p-6 col-span-1 md:col-span-1 row-span-1 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold font-geist mb-2">
            Comunicación Escalable
          </h3>
          <p className="text-muted-foreground">
            Atiende más clientes sin perder calidad, con una plataforma diseñada
            para crecer contigo.
          </p>

          <div className="relative mt-8"></div>
        </motion.div>

       
        <motion.div
          className="bg-purple-50 dark:bg-purple-900/20 rounded-3xl p-6 col-span-1 row-span-1 overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center justify-center h-32 mb-4 bg-purple-200 dark:bg-purple-800/50 rounded-xl overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-500"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">
            Intuitive Dashboard
          </h3>
          <p className="text-purple-700 dark:text-purple-300 mt-2">
            Monitor all your metrics in one place with our customizable
            interface.
          </p>
        </motion.div>

      
        <motion.div
          className="bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl p-6 col-span-1 row-span-1 flex flex-col justify-between text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>

          <h3 className="text-xl font-bold mb-2 relative z-10">
            Ready to start?
          </h3>
          <p className="text-rose-100 mb-6 relative z-10">
            Join thousands of satisfied customers today.
          </p>
          <button className="bg-white text-rose-600 py-2 px-4 rounded-lg font-medium hover:bg-rose-50 transition-colors relative z-10">
            Get Started →
          </button>
        </motion.div> */}
      </div>
    </div>
  );
}
