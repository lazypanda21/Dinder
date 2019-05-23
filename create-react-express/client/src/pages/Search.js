import React, { Component } from "react";
import Show from "../components/Show";
import NavBar from "../components/NavBar";
import { Container, Row, Col,Card} from "react-bootstrap";
import "./PageTwo.css";
import { Input } from "../components/Form";
import { Form,Button } from "react-bootstrap";
import API from "../utils/API";




class Search extends Component {


    //this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    
   
    state = {
      show: false,
      UserName: sessionStorage.getItem("user"),
      doginfo:[],
      searchby:"",
      searchfor:"",
    };

  componentDidMount(){
    this.handleSearchSubmit();
  }
 
  handleSearchSubmit = () => {
    if (this.state.searchby && this.state.searchfor) {
      API.searchDogByGender(
              this.state.searchby,
              this.state.searchfor
            )
              .then(res => this.setState({doginfo : res.data}, function(){
                console.log(this.state.doginfo);
              }))
              .catch(err => console.log(err))
            }
          };
        //  console.log(res.data[0])
         // this.setState({doginfo : res.data[0]})
        
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
          <h2>Hello, {sessionStorage.getItem("user")}</h2>

            <Form id ="searchfordog">
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Search By...</Form.Label>
                <Form.Control as="select"
                  value={this.state.searchby}
                  onChange={this.handleInputChange1}
                  name="searchby">
                  <option>select one</option>
                  <option>Breed</option>
                  <option>Gender</option>
                  <option>DogName</option>
                  <option>Age</option>
                  <option>Weight</option>
                </Form.Control>
              </Form.Group>

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
              
            <br></br>
              <h3>Search Results</h3>
              </Row>
            <Row>
            
              
                {this.state.doginfo.map(dog =>(

                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src = {dog.Image} />
                    <Card.Body>
                      <Card.Title>{dog.DogName}</Card.Title>
                      <ul>
                      <li>Breed : {dog.Breed}</li>
                      <li>Gender : {dog.Gender}</li>
                     <li>Age : {dog.Age} yr old</li>
                      <li>Weight : {dog.Weight} KG </li>
                      </ul>
                      <Button variant="primary">Add to my list</Button>
                    </Card.Body>
                    </Card>
                    // <ul>
                    //   <li>DogName : {dog.DogName}</li>
                    //   <li>Breed : {dog.Breed}</li>
                    //   <li>Gender : {dog.Gender}</li>
                    //   <li>Age : {dog.Age} yr old</li>
                    //   <li>Weight : {dog.Weight} KG </li>
                    // </ul>
                ))}
              
          
              </Row>
          

        
      </Container>
    );
  }
};

export default Search;