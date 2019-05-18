import React, { Component } from "react";
import Show from "../components/Show";
import NavBar from "../components/NavBar";
import User from "../components/User";
import UpdateUser from "../components/UpdateUser";
import Dog from "../components/Dog";
import AddDog from "../components/AddDog";
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
          </Col>
        </Row>
        <Row>
          <Col>
            <User></User>
            <UpdateUser></UpdateUser>
          </Col>
          <Col>
            <Dog></Dog>
            <AddDog></AddDog>
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