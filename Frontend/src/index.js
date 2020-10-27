import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import Cadastro from './cadastro';
// import Home from './home';
import NotFound from './notfound'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/cadastro" component={Cadastro} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));