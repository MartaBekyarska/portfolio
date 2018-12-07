import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Projects} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
