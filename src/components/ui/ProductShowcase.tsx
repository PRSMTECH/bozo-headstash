"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getImageUrl } from "@/lib/config";

interface ProductShowcaseProps {
  images: string[];
}

export default function ProductShowcase({ images }: ProductShowcaseProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="mt-32 space-y-24">
      <header className="text-center space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-600 block">
          Style Archive
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
          In the <span className="text-red-600">Wild</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative overflow-hidden group aspect-square bg-neutral-900 border border-white/5 ${
              index === 0 ? "md:col-span-2 md:aspect-video" : ""
            } ${index === 3 ? "lg:col-span-2 lg:aspect-video" : ""}`}
          >
            <Image
              src={getImageUrl(image)}
              alt="Product Showcase"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
