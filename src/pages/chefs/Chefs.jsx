import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useNavigate } from 'react-router-dom';
import './Chefs.css'

import LazyLoad from 'react-lazyload';








const Chefs = ({ chef }) => {
  const { _id, chef_name, chef_experience_years, chef_num_recipes, chef_likes, chefs_image } = chef;
  // const navigate = useNavigate();
  return (
    <div>
    <Container>

      <div className='chefs-container card'>
        <div className='row'>
          <div className='col'>
        {/* <LazyLoad offset={100} once> <img className='chefs-image' src={chef.chefs_image}  alt="Lazy Loaded Image" /></LazyLoad> */}
        <LazyLoad >
        <img className='chefs-image' src={chef.chefs_image}  alt="" />
        </LazyLoad>
            <h2>{chef.chef_name}</h2>
            <p>Experience:{chef_experience_years}</p>
            <p>Likes:{chef_likes}</p>
            <p>Number of Recipe:{chef_num_recipes}</p>
            <Link to={`/details/${_id}`}><Button variant="warning">View Recipe</Button></Link>

          </div>

        </div>
      </div>

    </Container>


  
    </div>
  );
};

export default Chefs;