"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  ChevronDown,
} from "lucide-react";
import { Product } from "@/lib/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("description");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const toggleTab = (tab: string) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="flex flex-col space-y-8 h-full">
      {/* Label and Title */}
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 bg-red-600/10 text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 border border-red-600/20"
        >
          {product.category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4 italic leading-none"
        >
          {product.name}
        </motion.h1>
        empty
        <div className="flex items-center gap-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl text-white font-mono"
          >
            ${product.price.toFixed(2)}
          </motion.p>
          <div className="flex items-center gap-1 text-red-600">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} fill="currentColor" />
            ))}
            <span className="text-neutral-500 text-xs ml-2 font-bold uppercase tracking-widest">
              (12 Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Description Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-neutral-400 leading-relaxed font-medium max-w-xl"
      >
        <p>{product.description}</p>
      </motion.div>

      {/* Size Selector */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
            Select Size
          </label>
          <button className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-white/20 hover:border-white transition-colors">
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[56px] h-[56px] flex items-center justify-center border transition-all duration-300 font-mono text-sm ${
                selectedSize === size ?
                  "bg-white text-black border-white"
                : "border-white/10 text-neutral-400 hover:border-white/40 hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 space-y-4">
        <button className="w-full bg-white text-black font-black uppercase py-6 hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-4 group relative overflow-hidden">
          <motion.div className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-300">
            <ShoppingBag size={20} className="group-hover:animate-bounce" />
            Add to Bag
          </span>
        </button>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2 p-4 bg-neutral-900/50 border border-white/5 text-center">
            <ShieldCheck size={20} className="text-neutral-500" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">
              Authentic
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-neutral-900/50 border border-white/5 text-center">
            <Truck size={20} className="text-neutral-500" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">
              Fast Ship
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-neutral-900/50 border border-white/5 text-center">
            <RefreshCw size={20} className="text-neutral-500" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-neutral-400">
              Returns
            </span>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t border-white/5 pt-6 space-y-2">
        {[
          {
            id: "details",
            title: "Product Details",
            content:
              "Expertly crafted from heavyweight cotton. Signature Bozo Headstash branding throughout. Reinforced stitching for maximum durability.",
          },
          {
            id: "shipping",
            title: "Shipping & Returns",
            content:
              "Free worldwide shipping on orders over $200. Returns accepted within 14 days of delivery. Must be in original packaging.",
          },
          {
            id: "care",
            title: "Care Instructions",
            content:
              "Machine wash cold inside out. Tumble dry low. Do not iron graphics. Wear with confidence.",
          },
        ].map((item) => (
          <div key={item.id} className="border-b border-white/5 pb-4">
            <button
              onClick={() => toggleTab(item.id)}
              className="w-full flex justify-between items-center py-2 text-left group"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300 group-hover:text-white transition-colors">
                {item.title}
              </span>
              <ChevronDown
                size={16}
                className={`text-neutral-500 transition-transform duration-300 ${activeTab === item.id ? "rotate-180 text-white" : ""}`}
              />
            </button>
            <AnimatePresence>
              {activeTab === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-neutral-500 py-4 leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
