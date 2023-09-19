import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Box from '../3Dassets/Box/Box';

import "./Renderer.css";


export default function Renderer() {
  return (
    <div className='Renderer-Container'>
        <Canvas> 
            <hemisphereLight color="0xffffbb" groundColor={0x080820} isHemisphereLight={1} position={[0,1,0]}></hemisphereLight>
            <Box> </Box>
            <OrbitControls></OrbitControls>
            <axesHelper args={[10]}></axesHelper>
        </Canvas>
    </div>
  )
}
