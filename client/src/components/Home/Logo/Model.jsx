import { useGLTF, Plane } from "@react-three/drei";
import { useRef } from "react";
useGLTF.preload("/Logo/3d2.glb");
import { useFrame } from "@react-three/fiber";

function LogoMesh({ color, y_offset, delay, damping }) {
  const group = useRef(null);
  const { nodes } = useGLTF("/Logo/3d2.glb");
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    group.current.rotation.y = 0.04 * time;
    group.current.position.y =
      1.4 * damping * Math.sin(1 * time + 2 * delay);
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

export default function Model() {

  return (
    <>
      <LogoMesh
        color={"#000000"}
        y_offset={1}
        delay={0}
        damping={0.5}
      />
      <LogoMesh
        color={"#2F2F2F"}
        y_offset={0}
        delay={(1 * Math.PI) / 8}
        damping={0.4}
      />
      <LogoMesh
        color={"#6F6F6F"}
        y_offset={-1.25}
        delay={(2 * Math.PI) / 8}
        damping={0.5}
      />
      <LogoMesh
        color={"#9A9A9A"}
        y_offset={-2.5}
        delay={(3 * Math.PI) / 8}
        damping={0.6}
      />
      <LogoMesh
        color={"#BFBFBF"}
        y_offset={-4.2}
        delay={(4 * Math.PI) / 8}
        damping={0.8}
      />
      <LogoMesh
        color={"#E2E2E2"}
        y_offset={-6}
        delay={(5 * Math.PI) / 8}
        damping={1.1}
      />
      <LogoMesh
        color={"#FDFDFD"}
        y_offset={-8.8}
        delay={(6 * Math.PI) / 8}
        damping={1.5}
      />
      <Plane
        args={[900, 200]}
        rotation={[6.6, 0, 0]}
        position={[0, -20, -30]}
      >
        <meshBasicMaterial color="Black" transparent opacity={0.5} />
      </Plane>
    </>
  );
}
