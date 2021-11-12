import logo from './logo.svg';
import './App.css';
import Holamundo from "./components/HolaMundo";
import Adiosmundo from "./components/AdiosMundo";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Holamundo />
        <Adiosmundo />
      </header>
    </div>
  );
}

export default App;