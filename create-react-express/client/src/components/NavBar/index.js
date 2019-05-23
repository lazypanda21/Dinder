import React from "react";
import { Nav } from "react-bootstrap";
import"./nav.css";

function NavBar() {
  return (
    <Nav
      activeKey="/home"
      //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      className="NavBar"
    >
      <Nav.Item >
        <Nav.Link className="logo"href="/">Dinder<i className="fas fa-bone fa-sm"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/dogs" href='/dogs'>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/search" href='/search'>Search <i class="fas fa-search"></i></Nav.Link>
      </Nav.Item>
      
      
    </Nav>
  );
}

export default NavBar;
