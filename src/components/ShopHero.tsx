"use client";

import { motion } from "framer-motion";

export default function ShopHero() {
  return (
    <section className="relative w-full min-h-[40vh] flex items-center justify-center px-6 md:px-16 py-16 overflow-hidden border-b border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Text Content - Centered */}
      <div className="relative z-10 w-full max-w-4xl space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-red-600 font-mono text-sm font-black uppercase tracking-[0.4em]">
            Premium Archive
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white">
            Bozo
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-200 to-neutral-500">
              Vault
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-neutral-400 max-w-lg mx-auto text-lg font-medium leading-relaxed"
        >
          Explore our seasonal collection of limited luxury streetwear. Built
          for the bold, designed for the streets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center pt-4"
        >
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-white">
              Latest Drop Live
            </span>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
            <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
              Global Shipping
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 select-none pointer-events-none"
      >
        <div className="w-px h-20 bg-linear-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
