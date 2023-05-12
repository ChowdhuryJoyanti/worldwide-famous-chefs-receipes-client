import React, { useEffect, useState } from 'react';
import Chefs from '../chefs/Chefs';
import { Button, Container, Toast } from 'react-bootstrap';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
import { useParams } from 'react-router-dom';
import "./Details.css"
import Card from 'react-bootstrap/Card';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const [chefsRecipe, setChefsRecipe] = useState(null);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`https://worldwide-famous-chefs-receipes-server-chowdhuryjoyanti.vercel.app/chef/${id}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setChefsRecipe(data))
        // console.log(chefsRecipe);

    }, [])
    // console.log(chefsRecipe);




    const handleFavorite = () =>{
        
        toast('Selected Favorite'); // Show the toast message
   
    }
    return (
        <div>

            <Container>

                {/* <div className='chefs-container'>
                    <div className="row chef-container">
                        <div className="">
                            <div className='d-flex chefs-details'>
                                <img className='image-fluid chef-img' src={chefsRecipe?.chefs_image} alt="" />
                                <div className='chef-details'>
                                    <h2>{chefsRecipe?.chef_name}</h2>
                                    <h4>Experience:{chefsRecipe?.chef_experience_years}</h4>
                                    <h4>Likes:{chefsRecipe?.chef_likes}</h4>
                                    <h4>Number of Recipe:{chefsRecipe?.chef_num_recipes}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <>
                    <Card className='d-flex text-center'>
                        <Card.Img variant="top" className='image-fluid chef-img' src={chefsRecipe?.chefs_image} alt="" />
                        <Card.Body>
                            <Card.Text className='text-center'>
                                <h2>{chefsRecipe?.chef_name}</h2>
                                <h4>Experience:{chefsRecipe?.chef_experience_years}</h4>
                                <h4>Likes:{chefsRecipe?.chef_likes}</h4>
                                <h4>Number of Recipe:{chefsRecipe?.chef_num_recipes}</h4>
                            </Card.Text>
                            <div>
                            <Button variant="info" onClick={handleFavorite}>Favorite</Button>
                            <ToastContainer /> {/* Render the toast container */}
                            </div>
                        </Card.Body>
                    </Card>

                </>


            </Container>
            <Container>

                {
                    chefsRecipe?.recipes.map(chefRecipe => <ChefsDetails
                        key={chefRecipe?._id}
                        chefRecipe={chefRecipe}


                    ></ChefsDetails>)

                }
            </Container>
        </div>
    );
};





export default Details;