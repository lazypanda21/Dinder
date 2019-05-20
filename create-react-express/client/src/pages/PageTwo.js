import React, { Component } from "react";
import Show from "../components/Show";
import NavBar from "../components/NavBar";
import User from "../components/User";
import UpdateUser from "../components/UpdateUser";
import Dog from "../components/Dog";
import AddDog from "../components/AddDog";
import { Container, Row, Col } from "react-bootstrap";
import "./PageTwo.css";
import { Input, FormBtn } from "../components/Form";
import { Form,Button } from "react-bootstrap";
import API from "../utils/API";

class PageTwo extends Component {

constructor(props, context) {
    super(props, context);

    
    this.handleOwnerSubmit = this.handleOwnerSubmit.bind(this);
    //this.handleDogSubmit = this.handleDogSubmit.bind(this);
   
    this.state = {
      show: false,
      UserName: sessionStorage.getItem("user"),
      Location: "",
      Contact:"",
    };
  }

 

  handleOwnerSubmit = event => {
    event.preventDefault();
    if (this.state.UserName && this.state.Location && this.state.Contact) {
      API.saveOwner({
        UserName: this.state.UserName,
        Location: this.state.Location,
        Contact: this.state.Contact,
      })
        .then(this.handleClose())
        .catch(err => console.log(err));

    }

  };

  handleClose() {
    this.setState({ show: false });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  

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
          <h2>Hellow</h2>
            <ul>
                <li>User:{sessionStorage.getItem("user")}</li>
                <li>Contact info:{this.state.Contact}</li>
                <li>Location:{this.state.Location}</li>
            </ul>
            <Col>
            <h2>Update Profile</h2>
            <Form id ="update">
                <Input
                    value={this.state.UserName}
                    onChange={this.handleInputChange}
                    ref="UserName"
                    placeholder="User Name"
                  />

                  <Input
                    value={this.state.Contact}
                    onChange={this.handleInputChange}
                    ref="Contact"
                    placeholder="Contact"
                  />
                  
                 <Input
                    value={this.state.Location}
                    onChange={this.handleInputChange}
                    ref="Location"
                    placeholder="Location"
                  />
                 

                  <Button 
                  disabled={!(this.state.UserName && this.state.Location && this.state.Contact)}
                  onClick={this.handleOwnerSubmit.bind(this)}
                  variant="primary" size="lg">
                        Update
                  </Button>
                  <Button variant="secondary" size="lg">
                        Exit
                  </Button>

            </Form>
        </Col>
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