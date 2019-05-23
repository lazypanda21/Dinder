import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Title() {
  return (
    <Jumbotron className="shadow">
        <Container>
            <h1>Dinder<i className="fas fa-bone fa-sm"></i></h1> 
            <h2>A place for breeding</h2>
        </Container>
    </Jumbotron>
  );
}

export default Title;