import React, { Component } from 'react'
import { Header, Image, Segment } from "semantic-ui-react";

export default class MainHeader extends Component{
  render(){
    return(
        <Segment inverted color='black'>
          <Header as='h3' textAlign={'left'}>
            <Image src={require('../images/me_portrait.jpg')} circular/>
            Paul Shingleton
          </Header>
        </Segment>
    )
  }
}