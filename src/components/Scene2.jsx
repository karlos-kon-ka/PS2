import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Logo } from './Logo'



 function Scene() {
  return (
    <>
    <Canvas   camera={{ position: [0, 0, 85], fov:20}} >
         
         <ambientLight intensity={8} />
          
         <Suspense fallback={null}>
          
            <Logo />
             
         </Suspense>
        
        
      </Canvas></>
  )
}

export default Scene
