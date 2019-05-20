import React, { Component } from "react";
import Show from "../components/Show";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "./PageTwo.css";
import { Input, FormBtn } from "../components/Form";
import { Form,Button } from "react-bootstrap";
import API from "../utils/API";


class Search extends Component {

constructor(props, context) {
    super(props, context);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    
   
    this.state = {
      show: false,
      UserName: sessionStorage.getItem("user"),
      doginfo: [],
      searchby:"",
      searchitem:""
    };
  }

 
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    if (this.state.searchby && this.state.searchitem) {
      switch (this.state.searchby){
        case 'breed' :
            API.searchDogByBreed({
              Breed : this.state.searchitem
            })
              .then(res => this.setState({doginfo:res.data}))
              .catch(err => console.log(err));
            break;
        case 'gender' :
            API.searchDogByGender({
              Gender : this.state.searchitem
            })
              .then(res => this.setState({doginfo:res.data}))
              .catch(err => console.log(err));
            break;
        case 'age' :
            API.searchDogByAge({
              Age : this.state.searchitem
            })
              .then(res => this.setState({doginfo:res.data}))
              .catch(err => console.log(err));
            break;
        case 'name' :
            API.searchDogByName({
              DogName : this.state.searchitem
            })
              .then(res => this.setState({doginfo:res.data}))
              .catch(err => console.log(err));
            break;
        case 'weight' :
            API.searchDogByWeight({
              Weight : this.state.searchitem
            })
              .then(res => this.setState({doginfo:res.data}))
              .catch(err => console.log(err));
            break;
        default:
            API.getDogs()
              .then(res => this.setState({doginfo:res.data}))
              .catch(err => console.log(err));
            
      }
    }
  };

  



  

  render() {
    return (
      <Container>
        <NavBar></NavBar>
        <Show></Show>
        
          <Col>
          <h2>Hellow, {sessionStorage.getItem("user")}</h2>

            <Form id ="searchfordog">
            <Input
                value={this.state.searchby}
                onChange={this.handleInputChange}
                name="searchby"
                placeholder="Search by breed, age, name or weight"
              />

              <Input
                value={this.state.searchitem}
                onChange={this.handleInputChange}
                name="searchcriteria"
                placeholder="search criteria"
              />
               
              <Button 
              disabled={!(this.state.searchby && this.state.searchitem)}
              onClick={this.handleSearchSubmit.bind(this)}
              variant="primary" size="lg">
                    Search
              </Button>

            </Form>

            </Col>
           
            <Row>
            <ul>
                <li>User:{sessionStorage.getItem("user")}</li>
                
                
            </ul>
            
        
        </Row>
      </Container>
    );
  }
};

export default Search;