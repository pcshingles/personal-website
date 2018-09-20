import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import { Redirect, Route, Switch } from "react-router-dom";
import Adventures from "./Adventures";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import MainHeader from "./MainHeader";
import { Container } from "semantic-ui-react";

export default class AppBody extends Component {
  render() {
    return (
      <div id='tall'>
        <MainHeader/>
        <CustomMenu/>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/Home" component={Home}/>
          <Route path="/Adventures" component={Adventures}/>
          <Route path="/Resume" component={Resume}/>
        /*  <Route path="/Contact" component={Contact}/>
          <Route path="/About" component={About}/> */
        </Switch>
      </div>
    );
  }
}