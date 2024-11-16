import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Ball component creates a floating 3D sphere with a decal texture
const Ball = (props) => {
  // Load texture image from props
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float wrapper for continuous animation
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={3.5} />
      
      {/* Directional lights from multiple angles for 3D effect */}
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <directionalLight position={[0.5, 0.5, 0.5]} intensity={0.6} />
      <directionalLight position={[-0.5, -0.5, 0.5]} intensity={0.6} />
      
      {/* 3D mesh with material and decal */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* 20-sided polyhedron geometry */}
        <icosahedronGeometry args={[1, 1]} />
        {/* Metallic white material */}
        <meshStandardMaterial
          color='#ffffff'
          metalness={0.5}
          roughness={0.5}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Applied texture decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          transparent
        />
      </mesh>
    </Float>
  );
};

// Canvas wrapper component for 3D rendering
const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
