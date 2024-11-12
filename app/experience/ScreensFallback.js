/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
/* eslint-disable react/no-unknown-property */

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function ScreensFallback(props) {
  const { nodes, materials } = useGLTF('./models/screens-fallback.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen8.geometry}
        material={materials['Material.009']}
        position={[2.029, 1.432, -0.411]}
        rotation={[Math.PI / 2, 0, 0.485]}
        scale={[0.279, 0.251, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen5.geometry}
        material={materials['Material.009']}
        position={[-0.241, 0.693, 1.411]}
        rotation={[Math.PI / 2, 0, -1.828]}
        scale={[0.308, 0.774, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen1.geometry}
        material={materials['Material.009']}
        position={[-1.422, 2.547, 0.839]}
        rotation={[Math.PI / 2, 0, -1.267]}
        scale={[0.315, 0.71, 0.234]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen2.geometry}
        material={materials['Material.009']}
        position={[-0.869, 2.711, -0.49]}
        rotation={[Math.PI / 2, 0, -0.977]}
        scale={[0.277, 0.324, 0.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen3.geometry}
        material={materials['Material.009']}
        position={[-0.183, 1.633, 0.504]}
        rotation={[Math.PI / 2, 0, -1.605]}
        scale={[0.311, 0.264, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen4.geometry}
        material={materials['Material.009']}
        position={[0.255, 1.785, -1.093]}
        rotation={[Math.PI / 2, 0, -0.623]}
        scale={[0.311, 0.279, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen6.geometry}
        material={materials['Material.009']}
        position={[0.423, 0.587, -0.139]}
        rotation={[Math.PI / 2, 0, -0.521]}
        scale={[0.251, 0.249, 0.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen7.geometry}
        material={materials['Material.009']}
        position={[1.218, 1.151, -0.793]}
        rotation={[Math.PI / 2, 0, 0.019]}
        scale={[0.312, 0.24, 0.24]}
      />
    </group>
  )
}

useGLTF.preload('./models/screens-fallback.glb')
/* eslint-enable react/no-unknown-property */
