import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

function RotatingCamera(props) {
  const orbitRef = useRef();
  return <OrbitControls ref={orbitRef} autoRotate autoRotateSpeed={0.03} />;
}

export default RotatingCamera;
