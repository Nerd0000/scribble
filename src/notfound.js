import React from 'react';
import './assets/css/main.css';
import './assets/css/notfound.css';
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="notfound">
        <img src={Logo} alt="logo" className="spin_ani" width="50" /> 
        <p>Aqui não tem nada, volte para a <a href="/" className="home">homepage</a>.</p>
      </header>
    </div>
  );
}

export default App;
