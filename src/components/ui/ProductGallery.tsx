"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getImageUrl } from "@/lib/config";
import { Maximize2, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  name: string;
  video?: string;
}

export default function ProductGallery({
  images,
  name,
  video,
}: ProductGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Create a combined list of media items
  const mediaItems = [
    ...(video ? [{ type: "video", url: video }] : []),
    ...images.map((img) => ({ type: "image", url: img })),
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mediaItems[selectedIdx].type === "video") return;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const nextMedia = () => {
    setSelectedIdx((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setSelectedIdx(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length,
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Main Media Container */}
      <div className="relative group aspect-3/4 bg-neutral-950 border border-white/5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full relative"
            onMouseEnter={() =>
              mediaItems[selectedIdx].type === "image" && setIsZoomed(true)
            }
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            {mediaItems[selectedIdx].type === "video" ?
              <video
                src={mediaItems[selectedIdx].url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            : <Image
                src={getImageUrl(mediaItems[selectedIdx].url)}
                alt={name}
                fill
                className={`object-cover transition-transform duration-200 ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                style={
                  isZoomed ?
                    {
                      transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                    }
                  : {}
                }
                priority
                unoptimized
              />
            }
          </motion.div>
        </AnimatePresence>

        {/* Floating Controls */}
        <div className="absolute top-4 right-4 z-10">
          <button className="p-2 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all">
            <Maximize2 size={18} />
          </button>
        </div>

        {mediaItems.length > 1 && (
          <>
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/80 backdrop-blur-sm border border-white/5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/80 backdrop-blur-sm border border-white/5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {mediaItems.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {mediaItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`relative aspect-square bg-neutral-900 border transition-all duration-300 overflow-hidden ${
                selectedIdx === idx ?
                  "border-red-600 scale-95"
                : "border-white/5 opacity-50 hover:opacity-100"
              }`}
            >
              {item.type === "video" ?
                <div className="w-full h-full flex items-center justify-center bg-neutral-800 relative">
                  <video
                    src={item.url}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={20} className="text-white fill-white" />
                  </div>
                </div>
              : <Image
                  src={getImageUrl(item.url)}
                  alt={`${name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              }
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
