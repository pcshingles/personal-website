import React, { Component } from 'react'
import { Header, Image, Segment } from "semantic-ui-react";

export default class MainHeader extends Component{
  render(){
    return(
        <Segment inverted color='black'>
          <Image src={require('../images/me_portrait.jpg')} size='small' centered circular/>
          <Header as='h3' textAlign={'center'}>

            Paul Shingleton
          </Header>
        </Segment>
    )
  }
}