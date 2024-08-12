"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const Experience = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [-6, 0.5, 6],
          fov: 75,
          near: 0.1,
          far: 100,
        }}
      >
        <Scene />
      </Canvas>
    </>
  );
};

export default Experience;
