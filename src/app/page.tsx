import ThreeCanvas from "@/components/ThreeCanvas";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-screen w-full flex-col bg-black overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 mix-blend-screen"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Film Grain Texture */}
        <div className="film-grain absolute inset-0 z-20 opacity-30 pointer-events-none" />
      </div>

      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-10">
        <ThreeCanvas
          enableGestures={true}
          showParticles={true}
          showShadows={true}
          logoScale={1.0}
        />
      </div>

      {/* UI Overlay Layer */}
      <div className="pointer-events-none relative z-20 flex h-full w-full flex-col justify-between p-6 md:p-12">
        {/* Header */}
        <header className="pointer-events-auto flex w-full items-center justify-center">
          <h1 className="text-center text-2xl font-display font-extrabold tracking-tighter text-white md:text-5xl mix-blend-difference">
            BOZO HEADSTASH
          </h1>
        </header>

        {/* Footer / CTA */}
        <div className="pointer-events-auto flex flex-col items-center gap-6 pb-12">
          <Link
            href="/shop"
            className="group relative overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-black transition-transform hover:scale-105"
          >
            <span className="relative z-10">ENTER STORE</span>
            <div className="absolute inset-0 -translate-x-full bg-zinc-300 transition-transform group-hover:translate-x-0" />
          </Link>
        </div>
      </div>
    </main>
  );
}
