import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Shill } from './Shill'
import { OrbitControls } from '@react-three/drei'


 function Scene() {
  return (
    <>
    <Canvas   camera={{ position: [0, 0, 85], fov:60}} >
         
         <ambientLight intensity={3.5} />
          
         <Suspense fallback={null}>
          
             <Shill />
             
         </Suspense>
        
        
      </Canvas></>
  )
}

export default Scene
