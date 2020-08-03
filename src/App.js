import React from 'react';
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/btn.css';
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
         <h1>"Não pelo lucro, pela ciência."</h1>
         <a href="/cadastro" className="btn">Cadastro</a>
      </header>      
    </div>
    </div>
  );
}

export default App;