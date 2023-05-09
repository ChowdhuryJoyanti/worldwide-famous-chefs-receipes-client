import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Footer = () => {
    return (
        <Container className=''>
            {/* <div className='footer-container text-light border bg-light'>
           
                    <Link className='footer-link bg-info' to="/">Home</Link>
                    <Link className='footer-link bg-info' to="/details">Details</Link>
                    <Link className='footer-link bg-info' to="/login">Log in</Link>
                    <Link className='footer-link bg-info' to="/register">Contact Us</Link>
      
            </div> */}



{/* <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div> */}
 <Card className="text-center mt-5">
      <Card.Header>Connect With us</Card.Header>
      <Card.Body>
        <Card.Title>This is the Resturent of Delicious Food</Card.Title>
        <Card.Text>
        
          <Link className='footer-link bg-info' to="/">Home</Link>
                    <Link className='footer-link bg-info' to="/details">Details</Link>
                    <Link className='footer-link bg-info' to="/login">Log in</Link>
                    <Link className='footer-link bg-info' to="/register">Contact Us</Link>
      
        </Card.Text>
            <Link to="/register">   <Button variant="info">Register</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">Copyrights of terms and Conditions 2023</Card.Footer>
    </Card>


        </Container>
    );
};

export default Footer;