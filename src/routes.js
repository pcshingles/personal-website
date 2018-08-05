import React from 'react';
import { Route, Switch } from 'react-router';

// Components
import About from './components/About'
import Adventures from './components/Adventures'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Home from './components/Home'

export default (
  <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/adventures" component={Adventures}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/resume" component={Resume}/>
  </Switch>
)