import React from 'react';
import './assets/css/main.css';
import './assets/css/btn.css';
import logo from './logo.png';
import doar from './assets/img/doar.png';

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
        <h3>Crie sua conta gratuitamente <br />e comece a compartilhar suas ideias!</h3>
        <a href="cadastro"><button class="btncad">Cadastrar-se</button></a>
        <a href="login"><button class="btnlogin ">Login</button></a>
      </div>
      <div class="apoie">
      <h3>Aproveite e apoie nosso projeto</h3>
      <img src={doar} alt=""></img>
      <button class="doar">Doar</button>
      <br />Doando você vai para o <b>mural dos apoiadores</b>

    </div>
    </div>
  );
}

export default App;