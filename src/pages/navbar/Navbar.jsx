import React, { useContext } from 'react';
import { Navbar,Nav,Container, Button } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaBeer, FaUserCircle, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {


  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => console.log(error))
  }
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
         
            <Nav.Link href="/blog">Blog</Nav.Link>
           
          </Nav>
          <Nav>
            {user&&
              <Nav.Link href="/profile">
              <FaUserCircle style={{fontSize:'4.rem'}}></FaUserCircle></Nav.Link>
            }
            <Nav.Link>
            {user ?
              <Button onClick={handleLogOut} variant="info" href='/login'>Logout</Button>:
              <Link to="/login">           
                 <Button variant="info" href='/login'>Login</Button>
              </Link>
            }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default NavBar;