import React, { Component } from "react";
import Show from "../components/Show";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "./PageTwo.css";
import { Input, FormBtn } from "../components/Form";
import { Form,Button } from "react-bootstrap";
import API from "../utils/API";
import { throws } from "assert";


class Search extends Component {

constructor(props, context) {
    super(props, context);
    
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    
   
    this.state = {
      show: false,
      UserName: sessionStorage.getItem("user"),
      doginfo: [],
      searchby:"",
      searchfor:"",
    };
  }

 
  
 
  handleSearchSubmit = event => {
    event.preventDefault();
   
    if (this.state.searchby && this.state.searchfor) {
      API.searchDogByGender(
              this.state.searchby,
              this.state.searchfor
            )
              .then(res => console.log(res.data))
              .catch(err => console.log(err));
      // switch (this.state.searchby){
      //   case 'breed' :
          
      //       API.searchDogByBreed(this.state.searchfor)
      //         .then(res => console.log(res.data))
      //         .catch(err => console.log(err));
      //       break;
      //   case 'gender' :
      //       //console.log("hdhdhdhdhdhdhd",this.state.searchby,this.state.searchfor);
      //       API.searchDogByGender(
      //         this.state.searchby,
      //         this.state.searchfor
      //       )
      //         .then(res => console.log(res.data))
      //         .catch(err => console.log(err));
      //       break;
      //   case 'age' :
      //       API.searchDogByAge({
      //         Age : this.state.searchfor
      //       })
      //         .then(res => this.setState({doginfo:res.data}))
      //         .catch(err => console.log(err));
      //       break;
      //   case 'name' :
      //       API.searchDogByName({
      //         DogName : this.state.searchfor
      //       })
      //         .then(res => this.setState({doginfo:res.data}))
      //         .catch(err => console.log(err));
      //       break;
      //   case 'weight' :
      //       API.searchDogByWeight({
      //         Weight : this.state.searchfor
      //       })
      //         .then(res => this.setState({doginfo:res.data}))
      //         .catch(err => console.log(err));
      //       break;
      //   default:
      //       API.getDogs()
      //         .then(res => this.setState({doginfo:res.data}))
      //         .catch(err => console.log(err));
            
      // }
    }
  };

  


  handleInputChange1 = event => {
   // console.log(event.target.value)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleInputChange2 = event => {
  //   console.log(event.target.value)
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  

  render() {
    return (
      <Container>
        <NavBar></NavBar>
        <Show></Show>
        <Row>
          <Col>
          <h2>Hellow, {sessionStorage.getItem("user")}</h2>

            <Form id ="searchfordog">
            <Input
                value={this.state.searchby}
                onChange={this.handleInputChange1}
                name="searchby"
                placeholder="Search by gender,breed, age, name or weight"
              />

              <Input
                value={this.state.searchfor}
                onChange={this.handleInputChange1}
                name="searchfor"
                placeholder="search"
              />
               
              <Button 
              disabled={!(this.state.searchby && this.state.searchfor)}
              onClick={this.handleSearchSubmit.bind(this)}
              variant="primary" size="lg">
                    Search
              </Button>
            </Form>
            </Col>
            </Row>
            <Row>
            <ul>
                <li>User:{sessionStorage.getItem("user")}</li>
                <li>Dog info:{this.state.doginfo}</li>
            </ul>
            
        </Row>
      </Container>
    );
  }
};

export default Search;