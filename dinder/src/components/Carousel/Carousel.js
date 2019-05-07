import React from "react";
import "./style.css";
import { Carousel } from "react-bootstrap";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
 function Show(props) {
    return  (
    <Carousel>
        <Carousel.Item>
            <img className="dog" src={require("../../images/mercury.jpg")}  alt="First slide"/>
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Third slide"/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default Show;