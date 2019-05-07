import React from "react";
import "./style.css";
import { ButtonToolbar, Button } from "react-bootstrap";

function Footer (props)  {
    return (
        <div className="footer d-flex justify-content-center">
            <ButtonToolbar>
                <Button variant="outline-secondary">Primary</Button>
            </ButtonToolbar>
      </div>
    ) 
}


export default Footer;