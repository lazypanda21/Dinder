import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function Show() {
  return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://i66.tinypic.com/dmcg9z.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Meet Jasper!</h3>
            <p>Located in St.Paul</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://i67.tinypic.com/4tlix3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Meet Tucker</h3>
            <p>Located in Blaine</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://i67.tinypic.com/2is7ggo.jpg"
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