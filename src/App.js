import React from 'react';
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/btn.css';
import logo from './logo.png';

function App() {
  return (
    <div id="inicio">
      <nav class="uk-navbar-container-transparent" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="/">Home</a></li>
            <li class="uk-active"><a href="sobre">Sobre</a></li>
          </ul>
        </div>
      </nav>
        <div class="uk-animation-toggle" tabindex="0">
          <div class="uk-animation-fade">
            <img src={logo} alt="teste" width="100" />
          </div>
        </div>
        <div class="cadastrologin">
         <h3>Crie sua conta gratuitamente <br />e comece a compartilhar ideias!</h3>
         <a href="cadastro"><button class="btn">Cadastrar-se</button></a>
         <a href="cadastro"><button class="btnlogin ">Login</button></a>
      </div>
      </div>
  );
}

export default App;