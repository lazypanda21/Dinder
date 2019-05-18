import React, { Component } from "react";
import Show from "../components/Show";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "./PageTwo.css";

class PageTwo extends Component {
  render() {
    return (
      <Container>
        <NavBar></NavBar>
        <Show></Show>
        <Row>
          <Col>
            <p>column one</p>
          </Col>
          <Col>
            <p>column two</p>
          </Col>
          <Col>
            <p>column three</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageTwo;