import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function Show() {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Meet Jasper!</h3>
            <p>Located in : St.Paul</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Meet Tucker</h3>
            <p>Located in : Blaine</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Meet Ben</h3>
            <p>Located in Woodbery</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Show;