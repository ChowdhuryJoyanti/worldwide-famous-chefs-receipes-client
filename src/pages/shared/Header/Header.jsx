import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../../../assets/home-banner2.jpg'
import slider2 from '../../../assets/home-banner3.jpg'
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
          
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Food slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Food slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Food slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Container>
    );
};

export default Header;