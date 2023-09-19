import React from 'react'

import "./SpecsCard.css"

export default function SpecsCard() {
  return (
    <div className='SpecCard-Container'>
        <ul>
            <li>
                 GPU: MSI RTX 4060
            </li>

            <li>
                CPU: i3-12100F 
            </li>

            <li>
                Motherboard: Asus prime H610M-A WIFI D4
            </li>

            <li>
                RAM: Corsair DDR4 16GB
            </li>

            <li>
                PSU: Seasonic-G12 550W
            </li>

            <li>
                SSD: Kingston NV2 1TB M.2 
            </li>

            <li>
                CASE: MSI MPG Sekira-ATX
            </li>

            <li>
                COOLING: Case fans 3/1
            </li>

            <li>
                CPUCooling: Cooler Master Hyper H412R
            </li>
        </ul>
    </div>
  )
}
