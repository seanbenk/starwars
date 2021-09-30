import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

import RotatingCamera from "./RotatingCamera";

function Background(props) {
  return (
    <Canvas
      style={{
        background: "black",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <RotatingCamera />
      <Stars />
    </Canvas>
  );
}

export default Background;
