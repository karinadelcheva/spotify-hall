/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
/* eslint-disable react/no-unknown-property */

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import useStore from "../store";
import useCurrentSong from "../_hooks/useCurrentSong";

export default function Cover(props) {
  useCurrentSong();
  const currentImage = useStore((state) => state.currentImageHigh);
  const texture = useTexture(currentImage || "/images/default.jpeg");

  texture.flipY = false;

  const { nodes } = useGLTF("./models/vinyl-box-face.glb");
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          position={[2.109, 0.216, 0.616]}
          rotation={[Math.PI / 2, 1.216, -Math.PI / 2]}
          scale={0.401}
        >
          <meshBasicMaterial map={texture} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("./models/vinyl-box-face.glb");
/* eslint-enable react/no-unknown-property */
