import React from 'react'
import SpecsCard from './SpecsCard/SpecsCard'

import "./ProductCard.css";
import PurchasePanel from '../PurchaseUI/PurchasePanel/PurchasePanel';

export default function ProductCard() {
  return (
    <div className='ProductCard-Container'>
        <h1> Value Computer</h1>
        <SpecsCard/>
        <PurchasePanel/>
        <p className='ProductCard-Description'>
            Description for the product goes here, 
            maybe 120 words or so.
        </p>
    </div>
  )
}
