import React from 'react';
import './assets/css/main.css';
import './assets/css/btn.css';
import './assets/css/cadastro.css';
import logo from './logo.png';

function Cadastro() {
  return (
    <div id="inicio">
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
      <div id="cadastro"> 
      <h1>Crie sua conta.</h1>
      <form id="cadastro" method="POST" action="home.js">
        <input type="text" placeholder="Nome" minlenght="5" required></input>
        <input type="text" placeholder="Usuário" minLength="6" required></input>
        <input type="text" placeholder="Email" minLength="10" required></input>
        <input type="password" placeholder="Senha" minLength="8" required></input>
        <input type="submit" id="enviar"></input>
      </form>
      </div>    
      </div>
    );
  }
export default Cadastro;
