"use client";

import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";

export default function ShopHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden border-b border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Text Side */}
      <div className="relative z-10 w-full md:w-2/5 space-y-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
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
          className="text-neutral-400 max-w-lg text-lg font-medium leading-relaxed"
        >
          Explore our seasonal collection of limited luxury streetwear. Built
          for the bold, designed for the streets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
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

      {/* 3D Side */}
      <div className="relative z-10 w-full md:w-3/5 h-[500px] md:h-[800px] mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full w-full"
        >
          <ThreeCanvas
            enableGestures={true}
            showParticles={true}
            showShadows={true}
            logoScale={1.5}
            className="h-full w-full"
          />
        </motion.div>

        {/* Decorative elements around 3D logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
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
