import logo from './logo.svg';
import './App.css';
//import Saludar from "./components/Saludar";
import React, {userState,useEffect} from "react";

function App() {
  /*const user={
    nombre:"Pablo",
    edad:"31",
    color:"negro"
   };*/
 
   /*const saludarFn= (nombre,edad)=>{
     console.log("Hola"+ {nombre}+",tiene"+{edad}+"años .");
     console.log(`Hola ${nombre} , tiene ${edad} años .`);
   };*/

   const [stateCar,setStateCar] = userState(false);
   const [contar,setContar] =userState(0);
 
   useEffect(() => {
     console.log("Total:" + contar);
   }, [contar]);
 
   const encenderApagar= () => {
     setStateCar(!stateCar);
     /*setStateCar(prevValue =>!prevValue);*/
     setContar(contar + 1);
   }
 
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
 
         <h3>El coche está {stateCar ? "Encendido" : "Apagado"}</h3>
      <h4>Clicks: {contar} </h4>
     <button onClick={encenderApagar}>Encender/Apagar</button>
      </header>
      </div>
   );
}

export default App;