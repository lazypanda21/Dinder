import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Image, Form, ButtonToolbar, Button } from "react-bootstrap";
import "./PageOne.css";

class PageOne extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <h1>Dinder</h1> <i className="fas fa-bone fa-2x"></i>
          <h2>A place for breeding</h2>
          </Container>
          <Container>
            <Row>
              <Col>
                <Image src="https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog" fluid />
                <p>Join today and connect with other dog-breeders near you!</p>
              </Col>
              <Col>
                <h2>Welcome!</h2>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                    
                    <ButtonToolbar>
                      <Button variant="primary" size="lg">
                        Sign In
                      </Button>
                    </ButtonToolbar>
                    <ButtonToolbar className="mt-3">
                      <Button variant="secondary" size="sm">
                        Register
                      </Button>
                    </ButtonToolbar>
                  
                </Form> 
              </Col>
            </Row>
          </Container>
  
      </Jumbotron>

    );
  }
}

export default PageOne;