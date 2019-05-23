import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./style.css";

function AddDog() {
    return (

        <Col>
            <h2>Add Dog</h2>
            <Form>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Dog Name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Breed" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Gender" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Age" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Weight" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Image (URL)" />
                </Form.Group>
                

                    <Button variant="primary" size="lg">
                        Add
                  </Button>
                    <Button variant="secondary" size="lg">
                        Exit
                  </Button>

            </Form>
        </Col>
    );
}

export default AddDog;
