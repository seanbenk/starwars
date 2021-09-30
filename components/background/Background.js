import React, { useRef, useEffect } from "react";
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
      <Stars
      // radius={100} // Radius of the inner sphere (default=100)
      // depth={50} // Depth of area where stars should fit (default=50)
      // count={5000} // Amount of stars (default=5000)
      // factor={4} // Size factor (default=4)
      // saturation={0} // Saturation 0-1 (default=0)
      // fade // Faded dots (default=false)
      />
    </Canvas>
  );
}

export default Background;
