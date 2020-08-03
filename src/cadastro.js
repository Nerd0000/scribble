import React from 'react';
import './assets/css/main.css';
import './assets/css/btn.css';
import './assets/css/navbar.css';
import './assets/css/cadastro.css';

function App() {
  return (
    <div id="inicio">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-parent"><a href="/">Home</a></li>
          <li class="uk-parent"><a href="sobre">Sobre</a></li>
        </ul>
      </div>
    </nav>
      <div id="cadastro"> 
      <h1>Crie sua conta.</h1>
          <form id="cadastro" action="home">
          <br />
          <input type="text" id="nome" placeholder="Nome" minlenght="5" required />
          <input type="text" id="usuario" placeholder="Usuario" minlenght="1" required/>
          <input type="text" id="email" placeholder="Email" minlenght="10" required />
          <input type="text" id="password" placeholder="Senha" minlenght="8" required />
          <br />
          <input type="submit" className="btn-cads" value="Cadastrar"/>          
          </form>
      </div>    
    </div>
  );
}
export default App;
