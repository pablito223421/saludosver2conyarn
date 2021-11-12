import logo from './logo.svg';
import './App.css';
import Saludar from "./components/Saludar";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Saludar name="Pedro" edad="34"/>
      <Saludar name="Ana" edad="12"/>
      <Saludar name="Carlos" edad="23"/>
      </header>
    </div>
  );
}

export default App;