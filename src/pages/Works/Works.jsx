import React from 'react';
import img from '../../assets/shutterstock_249733285-300x300.jpeg'
import img2 from '../../assets/shutterstock_249733285-300x300.jpeg'
import img3 from '../../assets/shutterstock_249733285-300x300.jpeg'
import { Container } from 'react-bootstrap';
import "./Works.css"

const Works = () => {
    return (
        <Container>
            <h3 className='text-center mt-5 '> Our works</h3>
            <div className='works-image'>
                <img  className='ps-5 w-img' src={img} alt="" />
                <img className='ps-5 w-img' src={img3} alt="" />
                <img  className='ps-5 w-img'src={img2} alt="" />
                   
            </div>
        </Container>
    );
};

export default Works;