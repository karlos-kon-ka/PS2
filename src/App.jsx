import { useState } from 'react'
import Nav from './components/Nav'

import './App.css'
import Intro from './components/Intro'
import Scene from './components/Scene'
import Scene2 from './components/Scene2'
import Scene3 from './components/Scene3'


function App() {
 

  return (
    <>
      <Nav />
      
      <Intro />
      <section>
       <div className='container' >
       <h1>MORTAL KOMBAT ARMAGEDON</h1>
        <Scene />
       </div>
       <div className='container' >
      <h1>SILENT HILL 3</h1>
      <Scene3 />
      </div>
      <div className='container' >
      <h1>MORTAL KOMBAT ARMAGEDON</h1>
      <Scene />
      </div>
      </section>
    </>
  )
}

export default App
