"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { getImageUrl } from "@/lib/config";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="group relative"
    >
      <Link href={`/product/${product.slug}`} className="block group">
        <div
          style={{ transform: "translateZ(50px)" }}
          className="relative aspect-3/4 overflow-hidden bg-neutral-950 border border-white/5 group-hover:border-white/20 transition-colors duration-500 shadow-2xl rounded-sm"
        >
          {product.images[0] ?
            <div className="w-full h-full relative">
              <Image
                src={getImageUrl(product.images[0])}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                unoptimized
              />

              {/* Secondary Image Overlay */}
              {product.images[1] && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100">
                  <Image
                    src={getImageUrl(product.images[1])}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              {/* Video Overlay on Hover */}
              {product.video && (
                <video
                  ref={videoRef}
                  src={product.video}
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                />
              )}

              {/* Stylish Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>
          : <div className="w-full h-full flex items-center justify-center bg-neutral-900 overflow-hidden">
              <span className="text-4xl text-neutral-800 font-black uppercase tracking-tighter italic select-none">
                Bozo
              </span>
            </div>
          }

          {/* New Tag - Floating with Z-index */}
          <div
            style={{ transform: "translateZ(70px)" }}
            className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-black text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 shadow-xl"
          >
            New Drop
          </div>

          {/* Quick View Button - Floating */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30 backdrop-blur-[2px]">
            <motion.div
              style={{ transform: "translateZ(100px)" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-8 py-3 shadow-2xl"
            >
              Details
            </motion.div>
          </div>
        </div>

        {/* Product Info */}
        <div
          className="mt-6 flex justify-between items-start gap-4"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="space-y-1.5">
            <h3 className="text-white text-[12px] font-black uppercase tracking-widest leading-relaxed group-hover:text-red-500 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-red-600 rounded-full" />
              <span className="text-[10px] text-neutral-500 uppercase font-black tracking-[0.2em]">
                {product.category}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-mono text-sm font-black group-hover:text-red-500 transition-colors">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-white/0 group-hover:border-red-600 transition-all duration-700 pointer-events-none" />
      </Link>
    </motion.div>
  );
}
