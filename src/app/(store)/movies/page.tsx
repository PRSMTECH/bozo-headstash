"use client";

import React, { useState } from "react";
import { Play, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MoviesPage() {
  const [selectedMovie, setSelectedMovie] = useState<null | {
    id: number;
    title: string;
    videoUrl: string;
    description: string;
  }>(null);

  const movies = [
    {
      id: 1,
      title: "Bozo Lifestyle vol. 1",
      videoUrl: "/videos/movie1.mp4",
      description: "Behind the scenes of the latest drop.",
    },
    {
      id: 2,
      title: "Street Culture",
      videoUrl: "/videos/movie2.mp4",
      description: "The movement is live.",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <header className="mb-20 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">
              The <span className="text-red-600">Movies</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
          >
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
              <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
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
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="relative aspect-video overflow-hidden rounded-sm bg-neutral-900 border border-white/5 group-hover:border-red-600/50 transition-colors duration-500">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                >
                  <source src={movie.videoUrl} type="video/mp4" />
                </video>

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Info Overlay (shows on hover) */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-md border border-white/10 p-2 rounded-full">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </div>

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600/0 group-hover:bg-red-600/90 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm scale-75 group-hover:scale-100 transition-all duration-500">
                    <Play
                      size={32}
                      className="text-white fill-white ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Label Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-[10px] font-black px-2 py-0.5 text-white uppercase tracking-widest">
                    Preview
                  </span>
                </div>

                {/* Progress Bar Mockup */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-full bg-red-600"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-red-600 font-mono text-xs font-bold tracking-[0.3em]">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">
                    {movie.title}
                  </h2>
                </div>
                <p className="text-neutral-500 font-medium tracking-wide">
                  {movie.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cinematic Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-40 border-t border-white/5 pt-20 text-center"
        >
          <p className="text-neutral-600 font-black uppercase tracking-[0.5em] text-[10px] mb-8">
            Filmed on Location • Bozo Archive
          </p>
          <div className="flex justify-center flex-wrap gap-8 opacity-40">
            <span className="font-black uppercase tracking-[0.4em] text-2xl text-white">
              Filmed By <span className="text-red-600">Santos Visions</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMovie(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-6 right-6 z-110 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl z-110"
            >
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={selectedMovie.videoUrl} type="video/mp4" />
              </video>

              {/* Title Overlay in Modal (Optional) */}
              <div className="absolute top-0 left-0 w-full p-6 bg-linear-to-b from-black/80 to-transparent pointer-events-none">
                <h3 className="text-white font-black uppercase tracking-tighter text-xl">
                  {selectedMovie.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .z-100 {
          z-index: 100;
        }
        .z-110 {
          z-index: 110;
        }
      `}</style>
    </div>
  );
}
