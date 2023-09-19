import React from 'react'
import Metamask from '../Web3/Metamask/Metamask';
import "./Header.css";

export default function Header() {
  return (
    <div className='Header-Container'>
        <h1>Abacus Computers</h1>
        <Metamask></Metamask>
            
    </div>
  )
}
