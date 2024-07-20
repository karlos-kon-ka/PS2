import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import {Mkom} from './Mkom'



 function Scene() {
  return (
    <>
    <Canvas   camera={{ position: [0, 0, 85], fov:60}} >
         
         <ambientLight intensity={3.5} />
          
         <Suspense fallback={null}>
          
             <Mkom />
             
         </Suspense>
         
        
      </Canvas></>
  )
}

export default Scene
