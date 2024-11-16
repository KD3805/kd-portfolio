import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // useGLTF is used to load the 3D model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* hemisphereLight is used to create a light source that emits light from the top of the object */}
      <hemisphereLight intensity={0.15} groundColor='black' />

      {/* Main key light from front-right for primary illumination */}
      <directionalLight 
        position={[10, 10, 5]} // position of the main light source
        intensity={0.5} // brightness of the main light
        castShadow // enables shadow casting
        shadow-mapSize-width={1024} // shadow quality settings
        shadow-mapSize-height={1024}
      />

      {/* Fill light from left side to soften shadows */}
      <directionalLight
        position={[-20, 50, 10]} // position for balanced side lighting
        intensity={4} // softer intensity for fill light
        angle={0.3} // angle of the light
        penumbra={1} // soft edge of the light
        castShadow // enables shadow casting
        shadow-mapSize-width={1024} // shadow quality settings
        shadow-mapSize-height={1024} // shadow quality settings
      />

      {/* Rim light from behind for depth and edge definition */}
      <spotLight
        position={[0, 10, -10]} // behind the model
        angle={0.3} // narrow angle for focused rim lighting
        penumbra={1} // soft edge of the light
        intensity={0.5} // subtle intensity for rim effect
        castShadow
      />

      {/* pointLight adds subtle ambient illumination */}
      <pointLight intensity={3.5} />

      {/* primitive is used to create a 3D object */}
      <primitive
        object={computer.scene} // object to be rendered
        scale={isMobile ? 0.7 : 0.75} // reduced scale for better fit
        // Adjusted position for center alignment
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // position={[x, y, z]}
        rotation={[-0.01, -0.2, -0.1]} // slight rotation for better perspective
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand' // renders only when component is in viewport
      shadows
      dpr={[1, 2]} // density pixel ratio for different screen types
      // Adjusted camera settings for centered view
      camera={{ position: [20, 3, 5], fov: 25 }} // reduced FOV for less distortion
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense is used to handle the loading state of the component */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls is used to control the camera */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // limits the maximum angle of rotation
          minPolarAngle={Math.PI / 2} // limits the minimum angle of rotation
        />
        
        {/* Computers component */}
        <Computers isMobile={isMobile} />

      </Suspense>

      {/* Preload is used to preload the assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;