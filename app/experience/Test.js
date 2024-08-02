/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Test(props) {
  const { nodes, materials } = useGLTF('./models/test2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_1.geometry}
        material={materials['Material.006']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_2.geometry}
        material={materials.wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_3.geometry}
        material={materials['wall.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_4.geometry}
        material={materials.window}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_5.geometry}
        material={materials.Texture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_6.geometry}
        material={materials.Screen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_7.geometry}
        material={materials['07_-_Default']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_8.geometry}
        material={materials['08_-_Default']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_9.geometry}
        material={materials['Bobina.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_10.geometry}
        material={materials['CnutreniCube.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_11.geometry}
        material={materials['NormalTape.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_12.geometry}
        material={materials['AnisoTape.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_13.geometry}
        material={materials['Low_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_14.geometry}
        material={materials['Low_02.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_15.geometry}
        material={materials['T_Anizo_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_16.geometry}
        material={materials['T_Glass_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_17.geometry}
        material={materials['T_EmissiveTube_01.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_18.geometry}
        material={materials['Material.017']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_19.geometry}
        material={materials.monitor}
      />
    </group>
  )
}

useGLTF.preload('./models/test2.glb')
