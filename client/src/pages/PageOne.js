import React, { Component } from "react";
import { Container, Row, Col, Image, Form, ButtonToolbar, Button, Modal } from "react-bootstrap";
import Title from "../components/Title";
import "./PageOne.css";
import Footer from "../components/Footer";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

class PageOne extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      UserName: "",
      Password: ""
    };

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.UserName && this.state.Password) {
      API.saveUser({
        UserName: this.state.UserName,
        Password: this.state.Password
      })
        .then(console.log(event))
        .catch(err => console.log(err));
    }
  };

  handleLogin=event=>{
    event.preventDefault();
    
    if (this.state.UserName && this.state.Password) {
      let a = this;
      API.loginUser({
        UserName: this.state.UserName,
        Password: this.state.Password
      })
        .then(function(logindata){
          if (logindata.login == true){
            a.props.history.push('/dogs');
          }
        })
        .catch(err => console.log(err));
    }
  };
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
                    <Button variant="secondary" size="sm" onClick={this.handleShow}>
                      Register
                  </Button>
                  </ButtonToolbar>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col><Footer></Footer></Col>
        </Row>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Input
                value={this.state.UserName}
                onChange={this.handleInputChange}
                name="UserName"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.Password}
                onChange={this.handleInputChange}
                name="Password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.UserName && this.state.Password)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>



    );
  }
}

export default PageOne;
