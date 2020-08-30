import React from 'react';
import Home from './components/home';
import About from './components/about';
import Project from './components/projects';
import Skill from './components/skills';
import Education from './components/education';

import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about"  component={About}/>
            <Route path="/project" component={Project}/>
            <Route path="/skill" component={Skill}/>
            <Route path="/education" component={Education}/>
          </Switch>
    </Router>
  );
}

export default App;
