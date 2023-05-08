import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './Chefs.css'



const Chefs = ({chef}) => {
    const{chef_name,chef_experience_years,chef_num_recipes,chef_likes,chefs_image} = chef;
    return (
        <div>
             <Container>
           
            {/* <CardGroup className="lg=2 ps-3">
               
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
 */}




   {/* <Row xs={1} md={2} lg={3} className="g-4">
      
        <Col>
          <Card>
            <Card.Img variant="top" src={chef.chefs_image} />
            <Card.Body>
              <Card.Title>{chef.chef_name}</Card.Title>
                        <p>Experience:{chef_experience_years}</p>
                        <p>Likes:{chef_likes}</p>
                        <p>Number of Recipe:{chef_num_recipes}</p>
                        <Link to=""><Button variant="warning">View Details</Button></Link>

             <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text> 
            </Card.Body>
          </Card>
        </Col>
 
    </Row>  */}


      
       <div className='chefs-container card'>
           <div className='row'>
                <div className='col'>
                <img className='chefs-image' src={chef.chefs_image}/>
                 <h2>{chef.chef_name}</h2>
                <p>Experience:{chef_experience_years}</p>
                        <p>Likes:{chef_likes}</p>
                        <p>Number of Recipe:{chef_num_recipes}</p>
                        <Link to=""><Button variant="warning">View Details</Button></Link>

                </div>

           </div>
        </div>
     



{/*         
 <div className="card-group">
  <div className="card">
    <img src={chef.chefs_image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{chef.chef_name}</h5>
      <p>Likes:{chef_likes}</p>
      <p>Number of Recipe:{chef_num_recipes}</p>
                        <Link to=""><Button variant="warning">View Details</Button></Link>

    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src={chef.chefs_image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{chef.chef_name}</h5>
      <p>Likes:{chef_likes}</p>
      <p>Number of Recipe:{chef_num_recipes}</p>
                        <Link to=""><Button variant="warning">View Details</Button></Link>

    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src={chef.chefs_image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{chef.chef_name}</h5>
      <p>Likes:{chef_likes}</p>
      <p>Number of Recipe:{chef_num_recipes}</p>
                        <Link to=""><Button variant="warning">View Details</Button></Link>

    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>

</div>  */}




            
       
        </Container>
        </div>
    );
};

export default Chefs;