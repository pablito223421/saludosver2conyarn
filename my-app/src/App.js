import logo from './logo.svg';
import './App.css';
import Saludar from "./components/Saludar";
import React from "react";

function App() {
  const user={
   nombre:"Alberto Rodriguez",
   edad:"33",
   color:"negro"
  };

  const saludarFn= (name)=>{
    console.log("Hola"+ name);
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