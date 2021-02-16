import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';

import Header from './components/single/Header.js';

import Home from './components/pages/home.js';
import CombatPages from './components/pages/combat-pages.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/combat-pages" exact component={CombatPages} />
      </div>
    </Router>
  );
}

export default App;
