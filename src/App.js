import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';

import Header from './components/single/Header.js';

import Home from './components/pages/home.js';
import Invitation from './components/pages/invitation.js';
import CombatPages from './components/pages/combat-pages.js';
import Floors from './components/pages/floors.js';
import KeyPages from './components/pages/key-pages.js';
import About from './components/pages/about.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/invitation" component={Invitation} />
        <Route exact path="/combat-pages" component={CombatPages} />
        <Route exact path="/floors" component={Floors} />
        <Route exact path="/key-pages" component={KeyPages} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
