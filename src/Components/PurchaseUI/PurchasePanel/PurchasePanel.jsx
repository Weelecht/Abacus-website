import React from 'react'
import PurchaseButton from '../PurchaseButton/PurchaseButton'

import "./PurchasePanel.css"

export default function PurchasePanel() {
  return (
    <div className='PurchasePanel-Container'>
        Stock Counter: [0]
        <PurchaseButton/>
    </div>
  )
}
