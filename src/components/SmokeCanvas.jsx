import React, { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { Vector2 } from "three";
import smokeFrag from "../shaders/smoke.glsl";

const SmokeMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new Vector2(window.innerWidth, window.innerHeight),
  },
  undefined,
  smokeFrag
);

extend({ SmokeMaterial });

export default function SmokeCanvas() {
  const matRef = useRef();

  useFrame(({ clock }) => {
    matRef.current.uTime = clock.elapsedTime;
  });

  return (
    <Canvas className="absolute inset-0 pointer-events-none">
      <mesh>
        <planeGeometry args={[2, 2]} />
        <smokeMaterial ref={matRef} />
      </mesh>
    </Canvas>
  );
}