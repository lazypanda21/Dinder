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
    this.handleDogSubmit = this.handleDogSubmit.bind(this);
   
    this.state = {
      show: false,
      UserName: sessionStorage.getItem("user"),
      Location: "",
      Contact:"",
      DogName:"",
      Breed : "" ,
      Gender:"",
      Age: "",
      Weight:"",
      Image : "",
      OwnerId : "",
      Ownerinfo :"",

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
        .then(res => this.setState({OwnerId:res.data.id}))
        .catch(err => console.log(err));
      
    }
//=> this.setState({OwnerId:res.data.id}))
  };

  handleDogSubmit = event => {
    event.preventDefault();
    if (this.state.DogName && this.state.Breed && this.state.Gender&&this.state.Age && this.state.Weight && this.state.Image ) {
      API.saveDog({
        DogName: this.state.DogName,
        Breed: this.state.Breed,
        Gender: this.state.Gender,
        Age: parseInt(this.state.Age),
        Weight: parseInt(this.state.Weight),
        Image : this.state.Image,
        OwnerId : parseInt(this.state.OwnerId),
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
                    name="UserName"
                    placeholder="User Name"
                  />

                  <Input
                    value={this.state.Contact}
                    onChange={this.handleInputChange}
                    name="Contact"
                    placeholder="Contact"
                  />
                  
                 <Input
                    value={this.state.Location}
                    onChange={this.handleInputChange}
                    name="Location"
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
            <h2>Add Dog</h2>
            <Form id ="add_dog">
                <Input
                    value={this.state.DogName}
                    onChange={this.handleInputChange}
                    name="DogName"
                    placeholder="Dog Name"
                  />

                  <Input
                    value={this.state.Breed}
                    onChange={this.handleInputChange}
                    name="Breed"
                    placeholder="Breed"
                  />
                  
                 <Input
                    value={this.state.Gender}
                    onChange={this.handleInputChange}
                    name="Gender"
                    placeholder="Gender"
                  />
                 <Input
                    value={this.state.Age}
                    onChange={this.handleInputChange}
                    name="Age"
                    placeholder="yr old"
                  />
                  <Input
                    value={this.state.Weight}
                    onChange={this.handleInputChange}
                    name="Weight"
                    placeholder="KG"
                  />
                  <Input
                    value={this.state.Image}
                    onChange={this.handleInputChange}
                    name="Image"
                    placeholder="Image URL"
                  />

                  <Button 
                  disabled={!(this.state.DogName && this.state.Breed && this.state.Gender&&this.state.Age && this.state.Weight && this.state.Image)}
                  onClick={this.handleDogSubmit.bind(this)}
                  variant="primary" size="lg">
                        Add
                  </Button>
                  <Button variant="secondary" size="lg">
                        Exit
                  </Button>

            </Form>
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