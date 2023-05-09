import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/error.png";
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
    return (
        <Container className='text-center'>
            <img className='img-fluid' src={image} alt="" />
           <p>Go to Home <Link to='/'>Home</Link></p>
        </Container>
    );
};

export default ErrorPage;