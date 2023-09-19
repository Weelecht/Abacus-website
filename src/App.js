import './App.css';
import React from "react";

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className='App-Container'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}

export default App;
