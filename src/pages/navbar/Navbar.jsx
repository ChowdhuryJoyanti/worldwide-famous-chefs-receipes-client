import React, { useContext } from 'react';
import { Navbar,Nav,Container, Button, NavLink, } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaBeer, FaUserCircle, FaUserGraduate } from 'react-icons/fa';
import { Link  } from 'react-router-dom';
import img from '../../assets/user-2.png'
import './Navbar.css'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Tooltip from 'react-bootstrap/Tooltip';

// import ReactTooltip from 'react-tooltip';


const NavBar = () => {
      

      // const renderTooltip = (props) => (
      //   <Tooltip id="button-tooltip" {...props}>
      //     Simple tooltip
      //   </Tooltip>
      // );


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
          <Nav defaultActiveKey="/home" className="mx-auto">
            {/* <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink> */}

             <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link> 
           
          </Nav>
          <Nav>
            {user&&
              <Nav.Link href="">
              {/* <FaUserCircle style={{fontSize:'2rem'}}><img className='' src={img} alt="" srcset="" /></FaUserCircle></Nav.Link> */}
              <img className='image' style={{fontSize:'2rem'}} src={img} alt="" srcset="" /></Nav.Link>
            
            //  <img className='image' style={{fontSize:'2rem'}} src={img} alt="" srcset="" /></Nav.Link>? <ReactTooltip /> :''
      




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
         








{/* 
function TriggerExample() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
  );
}

export default TriggerExample; */}
        </Container>
    );
};

export default NavBar;