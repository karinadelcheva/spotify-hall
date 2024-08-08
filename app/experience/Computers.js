import React, { useEffect, useState } from "react";
import { Outlines, useGLTF } from "@react-three/drei";
import useCameraRig from "../_hooks/useCameraRig";
import useStore from "../store";

const initialCameraPosition = {
  position: { x: 4.2, y: 2.4, z: 1.97 },
  target: { x: -0.01, y: 0.4, z: -0.53 },
};

const cameraPositions = [
  {
    position: { x: 1.5, y: 1.46, z: 0.51 },
    target: { x: 2.04, y: 1.11, z: -0.413 },
    index: 7,
  },
  {
    position: { x: -0.49, y: 2.54, z: 1.16 },
    target: { x: -0.91, y: 2.52, z: 1.02 },
    index: 0,
  },
  {
    position: { x: -0.15, y: 2.84, z: -0.08 },
    target: { x: -1.08, y: 2.46, z: -0.62 },
    index: 1,
  },
  {
    position: { x: 0.58, y: 1.81, z: 0.44 },
    target: { x: -1.39, y: 1.07, z: 0.61 },
    index: 2,
  },
  {
    position: { x: 0.72, y: 1.9, z: -0.47 },
    target: { x: 0.102, y: 1.6, z: -1.311 },
    index: 3,
  },
  {
    position: { x: 0.56, y: 0.78, z: 1.9 },
    target: { x: -0.24, y: 0.5, z: 1.54 },
    index: 4,
  },
  {
    position: { x: 0.91, y: 0.63, z: 0.79 },
    target: { x: 0.29, y: 0.21, z: -0.45 },
    index: 5,
  },
  {
    position: { x: 1.12, y: 1.13, z: 0.27 },
    target: { x: 1.21, y: 0.79, z: -0.86 },
    index: 6,
  },
];

export default function Computers({ controlsRef, ...props }) {
  const { nodes, materials } = useGLTF("./models/computers.glb");
  const [hovered, setHovered] = useState(null);
  const moveCamera = useCameraRig(controlsRef);
  const setMonitorIndex = useStore((state) => state.setMonitorIndex);
  const monitorIndex = useStore((state) => state.monitorIndex);

  useEffect(() => {
    if (monitorIndex === null) {
      moveCamera(initialCameraPosition.position, initialCameraPosition.target);
    }
  }, [monitorIndex]);

  const handleClick = (index) => {
    const cameraConfig = cameraPositions[index];
    if (cameraConfig) {
      moveCamera(cameraConfig.position, cameraConfig.target);
      setMonitorIndex(cameraConfig.index);
    }
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computers.geometry}
        material={materials.Texture}
        position={[-1.371, 1.267, -0.837]}
        rotation={[-0.624, 0.933, 0.374]}
        scale={0.457}
      />
      {Object.keys(nodes)
        .filter((node) => node.startsWith("monitor"))
        .map((monitor, index) => (
          <mesh
            onPointerEnter={() => setHovered(monitor)}
            onPointerLeave={() => setHovered(null)}
            onClick={() => handleClick(index)}
            key={index}
            castShadow
            receiveShadow
            geometry={nodes[monitor].geometry}
            material={materials.Texture}
            position={[-1.371, 1.267, -0.837]}
            rotation={[-0.624, 0.933, 0.374]}
            scale={0.457}
          >
            {hovered === monitor && <Outlines color={"white"} />}
          </mesh>
        ))}
    </group>
  );
}

useGLTF.preload("./models/computers.glb");
