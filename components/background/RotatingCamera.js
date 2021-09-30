import React, { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function RotatingCamera(props) {
  const orbitRef = useRef();
  useFrame((state, delta) => {});
  return <OrbitControls ref={orbitRef} autoRotate autoRotateSpeed={0.03} />;
}

export default RotatingCamera;
