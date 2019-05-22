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

  this.state = {
    shown: true,
  };
  this.state = {
    shown2: true,
  };

  }


  toggle1() {
    this.setState({
      shown: !this.state.shown
    });
  }
  toggle2() {
    this.setState({
      shown2: !this.state.shown2
    });
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

    var shown1 = {
      display: this.state.shown ? "block" : "none"
    };

    var hidden1 = {
      display: this.state.shown ? "none" : "block"
    }


    var hidden2 = {
      display: this.state.shown2 ? "none" : "block"
    }

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
            <h2>Welcome! {sessionStorage.getItem("user")}</h2>
            <ul >
              <li>User:{sessionStorage.getItem("user")}</li>
              <li>Contact info:{this.state.Contact}</li>
              <li>Location:{this.state.Location}</li>
            </ul>
            <Button onClick={this.toggle1.bind(this)} variant="primary" size="lg">
              Update
            </Button>
            <Col style={shown1}>
              <h2>Update Profile</h2>
              <Form id="update">
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
                <Button onClick={this.toggle1.bind(this)} variant="secondary" size="lg">
                  Exit
                  </Button>

              </Form>
            </Col>
          </Col>
          <Col>
          <Col>


            <h2>You can add new dogs</h2>
            <ul>
                
                <li>Dog Name : {this.state.DogName} </li>
                <li>Breed : {this.state.Breed}</li>
                <li>Gender :{this.state.Gender}</li>
                <li>Age :{this.state.Age}</li>
                <li>Weight :{this.state.Weight}</li>
                <li>Dog Image :{this.state.Image}</li>
            </ul>
        </Col>


            <Button onClick={this.toggle2.bind(this)} variant="primary" size="lg">
              Add New Dog
                  </Button>
            <Col style={hidden2}>
              <h2>Add Dog</h2>
              <Form id="add_dog">
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
                  disabled={!(this.state.DogName && this.state.Breed && this.state.Gender && this.state.Age && this.state.Weight && this.state.Image)}
                  onClick={this.handleDogSubmit.bind(this)}
                  variant="primary" size="lg">
                  Add
                  </Button>
                <Button onClick={this.toggle2.bind(this)} variant="secondary" size="lg">
                  Exit
                  </Button>

              </Form>
            </Col>
          </Col>
       
        </Row>
      </Container>
    );
  }
}

export default PageTwo;