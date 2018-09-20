import React, { Component } from 'react'
import { Container, Loader, Segment } from "semantic-ui-react";
import LandingImage from '../images/wpi.jpg'

let sectionStyle = {
  backgroundImage: "url(" + LandingImage + ")",
  "background-size": "100% auto"
};
export default class Landing extends Component{

  render(){
    return(
      <div>
        <Container id={'LandingContainer'} style={sectionStyle} fluid>
          <Segment piled id={'LandingText'}>
            <i>I am not a front-end developer.</i>
          </Segment>
          <Loader active inline='centered' />
        </Container>
      </div>
    )
  }
}