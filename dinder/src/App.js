import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Show from "./components/Carousel";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";



class App extends Component {
  state = {
  };

render() {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col><Show></Show></Col>
        </Row>
        <Row>
          <Col><Navbar></Navbar></Col>
          <Col>Main message goes here</Col>
          <Col><Chat></Chat></Col>
        </Row>
        <Row>
          <Col>
            <Footer></Footer>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
}

export default App;
