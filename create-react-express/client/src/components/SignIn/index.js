import React from "react";
import { Form, ButtonToolbar, Button, Container, Row, Col } from "react-bootstrap";

function SignIn() {
  return (
    <Container>

    <Row>
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
  );
}

export default SignIn;