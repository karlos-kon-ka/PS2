import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function Mkom(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/modelDraco.gltf');

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
    }
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube1_lambert1_0.geometry}
          material={materials.lambert1}
          scale={[13.5, 19, 1.4]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/modelDraco.gltf');
