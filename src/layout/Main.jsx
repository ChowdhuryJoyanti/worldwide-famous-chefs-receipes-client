import React from 'react';


import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';

import NavBar from '../pages/navbar/Navbar';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;