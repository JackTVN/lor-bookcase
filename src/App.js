import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';

import Header from './components/single/Header.js';

import Home from './components/pages/home.js';
import CombatPages from './components/pages/combat-pages.js';
import Floors from './components/pages/floors.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/combat-pages" component={CombatPages} />
        <Route exact path="/floors" component={Floors} />
      </div>
    </Router>
  );
}

export default App;
