import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game'; // Import do componente Game
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Estou aqui!</h1>
        <Link to="/game">Ir para a página Game</Link>
      </div>
    );
  }
 }


 ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <div className="sans-serif">
          <Route path="/" exact={true} component={App} />
          <Route path="/game" component={Game} />
        </div>
      </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));