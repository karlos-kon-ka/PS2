import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Logo(props) {
  const { nodes, materials } = useGLTF('/modelDracolo.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.5} position={[-29.201, 81.309, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Logo_02_-_Default_0'].geometry}
          material={materials['02_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Logo_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Logo_07_-_Default_0'].geometry}
          material={materials['07_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Logo_08_-_Default_0'].geometry}
          material={materials['08_-_Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Logo_09_-_Default_0'].geometry}
          material={materials['09_-_Default']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/modelDracolo.gltf')