import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "./style.css";

function UpdateUser() {
    return (

        <Col>
            <h2>Update Profile</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="User Name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Contact" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Location" />
                </Form.Group>

                    <Button variant="primary" size="lg">
                        Update
                  </Button>
                    <Button variant="secondary" size="lg">
                        Exit
                  </Button>

            </Form>
        </Col>
    );
}

export default UpdateUser;
