import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
