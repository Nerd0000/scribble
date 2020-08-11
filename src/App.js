import React from 'react';
import './assets/css/main.css';
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
      <h2>Da comunidade científica,
          <br />para a comunidade.
        </h2>
        Crie sua conta gratuitamente <br />e comece a compartilhar suas ideias!
        <br />
        <a href="cadastro"><button class="btncad">Cadastrar-se</button></a>
        <a href="login"><button class="btnlogin ">Login</button></a>
      </div>
      <br />
      <div class="apoie">
      <br />
        <div class="sobre">
          <br />
          <h3>Aproveite e apoie nosso projeto</h3>
          <button class="doar">Doar</button>
          <br />Doando você vai para o <b>mural dos apoiadores</b>e ajuda a comunidade científica.
        </div> 
      </div>
    </div>
  );
}

export default App;