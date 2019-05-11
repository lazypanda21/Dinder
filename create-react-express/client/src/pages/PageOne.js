import React, { Component } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "./PageOne.css";

class PageOne extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
        <h1>Dinder</h1> <i className="fas fa-bone fa-2x"></i>
          <h2>A place for breeding</h2>
        </Container>
      </Jumbotron>

    );
  }
}

export default PageOne;