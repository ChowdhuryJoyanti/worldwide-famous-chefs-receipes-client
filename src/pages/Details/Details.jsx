import React, { useEffect, useState } from 'react';
import Chefs from '../chefs/Chefs';
import { Container } from 'react-bootstrap';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [chefsRecipe,setChefsRecipe] = useState(null);
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
       fetch(`https://worldwide-famous-chefs-receipes-server-chowdhuryjoyanti.vercel.app/chef/${id}`)
        .then( res => res.json())
        // .then(data => console.log(data))
        .then(data => setChefsRecipe(data))
        // console.log(chefsRecipe);

    },[])
        // console.log(chefsRecipe);
    return (
        <div>
           
            <Container>
            
            <div className='chefs-container'>
                <div className=" row chef-container">
                    <p>{chefsRecipe?.chef_name}</p>
                  <img src={chefsRecipe?.chef_img} alt="" />
                {
                    chefsRecipe?.recipes.map(chefRecipe => <ChefsDetails
                                key={chefRecipe?._id}
                                chefRecipe={chefRecipe}
                    
                    
                    ></ChefsDetails> )
    
                }
                </div>
    
            </div>
              
        
            </Container>
        </div>
    );
};





export default Details;