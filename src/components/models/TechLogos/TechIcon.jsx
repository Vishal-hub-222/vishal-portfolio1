import React, { useEffect } from 'react'
import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
function TechIcon({ model }) {
  const{  scene } = useGLTF(model.modelPath)
 useEffect(()=>{
   if(model.name === "GitHub")
   {
    scene.traverse((child)=>{
        if(child.isMesh || child.name=== 'Object_5' )
        {
            child.material = new THREE.MeshStandardMaterial({color:'white'})
        }
    })
   }
 },[scene])
  return (
    <Canvas style={{ height: "100px", width: "100px" }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5,5,5]} intensity={1} />
      <Environment preset='city' />
   <OrbitControls enableZoom={false}/>
      <Float speed={5.5} rotationIntensity={2}floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
