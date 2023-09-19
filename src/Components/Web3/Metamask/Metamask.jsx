import React from 'react'
import { useState } from "react";
import createShorthand from '../../../Utility/createShorthand';
import "./Metamask.css";


export default function Metamask() {

    const [account, setAccount] = useState("");

    async function connectWallet() {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            const shorthand = await createShorthand(accounts[0]);
            setAccount(shorthand);
        } catch(error) {
            console.error("User denied access");
        } 
    }

  return (

    <div className='Metamask-Container'>
        <button onClick={connectWallet} style={account != "" ? {backgroundColor: "Limegreen"} : {backgroundColor:"IndianRed"}}>  
            {account != "" ? account : "Connect wallet"}
        </button>
    </div>
  )
}
