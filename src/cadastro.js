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
          <form id="cadastro" action="home">
          <br />
          <input type="text" name="nome" placeholder="Nome" minlenght="5" required />
          <input type="text" name="usuario" placeholder="Usuario" minlenght="1" required/>
          <input type="text" name="email" placeholder="Email" minlenght="10" required />
          <input type="text" name="password" placeholder="Senha" minlenght="8" required />
          <br />
          <input type="submit" className="btn-cads" value="Cadastrar"/>          
          </form>
      </div>    
      </div>
    );
  }
export default Cadastro;
