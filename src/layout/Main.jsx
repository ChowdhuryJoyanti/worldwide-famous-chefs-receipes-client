import React from 'react';


import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';

import NavBar from '../pages/navbar/Navbar';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';
import Blog from '../pages/Blog/Blog';
import Works from '../pages/Works/Works';
import Faq from '../pages/Faq/Faq';

const Main = () => {
    return (

        <Container>
            <NavBar></NavBar>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            {/* <Works></Works>
            <Faq></Faq> */}
            <Footer></Footer>
            <PDFViewer>
                <Blog></Blog>
            </PDFViewer>
            

        </Container>
    );
};

export default Main;