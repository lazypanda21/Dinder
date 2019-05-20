import React from "react";
import { Nav } from "react-bootstrap";
import"./nav.css";

function NavBar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      className="NavBar"
    >
      <Nav.Item >
        <Nav.Link className="logo"href="/home">Dinder<i className="fas fa-bone fa-sm"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/search">Search</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Update Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Create a Dog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Start a Chat</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default NavBar;
