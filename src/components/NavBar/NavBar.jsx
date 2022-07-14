import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

import "./NavBar.scss";

function NavBar() {
  return (
    <div className="containerNav">
      <Navbar className="nav1" expand="lg">
        <Container className="container" fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 links"
              style={{ maxHeight: "500px" }}
              navbarScroll
            >
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#work">Work</a>
              <a href="#contact">Contact</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*      
      <nav className="nav1">
       <ul >
         <li><a href=""> Home</a></li>
         <li><a href=""> About</a></li>
         <li><a href=""> Skills</a></li>
         <li><a href=""> Works</a></li>
         <li><a href=""> Contact</a></li>
       </ul>
     </nav>  */}
    </div>
  );
}

export default NavBar;
