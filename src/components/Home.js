import React, { Component } from 'react'
import { Container, Grid, Header, Image, Segment } from "semantic-ui-react";
export default class Home extends Component{
  render(){
    return(
      <div className={'ContainerDiv'}>
        <Container text>
          <Segment>
            <Header>
              Hello world.
            </Header>
            <p>
              Hello and welcome to my page! My name is Paul Shingleton and I am a Software Engineer by trade,
              and an adventurer by heart. I made this website for fun and for the experience.
            </p>
          </Segment>
        </Container>
        <div style={{paddingTop: 10}}>
        </div>
        <Grid className={'Grid'} centered>
          <Grid.Row>
            <Grid.Column width={8}>
          <Segment>
            <Header>
              Student.
            </Header>
            <p>
              I am a Senior at Worcester Polytechnic Institute (WPI) majoring in Computer Science with
              a minor in Data Science. I focus heavily on Design, having my most important classes
              focus on things like Object Orient Analysis and Design and Software Engineering, etc. I am also
              passionate in data science, having experiences in AI/ML, visualization, databases, and more.
            </p>
            <Header>
              Outside of class
            </Header>
            <p>
              I am a member of the Tau Kappa Epsilon Fraternity. Having had positions including Assistant and Lead
              Philanthropy chairman, I love contributing to greater causes. I am also an exec on an educational
              leadership organization S.M.A.R.T. Outside of school, I love travelling, nature/outdoors, hiking, rock climbing, gym.
            </p>
          </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image size={'large'} src={require('../images/wpi.jpg')} centered>
              </Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}