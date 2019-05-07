import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Navbar = props => (
  <div className="navbar">
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Chat History</Nav.Link>
      <Nav.Link eventKey="link-1">My Dogs</Nav.Link>
      <Nav.Link eventKey="link-2">Misc</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
    </Nav.Link>
</Nav>
  </div>
);

export default Navbar;