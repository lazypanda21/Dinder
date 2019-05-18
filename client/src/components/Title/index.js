import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Title() {
  return (
    <Jumbotron>
        <Container>
            <h1>Dinder</h1> <i className="fas fa-bone fa-2x"></i>
            <h2>A place for breeding</h2>
        </Container>
    </Jumbotron>
  );
}

export default Title;