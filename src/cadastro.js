import React from 'react';
import './assets/css/main.css';
import './assets/css/btn.css';
import './assets/css/navbar.css';
import './assets/css/cadastro.css';
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="navbar">
          <a href="/" className="logo"><img src={Logo} alt="logo" width="50" /></a>
          <a href="/" className="down">Home</a>
          <a href="aaa" className="down">Sobre</a>
          <a href="aaa" className="down">Equipe</a>
      <header className="slider"> 
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
      </header>      
    </div>
    </div>
  );
}
export default App;
