import React from 'react';
import { Navbar,Nav,Container, Button } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Container className='mb-5'>
            <h3 className='text-center text-warning -fw-bold'>Food Delicious</h3>
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='text-warning fw-bold'>Food <span className='text-info'>Delicious</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/details">Details</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link>
            <Button variant="info" href='/login'>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavBar;