import React from "react";



import "./NavBar.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";



function NavBar() {


  return (


    <div className="containerNav">

<Navbar className="nav1" expand="lg">
      <Container className="container"  fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
                       <Nav.Link>Home</Nav.Link>
                       <Nav.Link>About</Nav.Link>
                       <Nav.Link>Skills</Nav.Link>
                       <Nav.Link>Work</Nav.Link>
                       <Nav.Link>Contact</Nav.Link>
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
