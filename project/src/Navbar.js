import React from "react";
// import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
    return(
        <>
        <Navbar1 bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Fawara</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Service">Service</Nav.Link>
            <Nav.Link href="/Details">Details</Nav.Link>
          </Nav>
        </Container>
      </Navbar1>
        </>
    );
}

export default Navbar1;
