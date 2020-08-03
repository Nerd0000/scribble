import React from 'react';
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/btn.css';
import logo from './logo.png';

function App() {
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
      <div class="cadastrologin">
        <h3>Crie sua conta gratuitamente <br />e comece a compartilhar ideias!</h3>
        <a href="cadastro"><button class="btn">Cadastrar-se</button></a>
        <a href="cadastro"><button class="btnlogin ">Login</button></a>
      </div>
    </div>
  );
}

export default App;