"use client";
import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model.jsx";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { EffectComposer, Noise, DotScreen } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

function ResizeHandler() {
  const { camera, size } = useThree();

  useEffect(() => {
    const handleResize = () => {
      // Adjust zoom based on the canvas size
      camera.zoom = Math.min(size.width / 50, size.height / 50);
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Initial adjustment on load
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, size]);

  return null;
}

export default function Scene() {
  return (
    <div style={{ position: "absolute", width: "500px", height: "500px" }}>
      <Canvas
        orthographic
        camera={{ position: [0, 20, 20], near: 0.1, far: 50 }}
      >
        <ResizeHandler />
        <fog attach="fog" args={["#eceae9", 25, 65]} />
        <ambientLight intensity={2.5} color={"#eceae9"} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DotScreen
            blendFunction={BlendFunction.LIGHTEN} // LIGHTEN, COLOR_DODGE
            angle={Math.PI * 0.5} // angle of the dot pattern
            scale={0.9} // scale of the dot pattern
            opacity={0.8} // 0.1 w MULTIPLY,
          />
          <Noise opacity={0.08} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
