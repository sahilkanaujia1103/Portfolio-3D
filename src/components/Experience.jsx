import {ContactShadows, Environment, Float, Html, OrbitControls, PresentationControls, Text, useGLTF,} from '@react-three/drei'
import { Suspense } from 'react'





const Experience = () => {
  const computer=useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf") 
  return(
    <>
    <Environment files={[
      "./environmentMaps/0/px.jpg",
      "./environmentMaps/0/nx.jpg",
      "./environmentMaps/0/py.jpg",
      "./environmentMaps/0/ny.jpg",
      "./environmentMaps/0/pz.jpg",
      "./environmentMaps/0/nz.jpg",
    ]}/>
    <color args={["#495566"]} attach={"background"}/>
     
      <ambientLight intensity={0.2}/>
      <PresentationControls global
      rotation={[0.13,0.1,0]}
      polar={[-0.4,0.2]}
      azimuth={[-1,0.75]}
      config={{mass:2,tension:400}}
      snap={{mass:4,tension:400}}

      >
        <Float rotationIntensity={0.4}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#005040"}
          rotation={[0.1,Math.PI,0]}
          position={[0,0.55,-1.15]}
        />
       
        <primitive object={computer.scene}
          position-y={-1.2}
          
        >
          <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0,1.56,-1.4]}
          rotation-x={-0.256}
          >
            <iframe src="https://eloquent-cheesecake-7392a8.netlify.app/"/>
          </Html>
          
        </primitive>
        
        <Text
        font='./bangers-v20-latin-regular.woff'
        fontSize={1}
        position={[2,0.75,0.75]}
        rotation-y={-1.25}
        maxWidth={2}
        textAlign='center'
       
        >
             sahil Kanaujia
          </Text>
        </Float>
        </PresentationControls>
        <ContactShadows position-y={-1.4}
          opacity={0.4}
          scale={5}
          blur={2.4}
        />
    </>
  )

  
 
}

export default Experience