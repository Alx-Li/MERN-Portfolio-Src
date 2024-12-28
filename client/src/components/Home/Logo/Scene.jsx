"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model.jsx";
import { Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { EffectComposer, Noise, DotScreen } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas
      style={{ position: "absolute" }}
      orthographic
      camera={{ position: [0, 20, 20], near: 0.1, far: 200, zoom: 20 }}
    >
      <fog attach="fog" args={["#FFFFFF", 25, 65]} />
      <directionalLight
        position={[-4, 1, 4]}
        intensity={3.8}
        color={"#FFFFFF"}
      />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <EffectComposer multisampling={0} disableNormalPass={true}>
        {/* no: OVERLAY, SCREEN*/}
        <DotScreen
          blendFunction={BlendFunction.LIGHTEN} // LIGHTEN, COLOR_DODGE
          angle={Math.PI * 0.5} // angle of the dot pattern
          scale={0.9} // scale of the dot pattern
          opacity={0.8} // 0.1 w MULTIPLY,
        />
        <Noise opacity={0.04} />
      </EffectComposer>
    </Canvas>
  );
}
