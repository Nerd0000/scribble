import React from 'react';
import './assets/css/main.css';
import './assets/css/btn.css';
import './assets/css/cadastro.css';
import logo from './logo.png';
import { useField } from '@unform/core';

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
      </div>    
      </div>
    );
  }
export default Cadastro;
