"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSpring, config } from "@react-spring/three";
import { useGesture } from "@use-gesture/react";

interface BozoLogoProps {
  scale?: number;
  enableGestures?: boolean;
  glowIntensity?: number;
  idleAnimation?: boolean;
}

export function BozoLogo({
  scale = 0.5,
  enableGestures = true,
  glowIntensity = 1.5,
  idleAnimation = true,
}: BozoLogoProps) {
  const { scene } = useGLTF("/models/bozo_logo.glb");
  const modelRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  const [isDragging, setIsDragging] = useState(false);

  // Physics State
  const quaternion = useRef(new THREE.Quaternion());
  const angularVelocity = useRef(new THREE.Vector3(0, 0, 0));

  // Scale Spring
  const [spring, api] = useSpring(() => ({
    scale: scale,
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  // Bounce Spring
  const [bounceSpring, bounceApi] = useSpring(() => ({
    intensity: 1,
    config: config.wobbly,
  }));

  // Gesture Handler
  useGesture(
    {
      onDrag: ({ active, delta: [dx, dy], event }) => {
        if (!enableGestures) return;
        if (event.cancelable) event.preventDefault();

        if (active) {
          setIsDragging(true);

          const sensitivity = 0.012;
          const angle = Math.sqrt(dx * dx + dy * dy) * sensitivity;

          if (angle > 0.0001) {
            const axis = new THREE.Vector3(dy, dx, 0).normalize();
            const qStep = new THREE.Quaternion().setFromAxisAngle(axis, angle);
            quaternion.current.premultiply(qStep);
            quaternion.current.normalize(); // Prevent drift

            // Store velocity for momentum
            angularVelocity.current.set(dy * sensitivity, dx * sensitivity, 0);
          }
        } else {
          setIsDragging(false);

          // Boost on release
          angularVelocity.current.multiplyScalar(1.5);

          bounceApi.start({
            intensity: 1.08,
            config: { tension: 300, friction: 12 },
            onRest: () => bounceApi.start({ intensity: 1 }),
          });
        }
      },

      onWheel: ({ delta: [, dy] }) => {
        if (!enableGestures) return;
        const currentScale = spring.scale.get();
        const newScale = THREE.MathUtils.clamp(
          currentScale - dy * 0.001,
          scale * 0.3,
          scale * 2.5,
        );
        api.start({ scale: newScale, config: { tension: 200, friction: 20 } });
      },
    },
    {
      target: gl.domElement,
      eventOptions: { passive: false },
      drag: { filterTaps: true, threshold: 5 },
    },
  );

  // Animation Loop
  useFrame(() => {
    if (!modelRef.current) return;

    // Scale
    const currentScale = spring.scale.get();
    const bounceIntensity = bounceSpring.intensity.get();
    modelRef.current.scale.setScalar(currentScale * bounceIntensity);

    // Rotation Physics
    if (!isDragging) {
      const damping = 0.98; // Slightly more friction to settle faster
      angularVelocity.current.multiplyScalar(damping);

      // Calculate current speed
      let speed = angularVelocity.current.length();

      // Idle Spin Logic: never stop completely
      const minSpeed = idleAnimation ? 0.005 : 0; // Very slow, subtle idle spin

      if (speed < minSpeed) {
        // If almost stopped, default to Y-axis spin
        if (speed < 0.0001) {
          angularVelocity.current.set(0, minSpeed, 0);
          speed = minSpeed;
        } else {
          // Smoother transition to idle
          const smoothedSpeed = THREE.MathUtils.lerp(speed, minSpeed, 0.02);
          angularVelocity.current.normalize().multiplyScalar(smoothedSpeed);
          speed = smoothedSpeed;
        }
      }

      // Apply rotation
      const axis = angularVelocity.current.clone().normalize();
      const qStep = new THREE.Quaternion().setFromAxisAngle(axis, speed);
      quaternion.current.premultiply(qStep);
      quaternion.current.normalize();
    }

    // Apply quaternion to model
    modelRef.current.quaternion.copy(quaternion.current);
  });

  // Double-tap reset
  useEffect(() => {
    if (!enableGestures) return;

    const handleDoubleTap = () => {
      quaternion.current.identity();
      angularVelocity.current.set(0, 0, 0);
      api.start({ scale: scale, config: config.wobbly });
      bounceApi.start({ intensity: 1.15, from: { intensity: 0.85 } });
    };

    gl.domElement.addEventListener("dblclick", handleDoubleTap);
    return () => gl.domElement.removeEventListener("dblclick", handleDoubleTap);
  }, [api, bounceApi, scale, enableGestures, gl.domElement]);

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={1} />

      <pointLight
        position={[0, 2, 0]}
        intensity={glowIntensity}
        color="#6366f1"
        distance={3}
        decay={2}
      />
    </group>
  );
}

useGLTF.preload("/models/bozo_logo.glb");
