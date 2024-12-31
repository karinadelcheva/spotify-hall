/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: denis_cliofas (https://sketchfab.com/denis_cliofas)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/industrial-work-light-ff0abe17dc64498191bb41c905d00ab0
Title: Industrial Work Light
*/
/* eslint-disable react/no-unknown-property */

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function BirthdayBalloons (props) {
  const { nodes, materials } = useGLTF("./models/happy_birthday_balloons_banner.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.HAPPY_B_default_0.geometry
        }
        material={materials.default}
        position={[0.66, 3.11, -2.8]}
        rotation={[-0.1, -5.2, 0.13]}
        scale={0.01}
      />
      
    </group>
  );
}

useGLTF.preload("./models/light.glb");
/* eslint-enable react/no-unknown-property */
