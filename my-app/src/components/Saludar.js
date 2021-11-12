import React from "react";


export default function Saludar(props) {
    console.log(props.userInfo.name);
    console.log(props.userInfo.edad);
    console.log(props.userInfo.color);
    return(

    <p>Mi nombre es: {props.userInfo.name} y tengo {props.userInfo.edad} años
    y mi color favorito es el {props.userInfo.color}</p>
    );
}