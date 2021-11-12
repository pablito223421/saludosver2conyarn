import React from "react";



export default function Saludar(props) {
    const saludarFn=() =>{
      console.log (props);
    };
  
      return(
     <div>     
    <button onClick={props.saludarFn(props.userInfo.nombre)}>Saludar</button>
    </div>
      );
}