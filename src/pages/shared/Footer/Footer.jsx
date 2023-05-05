import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-light'>
            <h3>this is footer</h3>
            <Link to="/">Home</Link>
            <Link to="/details">Details</Link>
            <Link to="/login">Log in</Link>
            <Link to="/register">Contact Us</Link>

        </div>
    );
};

export default Footer;