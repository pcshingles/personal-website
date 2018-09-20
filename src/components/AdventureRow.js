import React, { Component } from "react";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

export default class AdventureRow extends Component {
  props = {
    header: "",
    text: "",
    photo: "",
    padding: ""
  };


  render() {
    return (
      <Grid centered
            style={
              {
                "background-image": "url(" + this.props.photo + ")",
                "background-size": "100% auto"
              }
            }>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <Header>
                {this.props.header}
              </Header>
              <p>
                {this.props.text}
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}