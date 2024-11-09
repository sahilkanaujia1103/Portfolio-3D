import { useState } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import * as THREE from "three"
import { toneMapping } from 'three/examples/jsm/nodes/Nodes.js'
import { Leva } from 'leva'
function App() {

  return (
    <>
   
    <Leva collapsed/>
      <Canvas 
      gl={{
        antialias:true,
        toneMapping:THREE.ACESFilmicToneMapping,
        outputEncoding:THREE.sRGBEncoding

      }}
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-2.5,2,4]
      }}
      shadows
      flat
     >
       
       <Experience/>
      </Canvas>
    </>
  )
}

export default App
