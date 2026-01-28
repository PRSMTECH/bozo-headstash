"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Center,
  ContactShadows,
  Sparkles,
  Stars,
  PerformanceMonitor,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { BozoLogo } from "./BozoLogo";
import { Suspense, useState, useCallback, useRef, useEffect } from "react";
import * as THREE from "three";

// Loading spinner component
function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

// Ambient particle effects
function AmbientParticles() {
  return (
    <>
      <Sparkles
        count={100}
        scale={10}
        size={2}
        speed={0.4}
        opacity={0.3}
        color="#a855f7"
      />
      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
}

// Dynamic lighting rig
function LightingRig() {
  const lightRef = useRef<THREE.PointLight>(null);

  // Animate light position subtly
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      if (lightRef.current) {
        const time = Date.now() * 0.001;
        lightRef.current.position.x = Math.sin(time * 0.5) * 5;
        lightRef.current.position.z = Math.cos(time * 0.5) * 5;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
      {/* Main ambient light */}
      <ambientLight intensity={0.3} />

      {/* Key light - main illumination */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.2}
        penumbra={1}
        intensity={2}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      {/* Fill light - soften shadows */}
      <pointLight position={[-8, 5, -5]} intensity={0.8} color="#6366f1" />

      {/* Rim light - edge definition */}
      <pointLight position={[5, -5, -10]} intensity={0.6} color="#a855f7" />

      {/* Animated accent light */}
      <pointLight
        ref={lightRef}
        position={[0, 5, 5]}
        intensity={1.5}
        color="#ec4899"
        distance={20}
      />

      {/* Bottom bounce light */}
      <pointLight position={[0, -8, 0]} intensity={0.4} color="#22d3ee" />
    </>
  );
}

interface ThreeCanvasProps {
  enableGestures?: boolean;
  showParticles?: boolean;
  showShadows?: boolean;
  logoScale?: number;
  className?: string;
}

export default function ThreeCanvas({
  enableGestures = true,
  showParticles = true,
  showShadows = true,
  logoScale = 1.0,
  className = "h-screen w-full",
}: ThreeCanvasProps) {
  const [degraded, setDegraded] = useState(false);

  const handleIncline = useCallback(() => setDegraded(false), []);
  const handleDecline = useCallback(() => setDegraded(true), []);

  return (
    <div
      className={`${className} bg-transparent relative overflow-hidden`}
      style={{
        touchAction: enableGestures ? "none" : "auto",
        cursor: enableGestures ? "grab" : "default",
      }}
    >
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
          zIndex: 1,
        }}
      />

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        dpr={[1, 2]}
        shadows
        style={{ touchAction: "none" }}
      >
        {/* Performance optimization */}
        <PerformanceMonitor onIncline={handleIncline} onDecline={handleDecline}>
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
        </PerformanceMonitor>

        {/* Fog for depth */}
        <fog attach="fog" args={["#000000", 15, 50]} />

        <LightingRig />

        <Suspense fallback={<LoadingFallback />}>
          <Center>
            <BozoLogo
              scale={logoScale}
              enableGestures={enableGestures}
              idleAnimation={true}
              glowIntensity={degraded ? 0.5 : 1.5}
            />
          </Center>

          {/* Contact shadow for grounding */}
          {showShadows && !degraded && (
            <ContactShadows
              position={[0, -2, 0]}
              opacity={0.6}
              scale={10}
              blur={2.5}
              far={4}
              color="#6366f1"
            />
          )}

          {/* Ambient particles */}
          {showParticles && !degraded && <AmbientParticles />}

          {/* Environment map for reflections */}
          <Environment preset="city" blur={0.8} />
        </Suspense>

        {/* Orbit controls with restricted movement */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={!enableGestures} // Disable if using gesture controls
          autoRotate={false}
          minDistance={3}
          maxDistance={20}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
