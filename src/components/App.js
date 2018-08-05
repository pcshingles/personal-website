import React, { Component } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import Landing from "./Landing";
import AppBody from "./AppBody";

class App extends Component {
  state = { visible: true};
  componentDidMount () {
    setTimeout(this.displayMain, 1000);
  }
  displayMain = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    return (

      this.state.visible === true ? <Landing/> : <AppBody/>
    );
  }
}

export default App;
