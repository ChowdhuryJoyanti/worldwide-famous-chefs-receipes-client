import React from 'react';
import "./ChefsDetails.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ChefsDetails = ({ chefRecipe }) => {
    // const{_id,chef_name,chef_experience_years,chef_num_recipes,chef_likes,chefs_image,chefs_description} = chefRecipe;
    const { recipe_name, recipe_description, recipe_img_url, cooking_method,
        ingredients, num_reviews, rating, recipe_likes } = chefRecipe;





    console.log(chefRecipe);

    return (


        <div className='container-chefs-details'>
            {/* 
            <img className='details-image' src={recipe_img_url} alt="" />
            <h4>{recipe_name}</h4>
            <p>{recipe_description}</p>
            <p>{cooking_method}</p>
            <p>{ingredients}</p>
            <p>{num_reviews}</p>
            <p>{rating}</p>
            <p>{recipe_likes}</p> */}

            <Row xs={1} md={3} lg={1} className="g-4">
                {/* {Array.from({ length: 1 }).map((_, idx) => ( */}
                <Col>
                    <Card className='d-flex'>
                      <Card.Img variant="top" className='details-image' src={recipe_img_url} />
                           <div>
                           <Card.Text className='text-center'>
                                <h4>Recipe Name:{recipe_name}</h4>
                                <p>Recipe-Description:{recipe_description}</p>
                                <p> Cooking-Method:{cooking_method}</p>
                                <p>Ingredients:{ingredients}</p>
                                <p>Number of Reviews:{num_reviews}</p>
                                <p>Rating:{rating}</p>
                                <p> Number of Likes:{recipe_likes}</p>
                            </Card.Text>
                   
                           </div>
                    </Card>
                </Col>
                {/* ))} */}
            </Row>









            {/* <h2>{chef_name}</h2>
            <p>Experience:{chef_experience_years}</p>
            <p>Likes:{chef_likes} </p> 
            <p>Number of Recipe: {chef_num_recipes} </p> 
            <p>Description:{chefs_description} </p> 
            <p> </p>  */}


        </div>
    );
};

export default ChefsDetails;