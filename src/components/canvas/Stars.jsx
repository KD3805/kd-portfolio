import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

// Component to create and animate the star field
const Stars = () => {
  // Reference to access the star field for animations
  const ref = useRef();

  // Generate random star positions using useState to memoize the calculation
  const [sphere] = useState(() => {
    try {
      const count = 500; // Number of stars to generate
      const positions = new Float32Array(count * 3); // Array to store x,y,z coordinates (3 values per star)

      // Generate random positions for each star
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 2;     // x coordinate
        positions[i + 1] = (Math.random() - 0.5) * 2; // y coordinate
        positions[i + 2] = (Math.random() - 0.5) * 2; // z coordinate
      }

      return positions;
    } catch (error) {
      console.error("Error generating star positions:", error);
      return new Float32Array(0); // Return empty array if generation fails
    }
  });

  // Animation loop - rotates the star field continuously
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10; // Rotate around X axis
      ref.current.rotation.y -= delta / 15; // Rotate around Y axis
    }
  });

  // Return null if star positions weren't generated successfully
  if (!sphere || sphere.length === 0) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"         // Pink color for stars
          size={0.003}            // Size of each star
          sizeAttenuation={true}  // Makes stars smaller when further away
          depthWrite={false}      // Prevents stars from overlapping incorrectly
        />
      </Points>
    </group>
  );
};

// Wrapper component that sets up the Three.js canvas
const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all /> {/* Preload all assets for better performance */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
