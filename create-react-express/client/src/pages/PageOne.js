import React, { Component } from "react";
import { Container, Row, Col, Image, Form, ButtonToolbar, Button } from "react-bootstrap";
import Title from "../components/Title";
import "./PageOne.css";
import SignIn from "../components/SignIn";
import Footer from "../components/Footer";

class PageOne extends Component {
  render() {
    return (

          <Container>
            <Title></Title>
            <Row>
              <Col>
                <Image src="https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog" fluid />
                <p>Join today and connect with other dog-breeders near you!</p>
              </Col>
              <Col>
                <SignIn></SignIn>
              </Col>
            </Row>
            <Row>
              <Col><Footer></Footer></Col>
            </Row>
          </Container>
    );
  }
}

export default PageOne;