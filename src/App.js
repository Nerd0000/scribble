import React from 'react';
import './assets/css/main.css';
import './assets/css/navbar.css';
import './assets/css/btn.css';
import logo from './logo.png';

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
        <div class="uk-animation-toggle" tabindex="0">
          <div class="uk-animation-fade">
            <img src={logo} alt="teste" width="100" />
          </div>
        </div>
        <div class="ola">
        <h2>Bem vindo (a) ao Scribble</h2>
      </div>
      </div>
  );
}

export default App;