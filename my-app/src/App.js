import logo from './logo.svg';
import './App.css';
import Saludar from "./components/Saludar";
import React from "react";

function App() {
  const user={
    nombre:"Pablo",
    edad:"31",
    color:"negro"
   };
 
   const saludarFn= (nombre,edad)=>{
     console.log("Hola"+ {nombre}+",tiene"+{edad}+"años .");
     console.log(`Hola ${nombre} , tiene ${edad} años .`);
   };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Saludar userInfo={user} saludarFn={saludarFn}/>

      </header>
    </div>
  );
}

export default App;