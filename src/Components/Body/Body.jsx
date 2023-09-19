import React from 'react'
import Renderer from '../Renderer/Renderer'

import "./Body.css";
import ProductCard from '../ProductCard/ProductCard';

export default function Body() {
  return (
    <div className='Body-Container'>
        <Renderer/>
        <ProductCard/>
    </div>
  )
}
