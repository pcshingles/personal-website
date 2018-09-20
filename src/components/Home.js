import React, { Component } from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

export default class Home extends Component {
  render() {
    return (
      <div id={"ContainerDiv"} className={"ContainerDiv"}>
        <Container text>
          <Segment id={"impression"}>
            <Header>
              Hello world.
            </Header>
            <p>
              Welcome to my page! My name is Paul Shingleton and I am a Software Engineer
              who loves finding creative solutions to complicated problems. I excel at
              finding out how complicated systems work and applying my knowledge to
              innovate and create.
              <br/>
              <br/>
              I made this website using React and Semantic UI.
            </p>
          </Segment>
        </Container>
        <div style={{ paddingTop: 14 }}>
        </div>

        <Container text>
          <Segment>
            <Header>
              Student
            </Header>
            <p>
              I am a Senior at Worcester Polytechnic Institute (WPI) majoring in Computer Science with
              a minor in Data Science. I love making things work and doing it in the most efficient, scalable
              manner.
              I focus heavily on Design, having my most important classes
              focus on things like Object Orient Analysis and Design, Software Engineering, Web Dev, etc. I am also
              passionate in data science, having experiences in AI/ML, visualization, databases, and more.
            </p>
          </Segment>
          <Segment>
            <Header>
              Outside of class
            </Header>
            <p>
              I am a member of the Tau Kappa Epsilon Fraternity. Having had positions including Assistant and Lead
              Philanthropy chairman, I love contributing to greater causes. I am also an exec on an educational
              leadership organization. Outside of school, I love travelling, nature/outdoors, hiking, rock
              climbing, gym.
            </p>
          </Segment>
        </Container>
      </div>
    );
  }
}