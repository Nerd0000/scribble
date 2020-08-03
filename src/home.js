import React from 'react';
import './assets/css/main.css';
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
          <a href="/" className="logo"><img src={Logo} alt="logo" width="50" /></a>

          <a href="/" className="down">Home</a>
          <a href="aaa" className="down">Sobre</a>
          <a href="aaa" className="down">Equipe</a>
      <header className="slider"> 
      <div id="home"> 
        <h1>Bem vindo, </h1>
      </div>
      </header>      
    </div>
    </div>
  );
}

export default App;
