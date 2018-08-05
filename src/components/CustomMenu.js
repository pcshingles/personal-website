import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'

export default class CustomMenu extends Component{
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return(
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to="/home">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/adventures">
          <Menu.Item
            name='adventures'
            active={activeItem === 'adventures'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/resume">
          <Menu.Item
            name='resume'
            active={activeItem === 'resume'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/contact">
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/about">
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          </Link>
        </Menu>
      </Segment>
    )
  }
}
