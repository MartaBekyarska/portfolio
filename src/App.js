import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/skills" exact component={Skills} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
