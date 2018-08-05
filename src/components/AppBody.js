import React, { Component } from 'react'
import CustomMenu from "./CustomMenu";
import { Redirect, Route } from "react-router-dom";
import Adventures from "./Adventures";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import MainHeader from "./MainHeader";

export default class AppBody extends Component{
  render() {
    return (
      <div>
        <MainHeader/>
        <CustomMenu/>
        <Redirect exact from="/" to="/home" />
        <div>
          <Route path="/Home" component={Home}/>
        </div>
        <div>
          <Route path="/Adventures" component={Adventures}/>
        </div>
        <div>
          <Route path="/Resume" component={Resume}/>
        </div>
        <div>
          <Route path="/Contact" component={Contact}/>
        </div>
        <div>
          <Route path="/About" component={About}/>
        </div>
      </div>
    );
  }
}