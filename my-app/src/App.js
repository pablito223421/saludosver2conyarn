import logo from './logo.svg';
import './App.css';
import Saludar from "./components/Saludar";
import React, {useState} from "react";

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

   const [stateCar,setStateCar] = useState(false);

   const encenderApagar= () => {
     //setStateCar(!stateCar);
     setStateCar(prevValue =>!prevValue);
   }
 
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
 
       <h3>El coche está {stateCar ? "Encendido" : "Apagado"}</h3>
      <button onClick={encenderApagar}>Encender/Apagar</button>
       </header>
     </div>
   );
}

export default App;