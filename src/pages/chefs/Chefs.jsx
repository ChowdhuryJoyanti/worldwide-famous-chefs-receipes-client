import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Chefs = ({chef}) => {
    const{chef_name,chef_experience_years,chef_num_recipes,chef_likes,chefs_image} = chef;
    return (
        <div>
             <Container>
           
            <CardGroup className="lg=2 ps-3">
               
                <Card className='mt-5'>
                    <Card.Img variant="top" src={chef.chefs_image} />
                    <Card.Body>
                        <Card.Title>{chef.chef_name}</Card.Title>
                        <p>Experience:{chef_experience_years}</p>
                        <p>Likes:{chef_likes}</p>
                        <p>Number of Recipe:{chef_num_recipes}</p>
                        <Link to=""><Button variant="warning">View Details</Button></Link>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className='mt-5 ps-3'>
                    <Card.Img variant="top" src={chef.chefs_image} />
                    <Card.Body>
                        <Card.Title>{chef.chef_name}</Card.Title>
                        <p>Experience:{chef_experience_years}</p>
                        <p>Likes:{chef_likes}</p>
                        <p>Number of Recipe:{chef_num_recipes}</p>
                        <Button variant="warning">View Details</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card className='mt-5 ps-3'>
                    <Card.Img variant="top" src={chef.chefs_image}/>
                    <Card.Body>
                        <Card.Title>{chef.chef_name}</Card.Title>
                        <p>Experience:{chef_experience_years}</p>
                        <p>Likes:{chef_likes}</p>
                        <p>Number of Recipe:{chef_num_recipes}</p>
                        <Button variant="warning">View Details</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
       
        </Container>
        </div>
    );
};

export default Chefs;