import React from 'react';
import './assets/css/main.css';
import logo from "./logo.png";

function App() {
  return (
    <div id="home">
    <ul class="nav">
    <img src={logo} alt="" width="50"></img>
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sobre">Sobre</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contato">Contato</a>
      </li>
    </ul>
    <div id="ola">
        <h1>Bem vindo, </h1>
      </div>   
      </div>
  );
}

export default App;
