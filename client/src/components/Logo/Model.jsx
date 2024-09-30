import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useTransform,
  useScroll,
  useSpring,
  useMotionValue,
} from "framer-motion";
useGLTF.preload("/Logo/3d2.glb");

function LogoMesh({ color, y_offset, delay, damping, disableInteraction }) {
  const group = useRef(null);
  const { nodes } = useGLTF("/Logo/3d2.glb");

  let { scrollYProgress } = useScroll(); // Hook to get scroll progress

  if (disableInteraction) {
    scrollYProgress = useMotionValue(0);
  }

  // Map the scroll progress to a rotation range
  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  // Use spring to smooth the rotation transition
  const smoothRotationY = useSpring(rotationY, {
    damping: 100,
    stiffness: 300,
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    group.current.rotation.y = 0.04 * time + smoothRotationY.get();
    group.current.position.y = 1.4 * damping * Math.sin(1 * time + 2 * delay);
  });

  return (
    <>
      <group ref={group} scale={1.5} rotation-y={-Math.PI / 4}>
        {Object.keys(nodes).map((nodeName, index) => {
          const { geometry, rotation, scale } = nodes[nodeName];
          return (
            <mesh
              key={nodeName}
              position={[0, y_offset, 0]}
              geometry={geometry}
              rotation={rotation}
              scale={scale}
            >
              <meshToonMaterial color={color} />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

export default function Model({ disableInteraction }) {
  return (
    <group>
      <LogoMesh
        color={"#000000"}
        y_offset={3}
        delay={0}
        damping={0.5}
        disableInteraction={disableInteraction}
      />
      <LogoMesh
        color={"#2F2F2F"}
        y_offset={2}
        delay={(1 * Math.PI) / 8}
        damping={0.4}
        disableInteraction={disableInteraction}
      />
      <LogoMesh
        color={"#717070"}
        y_offset={1.25}
        delay={(2 * Math.PI) / 8}
        damping={0.5}
        disableInteraction={disableInteraction}
      />
      <LogoMesh
        color={"#9A9A9A"}
        y_offset={0.5}
        delay={(3 * Math.PI) / 8}
        damping={0.6}
        disableInteraction={disableInteraction}
      />
      <LogoMesh
        color={"#c4c2c2"}
        y_offset={-2.2}
        delay={(4 * Math.PI) / 8}
        damping={0.8}
        disableInteraction={disableInteraction}
      />
      <LogoMesh
        color={"#e4e2e1"}
        y_offset={-4}
        delay={(5 * Math.PI) / 8}
        damping={1.1}
        disableInteraction={disableInteraction}
      />
      <LogoMesh
        color={"#eceae9"}
        y_offset={-6.8}
        delay={(6 * Math.PI) / 8}
        damping={1.5}
        disableInteraction={disableInteraction}
      />
    </group>
  );
}
