import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Shill(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/modelDracosh.gltf');
  const { actions } = useAnimations(animations, group);

  // Añadir animación de rotación continua
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_4" position={[0, 1.803, 0]} rotation={[0, 0, 0.382]} scale={14}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.002']}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials['Material.001']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/modelDracosh.gltf');
